import { Request, Response } from 'express';

import { SERVER_OK, SERVER_BAD_REQUEST } from '../constants';
import userModel from '../models/userModel';
// import forumsModel from '../models/forumsModel';

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
    res.status(SERVER_OK).json({ message: 'OK' });
    return;
  } catch (e) {
    return { success: false, data: {}, message: String(e) };
  }
}

async function forums(req: Request, res: Response) {
  console.log("FORUMS");
  try {

  } catch (e) {
    return { success: false, data: {}, message: String(e) };
  }
}

export default { profile, home, forums };
