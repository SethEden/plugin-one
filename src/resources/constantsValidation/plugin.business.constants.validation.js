/**
 * @file plugin.business.constants.validation.js
 * @module plugin.business.constants.validation
 * @description Contains all validations for named plugin business rule constants.
 * @requires module:plugin.business.constants
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_biz from '../../constants/plugin.business.constants.js';

/**
 * @function pluginBusinessConstantsValidation
 * @description Initializes the plugin business rules constants validation data objects array.
 * @return {array<Object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginBusinessConstantsValidation = [
  // ********************************
  // pluginOneRules rules in order
  // ********************************
  {Name: 'cpluginOneRule01', Actual: plg_biz.cpluginOneRule01, Expected: 'pluginOneRule01'},
  {Name: 'cpluginOneRule02', Actual: plg_biz.cpluginOneRule02, Expected: 'pluginOneRule02'}
];