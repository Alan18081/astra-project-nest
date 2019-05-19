import {Global, Module} from '@nestjs/common';
import {UsersModule} from './components/users/users.module';
import {MongooseModule} from '@nestjs/mongoose';
import {ConfigService} from '@store/common';
import {join} from 'path';
import {CoreModule} from './components/core/core.module';

@Global()
@Module({
  imports: [
      CoreModule,
      MongooseModule.forRootAsync({
          useFactory: (configService: ConfigService) => ({
              uri: configService.get('DB_URL'),
          }),
          inject: [ConfigService]
      }),
      UsersModule,
  ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {}
