/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Contains all of the top-level functions to manage the commands for the plugin.
 * @requires module:commandBroker
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/08
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../brokers/commandBroker.js';
import * as plg from '../constants/plugin.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// pluginOne.controllers.chiefCommander.
const namespacePrefix = plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initCommands
 * @description Initializes all of the commands for the plugin,
 * so they can be loaded by the framework and used by the application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/09/08
 */
async function initCommands() {
  let functionName = initCommands.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  await commandBroker.bootStrapCommands();
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  console.log(`END ${namespacePrefix}${functionName} function`);
}

export default {
  initCommands
}