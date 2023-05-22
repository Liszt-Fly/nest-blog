import dotenv from "dotenv"
import { join } from 'path'
import { developmentConfig } from "./config/development.config"
import { productionConfig } from "./config/production.config"
dotenv.config({ path: join(__dirname, "../.env") })

export const configService = {
	provide: "ConfigService",
	useValue: process.env.NODE_ENV == "development" ? developmentConfig : productionConfig
}