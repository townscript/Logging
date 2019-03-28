"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var Loggly = require('winston-loggly-bulk').Loggly;
var TownscriptLogger = /** @class */ (function () {
    function TownscriptLogger(config) {
        this._config = config;
        winston.add(new Loggly({
            token: config.token,
            subdomain: config.subdomain,
            tags: config.tags,
            json: config.json
        }));
    }
    TownscriptLogger.getConfig = function () {
        return TownscriptLogger._townscriptLogger._config;
    };
    TownscriptLogger.configure = function (config) {
        TownscriptLogger._townscriptLogger = new TownscriptLogger(config);
    };
    TownscriptLogger.info = function (message) {
        if (TownscriptLogger._townscriptLogger === undefined)
            throw new Error('Please setup configuration first.');
        winston.log('info', message);
    };
    return TownscriptLogger;
}());
exports.TownscriptLogger = TownscriptLogger;
