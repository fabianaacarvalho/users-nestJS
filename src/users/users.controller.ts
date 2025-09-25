import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAllusers() {
    // return response.status(200).json(this.usersService.findAllUsers());
    return this.usersService.findAllUsers();
  }

  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    // const userCreated = await this.usersService.createUser(userDto)
    // return response.status(200).json(userCreated);
    return this.usersService.createUser(userDto);
  }

  //   @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
