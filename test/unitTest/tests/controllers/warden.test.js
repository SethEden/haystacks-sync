'use strict';
/* eslint-disable no-undef */
/**
 * @file warden.test.js
 * @module constant.test
 * @description Unit tests for the warden.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/warden
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/29
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import warden from '../../../../src/controllers/warden.js';
import configurator from '../../../../src/executrix/configurator.js';
import D from '../../../../src/structures/data.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as bus_con from '../../testData/businessRules/rules/arrayParsing/dataArrayParsing.js';
import * as utl_con from '../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../testData/commandsBlob/commands/advanced.js';
import * as tst_con from '../constants/test.constants.js';
import { basePath } from '../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd, num } = hayConst;

/**
 * @function processRootPath
 * @description Tests the positive and negative test cases of the processRootPath
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cprocessRootPath, () => {
    /**
     * @function processRootPath_validDataString
     * @description Tests the business rules function processRootPath with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_validDataString, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName =wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidDataInputPathString
     * @description Tests the business rules function processRootPath with a invalid inputPath string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidDataInputPathString, () => {
        // Arrange
        let inputPath = wrd.cHello;
        let actualFrameworkName =wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidDataActualFrameworkNameString
     * @description Tests the business rules function processRootPath with a invalid actualFrameworkName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidDataActualFrameworkNameString, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName = "";

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidInputPathInteger
     * @description Tests the business rules function processRootPath with a valid inputPath Integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidInputPathInteger, () => {
        // Arrange
        let inputPath = num.c123;
        let actualFrameworkName =wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidInputPathBoolean
     * @description Tests the business rules function processRootPath with a invalid inputPath boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidInputPathBoolean, () => {
        // Arrange
        let inputPath = false;
        let actualFrameworkName =wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidActualFrameworkNameInteger
     * @description Tests the business rules function processRootPath with a invalid actualFrameworkName integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidActualFrameworkNameInteger, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName =num.c123;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidActualFrameworkNameBoolean
     * @description Tests the business rules function processRootPath with a invalid actualFrameworkName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidActualFrameworkNameBoolean, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName = false;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidInputPathUndefined
     * @description Tests the business rules function processRootPath with a invalid inputPath undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidInputPathUndefined, () => {
        // Arrange
        let inputPath = undefined;
        let actualFrameworkName = wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidInputPathNaN
     * @description Tests the business rules function processRootPath with a invalid inputPath NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidInputPathNaN, () => {
        // Arrange
        let inputPath = NaN;
        let actualFrameworkName =wrd.cHello;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidActualFrameworkNameUndefined
     * @description Tests the business rules function processRootPath with a invalid actualFrameworkName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidActualFrameworkNameUndefined, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName = undefined;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processRootPath_inValidActualFrameworkNameNaN
     * @description Tests the business rules function processRootPath with a invalid actualFrameworkName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cprocessRootPath_inValidActualFrameworkNameNaN, () => {
        // Arrange
        let inputPath = data_con.frameworkPath();
        let actualFrameworkName = NaN;

        // Act
        let returnData = warden.processRootPath(inputPath, actualFrameworkName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function initFrameworkSchema
 * @description Tests the positive and negative test cases of the initFrameworkSchema
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cinitFrameworkSchema, () => {
    /**
     * @function initFrameworkSchema_validDataString
     * @description Tests the business rules function initFrameworkSchema with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_validDataString, () => {
        // Arrange
        let configData = wrd.cHello;

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFrameworkSchema_inValidConfigDataString
     * @description Tests the business rules function initFrameworkSchema with a invalid configData string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_inValidConfigDataString, () => {
        // Arrange
        let configData = "";

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFrameworkSchema_inValidConfigDataInteger
     * @description Tests the business rules function initFrameworkSchema with a invalid configData integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_inValidConfigDataInteger, () => {
        // Arrange
        let configData = num.c123;

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFrameworkSchema_inValidConfigDataBoolean
     * @description Tests the business rules function initFrameworkSchema with a invalid configData boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_inValidConfigDataBoolean, () => {
        // Arrange
        let configData = false;

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFrameworkSchema_inValidConfigDataUndefined
     * @description Tests the business rules function initFrameworkSchema with a invalid configData undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_inValidConfigDataUndefined, () => {
        // Arrange
        let configData = undefined;

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFrameworkSchema_inValidConfigDataNaN
     * @description Tests the business rules function initFrameworkSchema with a invalid configData NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cinitFrameworkSchema_inValidConfigDataNaN, () => {
        // Arrange
        let configData = NaN;

        // Act
        let returnData = warden.initFrameworkSchema(configData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function mergeClientBusinessRules
 * @description Tests the positive and negative test cases of the mergeClientBusinessRules
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cmergeClientBusinessRules, () => {
    /**
     * @function mergeClientBusinessRules_validDataString
     * @description Tests the business rules function mergeClientBusinessRules with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_validDataString, () => {
        // Arrange
        let clientBusinessRules = bus_con.StringsObject_01;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientBusinessRules_inValidDataClientBusinessRulesString
     * @description Tests the business rules function mergeClientBusinessRules with a invalid clientBusinessRules string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_inValidDataClientBusinessRulesString, () => {
        // Arrange
        let clientBusinessRules = wrd.cHello;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesInteger
     * @description Tests the business rules function mergeClientBusinessRules with a valid clientBusinessRules integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesInteger, () => {
        // Arrange
        let clientBusinessRules = num.c123;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesBoolean
     * @description Tests the business rules function mergeClientBusinessRules with a invalid clientBusinessRules boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesBoolean, () => {
        // Arrange
        let clientBusinessRules = false;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesUndefined
     * @description Tests the business rules function mergeClientBusinessRules with a invalid clientBusinessRules undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesUndefined, () => {
        // Arrange
        let clientBusinessRules = undefined;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientBusinessRules_inValidClientBusinessRulesNaN
     * @description Tests the business rules function mergeClientBusinessRules with a invalid clientBusinessRules NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientBusinessRules_inValidClientBusinessRulesNaN, () => {
        // Arrange
        let clientBusinessRules = NaN;

        // Act
        let returnData = warden.mergeClientBusinessRules(clientBusinessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function mergeClientCommands
 * @description Tests the positive and negative test cases of the mergeClientCommands
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cmergeClientCommands, () => {
    /**
     * @function mergeClientCommands_validDataString
     * @description Tests the business rules function mergeClientCommands with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_validDataString, () => {
        // Arrange
        let clientCommands = bus_con.StringsObject_01;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientCommands_inValidDataClientCommandsString
     * @description Tests the business rules function mergeClientCommands with a invalid clientCommands string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_inValidDataClientCommandsString, () => {
        // Arrange
        let clientCommands = wrd.cHello;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientCommands_inValidClientCommandsInteger
     * @description Tests the business rules function mergeClientCommands with a invalid clientCommands Integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsInteger, () => {
        // Arrange
        let clientCommands = num.c123;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientCommands_inValidClientCommandsBoolean
     * @description Tests the business rules function mergeClientCommands with a invalid clientCommands boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsBoolean, () => {
        // Arrange
        let clientCommands = false;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientCommands_inValidClientCommandsUndefined
     * @description Tests the business rules function mergeClientCommands with a invalid clientCommands undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsUndefined, () => {
        // Arrange
        let clientCommands = undefined;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function mergeClientCommands_inValidClientCommandsNaN
     * @description Tests the business rules function mergeClientCommands with a invalid clientCommands NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cmergeClientCommands_inValidClientCommandsNaN, () => {
        // Arrange
        let clientCommands = NaN;

        // Act
        let returnData = warden.mergeClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function loadCommandAliases
 * @description Tests the positive and negative test cases of the loadCommandAliases
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cloadCommandAliases, () => {
    /**
     * @function loadCommandAliases_validDataString
     * @description Tests the business rules function loadCommandAliases with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_validDataString, () => {
        // Arrange
        let commandAliasesPath = data_con.applicationPath();

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandAliases_inValidDataCommandAliasesPathString
     * @description Tests the business rules function loadCommandAliases with a invalid commandAliasesPath string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_inValidDataCommandAliasesPathString, () => {
        // Arrange
        let commandAliasesPath = wrd.cHello;

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandAliases_inValidCommandAliasesPathstring
     * @description Tests the business rules function loadCommandAliases with a invalid commandAliasesPath Integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_inValidCommandAliasesPathstring, () => {
        // Arrange
        let commandAliasesPath = num.c123;

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandAliases_inValidCommandAliasesPathBoolean
     * @description Tests the business rules function loadCommandAliases with a invalid commandAliasesPath boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_inValidCommandAliasesPathBoolean, () => {
        // Arrange
        let commandAliasesPath = false;

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandAliases_inValidCommandAliasesPathUndefined
     * @description Tests the business rules function loadCommandAliases with a invalid commandAliasesPath undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_inValidCommandAliasesPathUndefined, () => {
        // Arrange
        let commandAliasesPath = undefined;

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandAliases_inValidCommandAliasesPathNaN
     * @description Tests the business rules function loadCommandAliases with a invalid commandAliasesPath NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandAliases_inValidCommandAliasesPathNaN, () => {
        // Arrange
        let commandAliasesPath = NaN;

        // Act
        let returnData = warden.loadCommandAliases(commandAliasesPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function loadCommandWorkflows
 * @description Tests the positive and negative test cases of the loadCommandWorkflows
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cloadCommandWorkflows, () => {
    /**
     * @function loadCommandWorkflows_validDataString
     * @description Tests the business rules function loadCommandWorkflows with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_validDataString, () => {
        // Arrange
        let workflowPathConfigName = wrd.cHello;

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflows_inValidDataWorkflowPathConfigNameString
     * @description Tests the business rules function loadCommandWorkflows with a invalid workflowPathConfigName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_inValidDataWorkflowPathConfigNameString, () => {
        // Arrange
        let workflowPathConfigName = "";

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflows_inValidWorkflowPathConfigNameInteger
     * @description Tests the business rules function loadCommandWorkflows with a invalid workflowPathConfigName integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_inValidWorkflowPathConfigNameInteger, () => {
        // Arrange
        let workflowPathConfigName = num.c123;

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflows_inValidWorkflowPathConfigNameBoolean
     * @description Tests the business rules function loadCommandWorkflows with a invalid workflowPathConfigName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_inValidWorkflowPathConfigNameBoolean, () => {
        // Arrange
        let workflowPathConfigName = false;

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflows_inValidWorkflowPathConfigNameUndefined
     * @description Tests the business rules function loadCommandWorkflows with a invalid workflowPathConfigName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_inValidWorkflowPathConfigNameUndefined, () => {
        // Arrange
        let workflowPathConfigName = undefined;

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflows_inValidWorkflowPathConfigNameNaN
     * @description Tests the business rules function loadCommandWorkflows with a invalid workflowPathConfigName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cloadCommandWorkflows_inValidWorkflowPathConfigNameNaN, () => {
        // Arrange
        let workflowPathConfigName = NaN;

        // Act
        let returnData = warden.loadCommandWorkflows(workflowPathConfigName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function executeBusinessRules
 * @description Tests the positive and negative test cases of the executeBusinessRules
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cexecuteBusinessRules, () => {
    /**
     * @function executeBusinessRules_validDataString
     * @description Tests the business rules function executeBusinessRules with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_validDataString, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidDataInputsString
     * @description Tests the business rules function executeBusinessRules with a invalid inputs string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidDataInputsString, () => {
        // Arrange
        let inputs = wrd.cHello;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidDataBusinessRulesString
     * @description Tests the business rules function executeBusinessRules with a invalid businessRules string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidDataBusinessRulesString, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = "";

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidInputsInteger
     * @description Tests the business rules function executeBusinessRules with a invalid inputs integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsInteger, () => {
        // Arrange
        let inputs = num.c123;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidInputsBoolean
     * @description Tests the business rules function executeBusinessRules with a invalid inputs boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsBoolean, () => {
        // Arrange
        let inputs = false;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidBusinessRulesInteger
     * @description Tests the business rules function executeBusinessRules with a invalid businessRules integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesInteger, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = num.c123;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidBusinessRulesBoolean
     * @description Tests the business rules function executeBusinessRules with a invalid businessRules boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesBoolean, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = false;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidInputsUndefined
     * @description Tests the business rules function executeBusinessRules with a invalid inputs undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsUndefined, () => {
        // Arrange
        let inputs = undefined;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidInputsNaN
     * @description Tests the business rules function executeBusinessRules with a invalid inputs NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidInputsNaN, () => {
        // Arrange
        let inputs = NaN;
        let businessRules = wrd.cHello;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidBusinessRulesUndefined
     * @description Tests the business rules function executeBusinessRules with a invalid businessRules undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesUndefined, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = undefined;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function executeBusinessRules_inValidBusinessRulesNaN
     * @description Tests the business rules function executeBusinessRules with a invalid businessRules NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cexecuteBusinessRules_inValidBusinessRulesNaN, () => {
        // Arrange
        let inputs = bus_con.StringsObject_01;
        let businessRules = NaN;

        // Act
        let returnData = warden.executeBusinessRules(inputs, businessRules);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function consoleLog
 * @description Tests the positive and negative test cases of the consoleLog
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cconsoleLog, () => {
    /**
     * @function consoleLog_validDataString
     * @description Tests the business rules function consoleLog with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_validDataString, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidDataInputDataString
     * @description Tests the business rules function consoleLog with a invalid inputs string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidDataInputDataString, () => {
        // Arrange
        let classPath = wrd.cHello;
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidDataInputMetaDataString
     * @description Tests the business rules function consoleLog with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidDataInputMetaDataString, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = "";

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputDataInteger
     * @description Tests the business rules function consoleLog with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputDataInteger, () => {
        // Arrange
        let classPath = num.c123;
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputDataBoolean
     * @description Tests the business rules function consoleLog with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputDataBoolean, () => {
        // Arrange
        let classPath = false;
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputMetaDataInteger
     * @description Tests the business rules function consoleLog with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputMetaDataInteger, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = num.c123;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputMetaDataBoolean
     * @description Tests the business rules function consoleLog with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputMetaDataBoolean, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = false;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputDataUndefined
     * @description Tests the business rules function consoleLog with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputDataUndefined, () => {
        // Arrange
        let classPath = undefined;
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputDataNaN
     * @description Tests the business rules function consoleLog with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputDataNaN, () => {
        // Arrange
        let classPath = NaN;
        let message = wrd.cHello;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputMetaDataUndefined
     * @description Tests the business rules function consoleLog with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputMetaDataUndefined, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = undefined;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidInputMetaDataNaN
     * @description Tests the business rules function consoleLog with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cconsoleLog_inValidInputMetaDataNaN, () => {
        // Arrange
        let classPath = data_con.frameworkPath();
        let message = NaN;

        // Act
        let returnData = warden.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
});