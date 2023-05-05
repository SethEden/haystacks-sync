/**
 * @file fileOpertions.js
 * @module fileOpertions
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const { bas, num, sys, wrd } = hayConst;

export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + "xml";
    return baseUrl;
}

export const testxmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + "xml";
    return baseUrl;
}

export const xmlFolder = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash;
    return baseUrl;
}

export const csvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + "csv";
    return baseUrl;
}

export const jsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + "json";
    return baseUrl;
}

export const commonFolderPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cbrokers + bas.cForwardSlash;
    return baseUrl;
}

export const zipPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + "zip";
    return baseUrl;
}

export const packageFolder = () => {
    let baseUrl = tst_con.basePath();
    console.log(baseUrl)
    baseUrl += bas.cForwardSlash + wrd.cpackages + bas.cForwardSlash;
    return baseUrl;
}