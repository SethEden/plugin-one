/**
 * @file plugin.system.constants.js
 * @module plugin.system.constants
 * @description A file to hold all of the plugin system constants.
 * So none of the constants in this file should be generic/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/09/06
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, num, wrd} = hayConst;

// Constants Validation
export const cpluginSystemConstantsValidation = wrd.cplugin + wrd.cSystem + wrd.cConstants + wrd.cValidation; // pluginSystemConstantsValidation

// Filenames
export const cplugin_system_constants_js = wrd.cplugin + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + genericConstantsValidation.cDotjs; // application.system.constants.js