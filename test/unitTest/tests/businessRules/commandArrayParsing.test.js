'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file commandArrayParsing.test.js
 * @module commandArrayParsing.test
 * @description Unit tests for the commandArrayParsing.js
 * @requires module:characterArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/09
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import commandArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js";
import * as tst_con from '../../../constants/test.constants.js';

// External imports
// import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

// const {bas, msg, sys, wrd} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function solveLehmerCode
 * @description Tests the positive and negative test cases of the solveLehmerCode function.
 * @author Json Howard
 * @date 2023/04/09
 */
describe(tst_con.csolveLehmerCode, () => {
    
});