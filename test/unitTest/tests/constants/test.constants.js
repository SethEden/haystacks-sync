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

export const creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter;
export const cdoesArrayContainCharacter = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
export const cremoveCharacterFromArray = wrd.cremove + wrd.cCharacter + wrd.cFrom + wrd.cArray;
export const creplaceCharacterAtIndex = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex;

export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands;
export const caddClientCommands = wrd.cAdd + wrd.cClient + wrd.cCommands;
export const cgetValidCommand = wrd.cget + wrd.cValid + wrd.cCommand;
export const ccountMatchingCommandAlias = wrd.ccount + wrd.cMatching + wrd.cCommand + wrd.cAlias;
export const csearchCommandAlias = wrd.csearch + wrd.cCommand + wrd.cAlias;
export const cgetAllCommandAliasData = wrd.cget + wrd.cAll + wrd.cCommand + wrd.cAlias + wrd.cData;
export const cgetCommandNamespaceDataObject = wrd.cget + wrd.cCommand + wrd.cNamespace + wrd.cData + wrd.cObject;
export const cgetCommandArgs = wrd.cget + wrd.cCommand + wrd.cArguments;
export const cexecuteCommand = wrd.cexecute + wrd.cCommand;

export const cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath;
export const cfindUniversalDebugConfigSetting = wrd.cfind + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting;
export const cloadAllCsvData = wrd.cload + wrd.cAll + "Csv" + wrd.cData;
export const cloadAllXmlData = wrd.cload + wrd.cAll + "Xml" + wrd.cData;
export const cloadAllJsonData = wrd.cload + wrd.cAll + "Json" + wrd.cData;
export const cprocessCsvData = wrd.cprocess + "Csv" + wrd.cData;
export const cpreprocessJsonFile = wrd.cpreprocess + "Json" + wrd.cFile;
export const cwriteJsonDataToFile = wrd.cwrite + "Json" + wrd.cData + wrd.cTo + wrd.cFile;
export const csetupDataStorage = wrd.csetup + wrd.cData + wrd.cStorage;
export const cstoreData = wrd.cstore + wrd.cData;
export const cgetData = wrd.cget + wrd.cData;
export const cclearData = wrd.cclear + wrd.cData;
export const cinitializeConstantsValidationData = wrd.cinitialize + wrd.cConstants + wrd.cValidation + wrd.cData;
export const caddConstantsValidationData = wrd.cAdd + wrd.cConstants + wrd.cValidation + wrd.cData;
export const caddDeeplyNestedConstantsValidationData = wrd.cAdd + wrd.cDeeply + wrd.cNested + wrd.cConstants + wrd.cValidation + wrd.cData;


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

export const creplaceCharacterWithCharacter_validDataInputDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterWithCharacter_validDataInputMetaDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterWithCharacter_inValidInputMetaDataUndefined = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const creplaceCharacterWithCharacter_inValidInputMetaDataNaN = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cdoesArrayContainCharacter_validDataInputDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainCharacter_validDataInputDataInteger = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainCharacter_validDataInputDataBoolean = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainCharacter_validDataInputMetaDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainCharacter_inValidInputDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cdoesArrayContainCharacter_inValidInputDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cdoesArrayContainCharacter_inValidInputMetaDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cdoesArrayContainCharacter_inValidInputMetaDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cremoveCharacterFromArray_validDataInputDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveCharacterFromArray_validDataInputMetaDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveCharacterFromArray_validDataInputMetaDataInteger = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveCharacterFromArray_validDataInputMetaDataBoolean = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cremoveCharacterFromArray_validDataInputMetaDataObject = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cObject;
export const cremoveCharacterFromArray_inValidInputDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cremoveCharacterFromArray_inValidInputDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cremoveCharacterFromArray_inValidInputMetaDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cremoveCharacterFromArray_inValidInputMetaDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const creplaceCharacterAtIndex_validDataInputDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndex_validDataInputMetaDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndex_inValidInputMetaDataUndefined = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const creplaceCharacterAtIndex_inValidInputMetaDataNaN = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cbootStrapCommands_validData = cbootStrapCommands + wrd.cvalid + wrd.cData;
export const cbootStrapCommands_inValidString = cbootStrapCommands + wrd.cinvalid + wrd.cString;
export const cbootStrapCommands_inValidNumber = cbootStrapCommands + wrd.cinvalid + wrd.cNumber;
export const cbootStrapCommands_inValidBoolean = cbootStrapCommands + wrd.cinvalid + wrd.cBoolean;

export const caddClientCommands_validData = caddClientCommands + wrd.cvalid + wrd.cData;
export const caddClientCommands_inValidString = caddClientCommands + wrd.cinvalid + wrd.cData;
export const caddClientCommands_inValidNumber = caddClientCommands + wrd.cinvalid + wrd.cNumber;
export const caddClientCommands_inValidBoolean = caddClientCommands + wrd.cinvalid + wrd.cBoolean;

export const cgetValidCommand_validData = cgetValidCommand + wrd.cvalid + wrd.cData;
export const cgetValidCommand_inValidString = cgetValidCommand + wrd.cinvalid + wrd.cString;
export const cgetValidCommand_inValidDelimiterString = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cString;

export const ccountMatchingCommandAlias_validData = ccountMatchingCommandAlias + wrd.cvalid + wrd.cData;
export const ccountMatchingCommandAlias_inValidCommandAliasDataString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString;
export const ccountMatchingCommandAlias_inValidCommandAliasNameString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString;
export const ccountMatchingCommandAlias_inValidCommandAliasDataNumber = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber;

export const csearchCommandAlias_validData = csearchCommandAlias + wrd.cvalid + wrd.cData;
export const csearchCommandAlias_inValidCommandAliasDataString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString;
export const csearchCommandAlias_inValidCommandAliasNameString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString;
export const csearchCommandAlias_inValidCommandAliasDataNumber = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber;
export const csearchCommandAlias_inValidCommandAliasDataBoolean = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean;

export const cgetAllCommandAliasData_validData = cgetAllCommandAliasData + wrd.cvalid + wrd.cData;
export const cgetAllCommandAliasData_inValidString = cgetAllCommandAliasData + wrd.cinvalid + wrd.cString;
export const cgetAllCommandAliasData_inValidNumber = cgetAllCommandAliasData + wrd.cinvalid + wrd.cNumber;
export const cgetAllCommandAliasData_inValidBoolean = cgetAllCommandAliasData + wrd.cinvalid + wrd.cBoolean;

export const cgetCommandNamespaceDataObject_validData = cgetCommandNamespaceDataObject + wrd.cvalid + wrd.cData;
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cString;
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindString = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString;
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNumber = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cNumber;
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cBoolean;
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindNumber = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cNumber;
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cBoolean;

export const cgetCommandArgs_validData = cgetCommandArgs + wrd.cvalid + wrd.cData;
export const cgetCommandArgs_inValidString = cgetCommandArgs + wrd.cinvalid + wrd.cString;
export const cgetCommandArgs_inValidDelimiterString = cgetCommandArgs + wrd.cinvalid + wrd.cDelimiter + wrd.cString;

export const cexecuteCommand_validData = cexecuteCommand + wrd.cvalid + wrd.cData;
export const cexecuteCommand_inValidString = cexecuteCommand + wrd.cinvalid + wrd.cString;

export const cscanDataPath_validData = cscanDataPath + wrd.cvalid + wrd.cData;
export const cscanDataPath_inValidString = cscanDataPath + wrd.cinvalid + wrd.cString;

export const cfindUniversalDebugConfigSetting_validData = cfindUniversalDebugConfigSetting + wrd.cvalid + wrd.cData;
export const cfindUniversalDebugConfigSetting_inValidString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cString;
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString;

export const cloadAllCsvData_validData = cloadAllCsvData + wrd.cvalid + wrd.cData;
export const cloadAllCsvData_inValidString = cloadAllCsvData + wrd.cinvalid + wrd.cString;
export const cloadAllCsvData_inValidContextNameString = cloadAllCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cloadAllCsvData_inValidBoolean = cloadAllCsvData + wrd.cinvalid + wrd.cBoolean;

export const cloadedAllXmlData_validData = cloadAllXmlData + wrd.cvalid + wrd.cData;
export const cloadedAllXmlData_inValidString = cloadAllXmlData + wrd.cinvalid + wrd.cString;
export const cloadAllXmlData_inValidContextNameString = cloadAllXmlData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cloadedAllXmlData_inValidBoolean = cloadAllXmlData + wrd.cinvalid + wrd.cBoolean;

export const cloadAllJsonData_validData = cloadAllJsonData + wrd.cvalid + wrd.cData;
export const cloadAllJsonData_inValidString = cloadAllJsonData + wrd.cinvalid + wrd.cString;
export const cloadAllJsonData_inValidContextNameString = cloadAllJsonData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;

export const cprocessCsvData_validData = cprocessCsvData + wrd.cvalid + wrd.cData;
export const cprocessCsvData_inValidContextNameString = cprocessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;

export const cpreprocessJsonFile_validData = cpreprocessJsonFile + wrd.cvalid + wrd.cData;

export const cwriteJsonDataToFile_validData = cwriteJsonDataToFile + wrd.cvalid + wrd.cData;
export const cwriteJsonDataToFile_inValidDataToWrite = cwriteJsonDataToFile + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cWrite;

export const csetupDataStorage_validData = csetupDataStorage + wrd.cvalid + wrd.cData;
export const csetupDataStorage_inValidString = csetupDataStorage + wrd.cinvalid + wrd.cString;
export const csetupDataStorage_inValidNumber = csetupDataStorage + wrd.cinvalid + wrd.cNumber;
export const csetupDataStorage_inValidBoolean = csetupDataStorage + wrd.cinvalid + wrd.cBoolean;

export const cstoreData_validDataString = cstoreData + wrd.cvalid + wrd.cData + wrd.cString;
export const cstoreData_validDataBoolean = cstoreData + wrd.cvalid + wrd.cData + wrd.cBoolean;
export const cstoreData_validDataInteger = cstoreData + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cstoreData_validDataArray = cstoreData + wrd.cvalid + wrd.cData + wrd.cArray;
export const cstoreData_validDataObject = cstoreData + wrd.cvalid + wrd.cData + wrd.cObject;
export const cstoreData_inValidDataToStoreUndefined = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + "Undefined";
export const cstoreData_inValidDataToStoreNaN = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + "NaN";
export const cstoreData_inValidDataStorageDataToStoreNumber = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cNumber;
export const cstoreData_inValidDataStorageDataToStoreBoolean = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cBoolean;

export const cgetData_validData = cgetData + wrd.cvalid + wrd.cData;
export const cgetData_inValidString = cgetData + wrd.cinvalid + wrd.cString;
export const cgetData_inValidNumber = cgetData + wrd.cinvalid + wrd.cNumber;
export const cgetData_inValidBoolean = cgetData + wrd.cinvalid + wrd.cBoolean;

export const cclearData_validData = cclearData + wrd.cvalid + wrd.cData;
export const cclearData_inValidUndefined = cclearData + wrd.cinvalid + "Undefined";
export const cclearData_inValidNaN = cclearData + wrd.cinvalid + "NaN";
export const cclearData_inValidNumber = cclearData + wrd.cinvalid + wrd.cNumber;
export const cclearData_inValidBoolean = cclearData + wrd.cinvalid + wrd.cBoolean;

export const cinitializeConstantsValidationData_validData = cinitializeConstantsValidationData + wrd.cvalid + wrd.cData;
export const cinitializeConstantsValidationData_inValidString = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cString;
export const cinitializeConstantsValidationData_inValidNumber = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cNumber;
export const cinitializeConstantsValidationData_inValidBoolean = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cBoolean;

export const caddConstantsValidationData_validData = caddConstantsValidationData + wrd.cvalid + wrd.cData;
export const caddConstantsValidationData_inValidString = caddConstantsValidationData + wrd.cinvalid + wrd.cString;
export const caddConstantsValidationData_inValidNumber = caddConstantsValidationData + wrd.cinvalid + wrd.cNumber;
export const caddConstantsValidationData_inValidBoolean = caddConstantsValidationData + wrd.cinvalid + wrd.cBoolean;

export const caddDeeplyNestedConstantsValidationData_validData = caddDeeplyNestedConstantsValidationData + wrd.cvalid + wrd.cData;
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cString;
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cNumber;
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cBoolean;
export const caddDeeplyNestedConstantsValidationData_inValidContextNameUndefined = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + "Undefined";
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNaN = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + "NaN";
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNumber = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cNumber;
export const caddDeeplyNestedConstantsValidationData_inValidContextNameBoolean = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cBoolean;
