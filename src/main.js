/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the entry point and all public functions for the plugin.
 * @requires module:plugin.constants
 * @requires module:warden
 * @requires module:allPluginConstantsValidationMetadata
 * @requires module:loggers
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
import loggers from './executrix/loggers.js';
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
// That Haystacks instance is needed so we can pass the paths to the configuration files that must be loaded and parsed.
// The Haystacks has the code to do that loading and parsing so the intent is to let Haystacks do that work and pass back the data after it's been parsed.
// Then let the plugin do final organization of that data and again pass it back to Haystacks so that the app using Haystacks can make calls to the plugin functions and all its data.
// The trouble is the plugin instance of Haystacks doesn't have the context (data or otherwise) to do everything that the application Haystacks instance does.
// The plugin Haystacks instance would again have to load all of the Haystacks configuration data, and meta-data and be completely bootstrapped yet again.
// Doing this for each and every plugin is not a viable solution because of the performance loss.
// Basically the plugin instance of Haystacks is a dumb idiot and cannot be used to do anything.
// There are 2 possible solutions that I can think of to solve this conundrum.

// #1: Add a data parameter to the function below: initializePlugin that allows for the application instance of Haystacks, when it calls this function to load this plugin,
// and allow that instance of Haystacks to pass its data context to this plugin.
// Then this plugin will store that data context in its own (the plugins) data structure declared above as "D".
// Then once the plugin creates the new Haystacks instance, the data context stored on the plugins "D", can be passed back to the plugins instance of Haystacks.
// This in theory should give the plugin instance of Haystacks the intelligence needed to act in exactly the same way that the application instance of Haystacks works.

// #2: In the host application, immediately after creating the instance of Haystacks, that instance object could be stored in the appConfig object that is then passed along to the Haystacks bootStrapper.
// Then the instance object of Haystacks could be stored in the Haystacks "D" as a context object.
// Then when the Haystacks makes calls to load each plugin by calling their initializePlugin function as written below, that context object could be passed along as input to this function.
// The plugin would initialize the instance of Haystacks for the plugin by capturing the stored instance of Haystacks and storing it in the plugins "D" so that call-backs
// can be made directly to a single instance of Haystacks.
// In theory this should make the application instance of Haystacks and the plugin instance of Haystacks to be exactly the same instance,
// and they should behave exactly the same way, and be capable of doing exactly the same things.

// I just need another professional engineer with experience in JavaScript to evaluate this problem and these two solutions and confirm if my approach is correct,
// and which solution would be ideal, and is most likely to actually work and be a good and proper well engineered solution.
// My inclination is that solution #2 is the idealized approach.

// Solution #2 appears that it will be the ideal solution, now lets test it!!
// Well turns out it is not possible to re-assign a module as an object once it has been imported.
// Then the only remaining solution is #1.
// FINALLY: YES!! Solution #1 is the way to solve this problem and got it working correctly.
// HOWEVER, 1 problem still remains. The user must still clone the Haystacks/async repo locally, then link it to their application and to all their plugins as well.
// I'll need to work to understand why this is.

/**
 * @function initializePlugin
 * @description Collects all of the plugin data and provides it to the
 * Haystacks platform so it can be used at run-time to provide enhanced
 * capabilities to the application that loads this plugin.
 * @param {object} inputMetaData A JSON object that contains meta-data needed by the plugin.
 * In particular this contains a Haystacks context data object that can be used to inject into a new instance of Haystacks,
 * such that the new instance of Haystacks will act and behave exactly like the host application instance of Haystacks.
 * Including being able to make calls back to Haystacks, for the purpose of loading and parsing files, or any number of other operations that need to be done.
 * @return {object} A JSON object that contains all of the data that the plugin
 * provides to the Haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
async function initializePlugin(inputMetaData) {
  let functionName = initializePlugin.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  await loggers.consoleLog(namespacePrefix + functionName, msg.crootPathIs + rootPath);
  let logFilePathAndName = await loggers.getLogFileNameAndPath(inputMetaData);
  let pluginConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    pluginConfig = {
      [cfg.cLogFilePathAndName]: logFilePathAndName,
      haystacksContextObject: inputMetaData,
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullDevResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullDevConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataDevPath,
      pluginCommandAliasesPath: rootPath + plg.cFullDevCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullDevConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullDevWorkflowsPath,
      pluginThemesPath: rootPath + plg.cFullDevThemesPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullDevConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  } else if (NODE_ENV === wrd.cproduction) {
    pluginConfig = {
      [cfg.cLogFilePathAndName]: logFilePathAndName,
      haystacksContextObject: inputMetaData,
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullProdResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullProdConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataProdPath,
      pluginCommandAliasesPath: rootPath + plg.cFullProdCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullProdConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullProdWorkflowsPath,
      pluginThemesPath: rootPath + plg.cFullProdThemesPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullProdConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    pluginConfig = {
      [cfg.cLogFilePathAndName]: logFilePathAndName,
      haystacksContextObject: inputMetaData,
      PluginName: plg.cpluginName,
      pluginRootPath: rootPath,
      pluginConfigResourcesPath: rootPath + plg.cFullDevResourcesPath,
      pluginConfigReferencePath: rootPath + plg.cFullDevConfigurationPath,
      pluginMetaDataPath: plg.cmetaDataDevPath,
      pluginCommandAliasesPath: rootPath + plg.cFullDevCommandsPath,
      pluginConstantsPath: rootPath + plg.cFullDevConstantsPath,
      pluginWorkflowsPath: rootPath + plg.cFullDevWorkflowsPath,
      pluginThemesPath: rootPath + plg.cFullDevThemesPath,
      pluginConstantsValidationData: await allPlgCV.initializeAllPluginConstantsValidationData(rootPath + plg.cFullDevConstantsPath),
      pluginBusinessRules: {},
      pluginCommands: {},
      pluginHaystacks: haystacks
    }
  }
  pluginConfig[sys.cpluginBusinessRules] = await warden.initPluginRules();
  pluginConfig[sys.cpluginCommands] = await warden.initPluginCommands();
  await warden.initPluginSchema(pluginConfig);
  D[cfg.chaystacksContextObject] = {};
  let returnData = D; // Export all of the plugin data.
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  initializePlugin
};
