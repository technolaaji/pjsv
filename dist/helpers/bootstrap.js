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
const commands_1 = __importDefault(require("../commands"));
const version_1 = require("./version");
const ascii_art_1 = __importDefault(require("../util/ascii-art"));
exports.bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    const version = yield version_1.versionNumber();
    ascii_art_1.default();
    return commands_1.default.version(version).parse(process.argv);
});
exports.default = exports.bootstrap;
//# sourceMappingURL=bootstrap.js.map