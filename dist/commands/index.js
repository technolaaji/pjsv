"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("../util/commander"));
const commandList = commander_1.default;
commandList
    .command('upgrade')
    .description("Uprades your package json's version")
    .action(() => {
    console.log('upgrade');
});
commandList
    .command('downgrade')
    .description("Downgrades your package json's version")
    .action(() => {
    console.log('downgrade');
});
exports.default = commandList;
//# sourceMappingURL=index.js.map