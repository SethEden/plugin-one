/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the entry point and all public functions for the plugin.
 * @requires module:plugin.constants
 * @requires module:warden
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/05/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from './constants/plugin.constants.js';
import warden from './controllers/warden.js';
import D from './structures/pluginData.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.main.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.cmain + bas.cDot;

/**
 * @function initializePlugin
 * @description Collects all of the plugin data and provides it to the
 * haystacks platform so it can be used at run-time to provide enhanced
 * capabilities to the application that loads this plugin.
 * @return {object} A JSON object that contains all of the data that the plugin
 * provides to the haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
async function initializePlugin() {
  let functionName = initializePlugin.name;
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await warden.initPluginData();
  let returnData = D; // Export all of the plugin data.
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cretrunDataIs + returnData);
  // await haystacks.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  return returnData;
};

export default {
  initializePlugin
};
