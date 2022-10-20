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

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.brokers.dataBroker.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

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
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // D = {}; // Make sure it's initialized, should have been done when we called import above.
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
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
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cconfigPathIs + configPath);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`configPath is: ${configPath}`);
  let returnData = {};
  returnData = await haystacks.loadPluginResourceData(wrd.cconfiguration, configPath);
  // await haystacks.consoleLog(namespacePrexfix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initData,
  loadConfigData
}