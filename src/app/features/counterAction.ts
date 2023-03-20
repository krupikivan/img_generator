import { createAsyncThunk } from '@reduxjs/toolkit'
import { client, metadata } from '../../initialize';
import * as Generation from "../generation/generation_pb";
import {
  buildGenerationRequest,
  executeGenerationRequest,
  onGenerationComplete,
} from "../helpers";


export const getImage = createAsyncThunk('image/get', async (data: { text: string }) => {
    try {
        const request = buildGenerationRequest("stable-diffusion-512-v2-1", {
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
          
        const response = await executeGenerationRequest(client, request, metadata)
        const image = await onGenerationComplete(response)
        console.log('image', image)
        return image[0] ?? ''
    } catch (error) {
      console.log('Could not get image', error)
      return ''
    }
  })
  