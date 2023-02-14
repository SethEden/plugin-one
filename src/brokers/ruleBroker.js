/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all of the functions necessary to bootStrap the business rules system for the plugin.
 * @requires module:rulesLibrary
 * @requires module:plugin.constants
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import rules from '../businessRules/rulesLibrary.js';
import * as plg from '../constants/plugin.constants.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.brokers.ruleBroker.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rule functions string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now, because this data structure is how the plugin functionality will be
 * imported and subsequently executed by the Haystacks platform.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all the business rules.
 * @author Seth Hollingsead
 * @date 2022/09/06
 */
async function bootStrapBusinessRules() {
  let functionName = bootStrapBusinessRules.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = {};
  returnData = await rules.initPluginRulesLibrary();
  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  bootStrapBusinessRules
};