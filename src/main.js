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

const {bas, cfg, msg, sys, wrd} = hayConst;
let rootPath = '';
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.main.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cmain + bas.cDot;
dotenv.config();
const {NODE_ENV} = process.env;

// NOTE: Consider that in the plugin we have to have a Haystacks instance.
// That haystacks instance is needed so we can pass the paths to the configuration files that must be loaded and parsed.
// The haystacks has the code to do that loading and parsing so the intent is to let haystacks do that work and pass back the data after it's been parsed.
// Then let the plugin do final organization of that data and again pass it back to haystacks so that the app using haystacks can make calls to the plugin functions and all it's data.
// The trouble is the plugin instance of haystacks doesn't have the context (data or otherwise) to do everything that the application haystacks instance does.
// The plugin haystacks instance would again have to load all of the haystacks configuration data, and meta-data and be completely bootstrapped yet again.
// Doing this for each and every plugin is not a viable solution because of the performance loss.
// Basically the plugin instance of haystacks of a dumb idiot and cannot be used to do anything.
// There are 2 possible solutions that I can think of to solve this conundrum.

// #1: Add a data parameter to the function below: initializePlugin that allows for the application instance of haystacks, when it calls this function to load this plugin,
// and allow that instance of haystacks to pass its data context to this plugin.
// Then this plugin will store that data context in it's own (the plugins) data structure declared above as "D".
// Then once the plugin creates the new haystacks instance, the data context stored on the plugins "D", can be passed back to the plugins instance of haystacks.
// This in theory should give the plugin instance of haystacks the intelligence needed to act in exactly the same way that the application instance of haystacks works.

// #2: In the host application, immediately after creating the instance of haystacks, that instance object could be stored in the appConfig object that is then passed along to the haystacks bootStrapper.
// Then the instance object of haystacks could be stored in the haystacks "D" as a context object.
// Then when the haystacks makes calls to load each plugin by calling their initializePlugin function as written below, that context object could be passed along as input to this function.
// The plugin would initialize the instance of haystacks for the plugin by capturing the stored instance of haystacks and storing it in the plugins "D" so that call-backs can be made directly to a single instance of haystacks.
// In theory this should make the application instance of haystacks and the plugin instance of haystacks to be exactly the same instance, and they should behave exactly the same way, and be capable of doing exactly the same things.

// I just need another professional engineer with experience in JavaScript to evaluate this problem and these two solutions and confirm if my approach is correct, and which solution would be ideal, and is most likely to actually work and be a good and proper well engineered solution.
// My inclination is that Solution #2 is the idealized approach.

// Solution #2 appears that it will be the ideal solution, now lets test it!!
// Well turns out it is not possible to re-assign a module as an object once it has been imported.
// Then the only remaining solution is #1.
// FINALLY: YES!! Solution #1 is the way to solve this problem and got it working correctly.

/**
 * @function initializePlugin
 * @description Collects all of the plugin data and provides it to the
 * haystacks platform so it can be used at run-time to provide enhanced
 * capabilities to the application that loads this plugin.
 * @param {object} inputMetaData A JSON object that contains meta-data needed by the plugin.
 * In particular this contains a Haystacks context object that can be used to make calls back to Haystacks,
 * for the purpose of loading and parsing files, or any number of other operations that need to be done.
 * @return {object} A JSON object that contains all of the data that the plugin
 * provides to the haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
async function initializePlugin(inputMetaData) {
  // let functionName = initializePlugin.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`inputMetaData is: ` + JSON.stringify(inputMetaData));
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  // console.log('rootPath is: ' + rootPath);
  let pluginConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    pluginConfig = {
      haystacksContextObject: inputMetaData,
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
      haystacksContextObject: inputMetaData,
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
      haystacksContextObject: inputMetaData,
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
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
};

export default {
  initializePlugin
};
