import { Module } from '@nestjs/common';
import {UsersModule} from './components/users/users.module';

@Module({
  imports: [
      UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
