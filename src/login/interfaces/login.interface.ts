import { Document } from 'mongoose';

export interface Login extends Document {
  
  readonly username: string;
  readonly password: string;
  readonly fullname: string;
  readonly lastname: string;
}