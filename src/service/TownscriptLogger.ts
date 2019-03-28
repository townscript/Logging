import * as winston from 'winston';
const {Loggly} = require('winston-loggly-bulk');
import {Configuration} from "..";

export class TownscriptLogger {
    private _config: Configuration;
    private static _townscriptLogger: TownscriptLogger;

    private constructor(config: Configuration) {
        this._config = config;
        winston.add(new Loggly({
            token: config.token,
            subdomain: config.subdomain,
            tags: config.tags,
            json: config.json
        }));
    }

    static getConfig = ():Configuration => {
        return TownscriptLogger._townscriptLogger._config;
    };

    static configure = (config: Configuration):void => {
        TownscriptLogger._townscriptLogger = new TownscriptLogger(config);
    };

    static info = (message: string) => {
        if(TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        winston.log('info', message);
    }
}
