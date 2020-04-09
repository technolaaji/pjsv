"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
exports.directoryExecutedPath = process.cwd();
exports.choices = {
    Major: 'Major Release - Changes that break backward compatibility',
    Minor: 'Minor Release - Backward compatible new features',
    Patch: 'Patch Release - Backward compatible bug fixes',
};
exports.downgradeChoices = {
    Major: 'Major Downgrade - Decreases the major version by one',
    Minor: 'Minor Downgrade - Decreases the minor version by one',
    Patch: 'Patch Downgrade - Decreases the patch version by one',
};
exports.zeroOrBelowWarning = () => {
    console.log(colors_1.default('red', 'You cannot decrease your version below zero'));
};
exports.thankYouForNotDowngrading = () => {
    console.log(colors_1.default('green', 'Thank you. Consider using the downgrade when needed, otherwise revert back to previous commits using git'));
};
exports.downgradeWarnings = () => {
    console.log(colors_1.default('yellow', 'what downgrading does is that it just decreses your version by 1'));
    console.log(colors_1.default('yellow', 'this does not mean that it will revert your code using git, just decreasing your package json version by 1'));
    console.log(colors_1.default('yellow', 'consider reverting back to a previous commit using git since it also reverts back the version as well'));
    console.log(colors_1.default('redbg', 'If you know what you are doing then proceed but downgrading your package json file might cause code breakage so do it on your own risk'));
};
exports.noPackageJsonWarning = () => {
    console.log(colors_1.default('red', 'There is no package json in this current directory'));
};
exports.retrieveVersionWarning = () => {
    console.log(colors_1.default('red', 'Please use the command where a package json is location'));
    console.log(colors_1.default('yellow', 'if you see that this issue progresses even if you execute it in the right place, kindly send a pull request on github'));
};
exports.cannotWriteToPackageJsonWarning = () => {
    console.log(colors_1.default('red', 'you cannot write in a place where package json does not exist'));
};
//# sourceMappingURL=constants.js.map