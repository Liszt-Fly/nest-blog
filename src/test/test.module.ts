import { Module } from '@nestjs/common'
import { TestService } from './test.service'

@Module({
	providers: [TestService, {
		provide: "test",
		useValue: "测试的test服务"
	}],
	exports: [TestService]
})
export class TestModule {

}
