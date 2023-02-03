/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains high level data initialization and data management functions for the plugin.
 * @requires module:dataBroker
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/dataBroker.js';
import * as plg from '../constants/plugin.constants.js';
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await dataBroker.initData();
  // console.log(`END ${namespacePrefix}${functionName} function`);
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configPath is: ${configPath}`);
  let returnData = {};
  returnData = await dataBroker.loadConfigData(configPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`aliasesPath is: ${aliasesPath}`);
  let returnData = {};
  returnData = await dataBroker.loadCommandAliasesData(aliasesPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
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
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`workflowsPath is: ${workflowsPath}`);
  let returnData = {};
  returnData = await dataBroker.loadWorkflowsData(workflowsPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadThemesData
 * @description Loads the plugin themes data by calling the Haystacks to
 * load and parse the data from the specified path.
 * @param {string} themesPath Teh fully qualified path to the themes folder with all of the themes data for the plugin.
 * @return {object} A JSON object that contaisn all of the themes data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/02/02
 */
async function loadThemesData(themesPath) {
  let functionName = loadThemesData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`themesPath is: ${themesPath}`);
  let returnData = {};
  returnData = await dataBroker.loadThemesData(themesPath);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initializeData,
  loadConfigurationData,
  loadCommandAliasesData,
  loadWorkflowsData,
  loadThemesData
};