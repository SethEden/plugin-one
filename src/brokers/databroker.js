/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains middle or low-level data management functions.
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import D from '../structures/pluginData.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.brokers.dataBroker.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;
haystacks.accouterFramework(D[wrd.cdata][cfg.chaystacksContextObject]);

/**
 * @function initData
 * @description Initialize the data that will be used by
 * the plugin to load all of the plugin content and export it to the haystacks platform.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initData() {
  let functionName = initData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  D.data = {}; // Make sure it's initialized, should have been done when we called import above.
  console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function loadConfigData
 * @description Calls the haystacks tool to load the configuration data, parse it and return it as a JSON object.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadConfigData(configPath) {
  let functionName = loadConfigData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configPath is: ${configPath}`);
  let returnData = {};
  returnData = await haystacks.loadPluginResourceData(wrd.cconfiguration, configPath);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadCommandAliasesData
 * @description Loads the plugin command aliases data by calling the haystacks to
 * load and parse the data from the specified path.
 * @param {strng} aliasesPath The fully qualified path to the command aliases folder with al of the command aliases data for the plugin.
 * @return {object} A JSON object that contains all of the command aliases data loaded and parsed rom the specified path.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
 async function loadCommandAliasesData(aliasesPath) {
  let functionName = loadCommandAliasesData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`aliasesPath is: ${aliasesPath}`);
  let returnData = {};
  returnData = await haystacks.loadPluginResourceData(wrd.ccommand + wrd.cAliases, aliasesPath);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadWorkflowsData
 * @description Loads the plugin workflows data by calling the haystacks to
 * oad and parse the data from the specified path.
 * @param {string} workflowsPath The fully qualified path to the comand aliases folder with all of the workflows data for the plugin.
 * @return {object} A JSON object that contains all of the command aliases data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
 async function loadWorkflowsData(workflowsPath) {
  let functionName = loadWorkflowsData.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`workflowsPath is: ${workflowsPath}`);
  let returnData = {};
  returnData = await haystacks.loadPluginResourceData(wrd.cworkflows, workflowsPath);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initData,
  loadConfigData,
  loadCommandAliasesData,
  loadWorkflowsData
}