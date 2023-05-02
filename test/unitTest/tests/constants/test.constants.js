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
export const cgetNamespacedDataObject = wrd.cget + wrd.cNamespaced + wrd.cData + wrd.cObject;
export const csetNamespacedDataObject = wrd.cset + wrd.cNamespaced + wrd.cData + wrd.cObject;

export const cdoesArrayContainFilename = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cFilename;
export const cgetFileAndPathListForPath = wrd.cget + wrd.cFile + wrd.cAnd + wrd.cPath + wrd.cList + wrd.cFor + wrd.cPath;

export const cconvertCamelCaseStringToArray = wrd.cconvert + wrd.cCamel + wrd.cCase + wrd.cString + wrd.cTo + wrd.cArray;
export const cgetWordsArrayFromString = wrd.cget + wrd.cWords + wrd.cArray + wrd.cFrom + wrd.cString;
export const crecombineStringArrayWithSpaces = wrd.crecombine + wrd.cString + wrd.cArray + wrd.cWith + wrd.cSpaces;
export const cconvertArrayToCamelCaseString = wrd.cconvert + wrd.cArray + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cConsolidated + wrd.cString;
export const cascertainMatchingElements = wrd.cascertain + wrd.cMatching + wrd.cElements;

export const csingleQuoteSwapAfterEquals = wrd.csingle + wrd.cQuote + wrd.cSwap + wrd.cAfter + wrd.cEquals;
export const cswapForwardSlashToBackSlash = wrd.cswap + wrd.cForward + wrd.cSlash + wrd.cTo + wrd.cBack + wrd.cSlash;
export const cswapBackSlashToForwardSlash = wrd.cswap + wrd.cBack + wrd.cSlash + wrd.cTo + wrd.cForward + wrd.cSlash;
export const cswapDoubleForwardSlashToSingleForwardSlash = wrd.cswap + wrd.cDouble + wrd.cForward + wrd.cSlash + wrd.cTo + wrd.cSingle + wrd.cForward + wrd.cSlash;
export const cswapDoubleBackSlashToSingleBackSlash = wrd.cswap + wrd.cDouble + wrd.cBack + wrd.cSlash + wrd.cTo + wrd.cSingle + wrd.cBack + wrd.cSlash;
export const creplaceSpacesWithPlus = wrd.creplace + wrd.cSpaces + wrd.cWith + wrd.cPlus;
export const creplaceColonWithUnderscore = wrd.creplace + wrd.cColon + wrd.cWith + wrd.cUnderscore;
export const ccleanCarriageReturnFromString = wrd.cclean + wrd.cCarriage + wrd.cReturn + wrd.cFrom + wrd.cString;
export const cconvertStringToLowerCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cLower + wrd.cCase;
export const cconvertStringToUpperCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cUpper + wrd.cCase;
export const cdoesStringContainUpperCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cUpper + wrd.cCase + wrd.cCharacter;
export const cdoesStringContainLowerCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cCharacter;
export const cisFirstCharacterLowerCase = wrd.cis + "First" + wrd.cCharacter + wrd.cLower + wrd.cCase;
export const cisFirstCharacterUpperCase = wrd.cis + "First" + wrd.cCharacter + wrd.cUpper + wrd.cCase;
export const creplaceCharacterAtIndexOfString = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex + wrd.cOf + wrd.cString;

export const ccleanCommandInput = wrd.cclean + wrd.cCommand + wrd.cInput;
export const cisValidCommandNameString = wrd.cis + wrd.cValid + wrd.cCommand + wrd.cName + wrd.cString;

export const cgetAttributeName = wrd.cget + wrd.cAttribute + wrd.cName;
export const cgetAttributeValue = wrd.cget + wrd.cAttribute + wrd.cValue;
export const cgetValueFromAssignmentOperationString = wrd.cget + wrd.cValue + wrd.cFrom + wrd.cAssignment + wrd.cOperation + wrd.cString;
export const cgetDataCategoryFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cgetDataCategoryDetailNameFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cDetail + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cgetKeywordNameFromDataContextName = wrd.cget + wrd.cKeyword + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cloadDataFile = wrd.cload + wrd.cData + wrd.cFile;
export const csaveDataFile = wrd.csave + wrd.cData + wrd.cFile;
export const cgetUserNameFromEmail = wrd.cget + wrd.cUser + wrd.cName + wrd.cFrom + wrd.cEmail;

export const cvalidateConstantsDataValidation = wrd.cvalidate + wrd.cConstant + wrd.cData + wrd.cValidation;
export const cdetermineConstantsContextQualifiedPrefix = wrd.cdetermine + wrd.cConstants + wrd.cContext + wrd.cQualified + wrd.cPrefix;
export const cdetermineSuggestedConstantsValidationLineOfCode = wrd.cdetermine + wrd.cSuggested + wrd.cConstants + wrd.cValidation + wrd.cLine + wrd.cOf + wrd.cCode;
export const cvalidateConstantsDataValidationLineItemName = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValidation + wrd.cLine + wrd.cItem + wrd.cName;
export const cdoesConstantExist = wrd.cdoes + wrd.cConstant + wrd.cExist;
export const cgetConstantType = wrd.cget + wrd.cConstant + wrd.cType;
export const cgetConstantActualValue = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue;
export const cgetConstantName = wrd.cget + wrd.cConstant + wrd.cName;
export const cfindConstantName = wrd.cfind + wrd.cConstant + wrd.cName;
export const cisConstantTypeValid = wrd.cis + wrd.cConstant + wrd.cType + wrd.cValid;
export const cconvertConstantTypeToConstantPrefix = wrd.cconvert + wrd.cConstant + wrd.cType + wrd.cTo + wrd.cConstant + wrd.cPrefix;
export const cconstantsOptimizedFulfillmentSystem = wrd.cconstants + wrd.cOptimized + wrd.cFulfillment + wrd.cSystem;
export const cconstantsFulfillmentSystem = wrd.cconstants + wrd.cFulfillment + wrd.cSystem;
export const cvalidateConstantsDataValues = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValue;
export const cisConstantValid = wrd.cis + wrd.cConstant + wrd.cValue;

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

export const cgetNamespacedDataObject_validDataString = cgetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetNamespacedDataObject_inValidDataInputMetaDataString = cgetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetNamespacedDataObject_inValidInputDataInteger = cgetNamespacedDataObject + wrd.cinvalid + wrd.cinput + wrd.cData + wrd.cInteger;
export const cgetNamespacedDataObject_inValidInputDataBoolean = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetNamespacedDataObject_inValidInputDataNaN = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const csetNamespacedDataObject_validDataString = csetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString;
export const csetNamespacedDataObject_inValidDataInputMetaDataString = csetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csetNamespacedDataObject_inValidInputDataInteger = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csetNamespacedDataObject_inValidInputDataBoolean = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csetNamespacedDataObject_inValidInputDataNaN = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cdoesArrayContainFilename_validDataString = cdoesArrayContainFilename + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidDataInputDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidDataInputMetaDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidInputDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainFilename_inValidInputDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainFilename_inValidInputMetaDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cdoesArrayContainFilename_inValidInputMetaDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cdoesArrayContainFilename_inValidInputDataUndefined = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cdoesArrayContainFilename_inValidInputDataNaN = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cgetFileAndPathListForPath_validDataString = cgetFileAndPathListForPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidDataInputDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidDataInputMetaDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidInputDataBoolean = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetFileAndPathListForPath_inValidInputDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cgetFileAndPathListForPath_inValidInputDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cgetFileAndPathListForPath_inValidInputMetaDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cgetFileAndPathListForPath_inValidInputMetaDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cconvertCamelCaseStringToArray_validDataString = cconvertCamelCaseStringToArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertCamelCaseStringToArray_inValidDataInputDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertCamelCaseStringToArray_inValidDataInputMetaDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const CconvertCamelCaseStringToArray_inValidInputDataInteger = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertCamelCaseStringToArray_inValidInputDataBoolean = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cgetWordsArrayFromString_validDataString = cgetWordsArrayFromString + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidDataInputDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidDataInputMetaDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidInputDataBoolean = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const crecombineStringArrayWithSpaces_validDataString = crecombineStringArrayWithSpaces + wrd.cvalid + wrd.cData + wrd.cString;
export const crecombineStringArrayWithSpaces_inValidDataInputMetaDataString = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crecombineStringArrayWithSpaces_inValidInputDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crecombineStringArrayWithSpaces_inValidInputMetaDataInteger = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crecombineStringArrayWithSpaces_inValidInputMetaDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const crecombineStringArrayWithSpaces_inValidInputDataUndefined = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const crecombineStringArrayWithSpaces_inValidInputDataNaN = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cconvertArrayToCamelCaseString_validDataString = cconvertArrayToCamelCaseString + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertArrayToCamelCaseString_inValidDataInputMetaDataString = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertArrayToCamelCaseString_inValidInputDataBoolean = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertArrayToCamelCaseString_inValidInputDataUndefined = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cconvertArrayToCamelCaseString_inValidInputDataNaN = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";

export const cdoesArrayContainLowerCaseConsolidatedString_validDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const cascertainMatchingElements_validDataString = cascertainMatchingElements + wrd.cvalid + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidDataInputDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidDataInputMetaDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidInputDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cascertainMatchingElements_inValidInputDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cascertainMatchingElements_inValidInputMetaDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cascertainMatchingElements_inValidInputMetaDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cascertainMatchingElements_inValidInputDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const cascertainMatchingElements_inValidInputDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const cascertainMatchingElements_inValidInputMetaDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const cascertainMatchingElements_inValidInputMetaDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const csingleQuoteSwapAfterEquals_validDataString = csingleQuoteSwapAfterEquals + wrd.cvalid + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidDataInputDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidDataInputMetaDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidInputDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataInteger = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cswapForwardSlashToBackSlash_validDataString = cswapForwardSlashToBackSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidDataInputDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidDataInputMetaDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidInputDataBoolean = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cswapBackSlashToForwardSlash_validDataString = cswapBackSlashToForwardSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidDataInputDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidDataInputMetaDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidInputDataBoolean = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cswapDoubleForwardSlashToSingleForwardSlash_validDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cswapDoubleBackSlashToSingleBackSlash_validDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const creplaceSpacesWithPlus_validDataString = creplaceSpacesWithPlus + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidDataInputDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidDataInputMetaDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidInputDataBoolean = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const creplaceColonWithUnderscore_validDataString = creplaceColonWithUnderscore + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidDataInputDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidDataInputMetaDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidInputDataBoolean = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const ccleanCarriageReturnFromString_validDataString = ccleanCarriageReturnFromString + wrd.cvalid + wrd.cData + wrd.cString;
export const ccleanCarriageReturnFromString_inValidDataInputDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccleanCarriageReturnFromString_inValidDataInputMetaDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cString;
export const ccleanCarriageReturnFromString_inValidInputDataBoolean = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cconvertStringToLowerCase_validDataString = cconvertStringToLowerCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidDataInputDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidDataInputMetaDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidInputDataBoolean = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cconvertStringToUpperCase_validDataString = cconvertStringToUpperCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidDataInputDataString = cconvertStringToUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidDataInputMetaDataString = cconvertStringToUpperCase + wrd.cinvalid  + wrd.Data + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidInputDataBoolean = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cdoesStringContainUpperCaseCharacter_validDataString = cdoesStringContainUpperCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidDataInputDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidInputDataInteger = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesStringContainUpperCaseCharacter_inValidInputDataBoolean = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cdoesStringContainLowerCaseCharacter_validDataString = cdoesStringContainLowerCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidDataInputDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidInputDataInteger = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesStringContainLowerCaseCharacter_inValidInputDataBoolean = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cisFirstCharacterLowerCase_validDataString = cisFirstCharacterLowerCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidDataInputDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidDataInputMetaDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidInputDataBoolean = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cisFirstCharacterUpperCase_validDataString = cisFirstCharacterUpperCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidDataInputDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidDataInputMetaDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidInputDataBoolean = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const creplaceCharacterAtIndexOfString_validDataString = creplaceCharacterAtIndexOfString + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidDataInputDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidDataInputMetaDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidInputDataInteger = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creplaceCharacterAtIndexOfString_inValidInputDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const creplaceCharacterAtIndexOfString_inValidInputDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + "Undefined";
export const creplaceCharacterAtIndexOfString_inValidInputDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + "NaN";
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "Undefined";
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + "NaN";

export const ccleanCommandInput_validDataString = ccleanCommandInput + wrd.cvalid + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidDataInputDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidDataInputMetaDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidInputDataBoolean = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cisValidCommandNameString_validDataString = cisValidCommandNameString + wrd.cvalid + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidDataInputDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidDataInputMetaDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidInputDataInteger = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisValidCommandNameString_inValidInputDataBoolean = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;

export const cgetAttributeName_validDataString = cgetAttributeName + wrd.cValid + wrd.cData + wrd.cString;
export const cgetAttributeName_inValidDataInputDataString = cgetAttributeName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetAttributeName_inValidDataInputMetaDataString = cgetAttributeName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetAttributeName_inValidInputDataInteger = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetAttributeName_inValidInputDataBoolean = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetAttributeName_inValidInputMetaDataInteger = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetAttributeName_inValidInputMetaDataBoolean = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetAttributeValue_validDataString = cgetAttributeValue + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetAttributeValue_inValidDataInputDataString = cgetAttributeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetAttributeValue_inValidDataInputMetaDataString = cgetAttributeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetAttributeValue_inValidInputDataInteger = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetAttributeValue_inValidInputDataBoolean = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetAttributeValue_inValidInputMetaDataInteger = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetAttributeValue_inValidInputMetaDataBoolean = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetValueFromAssignmentOperationString_validDataString = cgetValueFromAssignmentOperationString + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetValueFromAssignmentOperationString_inValidDataInputDataString = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetValueFromAssignmentOperationString_inValidDataInputMetaDataString = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetValueFromAssignmentOperationString_inValidInputDataInteger = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetValueFromAssignmentOperationString_inValidInputDataBoolean = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetValueFromAssignmentOperationString_inValidInputMetaDataInteger = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetValueFromAssignmentOperationString_inValidInputMetaDataBoolean = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetDataCategoryFromDataContextName_validDataString = cgetDataCategoryFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetDataCategoryFromDataContextName_inValidDataInputDataString = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetDataCategoryFromDataContextName_inValidDataInputMetaDataString = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetDataCategoryFromDataContextName_inValidInputDataInteger = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetDataCategoryFromDataContextName_inValidInputDataBoolean = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetDataCategoryFromDataContextName_inValidInputMetaDataInteger = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetDataCategoryFromDataContextName_inValidInputMetaDataBoolean = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetDataCategoryDetailNameFromDataContextName_validDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetDataCategoryDetailNameFromDataContextName_inValidDataInputDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputDataInteger = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataInteger = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataBoolean = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetKeywordNameFromDataContextName_validDataString = cgetKeywordNameFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetKeywordNameFromDataContextName_inValidDataInputDataString = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetKeywordNameFromDataContextName_inValidDataInputMetaDataString = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetKeywordNameFromDataContextName_inValidInputDataInteger = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetKeywordNameFromDataContextName_inValidInputDataBoolean = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetKeywordNameFromDataContextName_inValidInputMetaDataInteger = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetKeywordNameFromDataContextName_inValidInputMetaDataBoolean = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cloadDataFile_validDataString = cloadDataFile + wrd.cvalid + wrd.cData + wrd.cString;
export const cloadDataFile_inValidDataInputDataString = cloadDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cloadDataFile_inValidDataInputMetaDataString = cloadDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cloadDataFile_inValidInputDataInteger = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cloadDataFile_inValidInputDataBoolean = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cloadDataFile_inValidInputMetaDataInteger = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cloadDataFile_inValidInputMetaDataBoolean = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const csaveDataFile_validDataString = csaveDataFile + wrd.cvalid + wrd.cData + wrd.cString;
export const csaveDataFile_inValidDataInputDataString = csaveDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csaveDataFile_inValidDataInputMetaDataString = csaveDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csaveDataFile_inValidInputDataInteger = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csaveDataFile_inValidInputDataBoolean = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csaveDataFile_inValidInputMetaDataInteger = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csaveDataFile_inValidInputMetaDataBoolean = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetUserNameFromEmail_validDataString = cgetUserNameFromEmail + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetUserNameFromEmail_inValidDataInputDataString = cgetUserNameFromEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetUserNameFromEmail_inValidDataInputMetaDataString = cgetUserNameFromEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetUserNameFromEmail_inValidInputDataInteger = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetUserNameFromEmail_inValidInputDataBoolean = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetUserNameFromEmail_inValidInputMetaDataInteger = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetUserNameFromEmail_inValidInputMetaDataBoolean = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cvalidateConstantsDataValidation_validDataString = cvalidateConstantsDataValidation + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidation_inValidDataInputDataString = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidation_inValidDataInputMetaDataString = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidation_inValidInputDataInteger = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValidation_inValidInputDataBoolean = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cvalidateConstantsDataValidation_inValidInputMetaDataInteger = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValidation_inValidInputMetaDataBoolean = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdetermineConstantsContextQualifiedPrefix_validDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cvalid + wrd.cData + wrd.cString;
export const cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdetermineSuggestedConstantsValidationLineOfCode_validDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cvalid + wrd.cData + wrd.cString;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cvalidateConstantsDataValidationLineItemName_validDataString = cvalidateConstantsDataValidationLineItemName + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidationLineItemName_inValidDataInputDataString = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidationLineItemName_inValidDataInputMetaDataString = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValidationLineItemName_inValidInputDataInteger = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValidationLineItemName_inValidInputDataBoolean = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataInteger = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesConstantExist_validDataString = cdoesConstantExist + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesConstantExist_inValidDataInputDataString = cdoesConstantExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesConstantExist_inValidDataInputMetaDataString = cdoesConstantExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesConstantExist_inValidInputDataInteger = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesConstantExist_inValidInputDataBoolean = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesConstantExist_inValidInputMetaDataInteger = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesConstantExist_inValidInputMetaDataBoolean = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetConstantType_validDataString = cgetConstantType + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetConstantType_inValidDataInputDataString = cgetConstantType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetConstantType_inValidDataInputMetaDataString = cgetConstantType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetConstantType_inValidInputDataInteger = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetConstantType_inValidInputDataBoolean = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetConstantType_inValidInputMetaDataInteger = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetConstantType_inValidInputMetaDataBoolean = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetConstantActualValue_validDataString = cgetConstantActualValue + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetConstantActualValue_inValidDataInputDataString = cgetConstantActualValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetConstantActualValue_inValidDataInputMetaDataString = cgetConstantActualValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetConstantActualValue_inValidInputDataInteger = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetConstantActualValue_inValidInputDataBoolean = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetConstantActualValue_inValidInputMetaDataInteger = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetConstantActualValue_inValidInputMetaDataBoolean = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetConstantName_validDataString = cgetConstantName + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetConstantName_inValidDataInputDataString = cgetConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetConstantName_inValidDataInputMetaDataString = cgetConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetConstantName_inValidInputDataInteger = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetConstantName_inValidInputDataBoolean = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetConstantName_inValidInputMetaDataInteger = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetConstantName_inValidInputMetaDataBoolean = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cfindConstantName_validDataString = cfindConstantName + wrd.cvalid + wrd.cData + wrd.cString;
export const cfindConstantName_inValidDataInputDataString = cfindConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cfindConstantName_inValidDataInputMetaDataString = cfindConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cfindConstantName_inValidInputDataInteger = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cfindConstantName_inValidInputDataBoolean = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cfindConstantName_inValidInputMetaDataInteger = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cfindConstantName_inValidInputMetaDataBoolean = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisConstantTypeValid_validDataString = cisConstantTypeValid + wrd.cvalid + wrd.cData + wrd.cString;
export const cisConstantTypeValid_inValidDataInputDataString = cisConstantTypeValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisConstantTypeValid_inValidDataInputMetaDataString = cisConstantTypeValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisConstantTypeValid_inValidInputDataInteger = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisConstantTypeValid_inValidInputDataBoolean = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisConstantTypeValid_inValidInputMetaDataInteger = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisConstantTypeValid_inValidInputMetaDataBoolean = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconvertConstantTypeToConstantPrefix_validDataString = cconvertConstantTypeToConstantPrefix + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertConstantTypeToConstantPrefix_inValidDataInputDataString = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertConstantTypeToConstantPrefix_inValidDataInputMetaDataString = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertConstantTypeToConstantPrefix_inValidInputDataInteger = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertConstantTypeToConstantPrefix_inValidInputDataBoolean = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertConstantTypeToConstantPrefix_inValidInputMetaDataInteger = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconstantsOptimizedFulfillmentSystem_validDataString = cconstantsOptimizedFulfillmentSystem + wrd.cvalid + wrd.cData + wrd.cString;
export const cconstantsOptimizedFulfillmentSystem_inValidDataInputDataString = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconstantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconstantsOptimizedFulfillmentSystem_inValidInputDataInteger = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconstantsOptimizedFulfillmentSystem_inValidInputDataBoolean = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataInteger = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataBoolean = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconstantsFulfillmentSystem_validDataString = cconstantsFulfillmentSystem + wrd.cvalid + wrd.cData + wrd.cString;
export const cconstantsFulfillmentSystem_inValidDataInputDataString = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconstantsFulfillmentSystem_inValidDataInputMetaDataString = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconstantsFulfillmentSystem_inValidInputDataInteger = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconstantsFulfillmentSystem_inValidInputDataBoolean = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconstantsFulfillmentSystem_inValidInputMetaDataInteger = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconstantsFulfillmentSystem_inValidInputMetaDataBoolean = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cvalidateConstantsDataValues_validDataString = cvalidateConstantsDataValues + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValues_inValidDataInputDataString = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValues_inValidDataInputMetaDataString = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cvalidateConstantsDataValues_inValidInputDataInteger = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValues_inValidInputDataBoolean = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cvalidateConstantsDataValues_inValidInputMetaDataInteger = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cvalidateConstantsDataValues_inValidInputMetaDataBoolean = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;


export const cisConstantValid_validDataString = cisConstantValid + wrd.cvalid + wrd.cData + wrd.cString;
export const cisConstantValid_inValidDataInputDataString = cisConstantValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisConstantValid_inValidDataInputMetaDataString = cisConstantValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisConstantValid_inValidInputDataInteger = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisConstantValid_inValidInputDataBoolean = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisConstantValid_inValidInputMetaDataInteger = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisConstantValid_inValidInputMetaDataBoolean = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
