import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode, HttpStatus, NotFoundException, OnModuleInit,
    Param, ParseIntPipe,
    Post,
    Put,
    Query,
    UseFilters,
    UseGuards,
} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
// import {CreateUserDto, FindUsersListDto} from '@astra/common/dto';
// import {ApiExceptionFilter} from '../../helpers/filters/api.filter';
// import {ReqUser} from '../../helpers/decorators/user.decorator';
// import { AdminGuard } from '../../helpers/guards/admin.guard';
import {UsersService} from './users.service';
import {CreateUserCommand} from '@store/common/commands';

@Controller('users')
// @UseFilters(ApiExceptionFilter)
@ApiUseTags('Users')
export class UsersCommandsController {

  constructor(private readonly usersService: UsersService) {}

  //
  // @Get('')
  // @UseGuards(AuthGuard('jwt'), AdminGuard)
  // @ApiOperation({ title: 'Find list of users' })
  // findMany(@Query() dto: FindUsersListDto): Promise<IUser[]> {
  //   return this.usersService.findMany(dto);
  // }

  // @Get('profile')
  // @UseGuards(AuthGuard('jwt'))
  // @ApiOperation({ title: 'Find user by token' })
  // findProfile(@ReqUser() user: IUser): Promise<IUser | undefined> {
  //   return this.usersService.findOne({ id: user.id });
  // }
  //
  // @Get(':id')
  // @UseGuards(AuthGuard('jwt'), AdminGuard)
  // @ApiOperation({ title: 'Find user by id' })
  // async findOne(@Param('id') id: number): Promise<IUser | undefined> {
  //   const user = await this.usersService.findOne({ id });
  //   if (!user) {
  //     throw new NotFoundException(Messages.USER_NOT_FOUND);
  //   }
  //
  //   return user;
  // }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ title: 'Create new user' })
  createOne(@Body() command: CreateUserCommand): Promise<any> {
    return this.usersService.createOne(command);
  }

  // @Put(':id')
  // @UseGuards(AuthGuard('jwt'), AdminGuard)
  // @ApiOperation({ title: 'Update user by id' })
  // updateOne(@Param('id') id: number, @Body() dto: any): Promise<IUser | undefined> {
  //   return this.usersService.updateOne({ id, ...dto });
  // }
  //
  // @Delete(':id')
  // @UseGuards(AuthGuard('jwt'), AdminGuard)
  // @ApiOperation({ title: 'Delete user by id' })
  // async removeOne(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
  //   await this.usersService.removeOne({ id });
  // }

}
