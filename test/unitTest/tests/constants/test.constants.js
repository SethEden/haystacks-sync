/**
 * @file test.constants.js
 * @module test.constants
 * @description Contains many re-usable test constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/04/06
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, num, sys, wrd} = hayConst;

// Describe names
export const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs;
export const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue;

// Test names
export const cparseColorRangeInputs_validDataInteger1 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cInteger + num.c1;
export const cdoesArrayContainValue_validDataString = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cString;