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
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = require("./jsonfile");
exports.versionNumber = () => {
    return jsonfile_1.retrieveVersion();
};
exports.retrieveMajor = () => __awaiter(void 0, void 0, void 0, function* () {
    const version = yield jsonfile_1.retrieveVersion();
    return Number(version.split('.')[0]);
});
exports.retrieveMinor = () => __awaiter(void 0, void 0, void 0, function* () {
    const version = yield jsonfile_1.retrieveVersion();
    return Number(version.split('.')[1]);
});
exports.retrievePatch = () => __awaiter(void 0, void 0, void 0, function* () {
    const version = yield jsonfile_1.retrieveVersion();
    return Number(version.split('.')[2]);
});
exports.retrieveVersionObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const major = yield exports.retrieveMajor();
    const minor = yield exports.retrieveMinor();
    const patch = yield exports.retrievePatch();
    return {
        major,
        minor,
        patch,
    };
});
//# sourceMappingURL=version.js.map