/**
 * @file fileOpertions.js
 * @module fileOpertions
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, gen, num, sys, wrd } = hayConst;

/**
 * @function fileOperationsXmlPath
 * @description Get xml path to be used in fileOperation.test.js for unit tests:
 * getXmlData_validDataString
 * getXmlData_inValidDataInputMetaDataString
 * copyFileSync_validDataString
 * copyFileSync_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/05/03
 */
export const fileOperationsXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function testXmlPath
 * @description Get test xml path to be used in fileOperation.test.js for unit tests:
 * copyFileSync_validDataString
 * copyFileSync_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/05/03
 */
export const testXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function fileOperationsXmlFolder
 * @description Get xml folder to be used in fileOperation.test.js for unit tests:
 * readDirectoryContents_validDataString
 * readDirectoryContents_inValidDataInputMetaDataString
 * scanDirectoryContents_validDataString
 * scanDirectoryContents_inValidDataInputMetaDataString
 * scanDirectoryContents_inValidInputMetaDataNaN
 * getDirectoryList_validDataString
 * getDirectoryList_inValidDataInputMetaDataString
 * readDirectorySynchronously_validDataString
 * readDirectorySynchronously_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/05/03
 */
export const fileOperationsXmlFolder = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash;
    return baseUrl;
}

/**
 * @function fileOperationsCsvPath
 * @description Get csv path to be used in fileOperation.test.js for unit tests:
 * getCsvData_validDataString
 * getCsvData_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/05/03
 */
export const fileOperationsCsvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.ccsv;
    return baseUrl;
}

/**
 * @function fileOperationsJsonPath
 * @description Get json path to be used in fileOperation.test.js for unit tests:
 * getJsonData_validDataString
 * getJsonData_inValidDataInputMetaDataString
 * writeJsonData_validDataString
 * @author Json Howard
 * @date 2023/05/03
 */
export const fileOperationsJsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cjson;
    return baseUrl;
}