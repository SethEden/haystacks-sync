"use strict";
/* eslint-disable no-undef */
/**
 * @file mathOperations.test.js
 * @module mathOperations.test
 * @description Unit tests for the mathOperations.js
 * @requires module:mathOperations
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import mathOperations from "../../../../../src/businessRules/rules/mathOperations";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../constants/test.constants.js";

// External imports
import {
  describe,
  expect,
  test,
} from "@jest/globals";

/**
 * @function hex2rgbConversion
 * @description Tests the positive and negative test cases of the hex2rgbConversion
 * @date 2023/05/06
 */
describe(tst_con.chex2rgbConversion, () => {
    /**
     * @function hex2rgbConversion_validDataString
     * @description Tests the business rules function hex2rgbConversion with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_validDataString, () => {
      // Arrange
      let inputData = "ffffff";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = mathOperations.hex2rgbConversion(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [255,255,255]
    });

    /**
     * @function hex2rgbConversion_inValidDataInputDataString
     * @description Tests the business rules function hex2rgbConversion with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // [0, 0, 223]
    });

    /**
     * @function hex2rgbConversion_inValidDataInputDataString
     * @description Tests the business rules function hex2rgbConversion with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "ffffff";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // [255,255,255]
    });

    /**
     * @function hex2rgbConversion_inValidInputDataInteger
     * @description Tests the business rules function hex2rgbConversion with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // [0, 69, 103]
    });

    /**
     * @function hex2rgbConversion_inValidInputDataBoolean
     * @description Tests the business rules function hex2rgbConversion with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function hex2rgbConversion_inValidInputMetaDataInteger
     * @description Tests the business rules function hex2rgbConversion with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[0, 0, 1]
    });

    /**
     * @function hex2rgbConversion_inValidInputMetaDataBoolean
     * @description Tests the business rules function hex2rgbConversion with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.chex2rgbConversion_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.hex2rgbConversion(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[0, 0, 1]
    });
});

/**
 * @function isOdd
 * @description Tests the positive and negative test cases of the isOdd
 * @date 2023/05/06
 */
describe(tst_con.cisOdd, () => {
    /**
     * @function isOdd_validDataString
     * @description Tests the business rules function isOdd with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_validDataString, () => {
      // Arrange
      let inputData = "1";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = mathOperations.isOdd(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isOdd_inValidDataInputDataString
     * @description Tests the business rules function isOdd with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isOdd_inValidDataInputDataString
     * @description Tests the business rules function isOdd with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "1";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isOdd_inValidInputDataInteger
     * @description Tests the business rules function isOdd with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isOdd_inValidInputDataBoolean
     * @description Tests the business rules function isOdd with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isOdd_inValidInputMetaDataInteger
     * @description Tests the business rules function isOdd with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isOdd_inValidInputMetaDataBoolean
     * @description Tests the business rules function isOdd with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisOdd_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isOdd(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isEven
 * @description Tests the positive and negative test cases of the isEven
 * @date 2023/05/06
 */
describe(tst_con.cisEven, () => {
    /**
     * @function isEven_validDataString
     * @description Tests the business rules function isEven with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_validDataString, () => {
      // Arrange
      let inputData = "2";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = mathOperations.isEven(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isEven_inValidDataInputDataString
     * @description Tests the business rules function isEven with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isEven_inValidDataInputDataString
     * @description Tests the business rules function isEven with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "2";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isEven_inValidInputDataInteger
     * @description Tests the business rules function isEven with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isEven_inValidInputDataBoolean
     * @description Tests the business rules function isEven with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isEven_inValidInputMetaDataInteger
     * @description Tests the business rules function isEven with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isEven_inValidInputMetaDataBoolean
     * @description Tests the business rules function isEven with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cisEven_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = mathOperations.isEven(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});