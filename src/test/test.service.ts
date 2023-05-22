import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
	get() {
		return `Test Servic get methods`
	}
}
