import { Configuration } from "..";
export declare class TownscriptLogger {
    private _config;
    private static _townscriptLogger;
    private constructor();
    static getConfig: () => Configuration;
    static configure: (config: Configuration) => void;
    static info: (message: string) => void;
}
