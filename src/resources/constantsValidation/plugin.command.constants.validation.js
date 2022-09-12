/**
 * @file plugin.command.constants.validation.js
 * @module plugin.command.constants.validation
 * @description Contains all validations for named plugin command constants.
 * @requires module:plugin.command.constants
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_cmd from '../../constants/plugin.command.constants.js';

/**
 * @function pluginCommandConstantsValidation
 * @description Initiaizes the plugin command constants vaidation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginCommandConstantsValidation = [
  // ********************************
  // pluginOneCommands commands in order
  // ********************************
  {Name: 'cpluginOneCommand01', Actual: plg_cmd.cpluginOneCommand01, Expected: 'pluginOneCommand01'},
  {Name: 'cpluginOneCommand02', Actual: plg_cmd.cpluginOneCommand02, Expected: 'pluginOneCommand02'}
];