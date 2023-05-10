"use strict";
/* eslint-disable no-undef */
/**
 * @file constantStringParsing.test.js
 * @module constantStringParsing.test
 * @description Unit tests for the constantStringParsing.js
 * @requires module:constantStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/29
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import constantStringParsing from "../../../../../../src/businessRules/rules/stringParsing/constantStringParsing.js";
import dataBroker from "../../../../../../src/brokers/dataBroker.js";

import * as tst_con from "../../../constants/test.constants.js";
import * as obj_con from '../../../../testData/businessRules/rules/stringParsing/constantStringParsing.js';
import D from "../../../../../../src/structures/data.js";

// External imports
import hayConst from "@haystacks/constants";
import {
  describe,
  expect
} from "@jest/globals";

const { bas, sys, wrd } = hayConst;

/**
 * @function validateConstantsDataValidation
 * @description Tests the positive and negative test cases of the validateConstantsDataValidation
 * @date 2023/04/30
 */
describe(tst_con.cvalidateConstantsDataValidation, () => {
    /**
     * @function validateConstantsDataValidation_validDataString
     * @description Tests the business rules function validateConstantsDataValidation with a valid input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = 'configuration.controllers.chiefCommander.myDebugSetting';    

      // Act
      dataBroker.setupDataStorage(false);
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });
  
    /**
     * @function validateConstantsDataValidation_inValidDataInputMetaDataString
     * @description Tests the business rules function validateConstantsDataValidation with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = 'dfxg24346dfg';    

      // Act
      dataBroker.setupDataStorage(false);
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataBoolean
     * @description Tests the business rules function validateConstantsDataValidation with a invalid boolean input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];    

      // Act
      dataBroker.setupDataStorage(false);
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });
  });

  /**
 * @function determineConstantsContextQualifiedPrefix
 * @description Tests the positive and negative test cases of the determineConstantsContextQualifiedPrefix
 * @date 2023/04/30
 */
describe(tst_con.cdetermineConstantsContextQualifiedPrefix, () => {
  /**
   * @function determineConstantsContextQualifiedPrefix_validDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_validDataString, () => {
    // Arrange
    let inputData = obj_con.xmlPath();
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(obj_con.xmlPath());
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.xmlPath();
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(obj_con.xmlPath());
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });
});

  /**
 * @function determineConstantsContextQualifiedPrefix
 * @description Tests the positive and negative test cases of the determineConstantsContextQualifiedPrefix
 * @date 2023/04/30
 */
describe(tst_con.cdetermineConstantsContextQualifiedPrefix, () => {
  /**
   * @function determineConstantsContextQualifiedPrefix_validDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_validDataString, () => {
    // Arrange
    let inputData = obj_con.xmlPath();
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(obj_con.xmlPath());
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.xmlPath();
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(obj_con.xmlPath());
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });
});

 /**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Tests the positive and negative test cases of the determineSuggestedConstantsValidationLineOfCode
 * @date 2023/04/30
 */
 describe(tst_con.cdetermineSuggestedConstantsValidationLineOfCode, () => {
  /**
   * @function determineSuggestedConstantsValidationLineOfCode_validDataString
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_validDataString, () => {
    // Arrange
    let inputData = bas.cc;
    let inputMetaData = wrd.cHello;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.cHello);
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = bas.cc;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain("dfxg24346dfg");
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain("");
  });
});

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Tests the positive and negative test cases of the validateConstantsDataValidationLineItemName
 * @date 2023/04/30
 */
describe(tst_con.cvalidateConstantsDataValidationLineItemName, () => {
  /**
   * @function validateConstantsDataValidationLineItemName_validDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = wrd.cWorld;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    // dataBroker.addConstantsValidationData(inputMetaData);
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidDataInputDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = wrd.cWorld;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidDataInputMetaDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputDataInteger
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputDataBoolean
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataInteger
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function doesConstantExist
 * @description Tests the positive and negative test cases of the doesConstantExist
 * @date 2023/04/30
 */
describe(tst_con.cdoesConstantExist, () => {
  /**
   * @function doesConstantExist_validDataString
   * @description Tests the business rules function doesConstantExist with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function doesConstantExist_validDataString
   * @description Tests the business rules function doesConstantExist with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_validDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidDataInputMetaDataString
   * @description Tests the business rules function doesConstantExist with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function doesConstantExist_inValidInputDataInteger
   * @description Tests the business rules function doesConstantExist with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputDataBoolean
   * @description Tests the business rules function doesConstantExist with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputMetaDataInteger
   * @description Tests the business rules function doesConstantExist with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputMetaDataBoolean
   * @description Tests the business rules function doesConstantExist with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function getConstantType
 * @description Tests the positive and negative test cases of the getConstantType
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantType, () => {
  /**
   * @function getConstantType_validDataString
   * @description Tests the business rules function getConstantType with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = true;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidDataInputDataString
   * @description Tests the business rules function getConstantType with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = true;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantType with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidInputDataInteger
   * @description Tests the business rules function getConstantType with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidInputDataBoolean
   * @description Tests the business rules function getConstantType with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantType with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantType_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantType with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
});

/**
 * @function getConstantActualValue
 * @description Tests the positive and negative test cases of the getConstantActualValue
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantActualValue, () => {
  /**
   * @function getConstantActualValue_validDataString
   * @description Tests the business rules function getConstantActualValue with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = wrd.cWorld;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantActualValue_inValidDataInputDataString
   * @description Tests the business rules function getConstantActualValue with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = wrd.cWorld;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantActualValue_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantActualValue with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantActualValue_inValidInputDataInteger
   * @description Tests the business rules function getConstantActualValue with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
  
  /**
   * @function getConstantActualValue_inValidInputDataBoolean
   * @description Tests the business rules function getConstantActualValue with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantActualValue_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantActualValue with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantActualValue_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantActualValue with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
});

/**
 * @function getConstantName
 * @description Tests the positive and negative test cases of the getConstantName
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantName, () => {
  /**
   * @function getConstantName_validDataString
   * @description Tests the business rules function getConstantName with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_validDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidDataInputDataString
   * @description Tests the business rules function getConstantName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidInputDataInteger
   * @description Tests the business rules function getConstantName with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidInputDataBoolean
   * @description Tests the business rules function getConstantName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function getConstantName_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
});

/**
 * @function findConstantName
 * @description Tests the positive and negative test cases of the findConstantName
 * @date 2023/05/01
 */
describe(tst_con.cfindConstantName, () => {
  /**
   * @function findConstantName_validDataString
   * @description Tests the business rules function findConstantName with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function findConstantName_inValidDataInputDataString
   * @description Tests the business rules function findConstantName with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function findConstantName_inValidDataInputMetaDataString
   * @description Tests the business rules function findConstantName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function findConstantName_inValidInputDataBoolean
   * @description Tests the business rules function findConstantName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function findConstantName_inValidInputMetaDataInteger
   * @description Tests the business rules function findConstantName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function findConstantName_inValidInputMetaDataBoolean
   * @description Tests the business rules function findConstantName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
});

/**
 * @function isConstantTypeValid
 * @description Tests the positive and negative test cases of the isConstantTypeValid
 * @date 2023/05/01
 */
describe(tst_con.cisConstantTypeValid, () => {
  /**
   * @function isConstantTypeValid_validDataString
   * @description Tests the business rules function isConstantTypeValid with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantTypeValid_inValidDataInputDataString
   * @description Tests the business rules function isConstantTypeValid with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = wrd.cWorld;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidDataInputMetaDataString
   * @description Tests the business rules function isConstantTypeValid with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantTypeValid_inValidInputDataInteger
   * @description Tests the business rules function isConstantTypeValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputDataBoolean
   * @description Tests the business rules function isConstantTypeValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputMetaDataInteger
   * @description Tests the business rules function isConstantTypeValid with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputMetaDataBoolean
   * @description Tests the business rules function isConstantTypeValid with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Tests the positive and negative test cases of the convertConstantTypeToConstantPrefix
 * @date 2023/05/01
 */
describe(tst_con.cconvertConstantTypeToConstantPrefix, () => {
  /**
   * @function convertConstantTypeToConstantPrefix_validDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidDataInputDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = wrd.cWorld;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputDataInteger
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputDataBoolean
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Tests the positive and negative test cases of the constantsOptimizedFulfillmentSystem
 * @date 2023/05/01
 */
describe(tst_con.cconstantsOptimizedFulfillmentSystem, () => {
  /**
   * @function constantsOptimizedFulfillmentSystem_validDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidDataInputDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = wrd.cWorld;  

    // Act
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidInputDataBoolean
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  

    // Act
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: "World"};
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });
});

/**
 * @function constantsFulfillmentSystem
 * @description Tests the positive and negative test cases of the constantsFulfillmentSystem
 * @date 2023/05/01
 */
describe(tst_con.cconstantsFulfillmentSystem, () => {
  /**
   * @function constantsFulfillmentSystem_validDataString
   * @description Tests the business rules function constantsFulfillmentSystem with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(" + ");
  });
});

/**
 * @function validateConstantsDataValues
 * @description Tests the positive and negative test cases of the validateConstantsDataValues
 * @date 2023/05/01
 */
describe(tst_con.cvalidateConstantsDataValues, () => {
  /**
   * @function validateConstantsDataValues_validDataString
   * @description Tests the business rules function validateConstantsDataValues with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidDataInputDataString
   * @description Tests the business rules function validateConstantsDataValues with a invalid string input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidDataInputMetaDataString
   * @description Tests the business rules function validateConstantsDataValues with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputDataInteger
   * @description Tests the business rules function validateConstantsDataValues with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputDataBoolean
   * @description Tests the business rules function validateConstantsDataValues with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputMetaDataInteger
   * @description Tests the business rules function validateConstantsDataValues with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputMetaDataBoolean
   * @description Tests the business rules function validateConstantsDataValues with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function isConstantValid
 * @description Tests the positive and negative test cases of the isConstantValid
 * @date 2023/05/01
 */
describe(tst_con.cisConstantValid, () => {
  /**
   * @function isConstantValid_validDataString
   * @description Tests the business rules function isConstantValid with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidDataInputDataString
   * @description Tests the business rules function isConstantValid with a invalid string input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidDataInputMetaDataString
   * @description Tests the business rules function isConstantValid with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidInputDataInteger
   * @description Tests the business rules function isConstantValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantValid_inValidInputDataBoolean
   * @description Tests the business rules function isConstantValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantValid_inValidInputMetaDataInteger
   * @description Tests the business rules function isConstantValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidInputMetaDataBoolean
   * @description Tests the business rules function isConstantValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});