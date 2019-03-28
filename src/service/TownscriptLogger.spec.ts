import "jasmine";
import {TownscriptLogger} from "./TownscriptLogger";
import {Configuration} from "..";

describe('TownscriptLogger library', () => {

    let config: Configuration = {
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
