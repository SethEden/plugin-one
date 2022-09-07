/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all of the functions necessary to bootStrap the business rules system for the plugin.
 * @requires module:rulesLibrary
 * @requires module:plugin.constants
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
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.brokers.ruleBroker.
const namespacePrefix = plg.cpluginOne + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rule functions string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now, because this data structure is how the plugin functionality will be
 * imported and subsequently executed by the haystacks framework.
 */
async function bootStrapBusinessRules() {
  let functionName = bootStrapBusinessRules.name;
  // haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await rules.initPluginRulesLibrary();
  // haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  bootStrapBusinessRules
}