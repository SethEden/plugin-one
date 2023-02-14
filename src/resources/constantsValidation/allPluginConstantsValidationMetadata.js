/**
 * @file allPluginConstantsValidationMetadata.js
 * @module allPluginConstantsValidationMetadata
 * @description Contains all validation data for all plugin constants.
 * @requires module:plugin.business.constants
 * @requires module:plugin.command.constants
 * @requires module:plugin.constants
 * @requires module:plugin.message.constants
 * @requires module:plugin.system.constants
 * @requires module:loggers
 * @requires module:plugin.business.constants.validation
 * @requires module:plugin.command.constants.validation
 * @requires module:plugin.constants.validation
 * @requires module:plugin.message.constants.validation
 * @requires module:plugin.system.constants.validation
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_biz from '../../constants/plugin.business.constants.js';
import * as plg_cmd from '../../constants/plugin.command.constants.js';
import * as plg from '../../constants/plugin.constants.js';
import * as plg_msg from '../../constants/plugin.message.constants.js';
import * as plg_sys from '../../constants/plugin.system.constants.js';
import loggers from '../../executrix/loggers.js';
import * as plg_biz_cv from './plugin.business.constants.validation.js';
import * as plg_cmd_cv from './plugin.command.constants.validation.js';
import * as plg_cv from './plugin.constants.validation.js';
import * as plg_msg_cv from './plugin.message.constants.validation.js';
import * as plg_sys_cv from './plugin.system.constants.validation.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.resources.constantsValidation.allPluginConstantsValidationMetadata.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cresources + bas.cDot + wrd.cconstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeAllPluginConstantsValidationData
 * @description Initializes all of the plugin constants validation data so that it can be used to validate all of the constants.
 * @param {string} pluginConstantsPath The path to the plugin constants folder.
 * @return {object} A JSON object that contains all of the data and metaData for plugin level constants validation.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
async function initializeAllPluginConstantsValidationData(pluginConstantsPath) {
  let functionName = initializeAllPluginConstantsValidationData.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  // pluginConstantsPath is:
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cpluginConstantsPathIs + pluginConstantsPath);

  let allPluginConstantsValidationData = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginBusinessConstantsValidation] = [];
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginCommandConstantsValidation] = [];
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginConstantsValidation] = [];
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginMessageConstantsValidation] = [];
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginSystemConstantsValidation] = [];

  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginBusinessConstantsValidation] = plg_biz_cv.pluginBusinessConstantsValidation;
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginCommandConstantsValidation] = plg_cmd_cv.pluginCommandConstantsValidation;
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginConstantsValidation] = plg_cv.pluginConstantsValidation;
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginMessageConstantsValidation] = plg_msg_cv.pluginMessageConstantsValidation;
  allPluginConstantsValidationData[sys.cConstantsValidationData][plg_sys.cpluginSystemConstantsValidation] = plg_sys_cv.pluginSystemConstantsValidation;

  // Setup all the paths to the constants files.
  let resolvedConstantsPath_PluginBusiness = path.resolve(pluginConstantsPath + bas.cForwardSlash + plg_sys.cplugin_business_constants_js);
  let resolvedConstantsPath_PluginCommand = path.resolve(pluginConstantsPath + bas.cForwardSlash + plg_sys.cplugin_command_constants_js);
  let resolvedConstantsPath_PluginConstant = path.resolve(pluginConstantsPath + bas.cForwardSlash + plg_sys.cplugin_constants_js);
  let resolvedConstantsPath_PluginMessage = path.resolve(pluginConstantsPath + bas.cForwardSlash + plg_sys.cplugin_message_constants_js);
  let resolvedConstantsPath_PluginSystem = path.resolve(pluginConstantsPath + bas.cForwardSlash + plg_sys.cplugin_system_constants_js);

  // resolvedConstantsPath_PluginBusiness
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cresolvedConstantsPath_PluginBusinessIs + resolvedConstantsPath_PluginBusiness);
  // resolvedConstantsPath_PluginCommand
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cresolvedConstantsPath_PluginCommandIs + resolvedConstantsPath_PluginCommand);
  // resolvedConstantsPath_PluginConstant
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cresolvedConstantsPath_PluginConstantIs + resolvedConstantsPath_PluginConstant);
  // resolvedConstantsPath_PluginMessage
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cresolvedConstantsPath_PluginMessageIs + resolvedConstantsPath_PluginMessage);
  // resolvedConstantsPath_PluginSystem
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.cresolvedConstantsPath_PluginSystemIs + resolvedConstantsPath_PluginSystem);

  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][plg_sys.cpluginBusinessConstantsValidation] = resolvedConstantsPath_PluginBusiness;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][plg_sys.cpluginCommandConstantsValidation] = resolvedConstantsPath_PluginCommand;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][plg_sys.cpluginConstantsValidation] = resolvedConstantsPath_PluginConstant;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][plg_sys.cpluginMessageConstantsValidation] = resolvedConstantsPath_PluginMessage;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][plg_sys.cpluginSystemConstantsValidation] = resolvedConstantsPath_PluginSystem;

  // Plugin Business Constants Phase 1 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][plg_sys.cpluginBusinessConstantsValidation] = plg_msg.cPluginBusinessConstantsPhase1Validation;
  // Plugin Command Constants Phase 1 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][plg_sys.cpluginCommandConstantsValidation] = plg_msg.cPluginCommandConstantsPhase1Validation;
  // Plugin Constants Phase 1 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][plg_sys.cpluginConstantsValidation] = plg_msg.cPluginConstantsPhase1Validation;
  // Plugin Message Constants Phase 1 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][plg_sys.cpluginMessageConstantsValidation] = plg_msg.cPluginMessageConstantsPhase1Validation;
  // Plugin System Constants Phase 1 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][plg_sys.cpluginSystemConstantsValidation] = plg_msg.cPluginSystemConstantsPhase1Validation;

  // Plugin Business Constants Phase 2 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][plg_sys.cpluginBusinessConstantsValidation] = plg_msg.cPluginBusinessConstantsPhase2Validation;
  // Plugin Command Constants Phase 2 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][plg_sys.cpluginCommandConstantsValidation] = plg_msg.cPluginCommandConstantsPhase2Validation;
  // Plugin Constants Phase 2 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][plg_sys.cpluginConstantsValidation] = plg_msg.cPluginConstantsPhase2Validation;
  // Plugin Message Constants Phase 2 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][plg_sys.cpluginMessageConstantsValidation] = plg_msg.cPluginMessageConstantsPhase2Validation;
  // Plugin System Constants Phase 2 Validation
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][plg_sys.cpluginSystemConstantsValidation] = plg_msg.cPluginSystemConstantsPhase2Validation;

  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][plg_sys.cpluginBusinessConstantsValidation] = gen.cplg + bas.cUnderscore + gen.cbiz;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][plg_sys.cpluginCommandConstantsValidation] = gen.cplg + bas.cUnderscore + gen.ccmd;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][plg_sys.cpluginConstantsValidation] = gen.cplg;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][plg_sys.cpluginMessageConstantsValidation] = gen.cplg + bas.cUnderscore + gen.cmsg;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][plg_sys.cpluginSystemConstantsValidation] = gen.cplg + bas.cUnderscore + gen.csys;

  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][plg_sys.cpluginBusinessConstantsValidation] = plg_sys.cplugin_business_constants_js;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][plg_sys.cpluginCommandConstantsValidation] = plg_sys.cplugin_command_constants_js;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][plg_sys.cpluginConstantsValidation] = plg_sys.cplugin_constants_js;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][plg_sys.cpluginMessageConstantsValidation] = plg_sys.cplugin_message_constants_js;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][plg_sys.cpluginSystemConstantsValidation] = plg_sys.cplugin_system_constants_js;

  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][plg_sys.cpluginBusinessConstantsValidation] = gen.cplg + bas.cUnderscore + gen.cbiz + bas.cDot;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][plg_sys.cpluginCommandConstantsValidation] = gen.cplg + bas.cUnderscore + gen.ccmd + bas.cDot;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][plg_sys.cpluginConstantsValidation] = gen.cplg + bas.cDot;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][plg_sys.cpluginMessageConstantsValidation] = gen.cplg + bas.cUnderscore + gen.cmsg + bas.cDot;
  allPluginConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][plg_sys.cpluginSystemConstantsValidation] = gen.cplg + bas.cUnderscore + gen.csys + bas.cDot;

  // allPluginConstantsValidationData is:
  await loggers.consoleLog(namespacePrefix + functionName, plg_msg.callPluginConstantsValidationDataIs + JSON.stringify(allPluginConstantsValidationData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return allPluginConstantsValidationData;
}

export default {
  initializeAllPluginConstantsValidationData
};