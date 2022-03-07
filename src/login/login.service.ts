import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { Login } from './interfaces/login.interface';

@Injectable()
export class LoginService {
  constructor(
    @Inject('LOGIN_MODEL')
    private loginModel: Model<Login>,
  ) {}

  async create(createLoginDto: CreateLoginDto): Promise<Login> {
    const createdLogin = new this.loginModel(createLoginDto);
    return createdLogin.save();
  }

  remove(username: string) {
    const RemoveLogin = this.loginModel.findOne({ username: username });
    return RemoveLogin.remove();
  }

  update(username: string, UpdateLogin: CreateLoginDto) {
    const Searchusername = this.loginModel.findOne({ username: username });
    return Searchusername.update(UpdateLogin);
  }

  async findusername(username: string): Promise<Login> {
    return await this.loginModel.findOne({
      username,
    });
  }

  async findAll(): Promise<Login[]> {
    return this.loginModel.find().exec();
  }
}
