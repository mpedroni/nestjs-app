import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { UserDto } from './dtos/user.dto';
import { UserService } from './users.service';
import { UserEntity } from './database/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDto })
  async create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.userService.create(user);
  }
}
