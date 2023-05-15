/**
 * @file advanced.js
 * @module advanced
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/09
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd } = hayConst;

/**
 * @function workflowPath
 * @description get workflow path to are used advanced.test.js for unit test
 * @author Json Howard
 * @date 2023/05/09
 */
export const workflowPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cworkflows + bas.cForwardSlash + wrd.carray + wrd.cParsing;
    return baseUrl;
}