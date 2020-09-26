"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cache = __importStar(require("./Cache"));
exports.Cache = Cache;
const Image_1 = require("./Image");
exports.compositeImagesAsync = Image_1.compositeImagesAsync;
exports.generateFaviconAsync = Image_1.generateFaviconAsync;
exports.generateImageAsync = Image_1.generateImageAsync;
const jimp_1 = require("./jimp");
exports.jimpAsync = jimp_1.jimpAsync;
const sharp_1 = require("./sharp");
exports.findSharpInstanceAsync = sharp_1.findSharpInstanceAsync;
exports.isAvailableAsync = sharp_1.isAvailableAsync;
exports.sharpAsync = sharp_1.sharpAsync;
async function imageAsync(options, commands = []) {
    if (await sharp_1.isAvailableAsync()) {
        return sharp_1.sharpAsync(options, commands);
    }
    return jimp_1.jimpAsync(Object.assign(Object.assign({}, options), { format: jimp_1.convertFormat(options.format), originalInput: options.input }), commands);
}
exports.imageAsync = imageAsync;
//# sourceMappingURL=index.js.map