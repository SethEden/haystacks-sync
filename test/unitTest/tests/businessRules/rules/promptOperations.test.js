"use strict";
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
import promptOperations from "../../../../../src/businessRules/rules/promptOperations";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from "../../constants/test.constants.js";

// External imports
import { describe, expect, test } from "@jest/globals";

/**
 * @function prompt
 * @description Tests the positive and negative test cases of the prompt
 * @author Json Howard
 * @date 2023/05/06
 * @NOTE Not implemented because we need to experiment with the way to capture the data that is sent to the console
 */
describe(tst_con.cprompt, () => {
  /**
   * @function prompt_inValidInputMetaDataInteger
   * @description Tests the business rules function prompt with a invalid integer inputMetaData.
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
   * @description Tests the business rules function prompt with invalid boolean inputMetaData.
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