import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://testrootproject:profilelogin@cluster0.k4p8e.mongodb.net/IIGAsignment?retryWrites=true&w=majority'),
  },
];