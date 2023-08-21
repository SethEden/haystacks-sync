'use strict';
/* eslint-disable no-undef */
/**
 * @file constant.test.js
 * @module constant.test
 * @description Unit tests for the constant.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/constant
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/18
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import constant from '../../../../../src/commandsBlob/commands/constant';
import commandsLibrary from '../../../../../src/commandsBlob/commandsLibrary';
import configurator from '../../../../../src/executrix/configurator.js';
import D from '../../../../../src/structures/data.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as utl_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../../testData/commandsBlob/commands/advanced.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd, num } = hayConst;

/**
 * @function constantGenerator
 * @description Tests the positive and negative test cases of the constantGenerator
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cconstantGenerator, () => {
    /**
     * @function constantsGenerator_validDataString
     * @description Tests the business rules function constantGenerator with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cconstantsGenerator_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = constant.constantsGenerator(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });