/**
 * @file configuration.js
 * @module configuration
 * @description Contains many re-usable test object constants.
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
 * @file configuration.js
 * @function testConfigPath
 * @author Json Howard
 * @date 2023/05/09
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
export const testConfigPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest;
    return baseUrl;
}