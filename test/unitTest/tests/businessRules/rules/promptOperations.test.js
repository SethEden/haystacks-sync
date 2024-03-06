'use strict';
/* eslint-disable no-undef */
/**
 * @file promptOperations.test.js
 * @module promptOperations.test
 * @description Unit tests for the promptOperations.js
 * @requires module:promptOperations
 * @requires module:rulesLibrary
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import promptOperations from '../../../../../src/businessRules/rules/promptOperations.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd } = hayConst;

/**
 * @function prompt
 * @description Tests the positive and negative test cases of the prompt
 * @author Json Howard
 * @date 2023/05/06
 * @NOTE Not implemented because we need to experiment with the way to capture the data that is sent to the console
 * @note inputMetaData is not defined in prompt function.
 */
describe(tst_con.cprompt, () => {
  /**
   * @function prompt_validDataString
   * @description Tests the businessRules.rules.promptOperations.prompt function, with a valid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = num.c1;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });
  
  /**
   * @function prompt_inValidDataInputDataString
   * @description Tests the businessRules.rules.promptOperations.prompt function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidDataInputDataString, () => {
    // Arrange
    let inputData = '';
    let inputMetaData = num.c1;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });
  
  /**
   * @function prompt_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.promptOperations.prompt function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });
  
  /**
   * @function prompt_inValidInputDataInteger
   * @description Tests the businessRules.rules.promptOperations.prompt function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });

  /**
   * @function prompt_inValidInputDataBoolean
   * @description Tests the businessRules.rules.promptOperations.prompt function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });

  /**
   * @function prompt_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.promptOperations.prompt function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = promptOperations.prompt(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });

  /**
   * @function prompt_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.promptOperations.prompt function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cprompt_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = promptOperations.prompt(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); 
  });
});
