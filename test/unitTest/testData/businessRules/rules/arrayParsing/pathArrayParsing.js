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

const { bas, wrd, gen } = hayConst;

/**
 * @function stringPathsArray_01
 * @description get array paths to are used pathArrayParsing.test.js for unit test
 * @author Json Howard
 * @date 2023/04/20
 */
export const stringPathsArray_01 = () => {
    let urlArray = [
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cbrokers + bas.cForwardSlash + wrd.ccommand + wrd.cBroker + bas.cDot + gen.cjs,
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + gen.cjson,
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
    return tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + gen.cjson;
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

