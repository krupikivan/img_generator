"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getImage = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialize_1 = require("../../initialize");
const Generation = __importStar(require("../generation/generation_pb"));
const helpers_1 = require("../helpers");
exports.getImage = (0, toolkit_1.createAsyncThunk)('image/get', (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const request = (0, helpers_1.buildGenerationRequest)("stable-diffusion-512-v2-1", {
            type: "text-to-image",
            prompts: [
                {
                    text: data.text,
                },
            ],
            width: 512,
            height: 512,
            samples: 1,
            cfgScale: 13,
            steps: 25,
            sampler: Generation.DiffusionSampler.SAMPLER_K_DPMPP_2M,
        });
        const response = yield (0, helpers_1.executeGenerationRequest)(initialize_1.client, request, initialize_1.metadata);
        console.log('response', response);
        const image = (0, helpers_1.onGenerationComplete)(response);
        console.log('image', image);
        return '';
    }
    catch (error) {
        console.log('Could not get image', error);
        return '';
    }
}));
