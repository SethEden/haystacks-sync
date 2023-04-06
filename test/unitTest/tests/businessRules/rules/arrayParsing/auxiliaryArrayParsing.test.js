'use strict';
/**
 * @file auxiliaryArrayParsing.test.js
 * @module auxiliaryArrayParsing.test
 * @description Unit tests for the auxiliaryArrayParsing.js
 * @requires module:auxiliaryArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/03/31
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js";
import tst_con from '../../../constants/test.constants.js';
// External imports
// import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, jest } from '@jest/globals';

// const {bas, msg, sys, wrd} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseColorRangeInputs
 * @description Tests the positive and negative test cases of the parseColorRangeInputs function.
 * @author Seth Hollingsead
 * @date 2023/04/06
 */
describe(tst_con.cparseColorRangeInputs, () => {
  /**
  * @function parseColorRangeInputs_validDataInteger1
  * @description Tests the business rules function parseColorRangeInputs with a valid integer input.
  * @author Seth Hollingsead
  * @date 2022/01/21
  */
  test(tst_con.cparseColorRangeInputs_validDataInteger1, async () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, 10);
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });
});
