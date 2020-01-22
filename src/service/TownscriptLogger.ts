import { LoggerConfiguration } from "..";
import { LogstashShipper } from "./LogstashShipper";

export class TownscriptLogger {
    private static logstashShipper: LogstashShipper;

    private constructor(config: LoggerConfiguration) {
        TownscriptLogger.logstashShipper = new LogstashShipper(config);
    }

    static getConfig = (): LoggerConfiguration => {
        return TownscriptLogger.logstashShipper.getConfig();
    };

    static configure = (config: LoggerConfiguration): void => {
        TownscriptLogger.logstashShipper = new LogstashShipper(config);
    };

    static error = (error: any) => {
        if (TownscriptLogger.logstashShipper === undefined)
            throw new Error('Please setup configuration first.');
        TownscriptLogger.logstashShipper.sendDataToLogstash("error", error);
    };
}
