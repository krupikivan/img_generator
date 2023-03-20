import { GenerationServiceClient } from "./app/generation/generation_pb_service";
import { grpc as GRPCWeb } from "@improbable-eng/grpc-web";


// Authenticate using your API key, don't commit your key to a public repository!
export const metadata = new GRPCWeb.Metadata();
console.log('process.env.API_KEY', process.env.REACT_APP_API_KEY)
metadata.set("Authorization", "Bearer " + process.env.REACT_APP_API_KEY);

// Create a generation client to use with all future requests
export const client = new GenerationServiceClient("https://grpc.stability.ai", {});