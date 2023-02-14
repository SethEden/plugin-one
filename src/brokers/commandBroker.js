/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Contains all of the functions necessary to bootStrap the commands for the plugin.
 * @requires module:commandLibrary
 * @requires module:plugin.constants
 * @requires module:loggers
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commands from '../commandsBlob/commandsLibrary.js';
import * as plg from '../constants/plugin.constants.js';
import loggers from '../executrix/loggers.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.brokers.commandBroker.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Captures all of the commands functions string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now, because this data structure is how the plugin functionality will be
 * imported and subsequently executed by the Haystacks platform and its host application.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function bootStrapCommands() {
  // let functionName = bootStrapCommands.name;
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  let returnData = {};
  returnData = await commands.initPluginCommandsLibrary();
  // await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  bootStrapCommands
};