import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  lastname: String,

});
