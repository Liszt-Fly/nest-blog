import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db.service'


@Controller()
export class AppController {
	constructor(

		private readonly appService: AppService,
		@Inject("DbService")
		private readonly dbService: string
	) { }
	@Get("")
	useCommon(): string {
		return this.dbService
	}

}
