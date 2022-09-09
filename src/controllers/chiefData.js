/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains high level data initialization and data management functions for the plugin.
 * @requires module:dataBroker
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import dataBroker from '../brokers/databroker.js';
import * as plg from '../constants/plugin.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.controllers.chiefData.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeData
 * @description Initialize the data that will be used by
 * the plugin to load all of the plugin content and export it to the haystacks platform.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initializeData() {
  let functionName = initializeData.name;
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await dataBroker.initData();
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function loadConfigurationData
 * @description Loads the plugin configuration data by calling the haystacks to
 * load and parse the data from the specified path.
 * @param {string} configPath The fully qualified path to the configuration folder with all of the configuration data.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/09
 */
async function loadConfigurationData(configPath) {
  let functionName = loadConfigurationData.name;
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await dataBroker.loadConfigData()
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initializeData,
  loadConfigurationData
}