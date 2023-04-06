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
const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs;
const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue;

// Test names
const cparseColorRangeInputs_validDataInteger1 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cInteger + num.c1;
const cdoesArrayContainValue_validDataString = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cString;

export default {
    cparseColorRangeInputs,
    cdoesArrayContainValue,
    cparseColorRangeInputs_validDataInteger1,
    cdoesArrayContainValue_validDataString
}