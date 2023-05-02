/**
 * @file fileStringParsing.js
 * @module fileStringParsing
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/02
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const { bas, num, sys, wrd } = hayConst;

export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + "xml";
    return baseUrl;
}

export const xmlFolder = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cDoubleForwardSlash;
    return baseUrl;
}