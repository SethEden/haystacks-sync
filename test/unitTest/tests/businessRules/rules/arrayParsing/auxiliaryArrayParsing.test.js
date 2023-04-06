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
 * @author Json Howard
 * @date 2020/03/31
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js";
import * as tst_con  from '../../../constants/test.constants.js';

// External imports
// import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, expect, jest } from '@jest/globals';

// const {bas, msg, sys, wrd} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function parseColorRangeInputs
 * @description Tests the positive and negative test cases of the parseColorRangeInputs function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cparseColorRangeInputs, () => {
  /**
  * @function parseColorRangeInputs_validDataInteger1
  * @description Tests the business rules function parseColorRangeInputs with a valid integer input.
  * @author Json Howard
  * @date 2022/01/21
  */
  test(tst_con.cparseColorRangeInputs_validDataInteger1, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, 10);
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });
});


/**
 * @function doesArrayContainValue
 * @description Tests the positive and negative test cases of the doesArrayContainValue function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cdoesArrayContainValue, () => {
  /**
  * @function doesArrayContainValue_validDataString
  * @description Tests the business rules function doesArrayContainValue with a valid string input.
  * @author Json Howard
  * @date 2022/01/21
  */
  test(tst_con.cdoesArrayContainValue_validDataString, () => {
    let inputData = [[1, 2, 3, 4, 5], 3]
    let inputMetaData = (a, b) => {
      return a === b ? true : false
    }
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(true)
  });
});