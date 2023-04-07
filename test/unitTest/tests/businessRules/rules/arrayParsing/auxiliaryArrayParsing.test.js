'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
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
 * @date 2023/04/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js";
import * as tst_con from '../../../constants/test.constants.js';

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
  * @function parseColorRangeInputs_validDataString
  * @description Tests the business rules function parseColorRangeInputs with a valid string input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataString, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs('1', '10');
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });

  /**
  * @function parseColorRangeInputs_validDataMixedUse1
  * @description Tests the business rules function parseColorRangeInputs with a valid mixed input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataMixedUse1, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, '10');
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  })

  /**
  * @function parseColorRangeInputs_validDataMixedUse2
  * @description Tests the business rules function parseColorRangeInputs with a valid mixed input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataMixedUse2, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs('1', 10);
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  })

  /**
  * @function parseColorRangeInputs_validDataInteger
  * @description Tests the business rules function parseColorRangeInputs with a valid integer input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_validDataInteger, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, 10);
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });

  /**
  * @function parseColorRangeInputs_inValidInputDataUndefined
  * @description Tests the business rules function parseColorRangeInputs with a invalid undefined input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputDataUndefined, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(undefined, 10);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(undefined, '10');
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputDataNaN
  * @description Tests the business rules function parseColorRangeInputs with a invalid nan input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputDataNaN, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(NaN, 10);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(NaN, '10');
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputMetaDataUndefined
  * @description Tests the business rules function parseColorRangeInputs with a invalid undefined input meta data.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputMetaDataUndefined, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(0, undefined);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
    returnData = auxiliaryArrayParsing.parseColorRangeInputs('10', undefined);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
  });

  /**
  * @function parseColorRangeInputs_inValidInputMetaDataNaN
  * @description Tests the business rules function parseColorRangeInputs with a invalid nan input meta data.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cparseColorRangeInputs_inValidInputMetaDataNaN, () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(10, NaN);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
    returnData = auxiliaryArrayParsing.parseColorRangeInputs('10', NaN);
    expect(returnData[0]).toBe(0);
    expect(returnData[1]).toBe(0);
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
  * @function doesArrayContainValue_validDataInputDataString
  * @description Tests the business rules function doesArrayContainValue with a valid string array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataString, () => {
    let inputData = [["1", "2", "3", "4", "5"], "3"];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataInteger
  * @description Tests the business rules function doesArrayContainValue with a valid integer array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataInteger, () => {
    let inputData = [[1, 2, 3, 4, 5], 3];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataBoolean
  * @description Tests the business rules function doesArrayContainValue with a valid boolean array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataBoolean, () => {
    let inputData = [[true, true, false, false, true], true];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_validDataInputDataObject
  * @description Tests the business rules function doesArrayContainValue with a valid object array input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_validDataInputDataObject, () => {
    let inputData = [
      [
        { "constants": "c,const123", "Generator2": "g,gen,genrtr32", "List": "l,lst12" },
        { "constants": "c,const12", "Generator32": "g,gen,genrtr12", "List": "l,lst32" },
        { "constants": "c,const32", "Generator12": "g,gen,genrtr13", "List": "l,lst22" },
        { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" },
        { "constants": "c,const22", "Generator32": "g,gen,genrtr31", "List": "l,lst44" }
      ],
      { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" }
    ];
    let inputMetaData = (object1, object2) => {
      const keys1 = Object.keys(object1);
      const keys2 = Object.keys(object2);
      if (keys1.length !== keys2.length) return false;
      for (let key of keys1)
        if (object1[key] !== object2[key])
          return false;
      return true;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(true);
  });

  /**
  * @function doesArrayContainValue_inValidInputDataUndefined
  * @description Tests the business rules function doesArrayContainValue with a invalid undefined input.
  * @author Json Howard
  * @date 2023/04/06
  */
  test(tst_con.cdoesArrayContainValue_inValidInputDataUndefined, () => {
    let inputData = undefined;
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(false);
  })

  /**
   * @function doesArrayContainValue_inValidInputDataNaN
   * @description Tests the business rules function doesArrayContainValue with a invalid NaN input.
   * @author Json Howard
   * @date 2023/04/06
   */
  test(tst_con.cdoesArrayContainValue_inValidInputDataNaN, () => {
    let inputData = NaN;
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(false);
  })

  /**
   * @function doesArrayContainValue_inValidDataStorageInputMetaDataInteger
   * @description Tests the business rules function doesArrayContainValue with a invalid integer input meta data.
   * @author Json Howard
   * @date 2023/04/06
   */
  test(tst_con.cdoesArrayContainValue_inValidDataStorageInputMetaDataInteger, () => {
    let inputData = [[1, 2, 3, 4, 5], 4567];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(false);
  })
  
  /**
   * @function doesArrayContainValue_inValidDataStorageInputMetaDataBoolean
   * @description Tests the business rules function doesArrayContainValue with a invalid boolean input meta data.
   * @author Json Howard
   * @date 2023/04/06
   */
   test(tst_con.cdoesArrayContainValue_inValidDataStorageInputMetaDataBoolean, () => {
    let inputData = [[1, 2, 3, 4, 5], false];
    let inputMetaData = (a, b) => {
      return a === b ? true : false;
    };
    let returnData;
    returnData = auxiliaryArrayParsing.doesArrayContainValue(inputData, inputMetaData);
    expect(returnData).toBe(false);
  })
});