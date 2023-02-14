/**
 * @file plugin.constants.validation.js
 * @module plugin.constants.validation
 * @description Contains all validations for named plugin constants.
 * @requires module:plugin.constants
 * @author Seth Hollingsead
 * @date 2022/09/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';

/**
 * @function pluginConstantsValidation
 * @description Initializes the plugin constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2022/09/12
 */
export const pluginConstantsValidation = [
  // Plugin constants
  {Name: 'cpluginName', Actual: plg.cpluginName, Expected: 'plugin-one'},
  {Name: 'cPluginDevPath', Actual: plg.cPluginDevPath, Expected: '/src/'},
  {Name: 'cPluginProdPath', Actual: plg.cPluginProdPath, Expected: '/bin/'},
  {Name: 'cResourcesCommonPath', Actual: plg.cResourcesCommonPath, Expected: 'resources/'},
  {Name: 'cCommandsCommonPath', Actual: plg.cCommandsCommonPath, Expected: 'commands/'},
  {Name: 'cConstantsPath', Actual: plg.cConstantsPath, Expected: 'constants/'},
  {Name: 'cConfigurationCommonPath', Actual: plg.cConfigurationCommonPath, Expected: 'configuration/'},
  {Name: 'cWorkflowsCommonPath', Actual: plg.cWorkflowsCommonPath, Expected: 'workflows/'},
  {Name: 'cThemesCommonPath', Actual: plg.cThemesCommonPath, Expected: 'themes/'},

  // Full Dev paths
  {Name: 'cFullDevResourcesPath', Actual: plg.cFullDevResourcesPath, Expected: '/src/resources/'},
  {Name: 'cFullDevCommandsPath', Actual: plg.cFullDevCommandsPath, Expected: '/src/resources/commands/'},
  {Name: 'cFullDevConstantsPath', Actual: plg.cFullDevConstantsPath, Expected: '/src/constants/'},
  {Name: 'cFullDevConfigurationPath', Actual: plg.cFullDevConfigurationPath, Expected: '/src/resources/configuration/'},
  {Name: 'cFullDevWorkflowsPath', Actual: plg.cFullDevWorkflowsPath, Expected: '/src/resources/workflows/'},
  {Name: 'cFullDevThemesPath', Actual: plg.cFullDevThemesPath, Expected: '/src/resources/themes/'},
  {Name: 'cmetaDataDevPath', Actual: plg.cmetaDataDevPath, Expected: '/src/resources/metaData.json'},

  // Full Prod paths
  {Name: 'cFullProdResourcesPath', Actual: plg.cFullProdResourcesPath, Expected: '/bin/resources/'},
  {Name: 'cFullProdCommandsPath', Actual: plg.cFullProdCommandsPath, Expected: '/bin/resources/commands/'},
  {Name: 'cFullProdConstantsPath', Actual: plg.cFullProdConstantsPath, Expected: '/bin/constants/'},
  {Name: 'cFullProdConfigurationPath', Actual: plg.cFullProdConfigurationPath, Expected: '/bin/resources/configuration/'},
  {Name: 'cFullProdWorkflowsPath', Actual: plg.cFullProdWorkflowsPath, Expected: '/bin/resources/workflows/'},
  {Name: 'cFullProdThemesPath', Actual: plg.cFullProdThemesPath, Expected: '/bin/resources/themes/'},
  {Name: 'cmetaDataProdPath', Actual: plg.cmetaDataProdPath, Expected: '/bin/resources/metaData.json'}
];