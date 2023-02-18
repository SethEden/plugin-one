/**
 * @file plugin.message.constants.validation.js
 * @module plugin.message.constants.validation
 * @description Contains all validations for named plugin message constants.
 * @requires module:plugin.message.constants
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_msg from '../../constants/plugin.message.constants.js';

/**
 * @function pluginMessageConstantsValidation
 * @description Initializes the plugin message constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginMessageConstantsValidation = [
  {Name: 'cPluginOneMessage01', Actual: plg_msg.cPluginOneMessage01, Expected: 'This is a message from PluginOne.'},
  {Name: 'cpluginConstantsPathIs', Actual: plg_msg.cpluginConstantsPathIs, Expected: 'pluginConstantsPath is: '},
  
  // Constants Validation
  {Name: 'callPluginConstantsValidationDataIs', Actual: plg_msg.callPluginConstantsValidationDataIs, Expected: 'allPluginConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_PluginBusinessIs', Actual: plg_msg.cresolvedConstantsPath_PluginBusinessIs, Expected: 'resolvedConstantsPath_PluginBusiness is: '},
  {Name: 'cresolvedConstantsPath_PluginCommandIs', Actual: plg_msg.cresolvedConstantsPath_PluginCommandIs, Expected: 'resolvedConstantsPath_PluginCommand is: '},
  {Name: 'cresolvedConstantsPath_PluginConstantIs', Actual: plg_msg.cresolvedConstantsPath_PluginConstantIs, Expected: 'resolvedConstantsPath_PluginConstant is: '},
  {Name: 'cresolvedConstantsPath_PluginMessageIs', Actual: plg_msg.cresolvedConstantsPath_PluginMessageIs, Expected: 'resolvedConstantsPath_PluginMessage is: '},
  {Name: 'cresolvedConstantsPath_PluginSystemIs', Actual: plg_msg.cresolvedConstantsPath_PluginSystemIs, Expected: 'resolvedConstantsPath_PluginSystem is: '},

  {Name: 'cPluginBusinessConstantsPhase1Validation', Actual: plg_msg.cPluginBusinessConstantsPhase1Validation, Expected: 'Plugin Business Constants Phase 1 Validation'},
  {Name: 'cPluginCommandConstantsPhase1Validation', Actual: plg_msg.cPluginCommandConstantsPhase1Validation, Expected: 'Plugin Command Constants Phase 1 Validation'},
  {Name: 'cPluginConstantsPhase1Validation', Actual: plg_msg.cPluginConstantsPhase1Validation, Expected: 'Plugin Constants Phase 1 Validation'},
  {Name: 'cPluginMessageConstantsPhase1Validation', Actual: plg_msg.cPluginMessageConstantsPhase1Validation, Expected: 'Plugin Message Constants Phase 1 Validation'},
  {Name: 'cPluginSystemConstantsPhase1Validation', Actual: plg_msg.cPluginSystemConstantsPhase1Validation, Expected: 'Plugin System Constants Phase 1 Validation'},

  {Name: 'cPluginBusinessConstantsPhase2Validation', Actual: plg_msg.cPluginBusinessConstantsPhase2Validation, Expected: 'Plugin Business Constants Phase 2 Validation'},
  {Name: 'cPluginCommandConstantsPhase2Validation', Actual: plg_msg.cPluginCommandConstantsPhase2Validation, Expected: 'Plugin Command Constants Phase 2 Validation'},
  {Name: 'cPluginConstantsPhase2Validation', Actual: plg_msg.cPluginConstantsPhase2Validation, Expected: 'Plugin Constants Phase 2 Validation'},
  {Name: 'cPluginMessageConstantsPhase2Validation', Actual: plg_msg.cPluginMessageConstantsPhase2Validation, Expected: 'Plugin Message Constants Phase 2 Validation'},
  {Name: 'cPluginSystemConstantsPhase2Validation', Actual: plg_msg.cPluginSystemConstantsPhase2Validation, Expected: 'Plugin System Constants Phase 2 Validation'}
];