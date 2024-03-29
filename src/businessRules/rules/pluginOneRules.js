/**
 * @file pluginOneRules.js
 * @module pluginOneRules
 * @description Contains all of the business rules for the pluginOne plugin.
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.businessRules.rules.pluginOneRules.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.cbusinessRules + bas.cDot +
  wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function pluginOneRule01
 * @description Outputs pluginOneRule01,
 * to verify that the business rule has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule. 
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginOneRules.pluginOneRule01".
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
async function pluginOneRule01(inputData, inputMetaData) {
  let functionName = pluginOneRule01.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = wrd.cplugin + num.cOne + wrd.cRule + num.c01;
  console.log(namespacePrefix + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function pluginOneRule02
 * @description Outputs pluginOneRule02,
 * to verify that the business rule has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule. 
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginOneRules.pluginOneRule02".
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
async function pluginOneRule02(inputData, inputMetaData) {
  let functionName = pluginOneRule02.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = wrd.cplugin + num.cOne + wrd.cRule + num.c02;
  console.log(namespacePrefix + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  pluginOneRule01,
  pluginOneRule02
}