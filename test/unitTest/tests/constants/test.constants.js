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

const {bas, num, wrd, gen, biz} = hayConst;

/**
 * @function basePath
 * @description Get base folder path for unit test.
 * @author Seth Hollingsead
 * @date 2023/04/06
 * @NOTE This function doesn't belong here.
 */
export const basePath = () => {
    let url = import.meta.url;
    
    url = url.replace(wrd.cfile + bas.cColon + bas.cForwardSlash + bas.cForwardSlash + bas.cForwardSlash, "");
    let resUrl = '';
    let urlArray = url.split(bas.cForwardSlash);
    for(const element of urlArray) {
        resUrl += element;
        if(element === wrd.cunit + wrd.cTest)
            break;
        resUrl += bas.cForwardSlash;
    }
    return resUrl;
};

export const cUndefined = bas.cUn + bas.cde + bas.cf + bas.ci + bas.cn + bas.ce + bas.cd;
export const cNaN = bas.cNa + bas.cN;

// Describe names

/* commandBroker */
export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands;
export const caddClientCommands = wrd.cAdd + wrd.cClient + wrd.cCommands;
export const cgetValidCommand = wrd.cget + wrd.cValid + wrd.cCommand;
export const ccountMatchingCommandAlias = wrd.ccount + wrd.cMatching + wrd.cCommand + wrd.cAlias;
export const csearchCommandAlias = wrd.csearch + wrd.cCommand + wrd.cAlias;
export const cgetAllCommandAliasData = wrd.cget + wrd.cAll + wrd.cCommand + wrd.cAlias + wrd.cData;
export const cgetCommandNamespaceDataObject = wrd.cget + wrd.cCommand + wrd.cNamespace + wrd.cData + wrd.cObject;
export const cgetCommandArgs = wrd.cget + wrd.cCommand + wrd.cArguments;
export const cexecuteCommand = wrd.cexecute + wrd.cCommand;

/* dataBroker */
export const cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath;
export const cfindUniversalDebugConfigSetting = wrd.cfind + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting;
export const cfindIndividualDebugConfigSetting = wrd.cfind + wrd.cIndividual + wrd.cDebug + wrd.cConfig + wrd.cSetting;
export const cloadAllCsvData = wrd.cload + wrd.cAll + gen.cCsv + wrd.cData;
export const cloadAllXmlData = wrd.cload + wrd.cAll + gen.cXml + wrd.cData;
export const cloadAllJsonData = wrd.cload + wrd.cAll + gen.cJson + wrd.cData;
export const cprocessCsvData = wrd.cprocess + gen.cCsv + wrd.cData;
export const cpreprocessJsonFile = wrd.cpreprocess + gen.cJson + wrd.cFile;
export const cwriteJsonDataToFile = wrd.cwrite + gen.cJson + wrd.cData + wrd.cTo + wrd.cFile;
export const csetupDataStorage = wrd.csetup + wrd.cData + wrd.cStorage;
export const cstoreData = wrd.cstore + wrd.cData;
export const cgetData = wrd.cget + wrd.cData;
export const cclearData = wrd.cclear + wrd.cData;
export const cinitializeConstantsValidationData = wrd.cinitialize + wrd.cConstants + wrd.cValidation + wrd.cData;
export const caddConstantsValidationData = wrd.cAdd + wrd.cConstants + wrd.cValidation + wrd.cData;
export const caddDeeplyNestedConstantsValidationData = wrd.cAdd + wrd.cDeeply + wrd.cNested + wrd.cConstants + wrd.cValidation + wrd.cData;

/* ruleBroker */
export const cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules;
export const caddClientRules = wrd.cAdd + wrd.cClient + wrd.cRules;
export const cprocessRules = wrd.cprocess + wrd.cRules;

/* themeBroker */
export const cgetNamedThemes = wrd.cget + wrd.cNamed + wrd.cThemes;
export const cgetNamedThemePath = wrd.cget + wrd.cNamed + wrd.cTheme + wrd.cPath;
export const cloadTheme = wrd.cload + wrd.cTheme;
export const capplyTheme = wrd.capply + wrd.cTheme;

/* workflowBroker */
export const cgetWorkflow = wrd.cget + wrd.cWorkflow;
export const cdoesWorkflowExist = wrd.cdoes + wrd.cWorkflow + wrd.cExist;
export const cdoesWorkflowExistInWorkflowData = wrd.cdoes + wrd.cWorkflow + wrd.cExist + wrd.cIn + wrd.cWorkflow + wrd.cData;
export const csearchWorkflow = wrd.csearch + wrd.cWorkflow;
export const cgetAllWorkflows = wrd.cget + wrd.cAll + wrd.cWorkflows;
export const cgetWorkflowNamespaceDataObject = wrd.cget + wrd.cWorkflow + wrd.cNamespace + wrd.cData + wrd.cObject;

/* auxiliaryArrayParsing */
export const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs;
export const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue;

/* characterArrayParsing */
export const creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter;
export const cdoesArrayContainCharacter = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
export const cremoveCharacterFromArray = wrd.cremove + wrd.cCharacter + wrd.cFrom + wrd.cArray;
export const creplaceCharacterAtIndex = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex;

/* commandArraParsing */
export const csolveLehmerCode = wrd.csolve + wrd.cLehmer + wrd.cCode;
export const crecursiveArrayExpansion = wrd.crecursive + wrd.cArray + wrd.cExpansion;
export const cgetLehmerCodeValue = wrd.cget + wrd.cLehmer + wrd.cCode + wrd.cValue;
export const cgenerateCommandAliases = wrd.cgenerate + wrd.cCommand + wrd.cAliases;
export const caggregateCommandArguments = wrd.caggregate + wrd.cCommand + wrd.cArguments;

/* constantArrayParsing */
export const cgetLengthOfLongestStringInArray = wrd.cget + wrd.cLength + wrd.cOf + wrd.cLongest + wrd.cString + wrd.cIn + wrd.cArray;
export const csearchForPatternsInStringArray = wrd.csearch + wrd.cFor + wrd.cPatterns + wrd.cIn + wrd.cString + wrd.cArray;
export const cvalidatePatternsThatNeedImplementation = wrd.cvalidate + wrd.cPatterns + wrd.cThat + wrd.cNeed + wrd.cImplementation;

/* dataArrayParsing */
export const carraysAreEqual = wrd.carray + wrd.cAre + wrd.cEqual;
export const cgetStoredData = wrd.cget + wrd.cStored + wrd.cData;
export const cisObjectEmpty = wrd.cis + wrd.cObject + wrd.cEmpty;
export const cisArrayEmpty = wrd.cis + wrd.cArray + wrd.cEmpty;
export const cisObject = wrd.cis + wrd.cObject;
export const cisArray = wrd.cis + wrd.cArray;
export const cisArrayOrObject = wrd.cis + wrd.cArray + wrd.cOr + wrd.cObject;
export const cisNonZeroLengthArray = wrd.cis + wrd.cNo + bas.cn + num.cZero + wrd.cLength + wrd.cArray; 
export const carrayDeepClone = wrd.carray + wrd.cDeep + wrd.cClone;
export const cobjectDeepMerge = wrd.cobject + wrd.cDeep + wrd.cMerge;
export const cgetNamespacedDataObject = wrd.cget + wrd.cNamespaced + wrd.cData + wrd.cObject;
export const csetNamespacedDataObject = wrd.cset + wrd.cNamespaced + wrd.cData + wrd.cObject;

/* pathArrayParsing */
export const cdoesArrayContainFilename = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cFilename;
export const cgetFileAndPathListForPath = wrd.cget + wrd.cFile + wrd.cAnd + wrd.cPath + wrd.cList + wrd.cFor + wrd.cPath;

/* wordArrayParsing */
export const cconvertCamelCaseStringToArray = wrd.cconvert + wrd.cCamel + wrd.cCase + wrd.cString + wrd.cTo + wrd.cArray;
export const cgetWordsArrayFromString = wrd.cget + wrd.cWords + wrd.cArray + wrd.cFrom + wrd.cString;
export const crecombineStringArrayWithSpaces = wrd.crecombine + wrd.cString + wrd.cArray + wrd.cWith + wrd.cSpaces;
export const cconvertArrayToCamelCaseString = wrd.cconvert + wrd.cArray + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cConsolidated + wrd.cString;
export const cascertainMatchingElements = wrd.cascertain + wrd.cMatching + wrd.cElements;

/* characterStringParsing */
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
export const cisFirstCharacterLowerCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cLower + wrd.cCase;
export const cisFirstCharacterUpperCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cUpper + wrd.cCase;
export const creplaceCharacterAtIndexOfString = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex + wrd.cOf + wrd.cString;

/* commandStringParsing */
export const ccleanCommandInput = wrd.cclean + wrd.cCommand + wrd.cInput;
export const cisValidCommandNameString = wrd.cis + wrd.cValid + wrd.cCommand + wrd.cName + wrd.cString;

/* constantStringParsing */
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

/* dataStringParsing */
export const cgetAttributeName = wrd.cget + wrd.cAttribute + wrd.cName;
export const cgetAttributeValue = wrd.cget + wrd.cAttribute + wrd.cValue;
export const cgetValueFromAssignmentOperationString = wrd.cget + wrd.cValue + wrd.cFrom + wrd.cAssignment + wrd.cOperation + wrd.cString;
export const cgetDataCategoryFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cgetDataCategoryDetailNameFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cDetail + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cgetKeywordNameFromDataContextName = wrd.cget + wrd.cKeyword + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName;
export const cloadDataFile = wrd.cload + wrd.cData + wrd.cFile;
export const csaveDataFile = wrd.csave + wrd.cData + wrd.cFile;
export const cgetUserNameFromEmail = wrd.cget + wrd.cUser + wrd.cName + wrd.cFrom + wrd.cEmail;

/* fileStringParsing */
export const cgetFileNameFromPath = wrd.cget + wrd.cFile + wrd.cName + wrd.cFrom + wrd.cPath;
export const cgetFileExtension = wrd.cget + wrd.cFile + wrd.cExtension;
export const cremoveDotFromFileExtension = wrd.cremove + wrd.cDot + wrd.cFrom + wrd.cFile + wrd.cExtension;
export const cremoveFileExtensionFromFileName = wrd.cremove + wrd.cFile + wrd.cExtension + wrd.cFrom + wrd.cFile + wrd.cName;
export const cascertainMatchingFilenames = wrd.cascertain + wrd.cMatching + wrd.cFileNames;
export const csupportedFileFormatsAre = wrd.csupported + wrd.cFile + wrd.cFormat + wrd.cAre;
export const cremoveXnumberOfFoldersFromEndOfPath = wrd.cremove + bas.cX + wrd.cnumber + wrd.cOf + wrd.cFolders + wrd.cFrom + wrd.cEnd + wrd.cOf + wrd.cPath;
export const cgetFirstTopLevelFolderFromPath = wrd.cget + num.cFirst + wrd.cTop + wrd.cLevel + wrd.cFolder + wrd.cFrom + wrd.cPath;

/* wordStringParsing */
export const cisStringCamelCase = wrd.cis + wrd.cString + wrd.cCamel + wrd.cCase;
export const cmapWordToCamelCaseWord = wrd.cmap + wrd.cWord + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cWord;
export const csimplifyAndConsolidateString = wrd.csimplify + wrd.cAnd + wrd.cConsolidate + wrd.cString;
export const ccompareSimplifiedAndConsolidatedStrings = wrd.ccompare + wrd.cSimplified + wrd.cAnd + wrd.cConsolidated + wrd.cStrings;
export const ccountCamelCaseWords = wrd.ccount + wrd.cCamel + wrd.cCase + wrd.cWords;
export const cdoesStringContainAcronym = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cAcronym;
export const cdetermineWordDelimiter = wrd.cdetermine + wrd.cWord + wrd.cDelimiter;
export const ccountDelimiterInString = wrd.ccount + wrd.cDelimiter + wrd.cIn + wrd.cString;
export const cgetWordCountInString = wrd.cget + wrd.cWord + wrd.cCount + wrd.cIn + wrd.cString;
export const cisStringList = wrd.cis + wrd.cString + wrd.cList;
export const caggregateNumericalDifferenceBetweenTwoStrings = wrd.caggregate + wrd.cNumerical + wrd.cDifference + wrd.cBetween + num.cTwo + wrd.cStrings;

/* characterGeneration */
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter;
export const crandomlyGenerateNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cNumeric + wrd.cCharacter;
export const crandomlyGenerateSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cSpecial + wrd.cCharacter;
export const crandomlyGenerateNumberInRange = wrd.crandomly + wrd.cGenerate + wrd.cNumber + wrd.cIn + wrd.cRange;
export const crandomlyGenerateBooleanValue = wrd.crandomly + wrd.cGenerate + wrd.cBoolean + wrd.cValue;
export const crandomlyGenerateMixedCaseAlphabeticCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlphabetic + wrd.cCharacter;
export const crandomlyGenerateLowerCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter;
export const crandomlyGenerateUpperCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter;
export const cconvertNumberToUpperCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cUpper + wrd.cCase + wrd.cLetter;
export const cconvertNumberToLowerCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cLower + wrd.cCase + wrd.cLetter;

/* fileOperations */
export const cgetXmlData = wrd.cget + gen.cXml + wrd.cData;
export const cgetCsvData = wrd.cget + gen.cCsv + wrd.cData;
export const cgetJsonData = wrd.cget + gen.cJson + wrd.cData;
export const cwriteJsonData = wrd.cwrite + gen.cJson + wrd.cData;
export const creadDirectoryContents = wrd.cread + wrd.cDirectory + wrd.cContents;
export const cscanDirectoryContents = wrd.cscan + wrd.cDirectory + wrd.cContents;
export const cgetDirectoryList = wrd.cget + wrd.cDirectory + wrd.cList;
export const creadDirectorySynchronously = wrd.cread + wrd.cDirectory + wrd.cSynchronously;
export const ccopyAllFilesAndFoldersFromFolderToFolder = wrd.ccopy + wrd.cAll + wrd.cFiles + wrd.cAnd + wrd.cFolders + wrd.cFrom + wrd.cFolder + wrd.cTo + wrd.cFolder;
export const cbuildReleasePackage = wrd.cbuild + wrd.cRelease + wrd.cPackage;
export const ccreateZipArchive = wrd.ccreate + gen.cZip + wrd.cArchive;
export const ccleanRootPath = wrd.cclean + wrd.cRoot + wrd.cPath;
export const ccopyFileSync = wrd.ccopy + wrd.cFile + wrd.cSync;
export const ccopyFolderRecursiveSync = wrd.ccopy + wrd.cFolder + wrd.cRecursive + wrd.cSync;
export const cappendMessageToFile = wrd.cappend + wrd.cMessage + wrd.cTo + wrd.cFile;

/* lexycalAnalyzer */
export const cparseBusinessRuleArgument = wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument;
export const canalyzeArgument = wrd.canalyze + wrd.cArgument;
export const canalyzeForRegularExpression = wrd.canalyze + wrd.cFor + wrd.cRegular + wrd.cExpression;
export const cparseArgumentAsRegularExpression = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cRegular + wrd.cExpression;
export const cparseArgumentAsArray = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cArray;
export const cremoveStringLiteralTagsFromArray = wrd.cremove + wrd.cString + wrd.cLiteral + wrd.cTags + wrd.cFrom + wrd.cArray;

/* mathOperations */
export const chex2rgbConversion = biz.chex2rgbConversion;
export const cisOdd = wrd.cis + wrd.cOdd;
export const cisEven = wrd.cis + wrd.cEven;

/* promptOperations */
export const cprompt = wrd.cprompt;

/* ruleParsing */
export const cdoAllRulesExist = wrd.cdo + wrd.cAll + wrd.cRules + wrd.cExist;
export const cdoesRuleExist = wrd.cdoes + wrd.cRule + wrd.cExist;
export const cgetRule = wrd.cget + wrd.cRule;
export const cprocessRulesInternal = wrd.cprocess + wrd.cRules + wrd.cInternal;

/* stringGeneration */
export const cgenerateRandomMixedCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength;
export const cgenerateRandomUpperCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength;
export const cgenerateRandomLowerCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength;
export const cgenerateRandomNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength;
export const cgenerateRandomSpecialCharacterCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cSpecial + wrd.cCharacter + wrd.cCode + wrd.cBy + wrd.cLength;
export const cgenerateValidEmail = wrd.cgenerate + wrd.cValid + wrd.cEmail;
export const cgenerateInvalidEmail = wrd.cgenerate + wrd.cInvalid + wrd.cEmail;
export const cgenerateRandomBrightColor = wrd.cgenerate + wrd.cRandom + wrd.cBright + wrd.cColor;
export const cgenerateRandomDarkColor = wrd.cgenerate + wrd.cRandom + wrd.cDark + wrd.cColor;
export const cgenerateRandomColor = wrd.cgenerate + wrd.cRandom + wrd.cColor;

/* stringParsingUtilities */
export const cparseSystemRootPath = wrd.cparse + wrd.cSystem + wrd.cRoot + wrd.cPath;
export const cstringToDataType = wrd.cstring + wrd.cTo + wrd.cData + wrd.cType;
export const cstringToBoolean = wrd.cstring + wrd.cTo + wrd.cBoolean;
export const cdetermineObjectDataType = wrd.cdetermine + wrd.cObject + wrd.cData + wrd.cType;
export const cisBoolean = wrd.cis + wrd.cBoolean;
export const cisInteger = wrd.cis + wrd.cInteger;
export const cisFloat = wrd.cis + wrd.cFloat;
export const cisString = wrd.cis + wrd.cString;
export const creplaceDoublePercentWithMessage = wrd.creplace + wrd.cDouble + wrd.cPercent + wrd.cWith + wrd.cMessage;
export const cutilitiesReplaceCharacterWithCharacter = wrd.cUtilities + wrd.cReplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter;

/* timeComputation */
export const cgetNowMoment = wrd.cget + wrd.cNow + wrd.cMoment;
export const ccomputeDeltaTime = wrd.ccompute + wrd.cDelta + wrd.cTime;
export const creformatDeltaTime = wrd.creformat + wrd.cDelta + wrd.cTime;
export const csleep = wrd.csleep;

/* advanced */
export const ccommandSequencer = wrd.ccommand + wrd.cSequencer;
export const cworkflow = wrd.cworkflow;
export const cbusinessRule = wrd.cbusiness + wrd.cRule;
export const ccommandGenerator = wrd.ccommand + wrd.cGenerator;
export const ccommandAliasGenerator = wrd.ccommand + wrd.cAlias + wrd.cGenerator;

/* auxiliary */
export const cconvertColors = wrd.cconvert + wrd.cColors;

/* configuration */
export const cchangeConfigurationSetting = wrd.cchange + wrd.cConfiguration + wrd.cSetting;
export const cchangeDebugConfigurationTheme = wrd.cchange + wrd.cDebug + wrd.cConfiguration + wrd.cTheme;
export const csaveConfiguration = wrd.csave + wrd.cConfiguration;
export const clistConfigurationThemes = wrd.clist + wrd.cConfiguration + wrd.cThemes;

// Test names

/* commandBroker */
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
export const cgetValidCommand_inValidNumber = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cNumber;
export const cgetValidCommand_inValidBoolean = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cBoolean;

export const ccountMatchingCommandAlias_validData = ccountMatchingCommandAlias + wrd.cvalid + wrd.cData;
export const ccountMatchingCommandAlias_inValidCommandAliasDataString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString;
export const ccountMatchingCommandAlias_inValidCommandAliasNameString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString;
export const ccountMatchingCommandAlias_inValidCommandAliasDataNumber = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber;
export const ccountMatchingCommandAlias_inValidCommandAliasDataBoolean = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean;
export const ccountMatchingCommandAlias_inValidCommandAliasNameNumber = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cNumber;
export const ccountMatchingCommandAlias_inValidCommandAliasNameBoolean = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean;

export const csearchCommandAlias_validData = csearchCommandAlias + wrd.cvalid + wrd.cData;
export const csearchCommandAlias_inValidCommandAliasDataString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString;
export const csearchCommandAlias_inValidCommandAliasNameString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString;
export const csearchCommandAlias_inValidCommandAliasDataNumber = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber;
export const csearchCommandAlias_inValidCommandAliasDataBoolean = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean;
export const csearchCommandAlias_inValidCommandAliasNameNumber = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cNumber;
export const csearchCommandAlias_inValidCommandAliasNameBoolean = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean;

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
export const cgetCommandArgs_inValidNumber = cgetCommandArgs + wrd.cinvalid + wrd.cNumber;
export const cgetCommandArgs_inValidBoolean = cgetCommandArgs + wrd.cinvalid + wrd.cBoolean;

export const cexecuteCommand_validData = cexecuteCommand + wrd.cvalid + wrd.cData;
export const cexecuteCommand_inValidString = cexecuteCommand + wrd.cinvalid + wrd.cString;
export const cexecuteCommand_inValidNumber = cexecuteCommand + wrd.cinvalid + wrd.cNumber;
export const cexecuteCommand_inValidBoolean = cexecuteCommand + wrd.cinvalid + wrd.cBoolean;
export const cexecuteCommand_inValidUndefined = cexecuteCommand + wrd.cinvalid + cUndefined;
export const cexecuteCommand_inValidNaN = cexecuteCommand + wrd.cinvalid + cNaN;

/* dataBroker */
export const cscanDataPath_validData = cscanDataPath + wrd.cvalid + wrd.cData;
export const cscanDataPath_inValidString = cscanDataPath + wrd.cinvalid + wrd.cString;
export const cscanDataPath_inValidNumber = cscanDataPath + wrd.cinvalid + wrd.cNumber;
export const cscanDataPath_inValidBoolean = cscanDataPath + wrd.cinvalid + wrd.cBoolean;

export const cfindUniversalDebugConfigSetting_validData = cfindUniversalDebugConfigSetting + wrd.cvalid + wrd.cData;
export const cfindUniversalDebugConfigSetting_inValidString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cString;
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString;
export const cfindUniversalDebugConfigSetting_inValidNumber = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cNumber;
export const cfindUniversalDebugConfigSetting_inValidBoolean = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean;

export const cfindIndividualDebugConfigSetting_validData = cfindIndividualDebugConfigSetting + wrd.cvalid + wrd.cData;
export const cfindIndividualDebugConfigSetting_inValidString = cfindIndividualDebugConfigSetting + wrd.cinvalid + wrd.cString;
export const cfindIndividualDebugConfigSetting_inValidNumber = cfindIndividualDebugConfigSetting + wrd.cinvalid + wrd.cNumber;
export const cfindIndividualDebugConfigSetting_inValidBoolean = cfindIndividualDebugConfigSetting + wrd.cinvalid + wrd.cBoolean;

export const cloadAllCsvData_validData = cloadAllCsvData + wrd.cvalid + wrd.cData;
export const cloadAllCsvData_inValidString = cloadAllCsvData + wrd.cinvalid + wrd.cString;
export const cloadAllCsvData_inValidContextNameString = cloadAllCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cloadAllCsvData_inValidBoolean = cloadAllCsvData + wrd.cinvalid + wrd.cBoolean;
export const cloadAllCsvData_inValidNumber = cloadAllCsvData + wrd.cinvalid + wrd.cNumber;

export const cloadedAllXmlData_validData = cloadAllXmlData + wrd.cvalid + wrd.cData;
export const cloadedAllXmlData_inValidString = cloadAllXmlData + wrd.cinvalid + wrd.cString;
export const cloadAllXmlData_inValidContextNameString = cloadAllXmlData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cloadedAllXmlData_inValidBoolean = cloadAllXmlData + wrd.cinvalid + wrd.cBoolean;
export const cloadedAllXmlData_inValidNumber = cloadAllXmlData + wrd.cinvalid + wrd.cNumber;

export const cloadAllJsonData_validData = cloadAllJsonData + wrd.cvalid + wrd.cData;
export const cloadAllJsonData_inValidString = cloadAllJsonData + wrd.cinvalid + wrd.cString;
export const cloadAllJsonData_inValidContextNameString = cloadAllJsonData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cloadAllJsonData_inValidNumber = cloadAllJsonData + wrd.cinvalid + wrd.cNumber;
export const cloadAllJsonData_inValidBoolean = cloadAllJsonData + wrd.cinvalid + wrd.cBoolean;

export const cprocessCsvData_validData = cprocessCsvData + wrd.cvalid + wrd.cData;
export const cprocessCsvData_inValidContextNameString = cprocessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString;
export const cprocessCsvData_inValidString = cprocessCsvData + wrd.cinvalid + wrd.cString;
export const cprocessCsvData_inValidNumber = cprocessCsvData + wrd.cinvalid + wrd.cNumber;
export const cprocessCsvData_inValidBoolean = cprocessCsvData + wrd.cinvalid + wrd.cBoolean;

export const cpreprocessJsonFile_validData = cpreprocessJsonFile + wrd.cvalid + wrd.cData;
export const cpreprocessJsonFile_inValidString = cpreprocessJsonFile + wrd.cinvalid + wrd.cString;
export const cpreprocessJsonFile_inValidNumber = cpreprocessJsonFile + wrd.cinvalid + wrd.cNumber;
export const cpreprocessJsonFile_inValidBoolean = cpreprocessJsonFile + wrd.cvalid + wrd.cBoolean;

export const cwriteJsonDataToFile_validData = cwriteJsonDataToFile + wrd.cvalid + wrd.cData;
export const cwriteJsonDataToFile_inValidDataToWrite = cwriteJsonDataToFile + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cWrite;
export const cwriteJsonDataToFile_inValidString = cwriteJsonDataToFile + wrd.cinvalid + wrd.cString;
export const cwriteJsonDataToFile_inValidNumber = cwriteJsonDataToFile + wrd.cinvalid + wrd.cNumber;
export const cwriteJsonDataToFile_inValidBoolean = cwriteJsonDataToFile + wrd.cinvalid + wrd.cBoolean;

export const csetupDataStorage_validData = csetupDataStorage + wrd.cvalid + wrd.cData;
export const csetupDataStorage_inValidString = csetupDataStorage + wrd.cinvalid + wrd.cString;
export const csetupDataStorage_inValidNumber = csetupDataStorage + wrd.cinvalid + wrd.cNumber;
export const csetupDataStorage_inValidBoolean = csetupDataStorage + wrd.cinvalid + wrd.cBoolean;

export const cstoreData_validDataString = cstoreData + wrd.cvalid + wrd.cData + wrd.cString;
export const cstoreData_validDataBoolean = cstoreData + wrd.cvalid + wrd.cData + wrd.cBoolean;
export const cstoreData_validDataInteger = cstoreData + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cstoreData_validDataArray = cstoreData + wrd.cvalid + wrd.cData + wrd.cArray;
export const cstoreData_validDataObject = cstoreData + wrd.cvalid + wrd.cData + wrd.cObject;
export const cstoreData_inValidDataToStoreUndefined = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + cUndefined;
export const cstoreData_inValidDataToStoreNaN = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + cNaN;
export const cstoreData_inValidDataStorageDataToStoreNumber = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cNumber;
export const cstoreData_inValidDataStorageDataToStoreBoolean = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cBoolean;

export const cgetData_validData = cgetData + wrd.cvalid + wrd.cData;
export const cgetData_inValidString = cgetData + wrd.cinvalid + wrd.cString;
export const cgetData_inValidNumber = cgetData + wrd.cinvalid + wrd.cNumber;
export const cgetData_inValidBoolean = cgetData + wrd.cinvalid + wrd.cBoolean;

export const cclearData_validData = cclearData + wrd.cvalid + wrd.cData;
export const cclearData_inValidUndefined = cclearData + wrd.cinvalid + cUndefined;
export const cclearData_inValidNaN = cclearData + wrd.cinvalid + cNaN;
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
export const caddDeeplyNestedConstantsValidationData_inValidContextNameUndefined = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + cUndefined;
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNaN = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + cNaN;
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNumber = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cNumber;
export const caddDeeplyNestedConstantsValidationData_inValidContextNameBoolean = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cBoolean;

/* ruleBroker */
export const cbootStrapBusinessRules_validData = cbootStrapBusinessRules + wrd.cvalid + wrd.cData;
export const cbootStrapBusinessRules_inValidString = cbootStrapBusinessRules + wrd.cinvalid + wrd.cString;
export const cbootStrapBusinessRules_inValidNumber = cbootStrapBusinessRules + wrd.cinvalid + wrd.cNumber;
export const cbootStrapBusinessRules_inValidBoolean = cbootStrapBusinessRules + wrd.cinvalid + wrd.cBoolean;

export const caddClientRules_validData = caddClientRules + wrd.cvalid + wrd.cData;
export const caddClientRules_inValidString = caddClientRules + wrd.cinvalid + wrd.cString;
export const caddClientRules_inValidNumber = caddClientRules + wrd.cinvalid + wrd.cNumber;
export const caddClientRules_inValidBoolean = caddClientRules + wrd.cinvalid + wrd.cBoolean;

export const cprocessRules_validData = cprocessRules + wrd.cvalid + wrd.cData;
export const cprocessRules_inValidInputsUndefined = cprocessRules + wrd.cinvalid + wrd.cInputs + cUndefined;
export const cprocessRules_inValidInputsNaN = cprocessRules + wrd.cinvalid + wrd.cInputs + cNaN;
export const cprocessRules_inValidRulesToExecuteUndefined = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + cUndefined;
export const cprocessRules_inValidRulesToExecuteNaN = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + cNaN;
export const cprocessRules_inValidInputsInteger = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cInteger;
export const cprocessRules_inValidInputsBoolean = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cBoolean;
export const cprocessRules_inValidRulesToExecuteInteger = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cInteger;
export const cprocessRules_inValidRulesToExecuteBoolean = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cBoolean;

/* themeBroker */
export const cgetNamedThemes_validData = cgetNamedThemes + wrd.cvalid + wrd.cData;
export const cgetNamedThemes_inValidString = cgetNamedThemes + wrd.cinvalid + wrd.cString;
export const cgetNamedThemes_inValidNumber = cgetNamedThemes + wrd.cinvalid + wrd.cNumber;
export const cgetNamedThemes_inValidBoolean = cgetNamedThemes + wrd.cinvalid + wrd.cBoolean;

export const cgetNamedThemePath_validData = cgetNamedThemePath + wrd.cvalid + wrd.cData;
export const cgetNamedThemePath_inValidString = cgetNamedThemePath + wrd.cinvalid + wrd.cString;
export const cgetNamedThemePath_inValidNumber = cgetNamedThemePath + wrd.cinvalid + wrd.cNumber;
export const cgetNamedThemePath_inValidBoolean = cgetNamedThemePath + wrd.cinvalid + wrd.cBoolean;

export const cloadTheme_validData = cloadTheme + wrd.cvalid + wrd.cData;
export const cloadTheme_inValidString = cloadTheme + wrd.cinvalid + wrd.cString;
export const cloadTheme_inValidNumber = cloadTheme + wrd.cinvalid + wrd.cNumber;
export const cloadTheme_inValidBoolean = cloadTheme + wrd.cinvalid + wrd.cBoolean;

export const capplyTheme_validData = capplyTheme + wrd.cvalid + wrd.cData;
export const capplyTheme_inValidString = capplyTheme + wrd.cinvalid + wrd.cString;
export const capplyTheme_inValidNumber = capplyTheme + wrd.cinvalid + wrd.cNumber;
export const capplyTheme_inValidBoolean = capplyTheme + wrd.cinvalid + wrd.cBoolean;

/* workflowBroker */
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

/* auxiliaryArrayParsing */
export const cparseColorRangeInputs_validDataString = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseColorRangeInputs_validDataInteger = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cparseColorRangeInputs_validDataMixedUse1 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c1;
export const cparseColorRangeInputs_validDataMixedUse2 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c2;
export const cparseColorRangeInputs_inValidInputDataUndefined = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cparseColorRangeInputs_inValidInputDataNaN = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cparseColorRangeInputs_inValidInputMetaDataUndefined = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cparseColorRangeInputs_inValidInputMetaDataNaN = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cdoesArrayContainValue_validDataInputDataString = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainValue_validDataInputDataInteger = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainValue_validDataInputDataBoolean = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainValue_validDataInputDataObject = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject;
export const cdoesArrayContainValue_inValidInputDataUndefined = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined
export const cdoesArrayContainValue_inValidInputDataNaN = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataInteger = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cInteger;
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataBoolean = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cBoolean;

/* characterArrayParsing */
export const creplaceCharacterWithCharacter_validDataInputDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterWithCharacter_validDataInputMetaDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterWithCharacter_inValidInputMetaDataUndefined = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const creplaceCharacterWithCharacter_inValidInputMetaDataNaN = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const creplaceCharacterWithCharacter_validDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataBoolean = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesArrayContainCharacter_validDataInputDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainCharacter_validDataInputDataInteger = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainCharacter_validDataInputDataBoolean = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainCharacter_validDataInputMetaDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainCharacter_inValidInputDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cdoesArrayContainCharacter_inValidInputDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cdoesArrayContainCharacter_inValidInputMetaDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cdoesArrayContainCharacter_inValidInputMetaDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const cdoesArrayContainCharacter_validDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesArrayContainCharacter_validDataInputDataObject = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject;
export const cdoesArrayContainCharacter_validDataInputMetaDataInteger = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesArrayContainCharacter_validDataInputMetaDataBoolean = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainCharacter_validDataInputMetaDataObject = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cObject;

export const cremoveCharacterFromArray_validDataInputDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveCharacterFromArray_validDataInputMetaDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveCharacterFromArray_validDataInputMetaDataInteger = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveCharacterFromArray_validDataInputMetaDataBoolean = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cremoveCharacterFromArray_validDataInputMetaDataObject = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cObject;
export const cremoveCharacterFromArray_inValidInputDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cremoveCharacterFromArray_inValidInputDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cremoveCharacterFromArray_inValidInputMetaDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cremoveCharacterFromArray_inValidInputMetaDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const cremoveCharacterFromArray_validDataInputDataInteger = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cremoveCharacterFromArray_validDataInputDataBoolean = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cremoveCharacterFromArray_validDataInputDataObject = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject;

export const creplaceCharacterAtIndex_validDataInputDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndex_validDataInputMetaDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndex_inValidInputMetaDataUndefined = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const creplaceCharacterAtIndex_inValidInputMetaDataNaN = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* commandArrayParsing */
export const csolveLehmerCode_validDataString = csolveLehmerCode + wrd.cvalid + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidDataInputDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidDataInputMetaDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csolveLehmerCode_inValidInputDataInteger = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csolveLehmerCode_inValidInputDataBoolean = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csolveLehmerCode_inValidInputDataUndefined = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const csolveLehmerCode_inValidInputDataNaN = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const csolveLehmerCode_inValidInputMetaDataInteger = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csolveLehmerCode_inValidInputMetaDataBoolean = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const csolveLehmerCode_inValidInputMetaDataUndefined = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const csolveLehmerCode_inValidInputMetaDataNaN = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const crecursiveArrayExpansion_validDataString = crecursiveArrayExpansion + wrd.cvalid + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidDataInputDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidDataInputMetaDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crecursiveArrayExpansion_inValidInputDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crecursiveArrayExpansion_inValidInputDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crecursiveArrayExpansion_inValidInputMetaDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crecursiveArrayExpansion_inValidInputMetaDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const crecursiveArrayExpansion_inValidInputDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const crecursiveArrayExpansion_inValidInputDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const crecursiveArrayExpansion_inValidInputMetaDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const crecursiveArrayExpansion_inValidInputMetaDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgetLehmerCodeValue_validDataString = cgetLehmerCodeValue + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetLehmerCodeValue_inValidDataInputMetaDataString = cgetLehmerCodeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetLehmerCodeValue_inValidInputDataInteger = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetLehmerCodeValue_inValidInputDataBoolean = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetLehmerCodeValue_inValidInputDataUndefined = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgetLehmerCodeValue_inValidInputDataNaN = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetLehmerCodeValue_inValidDataInputDataString = cgetLehmerCodeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetLehmerCodeValue_inValidInputMetaDataInteger = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetLehmerCodeValue_inValidInputMetaDataBoolean = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetLehmerCodeValue_inValidInputMetaDataUndefined = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgetLehmerCodeValue_inValidInputMetaDataNaN = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgenerateCommandAliases_validDataString = cgenerateCommandAliases + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidDataInputDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidDataInputMetaDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateCommandAliases_inValidInputDataInteger = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateCommandAliases_inValidInputDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateCommandAliases_inValidInputMetaDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cgenerateCommandAliases_inValidInputDataUndefined = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateCommandAliases_inValidInputDataNaN = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const caggregateCommandArguments_validDataString = caggregateCommandArguments + wrd.cvalid + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidDataInputDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidDataInputMetaDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const caggregateCommandArguments_inValidInputDataInteger = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const caggregateCommandArguments_inValidInputDataBoolean = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const caggregateCommandArguments_inValidInputDataUndefined = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const caggregateCommandArguments_inValidInputDataNaN = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const caggregateCommandArguments_inValidInputMetaDataInteger = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const caggregateCommandArguments_inValidInputMetaDataBoolean = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* constantArrayParsing */
export const cgetLengthOfLongestStringInArray_validDataString = cgetLengthOfLongestStringInArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetLengthOfLongestStringInArray_inValidDataInputMetaDataString = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetLengthOfLongestStringInArray_inValidInputDataBoolean = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetLengthOfLongestStringInArray_inValidInputDataUndefined = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgetLengthOfLongestStringInArray_inValidInputDataNaN = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetLengthOfLongestStringInArray_inValidDataInputDataString = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetLengthOfLongestStringInArray_inValidInputDataInteger = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetLengthOfLongestStringInArray_inValidInputMetaDataInteger = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetLengthOfLongestStringInArray_inValidInputMetaDataBoolean = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const csearchForPatternsInStringArray_validDataString = csearchForPatternsInStringArray + wrd.cvalid + wrd.cData + wrd.cString;
export const csearchForPatternsInStringArray_inValidDataInputMetaDataString = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csearchForPatternsInStringArray_inValidInputDataInteger = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csearchForPatternsInStringArray_inValidInputDataBoolean = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csearchForPatternsInStringArray_inValidInputDataUndefined = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const csearchForPatternsInStringArray_inValidInputDataNaN = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const csearchForPatternsInStringArray_inValidDataInputDataString = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csearchForPatternsInStringArray_inValidInputMetaDataInteger = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csearchForPatternsInStringArray_inValidInputMetaDataBoolean = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cvalidatePatternsThatNeedImplementation_validDataString = cvalidatePatternsThatNeedImplementation + wrd.cvalid + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidDataInputDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidDataInputMetaDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataInteger = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataUndefined = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataNaN = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cvalidatePatternsThatNeedImplementation_inValidInputDataInteger = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;

/* dataArrayParsing */
export const carraysAreEqual_validDataString = carraysAreEqual + wrd.cvalid + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidDataInputDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidDataInputMetaDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const carraysAreEqual_inValidInputDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const carraysAreEqual_inValidInputDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const carraysAreEqual_inValidInputMetaDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const carraysAreEqual_inValidInputMetaDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const carraysAreEqual_inValidInputDataUndefined = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const carraysAreEqual_inValidInputDataNaN = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const cstoreData_inValidDataInputDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cstoreData_inValidDataInputMetaDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cstoreData_inValidInputDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cstoreData_inValidInputDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cstoreData_inValidInputMetaDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cstoreData_inValidInputMetaDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cstoreData_inValidInputMetaDataUndefined = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cstoreData_inValidInputMetaDataNaN = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgetStoredData_validDataString = cgetStoredData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetStoredData_inValidDataInputDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetStoredData_inValidDataInputMetaDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetStoredData_inValidInputDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetStoredData_inValidInputDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetStoredData_inValidInputMetaDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetStoredData_inValidInputMetaDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetStoredData_inValidInputDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgetStoredData_inValidInputDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetStoredData_inValidInputMetaDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgetStoredData_inValidInputMetaDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisObjectEmpty_validDataString = cisObjectEmpty + wrd.cvalid + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidDataInputDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidDataInputMetaDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisObjectEmpty_inValidInputDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisObjectEmpty_inValidInputDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisObjectEmpty_inValidInputMetaDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisObjectEmpty_inValidInputMetaDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisObjectEmpty_inValidInputDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisObjectEmpty_inValidInputDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisObjectEmpty_inValidInputMetaDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisObjectEmpty_inValidInputMetaDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisArrayEmpty_validDataString = cisArrayEmpty + wrd.cvalid + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidDataInputDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidDataInputMetaDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisArrayEmpty_inValidInputDataInteger = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArrayEmpty_inValidInputDataBoolean = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArrayEmpty_inValidInputDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisArrayEmpty_inValidInputDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisArrayEmpty_inValidInputMetaDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisArrayEmpty_inValidInputMetaDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisObject_validDataObject = cisObject + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisObject_validDataArray = cisObject + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisObject_inValidDataInputDataString = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisObject_inValidInputDataInteger = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisObject_inValidInputDataBoolean = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisObject_inValidInputDataUndefined = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cisObject_inValidInputDataNaN = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;

export const cisArray_validDataObject = cisArray + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisArray_validDataArray = cisArray + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisArray_inValidDataInputDataString = cisArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArray_inValidInputDataInteger = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArray_inValidInputDataBoolean = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArray_inValidInputDataUndefined = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisArray_inValidInputDataNaN = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const cisArrayOrObject_validDataObject = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisArrayOrObject_validDataArray = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisArrayOrObject_inValidDataInputDataString = cisArrayOrObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisArrayOrObject_inValidInputDataInteger = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisArrayOrObject_inValidInputDataBoolean = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisArrayOrObject_inValidInputDataUndefined = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisArrayOrObject_inValidInputDataNaN = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const cisNonZeroLengthArray_validDataObject = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cObject;
export const cisNonZeroLengthArray_validDataArray = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cArray;
export const cisNonZeroLengthArray_inValidDataInputDataString = cisNonZeroLengthArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisNonZeroLengthArray_inValidInputDataInteger = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisNonZeroLengthArray_inValidInputDataBoolean = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisNonZeroLengthArray_inValidInputDataUndefined = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisNonZeroLengthArray_inValidInputDataNaN = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const carrayDeepClone_validDataString = carrayDeepClone + wrd.cvalid + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidDataInputDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidDataInputMetaDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const carrayDeepClone_inValidInputDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const carrayDeepClone_inValidInputDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const carrayDeepClone_inValidInputMetaDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const carrayDeepClone_inValidInputMetaDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const carrayDeepClone_inValidInputDataUndefined = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const carrayDeepClone_inValidInputDataNaN = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const cobjectDeepMerge_validDataObject = cobjectDeepMerge + wrd.cvalid + wrd.cData + wrd.cObject;
export const cobjectDeepMerge_inValidDataInputDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cobjectDeepMerge_inValidDataInputMetaDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cobjectDeepMerge_inValidInputDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cobjectDeepMerge_inValidInputDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cobjectDeepMerge_inValidInputMetaDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cobjectDeepMerge_inValidInputMetaDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cobjectDeepMerge_inValidInputDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cobjectDeepMerge_inValidInputDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cobjectDeepMerge_inValidInputMetaDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cobjectDeepMerge_inValidInputMetaDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgetNamespacedDataObject_validDataString = cgetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetNamespacedDataObject_inValidDataInputMetaDataString = cgetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetNamespacedDataObject_inValidInputDataInteger = cgetNamespacedDataObject + wrd.cinvalid + wrd.cinput + wrd.cData + wrd.cInteger;
export const cgetNamespacedDataObject_inValidInputDataBoolean = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetNamespacedDataObject_inValidInputDataNaN = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetNamespacedDataObject_inValidDataInputDataString = cgetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetNamespacedDataObject_inValidInputMetaDataInteger = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetNamespacedDataObject_inValidInputMetaDataBoolean = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetNamespacedDataObject_inValidInputDataUndefined = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const csetNamespacedDataObject_validDataString = csetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString;
export const csetNamespacedDataObject_inValidDataInputMetaDataString = csetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csetNamespacedDataObject_inValidInputDataInteger = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csetNamespacedDataObject_inValidInputDataBoolean = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csetNamespacedDataObject_inValidInputDataNaN = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const csetNamespacedDataObject_inValidDataInputDataString = csetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csetNamespacedDataObject_inValidInputMetaDataInteger = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csetNamespacedDataObject_inValidInputMetaDataBoolean = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const csetNamespacedDataObject_inValidInputDataUndefined = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;

/* pathArrayParsing */
export const cdoesArrayContainFilename_validDataString = cdoesArrayContainFilename + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidDataInputDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidDataInputMetaDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainFilename_inValidInputDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainFilename_inValidInputDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainFilename_inValidInputMetaDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cdoesArrayContainFilename_inValidInputMetaDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean
export const cdoesArrayContainFilename_inValidInputDataUndefined = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cdoesArrayContainFilename_inValidInputDataNaN = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const cgetFileAndPathListForPath_validDataString = cgetFileAndPathListForPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidDataInputDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidDataInputMetaDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetFileAndPathListForPath_inValidInputDataBoolean = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetFileAndPathListForPath_inValidInputDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgetFileAndPathListForPath_inValidInputDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetFileAndPathListForPath_inValidInputMetaDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgetFileAndPathListForPath_inValidInputMetaDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const cgetFileAndPathListForPath_inValidInputMetaDataInteger = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetFileAndPathListForPath_inValidInputMetaDataBoolean = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetFileAndPathListForPath_inValidInputDataInteger = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;

/* wordArrayParsing */
export const cconvertCamelCaseStringToArray_validDataString = cconvertCamelCaseStringToArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertCamelCaseStringToArray_inValidDataInputDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertCamelCaseStringToArray_inValidDataInputMetaDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const CconvertCamelCaseStringToArray_inValidInputDataInteger = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertCamelCaseStringToArray_inValidInputDataBoolean = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertCamelCaseStringToArray_inValidInputMetaDataInteger = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertCamelCaseStringToArray_inValidInputMetaDataBoolean = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetWordsArrayFromString_validDataString = cgetWordsArrayFromString + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidDataInputDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidDataInputMetaDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetWordsArrayFromString_inValidInputDataBoolean = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetWordsArrayFromString_inValidInputDataInteger = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetWordsArrayFromString_inValidInputMetaDataInteger = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetWordsArrayFromString_inValidInputMetaDataBoolean = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crecombineStringArrayWithSpaces_validDataString = crecombineStringArrayWithSpaces + wrd.cvalid + wrd.cData + wrd.cString;
export const crecombineStringArrayWithSpaces_inValidDataInputMetaDataString = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crecombineStringArrayWithSpaces_inValidInputDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crecombineStringArrayWithSpaces_inValidInputMetaDataInteger = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crecombineStringArrayWithSpaces_inValidInputMetaDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const crecombineStringArrayWithSpaces_inValidInputDataUndefined = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const crecombineStringArrayWithSpaces_inValidInputDataNaN = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const crecombineStringArrayWithSpaces_inValidDataInputDataString = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crecombineStringArrayWithSpaces_inValidInputDataInteger = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;

export const cconvertArrayToCamelCaseString_validDataString = cconvertArrayToCamelCaseString + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertArrayToCamelCaseString_inValidDataInputMetaDataString = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertArrayToCamelCaseString_inValidInputDataBoolean = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertArrayToCamelCaseString_inValidInputDataUndefined = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cconvertArrayToCamelCaseString_inValidInputDataNaN = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cconvertArrayToCamelCaseString_inValidDataInputDataString = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertArrayToCamelCaseString_inValidInputDataInteger = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertArrayToCamelCaseString_inValidInputMetaDataInteger = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertArrayToCamelCaseString_inValidInputMetaDataBoolean = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesArrayContainLowerCaseConsolidatedString_validDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataInteger = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;

export const cascertainMatchingElements_validDataString = cascertainMatchingElements + wrd.cvalid + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidDataInputDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidDataInputMetaDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cascertainMatchingElements_inValidInputDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cascertainMatchingElements_inValidInputDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cascertainMatchingElements_inValidInputMetaDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cascertainMatchingElements_inValidInputMetaDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cascertainMatchingElements_inValidInputDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cascertainMatchingElements_inValidInputDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cascertainMatchingElements_inValidInputMetaDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cascertainMatchingElements_inValidInputMetaDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* characterStringParsing */
export const csingleQuoteSwapAfterEquals_validDataString = csingleQuoteSwapAfterEquals + wrd.cvalid + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidDataInputDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidDataInputMetaDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csingleQuoteSwapAfterEquals_inValidInputDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataInteger = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const csingleQuoteSwapAfterEquals_inValidInputDataInteger = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;

export const cswapForwardSlashToBackSlash_validDataString = cswapForwardSlashToBackSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidDataInputDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidDataInputMetaDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapForwardSlashToBackSlash_inValidInputDataBoolean = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cswapForwardSlashToBackSlash_inValidInputDataInteger = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cswapForwardSlashToBackSlash_inValidInputMetaDataInteger = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cswapForwardSlashToBackSlash_inValidInputMetaDataBoolean = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cswapBackSlashToForwardSlash_validDataString = cswapBackSlashToForwardSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidDataInputDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidDataInputMetaDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapBackSlashToForwardSlash_inValidInputDataBoolean = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cswapBackSlashToForwardSlash_inValidInputDataInteger = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cswapBackSlashToForwardSlash_inValidInputMetaDataInteger = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cswapBackSlashToForwardSlash_inValidInputMetaDataBoolean = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cswapDoubleForwardSlashToSingleForwardSlash_validDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataInteger = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataInteger = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataBoolean = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cswapDoubleBackSlashToSingleBackSlash_validDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cvalid + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputDataInteger = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataInteger = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataBoolean = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const creplaceSpacesWithPlus_validDataString = creplaceSpacesWithPlus + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidDataInputDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidDataInputMetaDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceSpacesWithPlus_inValidInputDataBoolean = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creplaceSpacesWithPlus_inValidInputDataInteger = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creplaceSpacesWithPlus_inValidInputMetaDataInteger = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creplaceSpacesWithPlus_inValidInputMetaDataBoolean = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const creplaceColonWithUnderscore_validDataString = creplaceColonWithUnderscore + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidDataInputDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidDataInputMetaDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceColonWithUnderscore_inValidInputDataBoolean = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creplaceColonWithUnderscore_inValidInputDataInteger = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creplaceColonWithUnderscore_inValidInputMetaDataInteger = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creplaceColonWithUnderscore_inValidInputMetaDataBoolean = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccleanCarriageReturnFromString_validDataString = ccleanCarriageReturnFromString + wrd.cvalid + wrd.cData + wrd.cString;
export const ccleanCarriageReturnFromString_inValidDataInputDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccleanCarriageReturnFromString_inValidDataInputMetaDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cString;
export const ccleanCarriageReturnFromString_inValidInputDataBoolean = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccleanCarriageReturnFromString_inValidInputDataInteger = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccleanCarriageReturnFromString_inValidInputMetaDataInteger = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccleanCarriageReturnFromString_inValidInputMetaDataBoolean = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconvertStringToLowerCase_validDataString = cconvertStringToLowerCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidDataInputDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidDataInputMetaDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertStringToLowerCase_inValidInputDataBoolean = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertStringToLowerCase_inValidInputDataInteger = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertStringToLowerCase_inValidInputMetaDataInteger = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertStringToLowerCase_inValidInputMetaDataBoolean = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconvertStringToUpperCase_validDataString = cconvertStringToUpperCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidDataInputDataString = cconvertStringToUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidDataInputMetaDataString = cconvertStringToUpperCase + wrd.cinvalid  + wrd.Data + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertStringToUpperCase_inValidInputDataBoolean = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertStringToUpperCase_inValidInputDataInteger = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertStringToUpperCase_inValidInputMetaDataInteger = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertStringToUpperCase_inValidInputMetaDataBoolean = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesStringContainUpperCaseCharacter_validDataString = cdoesStringContainUpperCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidDataInputDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesStringContainUpperCaseCharacter_inValidInputDataInteger = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesStringContainUpperCaseCharacter_inValidInputDataBoolean = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesStringContainUpperCaseCharacter_inValidInputMetaDataInteger = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesStringContainUpperCaseCharacter_inValidInputMetaDataBoolean = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesStringContainLowerCaseCharacter_validDataString = cdoesStringContainLowerCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidDataInputDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesStringContainLowerCaseCharacter_inValidInputDataInteger = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesStringContainLowerCaseCharacter_inValidInputDataBoolean = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesStringContainLowerCaseCharacter_inValidInputMetaDataInteger = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesStringContainLowerCaseCharacter_inValidInputMetaDataBoolean = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisFirstCharacterLowerCase_validDataString = cisFirstCharacterLowerCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidDataInputDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidDataInputMetaDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisFirstCharacterLowerCase_inValidInputDataBoolean = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisFirstCharacterLowerCase_inValidInputMetaDataInteger = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisFirstCharacterLowerCase_inValidInputMetaDataBoolean = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisFirstCharacterUpperCase_validDataString = cisFirstCharacterUpperCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidDataInputDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidDataInputMetaDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisFirstCharacterUpperCase_inValidInputDataBoolean = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisFirstCharacterUpperCase_inValidInputMetaDataInteger = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisFirstCharacterUpperCase_inValidInputMetaDataBoolean = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const creplaceCharacterAtIndexOfString_validDataString = creplaceCharacterAtIndexOfString + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidDataInputDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidDataInputMetaDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceCharacterAtIndexOfString_inValidInputDataInteger = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creplaceCharacterAtIndexOfString_inValidInputDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const creplaceCharacterAtIndexOfString_inValidInputDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const creplaceCharacterAtIndexOfString_inValidInputDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataInteger = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;

/* commandStringParsing */
export const ccleanCommandInput_validDataString = ccleanCommandInput + wrd.cvalid + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidDataInputDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidDataInputMetaDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccleanCommandInput_inValidInputDataBoolean = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccleanCommandInput_inValidInputDataInteger = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccleanCommandInput_inValidInputMetaDataInteger = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccleanCommandInput_inValidInputMetaDataBoolean = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisValidCommandNameString_validDataString = cisValidCommandNameString + wrd.cvalid + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidDataInputDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidDataInputMetaDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisValidCommandNameString_inValidInputDataInteger = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisValidCommandNameString_inValidInputDataBoolean = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;

/* constantStringParsing */
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

/* dataStringParsing */
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

/* fileStringParsing */
export const cgetFileNameFromPath_validDataString = cgetFileNameFromPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetFileNameFromPath_inValidDataInputDataString = cgetFileNameFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetFileNameFromPath_inValidDataInputMetaDataString = cgetFileNameFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetFileNameFromPath_inValidInputDataInteger = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetFileNameFromPath_inValidInputDataBoolean = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetFileNameFromPath_inValidInputMetaDataInteger = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetFileNameFromPath_inValidInputMetaDataBoolean = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetFileExtension_validDataString = cgetFileExtension + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetFileExtension_inValidDataInputDataString = cgetFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetFileExtension_inValidDataInputMetaDataString = cgetFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetFileExtension_inValidInputDataInteger = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetFileExtension_inValidInputDataBoolean = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetFileExtension_inValidInputMetaDataInteger = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetFileExtension_inValidInputMetaDataBoolean = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cremoveDotFromFileExtension_validDataString = cremoveDotFromFileExtension + wrd.cvalid + wrd.cData + wrd.cString;
export const cremoveDotFromFileExtension_inValidDataInputDataString = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveDotFromFileExtension_inValidDataInputMetaDataString = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveDotFromFileExtension_inValidInputDataInteger = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cremoveDotFromFileExtension_inValidInputDataBoolean = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cremoveDotFromFileExtension_inValidInputMetaDataInteger = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveDotFromFileExtension_inValidInputMetaDataBoolean = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cremoveFileExtensionFromFileName_validDataString = cremoveFileExtensionFromFileName + wrd.cvalid + wrd.cData + wrd.cString;
export const cremoveFileExtensionFromFileName_inValidDataInputDataString = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveFileExtensionFromFileName_inValidDataInputMetaDataString = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveFileExtensionFromFileName_inValidInputDataInteger = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cremoveFileExtensionFromFileName_inValidInputDataBoolean = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cremoveFileExtensionFromFileName_inValidInputMetaDataInteger = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveFileExtensionFromFileName_inValidInputMetaDataBoolean = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cascertainMatchingFilenames_validDataString = cascertainMatchingFilenames + wrd.cvalid + wrd.cData + wrd.cString;
export const cascertainMatchingFilenames_inValidDataInputDataString = cascertainMatchingFilenames + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cascertainMatchingFilenames_inValidDataInputMetaDataString = cascertainMatchingFilenames + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cascertainMatchingFilenames_inValidInputDataInteger = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cascertainMatchingFilenames_inValidInputDataBoolean = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cascertainMatchingFilenames_inValidInputMetaDataInteger = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cascertainMatchingFilenames_inValidInputMetaDataBoolean = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const csupportedFileFormatsAre_validDataString = csupportedFileFormatsAre + wrd.cvalid + wrd.cData + wrd.cString;
export const csupportedFileFormatsAre_inValidDataInputDataString = csupportedFileFormatsAre + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csupportedFileFormatsAre_inValidDataInputMetaDataString = csupportedFileFormatsAre + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csupportedFileFormatsAre_inValidInputDataInteger = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csupportedFileFormatsAre_inValidInputDataBoolean = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csupportedFileFormatsAre_inValidInputMetaDataInteger = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csupportedFileFormatsAre_inValidInputMetaDataBoolean = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cremoveXnumberOfFoldersFromEndOfPath_validDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataInteger = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataBoolean = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetFirstTopLevelFolderFromPath_validDataString = cgetFirstTopLevelFolderFromPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetFirstTopLevelFolderFromPath_inValidDataInputDataString = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetFirstTopLevelFolderFromPath_inValidDataInputMetaDataString = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetFirstTopLevelFolderFromPath_inValidInputDataInteger = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetFirstTopLevelFolderFromPath_inValidInputDataBoolean = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetFirstTopLevelFolderFromPath_inValidInputMetaDataInteger = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetFirstTopLevelFolderFromPath_inValidInputMetaDataBoolean = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* wordStringParsing */
export const cisStringCamelCase_validDataString = cisStringCamelCase + wrd.cvalid + wrd.cData + wrd.cString;
export const cisStringCamelCase_inValidDataInputDataString = cisStringCamelCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisStringCamelCase_inValidDataInputMetaDataString = cisStringCamelCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisStringCamelCase_inValidInputDataInteger = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisStringCamelCase_inValidInputDataBoolean = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisStringCamelCase_inValidInputMetaDataInteger = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisStringCamelCase_inValidInputMetaDataBoolean = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cmapWordToCamelCaseWord_validDataString = cmapWordToCamelCaseWord + wrd.cvalid + wrd.cData + wrd.cString;
export const cmapWordToCamelCaseWord_inValidDataInputDataString = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cmapWordToCamelCaseWord_inValidDataInputMetaDataString = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cmapWordToCamelCaseWord_inValidInputDataInteger = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cmapWordToCamelCaseWord_inValidInputDataBoolean = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cmapWordToCamelCaseWord_inValidInputMetaDataInteger = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cmapWordToCamelCaseWord_inValidInputMetaDataBoolean = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const csimplifyAndConsolidateString_validDataString = csimplifyAndConsolidateString + wrd.cvalid + wrd.cData + wrd.cString;
export const csimplifyAndConsolidateString_inValidDataInputDataString = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csimplifyAndConsolidateString_inValidDataInputMetaDataString = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csimplifyAndConsolidateString_inValidInputDataInteger = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csimplifyAndConsolidateString_inValidInputDataBoolean = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csimplifyAndConsolidateString_inValidInputMetaDataInteger = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csimplifyAndConsolidateString_inValidInputMetaDataBoolean = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccompareSimplifiedAndConsolidatedStrings_validDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cvalid + wrd.cData + wrd.cString;
export const ccompareSimplifiedAndConsolidatedStrings_inValidDataInputDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccompareSimplifiedAndConsolidatedStrings_inValidDataInputMetaDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputDataInteger = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputDataBoolean = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputMetaDataInteger = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputMetaDataBoolean = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccountCamelCaseWords_validDataString = ccountCamelCaseWords + wrd.cvalid + wrd.cData + wrd.cString;
export const ccountCamelCaseWords_inValidDataInputDataString = ccountCamelCaseWords + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccountCamelCaseWords_inValidDataInputMetaDataString = ccountCamelCaseWords + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccountCamelCaseWords_inValidInputDataInteger = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccountCamelCaseWords_inValidInputDataBoolean = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccountCamelCaseWords_inValidInputMetaDataInteger = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccountCamelCaseWords_inValidInputMetaDataBoolean = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesStringContainAcronym_validDataString = cdoesStringContainAcronym + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesStringContainAcronym_inValidDataInputDataString = cdoesStringContainAcronym + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesStringContainAcronym_inValidDataInputMetaDataString = cdoesStringContainAcronym + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesStringContainAcronym_inValidInputDataInteger = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesStringContainAcronym_inValidInputDataBoolean = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesStringContainAcronym_inValidInputMetaDataInteger = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesStringContainAcronym_inValidInputMetaDataBoolean = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdetermineWordDelimiter_validDataString = cdetermineWordDelimiter + wrd.cvalid + wrd.cData + wrd.cString;
export const cdetermineWordDelimiter_inValidDataInputDataString = cdetermineWordDelimiter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdetermineWordDelimiter_inValidDataInputMetaDataString = cdetermineWordDelimiter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdetermineWordDelimiter_inValidInputDataInteger = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdetermineWordDelimiter_inValidInputDataBoolean = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdetermineWordDelimiter_inValidInputMetaDataInteger = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdetermineWordDelimiter_inValidInputMetaDataBoolean = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccountDelimiterInString_validDataString = ccountDelimiterInString + wrd.cvalid + wrd.cData + wrd.cString;
export const ccountDelimiterInString_inValidDataInputDataString = ccountDelimiterInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccountDelimiterInString_inValidDataInputMetaDataString = ccountDelimiterInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccountDelimiterInString_inValidInputDataInteger = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccountDelimiterInString_inValidInputDataBoolean = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccountDelimiterInString_inValidInputMetaDataInteger = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccountDelimiterInString_inValidInputMetaDataBoolean = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetWordCountInString_validDataString = cgetWordCountInString + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetWordCountInString_inValidDataInputDataString = cgetWordCountInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetWordCountInString_inValidDataInputMetaDataString = cgetWordCountInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetWordCountInString_inValidInputDataInteger = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetWordCountInString_inValidInputDataBoolean = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetWordCountInString_inValidInputMetaDataInteger = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetWordCountInString_inValidInputMetaDataBoolean = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisStringList_validDataString = cisStringList + wrd.cvalid + wrd.cData + wrd.cString;
export const cisStringList_inValidDataInputDataString = cisStringList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisStringList_inValidDataInputMetaDataString = cisStringList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisStringList_inValidInputDataInteger = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisStringList_inValidInputDataBoolean = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisStringList_inValidInputMetaDataInteger = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisStringList_inValidInputMetaDataBoolean = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const caggregateNumericalDifferenceBetweenTwoStrings_validDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cvalid + wrd.cData + wrd.cString;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputMetaDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataInteger = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataBoolean = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataInteger = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataBoolean = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* characterGeneration */
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateMixedCaseAlphaNumericCharacter_validDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateUpperCaseAlphaNumericCharacter_validDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateLowerCaseAlphaNumericCharacter_validDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateNumericCharacter_validDataString = crandomlyGenerateNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateNumericCharacter_inValidDataInputDataString = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateNumericCharacter_inValidInputDataInteger = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateNumericCharacter_inValidInputDataBoolean = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateSpecialCharacter_validDataString = crandomlyGenerateSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateSpecialCharacter_inValidDataInputDataString = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateSpecialCharacter_inValidInputDataInteger = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateNumberInRange_validDataStringTrueTrue = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "TrueTrue";
export const crandomlyGenerateNumberInRange_validDataStringTrueFalse = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "TrueFalse";
export const crandomlyGenerateNumberInRange_validDataStringFalseTrue = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "FalseTrue";
export const crandomlyGenerateNumberInRange_validDataStringFalseFalse = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "FalseFalse";
export const crandomlyGenerateNumberInRange_validDataInteger = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cInteger;
export const crandomlyGenerateNumberInRange_inValidDataInputDataString = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateNumberInRange_inValidDataInputMetaDataString = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateNumberInRange_inValidInputDataInteger = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateNumberInRange_inValidInputDataBoolean = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateNumberInRange_inValidInputMetaDataInteger = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateNumberInRange_inValidInputMetaDataBoolean = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateNumberInRange_inValidInputDataUndefined = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const crandomlyGenerateNumberInRange_inValidInputDataNaN = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const crandomlyGenerateNumberInRange_inValidInputMetaDataUndefined = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const crandomlyGenerateNumberInRange_inValidInputMetaDataNaN = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const crandomlyGenerateBooleanValue_validDataString = crandomlyGenerateBooleanValue + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateBooleanValue_inValidDataInputDataString = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateBooleanValue_inValidDataInputMetaDataString = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateBooleanValue_inValidInputDataInteger = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateBooleanValue_inValidInputDataBoolean = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateBooleanValue_inValidInputMetaDataInteger = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateBooleanValue_inValidInputMetaDataBoolean = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateMixedCaseAlphabeticCharacter_validDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateLowerCaseLetter_validDataString = crandomlyGenerateLowerCaseLetter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetter_inValidDataInputDataString = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateLowerCaseLetter_inValidInputDataInteger = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseLetter_inValidInputDataBoolean = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateLowerCaseLetter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateLowerCaseLetter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const crandomlyGenerateUpperCaseLetter_validDataString = crandomlyGenerateUpperCaseLetter + wrd.cvalid + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetter_inValidDataInputDataString = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const crandomlyGenerateUpperCaseLetter_inValidInputDataInteger = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseLetter_inValidInputDataBoolean = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const crandomlyGenerateUpperCaseLetter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const crandomlyGenerateUpperCaseLetter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconvertNumberToUpperCaseLetter_validDataString = cconvertNumberToUpperCaseLetter + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertNumberToUpperCaseLetter_inValidDataInputDataString = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertNumberToUpperCaseLetter_inValidDataInputMetaDataString = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertNumberToUpperCaseLetter_inValidInputDataInteger = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertNumberToUpperCaseLetter_inValidInputDataBoolean = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertNumberToUpperCaseLetter_inValidInputMetaDataInteger = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertNumberToUpperCaseLetter_inValidInputMetaDataBoolean = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cconvertNumberToLowerCaseLetter_validDataString = cconvertNumberToLowerCaseLetter + wrd.cvalid + wrd.cData + wrd.cString;
export const cconvertNumberToLowerCaseLetter_inValidDataInputDataString = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconvertNumberToLowerCaseLetter_inValidDataInputMetaDataString = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconvertNumberToLowerCaseLetter_inValidInputDataInteger = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconvertNumberToLowerCaseLetter_inValidInputDataBoolean = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconvertNumberToLowerCaseLetter_inValidInputMetaDataInteger = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconvertNumberToLowerCaseLetter_inValidInputMetaDataBoolean = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* fileOperations */
export const cgetXmlData_validDataString = cgetXmlData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetXmlData_inValidDataInputDataString = cgetXmlData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetXmlData_inValidDataInputMetaDataString = cgetXmlData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetXmlData_inValidInputDataInteger = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetXmlData_inValidInputDataBoolean = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetXmlData_inValidInputMetaDataInteger = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetXmlData_inValidInputMetaDataBoolean = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetCsvData_validDataString = cgetCsvData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetCsvData_inValidDataInputDataString = cgetCsvData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetCsvData_inValidDataInputMetaDataString = cgetCsvData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetCsvData_inValidInputDataInteger = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetCsvData_inValidInputDataBoolean = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetCsvData_inValidInputMetaDataInteger = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetCsvData_inValidInputMetaDataBoolean = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetJsonData_validDataString = cgetJsonData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetJsonData_inValidDataInputDataString = cgetJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetJsonData_inValidDataInputMetaDataString = cgetJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetJsonData_inValidInputDataInteger = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetJsonData_inValidInputDataBoolean = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetJsonData_inValidInputMetaDataInteger = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetJsonData_inValidInputMetaDataBoolean = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cwriteJsonData_validDataString = cwriteJsonData + wrd.cvalid + wrd.cData + wrd.cString;
export const cwriteJsonData_inValidDataInputDataString = cwriteJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cwriteJsonData_inValidDataInputMetaDataString = cwriteJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cwriteJsonData_inValidInputDataInteger = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cwriteJsonData_inValidInputDataBoolean = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cwriteJsonData_inValidInputMetaDataInteger = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cwriteJsonData_inValidInputMetaDataBoolean = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const creadDirectoryContents_validDataString = creadDirectoryContents + wrd.cvalid + wrd.cData + wrd.cString;
export const creadDirectoryContents_inValidDataInputDataString = creadDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creadDirectoryContents_inValidDataInputMetaDataString = creadDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creadDirectoryContents_inValidInputDataInteger = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creadDirectoryContents_inValidInputDataBoolean = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creadDirectoryContents_inValidInputMetaDataInteger = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creadDirectoryContents_inValidInputMetaDataBoolean = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cscanDirectoryContents_validDataString = cscanDirectoryContents + wrd.cvalid + wrd.cData + wrd.cString;
export const cscanDirectoryContents_inValidDataInputDataString = cscanDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cscanDirectoryContents_inValidDataInputMetaDataString = cscanDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cscanDirectoryContents_inValidInputDataInteger = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cscanDirectoryContents_inValidInputDataBoolean = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cscanDirectoryContents_inValidInputMetaDataInteger = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cscanDirectoryContents_inValidInputMetaDataBoolean = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cscanDirectoryContents_inValidInputMetaDataNaN = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const cscanDirectoryContents_inValidInputMetaDataUndefined = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;

export const cgetDirectoryList_validDataString = cgetDirectoryList + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetDirectoryList_inValidDataInputDataString = cgetDirectoryList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetDirectoryList_inValidDataInputMetaDataString = cgetDirectoryList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetDirectoryList_inValidInputDataInteger = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetDirectoryList_inValidInputDataBoolean = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetDirectoryList_inValidInputMetaDataInteger = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetDirectoryList_inValidInputMetaDataBoolean = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const creadDirectorySynchronously_validDataString = creadDirectorySynchronously + wrd.cvalid + wrd.cData + wrd.cString;
export const creadDirectorySynchronously_inValidDataInputDataString = creadDirectorySynchronously + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creadDirectorySynchronously_inValidDataInputMetaDataString = creadDirectorySynchronously + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creadDirectorySynchronously_inValidInputDataInteger = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creadDirectorySynchronously_inValidInputDataBoolean = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creadDirectorySynchronously_inValidInputMetaDataInteger = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creadDirectorySynchronously_inValidInputMetaDataBoolean = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccopyAllFilesAndFoldersFromFolderToFolder_validDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cvalid + wrd.cData + wrd.cString;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidDataInputDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidDataInputMetaDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataInteger = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataBoolean = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataInteger = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataBoolean = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataUndefined = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataNaN = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cbuildReleasePackage_validDataString = cbuildReleasePackage + wrd.cvalid + wrd.cData + wrd.cString;
export const cbuildReleasePackage_inValidDataInputDataString = cbuildReleasePackage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cbuildReleasePackage_inValidDataInputMetaDataString = cbuildReleasePackage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cbuildReleasePackage_inValidInputDataInteger = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cbuildReleasePackage_inValidInputDataBoolean = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cbuildReleasePackage_inValidInputMetaDataInteger = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cbuildReleasePackage_inValidInputMetaDataBoolean = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccreateZipArchive_validDataString = ccreateZipArchive + wrd.cvalid + wrd.cData + wrd.cString;
export const ccreateZipArchive_inValidDataInputDataString = ccreateZipArchive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccreateZipArchive_inValidDataInputMetaDataString = ccreateZipArchive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccreateZipArchive_inValidInputDataInteger = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccreateZipArchive_inValidInputDataBoolean = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccreateZipArchive_inValidInputMetaDataInteger = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccreateZipArchive_inValidInputMetaDataBoolean = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const ccreateZipArchive_inValidInputMetaDataUndefined = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const ccreateZipArchive_inValidInputMetaDataNaN = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const ccleanRootPath_validDataString = ccleanRootPath + wrd.cvalid + wrd.cData + wrd.cString;
export const ccleanRootPath_inValidDataInputDataString = ccleanRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccleanRootPath_inValidDataInputMetaDataString = ccleanRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccleanRootPath_inValidInputDataInteger = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccleanRootPath_inValidInputDataBoolean = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccleanRootPath_inValidInputMetaDataInteger = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccleanRootPath_inValidInputMetaDataBoolean = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const ccopyFileSync_validDataString = ccopyFileSync + wrd.cvalid + wrd.cData + wrd.cString;
export const ccopyFileSync_inValidDataInputDataString = ccopyFileSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccopyFileSync_inValidDataInputMetaDataString = ccopyFileSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccopyFileSync_inValidInputDataInteger = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccopyFileSync_inValidInputDataBoolean = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccopyFileSync_inValidInputMetaDataInteger = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccopyFileSync_inValidInputMetaDataBoolean = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const ccopyFileSync_inValidInputMetaDataUndefined = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const ccopyFileSync_inValidInputMetaDataNaN = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;
export const ccopyFileSync_inValidInputDataUndefined = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const ccopyFileSync_inValidInputDataNaN = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;

export const ccopyFolderRecursiveSync_validDataString = ccopyFolderRecursiveSync + wrd.cvalid + wrd.cData + wrd.cString;
export const ccopyFolderRecursiveSync_inValidDataInputDataString = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccopyFolderRecursiveSync_inValidDataInputMetaDataString = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccopyFolderRecursiveSync_inValidInputDataInteger = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccopyFolderRecursiveSync_inValidInputDataBoolean = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccopyFolderRecursiveSync_inValidInputMetaDataInteger = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccopyFolderRecursiveSync_inValidInputMetaDataBoolean = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cappendMessageToFile_validDataString = cappendMessageToFile + wrd.cvalid + wrd.cData + wrd.cString;
export const cappendMessageToFile_inValidDataInputDataString = cappendMessageToFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cappendMessageToFile_inValidDataInputMetaDataString = cappendMessageToFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cappendMessageToFile_inValidInputDataInteger = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cappendMessageToFile_inValidInputDataBoolean = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cappendMessageToFile_inValidInputMetaDataInteger = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cappendMessageToFile_inValidInputMetaDataBoolean = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* lexicalAnalyzer */
export const cparseBusinessRuleArgument_validDataString = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseBusinessRuleArgument_inValidDataInputDataString = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cparseBusinessRuleArgument_inValidDataInputMetaDataString = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cparseBusinessRuleArgument_inValidInputDataInteger = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cparseBusinessRuleArgument_inValidInputDataBoolean = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cparseBusinessRuleArgument_inValidInputMetaDataInteger = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cparseBusinessRuleArgument_inValidInputMetaDataBoolean = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cparseBusinessRuleArgument_validDataArrayString = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cString;
export const cparseBusinessRuleArgument_validDataArrayBoolean = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cBoolean;
export const cparseBusinessRuleArgument_validDataArrayInteger = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cInteger;
export const cparseBusinessRuleArgument_validDataArrayObject = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cObject;
export const cparseBusinessRuleArgument_inValidInputDataUndefined = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cparseBusinessRuleArgument_inValidInputDataNaN = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cparseBusinessRuleArgument_inValidInputMetaDataUndefined = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cparseBusinessRuleArgument_inValidInputMetaDataNaN = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const canalyzeArgument_validDataString = canalyzeArgument + wrd.cvalid + wrd.cData + wrd.cString;
export const canalyzeArgument_inValidDataInputDataString = canalyzeArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const canalyzeArgument_inValidDataInputMetaDataString = canalyzeArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const canalyzeArgument_inValidInputDataInteger = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const canalyzeArgument_inValidInputDataBoolean = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const canalyzeArgument_inValidInputMetaDataInteger = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const canalyzeArgument_inValidInputMetaDataBoolean = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const canalyzeForRegularExpression_validDataString = canalyzeForRegularExpression + wrd.cvalid + wrd.cData + wrd.cString;
export const canalyzeForRegularExpression_inValidDataInputDataString = canalyzeForRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const canalyzeForRegularExpression_inValidDataInputMetaDataString = canalyzeForRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const canalyzeForRegularExpression_inValidInputDataInteger = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const canalyzeForRegularExpression_inValidInputDataBoolean = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const canalyzeForRegularExpression_inValidInputMetaDataInteger = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const canalyzeForRegularExpression_inValidInputMetaDataBoolean = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cparseArgumentAsRegularExpression_validDataString = cparseArgumentAsRegularExpression + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseArgumentAsRegularExpression_inValidDataInputDataString = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cparseArgumentAsRegularExpression_inValidDataInputMetaDataString = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cparseArgumentAsRegularExpression_inValidInputDataInteger = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cparseArgumentAsRegularExpression_inValidInputDataBoolean = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cparseArgumentAsRegularExpression_inValidInputMetaDataInteger = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cparseArgumentAsRegularExpression_inValidInputMetaDataBoolean = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cparseArgumentAsArray_validDataString = cparseArgumentAsArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseArgumentAsArray_inValidDataInputDataString = cparseArgumentAsArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cparseArgumentAsArray_inValidDataInputMetaDataString = cparseArgumentAsArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cparseArgumentAsArray_inValidInputDataInteger = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cparseArgumentAsArray_inValidInputDataBoolean = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cparseArgumentAsArray_inValidInputMetaDataInteger = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cparseArgumentAsArray_inValidInputMetaDataBoolean = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cremoveStringLiteralTagsFromArray_validDataString = cremoveStringLiteralTagsFromArray + wrd.cvalid + wrd.cData + wrd.cString;
export const cremoveStringLiteralTagsFromArray_inValidDataInputDataString = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cremoveStringLiteralTagsFromArray_inValidDataInputMetaDataString = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cremoveStringLiteralTagsFromArray_inValidInputDataInteger = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cremoveStringLiteralTagsFromArray_inValidInputDataBoolean = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cremoveStringLiteralTagsFromArray_inValidInputMetaDataInteger = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cremoveStringLiteralTagsFromArray_inValidInputMetaDataBoolean = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cremoveStringLiteralTagsFromArray_inValidInputDataNaN = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cremoveStringLiteralTagsFromArray_inValidInputDataUndefined = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

/* mathOperations */
export const chex2rgbConversion_validDataString = chex2rgbConversion + wrd.cvalid + wrd.cData + wrd.cString;
export const chex2rgbConversion_inValidDataInputDataString = chex2rgbConversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const chex2rgbConversion_inValidDataInputMetaDataString = chex2rgbConversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const chex2rgbConversion_inValidInputDataInteger = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const chex2rgbConversion_inValidInputDataBoolean = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const chex2rgbConversion_inValidInputMetaDataInteger = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const chex2rgbConversion_inValidInputMetaDataBoolean = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const chex2rgbConversion_inValidInputDataNaN = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const chex2rgbConversion_inValidInputDataUndefined = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const cisOdd_validDataString = cisOdd + wrd.cvalid + wrd.cData + wrd.cString;
export const cisOdd_inValidDataInputDataString = cisOdd + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisOdd_inValidDataInputMetaDataString = cisOdd + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisOdd_inValidInputDataInteger = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisOdd_inValidInputDataBoolean = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisOdd_inValidInputMetaDataInteger = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisOdd_inValidInputMetaDataBoolean = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cisEven_validDataString = cisEven + wrd.cvalid + wrd.cData + wrd.cString;
export const cisEven_inValidDataInputDataString = cisEven + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisEven_inValidDataInputMetaDataString = cisEven + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisEven_inValidInputDataInteger = cisEven + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisEven_inValidInputDataBoolean = cisEven + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisEven_inValidInputMetaDataInteger = cisEven + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisEven_inValidInputMetaDataBoolean = cisEven + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* promptOperations */
export const cprompt_validDataString = cprompt + wrd.cvalid + wrd.cData + wrd.cString;
export const cprompt_inValidDataInputDataString = cprompt + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cprompt_inValidDataInputMetaDataString = cprompt + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cprompt_inValidInputDataInteger = cprompt + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cprompt_inValidInputDataBoolean = cprompt + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cprompt_inValidInputMetaDataInteger = cprompt + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cprompt_inValidInputMetaDataBoolean = cprompt + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

/* ruleParsing */
export const cdoAllRulesExist_validDataString = cdoAllRulesExist + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoAllRulesExist_inValidDataInputDataString = cdoAllRulesExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoAllRulesExist_inValidDataInputMetaDataString = cdoAllRulesExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoAllRulesExist_inValidInputDataInteger = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoAllRulesExist_inValidInputDataBoolean = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoAllRulesExist_inValidInputMetaDataInteger = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoAllRulesExist_inValidInputMetaDataBoolean = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cdoesRuleExist_validDataString = cdoesRuleExist + wrd.cvalid + wrd.cData + wrd.cString;
export const cdoesRuleExist_inValidDataInputDataString = cdoesRuleExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdoesRuleExist_inValidDataInputMetaDataString = cdoesRuleExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdoesRuleExist_inValidInputDataInteger = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdoesRuleExist_inValidInputDataBoolean = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdoesRuleExist_inValidInputMetaDataInteger = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdoesRuleExist_inValidInputMetaDataBoolean = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgetRule_validDataString = cgetRule + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetRule_inValidDataInputDataString = cgetRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetRule_inValidDataInputMetaDataString = cgetRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetRule_inValidInputDataInteger = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetRule_inValidInputDataBoolean = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetRule_inValidInputMetaDataInteger = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetRule_inValidInputMetaDataBoolean = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cprocessRulesInternal_validDataString = cprocessRulesInternal + wrd.cvalid + wrd.cData + wrd.cString;
export const cprocessRulesInternal_inValidDataInputDataString = cprocessRulesInternal + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cprocessRulesInternal_inValidDataInputMetaDataString = cprocessRulesInternal + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cprocessRulesInternal_inValidInputDataInteger = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cprocessRulesInternal_inValidInputDataBoolean = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cprocessRulesInternal_inValidInputMetaDataInteger = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cprocessRulesInternal_inValidInputMetaDataBoolean = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cprocessRulesInternal_inValidInputMetaDataUndefined = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cprocessRulesInternal_inValidInputMetaDataNaN = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* stringGeneration */
export const cgenerateRandomMixedCaseTextByLength_validDataString = cgenerateRandomMixedCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextByLength_inValidDataInputDataString = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextByLength_inValidInputDataInteger = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseTextByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomUpperCaseTextByLength_validDataString = cgenerateRandomUpperCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextByLength_inValidDataInputDataString = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextByLength_inValidInputDataInteger = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseTextByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomLowerCaseTextByLength_validDataString = cgenerateRandomLowerCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextByLength_inValidDataInputDataString = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextByLength_inValidInputDataInteger = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseTextByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomNumericCodeByLength_validDataString = cgenerateRandomNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomNumericCodeByLength_inValidDataInputDataString = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomNumericCodeByLength_inValidInputDataInteger = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateRandomSpecialCharacterCodeByLength_validDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputMetaDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputDataInteger = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputDataBoolean = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputMetaDataInteger = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;

export const cgenerateValidEmail_validDataString = cgenerateValidEmail + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateValidEmail_inValidDataInputDataString = cgenerateValidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateValidEmail_inValidDataInputMetaDataString = cgenerateValidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateValidEmail_inValidInputDataInteger = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateValidEmail_inValidInputDataBoolean = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateValidEmail_inValidInputMetaDataInteger = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateValidEmail_inValidInputMetaDataBoolean = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgenerateValidEmail_inValidInputDataUndefined = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateValidEmail_inValidInputDataNaN = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgenerateValidEmail_inValidInputMetaDataUndefined = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgenerateValidEmail_inValidInputMetaDataNaN = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgenerateInvalidEmail_validDataString = cgenerateInvalidEmail + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateInvalidEmail_inValidDataInputDataString = cgenerateInvalidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateInvalidEmail_inValidDataInputMetaDataString = cgenerateInvalidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateInvalidEmail_inValidInputDataInteger = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateInvalidEmail_inValidInputDataBoolean = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateInvalidEmail_inValidInputMetaDataInteger = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateInvalidEmail_inValidInputMetaDataBoolean = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgenerateInvalidEmail_inValidInputDataUndefined = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateInvalidEmail_inValidInputDataNaN = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgenerateInvalidEmail_inValidInputMetaDataUndefined = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgenerateInvalidEmail_inValidInputMetaDataNaN = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgenerateRandomBrightColor_validDataString = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomBrightColor_validDataInteger = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cgenerateRandomBrightColor_validDataStringInteger = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cgenerateRandomBrightColor_validDataIntegerString = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cgenerateRandomBrightColor_inValidDataInputDataString = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomBrightColor_inValidDataInputMetaDataString = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomBrightColor_inValidInputDataInteger = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomBrightColor_inValidInputDataBoolean = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomBrightColor_inValidInputMetaDataInteger = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomBrightColor_inValidInputMetaDataBoolean = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgenerateRandomBrightColor_inValidInputDataUndefined = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateRandomBrightColor_inValidInputDataNaN = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgenerateRandomBrightColor_inValidInputMetaDataUndefined = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgenerateRandomBrightColor_inValidInputMetaDataNaN = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgenerateRandomDarkColor_validDataString = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomDarkColor_validDataInteger = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cgenerateRandomDarkColor_validDataStringInteger = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cgenerateRandomDarkColor_validDataIntegerString = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cgenerateRandomDarkColor_inValidDataInputDataString = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomDarkColor_inValidDataInputMetaDataString = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomDarkColor_inValidInputDataInteger = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomDarkColor_inValidInputDataBoolean = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomDarkColor_inValidInputMetaDataInteger = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomDarkColor_inValidInputMetaDataBoolean = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgenerateRandomDarkColor_inValidInputDataUndefined = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateRandomDarkColor_inValidInputDataNaN = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgenerateRandomDarkColor_inValidInputMetaDataUndefined = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgenerateRandomDarkColor_inValidInputMetaDataNaN = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cgenerateRandomColor_validDataString = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cString;
export const cgenerateRandomColor_validDataInteger = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cgenerateRandomColor_validDataStringInteger = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cgenerateRandomColor_validDataIntegerString = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cgenerateRandomColor_inValidDataInputDataString = cgenerateRandomColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgenerateRandomColor_inValidDataInputMetaDataString = cgenerateRandomColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgenerateRandomColor_inValidInputDataInteger = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgenerateRandomColor_inValidInputDataBoolean = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgenerateRandomColor_inValidInputMetaDataInteger = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgenerateRandomColor_inValidInputMetaDataBoolean = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgenerateRandomColor_inValidInputDataUndefined = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgenerateRandomColor_inValidInputDataNaN = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgenerateRandomColor_inValidInputMetaDataUndefined = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgenerateRandomColor_inValidInputMetaDataNaN = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* stringParsingUtilities */
export const cparseSystemRootPath_validDataString = cparseSystemRootPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cparseSystemRootPath_validDataInteger = cparseSystemRootPath + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cparseSystemRootPath_validDataStringInteger = cparseSystemRootPath + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cparseSystemRootPath_validDataIntegerString = cparseSystemRootPath + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cparseSystemRootPath_inValidDataInputDataString = cparseSystemRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cparseSystemRootPath_inValidDataInputMetaDataString = cparseSystemRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cparseSystemRootPath_inValidInputDataInteger = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cparseSystemRootPath_inValidInputDataBoolean = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cparseSystemRootPath_inValidInputMetaDataInteger = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cparseSystemRootPath_inValidInputMetaDataBoolean = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cparseSystemRootPath_inValidInputDataUndefined = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cparseSystemRootPath_inValidInputDataNaN = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cparseSystemRootPath_inValidInputMetaDataUndefined = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cparseSystemRootPath_inValidInputMetaDataNaN = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cstringToDataType_validDataString = cstringToDataType + wrd.cvalid + wrd.cData + wrd.cString;
export const cstringToDataType_validDataInteger = cstringToDataType + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cstringToDataType_validDataStringInteger = cstringToDataType + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cstringToDataType_validDataIntegerString = cstringToDataType + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cstringToDataType_inValidDataInputDataString = cstringToDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cstringToDataType_inValidDataInputMetaDataString = cstringToDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cstringToDataType_inValidInputDataInteger = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cstringToDataType_inValidInputDataBoolean = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cstringToDataType_inValidInputMetaDataInteger = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cstringToDataType_inValidInputMetaDataBoolean = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cstringToDataType_inValidInputDataUndefined = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cstringToDataType_inValidInputDataNaN = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cstringToDataType_inValidInputMetaDataUndefined = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cstringToDataType_inValidInputMetaDataNaN = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cstringToBoolean_validDataString = cstringToBoolean + wrd.cvalid + wrd.cData + wrd.cString;
export const cstringToBoolean_validDataInteger = cstringToBoolean + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cstringToBoolean_validDataStringInteger = cstringToBoolean + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cstringToBoolean_validDataIntegerString = cstringToBoolean + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cstringToBoolean_inValidDataInputDataString = cstringToBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cstringToBoolean_inValidDataInputMetaDataString = cstringToBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cstringToBoolean_inValidInputDataInteger = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cstringToBoolean_inValidInputDataBoolean = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cstringToBoolean_inValidInputMetaDataInteger = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cstringToBoolean_inValidInputMetaDataBoolean = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cstringToBoolean_inValidInputDataUndefined = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cstringToBoolean_inValidInputDataNaN = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cstringToBoolean_inValidInputMetaDataUndefined = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cstringToBoolean_inValidInputMetaDataNaN = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cdetermineObjectDataType_validDataString = cdetermineObjectDataType + wrd.cvalid + wrd.cData + wrd.cString;
export const cdetermineObjectDataType_validDataInteger = cdetermineObjectDataType + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cdetermineObjectDataType_validDataStringInteger = cdetermineObjectDataType + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cdetermineObjectDataType_validDataIntegerString = cdetermineObjectDataType + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cdetermineObjectDataType_inValidDataInputDataString = cdetermineObjectDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cdetermineObjectDataType_inValidDataInputMetaDataString = cdetermineObjectDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cdetermineObjectDataType_inValidInputDataInteger = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cdetermineObjectDataType_inValidInputDataBoolean = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cdetermineObjectDataType_inValidInputMetaDataInteger = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cdetermineObjectDataType_inValidInputMetaDataBoolean = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cdetermineObjectDataType_inValidInputDataUndefined = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cdetermineObjectDataType_inValidInputDataNaN = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cdetermineObjectDataType_inValidInputMetaDataUndefined = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cdetermineObjectDataType_inValidInputMetaDataNaN = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisBoolean_validDataString = cisBoolean + wrd.cvalid + wrd.cData + wrd.cString;
export const cisBoolean_validDataInteger = cisBoolean + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cisBoolean_validDataStringInteger = cisBoolean + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cisBoolean_validDataIntegerString = cisBoolean + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cisBoolean_inValidDataInputDataString = cisBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisBoolean_inValidDataInputMetaDataString = cisBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisBoolean_inValidInputDataInteger = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisBoolean_inValidInputDataBoolean = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisBoolean_inValidInputMetaDataInteger = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisBoolean_inValidInputMetaDataBoolean = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisBoolean_inValidInputDataUndefined = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisBoolean_inValidInputDataNaN = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisBoolean_inValidInputMetaDataUndefined = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisBoolean_inValidInputMetaDataNaN = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisInteger_validDataString = cisInteger + wrd.cvalid + wrd.cData + wrd.cString;
export const cisInteger_validDataInteger = cisInteger + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cisInteger_validDataStringInteger = cisInteger + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cisInteger_validDataIntegerString = cisInteger + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cisInteger_inValidDataInputDataString = cisInteger + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisInteger_inValidDataInputMetaDataString = cisInteger + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisInteger_inValidInputDataInteger = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisInteger_inValidInputDataBoolean = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisInteger_inValidInputMetaDataInteger = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisInteger_inValidInputMetaDataBoolean = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisInteger_inValidInputDataUndefined = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisInteger_inValidInputDataNaN = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisInteger_inValidInputMetaDataUndefined = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisInteger_inValidInputMetaDataNaN = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisFloat_validDataString = cisFloat + wrd.cvalid + wrd.cData + wrd.cString;
export const cisFloat_validDataInteger = cisFloat + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cisFloat_validDataStringInteger = cisFloat + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cisFloat_validDataIntegerString = cisFloat + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cisFloat_inValidDataInputDataString = cisFloat + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisFloat_inValidDataInputMetaDataString = cisFloat + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisFloat_inValidInputDataInteger = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisFloat_inValidInputDataBoolean = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisFloat_inValidInputMetaDataInteger = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisFloat_inValidInputMetaDataBoolean = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisFloat_inValidInputDataUndefined = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisFloat_inValidInputDataNaN = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisFloat_inValidInputMetaDataUndefined = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisFloat_inValidInputMetaDataNaN = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cisString_validDataString = cisString + wrd.cvalid + wrd.cData + wrd.cString;
export const cisString_validDataInteger = cisString + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cisString_validDataStringInteger = cisString + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cisString_validDataIntegerString = cisString + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cisString_inValidDataInputDataString = cisString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cisString_inValidDataInputMetaDataString = cisString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cisString_inValidInputDataInteger = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cisString_inValidInputDataBoolean = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cisString_inValidInputMetaDataInteger = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cisString_inValidInputMetaDataBoolean = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cisString_inValidInputDataUndefined = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cisString_inValidInputDataNaN = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cisString_inValidInputMetaDataUndefined = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cisString_inValidInputMetaDataNaN = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const creplaceDoublePercentWithMessage_validDataString = creplaceDoublePercentWithMessage + wrd.cvalid + wrd.cData + wrd.cString;
export const creplaceDoublePercentWithMessage_validDataInteger = creplaceDoublePercentWithMessage + wrd.cvalid + wrd.cData + wrd.cInteger;
export const creplaceDoublePercentWithMessage_validDataStringInteger = creplaceDoublePercentWithMessage + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const creplaceDoublePercentWithMessage_validDataIntegerString = creplaceDoublePercentWithMessage + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const creplaceDoublePercentWithMessage_inValidDataInputDataString = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creplaceDoublePercentWithMessage_inValidDataInputMetaDataString = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creplaceDoublePercentWithMessage_inValidInputDataInteger = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creplaceDoublePercentWithMessage_inValidInputDataBoolean = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creplaceDoublePercentWithMessage_inValidInputMetaDataInteger = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creplaceDoublePercentWithMessage_inValidInputMetaDataBoolean = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const creplaceDoublePercentWithMessage_inValidInputDataUndefined = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const creplaceDoublePercentWithMessage_inValidInputDataNaN = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const creplaceDoublePercentWithMessage_inValidInputMetaDataUndefined = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const creplaceDoublePercentWithMessage_inValidInputMetaDataNaN = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cutilitiesReplaceCharacterWithCharacter_validDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cString;
export const cutilitiesReplaceCharacterWithCharacter_validDataInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cutilitiesReplaceCharacterWithCharacter_validDataStringInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cutilitiesReplaceCharacterWithCharacter_validDataIntegerString = cutilitiesReplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cutilitiesReplaceCharacterWithCharacter_inValidDataInputDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cutilitiesReplaceCharacterWithCharacter_inValidDataInputMetaDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataBoolean = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataUndefined = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataNaN = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataUndefined = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* timeComputation  */
export const cgetNowMoment_validDataString = cgetNowMoment + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetNowMoment_validDataInteger = cgetNowMoment + wrd.cvalid + wrd.cData + wrd.cInteger;
export const cgetNowMoment_validDataStringInteger = cgetNowMoment + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const cgetNowMoment_validDataIntegerString = cgetNowMoment + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const cgetNowMoment_inValidDataInputDataString = cgetNowMoment + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cgetNowMoment_inValidDataInputMetaDataString = cgetNowMoment + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cgetNowMoment_inValidInputDataInteger = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cgetNowMoment_inValidInputDataBoolean = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cgetNowMoment_inValidInputMetaDataInteger = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cgetNowMoment_inValidInputMetaDataBoolean = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cgetNowMoment_inValidInputDataUndefined = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cgetNowMoment_inValidInputDataNaN = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cgetNowMoment_inValidInputMetaDataUndefined = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cgetNowMoment_inValidInputMetaDataNaN = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const ccomputeDeltaTime_validDataString = ccomputeDeltaTime + wrd.cvalid + wrd.cData + wrd.cString;
export const ccomputeDeltaTime_validDataInteger = ccomputeDeltaTime + wrd.cvalid + wrd.cData + wrd.cInteger;
export const ccomputeDeltaTime_validDataStringInteger = ccomputeDeltaTime + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const ccomputeDeltaTime_validDataIntegerString = ccomputeDeltaTime + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const ccomputeDeltaTime_inValidDataInputDataString = ccomputeDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccomputeDeltaTime_inValidDataInputMetaDataString = ccomputeDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const ccomputeDeltaTime_inValidInputDataInteger = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccomputeDeltaTime_inValidInputDataBoolean = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccomputeDeltaTime_inValidInputMetaDataInteger = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const ccomputeDeltaTime_inValidInputMetaDataBoolean = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const ccomputeDeltaTime_inValidInputDataUndefined = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const ccomputeDeltaTime_inValidInputDataNaN = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const ccomputeDeltaTime_inValidInputMetaDataUndefined = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const ccomputeDeltaTime_inValidInputMetaDataNaN = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const creformatDeltaTime_validDataString = creformatDeltaTime + wrd.cvalid + wrd.cData + wrd.cString;
export const creformatDeltaTime_validDataInteger = creformatDeltaTime + wrd.cvalid + wrd.cData + wrd.cInteger;
export const creformatDeltaTime_validDataStringInteger = creformatDeltaTime + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const creformatDeltaTime_validDataIntegerString = creformatDeltaTime + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const creformatDeltaTime_inValidDataInputDataString = creformatDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const creformatDeltaTime_inValidDataInputMetaDataString = creformatDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const creformatDeltaTime_inValidInputDataInteger = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const creformatDeltaTime_inValidInputDataBoolean = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const creformatDeltaTime_inValidInputMetaDataInteger = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const creformatDeltaTime_inValidInputMetaDataBoolean = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const creformatDeltaTime_inValidInputDataUndefined = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const creformatDeltaTime_inValidInputDataNaN = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const creformatDeltaTime_inValidInputMetaDataUndefined = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const creformatDeltaTime_inValidInputMetaDataNaN = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const csleep_validDataString = csleep + wrd.cvalid + wrd.cData + wrd.cString;
export const csleep_validDataInteger = csleep + wrd.cvalid + wrd.cData + wrd.cInteger;
export const csleep_validDataStringInteger = csleep + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger;
export const csleep_validDataIntegerString = csleep + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString;
export const csleep_inValidDataInputDataString = csleep + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const csleep_inValidDataInputMetaDataString = csleep + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const csleep_inValidInputDataInteger = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const csleep_inValidInputDataBoolean = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const csleep_inValidInputMetaDataInteger = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const csleep_inValidInputMetaDataBoolean = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const csleep_inValidInputDataUndefined = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const csleep_inValidInputDataNaN = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const csleep_inValidInputMetaDataUndefined = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const csleep_inValidInputMetaDataNaN = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* advanced */
export const ccommandSequencer_validDataString = ccommandSequencer + wrd.cvalid + wrd.cData + wrd.cString;
export const ccommandSequencer_inValidDataInputDataString = ccommandSequencer + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccommandSequencer_inValidInputDataInteger = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccommandSequencer_inValidInputDataBoolean = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccommandSequencer_inValidInputDataNaN = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const ccommandSequencer_inValidInputDataUndefined = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const cworkflow_validDataString = cworkflow + wrd.cvalid + wrd.cData + wrd.cString;
export const cworkflow_inValidDataInputDataString = cworkflow + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cworkflow_inValidInputDataInteger = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cworkflow_inValidInputDataBoolean = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cworkflow_inValidInputDataNaN = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cworkflow_inValidInputDataUndefined = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const cbusinessRule_validDataString = cbusinessRule + wrd.cvalid + wrd.cData + wrd.cString;
export const cbusinessRule_inValidDataInputDataString = cbusinessRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cbusinessRule_inValidInputDataInteger = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cbusinessRule_inValidInputDataBoolean = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cbusinessRule_inValidInputDataNaN = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cbusinessRule_inValidInputDataUndefined = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const ccommandGenerator_validDataString = ccommandGenerator + wrd.cvalid + wrd.cData + wrd.cString;
export const ccommandGenerator_inValidDataInputDataString = ccommandGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccommandGenerator_inValidInputDataInteger = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccommandGenerator_inValidInputDataBoolean = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccommandGenerator_inValidInputDataNaN = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const ccommandGenerator_inValidInputDataUndefined = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const ccommandAliasGenerator_validDataString = ccommandAliasGenerator + wrd.cvalid + wrd.cData + wrd.cString;
export const ccommandAliasGenerator_inValidDataInputDataString = ccommandAliasGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const ccommandAliasGenerator_inValidInputDataInteger = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const ccommandAliasGenerator_inValidInputDataBoolean = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const ccommandAliasGenerator_inValidInputDataNaN = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const ccommandAliasGenerator_inValidInputDataUndefined = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

/* auxiliary */
export const cconvertColors_validDataString = cconvertColors + wrd.cvalid + wrd.cData + wrd.cString;

/* configuration */
export const cchangeConfigurationSetting_validDataString = cchangeConfigurationSetting + wrd.cvalid + wrd.cData + wrd.cString;
export const cchangeConfigurationSetting_inValidDataInputDataString = cchangeConfigurationSetting + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cchangeConfigurationSetting_inValidInputDataInteger = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cchangeConfigurationSetting_inValidInputDataBoolean = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cchangeConfigurationSetting_inValidInputDataNaN = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cchangeConfigurationSetting_inValidInputDataUndefined = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const cchangeDebugConfigurationTheme_validDataString = cchangeDebugConfigurationTheme + wrd.cvalid + wrd.cData + wrd.cString;
export const cchangeDebugConfigurationTheme_inValidDataInputDataString = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cchangeDebugConfigurationTheme_inValidInputDataInteger = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cchangeDebugConfigurationTheme_inValidInputDataBoolean = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cchangeDebugConfigurationTheme_inValidInputDataNaN = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cchangeDebugConfigurationTheme_inValidInputDataUndefined = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;

export const csaveConfiguration_validDataString = csaveConfiguration + wrd.cvalid + wrd.cData + wrd.cString;

export const clistConfigurationThemes_validDataString = clistConfigurationThemes + wrd.cvalid + wrd.cData + wrd.cString;