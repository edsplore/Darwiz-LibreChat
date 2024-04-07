import { EModelEndpoint } from 'librechat-data-provider';
import type { TModelSelectProps } from '~/common';
import type { FC } from 'react';

import OpenAI from './OpenAI';
import BingAI from './BingAI';
import Google from './Google';
import Plugins from './Plugins';
import ChatGPT from './ChatGPT';
import Anthropic from './Anthropic';
import PluginsByIndex from './PluginsByIndex';

export const options: { [key: string]: FC<TModelSelectProps> } = {
  [EModelEndpoint.openAI]: OpenAI,
  [EModelEndpoint.custom]: OpenAI,
  [EModelEndpoint.azureOpenAI]: OpenAI,
  [EModelEndpoint.bingAI]: BingAI,
  [EModelEndpoint.google]: Google,
  [EModelEndpoint.gptPlugins]: Plugins,
  [EModelEndpoint.anthropic]: Anthropic,
  [EModelEndpoint.chatGPTBrowser]: ChatGPT,
};

export const multiChatOptions = {
  ...options,
  [EModelEndpoint.gptPlugins]: PluginsByIndex,
};

// // To rename gpt models
// import EurekoLLM from './EurekoLLM'; // Make sure the path is correct

// export const multiChatOptions = {
//   "Eureko-LLM": EurekoLLM, // Using a placeholder key here; you can replace it with an appropriate key if needed
// };