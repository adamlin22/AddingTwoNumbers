"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const sum_1 = __importDefault(require("../sum"));
describe("check sum function", function () {
    it("should return 3 when the params are 1 and 2", function () {
        assert_1.default.equal((0, sum_1.default)(1, 2), 3);
    });
});
