'use strict';
/* eslint-disable no-undef */
/**
 * @file performanceMetric.test.js
 * @module constant.test
 * @description Unit tests for the performanceMetric.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/performanceMetric
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import performanceMetric from '../../../../../src/commandsBlob/commands/performanceMetric.js';
import commandsLibrary from '../../../../../src/commandsBlob/commandsLibrary';
import configurator from '../../../../../src/executrix/configurator.js';
import D from '../../../../../src/structures/data.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as utl_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../../testData/commandsBlob/commands/advanced.js';
import * as per_con from '../../../testData/commandsBlob/commands/performanceMetric.js'
import * as tst_con from '../../constants/test.constants.js';
import { basePath } from '../../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd, num } = hayConst;

/**
 * @function businessRulesMetrics
 * @description Tests the positive and negative test cases of the businessRulesMetrics
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cbusinessRulesMetrics, () => {
    /**
     * @function businessRulesMetrics_validDataString
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbusinessRulesMetrics_validDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function businessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackString
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesPerformanceTrackingStack string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = wrd.cHello;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackString
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesNamesPerformanceTrackingStack string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = wrd.cHello;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function businessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackInteger
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesPerformanceTrackingStack integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackInteger, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = num.c123;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesPerformanceTrackingStackBoolean
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesPerformanceTrackingStack integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesPerformanceTrackingStackBoolean, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = false;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackInteger
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesNamesPerformanceTrackingStack integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackInteger, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = num.c123;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackBoolean
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesNamesPerformanceTrackingStack boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackBoolean, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = false;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function businessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackUndefined
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesPerformanceTrackingStack undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = undefined;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function businessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackNaN
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesPerformanceTrackingStack NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = NaN;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = per_con.validBusinessRulesNamesPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackUndefined
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesNamesPerformanceTrackingStack undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = undefined;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackNaN
     * @description Tests the commandsBlob commands performanceMetric function businessRulesMetrics with a invalid businessRulesNamesPerformanceTrackingStack NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.cbusinessRulesPerformanceTrackingStack] = per_con.validBusinessRulesPerformanceTrackingStackArray;
        D[cfg.cbusinessRulesNamesPerformanceTrackingStack] = NaN;

        // Act
        let returnData = performanceMetric.businessRulesMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function commandMetrics
 * @description Tests the positive and negative test cases of the commandMetrics
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.ccommandMetrics, () => {
    /**
     * @function commandMetrics_validDataString
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_validDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandNamesPerformanceTrackingStackArray;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandPerformanceTrackingStackString
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandPerformanceTrackingStack string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandPerformanceTrackingStackString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandsPerformanceTrackingStack] = wrd.cHello;
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandsNamesPerformanceTrackingStackString
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandsNamesPerformanceTrackingStack string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = wrd.cHello;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandPerformanceTrackingStackInteger
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandPerformanceTrackingStack integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandPerformanceTrackingStackInteger, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandNamesPerformanceTrackingStackArray;
        D[cfg.ccommandsPerformanceTrackingStack] = num.c123;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandPerformanceTrackingStackBoolean
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandPerformanceTrackingStack boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandPerformanceTrackingStackBoolean, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandNamesPerformanceTrackingStackArray;
        D[cfg.ccommandsPerformanceTrackingStack] = false;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandsNamesPerformanceTrackingStackInteger
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandsNamesPerformanceTrackingStack integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackInteger, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = num.c123;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandsNamesPerformanceTrackingStackBoolean
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandsNamesPerformanceTrackingStack boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackBoolean, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = false;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandPerformanceTrackingStackUndefined
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandPerformanceTrackingStack undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandPerformanceTrackingStackUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandNamesPerformanceTrackingStackArray;
        D[cfg.ccommandsPerformanceTrackingStack] = undefined;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandPerformanceTrackingStackNaN
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandPerformanceTrackingStack NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandPerformanceTrackingStackNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = per_con.validCommandNamesPerformanceTrackingStackArray;
        D[cfg.ccommandsPerformanceTrackingStack] = NaN;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandsNamesPerformanceTrackingStackUndefined
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandsNamesPerformanceTrackingStack undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackUndefined, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = undefined;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function commandMetrics_inValidDataCommandsNamesPerformanceTrackingStackNaN
     * @description Tests the commandsBlob commands performanceMetric function commandMetrics with a invalid commandsNamesPerformanceTrackingStack NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackNaN, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = "";
        D[cfg.ccommandNamesPerformanceTrackingStack] = NaN;
        D[cfg.ccommandsPerformanceTrackingStack] = per_con.validCommandsPerformanceTrackingStackArray;

        // Act
        let returnData = performanceMetric.commandMetrics(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});