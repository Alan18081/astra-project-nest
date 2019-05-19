import {Global, Module} from '@nestjs/common';
import {ConfigService} from '@store/common';

const providers = [
    {
        provide: ConfigService,
        useValue: new ConfigService(`${process.env.NODE_ENV}.env`)
    }
];

@Module({
    providers: [...providers],
    exports: [...providers]
})
export class CoreModule {}