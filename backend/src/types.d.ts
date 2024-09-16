/// <reference types="express" />
/// <reference types="mongoose" />

import { IUser } from './models/User';

declare global {
  namespace Express {
    interface Request {
      user?: IUser | null;
    }
  }
}

