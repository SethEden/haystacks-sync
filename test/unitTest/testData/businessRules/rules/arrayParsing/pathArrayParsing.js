/**
 * @file pathArrayParsing.js
 * @module pathArrayParsing
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd } = hayConst;

/**
 * @function stringPathsArray_01
 * @description get array paths to are used pathArrayParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/20
 */
export const stringPathsArray_01 = () => {
    let urlArray = [
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cbrokers + bas.cForwardSlash + wrd.ccommand + wrd.cBroker + bas.cDot + 'js',
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + 'json',
    ];
    return urlArray;
};

/**
 * @function stringPath_01
 * @description get paths to are used pathArrayParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/20
 */
export const stringPath_01 = () => {
    return tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + 'json';
};

/**
 * @function stringPath_02
 * @description get paths to are used pathArrayParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/20
 */
export const stringPath_02 = () => {
    return tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings;
};

