import { Module } from '@nestjs/common'
import dotenv from "dotenv"
import { join } from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configService } from './config.service'
import { DbService } from './db.service'
import { HdModule } from './hd/hd.module'
import { TestModule } from './test/test.module'
dotenv.config({ path: join(__dirname, "../.env") })
//使用装饰器来进行功能增强
@Module({
	imports: [HdModule, TestModule],
	controllers: [AppController],
	providers: [AppService, configService,
		{
			provide: "DbService",
			inject: ['ConfigService'],
			useFactory: async (configService) => {
				return new Promise(r => {
					setTimeout(() => {
						r("后盾人")
					}, 3000)
				})

			}
		}
	],
})
export class AppModule { }
