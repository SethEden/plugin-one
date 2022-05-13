/**
 * @file main.js
 * @module main
 * @description This is the main initialization for the plugin.
 * It contains the ...
 * @author Seth Hollingsead
 * @date 2022/05/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

/**
 * @function initializePlugin
 * @description Collects all of the plugin data and provides it to the
 * haystacks platform so it can be used at run-time to provide enhanced
 * capabilities to the application that loads this plugin.
 * @return {object} A JSON object that contains all of the data that the plugin
 * provides to the haystacks platform.
 * @author Seth Hollingsead
 * @date 2022/05/12
 */
function initializePlugin() {
  console.log('BEGIN main.bootStrapPlugin function');
  let returnData = 'HELLO WORLD - FROM PluginOne';
  console.log('END main.bootStrapPlugin function');
  return returnData;
};

initializePlugin();

export default {
  initializePlugin
};
