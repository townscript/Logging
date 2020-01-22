import { LoggerConfiguration } from "..";
import { LogstashShipper } from "./LogstashShipper";

export class TownscriptLogger {
    private _config: LoggerConfiguration;
    private static _townscriptLogger: TownscriptLogger;
    private logstashShipper: LogstashShipper;

    private constructor(config: LoggerConfiguration) {
        this.logstashShipper = new LogstashShipper();
        this._config = config;
    }

    static getConfig = (): LoggerConfiguration => {
        return TownscriptLogger._townscriptLogger._config;
    };

    static configure = (config: LoggerConfiguration): void => {
        TownscriptLogger._townscriptLogger = new TownscriptLogger(config);
    };

    static error = (error: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        TownscriptLogger._townscriptLogger.logstashShipper.sendDataToLogstash(TownscriptLogger.getConfig(), "error", error);
    };
}
