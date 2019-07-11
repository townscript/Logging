import "jasmine";
import { TownscriptLogger } from "./TownscriptLogger";
import { LoggerConfiguration } from "..";

describe('TownscriptLogger library', () => {

    let config: LoggerConfiguration = {
        token: "2ef2e60e-d0f0-4738-ab90-e20f0528a181",
        subdomain: "townscript",
        tags: ["Winston-NodeJS"],
        json: true,
        sendConsoleErrors: false
    };

    beforeEach(() => {
        TownscriptLogger.configure(config);
    });

    it('should work', () => {
        expect(TownscriptLogger.info('Hello Townscript World!')).toBeUndefined();
    });
});
