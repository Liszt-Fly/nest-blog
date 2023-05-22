import { Controller, Get } from '@nestjs/common'
import { TestService } from '../test/test.service'

@Controller('hd')
export class HdController {
	constructor(private readonly test: TestService) { }
	@Get()
	show() {
		return "Hd show method" + this.test.get()
	}
}
