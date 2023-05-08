'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file advanced.test.js
 * @module advanced.test
 * @description Unit tests for the advanced.js
 * @requires module:advanced
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import advanced from "../../../../../src/commandsBlob/commands/advanced";
import D from "../../../../../src/structures/data.js";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num } = hayConst;

/**
 * @function commandSequencer
 * @description Tests the positive and negative test cases of the commandSequencer
 * @date 2023/05/08
*/

/**
 * @function workflow
 * @description Tests the positive and negative test cases of the workflow
 * @date 2023/05/08
 */
describe(tst_con.cworkflow, () => {
    /**
     * @function workflow_validDataString
     * @description Tests the business rules function workflow with a valid input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cworkflow_validDataString, () => {
      // Arrange
      let inputData = ["allSystemWorkflows", "wrkflo"];
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = advanced.workflow(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //[true, "WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again."]
    });

    /**
     * @function workflow_inValidDataInputDataString
     * @description Tests the business rules function workflow with a invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cworkflow_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.workflow(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again."]
    });

    /**
     * @function workflow_inValidInputDataInteger
     * @description Tests the business rules function workflow with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cworkflow_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.workflow(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again."]
    });

    /**
     * @function workflow_inValidInputDataBoolean
     * @description Tests the business rules function workflow with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cworkflow_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.workflow(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again."]
    });

    /**
     * @function workflow_inValidInputDataNaN
     * @description Tests the business rules function workflow with a invalid NaN input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cworkflow_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.workflow(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again."]
    });
});

/**
 * @function businessRule
 * @description Tests the positive and negative test cases of the businessRule
 * @date 2023/05/08
 */
describe(tst_con.cbusinessRule, () => {
    /**
     * @function businessRule_validDataString
     * @description Tests the business rules function businessRule with a valid input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cbusinessRule_validDataString, () => {
      // Arrange
      let inputData = ["allSystembusinessRules", "wrkflo"];
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = advanced.businessRule(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //[true, undefined]
    });

    /**
     * @function businessRule_inValidDataInputDataString
     * @description Tests the business rules function businessRule with a invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cbusinessRule_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.businessRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, undefined]
    });

    /**
     * @function businessRule_inValidInputDataInteger
     * @description Tests the business rules function businessRule with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cbusinessRule_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.businessRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, undefined]
    });

    /**
     * @function businessRule_inValidInputDataBoolean
     * @description Tests the business rules function businessRule with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cbusinessRule_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.businessRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, undefined]
    });

    /**
     * @function businessRule_inValidInputDataNaN
     * @description Tests the business rules function businessRule with a invalid NaN input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cbusinessRule_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.businessRule(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, undefined]
    });
});

/**
 * @function commandGenerator
 * @description Tests the positive and negative test cases of the commandGenerator
 * @date 2023/05/08
 */

/**
 * @function commandAliasGenerator
 * @description Tests the positive and negative test cases of the commandAliasGenerator
 * @date 2023/05/08
 */
describe(tst_con.ccommandAliasGenerator, () => {
    /**
     * @function commandAliasGenerator_validDataString
     * @description Tests the business rules function commandAliasGenerator with a valid input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccommandAliasGenerator_validDataString, () => {
      // Arrange
      let inputData = ["c,const", "g,gen,genrtr", "l,lst"];
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = advanced.commandAliasGenerator(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); //[true, "INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters."]
    });

    /**
     * @function commandAliasGenerator_inValidDataInputDataString
     * @description Tests the business rules function commandAliasGenerator with a invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccommandAliasGenerator_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.commandAliasGenerator(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters."]
    });

    /**
     * @function commandAliasGenerator_inValidInputDataInteger
     * @description Tests the business rules function commandAliasGenerator with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccommandAliasGenerator_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.commandAliasGenerator(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters."]
    });

    /**
     * @function commandAliasGenerator_inValidInputDataBoolean
     * @description Tests the business rules function commandAliasGenerator with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccommandAliasGenerator_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "123string321";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.commandAliasGenerator(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters."]
    });

    /**
     * @function commandAliasGenerator_inValidInputDataNaN
     * @description Tests the business rules function commandAliasGenerator with a invalid NaN input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccommandAliasGenerator_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = advanced.commandAliasGenerator(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); //[true, "INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters."]
    });
});