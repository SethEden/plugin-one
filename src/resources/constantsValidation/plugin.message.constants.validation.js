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
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginMessageConstantsValidation = [
  {Name: 'cPluginOneMessage01', Actual: plg_msg.cPluginOneMessage01, Expected: 'This is a message from PluginOne.'},
  {Name: 'cpluginConstantsPathIs', Actual: plg_msg.cpluginConstantsPathIs, Expected: 'pluginConstantsPath is: '},
  
  // Constants Validation
  {Name: 'callPluginConstantsValidationDataIs', Actual: plg_msg.callPluginConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_PluginBusinessIs', Actual: plg_msg.cresolvedConstantsPath_PluginBusinessIs, Expected: 'resolvedConstantsPath_PluginBusiness is: '},
  {Name: 'cresolvedConstantsPath_PluginCommandIs', Actual: plg_msg.cresolvedConstantsPath_PluginCommandIs, Expected: 'resolvedConstantsPath_PluginComand is: '},
  {Name: 'cresolvedConstantsPath_PluginConstantIs', Actual: plg_msg.cresolvedConstantsPath_PluginConstantIs, Expected: 'resolvedConstantsPath_PluginConstant is: '},
  {Name: 'cresolvedConstantsPath_PluginMessageIs', Actual: plg_msg.cresolvedConstantsPath_PluginMessageIs, Expected: 'resolvedConstantsPath_PluginMessage is: '},
  {Name: 'cresolvedConstantsPath_PluginSystemIs', Actual: plg_msg.cresolvedConstantsPath_PluginSystemIs, Expected: 'resolvedConstantsPath_PluginSystem is: '}
];