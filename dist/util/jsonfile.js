"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
const constants_1 = require("./constants");
exports.readPackage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield jsonfile_1.default.readFile(`${constants_1.directoryExecutedPath}/package.json`);
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.retrieveVersion = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield jsonfile_1.default.readFile(`${constants_1.directoryExecutedPath}/package.json`);
        return String(data.version);
    }
    catch (e) {
        console.log(e);
    }
});
//# sourceMappingURL=jsonfile.js.map