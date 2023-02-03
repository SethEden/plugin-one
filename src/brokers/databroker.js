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

/**
 * @function initData
 * @description Initialize the data that will be used by
 * the plugin to load all of the plugin content and export it to the Haystacks platform.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initData() {
  // let functionName = initData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  D.data = {}; // Make sure it's initialized, should have been done when we called import above.
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function loadConfigData
 * @description Calls the Haystacks platform to load the configuration data, parse it and return it as a JSON object.
 * @param {string} configPath The path to the plugin configuration data that must be loaded.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadConfigData(configPath) {
  // let functionName = loadConfigData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`configPath is: ${configPath}`);
  let returnData = {};
  // NOTE: This is the first call back to Haystacks to load data,
  // we will need to pass the Haystacks data back into this instance of Haystacks before we try to call it to get it to do any kind of work.
  if (await haystacks.accouterFramework(D[wrd.cdata][cfg.chaystacksContextObject]) === true) {
    // console.log('Done loading the Haystacks dependency data, now try and use Haystacks to load the config data, from the configPath.');
    returnData = await haystacks.loadPluginResourceData(wrd.cconfiguration, configPath);
  } else {
    // FATAL ERROR: Unable to load the specified plugin config path, Haystacks framework data dependency failure:
    console.log(msg.cloadConfigDataErrorMessage01 + configPath);
  }
  
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadCommandAliasesData
 * @description Loads the plugin command aliases data by calling the haystacks platform to
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
  returnData = await haystacks.loadPluginResourceData(wrd.ccommand + wrd.cAliases, aliasesPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadWorkflowsData
 * @description Loads the plugin workflows data by calling the Haystacks platform to
 * load and parse the workflows data from the specified path.
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
  returnData = await haystacks.loadPluginResourceData(wrd.cworkflows, workflowsPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

/**
 * @function loadThemesData
 * @description Loads the plugin themes data by calling the Haystacks platform to
 * load and parse the workflows data from the specified path.
 * @param {string} themesPath The fully qualified path to the themes folder with all of the themes data for the plugin.
 * @return {object} A JSON objct that contains all of the themes paths data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/02/02
 */
async function loadThemesData(themesPath) {
  // let functionName = loadThemesData.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // console.log(`themesPath is: ${themesPath}`);
  let returnData = {};
  returnData = await haystacks.loadPluginResourceData(wrd.cthemes, themesPath);
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initData,
  loadConfigData,
  loadCommandAliasesData,
  loadWorkflowsData,
  loadThemesData
}