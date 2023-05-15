"use strict";
/* eslint-disable no-undef */
/**
 * @file stringParsingUtilities.test.js
 * @module stringParsingUtilities.test
 * @description Unit tests for the stringParsingUtilities.js
 * @requires module:stringParsingUtilities
 * @requires module:rulesLibrary
 * @requires module:testData/stringParsingUtilities
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import stringParsingUtilities from "../../../../../src/businessRules/rules/stringParsingUtilities";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import * as obj_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as tst_con from "../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import { describe, expect, test } from "@jest/globals";

const { wrd } = hayConst;

/**
 * @function parseSystemRootPath
 * @description Tests the positive and negative test cases of the parseSystemRootPath
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cparseSystemRootPath, () => {
    /**
     * @function parseSystemRootPath_validDataString
     * @description Tests the business rules function parseSystemRootPath with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_validDataString, () => {
      // Arrange
      let inputData = obj_con.basePath();
      let inputMetaData = "haystack";
  
      // Act
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // haystacks-sync/test/unitTest
    });

    /**
     * @function parseSystemRootPath_inValidDataInputDataString
     * @description Tests the business rules function parseSystemRootPath with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "haystack";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
    });

    /**
     * @function parseSystemRootPath_inValidDataInputDataString
     * @description Tests the business rules function parseSystemRootPath with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = obj_con.basePath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function parseSystemRootPath_inValidInputDataBoolean
     * @description Tests the business rules function parseSystemRootPath with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "haystack";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function parseSystemRootPath_inValidInputMetaDataBoolean
     * @description Tests the business rules function parseSystemRootPath with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.basePath();
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function parseSystemRootPath_inValidInputMetaDataUndefined
     * @description Tests the business rules function parseSystemRootPath with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.basePath();
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function parseSystemRootPath_inValidInputMetaDataNaN
     * @description Tests the business rules function parseSystemRootPath with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.basePath();
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function parseSystemRootPath_inValidInputDataUndefined
     * @description Tests the business rules function parseSystemRootPath with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "haystack";
    
        // Act
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function parseSystemRootPath_inValidInputDataNaN
     * @description Tests the business rules function parseSystemRootPath with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cparseSystemRootPath_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "haystack";
    
        // Act
        let returnData = stringParsingUtilities.parseSystemRootPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function stringToDataType
 * @description Tests the positive and negative test cases of the stringToDataType
 * @date 2023/05/06
 */
describe(tst_con.cstringToDataType, () => {
    /**
     * @function stringToDataType_validDataString
     * @description Tests the business rules function stringToDataType with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidDataInputDataString
     * @description Tests the business rules function stringToDataType with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
    });

    /**
     * @function stringToDataType_inValidDataInputDataString
     * @description Tests the business rules function stringToDataType with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidInputDataBoolean
     * @description Tests the business rules function stringToDataType with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToDataType_inValidInputMetaDataInteger
     * @description Tests the business rules function stringToDataType with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidInputMetaDataBoolean
     * @description Tests the business rules function stringToDataType with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidInputMetaDataUndefined
     * @description Tests the business rules function stringToDataType with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidInputMetaDataNaN
     * @description Tests the business rules function stringToDataType with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(5);
    });

    /**
     * @function stringToDataType_inValidInputDataUndefined
     * @description Tests the business rules function stringToDataType with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToDataType_inValidInputDataNaN
     * @description Tests the business rules function stringToDataType with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToDataType_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.stringToDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function stringToBoolean
 * @description Tests the positive and negative test cases of the stringToBoolean
 * @date 2023/05/06
 */
describe(tst_con.cstringToBoolean, () => {
    /**
     * @function stringToBoolean_validDataString
     * @description Tests the business rules function stringToBoolean with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_validDataString, () => {
      // Arrange
      let inputData = "true";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function stringToBoolean_inValidDataInputDataString
     * @description Tests the business rules function stringToBoolean with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToBoolean_inValidDataInputDataString
     * @description Tests the business rules function stringToBoolean with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function stringToBoolean_inValidInputDataBoolean
     * @description Tests the business rules function stringToBoolean with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToBoolean_inValidInputMetaDataInteger
     * @description Tests the business rules function stringToBoolean with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToBoolean_inValidInputMetaDataBoolean
     * @description Tests the business rules function stringToBoolean with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToBoolean_inValidInputMetaDataUndefined
     * @description Tests the business rules function stringToBoolean with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function stringToBoolean_inValidInputMetaDataNaN
     * @description Tests the business rules function stringToBoolean with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function stringToBoolean_inValidInputDataUndefined
     * @description Tests the business rules function stringToBoolean with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function stringToBoolean_inValidInputDataNaN
     * @description Tests the business rules function stringToBoolean with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cstringToBoolean_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.stringToBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function determineObjectDataType
 * @description Tests the positive and negative test cases of the determineObjectDataType
 * @date 2023/05/06
 */
describe(tst_con.cdetermineObjectDataType, () => {
    /**
     * @function determineObjectDataType_validDataString
     * @description Tests the business rules function determineObjectDataType with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_validDataString, () => {
      // Arrange
      let inputData = "true";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.determineObjectDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("Boolean");
    });

    /**
     * @function determineObjectDataType_inValidDataInputDataString
     * @description Tests the business rules function determineObjectDataType with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("String");
    });

    /**
     * @function determineObjectDataType_inValidDataInputDataString
     * @description Tests the business rules function determineObjectDataType with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("Boolean");
    });

    /**
     * @function determineObjectDataType_inValidInputDataBoolean
     * @description Tests the business rules function determineObjectDataType with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function determineObjectDataType_inValidInputMetaDataInteger
     * @description Tests the business rules function determineObjectDataType with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("String");
    });

    /**
     * @function determineObjectDataType_inValidInputMetaDataBoolean
     * @description Tests the business rules function determineObjectDataType with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("String");
    });

    /**
     * @function determineObjectDataType_inValidInputMetaDataUndefined
     * @description Tests the business rules function determineObjectDataType with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("Boolean");
    });

    /**
     * @function determineObjectDataType_inValidInputMetaDataNaN
     * @description Tests the business rules function determineObjectDataType with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("Boolean");
    });

    /**
     * @function determineObjectDataType_inValidInputDataUndefined
     * @description Tests the business rules function determineObjectDataType with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function determineObjectDataType_inValidInputDataNaN
     * @description Tests the business rules function determineObjectDataType with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdetermineObjectDataType_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.determineObjectDataType(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isBoolean
 * @description Tests the positive and negative test cases of the isBoolean
 * @date 2023/05/06
 */
describe(tst_con.cisBoolean, () => {
    /**
     * @function isBoolean_validDataString
     * @description Tests the business rules function isBoolean with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_validDataString, () => {
      // Arrange
      let inputData = "true";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.isBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isBoolean_inValidDataInputDataString
     * @description Tests the business rules function isBoolean with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isBoolean_inValidDataInputDataString
     * @description Tests the business rules function isBoolean with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isBoolean_inValidInputDataBoolean
     * @description Tests the business rules function isBoolean with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isBoolean_inValidInputMetaDataInteger
     * @description Tests the business rules function isBoolean with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isBoolean_inValidInputMetaDataBoolean
     * @description Tests the business rules function isBoolean with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isBoolean_inValidInputMetaDataUndefined
     * @description Tests the business rules function isBoolean with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isBoolean_inValidInputMetaDataNaN
     * @description Tests the business rules function isBoolean with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "true";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isBoolean_inValidInputDataUndefined
     * @description Tests the business rules function isBoolean with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isBoolean_inValidInputDataNaN
     * @description Tests the business rules function isBoolean with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisBoolean_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isBoolean(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isInteger
 * @description Tests the positive and negative test cases of the isInteger
 * @date 2023/05/06
 */
describe(tst_con.cisInteger, () => {
    /**
     * @function isInteger_validDataString
     * @description Tests the business rules function isInteger with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.isInteger(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isInteger_inValidDataInputDataString
     * @description Tests the business rules function isInteger with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isInteger_inValidDataInputDataString
     * @description Tests the business rules function isInteger with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isInteger_inValidInputDataBoolean
     * @description Tests the business rules function isInteger with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isInteger_inValidInputMetaDataInteger
     * @description Tests the business rules function isInteger with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isInteger_inValidInputMetaDataBoolean
     * @description Tests the business rules function isInteger with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isInteger_inValidInputMetaDataUndefined
     * @description Tests the business rules function isInteger with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isInteger_inValidInputMetaDataNaN
     * @description Tests the business rules function isInteger with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isInteger_inValidInputDataUndefined
     * @description Tests the business rules function isInteger with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isInteger_inValidInputDataNaN
     * @description Tests the business rules function isInteger with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisInteger_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isInteger(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isFloat
 * @description Tests the positive and negative test cases of the isFloat
 * @date 2023/05/06
 */
describe(tst_con.cisFloat, () => {
    /**
     * @function isFloat_validDataString
     * @description Tests the business rules function isFloat with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_validDataString, () => {
      // Arrange
      let inputData = "5.5";
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.isFloat(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isFloat_inValidDataInputDataString
     * @description Tests the business rules function isFloat with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isFloat_inValidDataInputDataString
     * @description Tests the business rules function isFloat with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5.5";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isFloat_inValidInputDataBoolean
     * @description Tests the business rules function isFloat with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isFloat_inValidInputMetaDataInteger
     * @description Tests the business rules function isFloat with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isFloat_inValidInputMetaDataBoolean
     * @description Tests the business rules function isFloat with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isFloat_inValidInputMetaDataUndefined
     * @description Tests the business rules function isFloat with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "5.5";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isFloat_inValidInputMetaDataNaN
     * @description Tests the business rules function isFloat with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "5.5";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isFloat_inValidInputDataUndefined
     * @description Tests the business rules function isFloat with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isFloat_inValidInputDataNaN
     * @description Tests the business rules function isFloat with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisFloat_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isFloat(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isString
 * @description Tests the positive and negative test cases of the isString
 * @date 2023/05/06
 */
describe(tst_con.cisString, () => {
    /**
     * @function isString_validDataString
     * @description Tests the business rules function isString with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello;
      let inputMetaData = "";
  
      // Act
      let returnData = stringParsingUtilities.isString(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidDataInputDataString
     * @description Tests the business rules function isString with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidDataInputDataString
     * @description Tests the business rules function isString with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidInputDataBoolean
     * @description Tests the business rules function isString with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isString_inValidInputMetaDataInteger
     * @description Tests the business rules function isString with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidInputMetaDataBoolean
     * @description Tests the business rules function isString with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidInputMetaDataUndefined
     * @description Tests the business rules function isString with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidInputMetaDataNaN
     * @description Tests the business rules function isString with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isString_inValidInputDataUndefined
     * @description Tests the business rules function isString with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isString_inValidInputDataNaN
     * @description Tests the business rules function isString with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisString_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        let returnData = stringParsingUtilities.isString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function replaceDoublePercentWithMessage
 * @description Tests the positive and negative test cases of the replaceDoublePercentWithMessage
 * @date 2023/05/06
 */
describe(tst_con.creplaceDoublePercentWithMessage, () => {
    /**
     * @function replaceDoublePercentWithMessage_validDataString
     * @description Tests the business rules function replaceDoublePercentWithMessage with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello + "%%";
      let inputMetaData = wrd.cWorld;
  
      // Act
      let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidDataInputDataString
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = wrd.cWorld;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidDataInputDataString
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + "%%";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.cHello + "dfxg24346dfg");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputDataBoolean
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputMetaDataInteger
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("234string432");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputMetaDataBoolean
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("234string432");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputMetaDataUndefined
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello + "%%";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.cHello + "undefined");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputMetaDataNaN
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello + "%%";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.cHello + "NaN");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputDataUndefined
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid undefined input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = wrd.cWorld;
    
        // Act
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function replaceDoublePercentWithMessage_inValidInputDataNaN
     * @description Tests the business rules function replaceDoublePercentWithMessage with invalid NaN input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = wrd.cWorld;
    
        // Act
        let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function utilitiesReplaceCharacterWithCharacter
 * @description Tests the positive and negative test cases of the utilitiesReplaceCharacterWithCharacter
 * @date 2023/05/06
 */
describe(tst_con.cutilitiesReplaceCharacterWithCharacter, () => {
    /**
     * @function utilitiesReplaceCharacterWithCharacter_validDataString
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello + "%";
      let inputMetaData = ["%", wrd.cWorld];
  
      // Act
      let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
     * @function utilitiesReplaceCharacterWithCharacter_inValidDataInputDataString
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = ["%", wrd.cWorld];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
    });

    /**
     * @function utilitiesReplaceCharacterWithCharacter_inValidDataInputDataString
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + "%";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.cHello + "%");
    });

    /**
     * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("234string432");
    });

    /**
     * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("234string432");
    });

    /**
     * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN
     * @description Tests the business rules function utilitiesReplaceCharacterWithCharacter with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello + "%";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.cHello + "%");
    });
});