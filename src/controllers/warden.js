/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire plugin at the highest level.
 * Also provides an interface to easily manage all the plugin features & various functionaity from a single entry point.
 * @requires module:plugin.constants
 * @requires module:chiefCommander
 * @requires module:chiefConfiguration
 * @requires module:chiefData
 * @requires module:chiefRules
 * @requires module:chiefWorkflow
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
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
import chiefData from './chiefData.js'
import chiefRules from './chiefRules.js';
import chiefWorkflow from './chiefWorkflow.js';
import D from '../structures/pluginData.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.brokers.ruleBroker.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initPluginRules
 * @description This is a wrapper call for chiefRules.initBusinessRules.
 * @return {object} An object that contains an array of function objects that map function name to function call for all the business rules.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function initPluginRules() {
  let functionName = initPluginRules.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData = await chiefRules.initBusinessRules();
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function initPluginCommands
 * @description This is a wrapper call for chiefCommander.initCommands.
 * @return {object} An object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2022/09/13
 */
async function initPluginCommands() {
  let functionName = initPluginCommands.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData = await chiefCommander.initCommands();
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function initPluginSchema
 * @description Setup all of the plugin data and configuration settings.
 * @param {object} configData All of the configuration data and paths that should be parsed as part of the setup process.
 * @return {object} All of the plugin data that should be returned to the rest of the framework.
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
async function initPluginSchema(configData) {
  let functionName = initPluginSchema.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cconfigDataIs + JSON.stringify(configData));
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configData is: ${JSON.stringify(configData)}`);
  await chiefData.initializeData();
  D[wrd.cdata] = configData; // Persist all of the plugin data we have so far.
  let pluginConfigPath = configData[cfg.cpluginConfigReferencePath];
  let pluginCommandAliasesPath = configData[cfg.cpluginCommandAliasesPath];
  let pluginWorkflowsPath = configData[cfg.cpluginWorkflowsPath];
  console.log('pluginConfigPath is: ' + JSON.stringify(pluginConfigPath));
  console.log('pluginCommandAliasesPath is: ' + JSON.stringify(pluginCommandAliasesPath));
  console.log('pluginWorkflowsPath is: ' + JSON.stringify(pluginWorkflowsPath));

  // Load the configuration data for the plugin.
  let pluginConfigData = await chiefConfiguration.setupConfiguration(pluginConfigPath);
  console.log('pluginConfigData is: ' + JSON.stringify(pluginConfigData));
  D[wrd.cdata][wrd.cconfiguration] = {};
  D[wrd.cdata][wrd.cconfiguration] = pluginConfigData;

  // Load the command aliases data for the plugin.
  let pluginCommandAliasesData = await chiefCommander.setupCommandAliases(pluginCommandAliasesPath);
  console.log('pluginCommandAliasesData is: ' + JSON.stringify(pluginCommandAliasesData));
  D[wrd.cdata][wrd.cCommands + wrd.cAliases] = {};
  D[wrd.cdata][wrd.cCommands + wrd.cAliases] = pluginCommandAliasesData;

  // Load the workflows data for the plugin.
  let pluginWorkflowsData = await chiefWorkflow.setupWorkflows(pluginWorkflowsPath);
  console.log('pluginWorkflowsData is: ' + JSON.stringify(pluginWorkflowsData));
  D[wrd.cdata][wrd.cCommand + wrd.cWorkflows] = {};
  D[wrd.cdata][wrd.cCommand + wrd.cWorkflows] = pluginWorkflowsData;
  console.log('contents of D are: ' + JSON.stringify(D));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initPluginRules,
  initPluginCommands,
  initPluginSchema
}