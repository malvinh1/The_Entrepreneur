import { QueryResult } from 'pg';

import { getDB } from '../db';
import { CreateForum } from '../types';

async function newForum(forumObject: CreateForum) {
    let db = await getDB();

    let {
        forum_name,
        category,
        date,
        description,
        image,
        likes,
    } = forumObject;

    let values = [
        forum_name,
        category,
        date,
        description,
        image,
        likes,
    ];

    let result: QueryResult = await db.query(
        'INSERT INTO forums (forum_name, category, date, description, image, likes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        values,
    );

    let forum = result.rows[0];

    return {
        success: true,
        data: {
            id: forum.id,
            event_name: forum.forum_name,
            category: forum.category,
            date: forum.date,
            description: forum.description,
            image: forum.image,
            likes: forum.likes,
        },
        message: 'Forum created successfully',
    };
}

export default { newForum };