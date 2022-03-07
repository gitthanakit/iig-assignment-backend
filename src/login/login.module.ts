import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { LoginController } from './login.controller';
import { loginProviders } from './login.providers';
import { LoginService } from './login.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LoginController],
  providers: [
    LoginService,
    ...loginProviders,
  ],
})
export class LoginModule {}