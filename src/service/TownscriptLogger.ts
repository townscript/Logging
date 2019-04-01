import * as winston from 'winston';
const {Loggly} = require('winston-loggly-bulk');
import {LoggerConfiguration} from "..";

export class TownscriptLogger {
    private _config: LoggerConfiguration;
    private static _townscriptLogger: TownscriptLogger;

    private constructor(config: LoggerConfiguration) {
        this._config = config;
        winston.add(new Loggly({
            token: config.token,
            subdomain: config.subdomain,
            tags: config.tags,
            json: config.json
        }));
    }

    static getConfig = ():LoggerConfiguration => {
        return TownscriptLogger._townscriptLogger._config;
    };

    static configure = (config: LoggerConfiguration):void => {
        TownscriptLogger._townscriptLogger = new TownscriptLogger(config);
    };

    static info = (message: string) => {
        if(TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        winston.log('info', message);
    };

    static error = (errorJson: string) => {
        if(TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        winston.log('error', errorJson);
    };

    static debug = (errorJson: string) => {
        if(TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        winston.debug('debug', errorJson);
    };
}
