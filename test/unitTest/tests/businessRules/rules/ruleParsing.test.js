'use strict';
/* eslint-disable no-undef */
/**
 * @file ruleParsing.test.js
 * @module ruleParsing.test
 * @description Unit tests for the ruleParsing.js
 * @requires module:ruleParsing
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import ruleParsing from '../../../../../src/businessRules/rules/ruleParsing';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { biz } = hayConst;

/**
 * @function doAllRulesExist
 * @description Tests the positive and negative test cases of the doAllRulesExist
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cdoAllRulesExist, () => {
  /**
   * @function doAllRulesExist_validDataString
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_validDataString, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = ruleParsing.doAllRulesExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); 
  });

  /**
   * @function doAllRulesExist_inValidDataInputDataString
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doAllRulesExist_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = [biz.creplaceCharacterWithCharacter];
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
  });

  /**
   * @function doAllRulesExist_inValidInputDataInteger
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doAllRulesExist_inValidInputDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doAllRulesExist_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doAllRulesExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doAllRulesExist_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function doAllRulesExist with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoAllRulesExist_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
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
 * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_validDataString, () => {
    // Arrange
    let inputData = biz.creplaceCharacterWithCharacter;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = ruleParsing.doesRuleExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); 
  });

  /**
   * @function doesRuleExist_inValidDataInputDataString
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doesRuleExist_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
  });

  /**
   * @function doesRuleExist_inValidInputDataInteger
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doesRuleExist_inValidInputDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doesRuleExist_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.doesRuleExist(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function doesRuleExist_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function doesRuleExist with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdoesRuleExist_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
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
 * @description Tests the businessRules.rules.ruleParsing function getRule with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_validDataString, () => {
    // Arrange
    let inputData = biz.creplaceCharacterWithCharacter;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = ruleParsing.getRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // [Function replaceCharacterWithCharacter]
  });

  /**
   * @function getRule_inValidDataInputDataString
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function getRule_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [Function replaceCharacterWithCharacter]
  });

  /**
   * @function getRule_inValidInputDataInteger
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function getRule_inValidInputDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function getRule_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = ruleParsing.getRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function getRule_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function getRule with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cgetRule_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
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
 * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_validDataString, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });

  /**
   * @function processRulesInternal_inValidDataInputDataString
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('4');
  });

  /**
   * @function processRulesInternal_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = biz.creplaceCharacterWithCharacter;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('r');
  });

  /**
   * @function processRulesInternal_inValidInputDataInteger
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function processRulesInternal_inValidInputDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(1);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act      
      let returnData = ruleParsing.processRulesInternal(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(1);
  });

  /**
   * @function processRulesInternal_inValidInputDataUndefined
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeUndefined();
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });

  /**
   * @function processRulesInternal_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.ruleParsing function processRulesInternal with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprocessRulesInternal_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = [biz.creplaceCharacterWithCharacter];
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = ruleParsing.processRulesInternal(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(biz.creplaceCharacterWithCharacter);
  });
});
