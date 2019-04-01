import { LoggerConfiguration } from "..";
export declare class TownscriptLogger {
    private _config;
    private static _townscriptLogger;
    private constructor();
    static getConfig: () => LoggerConfiguration;
    static configure: (config: LoggerConfiguration) => void;
    static info: (message: string) => void;
    static error: (errorJson: string) => void;
    static debug: (errorJson: string) => void;
}
