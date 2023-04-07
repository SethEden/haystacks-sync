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
export const cparseColorRangeInputs_validDataString = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseColorRangeInputs_validDataInteger = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cparseColorRangeInputs_validDataMixedUse1 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c1;
export const cparseColorRangeInputs_validDataMixedUse2 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c2;
export const cparseColorRangeInputs_inValidInputDataUndefined = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cparseColorRangeInputs_inValidInputDataNaN = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cparseColorRangeInputs_inValidInputMetaDataUndefined = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cparseColorRangeInputs_inValidInputMetaDataNaN = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cdoesArrayContainValue_validDataInputDataString = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainValue_validDataInputDataInteger = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainValue_validDataInputDataBoolean = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainValue_validDataInputDataObject = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject;
export const cdoesArrayContainValue_inValidInputDataUndefined = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined"
export const cdoesArrayContainValue_inValidInputDataNaN = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN"
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataInteger = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cInteger;
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataBoolean = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cBoolean;