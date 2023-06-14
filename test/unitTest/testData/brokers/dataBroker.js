/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, gen, num, sys, wrd } = hayConst;

// Objects name
export const JsonObjectArrayOfStrings_01 = { 'data': ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/test.csv'] };
export const JsonObjectOfStrings_02 = { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" };
export const stringRandomText = '464gsdsfae8f46';

/**
 * @function jsonObjectOfStrings_03
 * @description Get object to be used in commandBroker.test.js and dataBroker.test.js for unit tests:
 * getAllCommandAliasData_validData
 * getCommandNamespaceDataObject_validData
 * getCommandNamespaceDataObject_inValidNamespaceToFindString
 * getCommandNamespaceDataObject_inValidNamespaceToFindNumber
 * getCommandNamespaceDataObject_inValidNamespaceToFindBoolean
 * addConstantsValidationData
 * @author Json Howard
 * @date 2023/04/17
 */
export const jsonObjectOfStrings_03 = () => {
    let obj = {};
    obj[sys.cConstantsValidationData] = [JsonObjectOfStrings_02, JsonObjectArrayOfStrings_01];
    return obj;
};

/**
 * @function applicationPath
 * @description Get application path to be used in dataBroker.test.js for unit tests:
 * findUniversalDebugConfigSetting_validData
 * findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
 * @author Json Howard
 * @date 2023/04/17
 */
export const applicationPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.capplication + bas.cDot + wrd.csystem + bas.cDot + gen.cjson;
    return baseUrl;
};

/**
 * @function frameworkPath
 * @description Get framework path to be used dataBroker.test.js for unit test:
 * findUniversalDebugConfigSetting_validData
 * @author Json Howard
 * @date 2023/04/17
 */
export const frameworkPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cframework + bas.cDot + wrd.csystem + bas.cDot + gen.cjson;
    return baseUrl;
};

/**
 * @function dataBrokerCsvPath
 * @description Get test csv path to be used in dataBroker.test.js for unit tests:
 * loadAllCsvData_validData
 * loadAllCsvData_inValidString
 * loadAllCsvData_inValidContextNameString
 * @author Json Howard
 * @date 2023/04/17
 */
export const dataBrokerCsvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.ccsv;
    return baseUrl;
}

/**
 * @function dataBrokerXmlPath
 * @description Get test xml path to be used in dataBroker.test.js for unit tests:
 * loadedAllXmlData_validData
 * loadedAllXmlData_inValidString
 * loadAllXmlData_inValidContextNameString
 * @author Json Howard
 * @date 2023/04/17
 */
export const dataBrokerXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function dataBrokerJsonPath
 * @description Get test json path to be used in dataBroker.test.js for unit tests:
 * loadAllJsonData_validData
 * loadAllJsonData_inValidString
 * loadAllJsonData_inValidContextNameString
 * preprocessJsonFile_validData
 * @author Json Howard
 * @date 2023/04/17
 */
export const dataBrokerJsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cconfig + bas.cDot + gen.cjson;
    return baseUrl;
};

/**
 * @function writeJsonDataPath
 * @description Get test json path to save to be used in dataBroker.test.js for unit test:
 * writeJsonDataToFile_validData
 * @author Json Howard
 * @date 2023/04/17
 */
export const writeJsonDataPath = () => {
    let baseUrl = tst_con.basePath();
    let urlArray = baseUrl.split(bas.cForwardSlash);
    let resUrl = '';
    for(const element of urlArray) {
        resUrl += element;
        if(element === wrd.cHaystack)
            break;
        resUrl += bas.cForwardSlash;
    }
    resUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cjson;
    return resUrl;
}