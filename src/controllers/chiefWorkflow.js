/**
 * @file chiefWorkflow
 * @module chiefWorkflow
 * @description Contains all of the top-level functions to manage the workflows for the plugin.
 * @requires module:plugin.constants
 * @requires module:chiefData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/10/21
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js'
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.controllers.chiefWorkflow.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setupWorkflows
 * @description Sets up all the plugin workflows data.
 * @param {string} pluginWorkflowsPath The path of the workflows files for the plugin layer.
 * @return {object} A JSON object that contains all of the workflows data loaded and parsed from the specified path.
 * @author Seth Hollingsead
 * @date 2022/10/21
 */
async function setupWorkflows(pluginWorkflowsPath) {
  let functionName = setupWorkflows.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  console.log(`pluginWorkflowsPath is: ${pluginWorkflowsPath}`);
  let returnData = {};
  returnData = await chiefData.loadWorkflowsData(pluginWorkflowsPath);
  console.log(`loaded plugin command aliases data is: ${JSON.stringify(returnData)}`);
  console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  setupWorkflows
}