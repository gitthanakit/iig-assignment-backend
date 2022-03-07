import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginService } from './login.service';
@ApiTags('IIG')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Delete(':username')
  remove(@Param('username') username: string) {
    return this.loginService.remove(username);
  }

  @Put(':username')
  update(
    @Param('username') username: string,
    @Body() createLoginDto: CreateLoginDto,
  ) {
    return this.loginService.update(username, createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  }

  @Get(':username')
  async findusername(@Param('username') username: string) {
    return await this.loginService.findusername(username);
  }
}
