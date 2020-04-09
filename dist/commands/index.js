"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("../helpers/commander"));
const upgrade_1 = __importDefault(require("./upgrade"));
const downgrade_1 = __importDefault(require("./downgrade"));
const commandList = commander_1.default;
commandList
    .command('upgrade')
    .description("Uprades your package json's version")
    .action(() => {
    upgrade_1.default();
});
commandList
    .command('downgrade')
    .description("Downgrades your package json's version")
    .action(() => {
    downgrade_1.default();
});
exports.default = commandList;
//# sourceMappingURL=index.js.map