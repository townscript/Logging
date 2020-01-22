import * as request from 'request'
import { LoggerConfiguration } from '../model/LoggerConfiguration';


export class LogstashShipper {
    LOGSTASH_URL: string = "http://localhost:5400";

    sendDataToLogstash = (config: LoggerConfiguration, type: string, err: string): void => {
        request.post(config.logstashUrl, {
            json: {
                type: type,
                message: err
            }
        }, (error, res, body) => {
            if (error) {
                if (config.sendConsoleErrors)
                    console.error(error)
                return
            }
        })
    }
}