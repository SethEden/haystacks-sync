/**
 * @file stringParsingUtilities.js
 * @module stringParsingUtilities
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

/**
 * @file stringParsingUtilities.js
 * @function basePath
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
export const basePath = () => {
    let baseUrl = tst_con.basePath();
    return baseUrl;
}