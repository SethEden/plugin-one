/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the plugin defined business rules as a map between function names and function calls.
 * @requires module:pluginOneRules
 * @requires module:plugin.business.constants
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import pluginOneRules from './rules/pluginOneRules.js';
import * as plg_biz from '../constants/plugin.business.constants.js';
import * as plg from '../constants/plugin.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.businessRules.rulesLibrary.
const namespacePrefix = plg.cpluginName + bas.cDot + sys.cbusinessRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initPluginRulesLibrary
 * @description Initializes an object map of plugin business rules and plugin function calls and returns them.
 * @return {object} An object that contains an array of function objects that map function name to function call for all the business rules.
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initPluginRulesLibrary = function() {
  let functionName = initPluginRulesLibrary.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData[sys.cbusinessRules] = {};
  returnData[sys.cbusinessRules] = {
    // Business Rules
    // ***********************************************************************
    // BEGIN pluginOne category
    // ***********************************************************************
    [plg_biz.cpluginOneRule01]: (inputData, inputMetaData) => pluginOneRules.pluginOneRule01(inputData, inputMetaData),
    [plg_biz.cpluginOneRule02]: (inputData, inputMetaData) => pluginOneRules.pluginOneRule02(inputData, inputMetaData)
    // ***********************************************************************
    // END pluginOne category
    // ***********************************************************************
  }
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initPluginRulesLibrary
}