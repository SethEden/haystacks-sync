/**
 * @file pathArrayParsing.js
 * @module pathArrayParsing
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
import * as tst_con from '../../../../tests/constants/test.constants.js';
const { bas, wrd } = hayConst;

/**
 * @file pathArrayParsing.js
 * @function stringPathsArray_01
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
export const stringPathsArray_01 = () => {
    let urlArray = [
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cbrokers + bas.cForwardSlash + wrd.ccommand + wrd.cBroker + bas.cDot + 'js',
        tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + 'json',
    ];
    return urlArray;
};

/**
 * @file pathArrayParsing.js
 * @function stringPath_01
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
export const stringPath_01 = () => {
    return tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings + bas.cDot + 'json';
};

/**
 * @file pathArrayParsing.js
 * @function stringPath_02
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
export const stringPath_02 = () => {
    return tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cThemes + bas.cForwardSlash + wrd.cdebug + wrd.cSettings;
};

