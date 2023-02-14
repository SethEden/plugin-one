/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains high level data initialization and data management functions for the plugin.
 * @requires module:dataBroker
 * @requires module:plugin.constants
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import * as plg from '../constants/plugin.constants.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.controllers.chiefData.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeData
 * @description Initialize the data that will be used by
 * the plugin to load all of the plugin content and export it to the Haystacks platform.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initializeData() {
  // let functionName = initializeData.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await dataBroker.initData();
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

/**
 * @function loadConfigurationData
 * @description Loads the plugin configuration data by calling the Haystacks to
 * load and parse the data from the specified path.
 * @param {string} configPath The fully qualified path to the configuration folder with all of the configuration data for the plugin.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadConfigurationData(configPath) {
  // let functionName = loadConfigurationData.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // configPath is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cconfigPathIs + configPath);
  let returnData = {};
  returnData = await dataBroker.loadConfigData(configPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadCommandAliasesData
 * @description Loads the plugin command aliases data by calling the Haystacks to
 * load and parse the data from the specified path.
 * @param {string} aliasesPath The fully qualified path to the command aliases folder with all of the command aliases data for the plugin.
 * @return {object} A JSON object that contains all of the command aliases data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
async function loadCommandAliasesData(aliasesPath) {
  // let functionName = loadCommandAliasesData.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // aliasesPath is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.caliasesPathIs + aliasesPath);
  let returnData = {};
  returnData = await dataBroker.loadCommandAliasesData(aliasesPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadWorkflowsData
 * @description Loads the plugin workflows data by calling the Haystacks to
 * load and parse the data from the specified path.
 * @param {string} workflowsPath The fully qualified path to the workflows folder with all of the workflows data for the plugin.
 * @return {object} A JSON object that contains all of the workflows data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
async function loadWorkflowsData(workflowsPath) {
  // let functionName = loadWorkflowsData.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // workflowsPath is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cworkflowsPathIs + workflowsPath);
  let returnData = {};
  returnData = await dataBroker.loadWorkflowsData(workflowsPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function loadThemesData
 * @description Loads the plugin themes data by calling the Haystacks to
 * load and parse the data from the specified path.
 * @param {string} themesPath The fully qualified path to the themes folder with all of the themes data for the plugin.
 * @return {object} A JSON object that contains all of the themes data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/02/02
 */
async function loadThemesData(themesPath) {
  // let functionName = loadThemesData.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // themesPath is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cthemesPathIs + themesPath);
  let returnData = {};
  returnData = await dataBroker.loadThemesData(themesPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  initializeData,
  loadConfigurationData,
  loadCommandAliasesData,
  loadWorkflowsData,
  loadThemesData
};