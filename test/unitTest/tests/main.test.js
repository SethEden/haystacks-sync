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
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function initFramework
 * @description Tests the positive and negative test cases of the initFramework
 * @author Json Howard
 * @date 2023/09/05
 * @note stack.initFramework is void function, can't get returnData.
*/
describe(tst_con.cinitFramework, () => {
    /**
     * @function initFramework_validDataString
     * @description Tests the main.initFramework function, with a valid input.
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
     * @description Tests the main.initFramework function, with a invalid clientConfiguration string.
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
     * @description Tests the main.initFramework function, with a invalid clientConfiguration integer.
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
     * @description Tests the main.initFramework function, with a invalid clientConfiguration boolean.
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
     * @description Tests the main.initFramework function, with a invalid clientConfiguration undefined.
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
     * @description Tests the main.initFramework function, with a invalid clientConfiguration NaN.
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
/**
 * @note mergeClientBusinessRules is not exits.
 * @note mergeClientCommands is not exits.
 * @note loadCommandAliases is not exits.
 * @note loadCommandWorkflows is not exits.
 * @note executeBusinessRules is not exits.
 * @note enqueueCommand is not exits.
 * @note isCommandQueueEmpty is not exits.
 * @note processCommandQueue is not exits.
 * @note setConfigurationSetting is not exits.
 * @note getConfigurationSetting is not exits.
 * @note consoleLog is not exits.
 */


