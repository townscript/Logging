"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var TownscriptLogger_1 = require("./TownscriptLogger");
describe('TownscriptLogger library', function () {
    var config = {
        token: "",
        subdomain: "townscript",
        tags: ["Winston-NodeJS"],
        json: true,
        sendConsoleErrors: false
    };
    beforeEach(function () {
        TownscriptLogger_1.TownscriptLogger.configure(config);
    });
    it('should work', function () {
        expect(TownscriptLogger_1.TownscriptLogger.info('Hello Townscript World!')).toBeUndefined();
    });
});
