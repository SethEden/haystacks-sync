'use strict';
/* eslint-disable no-undef */
/**
 * @file chiefCommander.test.js
 * @module constant.test
 * @description Unit tests for the chiefCommander.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/chiefCommander
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import chiefCommander from '../../../../src/controllers/chiefCommander.js';
import configurator from '../../../../src/executrix/configurator.js';
import D from '../../../../src/structures/data.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as utl_con from '../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../testData/commandsBlob/commands/advanced.js';
import * as tst_con from '../constants/test.constants.js';
import { basePath } from '../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd, num } = hayConst;

/**
 * @function addClientCommands
 * @description Tests the positive and negative test cases of the addClientCommands
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.caddClientCommands, () => {
    /**
     * @function addClientCommands_validDataString
     * @description Tests the function addClientCommands with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_validDataString, () => {
        // Arrange
        let clientCommands = {
            "test": "echo \"Error: no test specified\" && exit 1"
        };

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addClientCommands_inValidDataClientCommandsString
     * @description Tests the function addClientCommands with a invalid clientCommands string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidDataClientCommandsString, () => {
        // Arrange
        let clientCommands = wrd.cHello;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsInteger
     * @description Tests the function addClientCommands with a invalid clientCommands integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsInteger, () => {
        // Arrange
        let clientCommands = num.c123;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsBoolean
     * @description Tests the function addClientCommands with a invalid clientCommands boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsBoolean, () => {
        // Arrange
        let clientCommands = false;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsUndefined
     * @description Tests the function addClientCommands with a invalid clientCommands undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsUndefined, () => {
        // Arrange
        let clientCommands = undefined;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsNaN
     * @description Tests the function addClientCommands with a invalid clientCommands NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsNaN, () => {
        // Arrange
        let clientCommands = NaN;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeTruthy();
    });
});