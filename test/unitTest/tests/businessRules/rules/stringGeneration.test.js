"use strict";
/* eslint-disable no-undef */
/**
 * @file stringGeneration.test.js
 * @module stringGeneration.test
 * @description Unit tests for the stringGeneration.js
 * @requires module:stringGeneration
 * @requires module:rulesLibrary
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import stringGeneration from "../../../../../src/businessRules/rules/stringGeneration";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from "../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import { describe, expect, test } from "@jest/globals";

const { wrd } = hayConst;

/**
 * @function generateRandomMixedCaseTextByLength
 * @description Tests the positive and negative test cases of the generateRandomMixedCaseTextByLength
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomMixedCaseTextByLength, () => {
    /**
     * @function generateRandomMixedCaseTextByLength_validDataString
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomMixedCaseTextByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomMixedCaseTextByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomUpperCaseTextByLength
 * @description Tests the positive and negative test cases of the generateRandomUpperCaseTextByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomUpperCaseTextByLength, () => {
    /**
     * @function generateRandomUpperCaseTextByLength_validDataString
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate(Upper)
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomUpperCaseTextByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomUpperCaseTextByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomLowerCaseTextByLength
 * @description Tests the positive and negative test cases of the generateRandomLowerCaseTextByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomLowerCaseTextByLength, () => {
    /**
     * @function generateRandomLowerCaseTextByLength_validDataString
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate(Lower)
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomLowerCaseTextByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomLowerCaseTextByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomMixedCaseTextWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomMixedCaseTextWithSpecialCharactersByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength, () => {
    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_validDataString
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomMixedCaseTextWithSpecialCharactersByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomUpperCaseTextWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomUpperCaseTextWithSpecialCharactersByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength, () => {
    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_validDataString
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomUpperCaseTextWithSpecialCharactersByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomLowerCaseTextWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomLowerCaseTextWithSpecialCharactersByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength, () => {
    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_validDataString
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_validDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 5 characters generate
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // 4567 characters generate
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean
     * @description Tests the business rules function generateRandomLowerCaseTextWithSpecialCharactersByLength with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();
    
        // Act        
        let returnData = stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function generateRandomMixedCaseAlphaNumericCodeByLength
 * @description Tests the positive and negative test cases of the generateRandomMixedCaseAlphaNumericCodeByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength, () => {
  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_validDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomUpperCaseAlphaNumericCodeByLength
 * @description Tests the positive and negative test cases of the generateRandomUpperCaseAlphaNumericCodeByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength, () => {
  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_validDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomLowerCaseAlphaNumericCodeByLength
 * @description Tests the positive and negative test cases of the generateRandomLowerCaseAlphaNumericCodeByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength, () => {
  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_validDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomNumericCodeByLength
 * @description Tests the positive and negative test cases of the generateRandomNumericCodeByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomNumericCodeByLength, () => {
  /**
   * @function generateRandomNumericCodeByLength_validDataString
   * @description Tests the business rules function generateRandomNumericCodeByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomNumericCodeByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomNumericCodeByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomNumericCodeByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomNumericCodeByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomNumericCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @date 2023/05/06
 */
describe(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength, () => {
  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength, () => {
  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @description Tests the positive and negative test cases of the generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength, () => {
  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(Mixed)
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomSpecialCharacterCodeByLength
 * @description Tests the positive and negative test cases of the generateRandomSpecialCharacterCodeByLength
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomSpecialCharacterCodeByLength, () => {
  /**
   * @function generateRandomSpecialCharacterCodeByLength_validDataString
   * @description Tests the business rules function generateRandomSpecialCharacterCodeByLength with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomSpecialCharacterCodeByLength_validDataString, () => {
    // Arrange
    let inputData = "5";
    let inputMetaData = "[, ], (, )";

    // Act
    let returnData = stringGeneration.generateRandomSpecialCharacterCodeByLength(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 5 characters generate(inputMetadata)
  });

  /**
   * @function generateRandomSpecialCharacterCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomSpecialCharacterCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "[, ], (, )";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomSpecialCharacterCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomSpecialCharacterCodeByLength_inValidDataInputDataString
   * @description Tests the business rules function generateRandomSpecialCharacterCodeByLength with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "5";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomSpecialCharacterCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomSpecialCharacterCodeByLength_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomSpecialCharacterCodeByLength with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomSpecialCharacterCodeByLength_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomSpecialCharacterCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateRandomSpecialCharacterCodeByLength_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomSpecialCharacterCodeByLength with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomSpecialCharacterCodeByLength_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomSpecialCharacterCodeByLength(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });
});

/**
 * @function generateValidEmail
 * @description Tests the positive and negative test cases of the generateValidEmail
 * @date 2023/05/08
 */
describe(tst_con.cgenerateValidEmail, () => {
  /**
   * @function generateValidEmail_validDataString
   * @description Tests the business rules function generateValidEmail with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_validDataString, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = [true, wrd.cHello, "test.com"];

    // Act
    let returnData = stringGeneration.generateValidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // H@test.com
  });

  /**
   * @function generateValidEmail_inValidDataInputDataString
   * @description Tests the business rules function generateValidEmail with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = [true, wrd.cHello, "test.com"];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidDataInputDataString
   * @description Tests the business rules function generateValidEmail with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "10";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateValidEmail_inValidInputDataInteger
   * @description Tests the business rules function generateValidEmail with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 4567 characters generate
  });

  /**
   * @function generateValidEmail_inValidInputDataBoolean
   * @description Tests the business rules function generateValidEmail with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidInputMetaDataInteger
   * @description Tests the business rules function generateValidEmail with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateValidEmail with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateValidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidInputDataUndefined
   * @description Tests the business rules function generateValidEmail with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = [true, wrd.cHello, "test.com"];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateValidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidInputDataNaN
   * @description Tests the business rules function generateValidEmail with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = [true, wrd.cHello, "test.com"];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateValidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function generateValidEmail_inValidInputMetaDataUndefined
   * @description Tests the business rules function generateValidEmail with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateValidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateValidEmail_inValidInputMetaDataNaN
   * @description Tests the business rules function generateValidEmail with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateValidEmail_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateValidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateInvalidEmail
 * @description Tests the positive and negative test cases of the generateInvalidEmail
 * @date 2023/05/08
 */
describe(tst_con.cgenerateInvalidEmail, () => {
  /**
   * @function generateInvalidEmail_validDataString
   * @description Tests the business rules function generateInvalidEmail with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_validDataString, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = [true, wrd.cHello, "test.com"];

    // Act
    let returnData = stringGeneration.generateInvalidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); // Xtest.com
  });

  /**
   * @function generateInvalidEmail_inValidDataInputDataString
   * @description Tests the business rules function generateInvalidEmail with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = [true, wrd.cHello, "test.com"];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function generateInvalidEmail_inValidDataInputMetaDataString
   * @description Tests the business rules function generateInvalidEmail with invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = "10";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // 5 characters generate
  });

  /**
   * @function generateInvalidEmail_inValidInputDataInteger
   * @description Tests the business rules function generateInvalidEmail with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // 4567 characters generate
  });

  /**
   * @function generateInvalidEmail_inValidInputDataBoolean
   * @description Tests the business rules function generateInvalidEmail with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateInvalidEmail_inValidInputMetaDataInteger
   * @description Tests the business rules function generateInvalidEmail with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateInvalidEmail_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateInvalidEmail with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateInvalidEmail(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateInvalidEmail_inValidInputDataUndefined
   * @description Tests the business rules function generateInvalidEmail with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = [true, wrd.cHello, "test.com"];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateInvalidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function generateInvalidEmail_inValidInputDataNaN
   * @description Tests the business rules function generateInvalidEmail with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = [true, wrd.cHello, "test.com"];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateInvalidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });

  /**
   * @function generateInvalidEmail_inValidInputMetaDataUndefined
   * @description Tests the business rules function generateInvalidEmail with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateInvalidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined();
  });

  /**
   * @function generateInvalidEmail_inValidInputMetaDataNaN
   * @description Tests the business rules function generateInvalidEmail with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateInvalidEmail_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = "10";
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateInvalidEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined();
  });
});

/**
 * @function generateRandomBrightColor
 * @description Tests the positive and negative test cases of the generateRandomBrightColor
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomBrightColor, () => {
  /**
   * @function generateRandomBrightColor_validDataString
   * @description Tests the business rules function generateRandomBrightColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_validDataString, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomBrightColor_validDataInteger
   * @description Tests the business rules function generateRandomBrightColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_validDataInteger, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomBrightColor_validDataStringInteger
   * @description Tests the business rules function generateRandomBrightColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_validDataStringInteger, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomBrightColor_validDataIntegerString
   * @description Tests the business rules function generateRandomBrightColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_validDataIntegerString, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomBrightColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomBrightColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomBrightColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomBrightColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomBrightColor_inValidInputDataInteger
   * @description Tests the business rules function generateRandomBrightColor with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // 4567 characters generate
  });

  /**
   * @function generateRandomBrightColor_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomBrightColor with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomBrightColor_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomBrightColor with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomBrightColor_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomBrightColor with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomBrightColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomBrightColor_inValidInputDataUndefined
   * @description Tests the business rules function generateRandomBrightColor with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomBrightColor_inValidInputDataNaN
   * @description Tests the business rules function generateRandomBrightColor with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomBrightColor_inValidInputMetaDataUndefined
   * @description Tests the business rules function generateRandomBrightColor with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomBrightColor_inValidInputMetaDataNaN
   * @description Tests the business rules function generateRandomBrightColor with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomBrightColor_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomBrightColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomDarkColor
 * @description Tests the positive and negative test cases of the generateRandomDarkColor
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomDarkColor, () => {
  /**
   * @function generateRandomDarkColor_validDataString
   * @description Tests the business rules function generateRandomDarkColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_validDataString, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomDarkColor_validDataInteger
   * @description Tests the business rules function generateRandomDarkColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_validDataInteger, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomDarkColor_validDataStringInteger
   * @description Tests the business rules function generateRandomDarkColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_validDataStringInteger, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomDarkColor_validDataIntegerString
   * @description Tests the business rules function generateRandomDarkColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_validDataIntegerString, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomDarkColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomDarkColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomDarkColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomDarkColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomDarkColor_inValidInputDataInteger
   * @description Tests the business rules function generateRandomDarkColor with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // 4567 characters generate
  });

  /**
   * @function generateRandomDarkColor_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomDarkColor with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomDarkColor_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomDarkColor with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomDarkColor_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomDarkColor with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomDarkColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomDarkColor_inValidInputDataUndefined
   * @description Tests the business rules function generateRandomDarkColor with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomDarkColor_inValidInputDataNaN
   * @description Tests the business rules function generateRandomDarkColor with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomDarkColor_inValidInputMetaDataUndefined
   * @description Tests the business rules function generateRandomDarkColor with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomDarkColor_inValidInputMetaDataNaN
   * @description Tests the business rules function generateRandomDarkColor with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomDarkColor_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomDarkColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function generateRandomColor
 * @description Tests the positive and negative test cases of the generateRandomColor
 * @date 2023/05/08
 */
describe(tst_con.cgenerateRandomColor, () => {
  /**
   * @function generateRandomColor_validDataString
   * @description Tests the business rules function generateRandomColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_validDataString, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomColor_validDataInteger
   * @description Tests the business rules function generateRandomColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_validDataInteger, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomColor_validDataStringInteger
   * @description Tests the business rules function generateRandomColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_validDataStringInteger, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = 57972;

    // Act
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomColor_validDataIntegerString
   * @description Tests the business rules function generateRandomColor with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_validDataIntegerString, () => {
    // Arrange
    let inputData = 57972;
    let inputMetaData = "!@#$%^&*";

    // Act
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ["44", "1", "114"]
  });

  /**
   * @function generateRandomColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomColor_inValidDataInputDataString
   * @description Tests the business rules function generateRandomColor with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = "dfxg24346dfg";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function generateRandomColor_inValidInputDataInteger
   * @description Tests the business rules function generateRandomColor with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // 4567 characters generate
  });

  /**
   * @function generateRandomColor_inValidInputDataBoolean
   * @description Tests the business rules function generateRandomColor with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = "!@#$%^&*";
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomColor_inValidInputMetaDataInteger
   * @description Tests the business rules function generateRandomColor with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomColor_inValidInputMetaDataBoolean
   * @description Tests the business rules function generateRandomColor with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = "!@#$%^&*";
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = stringGeneration.generateRandomColor(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); // random
  });

  /**
   * @function generateRandomColor_inValidInputDataUndefined
   * @description Tests the business rules function generateRandomColor with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomColor_inValidInputDataNaN
   * @description Tests the business rules function generateRandomColor with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = "!@#$%^&*";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomColor_inValidInputMetaDataUndefined
   * @description Tests the business rules function generateRandomColor with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function generateRandomColor_inValidInputMetaDataNaN
   * @description Tests the business rules function generateRandomColor with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgenerateRandomColor_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = "!@#$%^&*";
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = stringGeneration.generateRandomColor(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});