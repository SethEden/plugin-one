/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Contains all of the top-level functions to manage the commands for the plugin.
 * @requires module:commandBroker
 * @requires module:plugin.constants
 * @requires module:chiefData
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../brokers/commandBroker.js';
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.controllers.chiefCommander.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initCommands
 * @description Initializes all of the commands for the plugin,
 * so they can be loaded by the Haystacks platform and used by the application.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initCommands() {
  let functionName = initCommands.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = {};
  returnData = await commandBroker.bootStrapCommands();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setupCommandAliases
 * @description Sets up all the plugin command aliases data.
 * @param {string} pluginCommandAliasesPath The path of the command aliases files for the plugin layer.
 * @return {object} A JSON object that contains all of the command aliases data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/09/21 
 */
async function setupCommandAliases(pluginCommandAliasesPath) {
  let functionName = setupCommandAliases.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginCommandAliasesPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginCommandAliasesPathIs + pluginCommandAliasesPath);
  let returnData = {};
  returnData = await chiefData.loadCommandAliasesData(pluginCommandAliasesPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  initCommands,
  setupCommandAliases
};