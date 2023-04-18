/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const { bas, num, sys, wrd } = hayConst;

// Objects name
export const JsonObjectArrayOfStrings_01 = { 'data': ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/test.csv'] };
export const JsonObjectOfStrings_02 = {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"};

export const JsonObjectOfStrings_03 = () => {
    let obj = {};
    obj[sys.cConstantsValidationData] = [JsonObjectOfStrings_02, JsonObjectArrayOfStrings_01];
    return obj;
};
