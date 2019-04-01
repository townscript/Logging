import "jasmine";
import {TownscriptLogger} from "./TownscriptLogger";
import {LoggerConfiguration} from "..";

describe('TownscriptLogger library', () => {

    let config: LoggerConfiguration = {
        token: "",
        subdomain: "townscript",
        tags: ["Winston-NodeJS"],
        json: true,
        sendConsoleErrors: false
    };

    beforeEach(()=> {
        TownscriptLogger.configure(config);
    });

    it('should work', () => {
       expect(TownscriptLogger.info('Hello Townscript World!')).toBeUndefined();
    });
});
