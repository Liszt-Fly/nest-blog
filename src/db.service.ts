import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class DbService {
	constructor(
		private readonly options: Record<string, any>) { }

	public connect() {
		return `<h1>连接数据库</h1>-${this.options.url}`
	}
}
