/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const { bas, num, sys, wrd } = hayConst;

// Objects name
export const JsonObjectArrayOfStrings_01 = { 'data': ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/test.csv'] };
export const JsonObjectOfStrings_02 = { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" };

export const JsonObjectOfStrings_03 = () => {
    let obj = {};
    obj[sys.cConstantsValidationData] = [JsonObjectOfStrings_02, JsonObjectArrayOfStrings_01];
    return obj;
};
export const applicationPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.capplication + bas.cDot + wrd.csystem + bas.cDot + "json";
    return baseUrl;
};
export const frameworkPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cframework + bas.cDot + wrd.csystem + bas.cDot + "json";
    return baseUrl;
};
export const csvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + "csv";
    return baseUrl;
}
export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + "xml";
    return baseUrl;
}
export const jsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cconfig + bas.cDot + "json";
    return baseUrl;
};
export const writeJsonDatapath = () => {
    let baseUrl = tst_con.basePath();
    let urlArray = baseUrl.split('/');
    let resUrl = '';
    for(let i = 0; i < urlArray.length; i ++) {
        resUrl += urlArray[i];
        if(urlArray[i] === 'Haystack')
            break;
        resUrl += '/';
    }
    resUrl += bas.cForwardSlash + wrd.ctest + bas.cDot + 'json';
    return resUrl;
}