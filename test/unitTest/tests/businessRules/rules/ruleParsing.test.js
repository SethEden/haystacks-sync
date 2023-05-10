"use strict";
/* eslint-disable no-undef */
/**
 * @file ruleParsing.test.js
 * @module ruleParsing.test
 * @description Unit tests for the ruleParsing.js
 * @requires module:ruleParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import ruleParsing from "../../../../../src/businessRules/rules/ruleParsing";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import {
  describe,
  expect,
  test,
} from "@jest/globals";

const { biz } = hayConst;

/**
 * @function doAllRulesExist
 * @description Tests the positive and negative test cases of the doAllRulesExist
 * @date 2023/05/06
 */
describe(tst_con.cdoAllRulesExist, () => {
    /**
     * @function doAllRulesExist_validDataString
     * @description Tests the business rules function doAllRulesExist with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_validDataString, () => {
      // Arrange
      let inputData = [biz.creplaceCharacterWithCharacter];
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true); 
    });

    /**
     * @function doAllRulesExist_inValidDataInputDataString
     * @description Tests the business rules function doAllRulesExist with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doAllRulesExist_inValidDataInputDataString
     * @description Tests the business rules function doAllRulesExist with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidDataInputDataString, () => {
        // Arrange
        let inputData = [biz.creplaceCharacterWithCharacter];
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function doAllRulesExist_inValidInputDataInteger
     * @description Tests the business rules function doAllRulesExist with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doAllRulesExist_inValidInputDataBoolean
     * @description Tests the business rules function doAllRulesExist with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doAllRulesExist_inValidInputMetaDataInteger
     * @description Tests the business rules function doAllRulesExist with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doAllRulesExist_inValidInputMetaDataBoolean
     * @description Tests the business rules function doAllRulesExist with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoAllRulesExist_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doAllRulesExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function doesRuleExist
 * @description Tests the positive and negative test cases of the doesRuleExist
 * @date 2023/05/06
 */
describe(tst_con.cdoesRuleExist, () => {
    /**
     * @function doesRuleExist_validDataString
     * @description Tests the business rules function doesRuleExist with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_validDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true); 
    });

    /**
     * @function doesRuleExist_inValidDataInputDataString
     * @description Tests the business rules function doesRuleExist with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesRuleExist_inValidDataInputDataString
     * @description Tests the business rules function doesRuleExist with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidDataInputDataString, () => {
        // Arrange
        let inputData = biz.creplaceCharacterWithCharacter;
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function doesRuleExist_inValidInputDataInteger
     * @description Tests the business rules function doesRuleExist with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesRuleExist_inValidInputDataBoolean
     * @description Tests the business rules function doesRuleExist with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesRuleExist_inValidInputMetaDataInteger
     * @description Tests the business rules function doesRuleExist with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesRuleExist_inValidInputMetaDataBoolean
     * @description Tests the business rules function doesRuleExist with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cdoesRuleExist_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.doesRuleExist(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getRule
 * @description Tests the positive and negative test cases of the getRule
 * @date 2023/05/06
 */
describe(tst_con.cgetRule, () => {
    /**
     * @function getRule_validDataString
     * @description Tests the business rules function getRule with a valid input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_validDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [Function replaceCharacterWithCharacter]
    });

    /**
     * @function getRule_inValidDataInputDataString
     * @description Tests the business rules function getRule with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function getRule_inValidDataInputDataString
     * @description Tests the business rules function getRule with invalid string input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidDataInputDataString, () => {
        // Arrange
        let inputData = biz.creplaceCharacterWithCharacter;
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // [Function replaceCharacterWithCharacter]
    });

    /**
     * @function getRule_inValidInputDataInteger
     * @description Tests the business rules function getRule with invalid integer input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function getRule_inValidInputDataBoolean
     * @description Tests the business rules function getRule with invalid boolean input.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = 1;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function getRule_inValidInputMetaDataInteger
     * @description Tests the business rules function getRule with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function getRule_inValidInputMetaDataBoolean
     * @description Tests the business rules function getRule with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/06
     */
    test(tst_con.cgetRule_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = ruleParsing.getRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function processRulesInternal
 * @description Tests the positive and negative test cases of the processRulesInternal
 * @date 2023/05/06
 */
describe(tst_con.cprocessRulesInternal, () => {
  /**
   * @function processRulesInternal_validDataString
   * @description Tests the business rules function processRulesInternal with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_validDataString, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = "";

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });

  /**
   * @function processRulesInternal_inValidDataInputDataString
   * @description Tests the business rules function processRulesInternal with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidDataInputDataString, () => {
      // Arrange
      let inputData = "dfxg24346dfg";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("d");
  });

  /**
   * @function processRulesInternal_inValidDataInputDataString
   * @description Tests the business rules function processRulesInternal with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidDataInputDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = "dfxg24346dfg";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("r");
  });

  /**
   * @function processRulesInternal_inValidInputDataInteger
   * @description Tests the business rules function processRulesInternal with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function processRulesInternal_inValidInputDataBoolean
   * @description Tests the business rules function processRulesInternal with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataInteger
   * @description Tests the business rules function processRulesInternal with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(1);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataBoolean
   * @description Tests the business rules function processRulesInternal with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(1);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataUndefined
   * @description Tests the business rules function processRulesInternal with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = undefined;

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataNaN
   * @description Tests the business rules function processRulesInternal with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = NaN;

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });
});
