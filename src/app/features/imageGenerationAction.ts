import { createAsyncThunk } from "@reduxjs/toolkit";
import { client, metadata } from "../../initialize";
import * as Generation from "../generation/generation_pb";
import {
  buildGenerationRequest,
  executeGenerationRequest,
  onGenerationComplete,
} from "../helpers";

export const getImage = createAsyncThunk(
  'image/get',
  async (data: { text: string }) => {
    try {
      // https://github.com/Stability-AI/api-interfaces/blob/main/src/proto/generation.proto
      // https://platform.stability.ai/docs/features/api-parameters
      const request = buildGenerationRequest("stable-diffusion-768-v2-1", {
        type: 'text-to-image',
        prompts: [
          {
            text: data.text,
          },
        ],
        width: 512,
        height: 512,
        samples: 1,
        cfgScale: 12,
        clipGuidancePreset: 3,
        steps: 50,
        seed: 0,
        sampler: Generation.DiffusionSampler.SAMPLER_K_DPM_2_ANCESTRAL,
      });

      const response = await executeGenerationRequest(
        client,
        request,
        metadata
      );
      const blob = await onGenerationComplete(response);
      return blob[0];
    } catch (error) {
      console.log("Could not get blob image", error);
      return null;
    }
  }
);
