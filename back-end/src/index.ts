import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { QueryResult } from 'pg';

import { SERVER_OK, PORT } from './constants';
import apiRouter from './routers';
import { getDB } from './db';
import { cloudinaryConfig } from './cloudinarySetup';

const app: express.Application = express();

async function serverSetup() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.locals.db = await getDB();

  // query to make a function to automatically add date everytime insert a data to db
  await app.locals.db.query(
    'CREATE OR REPLACE FUNCTION trigger_set_timestamp() \
    RETURNS TRIGGER AS $$ \
    BEGIN \
      NEW.updated_at = NOW(); \
      RETURN NEW; \
    END; \
    $$ LANGUAGE plpgsql',
    (error: Error, results: QueryResult) => { },
  );

  await app.locals.db.query(
    'create table users(ID SERIAL PRIMARY KEY, email varchar(80) UNIQUE, user_role varchar(50), first_name varchar(50), last_name varchar(50), password text, avatar varchar(100), membership varchar(50), gender varchar(50))',
    (error: Error, results: QueryResult) => { },
  );

  await app.locals.db.query(
    'create table events(ID SERIAL PRIMARY KEY, event_name varchar(50) UNIQUE, category varchar(50), place varchar(50), price varchar(50), description varchar(100), available_seat int, image varchar(50))',
    (error: Error, results: QueryResult) => { },
  );

  await app.locals.db.query(
    'create table user_event(ID_user SERIAL REFERENCES users(ID), ID_event SERIAL REFERENCES events(ID), PRIMARY KEY(ID_user, ID_event))',
    (error: Error, results: QueryResult) => { },
  );

  await app.locals.db.query(
    'create table forums(ID SERIAL PRIMARY KEY, ID_user SERIAL REFERENCES users(ID), \
    cdate timestamptz not null default NOW(), udate timestamptz not null default NOW(), \
    forum_name varchar(50), category varchar(50), description varchar(100), \
    image varchar[], likes integer)',
    (error: Error, results: QueryResult) => { },
  );

  await app.locals.db.query(
    'create table comments(ID SERIAL PRIMARY KEY, ID_forum SERIAL REFERENCES forums(ID), ID_user SERIAL REFERENCES users(ID), \
    cdate timestamptz not null default NOW(), udate timestamptz not null default NOW(), \
    comment varchar(50), likes integer)',
    (error: Error, results: QueryResult) => { },
  );

  //trigger for update date on table forums
  await app.locals.db.query(
    'CREATE TRIGGER set_timestamp \
    BEFORE UPDATE ON forums \
    FOR EACH ROW \
    EXECUTE PROCEDURE trigger_set_timestamp()',
    (error: Error, results: QueryResult) => { },
  );

  //trigger for update date on table comments
  await app.locals.db.query(
    'CREATE TRIGGER set_timestamp \
    BEFORE UPDATE ON comments \
    FOR EACH ROW \
    EXECUTE PROCEDURE trigger_set_timestamp()',
    (error: Error, results: QueryResult) => { },
  );

  app.use('*', cloudinaryConfig);

  app.get('/', (req: Request, res: Response) => {
    res.status(SERVER_OK);
    res.send('Accessing Back-end Success.');
  });

  app.use('/api', apiRouter);

  app.on('listening', function () {
    console.log('server is running');
  });
  app.listen(PORT, () => {
    console.log(`App is listening on http://127.0.0.1:${PORT}`);
  });
}

serverSetup();
