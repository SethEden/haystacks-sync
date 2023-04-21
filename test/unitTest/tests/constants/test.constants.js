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

// Path names
export const basePath = () => {
    let url = import.meta.url;
    
    url = url.replace("file:///", "");
    let resUrl = "";
    let urlArray = url.split('/');
    for(let i = 0; i < urlArray.length; i ++) {
        resUrl += urlArray[i];
        if(urlArray[i] === 'unitTest')
            break;
        resUrl += '/';
    }
    return resUrl;
};

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

export const cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules;
export const caddClientRules = wrd.cAdd + wrd.cClient + wrd.cRules;
export const cprocessRules = wrd.cprocess + wrd.cRules;

export const cgetNamedThemes = wrd.cget + wrd.cNamed + wrd.cThemes;
export const cgetNamedThemePath = wrd.cget + wrd.cNamed + wrd.cTheme + wrd.cPath;
export const cloadTheme = wrd.cload + wrd.cTheme;
export const capplyTheme = wrd.capply + wrd.cTheme;

export const cgetWorkflow = wrd.cget + wrd.cWorkflow;
export const cdoesWorkflowExist = wrd.cdoes + wrd.cWorkflow + wrd.cExist;
export const cdoesWorkflowExistInWorkflowData = wrd.cdoes + wrd.cWorkflow + wrd.cExist + wrd.cIn + wrd.cWorkflow + wrd.cData;
export const csearchWorkflow = wrd.csearch + wrd.cWorkflow;
export const cgetAllWorkflows = wrd.cget + wrd.cAll + wrd.cWorkflows;
export const cgetWorkflowNamespaceDataObject = wrd.cget + wrd.cWorkflow + wrd.cNamespace + wrd.cData + wrd.cObject;

export const csolveLehmerCode = wrd.csolve + wrd.cLehmer + wrd.cCode;
export const crecursiveArrayExpansion = wrd.crecursive + wrd.cArray + wrd.cExpansion;
export const cgetLehmerCodeValue = wrd.cget + wrd.cLehmer + wrd.cCode + wrd.cValue;
export const cgenerateCommandAliases = wrd.cgenerate + wrd.cCommand + wrd.cAliases;
export const caggregateCommandArguments = wrd.caggregate + wrd.cCommand + wrd.cArguments;

export const cgetLengthOfLongestStringInArray = wrd.cget + wrd.cLength + wrd.cOf + wrd.cLongest + wrd.cString + wrd.cIn + wrd.cArray;
export const csearchForPatternsInStringArray = wrd.csearch + wrd.cFor + wrd.cPatterns + wrd.cIn + wrd.cString + wrd.cArray;
export const cvalidatePatternsThatNeedImplementation = wrd.cvalidate + wrd.cPatterns + wrd.cThat + wrd.cNeed + wrd.cImplementation;

export const carraysAreEqual = wrd.carray + wrd.cAre + wrd.cEqual;
export const cgetStoredData = wrd.cget + wrd.cStored + wrd.cData;
export const cisObjectEmpty = wrd.cis + wrd.cObject + wrd.cEmpty;
export const cisArrayEmpty = wrd.cis + wrd.cArray + wrd.cEmpty;
export const cisObject = wrd.cis + wrd.cObject;
export const cisArray = wrd.cis + wrd.cArray;
export const cisArrayOrObject = wrd.cis + wrd.cArray + wrd.cOr + wrd.cObject;
export const cisNonZeroLengthArray = wrd.cis + wrd.cNo + bas.cn + "Zero" + wrd.cLength + wrd.cArray; 
export const carrayDeepClone = wrd.carray + wrd.cDeep + wrd.cClone;
export const cobjectDeepMerge = wrd.cobject + wrd.cDeep + wrd.cMerge;

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

export const cbootStrapBusinessRules_validData = cbootStrapBusinessRules + wrd.cvalid + wrd.cData;
export const cbootStrapBusinessRules_inValidString = cbootStrapBusinessRules + wrd.cinvalid + wrd.cString;
export const cbootStrapBusinessRules_inValidNumber = cbootStrapBusinessRules + wrd.cinvalid + wrd.cNumber;
export const cbootStrapBusinessRules_inValidBoolean = cbootStrapBusinessRules + wrd.cinvalid + wrd.cBoolean;

export const caddClientRules_validData = caddClientRules + wrd.cvalid + wrd.cData;
export const caddClientRules_inValidString = caddClientRules + wrd.cinvalid + wrd.cString;
export const caddClientRules_inValidNumber = caddClientRules + wrd.cinvalid + wrd.cNumber;
export const caddClientRules_inValidBoolean = caddClientRules + wrd.cinvalid + wrd.cBoolean;

export const cprocessRules_validData = cprocessRules + wrd.cvalid + wrd.cData;
export const cprocessRules_inValidInputsUndefined = cprocessRules + wrd.cinvalid + wrd.cInputs + "Undefined";
export const cprocessRules_inValidInputsNaN = cprocessRules + wrd.cinvalid + wrd.cInputs + "NaN";
export const cprocessRules_inValidRulesToExecuteUndefined = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + "Undefined";
export const cprocessRules_inValidRulesToExecuteNaN = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + "NaN";
export const cprocessRules_inValidInputsInteger = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cInteger;
export const cprocessRules_inValidInputsBoolean = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cBoolean;
export const cprocessRules_inValidRulesToExecuteInteger = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cInteger;
export const cprocessRules_inValidRulesToExecuteBoolean = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cBoolean;

export const cgetNamedThemes_validData = cgetNamedThemes + wrd.cvalid + wrd.cData;
export const cgetNamedThemes_inValidString = cgetNamedThemes + wrd.cinvalid + wrd.cString;
export const cgetNamedThemes_inValidNumber = cgetNamedThemes + wrd.cinvalid + wrd.cNumber;
export const cgetNamedThemes_inValidBoolean = cgetNamedThemes + wrd.cinvalid + wrd.cBoolean;

export const cgetNamedThemePath_validData = cgetNamedThemePath + wrd.cvalid + wrd.cData;
export const cgetNamedThemePath_inValidString = cgetNamedThemePath + wrd.cinvalid + wrd.cString;

export const cloadTheme_validData = cloadTheme + wrd.cvalid + wrd.cData;

export const capplyTheme_validData = capplyTheme + wrd.cvalid + wrd.cData;

export const cgetWorkflow_validData = cgetWorkflow + wrd.cvalid + wrd.cData;
export const cgetWorkflow_inValidString = cgetWorkflow + wrd.cinvalid + wrd.cString;
export const cgetWorkflow_inValidNumber = cgetWorkflow + wrd.cinvalid + wrd.cNumber;
export const cgetWorkflow_inValidBoolean = cgetWorkflow + wrd.cinvalid + wrd.cBoolean;

export const cdoesWorkflowExist_validData = cdoesWorkflowExist + wrd.cvalid + wrd.cData;
export const cdoesWorkflowExist_inValidString = cdoesWorkflowExist + wrd.cinvalid + wrd.cString;
export const cdoesWorkflowExist_inValidNumber = cdoesWorkflowExist + wrd.cinvalid + wrd.cNumber;
export const cdoesWorkflowExist_inValidBoolean = cdoesWorkflowExist + wrd.cinvalid + wrd.cBoolean;

export const cdoesWorkflowExistInWorkflowData_validData = cdoesWorkflowExistInWorkflowData + wrd.cvalid + wrd.cData;
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cString;
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cWorkflow + wrd.cName + wrd.cString;
export const cdoesWorkflowExistInWorkflowData_inValidNumber = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cNumber;
export const cdoesWorkflowExistInWorkflowData_inValidBoolean = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cBoolean;

export const csearchWorkflow_validData = csearchWorkflow + wrd.cvalid + wrd.cData;
export const csearchWorkflow_inValidWorkflowDataString = csearchWorkflow + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cString;
export const csearchWorkflow_inValidWorkflowNameString = csearchWorkflow + wrd.cinvalid + wrd.cWorkflow + wrd.cName + wrd.cString;
export const csearchWorkflow_inValidNumber = csearchWorkflow + wrd.cinvalid + wrd.cNumber;
export const csearchWorkflow_inValidBoolean = csearchWorkflow + wrd.cinvalid + wrd.cBoolean;

export const cgetAllWorkflows_validData = cgetAllWorkflows + wrd.cvalid + wrd.cData;
export const cgetAllWorkflows_inValidString = cgetAllWorkflows + wrd.cinvalid + wrd.cString;
export const cgetAllWorkflows_inValidNumber = cgetAllWorkflows + wrd.cinvalid + wrd.cNumber;
export const cgetAllWorkflows_inValidBoolean = cgetAllWorkflows + wrd.cinvalid + wrd.cBoolean;

export const cgetWorkflowNamespaceDataObject_validData = cgetWorkflowNamespaceDataObject + wrd.cvalid + wrd.cData;
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cString;
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString;
export const cgetWorkflowNamespaceDataObject_inValidNumber = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cNumber;
export const cgetWorkflowNamespaceDataObject_inValidBoolean = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cBoolean;

export const csolveLehmerCode_validDataString = csolveLehmerCode + wrd.cvalid + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidDataInputDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidDataInputMetaDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidInputDataInteger = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csolveLehmerCode_inValidInputDataBoolean = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csolveLehmerCode_inValidInputDataUndefined = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const csolveLehmerCode_inValidInputDataNaN = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const crecursiveArrayExpansion_validDataString = crecursiveArrayExpansion + wrd.cvalid + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidDataInputDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidDataInputMetaDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidInputDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crecursiveArrayExpansion_inValidInputDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crecursiveArrayExpansion_inValidInputMetaDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crecursiveArrayExpansion_inValidInputMetaDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const crecursiveArrayExpansion_inValidInputDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const crecursiveArrayExpansion_inValidInputDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const crecursiveArrayExpansion_inValidInputMetaDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const crecursiveArrayExpansion_inValidInputMetaDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cgetLehmerCodeValue_validDataString = cgetLehmerCodeValue + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetLehmerCodeValue_inValidDataInputMetaDataString = cgetLehmerCodeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetLehmerCodeValue_inValidInputDataInteger = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetLehmerCodeValue_inValidInputDataBoolean = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetLehmerCodeValue_inValidInputDataUndefined = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cgetLehmerCodeValue_inValidInputDataNaN = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cgenerateCommandAliases_validDataString = cgenerateCommandAliases + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidDataInputDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidDataInputMetaDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidInputDataInteger = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateCommandAliases_inValidInputDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateCommandAliases_inValidInputMetaDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cgenerateCommandAliases_inValidInputDataUndefined = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cgenerateCommandAliases_inValidInputDataNaN = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const caggregateCommandArguments_validDataString = caggregateCommandArguments + wrd.cvalid + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidDataInputDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidDataInputMetaDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidInputDataInteger = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const caggregateCommandArguments_inValidInputDataBoolean = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const caggregateCommandArguments_inValidInputDataUndefined = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const caggregateCommandArguments_inValidInputDataNaN = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cgetLengthOfLongestStringInArray_validDataString = cgetLengthOfLongestStringInArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetLengthOfLongestStringInArray_inValidDataInputMetaDataString = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetLengthOfLongestStringInArray_inValidInputDataBoolean = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetLengthOfLongestStringInArray_inValidInputDataUndefined = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cgetLengthOfLongestStringInArray_inValidInputDataNaN = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const csearchForPatternsInStringArray_validDataString = csearchForPatternsInStringArray + wrd.cvalid + wrd.cData + wrd.cString;
export const csearchForPatternsInStringArray_inValidDataInputMetaDataString = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csearchForPatternsInStringArray_inValidInputDataInteger = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csearchForPatternsInStringArray_inValidInputDataBoolean = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csearchForPatternsInStringArray_inValidInputDataUndefined = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const csearchForPatternsInStringArray_inValidInputDataNaN = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cvalidatePatternsThatNeedImplementation_validDataString = cvalidatePatternsThatNeedImplementation + wrd.cvalid + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidDataInputDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidDataInputMetaDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataInteger = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataUndefined = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cvalidatePatternsThatNeedImplementation_inValidInputDataNaN = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const carraysAreEqual_validDataString = carraysAreEqual + wrd.cvalid + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidDataInputDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidDataInputMetaDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidInputDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const carraysAreEqual_inValidInputDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const carraysAreEqual_inValidInputMetaDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const carraysAreEqual_inValidInputMetaDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const carraysAreEqual_inValidInputDataUndefined = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const carraysAreEqual_inValidInputDataNaN = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cstoreData_inValidDataInputDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cstoreData_inValidDataInputMetaDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cstoreData_inValidInputDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cstoreData_inValidInputDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cstoreData_inValidInputMetaDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cstoreData_inValidInputMetaDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cstoreData_inValidInputMetaDataUndefined = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cstoreData_inValidInputMetaDataNaN = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cgetStoredData_validDataString = cgetStoredData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetStoredData_inValidDataInputDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetStoredData_inValidDataInputMetaDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetStoredData_inValidInputDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetStoredData_inValidInputDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetStoredData_inValidInputMetaDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetStoredData_inValidInputMetaDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetStoredData_inValidInputDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cgetStoredData_inValidInputDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cgetStoredData_inValidInputMetaDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cgetStoredData_inValidInputMetaDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cisObjectEmpty_validDataString = cisObjectEmpty + wrd.cvalid + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidDataInputDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidDataInputMetaDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidInputDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisObjectEmpty_inValidInputDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisObjectEmpty_inValidInputMetaDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisObjectEmpty_inValidInputMetaDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisObjectEmpty_inValidInputDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cisObjectEmpty_inValidInputDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cisObjectEmpty_inValidInputMetaDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cisObjectEmpty_inValidInputMetaDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cisArrayEmpty_validDataString = cisArrayEmpty + wrd.cvalid + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidDataInputDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidDataInputMetaDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidInputDataInteger = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArrayEmpty_inValidInputDataBoolean = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArrayEmpty_inValidInputDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cisArrayEmpty_inValidInputDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cisArrayEmpty_inValidInputMetaDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cisArrayEmpty_inValidInputMetaDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cisObject_validDataObject = cisObject + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisObject_validDataArray = cisObject + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisObject_inValidDataInputDataString = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisObject_inValidInputDataInteger = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisObject_inValidInputDataBoolean = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisObject_inValidInputDataUndefined = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + "Undefined";
export const cisObject_inValidInputDataNaN = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + "NaN";

export const cisArray_validDataObject = cisArray + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisArray_validDataArray = cisArray + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisArray_inValidDataInputDataString = cisArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArray_inValidInputDataInteger = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArray_inValidInputDataBoolean = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArray_inValidInputDataUndefined = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cisArray_inValidInputDataNaN = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cisArrayOrObject_validDataObject = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisArrayOrObject_validDataArray = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisArrayOrObject_inValidDataInputDataString = cisArrayOrObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArrayOrObject_inValidInputDataInteger = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArrayOrObject_inValidInputDataBoolean = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArrayOrObject_inValidInputDataUndefined = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cisArrayOrObject_inValidInputDataNaN = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cisNonZeroLengthArray_validDataObject = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisNonZeroLengthArray_validDataArray = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisNonZeroLengthArray_inValidDataInputDataString = cisNonZeroLengthArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisNonZeroLengthArray_inValidInputDataInteger = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisNonZeroLengthArray_inValidInputDataBoolean = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisNonZeroLengthArray_inValidInputDataUndefined = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cisNonZeroLengthArray_inValidInputDataNaN = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const carrayDeepClone_validDataString = carrayDeepClone + wrd.cvalid + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidDataInputDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidDataInputMetaDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidInputDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const carrayDeepClone_inValidInputDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const carrayDeepClone_inValidInputMetaDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const carrayDeepClone_inValidInputMetaDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const carrayDeepClone_inValidInputDataUndefined = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const carrayDeepClone_inValidInputDataNaN = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cobjectDeepMerge_validDataObject = cobjectDeepMerge + wrd.cvalid + wrd.cData + wrd.cObject;
export const cobjectDeepMerge_inValidDataInputDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cobjectDeepMerge_inValidDataInputMetaDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cobjectDeepMerge_inValidInputDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cobjectDeepMerge_inValidInputDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cobjectDeepMerge_inValidInputMetaDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cobjectDeepMerge_inValidInputMetaDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cobjectDeepMerge_inValidInputDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cobjectDeepMerge_inValidInputDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cobjectDeepMerge_inValidInputMetaDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cobjectDeepMerge_inValidInputMetaDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";