/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as loading, setup, parsing & processing.
 * @requires module:plugin.constants
 * @requires module:chiefData
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.controllers.chiefConfiguration.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupConfiguration
 * @description Sets up all of the plugin configuration data.
 * @param {string} pluginConfigPath The path of the configuration files for the plugin layer.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
async function setupConfiguration(pluginConfigPath) {
  // let functionName = setupConfiguration.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginConfigPath is:
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginConfigPathIs + pluginConfigPath);
  let returnData = {};
  returnData = await chiefData.loadConfigurationData(pluginConfigPath);
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  setupConfiguration
};