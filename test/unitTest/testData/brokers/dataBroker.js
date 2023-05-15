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

const { bas, sys, wrd, gen } = hayConst;

// Objects name
export const JsonObjectArrayOfStrings_01 = { 'data': ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/test.csv'] };
export const JsonObjectOfStrings_02 = { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" };

/**
 * @function jsonObjectOfStrings_03
 * @description get object to are used commandBroker.test.js and dataBroker.test.js for unit test
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
 * @description get application path to are used dataBroker.test.js for unit test
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
 * @description get framework path to are used dataBroker.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const frameworkPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cframework + bas.cDot + wrd.csystem + bas.cDot + gen.cjson;
    return baseUrl;
};

/**
 * @function csvPath
 * @description get test csv path to are used dataBroker.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const csvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.ccsv;
    return baseUrl;
}

/**
 * @function xmlPath
 * @description get test xml path to are used dataBroker.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function jsonPath
 * @description get test json path to are used dataBroker.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const jsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cconfig + bas.cDot + gen.cjson;
    return baseUrl;
};

/**
 * @function writeJsonDataPath
 * @description get test json path to save to are used dataBroker.test.js for unit test
 * @author Json Howard
 * @date 2023/04/17
 */
export const writeJsonDataPath = () => {
    let baseUrl = tst_con.basePath();
    let urlArray = baseUrl.split(bas.cForwardSlash);
    let resUrl = '';
    for(let i = 0; i < urlArray.length; i ++) {
        resUrl += urlArray[i];
        if(urlArray[i] === wrd.cHaystack)
            break;
        resUrl += bas.cForwardSlash;
    }
    resUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cjson;
    return resUrl;
}