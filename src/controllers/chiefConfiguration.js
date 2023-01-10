/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all the functions to manage the configuration system,
 * such as oading, setup, parsing & processing.
 * @requires module:chiefData
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js';
// External imports
import haystacks from '@haystacks/async';
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
  let functionName = setupConfiguration.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`pluginConfigPath is: ${pluginConfigPath}`);
  let returnData = {};
  returnData = await chiefData.loadConfigurationData(pluginConfigPath);
  console.log(`loaded plugin config data is: ${JSON.stringify(returnData)}`)
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  setupConfiguration
};