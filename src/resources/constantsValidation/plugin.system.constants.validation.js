/**
 * @file plugin.system.constants.validation.js
 * @module plugin.system.constants.validation
 * @description Contains all validations for named plugin system constants.
 * @requires module:plugin.system.constants
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_sys from '../../constants/plugin.system.constants.js';

/**
 * @function pluginSystemConstantsValidation
 * @description Initializes the plugin system constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginSystemConstantsValidation = [
  // Constants Validation
  {Name: 'cresolvedConstantsPath_Plugin', Actual: plg_sys.cresolvedConstantsPath_Plugin, Expected: 'resolvedConstantsPath_Plugin'},
  {Name: 'cpluginBusinessConstantsValidation', Actual: plg_sys.cpluginBusinessConstantsValidation, Expected: 'pluginBusinessConstantsValidation'},
  {Name: 'cpluginCommandConstantsValidation', Actual: plg_sys.cpluginCommandConstantsValidation, Expected: 'pluginCommandConstantsValidation'},
  {Name: 'cpluginConstantsValidation', Actual: plg_sys.cpluginConstantsValidation, Expected: 'pluginConstantsValidation'},
  {Name: 'cpluginMessageConstantsValidation', Actual: plg_sys.cpluginMessageConstantsValidation, Expected: 'pluginMessageConstantsValidation'},
  {Name: 'cpluginSystemConstantsValidation', Actual: plg_sys.cpluginSystemConstantsValidation, Expected: 'pluginSystemConstantsValidation'},

  // Filenames
  {Name: 'cplugin_business_constants_js', Actual: plg_sys.cplugin_business_constants_js, Expected: 'plugin.business.constants.js'},
  {Name: 'cplugin_command_constants_js', Actual: plg_sys.cplugin_command_constants_js, Expected: 'plugin.command.constants.js'},
  {Name: 'cplugin_constants_js', Actual: plg_sys.cplugin_constants_js, Expected: 'plugin.constants.js'},
  {Name: 'cplugin_message_constants_js', Actual: plg_sys.cplugin_message_constants_js, Expected: 'plugin.message.constants.js'},
  {Name: 'cplugin_system_constants_js', Actual: plg_sys.cplugin_system_constants_js, Expected: 'plugin.system.constants.js'}
];