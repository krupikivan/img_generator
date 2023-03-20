"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.metadata = void 0;
const generation_pb_service_1 = require("./app/generation/generation_pb_service");
const grpc_web_1 = require("@improbable-eng/grpc-web");
// Authenticate using your API key, don't commit your key to a public repository!
exports.metadata = new grpc_web_1.grpc.Metadata();
exports.metadata.set("Authorization", "Bearer " + process.env.API_KEY);
// Create a generation client to use with all future requests
exports.client = new generation_pb_service_1.GenerationServiceClient("https://grpc.stability.ai", {});
