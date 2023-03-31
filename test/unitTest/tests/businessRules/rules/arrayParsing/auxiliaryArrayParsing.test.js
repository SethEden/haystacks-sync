/**
 * @file auxiliaryArrayParsing.test.js
 * @module auxiliaryArrayParsing.test
 * @description Unit tests for the auxiliaryArrayParsing.js
 * @requires module:auxiliaryArrayParsing.js
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/03/31
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import auxiliaryArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/auxiliaryArrayParsing.js";

// External imports
import hayConst from '@haystacks/constants';
import jest from 'jest';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// // businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

describe('parseColorRangeInputs Tests', () => {
  test('parseColorRangeInputs_validDataString1', () => {
    let returnData = [];
    returnData = auxiliaryArrayParsing.parseColorRangeInputs(1, 10);
    expect(returnData[0]).toBe(1);
    expect(returnData[1]).toBe(10);
  });
});