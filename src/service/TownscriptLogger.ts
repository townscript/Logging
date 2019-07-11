import { LoggerConfiguration } from "..";
import "../../src/service/loggly.tracker-latest.min.js";

declare var _LTracker: any;

export class TownscriptLogger {
    private _config: LoggerConfiguration;
    private static _townscriptLogger: TownscriptLogger;

    private constructor(config: LoggerConfiguration) {
        this._config = config;
        _LTracker.push({
            'logglyKey': config.token,
            'subdomain': config.subdomain,
            'tag': config.tags,
            'json': config.json
        });
    }

    static getConfig = (): LoggerConfiguration => {
        return TownscriptLogger._townscriptLogger._config;
    };

    static configure = (config: LoggerConfiguration): void => {
        TownscriptLogger._townscriptLogger = new TownscriptLogger(config);
    };

    static info = (message: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        _LTracker.push({
            'text': message,
            'type': "info"
        });
    };

    static error = (errorJson: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        let obj = { 'type': "error" }
        Object.assign(obj, errorJson);
        _LTracker.push(obj);
    };

    static debug = (errorJson: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        let obj = { 'type': "error" }
        Object.assign(obj, errorJson);
        _LTracker.push(obj);
    };
}
