/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire plugin at the highest level.
 * Also provides an interface to easily manage all the plugin features & various functionality from a single entry point.
 * @requires module:plugin.constants
 * @requires module:chiefCommander
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefRules
 * @requires module:chiefTheme
 * @requires module:chiefWorkflow
 * @requires module:loggers
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import chiefCommander from './chiefCommander.js';
import chiefConfiguration from './chiefConfiguration.js';
import chiefData from './chiefData.js';
import chiefRules from './chiefRules.js';
import chiefTheme from './chiefTheme.js';
import chiefWorkflow from './chiefWorkflow.js';
import loggers from '../executrix/loggers.js';
import D from '../structures/pluginData.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.controllers.warden.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initPluginRules
 * @description This is a wrapper call for chiefRules.initBusinessRules.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all the business rules.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function initPluginRules() {
  // let functionName = initPluginRules.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = {};
  returnData = await chiefRules.initBusinessRules();
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function initPluginCommands
 * @description This is a wrapper call for chiefCommander.initCommands.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function initPluginCommands() {
  // let functionName = initPluginCommands.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = {};
  returnData = await chiefCommander.initCommands();
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function initPluginSchema
 * @description Setup all of the plugin data and configuration settings.
 * @param {object} configData All of the configuration data and paths that should be parsed as part of the setup process.
 * @return {object} All of the plugin data that should be returned to the rest of the Haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
async function initPluginSchema(configData) {
  // let functionName = initPluginSchema.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configData is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigDataIs + JSON.stringify(configData));
  await chiefData.initializeData();
  D[wrd.cdata][cfg.cLogFilePathAndName] = configData[cfg.cLogFilePathAndName];
  D[wrd.cdata] = configData; // Persist all of the plugin data we have so far.
  let pluginConfigPath = configData[cfg.cpluginConfigReferencePath];
  let pluginCommandAliasesPath = configData[cfg.cpluginCommandAliasesPath];
  let pluginWorkflowsPath = configData[cfg.cpluginWorkflowsPath];
  let pluginThemesPath = configData[cfg.cpluginThemesPath];
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigPathIs + pluginConfigPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesPathIs + pluginCommandAliasesPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginWorkflowsPathIs + pluginWorkflowsPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginThemesPathIs + pluginThemesPath);

  // Load the configuration data for the plugin.
  let pluginConfigData = await chiefConfiguration.setupConfiguration(pluginConfigPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigDataIs + JSON.stringify(pluginConfigData));
  D[wrd.cdata][wrd.cconfiguration] = {};
  D[wrd.cdata][wrd.cconfiguration] = pluginConfigData;

  // Load the command aliases data for the plugin.
  let pluginCommandAliasesData = await chiefCommander.setupCommandAliases(pluginCommandAliasesPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesDataIs + JSON.stringify(pluginCommandAliasesData));
  D[wrd.cdata][wrd.cCommands + wrd.cAliases] = {};
  D[wrd.cdata][wrd.cCommands + wrd.cAliases] = pluginCommandAliasesData;

  // Load the workflows data for the plugin.
  let pluginWorkflowsData = await chiefWorkflow.setupWorkflows(pluginWorkflowsPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginWorkflowsDataIs + JSON.stringify(pluginWorkflowsData));
  D[wrd.cdata][wrd.cCommand + wrd.cWorkflows] = {};
  D[wrd.cdata][wrd.cCommand + wrd.cWorkflows] = pluginWorkflowsData;

  // Load the themes data for the plugin.
  let pluginThemesData = await chiefTheme.setupThemes(pluginThemesPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginThemesDataIs + JSON.stringify(pluginThemesData));
  D[wrd.cdata][wrd.cThemes] = {};
  D[wrd.cdata][wrd.cThemes] = pluginThemesData;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.ccontentsOfDare + JSON.stringify(D));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

export default {
  initPluginRules,
  initPluginCommands,
  initPluginSchema
};