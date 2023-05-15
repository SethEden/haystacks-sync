/**
 * @file functionTest.js
 * @module functionTest
 * @description simple module for unit test
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/11
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doesArrayContainValueTestFunction
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} true.
 * @author Json Howard
 * @date 2023/05/11
 */
const doesArrayContainValueTestFunction = function(inputData, inputMetaData) {
  let functionName = doesArrayContainValueTestFunction.name;
  console.log(namespacePrefix + functionName, msg.cBEGIN_Function);
  console.log(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  console.log(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  console.log(namespacePrefix + functionName, msg.creturnDataIs + returnData);
  console.log(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
};
