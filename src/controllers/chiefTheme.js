/**
 * @file chiefTheme.js
 * @module chiefTheme
 * @description Contains all the functions to manage the theme system,
 * such as loading, setup, parsing & processing.
 * @requires module:plugin.constants
 * @requires module:chiefData
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/02
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
// plugin.plugin-one.controllers.chiefTheme.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupThemes
 * @description Sets up all of the plugin themes data.
 * @param {string} pluginThemesPath The path of the themes files for the plugin layer.
 * @return {object} A JSON object that contains all of the configuration data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2023/02/02
 */
async function setupThemes(pluginThemesPath) {
  let functionName = setupThemes.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginThemesPath is:
  await loggers.consoleLog(namespacePrefix + functionName, msg.cpluginThemesPathIs + pluginThemesPath);
  let returnData = {};
  returnData = await chiefData.loadThemesData(pluginThemesPath);
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  setupThemes
};