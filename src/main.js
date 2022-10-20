/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the entry point and all public functions for the plugin.
 * @requires module:plugin.constants
 * @requires module:warden
 * @requires module:allPluginConstantsValidationMetadata
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/05/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from './constants/plugin.constants.js';
import warden from './controllers/warden.js';
import allPlgCV from './resources/constantsValidation/allPluginConstantsValidationMetadata.js';
import D from './structures/pluginData.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
let rootPath = '';
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.main.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.cmain + bas.cDot;
dotenv.config();
const {NODE_ENV} = process.env;

/**
 * @function initializePlugin
 * @description Collects all of the plugin data and provides it to the
 * haystacks platform so it can be used at run-time to provide enhanced
 * capabilities to the application that loads this plugin.
 * @return {object} A JSON object that contains all of the data that the plugin
 * provides to the haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
async function initializePlugin() {
  let functionName = initializePlugin.name;
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  console.log('rootPath is: ' + rootPath);
  // await haystacks.initFramework({enablePluginLoader: false});
  let pluginConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    pluginConfig = {
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullDevResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullDevConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataDevPath,
      pluginCommandAliasesPath: rootPath + plg.cFullDevCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullDevConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullDevWorkflowsPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullDevConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  } else if (NODE_ENV === wrd.cproduction) {
    pluginConfig = {
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullProdResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullProdConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataProdPath,
      pluginCommandAliasesPath: rootPath + plg.cFullProdCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullProdConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullProdWorkflowsPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullProdConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    pluginConfig = {
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullDevResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullDevConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataDevPath,
      pluginCommandAliasesPath: rootPath + plg.cFullDevCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullDevConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullDevWorkflowsPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullDevConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  }
  pluginConfig[sys.cpluginBusinessRules] = await warden.initPluginRules();
  pluginConfig[sys.cpluginCommands] = await warden.initPluginCommands();
  await warden.initPluginSchema(pluginConfig);
  let returnData = D; // Export all of the plugin data.
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cretrunDataIs + returnData);
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  return returnData;
};

export default {
  initializePlugin
};
