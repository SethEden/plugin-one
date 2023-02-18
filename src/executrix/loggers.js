/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to the system-specified log file.
 * Some of the logic here is duplicated from the Haystacks repo, but kept super basic intentionally.
 * Logging from the plugin will remain hard-coded, because the data isn't loaded,
 * and by the time it is loaded its already useless to log.
 * So uncomment the lines in the plugin code if you need to log from the plugin,and leave them commented out if you don't need to log.
 * This is setup here so that the logs can be added to the application level log file,
 * especially to include data, as the data can be too much and will easily overflow the console buffer.
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/02/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../constants/plugin.constants.js';
import D from '../structures/pluginData.js';
// External imports
import hayConst from '@haystacks/constants';
import moment from 'moment';
import fs from 'fs';
import path from 'path';

const {bas, cfg, gen, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-one.executrix.loggers.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.cexecutrix + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getLogFileNameAndPath
 * @description Determines, using the Haystacks configuration settings data passed as input to the plugin entry-point,
 * what the log file name and path should be.
 * @return {string} The full path and file name for the log file.
 * @author Seth Hollingsead
 * @date 2023/02/13
 */
async function getLogFileNameAndPath(haystacksConfigData) {
  // let functionName = getLogFileNameAndPath.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // haystacksConfigData is:
  // console.log(msg.chaystacksConfigDataIs + JSON.stringify(haystacksConfigData));
  let logFile = haystacksConfigData[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.cclientRootPath];
  if (logFile !== undefined) {
    logFile = path.join(logFile + bas.cForwardSlash + wrd.clogs + bas.cForwardSlash + haystacksConfigData[wrd.cconfiguration][wrd.csystem][wrd.csystem + bas.cDot + cfg.clogFileName]);
    logFile = path.normalize(logFile);
  }
  // logFile is:
  // console.log(msg.clogFileIs + logFile);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return logFile;
}

/**
 * @function consoleLog
 * @description Logs out to the console, and to the same current Haystacks-application log file.
 * @param {string} classPath The class pass from which this console log function was called from.
 * @param {string} message The message and/or data that should be logged to the console, and the log file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/02/13
 */
async function consoleLog(classPath, message) {
  // let functionName = consoleLog.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // classPath is:
  // console.log(msg.cclassPathIs + classPath);
  // message is:
  // console.log(msg.cmessageIs + message);
  let newMessage = '';
  if (message.includes(bas.cDoublePercent) === true) {
    // Replace the double percent with the class path.
    newMessage = message.replaceAll(bas.cDoublePercent, classPath);
  } else {
    newMessage = message;
  }
  console.log(newMessage);
  let dateTimeStamp = await getNowMoment(gen.cYYYY_MM_DD_HH_mm_ss_SSS);
  await appendMessageToFile(`${dateTimeStamp}: ${plg.cpluginName}: ${newMessage}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function appendMessageToFile
 * @description Opens a file and appends a message to the file, then closes the file.
 */
async function appendMessageToFile(message) {
  // let functionName = appendMessageToFile.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // message is:
  // console.log(msg.cmessageIs + message);
  let fd;
  let filePathAndName = D[wrd.cdata][cfg.cLogFilePathAndName];
  if (message && filePathAndName) {
    try {
      // open the file sync:
      // console.log(msg.copenFileSyncMessage + filePathAndName);
      fd = fs.openSync(filePathAndName, bas.ca);
      // append to the file sync:
      // console.log(msg.cappendFileSyncMessage + filePathAndName);
      fs.appendFileSync(fd, message + bas.cCarriageReturn + bas.cNewLine, gen.cUTF8);
      // DONE appending to the file:
      // console.log(msg.cDoneAppendingToFileMessage + filePathAndName);
    } catch (err) {
      console.log(err.message);
    } finally {
      if (fd !== undefined) {
        fs.closeSync(fd);
      }
    }
  }
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatString The formatting string, that tells moment in what format to
 * return the value for the day, month, year, hour, minute, second and millisecond.
 * @return {string} A time stamp string that has been formatted acording to the input format.
 * @author Seth Hollingsead
 * @date 2023/01/13
 */
async function getNowMoment(formatString) {
  // let functionName = getNowMoment.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  // formatString is:
  // console.log(msg.cformatStringIs + formatString);
  let returnData = '';
  returnData = moment().format(formatString);
  // console.log(msg.creturnDataIs + returnData);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  getLogFileNameAndPath,
  consoleLog,
  appendMessageToFile
};