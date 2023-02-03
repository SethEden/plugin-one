/**
 * @file chiefTheme.js
 * @module chiefTheme
 * @description Contains all the functions to manage the theme system,
 * such as loading, setup, parsing & processing.
 * @requires module:chiefData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/02
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js';
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
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`pluginThemesPath is: ${pluginThemesPath}`);
  let returnData = {};
  returnData = await chiefData.loadThemesData(pluginThemesPath);
  console.log(`loaded plugin config data is: ${JSON.stringify(returnData)}`)
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  setupThemes
};