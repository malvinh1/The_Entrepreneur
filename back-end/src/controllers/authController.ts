import { Request, Response } from 'express';
import { isEmail } from 'validator';

import userModel from '../models/userModel';
import { SERVER_OK, SERVER_BAD_REQUEST } from '../constants';

async function signUp(req: Request, res: Response) {
  try {
    let { email, username, first_name, last_name, password } = req.body;

    if (!email || !username || !first_name || !last_name || !password) {
      res.status(SERVER_OK).json({
        success: false,
        data: {},
        message: 'Please fill all required fields',
      });
      return;
    }
    if (!isEmail(email)) {
      res.status(SERVER_OK).json({
        success: false,
        data: {},
        message: 'Email format is wrong',
      });
      return;
    }

    let result = await userModel.userSignUp({
      email,
      username,
      first_name,
      last_name,
      password,
    });

    res.send(result);

    return;
  } catch (e) {
    res.status(SERVER_BAD_REQUEST).json(String(e));
    return;
  }
}

async function signIn(req: Request, res: Response) {
  try {
    let { email, password } = req.body;

    let result = await userModel.userSignIn({
      email,
      password,
    });

    res.send(result);

    return;
  } catch (e) {
    res.status(SERVER_BAD_REQUEST).json(String(e));
    return;
  }
}

export default { signUp, signIn };
