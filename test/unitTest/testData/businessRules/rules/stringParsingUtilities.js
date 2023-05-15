/**
 * @file stringParsingUtilities.js
 * @module stringParsingUtilities
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

/**
 * @function basePath
 * @description get base path to are used stringParsingUtilities.test.js for unit test
 * @author Json Howard
 * @date 2023/05/08
 */
export const basePath = () => {
    let baseUrl = tst_con.basePath();
    return baseUrl;
}