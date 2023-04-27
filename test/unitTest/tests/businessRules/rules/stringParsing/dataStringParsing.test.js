"use strict";
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file dataStringParsing.test.js
 * @module dataStringParsing.test
 * @description Unit tests for the dataStringParsing.js
 * @requires module:dataStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/27
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataStringParsing from "../../../../../../src/businessRules/rules/stringParsing/dataStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../../constants/test.constants.js";
// import * as obj_con from '../../../../testData/businessRules/rules/stringParsing/dataStringParsing.js';

// External imports
import hayConst from "@haystacks/constants";
import path from "path";
import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

const { bas, msg, sys, wrd, num, biz, cfg, cmd } = hayConst;
const baseFileName = path.basename(
  import.meta.url,
  path.extname(import.meta.url)
);
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getAttributeName
 * @description Tests the positive and negative test cases of the getAttributeName
 * @date 2023/04/27
 */
describe(tst_con.cgetAttributeName, () => {
  /**
   * @function getAttributeName_validDataString
   * @description Tests the business rules function getAttributeName with a valid input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });
  
  /**
   * @function getAttributeName_inValidDataInputDataString
   * @description Tests the business rules function getAttributeName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function getAttributeName_inValidDataInputMetaDataString
   * @description Tests the business rules function getAttributeName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function getAttributeName_inValidInputDataBoolean
   * @description Tests the business rules function getAttributeName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    // rulesLibrary.initRulesLibrary();
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });  

});

/**
 * @function getAttributeName
 * @description Tests the positive and negative test cases of the getAttributeName
 * @date 2023/04/27
 */
describe(tst_con.cgetAttributeName, () => {
    /**
     * @function getAttributeName_validDataString
     * @description Tests the business rules function getAttributeName with a valid input.
     * @author Json Howard
     * @date 2023/04/13
     */
});