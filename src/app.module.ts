import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
//使用装饰器来进行功能增强
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
