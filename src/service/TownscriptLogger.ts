import * as winston from 'winston';
//const { Loggly } = require('winston-loggly-bulk');
import { LoggerConfiguration } from "..";
import "./loggly.tracker-latest.min.js";

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
        // winston.add(new Loggly({
        //     token: config.token,
        //     subdomain: config.subdomain,
        //     tags: config.tags,
        //     json: config.json
        // }));
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
        _LTracker.push('Hello World. ' + message);
        //winston.log('info', message);
    };

    static error = (errorJson: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        //winston.log('error', errorJson);
    };

    static debug = (errorJson: any) => {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        //winston.debug('debug', errorJson);
    };
}
