'use strict';
/* eslint-disable no-undef */
/**
 * @file main.test.js
 * @module constant.test
 * @description Unit tests for the main.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/main
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/09/05
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import main from '../../../../src/main.js';
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
 * @function initFramework
 * @description Tests the positive and negative test cases of the initFramework
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cinitFramework, () => {
    /**
     * @function initFramework_validDataString
     * @description Tests the business rules function initFramework with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_validDataString, () => {
        // Arrange
        let clientConfiguration = wrd.cHello;

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFramework_inValidDataClientConfigurationString
     * @description Tests the business rules function initFramework with a invalid cientConfiguration string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_inValidDataClientConfigurationString, () => {
        // Arrange
        let clientConfiguration = "";

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFramework_inValidClientConfigurationInteger
     * @description Tests the business rules function initFramework with a invalid clientConfiguration integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_inValidClientConfigurationInteger, () => {
        // Arrange
        let clientConfiguration = num.c123;

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFramework_inValidClientConfigurationBoolean
     * @description Tests the business rules function initFramework with a invalid clientConfiguration boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_inValidClientConfigurationBoolean, () => {
        // Arrange
        let clientConfiguration = false;

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFramework_inValidClientConfigurationUndefined
     * @description Tests the business rules function initFramework with a invalid clientConfiguration undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_inValidClientConfigurationUndefined, () => {
        // Arrange
        let clientConfiguration = undefined;

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initFramework_inValidClientConfigurationNaN
     * @description Tests the business rules function initFramework with a invalid clientConfiguration NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitFramework_inValidClientConfigurationNaN, () => {
        // Arrange
        let clientConfiguration = NaN;

        // Act
        let returnData = stack.initFramework(clientConfiguration);

        // Assert
        expect(returnData).toBeTruthy();
    });
});