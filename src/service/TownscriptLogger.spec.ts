import "jasmine";
import { TownscriptLogger } from "./TownscriptLogger";
import { LoggerConfiguration } from "..";

describe('TownscriptLogger library', () => {

    let config: LoggerConfiguration = {
        logstashUrl: "http://localhost:8080/",
        sendConsoleErrors: true
    };

    beforeEach(() => {
        TownscriptLogger.configure(config);
    });

    it('should work', () => {
        expect(TownscriptLogger.error('Hello Townscript World!')).toBeUndefined();
    });
});
