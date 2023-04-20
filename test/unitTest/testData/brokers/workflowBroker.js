/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

import path from 'path';
const { bas, num, sys, wrd } = hayConst;

// Objects name
export const workflowPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cworkflows + bas.cForwardSlash + wrd.carray + wrd.cParsing;
    return baseUrl;
}