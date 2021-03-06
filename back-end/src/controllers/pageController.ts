import { Request, Response } from 'express';

import { SERVER_OK, SERVER_BAD_REQUEST } from '../constants';
import userModel from '../models/userModel';
import eventModel from '../models/eventModel';
import forumModel from '../models/forumModel';
import { ResponseObject } from '../types';
import commentModel from '../models/commentModel';

async function profile(req: Request, res: Response) {
  try {
    let decoded = (<any>req).decoded;

    let result = await userModel.getUserData(decoded);

    if (result.success) {
      res.status(SERVER_OK).json(result);
    } else {
      res.status(SERVER_BAD_REQUEST).json(result);
    }
  } catch (e) {
    return { success: false, data: {}, message: String(e) };
  }
}

async function home(req: Request, res: Response) {
  try {
    let decoded = (<any>req).decoded;

    let userResult: ResponseObject = await userModel.getUserData(decoded);
    let eventResult: ResponseObject = await eventModel.getEvent();
    let forumResult: ResponseObject = await forumModel.getLatestForum();

    let tempForum: any = [];

    if (userResult.success && eventResult.success) {
      if (eventResult.data.event) {
        eventResult.data.event.sort((a, b) => b.event_date - a.event_date);

        for (let i = 0; i < eventResult.data.event.length; i += 1) {
          let date = new Date(eventResult.data.event[i].event_date);
          let year = date.getFullYear();
          let month: string | number = date.getMonth() + 1;
          let dt: string | number = date.getDate();

          if (dt < 10) {
            dt = '0' + dt;
          }
          if (month < 10) {
            month = '0' + month;
          }
          eventResult.data.event[i].event_date = year + '-' + month + '-' + dt;
        }
      }
      const getData = async (item) => {
        let userResult: ResponseObject = await userModel.getUserData(
          undefined,
          item.id_user,
        );
        let commentResult: ResponseObject = await commentModel.getAllComments(
          item.id,
        );
        commentResult.data.sort((a, b) => b.date - a.date);
        item.full_name = userResult.data.full_name;
        item.latest_comment =
          commentResult.data.length !== 0 ? commentResult.data[0].comment : '';
        return item;
      };
      const getUmumData = async () => {
        return Promise.all(forumResult.data.map((item) => getData(item)));
      };
      tempForum.push(await getUmumData());
      forumResult.data = tempForum[0];

      res.status(SERVER_OK).json({
        success: true,
        data: {
          user: userResult.data,
          events: eventResult.data.event,
          forums: forumResult.data,
        },
      });
    } else {
      res.status(SERVER_BAD_REQUEST).json({
        success: false,
        data: {},
        message: userResult.message + eventResult.message,
      });
    }
  } catch (e) {
    return { success: false, data: {}, message: String(e) };
  }
}

export default { profile, home };
