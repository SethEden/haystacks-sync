'use strict';
/* eslint-disable no-undef */
/**
 * @file auxiliary.test.js
 * @module auxiliary.test
 * @description Unit tests for the auxiliary.js
 * @requires module:rulesLibrary
 * @requires module:auxiliary
 * @requires module:data
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import auxiliary from '../../../../../src/commandsBlob/commands/auxiliary';
import D from '../../../../../src/structures/data.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { sys, wrd } = hayConst;

/**
 * @function convertColors
 * @description Tests the positive and negative test cases of the convertColors
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.cconvertColors, () => {
  /**
   * @function convertColors_validDataString
   * @description Tests the commandsBlob.commands.auxiliary.convertColors function, with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cconvertColors_validDataString, () => {
    // Arrange
    let inputData = '';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    D[wrd.ccolors] = {};
    D[wrd.ccolors][sys.cColorData] = {};
    let returnData = auxiliary.convertColors(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, []]
  });
});
