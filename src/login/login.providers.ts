import { Connection } from 'mongoose';
import { LoginSchema } from './schemas/login.schema';

export const loginProviders = [
  {
    provide: 'LOGIN_MODEL',
    useFactory: (connection: Connection) => connection.model('Login', LoginSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];