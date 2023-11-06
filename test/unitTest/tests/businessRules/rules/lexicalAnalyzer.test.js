'use strict';
/* eslint-disable no-undef */
/**
 * @file lexicalAnalyzer.test.js
 * @module lexicalAnalyzer.test
 * @description Unit tests for the lexicalAnalyzer.js
 * @requires module:lexicalAnalyzer
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:testData/lexicalAnalyzer
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/05
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import lexicalAnalyzer from '../../../../../src/businessRules/rules/lexicalAnalyzer';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as lex_con from '../../../testData/businessRules/rules/lexicalAnalyzer.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, wrd } = hayConst;

/**
 * @function parseBusinessRuleArgument
 * @description Tests the positive and negative test cases of the parseBusinessRuleArgument
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.cparseBusinessRuleArgument, () => {
  /**
   * @function parseBusinessRuleArgument_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_validDataString, () => {
    // Arrange
    let inputData = lex_con.RandomParameters;
    let inputMetaData = 1;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // ['<?xml version='1.0' encoding='UTF-8'?><CommandWorkflows></CommandWorkflows>']
  });

  /**
   * @function parseBusinessRuleArgument_validDataArrayString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with a array string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_validDataArrayString, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [['df','xg','24','34','6d','fg']]
  });

  /**
   * @function parseBusinessRuleArgument_validDataArrayInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with a array integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_validDataArrayInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [[1,2,3,4,5]]
  });

  /**
   * @function parseBusinessRuleArgument_validDataArrayBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with a array boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_validDataArrayBoolean, () => {
      // Arrange
      let inputData = [false,true,false];
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [[false,true,false]]
  });

  /**
   * @function parseBusinessRuleArgument_validDataArrayObject
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with a array object input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_validDataArrayObject, () => {
      // Arrange
      let inputData = lex_con.arrayObjectRandomWords;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [[{'constants':'c,const','Generator':'g,gen,genrtr','List':'l,lst'},{'wonder':'wondr,wundr,wndr','Woman':'wman,wmn,womn','Amazing':'amzing,amzng'}]]
  });

  /**
   * @function parseBusinessRuleArgument_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // ['464gsdsfae8f46']
  });

  /**
   * @function parseBusinessRuleArgument_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [['df','xg','24','34','6d','fg']]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [4567]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [false]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [['df','xg','24','34','6d','fg']]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [['df','xg','24','34','6d','fg']]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputDataUndefined
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputDataUndefined, () => {
      // Arrange
      let inputData = undefined;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [undefined]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputDataNaN
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputDataNaN, () => {
      // Arrange
      let inputData = NaN;
      let inputMetaData = 1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // [NaN]
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputMetaDataUndefined, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = undefined;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // ['df','xg','24','34','6d','fg']
  });

  /**
   * @function parseBusinessRuleArgument_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseBusinessRuleArgument with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseBusinessRuleArgument_inValidInputMetaDataNaN, () => {
      // Arrange
      let inputData = lex_con.arrayStringRandomText;
      let inputMetaData = NaN;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseBusinessRuleArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // ['df','xg','24','34','6d','fg']
  });
});

/**
 * @function analyzeArgument
 * @description Tests the positive and negative test cases of the analyzeArgument
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.canalyzeArgument, () => {
  /**
   * @function analyzeArgument_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.analyzeArgument(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });

  /**
   * @function analyzeArgument_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('464gsdsfae8f46');
    });

  /**
   * @function analyzeArgument_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });

  /**
   * @function analyzeArgument_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = wrd.cHello;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.analyzeArgument(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });

  /**
   * @function analyzeArgument_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.analyzeArgument(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });

  /**
   * @function analyzeArgument_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });

  /**
   * @function analyzeArgument_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeArgument with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeArgument_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeArgument(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cHello + bas.cColon + wrd.cWorld);
  });
});

/**
 * @function analyzeForRegularExpression
 * @description Tests the positive and negative test cases of the analyzeForRegularExpression
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.canalyzeForRegularExpression, () => {
  /**
   * @function analyzeForRegularExpression_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_validDataString, () => {
    // Arrange
    let inputData = bas.cForwardSlash + bas.cg + bas.cForwardSlash + bas.cPlus;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.analyzeForRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function analyzeForRegularExpression_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeForRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
    });

  /**
   * @function analyzeForRegularExpression_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = bas.cForwardSlash + bas.cg + bas.cForwardSlash + bas.cPlus;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeForRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function analyzeForRegularExpression_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.analyzeForRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function analyzeForRegularExpression_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.analyzeForRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function analyzeForRegularExpression_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeForRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function analyzeForRegularExpression_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function analyzeForRegularExpression with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.canalyzeForRegularExpression_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.analyzeForRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });
});

/**
 * @function parseArgumentAsRegularExpression
 * @description Tests the positive and negative test cases of the parseArgumentAsRegularExpression
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.cparseArgumentAsRegularExpression, () => {
  /**
   * @function parseArgumentAsRegularExpression_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); ///(?:)/
  });

  /**
   * @function parseArgumentAsRegularExpression_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); ///(?:)/
    });

  /**
   * @function parseArgumentAsRegularExpression_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeDefined(); ///(?:)/
  });

  /**
   * @function parseArgumentAsRegularExpression_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); ///(?:)/
  });

  /**
   * @function parseArgumentAsRegularExpression_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); ///(?:)/
  });

  /**
   * @function parseArgumentAsRegularExpression_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); ///(?:)/
  });

  /**
   * @function parseArgumentAsRegularExpression_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsRegularExpression with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsRegularExpression_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsRegularExpression(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeDefined(); ///(?:)/
  });
});

/**
 * @function parseArgumentAsArray
 * @description Tests the positive and negative test cases of the parseArgumentAsArray
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.cparseArgumentAsArray, () => {
  /**
   * @function parseArgumentAsArray_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_validDataString, () => {
    // Arrange
    let inputData = lex_con.arrayStringNumbers;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.parseArgumentAsArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['1,2,3']
  });

  /**
   * @function parseArgumentAsArray_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseArgumentAsArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //['464gsdsfae8f46']
    });

  /**
   * @function parseArgumentAsArray_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = lex_con.arrayStringNumbers;
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.parseArgumentAsArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //['1,2,3']
  });

  /**
   * @function parseArgumentAsArray_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['1,2,3']
  });

  /**
   * @function parseArgumentAsArray_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['1,2,3']
  });

  /**
   * @function parseArgumentAsArray_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['1,2,3']
  });

  /**
   * @function parseArgumentAsArray_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function parseArgumentAsArray with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cparseArgumentAsArray_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.parseArgumentAsArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['1,2,3']
  });
});

/**
 * @function removeStringLiteralTagsFromArray
 * @description Tests the positive and negative test cases of the removeStringLiteralTagsFromArray
 * @author Json Howard
 * @date 2023/05/05
 */
describe(tst_con.cremoveStringLiteralTagsFromArray, () => {
  /**
   * @function removeStringLiteralTagsFromArray_validDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with a valid input.
   * @author Json Howard
   * @date 2023/05/05
   */  test(tst_con.cremoveStringLiteralTagsFromArray_validDataString, () => {
    // Arrange
    let inputData = [wrd.chello + wrd.cworld];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //['hello', 'world']
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidDataInputDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid string input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('464gsdsfae8f46'); 
    });

  /**
   * @function removeStringLiteralTagsFromArray_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = [wrd.chello + wrd.cworld];
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //['hello', 'world']
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(4567);
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputDataUndefined
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
});

  /**
   * @function removeStringLiteralTagsFromArray_inValidInputDataNaN
   * @description Tests the businessRules.rules.lexicalAnalyzer function removeStringLiteralTagsFromArray with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/05
   */
  test(tst_con.cremoveStringLiteralTagsFromArray_inValidInputDataNaN, () => {
      // Arrange
      let inputData = NaN;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = lexicalAnalyzer.removeStringLiteralTagsFromArray(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });
});
