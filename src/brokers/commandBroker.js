/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Contains all of the functions necessary to bootStrap the commands for the plugin.
 * @requires module:commandLibrary
 * @requires module:plugin.constants
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
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.brokers.commandBroker.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapCommands
 * @description Captures al of the commands functions string-to-function call map data in
 * the rulesLibrary and migrates that data to the D-data structure.
 * This is important now, because this data structure is how the plugin functionality will be
 * imported and subsequently executed by the haystacks framework.
 * @return {object} An object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function bootStrapCommands() {
  let functionName = bootStrapCommands.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData = await commands.initPluginCommandsLibrary();
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`returnData is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  bootStrapCommands
}