import * as request from 'request'
import { LoggerConfiguration } from '../model/LoggerConfiguration';


export class LogstashShipper {
    private static config: LoggerConfiguration;

    constructor(config: LoggerConfiguration) {
        LogstashShipper.config = config;
    }

    getConfig = (): LoggerConfiguration => {
        return LogstashShipper.config;
    }

    setConfig = (config: LoggerConfiguration): void => {
        LogstashShipper.config = config;
    }

    sendDataToLogstash = (type: string, err: string): void => {
        request.post(LogstashShipper.config.logstashUrl, {
            json: {
                type: type,
                message: err
            }
        }, (error, res, body) => {
            if (error) {
                if (LogstashShipper.config.sendConsoleErrors)
                    console.error(error)
                return
            }
        })
    }
}