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

const {bas, num, wrd, gen, biz, phn} = hayConst;


export const cUndefined = bas.cUn + bas.cde + bas.cf + bas.ci + bas.cn + bas.ce + bas.cd;
export const cNaN = bas.cNa + bas.cN;

// Describe names

/* commandBroker */
export const cbootStrapCommands = wrd.cboot + wrd.cStrap + wrd.cCommands; // bootStrapCommands
export const caddClientCommands = wrd.cAdd + wrd.cClient + wrd.cCommands; // addClientCommands
export const cgetValidCommand = wrd.cget + wrd.cValid + wrd.cCommand; // cgetValidCommand
export const ccountMatchingCommandAlias = wrd.ccount + wrd.cMatching + wrd.cCommand + wrd.cAlias; // countMatchingCommandAlias
export const csearchCommandAlias = wrd.csearch + wrd.cCommand + wrd.cAlias; // searchCommandAlias
export const cgetAllCommandAliasData = wrd.cget + wrd.cAll + wrd.cCommand + wrd.cAlias + wrd.cData; // getAllCommandAliasData
export const cgetCommandNamespaceDataObject = wrd.cget + wrd.cCommand + wrd.cNamespace + wrd.cData + wrd.cObject; // getCommandNamespaceDataObject
export const cgetCommandArgs = wrd.cget + wrd.cCommand + wrd.cArguments; // getCommandArgs
export const cexecuteCommand = wrd.cexecute + wrd.cCommand; // executeCommand

/* dataBroker */
export const cscanDataPath = wrd.cscan + wrd.cData + wrd.cPath; // scanDataPath
export const cfindUniversalDebugConfigSetting = wrd.cfind + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting; // findUniversalDebugConfigSetting
export const cfindIndividualDebugConfigSetting = wrd.cfind + wrd.cIndividual + wrd.cDebug + wrd.cConfig + wrd.cSetting; // findIndividualDebugConfigSetting
export const cloadAllCsvData = wrd.cload + wrd.cAll + gen.cCsv + wrd.cData; // loadAllCsvData
export const cloadAllXmlData = wrd.cload + wrd.cAll + gen.cXml + wrd.cData; // loadAllXmlData
export const cloadAllJsonData = wrd.cload + wrd.cAll + gen.cJson + wrd.cData; // loadAllJsonData
export const cprocessCsvData = wrd.cprocess + gen.cCsv + wrd.cData; // processCsvData
export const cpreprocessJsonFile = wrd.cpreprocess + gen.cJson + wrd.cFile; // preprocessJsonFile
export const cwriteJsonDataToFile = wrd.cwrite + gen.cJson + wrd.cData + wrd.cTo + wrd.cFile; // writeJsonDataToFile
export const csetupDataStorage = wrd.csetup + wrd.cData + wrd.cStorage; // setupDataStorage
export const cstoreData = wrd.cstore + wrd.cData; // storeData
export const cgetData = wrd.cget + wrd.cData; // getData
export const cclearData = wrd.cclear + wrd.cData; // clearData
export const cinitializeConstantsValidationData = wrd.cinitialize + wrd.cConstants + wrd.cValidation + wrd.cData; // initializeConstantsValidationData
export const caddConstantsValidationData = wrd.cAdd + wrd.cConstants + wrd.cValidation + wrd.cData; // addConstantsValidationData
export const caddDeeplyNestedConstantsValidationData = wrd.cAdd + wrd.cDeeply + wrd.cNested + wrd.cConstants + wrd.cValidation + wrd.cData; // addDeeplyNestedConstantsValidationData

/* ruleBroker */
export const cbootStrapBusinessRules = wrd.cboot + wrd.cStrap + wrd.cBusiness + wrd.cRules; // bootStrapBusinessRules
export const caddClientRules = wrd.cAdd + wrd.cClient + wrd.cRules; // addClientRules
export const cprocessRules = wrd.cprocess + wrd.cRules; // processRules

/* themeBroker */
export const cgetNamedThemes = wrd.cget + wrd.cNamed + wrd.cThemes; // getNamedThemes
export const cgetNamedThemePath = wrd.cget + wrd.cNamed + wrd.cTheme + wrd.cPath; // getNamedThemePath
export const cloadTheme = wrd.cload + wrd.cTheme; // loadTheme
export const capplyTheme = wrd.capply + wrd.cTheme; // applyTheme

/* workflowBroker */
export const cgetWorkflow = wrd.cget + wrd.cWorkflow; // getWorkflow
export const cdoesWorkflowExist = wrd.cdoes + wrd.cWorkflow + wrd.cExist; // doesWorkflowExist
export const cdoesWorkflowExistInWorkflowData = wrd.cdoes + wrd.cWorkflow + wrd.cExist + wrd.cIn + wrd.cWorkflow + wrd.cData; // doesWorkflowExistInWorkflowData
export const csearchWorkflow = wrd.csearch + wrd.cWorkflow; // searchWorkflow
export const cgetAllWorkflows = wrd.cget + wrd.cAll + wrd.cWorkflows; // getAllWorkflows
export const cgetWorkflowNamespaceDataObject = wrd.cget + wrd.cWorkflow + wrd.cNamespace + wrd.cData + wrd.cObject; // getWorkflowNamespaceDataObject

/* auxiliaryArrayParsing */
export const cparseColorRangeInputs = wrd.cparse + wrd.cColor + wrd.cRange + wrd.cInputs; // parseColorRangeInputs
export const cdoesArrayContainValue = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cValue; // doesArrayContainValue

/* characterArrayParsing */
export const creplaceCharacterWithCharacter = wrd.creplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // replaceCharacterWithCharacter
export const cdoesArrayContainCharacter = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = wrd.cremove + wrd.cCharacter + wrd.cFrom + wrd.cArray; // removeCharacterFromArray
export const creplaceCharacterAtIndex = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex; // replaceCharacterAtIndex

/* commandArraParsing */
export const csolveLehmerCode = wrd.csolve + wrd.cLehmer + wrd.cCode; // solveLehmerCode
export const crecursiveArrayExpansion = wrd.crecursive + wrd.cArray + wrd.cExpansion; // recursiveArrayExpansion
export const cgetLehmerCodeValue = wrd.cget + wrd.cLehmer + wrd.cCode + wrd.cValue; // getLehmerCodeValue
export const cgenerateCommandAliases = wrd.cgenerate + wrd.cCommand + wrd.cAliases; // generateCommandAliases
export const caggregateCommandArguments = wrd.caggregate + wrd.cCommand + wrd.cArguments; // aggregateCommandArguments

/* constantArrayParsing */
export const cgetLengthOfLongestStringInArray = wrd.cget + wrd.cLength + wrd.cOf + wrd.cLongest + wrd.cString + wrd.cIn + wrd.cArray; // getLengthOfLongestStringInArray
export const csearchForPatternsInStringArray = wrd.csearch + wrd.cFor + wrd.cPatterns + wrd.cIn + wrd.cString + wrd.cArray; // searchForPatternsInStringArray
export const cvalidatePatternsThatNeedImplementation = wrd.cvalidate + wrd.cPatterns + wrd.cThat + wrd.cNeed + wrd.cImplementation; // validatePatternsThatNeedImplementation

/* dataArrayParsing */
export const carraysAreEqual = wrd.carray + wrd.cAre + wrd.cEqual; // arraysAreEqual
export const cgetStoredData = wrd.cget + wrd.cStored + wrd.cData; // getStoredData
export const cisObjectEmpty = wrd.cis + wrd.cObject + wrd.cEmpty; // isObjectEmpty
export const cisArrayEmpty = wrd.cis + wrd.cArray + wrd.cEmpty; // isArrayEmpty
export const cisObject = wrd.cis + wrd.cObject; // isObject
export const cisArray = wrd.cis + wrd.cArray; // isArray
export const cisArrayOrObject = wrd.cis + wrd.cArray + wrd.cOr + wrd.cObject; // isArrayOrObject
export const cisNonZeroLengthArray = wrd.cis + wrd.cNo + bas.cn + num.cZero + wrd.cLength + wrd.cArray; // isNonZeroLengthArray
export const carrayDeepClone = wrd.carray + wrd.cDeep + wrd.cClone; // arrayDeepClone
export const cobjectDeepMerge = wrd.cobject + wrd.cDeep + wrd.cMerge; // objectDeepMerge
export const cgetNamespacedDataObject = wrd.cget + wrd.cNamespaced + wrd.cData + wrd.cObject; // getNamespacedDataObject
export const csetNamespacedDataObject = wrd.cset + wrd.cNamespaced + wrd.cData + wrd.cObject; // setNamespacedDataObject

/* pathArrayParsing */
export const cdoesArrayContainFilename = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cFilename; // doesArrayContainFilename
export const cgetFileAndPathListForPath = wrd.cget + wrd.cFile + wrd.cAnd + wrd.cPath + wrd.cList + wrd.cFor + wrd.cPath; // getFileAndPathListForPath

/* wordArrayParsing */
export const cconvertCamelCaseStringToArray = wrd.cconvert + wrd.cCamel + wrd.cCase + wrd.cString + wrd.cTo + wrd.cArray; // convertCamelCaseStringToArray
export const cgetWordsArrayFromString = wrd.cget + wrd.cWords + wrd.cArray + wrd.cFrom + wrd.cString; // getWordsArrayFromString
export const crecombineStringArrayWithSpaces = wrd.crecombine + wrd.cString + wrd.cArray + wrd.cWith + wrd.cSpaces; // recombineStringArrayWithSpaces
export const cconvertArrayToCamelCaseString = wrd.cconvert + wrd.cArray + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cString; // convertArrayToCamelCaseString
export const cdoesArrayContainLowerCaseConsolidatedString = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cConsolidated + wrd.cString; // doesArrayContainLowerCaseConsolidatedString
export const cascertainMatchingElements = wrd.cascertain + wrd.cMatching + wrd.cElements; // ascertainMatchingElements

/* characterStringParsing */
export const csingleQuoteSwapAfterEquals = wrd.csingle + wrd.cQuote + wrd.cSwap + wrd.cAfter + wrd.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = wrd.cswap + wrd.cForward + wrd.cSlash + wrd.cTo + wrd.cBack + wrd.cSlash; // swapForwardSlashToBackSlash
export const cswapBackSlashToForwardSlash = wrd.cswap + wrd.cBack + wrd.cSlash + wrd.cTo + wrd.cForward + wrd.cSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = wrd.cswap + wrd.cDouble + wrd.cForward + wrd.cSlash + wrd.cTo + wrd.cSingle + wrd.cForward + wrd.cSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = wrd.cswap + wrd.cDouble + wrd.cBack + wrd.cSlash + wrd.cTo + wrd.cSingle + wrd.cBack + wrd.cSlash; // swapDoubleBackSlashToSingleBackSlash
export const creplaceSpacesWithPlus = wrd.creplace + wrd.cSpaces + wrd.cWith + wrd.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = wrd.creplace + wrd.cColon + wrd.cWith + wrd.cUnderscore; // replaceColonWithUnderscore
export const ccleanCarriageReturnFromString = wrd.cclean + wrd.cCarriage + wrd.cReturn + wrd.cFrom + wrd.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cLower + wrd.cCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = wrd.cconvert + wrd.cString + wrd.cTo + wrd.cUpper + wrd.cCase; // convertStringToUpperCase
export const cdoesStringContainUpperCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cUpper + wrd.cCase + wrd.cCharacter; // doesStringContainUpperCaseCharacter
export const cdoesStringContainLowerCaseCharacter = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cLower + wrd.cCase + wrd.cCharacter; // doesStringContainLowerCaseCharacter
export const cisFirstCharacterLowerCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cLower + wrd.cCase; // isFirstCharacterLowerCase
export const cisFirstCharacterUpperCase = wrd.cis + num.cFirst + wrd.cCharacter + wrd.cUpper + wrd.cCase; // isFirstCharacterUpperCase
export const creplaceCharacterAtIndexOfString = wrd.creplace + wrd.cCharacter + wrd.cAt + wrd.cIndex + wrd.cOf + wrd.cString; // replaceCharacterAtIndexOfString

/* commandStringParsing */
export const ccleanCommandInput = wrd.cclean + wrd.cCommand + wrd.cInput; // cleanCommandInput
export const cisValidCommandNameString = wrd.cis + wrd.cValid + wrd.cCommand + wrd.cName + wrd.cString; // isValidCommandNameString

/* constantStringParsing */
export const cvalidateConstantsDataValidation = wrd.cvalidate + wrd.cConstant + wrd.cData + wrd.cValidation; // validateConstantsDataValidation
export const cdetermineConstantsContextQualifiedPrefix = wrd.cdetermine + wrd.cConstants + wrd.cContext + wrd.cQualified + wrd.cPrefix; // determineConstantsContextQualifiedPrefix
export const cdetermineSuggestedConstantsValidationLineOfCode = wrd.cdetermine + wrd.cSuggested + wrd.cConstants + wrd.cValidation + wrd.cLine + wrd.cOf + wrd.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValidation + wrd.cLine + wrd.cItem + wrd.cName; // validateConstantsDataValidationLineItemName
export const cdoesConstantExist = wrd.cdoes + wrd.cConstant + wrd.cExist; // doesConstantExist
export const cgetConstantType = wrd.cget + wrd.cConstant + wrd.cType; // getConstantType
export const cgetConstantActualValue = wrd.cget + wrd.cConstant + wrd.cActual + wrd.cValue; // getConstantActualValue
export const cgetConstantName = wrd.cget + wrd.cConstant + wrd.cName; // getConstantName
export const cfindConstantName = wrd.cfind + wrd.cConstant + wrd.cName; // findConstantName
export const cisConstantTypeValid = wrd.cis + wrd.cConstant + wrd.cType + wrd.cValid; // isConstantTypeValid
export const cconvertConstantTypeToConstantPrefix = wrd.cconvert + wrd.cConstant + wrd.cType + wrd.cTo + wrd.cConstant + wrd.cPrefix; // convertConstantTypeToConstantPrefix
export const cconstantsOptimizedFulfillmentSystem = wrd.cconstants + wrd.cOptimized + wrd.cFulfillment + wrd.cSystem; // constantsOptimizedFulfillmentSystem
export const cconstantsFulfillmentSystem = wrd.cconstants + wrd.cFulfillment + wrd.cSystem; // constantsFulfillmentSystem
export const cvalidateConstantsDataValues = wrd.cvalidate + wrd.cConstants + wrd.cData + wrd.cValue; // validateConstantsDataValues
export const cisConstantValid = wrd.cis + wrd.cConstant + wrd.cValue; // isConstantValid

/* dataStringParsing */
export const cgetAttributeName = wrd.cget + wrd.cAttribute + wrd.cName; // getAttributeName
export const cgetAttributeValue = wrd.cget + wrd.cAttribute + wrd.cValue; // getAttributeValue
export const cgetValueFromAssignmentOperationString = wrd.cget + wrd.cValue + wrd.cFrom + wrd.cAssignment + wrd.cOperation + wrd.cString; // getValueFromAssignmentOperationString
export const cgetDataCategoryFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCategoryFromDataContextName
export const cgetDataCategoryDetailNameFromDataContextName = wrd.cget + wrd.cData + wrd.cCategory + wrd.cDetail + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getDataCategoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = wrd.cget + wrd.cKeyword + wrd.cName + wrd.cFrom + wrd.cData + wrd.cContext + wrd.cName; // getKeywordNameFromDataContextName
export const cloadDataFile = wrd.cload + wrd.cData + wrd.cFile; // loadDataFile
export const csaveDataFile = wrd.csave + wrd.cData + wrd.cFile; // saveDataFile
export const cgetUserNameFromEmail = wrd.cget + wrd.cUser + wrd.cName + wrd.cFrom + wrd.cEmail; // getUserNameFromEmail

/* fileStringParsing */
export const cgetFileNameFromPath = wrd.cget + wrd.cFile + wrd.cName + wrd.cFrom + wrd.cPath; // getFileNameFromPath
export const cgetFileExtension = wrd.cget + wrd.cFile + wrd.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = wrd.cremove + wrd.cDot + wrd.cFrom + wrd.cFile + wrd.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = wrd.cremove + wrd.cFile + wrd.cExtension + wrd.cFrom + wrd.cFile + wrd.cName; // removeFileExtensionFromFileName
export const cascertainMatchingFilenames = wrd.cascertain + wrd.cMatching + wrd.cFileNames; // ascertainMatchingFilenames
export const csupportedFileFormatsAre = wrd.csupported + wrd.cFile + wrd.cFormat + wrd.cAre; // supportedFileFormatsAre
export const cremoveXnumberOfFoldersFromEndOfPath = wrd.cremove + bas.cX + wrd.cnumber + wrd.cOf + wrd.cFolders + wrd.cFrom + wrd.cEnd + wrd.cOf + wrd.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = wrd.cget + num.cFirst + wrd.cTop + wrd.cLevel + wrd.cFolder + wrd.cFrom + wrd.cPath; // getFirstTopLevelFolderFromPath

/* wordStringParsing */
export const cisStringCamelCase = wrd.cis + wrd.cString + wrd.cCamel + wrd.cCase; // isStringCamelCase
export const cmapWordToCamelCaseWord = wrd.cmap + wrd.cWord + wrd.cTo + wrd.cCamel + wrd.cCase + wrd.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = wrd.csimplify + wrd.cAnd + wrd.cConsolidate + wrd.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = wrd.ccompare + wrd.cSimplified + wrd.cAnd + wrd.cConsolidated + wrd.cStrings; // compareSimplifiedAndConsolidatedStrings
export const ccountCamelCaseWords = wrd.ccount + wrd.cCamel + wrd.cCase + wrd.cWords; // countCamelCaseWords
export const cdoesStringContainAcronym = wrd.cdoes + wrd.cString + wrd.cContain + wrd.cAcronym; // doesStringContainAcronym
export const cdetermineWordDelimiter = wrd.cdetermine + wrd.cWord + wrd.cDelimiter; // determineWordDelimiter
export const ccountDelimiterInString = wrd.ccount + wrd.cDelimiter + wrd.cIn + wrd.cString; // countDelimiterInString
export const cgetWordCountInString = wrd.cget + wrd.cWord + wrd.cCount + wrd.cIn + wrd.cString; // getWordCountInString
export const cisStringList = wrd.cis + wrd.cString + wrd.cList; // isStringList
export const caggregateNumericalDifferenceBetweenTwoStrings = wrd.caggregate + wrd.cNumerical + wrd.cDifference + wrd.cBetween + num.cTwo + wrd.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings

/* characterGeneration */
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateMixedCaseLetterOrSpecialCharacter
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateUpperCaseLetterOrSpecialCharacter
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateLowerCaseLetterOrSpecialCharacter
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cMixed + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cUpper + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cEither + wrd.cLower + wrd.cCase + wrd.cLetter + wrd.cOr + wrd.cNumber + wrd.cOr + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
export const crandomlyGenerateMixedCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateMixedCaseAlphaNumericCharacter
export const crandomlyGenerateUpperCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateUpperCaseAlphaNumericCharacter
export const crandomlyGenerateLowerCaseAlphaNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateLowerCaseAlphaNumericCharacter
export const crandomlyGenerateNumericCharacter = wrd.crandomly + wrd.cGenerate + wrd.cNumeric + wrd.cCharacter; // randomlyGenerateNumericCharacter
export const crandomlyGenerateSpecialCharacter = wrd.crandomly + wrd.cGenerate + wrd.cSpecial + wrd.cCharacter; // randomlyGenerateSpecialCharacter
export const crandomlyGenerateNumberInRange = wrd.crandomly + wrd.cGenerate + wrd.cNumber + wrd.cIn + wrd.cRange; // randomlyGenerateNumberInRange
export const crandomlyGenerateBooleanValue = wrd.crandomly + wrd.cGenerate + wrd.cBoolean + wrd.cValue; // randomlyGenerateBooleanValue
export const crandomlyGenerateMixedCaseAlphabeticCharacter = wrd.crandomly + wrd.cGenerate + wrd.cMixed + wrd.cCase + wrd.cAlphabetic + wrd.cCharacter; // randomlyGenerateMixedCaseAlphabeticCharacter
export const crandomlyGenerateLowerCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cLower + wrd.cCase + wrd.cLetter; // randomlyGenerateLowerCaseLetter
export const crandomlyGenerateUpperCaseLetter = wrd.crandomly + wrd.cGenerate + wrd.cUpper + wrd.cCase + wrd.cLetter; // randomlyGenerateUpperCaseLetter
export const cconvertNumberToUpperCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cUpper + wrd.cCase + wrd.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = wrd.cconvert + wrd.cNumber + wrd.cTo + wrd.cLower + wrd.cCase + wrd.cLetter; // convertNumberToLowerCaseLetter

/* fileOperations */
export const cgetXmlData = wrd.cget + gen.cXml + wrd.cData; // getXmlData
export const cgetCsvData = wrd.cget + gen.cCsv + wrd.cData; // getCsvData
export const cgetJsonData = wrd.cget + gen.cJson + wrd.cData; // getJsonData
export const cwriteJsonData = wrd.cwrite + gen.cJson + wrd.cData; // writeJsonData
export const creadDirectoryContents = wrd.cread + wrd.cDirectory + wrd.cContents; // readDirectoryContents
export const cscanDirectoryContents = wrd.cscan + wrd.cDirectory + wrd.cContents; // scanDirectoryContents
export const cgetDirectoryList = wrd.cget + wrd.cDirectory + wrd.cList; // getDirectoryList
export const creadDirectorySynchronously = wrd.cread + wrd.cDirectory + wrd.cSynchronously; // readDirectorySynchronously
export const ccopyAllFilesAndFoldersFromFolderToFolder = wrd.ccopy + wrd.cAll + wrd.cFiles + wrd.cAnd + wrd.cFolders + wrd.cFrom + wrd.cFolder + wrd.cTo + wrd.cFolder; // copyAllFilesAndFoldersFromFolderToFolder
export const cbuildReleasePackage = wrd.cbuild + wrd.cRelease + wrd.cPackage; // buildReleasePackage
export const ccreateZipArchive = wrd.ccreate + gen.cZip + wrd.cArchive; // createZipArchive
export const ccleanRootPath = wrd.cclean + wrd.cRoot + wrd.cPath; // cleanRootPath
export const ccopyFileSync = wrd.ccopy + wrd.cFile + wrd.cSync; // copyFileSync
export const ccopyFolderRecursiveSync = wrd.ccopy + wrd.cFolder + wrd.cRecursive + wrd.cSync; // copyFolderRecursiveSync
export const cappendMessageToFile = wrd.cappend + wrd.cMessage + wrd.cTo + wrd.cFile; // appendMessageToFile

/* lexycalAnalyzer */
export const cparseBusinessRuleArgument = wrd.cparse + wrd.cBusiness + wrd.cRule + wrd.cArgument; // parseBusinessRuleArgument
export const canalyzeArgument = wrd.canalyze + wrd.cArgument; // analyzeArgument
export const canalyzeForRegularExpression = wrd.canalyze + wrd.cFor + wrd.cRegular + wrd.cExpression; // analyzeForRegularExpression
export const cparseArgumentAsRegularExpression = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cRegular + wrd.cExpression; // parseArgumentAsRegularExpression
export const cparseArgumentAsArray = wrd.cparse + wrd.cArgument + wrd.cAs + wrd.cArray; // parseArgumentAsArray
export const cremoveStringLiteralTagsFromArray = wrd.cremove + wrd.cString + wrd.cLiteral + wrd.cTags + wrd.cFrom + wrd.cArray; // removeStringLiteralTagsFromArray

/* mathOperations */
export const chex2rgbConversion = biz.chex2rgbConversion; // hex2rgbConversion
export const cisOdd = wrd.cis + wrd.cOdd; // isOdd
export const cisEven = wrd.cis + wrd.cEven; // isEven

/* promptOperations */
export const cprompt = wrd.cprompt; // prompt

/* ruleParsing */
export const cdoAllRulesExist = wrd.cdo + wrd.cAll + wrd.cRules + wrd.cExist; // doAllRulesExist
export const cdoesRuleExist = wrd.cdoes + wrd.cRule + wrd.cExist; // doesRuleExist
export const cgetRule = wrd.cget + wrd.cRule; // getRule
export const cprocessRulesInternal = wrd.cprocess + wrd.cRules + wrd.cInternal; // processRulesInternal

/* stringGeneration */
export const cgenerateRandomMixedCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomMixedCaseTextByLength
export const cgenerateRandomUpperCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomUpperCaseTextByLength
export const cgenerateRandomLowerCaseTextByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cBy + wrd.cLength; // generateRandomLowerCaseTextByLength
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomMixedCaseTextWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomUpperCaseTextWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cText + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomLowerCaseTextWithSpecialCharactersByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomMixedCaseAlphaNumericCodeByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomUpperCaseAlphaNumericCodeByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomLowerCaseAlphaNumericCodeByLength
export const cgenerateRandomNumericCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cNumeric + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomNumericCodeByLength
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cMixed + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cUpper + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength = wrd.cgenerate + wrd.cRandom + wrd.cLower + wrd.cCase + wrd.cAlpha + wrd.cNumeric + wrd.cCode + wrd.cWith + wrd.cSpecial + wrd.cCharacters + wrd.cBy + wrd.cLength; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength
export const cgenerateRandomSpecialCharacterCodeByLength = wrd.cgenerate + wrd.cRandom + wrd.cSpecial + wrd.cCharacter + wrd.cCode + wrd.cBy + wrd.cLength; // generateRandomSpecialCharacterCodeByLength
export const cgenerateValidEmail = wrd.cgenerate + wrd.cValid + wrd.cEmail; // generateValidEmail
export const cgenerateInvalidEmail = wrd.cgenerate + wrd.cInvalid + wrd.cEmail; // generateInvalidEmail
export const cgenerateRandomBrightColor = wrd.cgenerate + wrd.cRandom + wrd.cBright + wrd.cColor; // generateRandomBrightColor
export const cgenerateRandomDarkColor = wrd.cgenerate + wrd.cRandom + wrd.cDark + wrd.cColor; // generateRandomDarkColor
export const cgenerateRandomColor = wrd.cgenerate + wrd.cRandom + wrd.cColor; // generateRandomColor

/* stringParsingUtilities */
export const cparseSystemRootPath = wrd.cparse + wrd.cSystem + wrd.cRoot + wrd.cPath; // parseSystemRootPath
export const cstringToDataType = wrd.cstring + wrd.cTo + wrd.cData + wrd.cType; // stringToDataType
export const cstringToBoolean = wrd.cstring + wrd.cTo + wrd.cBoolean; // stringToBoolean
export const cdetermineObjectDataType = wrd.cdetermine + wrd.cObject + wrd.cData + wrd.cType; // determineObjectDataType
export const cisBoolean = wrd.cis + wrd.cBoolean; // isBoolean
export const cisInteger = wrd.cis + wrd.cInteger; // isInteger
export const cisFloat = wrd.cis + wrd.cFloat; // isFloat
export const cisString = wrd.cis + wrd.cString; // isString
export const creplaceDoublePercentWithMessage = wrd.creplace + wrd.cDouble + wrd.cPercent + wrd.cWith + wrd.cMessage; // replaceDoublePercentWithMessage
export const cutilitiesReplaceCharacterWithCharacter = wrd.cUtilities + wrd.cReplace + wrd.cCharacter + wrd.cWith + wrd.cCharacter; // utilitiesReplaceCharacterWithCharacter

/* timeComputation */
export const cgetNowMoment = wrd.cget + wrd.cNow + wrd.cMoment; // getNowMoment
export const ccomputeDeltaTime = wrd.ccompute + wrd.cDelta + wrd.cTime; // computeDeltaTime
export const creformatDeltaTime = wrd.creformat + wrd.cDelta + wrd.cTime; // reformatDeltaTime
export const csleep = wrd.csleep; // sleep

/* advanced */
export const ccommandSequencer = wrd.ccommand + wrd.cSequencer; // commandSequencer
export const cworkflow = wrd.cworkflow; // workflow
export const cbusinessRule = wrd.cbusiness + wrd.cRule; // businessRule
export const ccommandGenerator = wrd.ccommand + wrd.cGenerator; // commandGenerator
export const ccommandAliasGenerator = wrd.ccommand + wrd.cAlias + wrd.cGenerator; // commandAliasGenerator

/* auxiliary */
export const cconvertColors = wrd.cconvert + wrd.cColors; // convertColors

/* configuration */
export const cchangeConfigurationSetting = wrd.cchange + wrd.cConfiguration + wrd.cSetting; // changeConfigurationSetting
export const cchangeDebugConfigurationTheme = wrd.cchange + wrd.cDebug + wrd.cConfiguration + wrd.cTheme; // changeDebugConfigurationTheme
export const csaveConfiguration = wrd.csave + wrd.cConfiguration; // saveConfiguration
export const clistConfigurationThemes = wrd.clist + wrd.cConfiguration + wrd.cThemes; // listConfigurationThemes

/* constant */
export const cconstantGenerator = wrd.cconstant + wrd.cGenerator; 
export const cconstantsGeneratorList = wrd.cconstants + wrd.cGenerator + wrd.cList;
export const cconstantsPatternRecognizer = wrd.cconstants + wrd.cPattern + wrd.cRecognizer;
export const cevaluateConstant = wrd.cevaluate + wrd.cConstant;

/* dataDirectorate */
export const cprintDataHive = wrd.cprint + wrd.cData + wrd.cHive;
export const cprintDataHiveAttributes = wrd.cprint + wrd.cData + wrd.cHive + wrd.cAttributes;
export const cclearDataStorage = wrd.cclear + wrd.cData + wrd.cStorage;
export const cchangeSetting = wrd.cchange + wrd.cSetting;

/* integrationTests */
export const cvalidateConstants = wrd.cvalidate + wrd.cConstants;
export const cvalidateCommandAliases = wrd.cvalidate + wrd.cCommand + wrd.cAliases;
export const cvalidateWorkflows = wrd.cvalidate + wrd.cWorkflows;

/* performanceMetric */
export const cbusinessRulesMetrics = wrd.cbusiness + wrd.cRules + wrd.cMetrics;
export const ccommandMetrics = wrd.ccommand + wrd.cMetrics;

/* system */
export const cechoCommand = wrd.cecho + wrd.cCommand;
export const cexit = wrd.cexit;
export const cversion = wrd.cversion;
export const cabout = wrd.cabout;
export const cname = wrd.cname;
export const chelp = wrd.chelp;
export const cworkflowHelp = wrd.cworkflow + wrd.cHelp;

/* chiefConfiguration */
export const csetupConfiguration = wrd.csetup + wrd.cConfiguration;

/* chiefData */
export const csearchForUniversalDebugConfigSetting = wrd.csearch + wrd.cFor + wrd.cUniversal + wrd.cDebug + wrd.cConfig + wrd.cSetting;
export const cdetermineThemeDebugConfigFilesToLoad = wrd.cdetermine + wrd.cTheme + wrd.cDebug + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad;
export const cgetAndProcessCsvData = wrd.cget + wrd.cAnd + wrd.cProcess + gen.cCsv + wrd.cData;
export const cgetAndProcessXmlData = wrd.cget + wrd.cAnd + wrd.cProcess + gen.cXml + wrd.cData;
export const csetupAllCsvData = wrd.csetup + wrd.cAll + gen.cCsv + wrd.cData;
export const csetupAllXmlData = wrd.csetup + wrd.cAll + gen.cXml + wrd.cData;
export const csetupAllJsonConfigData = wrd.csetup + wrd.cAll + wrd.cAll + gen.cJson + wrd.cConfig + wrd.cData;

/* chiefWorkflow */
export const cloadCommandWorkflowsFromPath = wrd.cload + wrd.cCommand + wrd.cWorkflows + wrd.cFrom + wrd.cPath;

// Test names

/* commandBroker */
export const cbootStrapCommands_validData = cbootStrapCommands + wrd.cvalid + wrd.cData; // bootStrapCommands_validData
export const cbootStrapCommands_inValidString = cbootStrapCommands + wrd.cinvalid + wrd.cString; // bootStrapCommands_inValidString
export const cbootStrapCommands_inValidNumber = cbootStrapCommands + wrd.cinvalid + wrd.cNumber; // bootStrapCommands_inValidNumber
export const cbootStrapCommands_inValidBoolean = cbootStrapCommands + wrd.cinvalid + wrd.cBoolean; // bootStrapCommands_inValidBoolean

export const caddClientCommands_validData = caddClientCommands + wrd.cvalid + wrd.cData; // addClientCommands_validData
export const caddClientCommands_inValidString = caddClientCommands + wrd.cinvalid + wrd.cData; // addClientCommands_inValidString
export const caddClientCommands_inValidNumber = caddClientCommands + wrd.cinvalid + wrd.cNumber; // addClientCommands_inValidNumber
export const caddClientCommands_inValidBoolean = caddClientCommands + wrd.cinvalid + wrd.cBoolean; // addClientCommands_inValidBoolean

export const cgetValidCommand_validData = cgetValidCommand + wrd.cvalid + wrd.cData; // getValidCommand_validData
export const cgetValidCommand_inValidString = cgetValidCommand + wrd.cinvalid + wrd.cString; // getValidCommand_inValidString
export const cgetValidCommand_inValidDelimiterString = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cString; // getValidCommand_inValidDelimiterString
export const cgetValidCommand_inValidNumber = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cNumber; // getValidCommand_inValidNumber
export const cgetValidCommand_inValidBoolean = cgetValidCommand + wrd.cinvalid + wrd.cDelimited + wrd.cBoolean; // getValidCommand_inValidBoolean

export const ccountMatchingCommandAlias_validData = ccountMatchingCommandAlias + wrd.cvalid + wrd.cData; // countMatchingCommandAlias_validData
export const ccountMatchingCommandAlias_inValidCommandAliasDataString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString; // countMatchingCommandAlias_inValidCommandAliasDataString
export const ccountMatchingCommandAlias_inValidCommandAliasNameString = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString; // countMatchingCommandAlias_inValidCommandAliasNameString
export const ccountMatchingCommandAlias_inValidCommandAliasDataNumber = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber; // countMatchingCommandAlias_inValidCommandAliasDataNumber
export const ccountMatchingCommandAlias_inValidCommandAliasDataBoolean = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean; // countMatchingCommandAlias_inValidCommandAliasDataBoolean
export const ccountMatchingCommandAlias_inValidCommandAliasNameNumber = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cNumber; // countMatchingCommandAlias_inValidCommandAliasNameNumber
export const ccountMatchingCommandAlias_inValidCommandAliasNameBoolean = ccountMatchingCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean; // countMatchingCommandAlias_inValidCommandAliasNameBoolean

export const csearchCommandAlias_validData = csearchCommandAlias + wrd.cvalid + wrd.cData; // searchCommandAlias_validData
export const csearchCommandAlias_inValidCommandAliasDataString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cString; // searchCommandAlias_inValidCommandAliasDataString
export const csearchCommandAlias_inValidCommandAliasNameString = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cString; // searchCommandAlias_inValidCommandAliasNameString
export const csearchCommandAlias_inValidCommandAliasDataNumber = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cNumber; // searchCommandAlias_inValidCommandAliasDataNumber
export const csearchCommandAlias_inValidCommandAliasDataBoolean = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cBoolean; // searchCommandAlias_inValidCommandAliasDataBoolean
export const csearchCommandAlias_inValidCommandAliasNameNumber = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cNumber; // searchCommandAlias_inValidCommandAliasNameNumber
export const csearchCommandAlias_inValidCommandAliasNameBoolean = csearchCommandAlias + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cName + wrd.cBoolean; // searchCommandAlias_inValidCommandAliasNameBoolean

export const cgetAllCommandAliasData_validData = cgetAllCommandAliasData + wrd.cvalid + wrd.cData; // getAllCommandAliasData_validData
export const cgetAllCommandAliasData_inValidString = cgetAllCommandAliasData + wrd.cinvalid + wrd.cString; // getAllCommandAliasData_inValidString
export const cgetAllCommandAliasData_inValidNumber = cgetAllCommandAliasData + wrd.cinvalid + wrd.cNumber; // getAllCommandAliasData_inValidNumber
export const cgetAllCommandAliasData_inValidBoolean = cgetAllCommandAliasData + wrd.cinvalid + wrd.cBoolean; // getAllCommandAliasData_inValidBoolean

export const cgetCommandNamespaceDataObject_validData = cgetCommandNamespaceDataObject + wrd.cvalid + wrd.cData; // getCommandNamespaceDataObject_validData
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cString; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureString
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindString = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString; // getCommandNamespaceDataObject_inValidNamespaceToFindString
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNumber = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cNumber; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureNumber
export const cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cCommand + wrd.cAlias + wrd.cData + wrd.cStructure + wrd.cBoolean; // getCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindNumber = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cNumber; // getCommandNamespaceDataObject_inValidNamespaceToFindNumber
export const cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean = cgetCommandNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cBoolean; // getCommandNamespaceDataObject_inValidNamespaceToFindBoolean

export const cgetCommandArgs_validData = cgetCommandArgs + wrd.cvalid + wrd.cData; // getCommandArgs_validData
export const cgetCommandArgs_inValidString = cgetCommandArgs + wrd.cinvalid + wrd.cString; // getCommandArgs_inValidString
export const cgetCommandArgs_inValidDelimiterString = cgetCommandArgs + wrd.cinvalid + wrd.cDelimiter + wrd.cString; // getCommandArgs_inValidDelimiterString
export const cgetCommandArgs_inValidNumber = cgetCommandArgs + wrd.cinvalid + wrd.cNumber; // getCommandArgs_inValidNumber
export const cgetCommandArgs_inValidBoolean = cgetCommandArgs + wrd.cinvalid + wrd.cBoolean; // getCommandArgs_inValidBoolean

export const cexecuteCommand_validData = cexecuteCommand + wrd.cvalid + wrd.cData; // executeCommand_validData
export const cexecuteCommand_inValidString = cexecuteCommand + wrd.cinvalid + wrd.cString; // executeCommand_inValidString
export const cexecuteCommand_inValidNumber = cexecuteCommand + wrd.cinvalid + wrd.cNumber; // executeCommand_inValidNumber
export const cexecuteCommand_inValidBoolean = cexecuteCommand + wrd.cinvalid + wrd.cBoolean; // executeCommand_inValidBoolean
export const cexecuteCommand_inValidUndefined = cexecuteCommand + wrd.cinvalid + cUndefined; // executeCommand_inValidUndefined
export const cexecuteCommand_inValidNaN = cexecuteCommand + wrd.cinvalid + cNaN; // executeCommand_inValidNaN

/* dataBroker */
export const cscanDataPath_validData = cscanDataPath + wrd.cvalid + wrd.cData; // scanDataPath_validData
export const cscanDataPath_inValidString = cscanDataPath + wrd.cinvalid + wrd.cString; // scanDataPath_inValidString
export const cscanDataPath_inValidNumber = cscanDataPath + wrd.cinvalid + wrd.cNumber; // scanDataPath_inValidNumber
export const cscanDataPath_inValidBoolean = cscanDataPath + wrd.cinvalid + wrd.cBoolean; // scanDataPath_inValidBoolean

export const cfindUniversalDebugConfigSetting_validData = cfindUniversalDebugConfigSetting + wrd.cvalid + wrd.cData; // findUniversalDebugConfigSetting_validData
export const cfindUniversalDebugConfigSetting_inValidString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cString; // findUniversalDebugConfigSetting_inValidString
export const cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cString; // findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
export const cfindUniversalDebugConfigSetting_inValidNumber = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cNumber; // findUniversalDebugConfigSetting_inValidNumber
export const cfindUniversalDebugConfigSetting_inValidBoolean = cfindUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cFiles + wrd.cTo + wrd.cLoad + wrd.cBoolean; // findUniversalDebugConfigSetting_inValidBoolean

export const cloadAllCsvData_validData = cloadAllCsvData + wrd.cvalid + wrd.cData; // loadAllCsvData_validData
export const cloadAllCsvData_inValidString = cloadAllCsvData + wrd.cinvalid + wrd.cString; // loadAllCsvData_inValidString
export const cloadAllCsvData_inValidContextNameString = cloadAllCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString; // loadAllCsvData_inValidContextNameString
export const cloadAllCsvData_inValidNumber = cloadAllCsvData + wrd.cinvalid + wrd.cNumber; // loadAllCsvData_inValidNumber
export const cloadAllCsvData_inValidBoolean = cloadAllCsvData + wrd.cinvalid + wrd.cBoolean; // loadAllCsvData_inValidBoolean

export const cloadAllXmlData_validData = cloadAllXmlData + wrd.cvalid + wrd.cData; // loadAllXmlData_validData
export const cloadAllXmlData_inValidString = cloadAllXmlData + wrd.cinvalid + wrd.cString; // loadAllXmlData_inValidString
export const cloadAllXmlData_inValidContextNameString = cloadAllXmlData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString; // loadAllXmlData_inValidContextNameString
export const cloadAllXmlData_inValidNumber = cloadAllXmlData + wrd.cinvalid + wrd.cNumber; // loadAllXmlData_inValidNumber
export const cloadAllXmlData_inValidBoolean = cloadAllXmlData + wrd.cinvalid + wrd.cBoolean; // loadAllXmlData_inValidBoolean

export const cloadAllJsonData_validData = cloadAllJsonData + wrd.cvalid + wrd.cData; // loadAllJsonData_validData
export const cloadAllJsonData_inValidString = cloadAllJsonData + wrd.cinvalid + wrd.cString; // loadAllJsonData_inValidString
export const cloadAllJsonData_inValidContextNameString = cloadAllJsonData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString; // loadAllJsonData_inValidContextNameString
export const cloadAllJsonData_inValidNumber = cloadAllJsonData + wrd.cinvalid + wrd.cNumber; // loadAllJsonData_inValidNumber
export const cloadAllJsonData_inValidBoolean = cloadAllJsonData + wrd.cinvalid + wrd.cBoolean; // loadAllJsonData_inValidBoolean

export const cprocessCsvData_validData = cprocessCsvData + wrd.cvalid + wrd.cData; // processCsvData_validData
export const cprocessCsvData_inValidString = cprocessCsvData + wrd.cinvalid + wrd.cString; // processCsvData_inValidString
export const cprocessCsvData_inValidContextNameString = cprocessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cString; // processCsvData_inValidContextNameString
export const cprocessCsvData_inValidNumber = cprocessCsvData + wrd.cinvalid + wrd.cNumber; // processCsvData_inValidNumber
export const cprocessCsvData_inValidBoolean = cprocessCsvData + wrd.cinvalid + wrd.cBoolean; // processCsvData_inValidBoolean

export const cpreprocessJsonFile_validData = cpreprocessJsonFile + wrd.cvalid + wrd.cData; // preprocessJsonFile_validData
export const cpreprocessJsonFile_inValidString = cpreprocessJsonFile + wrd.cinvalid + wrd.cString; // preprocessJsonFile_inValidString
export const cpreprocessJsonFile_inValidNumber = cpreprocessJsonFile + wrd.cinvalid + wrd.cNumber; // preprocessJsonFile_inValidNumber
export const cpreprocessJsonFile_inValidBoolean = cpreprocessJsonFile + wrd.cvalid + wrd.cBoolean; // preprocessJsonFile_inValidBoolean

export const cwriteJsonDataToFile_validData = cwriteJsonDataToFile + wrd.cvalid + wrd.cData; // writeJsonDataToFile_validData
export const cwriteJsonDataToFile_inValidString = cwriteJsonDataToFile + wrd.cinvalid + wrd.cString; // writeJsonDataToFile_inValidString
export const cwriteJsonDataToFile_inValidDataToWrite = cwriteJsonDataToFile + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cWrite; // writeJsonDataToFile_inValidDataToWrite
export const cwriteJsonDataToFile_inValidNumber = cwriteJsonDataToFile + wrd.cinvalid + wrd.cNumber; // writeJsonDataToFile_inValidNumber
export const cwriteJsonDataToFile_inValidBoolean = cwriteJsonDataToFile + wrd.cinvalid + wrd.cBoolean; // writeJsonDataToFile_inValidBoolean

export const csetupDataStorage_validData = csetupDataStorage + wrd.cvalid + wrd.cData; // setupDataStorage_validData
export const csetupDataStorage_inValidString = csetupDataStorage + wrd.cinvalid + wrd.cString; // setupDataStorage_inValidString
export const csetupDataStorage_inValidNumber = csetupDataStorage + wrd.cinvalid + wrd.cNumber; // setupDataStorage_inValidNumber
export const csetupDataStorage_inValidBoolean = csetupDataStorage + wrd.cinvalid + wrd.cBoolean; // setupDataStorage_inValidBoolean
 
export const cstoreData_validDataString = cstoreData + wrd.cvalid + wrd.cData + wrd.cString; // storeData_validDataString
export const cstoreData_validDataBoolean = cstoreData + wrd.cvalid + wrd.cData + wrd.cBoolean; // storeData_validDataBoolean
export const cstoreData_validDataInteger = cstoreData + wrd.cvalid + wrd.cData + wrd.cInteger; // storeData_validDataInteger
export const cstoreData_validDataArray = cstoreData + wrd.cvalid + wrd.cData + wrd.cArray; // storeData_validDataArray
export const cstoreData_validDataObject = cstoreData + wrd.cvalid + wrd.cData + wrd.cObject; // storeData_validDataObject
export const cstoreData_inValidDataToStoreUndefined = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + cUndefined; // storeData_inValidDataToStoreUndefined
export const cstoreData_inValidDataToStoreNaN = cstoreData + wrd.cinvalid + wrd.cData + wrd.cTo + wrd.cStore + cNaN; // storeData_inValidDataToStoreNaN
export const cstoreData_inValidDataStorageDataToStoreNumber = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cNumber; // storeData_inValidDataStorageDataToStoreNumber
export const cstoreData_inValidDataStorageDataToStoreBoolean = cstoreData + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cData + wrd.cTo + wrd.cStore + wrd.cBoolean; // storeData_inValidDataStorageDataToStoreBoolean

export const cgetData_validData = cgetData + wrd.cvalid + wrd.cData; // getData_validData
export const cgetData_inValidString = cgetData + wrd.cinvalid + wrd.cString; // getData_inValidString
export const cgetData_inValidNumber = cgetData + wrd.cinvalid + wrd.cNumber; // getData_inValidNumber
export const cgetData_inValidBoolean = cgetData + wrd.cinvalid + wrd.cBoolean; // getData_inValidBoolean

export const cclearData_validData = cclearData + wrd.cvalid + wrd.cData; // clearData_validData
export const cclearData_inValidUndefined = cclearData + wrd.cinvalid + cUndefined; // clearData_inValidUndefined
export const cclearData_inValidNaN = cclearData + wrd.cinvalid + cNaN; // clearData_inValidNaN
export const cclearData_inValidNumber = cclearData + wrd.cinvalid + wrd.cNumber; // clearData_inValidNumber
export const cclearData_inValidBoolean = cclearData + wrd.cinvalid + wrd.cBoolean; // clearData_inValidBoolean

export const cinitializeConstantsValidationData_validData = cinitializeConstantsValidationData + wrd.cvalid + wrd.cData; // initializeConstantsValidationData_validData
export const cinitializeConstantsValidationData_inValidString = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cString; // initializeConstantsValidationData_inValidString
export const cinitializeConstantsValidationData_inValidNumber = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cNumber; // initializeConstantsValidationData_inValidNumber
export const cinitializeConstantsValidationData_inValidBoolean = cinitializeConstantsValidationData + wrd.cinvalid + wrd.cBoolean; // initializeConstantsValidationData_inValidBoolean

export const caddConstantsValidationData_validData = caddConstantsValidationData + wrd.cvalid + wrd.cData; // addConstantsValidationData_validData
export const caddConstantsValidationData_inValidString = caddConstantsValidationData + wrd.cinvalid + wrd.cString; // addConstantsValidationData_inValidString
export const caddConstantsValidationData_inValidNumber = caddConstantsValidationData + wrd.cinvalid + wrd.cNumber; // addConstantsValidationData_inValidNumber
export const caddConstantsValidationData_inValidBoolean = caddConstantsValidationData + wrd.cinvalid + wrd.cBoolean; // addConstantsValidationData_inValidBoolean

export const caddDeeplyNestedConstantsValidationData_validData = caddDeeplyNestedConstantsValidationData + wrd.cvalid + wrd.cData; // addDeeplyNestedConstantsValidationData_validData
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cString; // addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cNumber; // addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber
export const caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cDeeply + wrd.cNested + wrd.cData + wrd.cBoolean; // addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean
export const caddDeeplyNestedConstantsValidationData_inValidContextNameUndefined = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + cUndefined; // addDeeplyNestedConstantsValidationData_inValidContextNameUndefined
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNaN = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + cNaN; // addDeeplyNestedConstantsValidationData_inValidContextNameNaN
export const caddDeeplyNestedConstantsValidationData_inValidContextNameNumber = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cNumber; // addDeeplyNestedConstantsValidationData_inValidContextNameNumber
export const caddDeeplyNestedConstantsValidationData_inValidContextNameBoolean = caddDeeplyNestedConstantsValidationData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cBoolean; // addDeeplyNestedConstantsValidationData_inValidContextNameBoolean

/* ruleBroker */
export const cbootStrapBusinessRules_validData = cbootStrapBusinessRules + wrd.cvalid + wrd.cData; // bootStrapBusinessRules_validData
export const cbootStrapBusinessRules_inValidString = cbootStrapBusinessRules + wrd.cinvalid + wrd.cString; // bootStrapBusinessRules_inValidString
export const cbootStrapBusinessRules_inValidNumber = cbootStrapBusinessRules + wrd.cinvalid + wrd.cNumber; // bootStrapBusinessRules_inValidNumber
export const cbootStrapBusinessRules_inValidBoolean = cbootStrapBusinessRules + wrd.cinvalid + wrd.cBoolean; // bootStrapBusinessRules_inValidBoolean

export const caddClientRules_validData = caddClientRules + wrd.cvalid + wrd.cData; // addClientRules_validData
export const caddClientRules_inValidString = caddClientRules + wrd.cinvalid + wrd.cString; // addClientRules_inValidString
export const caddClientRules_inValidNumber = caddClientRules + wrd.cinvalid + wrd.cNumber; // addClientRules_inValidNumber
export const caddClientRules_inValidBoolean = caddClientRules + wrd.cinvalid + wrd.cBoolean; // addClientRules_inValidBoolean

export const cprocessRules_validData = cprocessRules + wrd.cvalid + wrd.cData; // processRules_validData
export const cprocessRules_inValidInputsUndefined = cprocessRules + wrd.cinvalid + wrd.cInputs + cUndefined; // processRules_inValidInputsUndefined
export const cprocessRules_inValidInputsNaN = cprocessRules + wrd.cinvalid + wrd.cInputs + cNaN; // processRules_inValidInputsNaN
export const cprocessRules_inValidRulesToExecuteUndefined = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + cUndefined; // processRules_inValidRulesToExecuteUndefined
export const cprocessRules_inValidRulesToExecuteNaN = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + cNaN; // processRules_inValidRulesToExecuteNaN
export const cprocessRules_inValidInputsInteger = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cInteger; // processRules_inValidInputsInteger
export const cprocessRules_inValidInputsBoolean = cprocessRules + wrd.cinvalid + wrd.cInputs + wrd.cBoolean; // processRules_inValidInputsBoolean
export const cprocessRules_inValidRulesToExecuteInteger = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cInteger; // processRules_inValidRulesToExecuteInteger
export const cprocessRules_inValidRulesToExecuteBoolean = cprocessRules + wrd.cinvalid + wrd.cRules + wrd.cTo + wrd.cExecute + wrd.cBoolean; // processRules_inValidRulesToExecuteBoolean

/* themeBroker */
export const cgetNamedThemes_validData = cgetNamedThemes + wrd.cvalid + wrd.cData; // getNamedThemes_validData
export const cgetNamedThemes_inValidString = cgetNamedThemes + wrd.cinvalid + wrd.cString; // getNamedThemes_inValidString
export const cgetNamedThemes_inValidNumber = cgetNamedThemes + wrd.cinvalid + wrd.cNumber; // getNamedThemes_inValidNumber
export const cgetNamedThemes_inValidBoolean = cgetNamedThemes + wrd.cinvalid + wrd.cBoolean; // getNamedThemes_inValidBoolean

export const cgetNamedThemePath_validData = cgetNamedThemePath + wrd.cvalid + wrd.cData; // getNamedThemePath_validData
export const cgetNamedThemePath_inValidString = cgetNamedThemePath + wrd.cinvalid + wrd.cString; // getNamedThemePath_inValidString
export const cgetNamedThemePath_inValidNumber = cgetNamedThemePath + wrd.cinvalid + wrd.cNumber; // getNamedThemePath_inValidNumber
export const cgetNamedThemePath_inValidBoolean = cgetNamedThemePath + wrd.cinvalid + wrd.cBoolean; // getNamedThemePath_inValidBoolean

export const cloadTheme_validData = cloadTheme + wrd.cvalid + wrd.cData; // loadTheme_validData
export const cloadTheme_inValidString = cloadTheme + wrd.cinvalid + wrd.cString; // loadTheme_inValidString
export const cloadTheme_inValidNumber = cloadTheme + wrd.cinvalid + wrd.cNumber; // loadTheme_inValidNumber
export const cloadTheme_inValidBoolean = cloadTheme + wrd.cinvalid + wrd.cBoolean; // loadTheme_inValidBoolean

export const capplyTheme_validData = capplyTheme + wrd.cvalid + wrd.cData; // applyTheme_validData
export const capplyTheme_inValidString = capplyTheme + wrd.cinvalid + wrd.cString; // applyTheme_inValidString
export const capplyTheme_inValidNumber = capplyTheme + wrd.cinvalid + wrd.cNumber; // applyTheme_inValidNumber
export const capplyTheme_inValidBoolean = capplyTheme + wrd.cinvalid + wrd.cBoolean; // applyTheme_inValidBoolean

/* workflowBroker */
export const cgetWorkflow_validData = cgetWorkflow + wrd.cvalid + wrd.cData; // getWorkflow_validData
export const cgetWorkflow_inValidString = cgetWorkflow + wrd.cinvalid + wrd.cString; // getWorkflow_inValidString
export const cgetWorkflow_inValidNumber = cgetWorkflow + wrd.cinvalid + wrd.cNumber; // getWorkflow_inValidNumber
export const cgetWorkflow_inValidBoolean = cgetWorkflow + wrd.cinvalid + wrd.cBoolean; // getWorkflow_inValidBoolean

export const cdoesWorkflowExist_validData = cdoesWorkflowExist + wrd.cvalid + wrd.cData; // doesWorkflowExist_validData
export const cdoesWorkflowExist_inValidString = cdoesWorkflowExist + wrd.cinvalid + wrd.cString; // doesWorkflowExist_inValidString
export const cdoesWorkflowExist_inValidNumber = cdoesWorkflowExist + wrd.cinvalid + wrd.cNumber; // doesWorkflowExist_inValidNumber
export const cdoesWorkflowExist_inValidBoolean = cdoesWorkflowExist + wrd.cinvalid + wrd.cBoolean; // doesWorkflowExist_inValidBoolean

export const cdoesWorkflowExistInWorkflowData_validData = cdoesWorkflowExistInWorkflowData + wrd.cvalid + wrd.cData; // doesWorkflowExistInWorkflowData_validData
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cString; // doesWorkflowExistInWorkflowData_inValidWorkflowDataString
export const cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cWorkflow + wrd.cName + wrd.cString; // doesWorkflowExistInWorkflowData_inValidWorkflowNameString
export const cdoesWorkflowExistInWorkflowData_inValidNumber = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cNumber; // doesWorkflowExistInWorkflowData_inValidNumber
export const cdoesWorkflowExistInWorkflowData_inValidBoolean = cdoesWorkflowExistInWorkflowData + wrd.cinvalid + wrd.cBoolean; // doesWorkflowExistInWorkflowData_inValidBoolean

export const csearchWorkflow_validData = csearchWorkflow + wrd.cvalid + wrd.cData; // searchWorkflow_validData
export const csearchWorkflow_inValidWorkflowDataString = csearchWorkflow + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cString; // searchWorkflow_inValidWorkflowDataString
export const csearchWorkflow_inValidWorkflowNameString = csearchWorkflow + wrd.cinvalid + wrd.cWorkflow + wrd.cName + wrd.cString; // searchWorkflow_inValidWorkflowNameString
export const csearchWorkflow_inValidNumber = csearchWorkflow + wrd.cinvalid + wrd.cNumber; // searchWorkflow_inValidNumber
export const csearchWorkflow_inValidBoolean = csearchWorkflow + wrd.cinvalid + wrd.cBoolean; // searchWorkflow_inValidBoolean

export const cgetAllWorkflows_validData = cgetAllWorkflows + wrd.cvalid + wrd.cData; // getAllWorkflows_validData
export const cgetAllWorkflows_inValidString = cgetAllWorkflows + wrd.cinvalid + wrd.cString; // getAllWorkflows_inValidString
export const cgetAllWorkflows_inValidNumber = cgetAllWorkflows + wrd.cinvalid + wrd.cNumber; // getAllWorkflows_inValidNumber
export const cgetAllWorkflows_inValidBoolean = cgetAllWorkflows + wrd.cinvalid + wrd.cBoolean; // getAllWorkflows_inValidBoolean

export const cgetWorkflowNamespaceDataObject_validData = cgetWorkflowNamespaceDataObject + wrd.cvalid + wrd.cData; // getWorkflowNamespaceDataObject_validData
export const cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cWorkflow + wrd.cData + wrd.cStructure + wrd.cString; // getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString
export const cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cNamespace + wrd.cTo + wrd.cFind + wrd.cString; // getWorkflowNamespaceDataObject_inValidNamespaceToFindString
export const cgetWorkflowNamespaceDataObject_inValidNumber = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cNumber; // getWorkflowNamespaceDataObject_inValidNumber
export const cgetWorkflowNamespaceDataObject_inValidBoolean = cgetWorkflowNamespaceDataObject + wrd.cinvalid + wrd.cBoolean; // getWorkflowNamespaceDataObject_inValidBoolean

/* auxiliaryArrayParsing */
export const cparseColorRangeInputs_validDataString = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cString; // parseColorRangeInputs_validDataString
export const cparseColorRangeInputs_validDataMixedUse1 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c1; // parseColorRangeInputs_validDataMixedUse1
export const cparseColorRangeInputs_validDataMixedUse2 = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cMixed + wrd.cUse + num.c2; // parseColorRangeInputs_validDataMixedUse2
export const cparseColorRangeInputs_validDataInteger = cparseColorRangeInputs + wrd.cvalid + wrd.cData + wrd.cInteger; // parseColorRangeInputs_validDataInteger
export const cparseColorRangeInputs_inValidInputDataUndefined1 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined + num.c1; // parseColorRangeInputs_inValidInputDataUndefined1
export const cparseColorRangeInputs_inValidInputDataUndefined2 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined + num.c2; // parseColorRangeInputs_inValidInputDataUndefined2
export const cparseColorRangeInputs_inValidInputDataNaN1 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN + num.c1; // parseColorRangeInputs_inValidInputDataNaN1
export const cparseColorRangeInputs_inValidInputDataNaN2 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN + num.c2; // parseColorRangeInputs_inValidInputDataNaN2
export const cparseColorRangeInputs_inValidInputMetaDataUndefined1 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined + num.c1; // parseColorRangeInputs_inValidInputMetaDataUndefined1
export const cparseColorRangeInputs_inValidInputMetaDataUndefined2 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined + num.c2; // parseColorRangeInputs_inValidInputMetaDataUndefined2
export const cparseColorRangeInputs_inValidInputMetaDataNaN1 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN + num.c1; // parseColorRangeInputs_inValidInputMetaDataNaN1
export const cparseColorRangeInputs_inValidInputMetaDataNaN2 = cparseColorRangeInputs + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN + num.c2; // parseColorRangeInputs_inValidInputMetaDataNaN2l

export const cdoesArrayContainValue_validDataInputDataString = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesArrayContainValue_validDataInputDataString
export const cdoesArrayContainValue_validDataInputDataInteger = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger; // doesArrayContainValue_validDataInputDataInteger
export const cdoesArrayContainValue_validDataInputDataBoolean = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean; //  cdoesArrayContainValue_validDataInputDataBoolean
export const cdoesArrayContainValue_validDataInputDataObject = cdoesArrayContainValue + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject; // doesArrayContainValue_validDataInputDataObject
export const cdoesArrayContainValue_inValidInputDataUndefined = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // doesArrayContainValue_inValidInputDataUndefined
export const cdoesArrayContainValue_inValidInputDataNaN = cdoesArrayContainValue + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // doesArrayContainValue_inValidInputDataNaN
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataInteger = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cInteger; // doesArrayContainValue_inValidDataStorageInputMetaDataInteger
export const cdoesArrayContainValue_inValidDataStorageInputMetaDataBoolean = cdoesArrayContainValue + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMetaData + wrd.cBoolean; // doesArrayContainValue_inValidDataStorageInputMetaDataBoolean

/* characterArrayParsing */
export const creplaceCharacterWithCharacter_validDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cString; // replaceCharacterWithCharacter_validDataString
export const creplaceCharacterWithCharacter_validDataInputDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceCharacterWithCharacter_validDataInputDataString
export const creplaceCharacterWithCharacter_validDataInputMetaDataString = creplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceCharacterWithCharacter_validDataInputMetaDataString
export const creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // replaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger
export const creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataBoolean = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cStorage + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // replaceCharacterWithCharacter_inValidDataStorageInputMetaDataBoolean
export const creplaceCharacterWithCharacter_inValidInputMetaDataUndefined = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // replaceCharacterWithCharacter_inValidInputMetaDataUndefined
export const creplaceCharacterWithCharacter_inValidInputMetaDataNaN = creplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // replaceCharacterWithCharacter_inValidInputMetaDataNaN

export const cdoesArrayContainCharacter_validDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cString; // doesArrayContainCharacter_validDataString
export const cdoesArrayContainCharacter_validDataInputDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesArrayContainCharacter_validDataInputDataString
export const cdoesArrayContainCharacter_validDataInputDataInteger = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger; // doesArrayContainCharacter_validDataInputDataInteger
export const cdoesArrayContainCharacter_validDataInputDataBoolean = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean; // doesArrayContainCharacter_validDataInputDataBoolean
export const cdoesArrayContainCharacter_validDataInputDataObject = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject; // doesArrayContainCharacter_validDataInputDataObject
export const cdoesArrayContainCharacter_validDataInputMetaDataString = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesArrayContainCharacter_validDataInputMetaDataString
export const cdoesArrayContainCharacter_validDataInputMetaDataInteger = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesArrayContainCharacter_validDataInputMetaDataInteger
export const cdoesArrayContainCharacter_validDataInputMetaDataBoolean = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesArrayContainCharacter_validDataInputMetaDataBoolean
export const cdoesArrayContainCharacter_validDataInputMetaDataObject = cdoesArrayContainCharacter + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cObject; // doesArrayContainCharacter_validDataInputMetaDataObject
export const cdoesArrayContainCharacter_inValidInputDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // doesArrayContainCharacter_inValidInputDataUndefined
export const cdoesArrayContainCharacter_inValidInputDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // doesArrayContainCharacter_inValidInputDataNaN
export const cdoesArrayContainCharacter_inValidInputMetaDataUndefined = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // doesArrayContainCharacter_inValidInputMetaDataUndefined
export const cdoesArrayContainCharacter_inValidInputMetaDataNaN = cdoesArrayContainCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // doesArrayContainCharacter_inValidInputMetaDataNaN

export const cremoveCharacterFromArray_validDataInputDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // removeCharacterFromArray_validDataInputDataString
export const cremoveCharacterFromArray_validDataInputDataInteger = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger; // removeCharacterFromArray_validDataInputDataInteger
export const cremoveCharacterFromArray_validDataInputDataBoolean = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean; // removeCharacterFromArray_validDataInputDataBoolean
export const cremoveCharacterFromArray_validDataInputDataObject = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cObject; // removeCharacterFromArray_validDataInputDataObject
export const cremoveCharacterFromArray_validDataInputMetaDataString = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // removeCharacterFromArray_validDataInputMetaDataString
export const cremoveCharacterFromArray_validDataInputMetaDataInteger = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // removeCharacterFromArray_validDataInputMetaDataInteger
export const cremoveCharacterFromArray_validDataInputMetaDataBoolean = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // removeCharacterFromArray_validDataInputMetaDataBoolean
export const cremoveCharacterFromArray_validDataInputMetaDataObject = cremoveCharacterFromArray + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cObject; // removeCharacterFromArray_validDataInputMetaDataObject
export const cremoveCharacterFromArray_inValidInputDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // removeCharacterFromArray_inValidInputDataUndefined
export const cremoveCharacterFromArray_inValidInputDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // removeCharacterFromArray_inValidInputDataNaN
export const cremoveCharacterFromArray_inValidInputMetaDataUndefined = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // removeCharacterFromArray_inValidInputMetaDataUndefined
export const cremoveCharacterFromArray_inValidInputMetaDataNaN = cremoveCharacterFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // removeCharacterFromArray_inValidInputMetaDataNaN

export const creplaceCharacterAtIndex_validDataInputDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceCharacterAtIndex_validDataInputDataString
export const creplaceCharacterAtIndex_validDataInputMetaDataString = creplaceCharacterAtIndex + wrd.cvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceCharacterAtIndex_validDataInputMetaDataString
export const creplaceCharacterAtIndex_inValidInputMetaDataUndefined = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // replaceCharacterAtIndex_inValidInputMetaDataUndefined
export const creplaceCharacterAtIndex_inValidInputMetaDataNaN = creplaceCharacterAtIndex + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // replaceCharacterAtIndex_inValidInputMetaDataNaN

/* commandArrayParsing */
export const csolveLehmerCode_validDataString = csolveLehmerCode + wrd.cvalid + wrd.cData + wrd.cString; // solveLehmerCode_validDataString
export const csolveLehmerCode_inValidDataInputDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // solveLehmerCode_inValidDataInputDataString
export const csolveLehmerCode_inValidDataInputMetaDataString = csolveLehmerCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // solveLehmerCode_inValidDataInputMetaDataString
export const csolveLehmerCode_inValidInputDataInteger = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // solveLehmerCode_inValidInputDataInteger
export const csolveLehmerCode_inValidInputDataBoolean = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // solveLehmerCode_inValidInputDataBoolean
export const csolveLehmerCode_inValidInputMetaDataInteger = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // solveLehmerCode_inValidInputMetaDataInteger
export const csolveLehmerCode_inValidInputMetaDataBoolean = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // solveLehmerCode_inValidInputMetaDataBoolean
export const csolveLehmerCode_inValidInputDataUndefined = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // solveLehmerCode_inValidInputDataUndefined
export const csolveLehmerCode_inValidInputDataNaN = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // solveLehmerCode_inValidInputDataNaN
export const csolveLehmerCode_inValidInputMetaDataUndefined = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // solveLehmerCode_inValidInputMetaDataUndefined
export const csolveLehmerCode_inValidInputMetaDataNaN = csolveLehmerCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // solveLehmerCode_inValidInputMetaDataNaN

export const crecursiveArrayExpansion_validDataString = crecursiveArrayExpansion + wrd.cvalid + wrd.cData + wrd.cString; // recursiveArrayExpansion_validDataString
export const crecursiveArrayExpansion_inValidDataInputDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // recursiveArrayExpansion_inValidDataInputDataString
export const crecursiveArrayExpansion_inValidDataInputMetaDataString = crecursiveArrayExpansion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // recursiveArrayExpansion_inValidDataInputMetaDataString
export const crecursiveArrayExpansion_inValidInputDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // recursiveArrayExpansion_inValidInputDataInteger
export const crecursiveArrayExpansion_inValidInputDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // recursiveArrayExpansion_inValidInputDataBoolean
export const crecursiveArrayExpansion_inValidInputMetaDataInteger = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // recursiveArrayExpansion_inValidInputMetaDataInteger
export const crecursiveArrayExpansion_inValidInputMetaDataBoolean = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // recursiveArrayExpansion_inValidInputMetaDataBoolean
export const crecursiveArrayExpansion_inValidInputDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // recursiveArrayExpansion_inValidInputDataUndefined
export const crecursiveArrayExpansion_inValidInputDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // recursiveArrayExpansion_inValidInputDataNaN
export const crecursiveArrayExpansion_inValidInputMetaDataUndefined = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // recursiveArrayExpansion_inValidInputMetaDataUndefined
export const crecursiveArrayExpansion_inValidInputMetaDataNaN = crecursiveArrayExpansion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // recursiveArrayExpansion_inValidInputMetaDataNaN

export const cgetLehmerCodeValue_validDataString = cgetLehmerCodeValue + wrd.cvalid + wrd.cData + wrd.cString; // getLehmerCodeValue_validDataString
export const cgetLehmerCodeValue_inValidDataInputDataString = cgetLehmerCodeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getLehmerCodeValue_inValidDataInputDataString
export const cgetLehmerCodeValue_inValidDataInputMetaDataString = cgetLehmerCodeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getLehmerCodeValue_inValidDataInputMetaDataString
export const cgetLehmerCodeValue_inValidInputDataInteger = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getLehmerCodeValue_inValidInputDataInteger
export const cgetLehmerCodeValue_inValidInputDataBoolean = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getLehmerCodeValue_inValidInputDataBoolean
export const cgetLehmerCodeValue_inValidInputMetaDataInteger = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getLehmerCodeValue_inValidInputMetaDataInteger
export const cgetLehmerCodeValue_inValidInputMetaDataBoolean = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getLehmerCodeValue_inValidInputMetaDataBoolean
export const cgetLehmerCodeValue_inValidInputDataUndefined = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getLehmerCodeValue_inValidInputDataUndefined
export const cgetLehmerCodeValue_inValidInputDataNaN = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getLehmerCodeValue_inValidInputDataNaN
export const cgetLehmerCodeValue_inValidInputMetaDataUndefined = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // getLehmerCodeValue_inValidInputMetaDataUndefined
export const cgetLehmerCodeValue_inValidInputMetaDataNaN = cgetLehmerCodeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // getLehmerCodeValue_inValidInputMetaDataNaN

export const cgenerateCommandAliases_validDataString = cgenerateCommandAliases + wrd.cvalid + wrd.cData + wrd.cString; // generateCommandAliases_validDataString
export const cgenerateCommandAliases_inValidDataInputDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateCommandAliases_inValidDataInputDataString
export const cgenerateCommandAliases_inValidDataInputMetaDataString = cgenerateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateCommandAliases_inValidDataInputMetaDataString
export const cgenerateCommandAliases_inValidInputDataInteger = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateCommandAliases_inValidInputDataInteger
export const cgenerateCommandAliases_inValidInputDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateCommandAliases_inValidInputDataBoolean
export const cgenerateCommandAliases_inValidInputMetaDataInteger = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateCommandAliases_inValidInputMetaDataInteger
export const cgenerateCommandAliases_inValidInputMetaDataBoolean = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateCommandAliases_inValidInputMetaDataBoolean
export const cgenerateCommandAliases_inValidInputDataUndefined = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateCommandAliases_inValidInputDataUndefined
export const cgenerateCommandAliases_inValidInputDataNaN = cgenerateCommandAliases + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateCommandAliases_inValidInputDataNaN

export const caggregateCommandArguments_validDataString = caggregateCommandArguments + wrd.cvalid + wrd.cData + wrd.cString; // aggregateCommandArguments_validDataString
export const caggregateCommandArguments_inValidDataInputDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // aggregateCommandArguments_inValidDataInputDataString
export const caggregateCommandArguments_inValidDataInputMetaDataString = caggregateCommandArguments + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // aggregateCommandArguments_inValidDataInputMetaDataString
export const caggregateCommandArguments_inValidInputDataInteger = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // aggregateCommandArguments_inValidInputDataInteger
export const caggregateCommandArguments_inValidInputDataBoolean = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // aggregateCommandArguments_inValidInputDataBoolean
export const caggregateCommandArguments_inValidInputMetaDataInteger = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // aggregateCommandArguments_inValidInputMetaDataInteger
export const caggregateCommandArguments_inValidInputMetaDataBoolean = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // aggregateCommandArguments_inValidInputMetaDataBoolean
export const caggregateCommandArguments_inValidInputDataUndefined = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // aggregateCommandArguments_inValidInputDataUndefined
export const caggregateCommandArguments_inValidInputDataNaN = caggregateCommandArguments + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // aggregateCommandArguments_inValidInputDataNaN

/* constantArrayParsing */
export const cgetLengthOfLongestStringInArray_validDataString = cgetLengthOfLongestStringInArray + wrd.cvalid + wrd.cData + wrd.cString; // getLengthOfLongestStringInArray_validDataString
export const cgetLengthOfLongestStringInArray_inValidDataInputDataString = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getLengthOfLongestStringInArray_inValidDataInputDataString
export const cgetLengthOfLongestStringInArray_inValidDataInputMetaDataString = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getLengthOfLongestStringInArray_inValidDataInputMetaDataString
export const cgetLengthOfLongestStringInArray_inValidInputDataInteger = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getLengthOfLongestStringInArray_inValidInputDataInteger
export const cgetLengthOfLongestStringInArray_inValidInputDataBoolean = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getLengthOfLongestStringInArray_inValidInputDataBoolean
export const cgetLengthOfLongestStringInArray_inValidInputMetaDataInteger = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getLengthOfLongestStringInArray_inValidInputMetaDataInteger
export const cgetLengthOfLongestStringInArray_inValidInputMetaDataBoolean = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getLengthOfLongestStringInArray_inValidInputMetaDataBoolean
export const cgetLengthOfLongestStringInArray_inValidInputDataUndefined = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getLengthOfLongestStringInArray_inValidInputDataUndefined
export const cgetLengthOfLongestStringInArray_inValidInputDataNaN = cgetLengthOfLongestStringInArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getLengthOfLongestStringInArray_inValidInputDataNaN

export const csearchForPatternsInStringArray_validDataString = csearchForPatternsInStringArray + wrd.cvalid + wrd.cData + wrd.cString; // searchForPatternsInStringArray_validDataString
export const csearchForPatternsInStringArray_inValidDataInputDataString = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // searchForPatternsInStringArray_inValidDataInputDataString
export const csearchForPatternsInStringArray_inValidDataInputMetaDataString = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // searchForPatternsInStringArray_inValidDataInputMetaDataString
export const csearchForPatternsInStringArray_inValidInputDataInteger = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // searchForPatternsInStringArray_inValidInputDataInteger
export const csearchForPatternsInStringArray_inValidInputDataBoolean = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // searchForPatternsInStringArray_inValidInputDataBoolean
export const csearchForPatternsInStringArray_inValidInputMetaDataInteger = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // searchForPatternsInStringArray_inValidInputMetaDataInteger
export const csearchForPatternsInStringArray_inValidInputMetaDataBoolean = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // searchForPatternsInStringArray_inValidInputMetaDataBoolean
export const csearchForPatternsInStringArray_inValidInputDataUndefined = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // searchForPatternsInStringArray_inValidInputDataUndefined
export const csearchForPatternsInStringArray_inValidInputDataNaN = csearchForPatternsInStringArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // searchForPatternsInStringArray_inValidInputDataNaN

export const cvalidatePatternsThatNeedImplementation_validDataString = cvalidatePatternsThatNeedImplementation + wrd.cvalid + wrd.cString; // validatePatternsThatNeedImplementation_validDataString
export const cvalidatePatternsThatNeedImplementation_inValidDataInputDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // validatePatternsThatNeedImplementation_inValidDataInputDataString
export const cvalidatePatternsThatNeedImplementation_inValidDataInputMetaDataString = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // validatePatternsThatNeedImplementation_inValidDataInputMetaDataString
export const cvalidatePatternsThatNeedImplementation_inValidInputDataInteger = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // validatePatternsThatNeedImplementation_inValidInputDataInteger
export const cvalidatePatternsThatNeedImplementation_inValidInputDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // validatePatternsThatNeedImplementation_inValidInputDataBoolean
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataInteger = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // validatePatternsThatNeedImplementation_inValidInputMetaDataInteger
export const cvalidatePatternsThatNeedImplementation_inValidInputMetaDataBoolean = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // validatePatternsThatNeedImplementation_inValidInputMetaDataBoolean
export const cvalidatePatternsThatNeedImplementation_inValidInputDataUndefined = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // validatePatternsThatNeedImplementation_inValidInputDataUndefined
export const cvalidatePatternsThatNeedImplementation_inValidInputDataNaN = cvalidatePatternsThatNeedImplementation + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // validatePatternsThatNeedImplementation_inValidInputDataNaN

/* dataArrayParsing */
export const carraysAreEqual_validDataString = carraysAreEqual + wrd.cvalid + wrd.cData + wrd.cString; // arraysAreEqual_validDataString
export const carraysAreEqual_inValidDataInputDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // arraysAreEqual_inValidDataInputDataString
export const carraysAreEqual_inValidDataInputMetaDataString = carraysAreEqual + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // arraysAreEqual_inValidDataInputMetaDataString
export const carraysAreEqual_inValidInputDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // arraysAreEqual_inValidInputDataInteger
export const carraysAreEqual_inValidInputDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // arraysAreEqual_inValidInputDataBoolean
export const carraysAreEqual_inValidInputMetaDataInteger = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // arraysAreEqual_inValidInputMetaDataInteger
export const carraysAreEqual_inValidInputMetaDataBoolean = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // arraysAreEqual_inValidInputMetaDataBoolean
export const carraysAreEqual_inValidInputDataUndefined = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // arraysAreEqual_inValidInputDataUndefined
export const carraysAreEqual_inValidInputDataNaN = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // arraysAreEqual_inValidInputDataNaN
export const carraysAreEqual_inValidInputMetaDataUndefined = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // arraysAreEqual_inValidInputMetaDataUndefined
export const carraysAreEqual_inValidInputMetaDataNaN = carraysAreEqual + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // arraysAreEqual_inValidInputMetaDataNaN

export const cstoreData_inValidDataInputDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // storeData_inValidDataInputDataString
export const cstoreData_inValidDataInputMetaDataString = cstoreData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // storeData_inValidDataInputMetaDataString
export const cstoreData_inValidInputDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // storeData_inValidInputDataInteger
export const cstoreData_inValidInputDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // storeData_inValidInputDataBoolean
export const cstoreData_inValidInputMetaDataInteger = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // storeData_inValidInputMetaDataInteger
export const cstoreData_inValidInputMetaDataBoolean = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // storeData_inValidInputMetaDataBoolean
export const cstoreData_inValidInputMetaDataUndefined = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // storeData_inValidInputMetaDataUndefined
export const cstoreData_inValidInputMetaDataNaN = cstoreData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // storeData_inValidInputMetaDataNaN

export const cgetStoredData_validDataString = cgetStoredData + wrd.cvalid + wrd.cData + wrd.cString; // getStoredData_validDataString
export const cgetStoredData_inValidDataInputDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getStoredData_inValidDataInputDataString
export const cgetStoredData_inValidDataInputMetaDataString = cgetStoredData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getStoredData_inValidDataInputMetaDataString
export const cgetStoredData_inValidInputDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getStoredData_inValidInputDataInteger
export const cgetStoredData_inValidInputDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getStoredData_inValidInputDataBoolean
export const cgetStoredData_inValidInputMetaDataInteger = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getStoredData_inValidInputMetaDataInteger
export const cgetStoredData_inValidInputMetaDataBoolean = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getStoredData_inValidInputMetaDataBoolean
export const cgetStoredData_inValidInputDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getStoredData_inValidInputDataUndefined
export const cgetStoredData_inValidInputDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getStoredData_inValidInputDataNaN
export const cgetStoredData_inValidInputMetaDataUndefined = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // getStoredData_inValidInputMetaDataUndefined
export const cgetStoredData_inValidInputMetaDataNaN = cgetStoredData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // getStoredData_inValidInputMetaDataNaN

export const cisObjectEmpty_validDataString = cisObjectEmpty + wrd.cvalid + wrd.cData + wrd.cString; // isObjectEmpty_validDataString
export const cisObjectEmpty_inValidDataInputDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isObjectEmpty_inValidDataInputDataString
export const cisObjectEmpty_inValidDataInputMetaDataString = cisObjectEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isObjectEmpty_inValidDataInputMetaDataString
export const cisObjectEmpty_inValidInputDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isObjectEmpty_inValidInputDataInteger
export const cisObjectEmpty_inValidInputDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isObjectEmpty_inValidInputDataBoolean
export const cisObjectEmpty_inValidInputMetaDataInteger = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isObjectEmpty_inValidInputMetaDataInteger
export const cisObjectEmpty_inValidInputMetaDataBoolean = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isObjectEmpty_inValidInputMetaDataBoolean
export const cisObjectEmpty_inValidInputDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isObjectEmpty_inValidInputDataUndefined
export const cisObjectEmpty_inValidInputDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isObjectEmpty_inValidInputDataNaN
export const cisObjectEmpty_inValidInputMetaDataUndefined = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isObjectEmpty_inValidInputMetaDataUndefined
export const cisObjectEmpty_inValidInputMetaDataNaN = cisObjectEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isObjectEmpty_inValidInputMetaDataNaN

export const cisArrayEmpty_validDataString = cisArrayEmpty + wrd.cvalid + wrd.cData + wrd.cString; // isArrayEmpty_validDataString
export const cisArrayEmpty_inValidDataInputDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isArrayEmpty_inValidDataInputDataString
export const cisArrayEmpty_inValidDataInputMetaDataString = cisArrayEmpty + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isArrayEmpty_inValidDataInputMetaDataString
export const cisArrayEmpty_inValidInputDataInteger = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isArrayEmpty_inValidInputDataInteger
export const cisArrayEmpty_inValidInputDataBoolean = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isArrayEmpty_inValidInputDataBoolean
export const cisArrayEmpty_inValidInputDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isArrayEmpty_inValidInputDataUndefined
export const cisArrayEmpty_inValidInputDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isArrayEmpty_inValidInputDataNaN
export const cisArrayEmpty_inValidInputMetaDataUndefined = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isArrayEmpty_inValidInputMetaDataUndefined
export const cisArrayEmpty_inValidInputMetaDataNaN = cisArrayEmpty + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isArrayEmpty_inValidInputMetaDataNaN

export const cisObject_validDataObject = cisObject + wrd.cvalid + wrd.cData + wrd.cObject; // isObject_validDataObject
export const cisObject_validDataArray = cisObject + wrd.cvalid + wrd.cData + wrd.cArray; // isObject_validDataArray
export const cisObject_inValidDataInputDataString = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isObject_inValidDataInputDataString
export const cisObject_inValidInputDataInteger = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger; // isObject_inValidInputDataInteger
export const cisObject_inValidInputDataBoolean = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean; // isObject_inValidInputDataBoolean
export const cisObject_inValidInputDataUndefined = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined; // isObject_inValidInputDataUndefined
export const cisObject_inValidInputDataNaN = cisObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN; // isObject_inValidInputDataNaN

export const cisArray_validDataObject = cisArray + wrd.cvalid + wrd.cData + wrd.cObject; // isArray_validDataObject
export const cisArray_validDataArray = cisArray + wrd.cvalid + wrd.cData + wrd.cArray; // isArray_validDataArray
export const cisArray_inValidDataInputDataString = cisArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isArray_inValidDataInputDataString
export const cisArray_inValidInputDataInteger = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isArray_inValidInputDataInteger
export const cisArray_inValidInputDataBoolean = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isArray_inValidInputDataBoolean
export const cisArray_inValidInputDataUndefined = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isArray_inValidInputDataUndefined
export const cisArray_inValidInputDataNaN = cisArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isArray_inValidInputDataNaN

export const cisArrayOrObject_validDataObject = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cObject; // isArrayOrObject_validDataObject
export const cisArrayOrObject_validDataArray = cisArrayOrObject + wrd.cvalid + wrd.cData + wrd.cArray; // isArrayOrObject_validDataArray
export const cisArrayOrObject_inValidDataInputDataString = cisArrayOrObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isArrayOrObject_inValidDataInputDataString
export const cisArrayOrObject_inValidInputDataInteger = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isArrayOrObject_inValidInputDataInteger
export const cisArrayOrObject_inValidInputDataBoolean = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isArrayOrObject_inValidInputDataBoolean
export const cisArrayOrObject_inValidInputDataUndefined = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isArrayOrObject_inValidInputDataUndefined
export const cisArrayOrObject_inValidInputDataNaN = cisArrayOrObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isArrayOrObject_inValidInputDataNaN

export const cisNonZeroLengthArray_validDataObject = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cObject; // isNonZeroLengthArray_validDataObject
export const cisNonZeroLengthArray_validDataArray = cisNonZeroLengthArray + wrd.cvalid + wrd.cData + wrd.cArray; // isNonZeroLengthArray_validDataArray
export const cisNonZeroLengthArray_inValidDataInputDataString = cisNonZeroLengthArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isNonZeroLengthArray_inValidDataInputDataString
export const cisNonZeroLengthArray_inValidInputDataInteger = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isNonZeroLengthArray_inValidInputDataInteger
export const cisNonZeroLengthArray_inValidInputDataBoolean = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isNonZeroLengthArray_inValidInputDataBoolean
export const cisNonZeroLengthArray_inValidInputDataUndefined = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isNonZeroLengthArray_inValidInputDataUndefined
export const cisNonZeroLengthArray_inValidInputDataNaN = cisNonZeroLengthArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isNonZeroLengthArray_inValidInputDataNaN

export const carrayDeepClone_validDataString = carrayDeepClone + wrd.cvalid + wrd.cData + wrd.cString; // arrayDeepClone_validDataString
export const carrayDeepClone_inValidDataInputDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // arrayDeepClone_inValidDataInputDataString
export const carrayDeepClone_inValidDataInputMetaDataString = carrayDeepClone + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // arrayDeepClone_inValidDataInputMetaDataString
export const carrayDeepClone_inValidInputDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // arrayDeepClone_inValidInputDataInteger
export const carrayDeepClone_inValidInputDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // arrayDeepClone_inValidInputDataBoolean
export const carrayDeepClone_inValidInputMetaDataInteger = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // arrayDeepClone_inValidInputMetaDataInteger
export const carrayDeepClone_inValidInputMetaDataBoolean = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // arrayDeepClone_inValidInputMetaDataBoolean
export const carrayDeepClone_inValidInputDataUndefined = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // arrayDeepClone_inValidInputDataUndefined
export const carrayDeepClone_inValidInputDataNaN = carrayDeepClone + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // arrayDeepClone_inValidInputDataNaN

export const cobjectDeepMerge_validDataObject = cobjectDeepMerge + wrd.cvalid + wrd.cData + wrd.cObject; // objectDeepMerge_validDataObject
export const cobjectDeepMerge_inValidDataInputDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // objectDeepMerge_inValidDataInputDataString
export const cobjectDeepMerge_inValidDataInputMetaDataString = cobjectDeepMerge + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // objectDeepMerge_inValidDataInputMetaDataString
export const cobjectDeepMerge_inValidInputDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // objectDeepMerge_inValidInputDataInteger
export const cobjectDeepMerge_inValidInputDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // objectDeepMerge_inValidInputDataBoolean
export const cobjectDeepMerge_inValidInputMetaDataInteger = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // objectDeepMerge_inValidInputMetaDataInteger
export const cobjectDeepMerge_inValidInputMetaDataBoolean = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // objectDeepMerge_inValidInputMetaDataBoolean
export const cobjectDeepMerge_inValidInputDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // objectDeepMerge_inValidInputDataUndefined
export const cobjectDeepMerge_inValidInputDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // objectDeepMerge_inValidInputDataNaN
export const cobjectDeepMerge_inValidInputMetaDataUndefined = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // objectDeepMerge_inValidInputMetaDataUndefined
export const cobjectDeepMerge_inValidInputMetaDataNaN = cobjectDeepMerge + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // objectDeepMerge_inValidInputMetaDataNaN

export const cgetNamespacedDataObject_validDataString = cgetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString; // getNamespacedDataObject_validDataString
export const cgetNamespacedDataObject_inValidDataInputMetaDataString = cgetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getNamespacedDataObject_inValidDataInputMetaDataString
export const cgetNamespacedDataObject_inValidDataInputDataString = cgetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getNamespacedDataObject_inValidDataInputDataString
export const cgetNamespacedDataObject_inValidInputDataInteger = cgetNamespacedDataObject + wrd.cinvalid + wrd.cinput + wrd.cData + wrd.cInteger; // getNamespacedDataObject_inValidInputDataInteger
export const cgetNamespacedDataObject_inValidInputDataBoolean = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getNamespacedDataObject_inValidInputDataBoolean
export const cgetNamespacedDataObject_inValidInputMetaDataInteger = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getNamespacedDataObject_inValidInputMetaDataInteger
export const cgetNamespacedDataObject_inValidInputMetaDataBoolean = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getNamespacedDataObject_inValidInputMetaDataBoolean
export const cgetNamespacedDataObject_inValidInputDataUndefined = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getNamespacedDataObject_inValidInputDataUndefined
export const cgetNamespacedDataObject_inValidInputDataNaN = cgetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getNamespacedDataObject_inValidInputDataNaN

export const csetNamespacedDataObject_validDataString = csetNamespacedDataObject + wrd.cvalid + wrd.cData + wrd.cString; // setNamespacedDataObject_validDataString
export const csetNamespacedDataObject_inValidDataInputMetaDataString = csetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // setNamespacedDataObject_inValidDataInputMetaDataString
export const csetNamespacedDataObject_inValidInputDataInteger = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // setNamespacedDataObject_inValidInputDataInteger
export const csetNamespacedDataObject_inValidInputDataBoolean = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // setNamespacedDataObject_inValidInputDataBoolean
export const csetNamespacedDataObject_inValidInputDataNaN = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // setNamespacedDataObject_inValidInputDataNaN
export const csetNamespacedDataObject_inValidDataInputDataString = csetNamespacedDataObject + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // setNamespacedDataObject_inValidDataInputDataString
export const csetNamespacedDataObject_inValidInputMetaDataInteger = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // setNamespacedDataObject_inValidInputMetaDataInteger
export const csetNamespacedDataObject_inValidInputMetaDataBoolean = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // setNamespacedDataObject_inValidInputMetaDataBoolean
export const csetNamespacedDataObject_inValidInputDataUndefined = csetNamespacedDataObject + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // setNamespacedDataObject_inValidInputDataUndefined

/* pathArrayParsing */
export const cdoesArrayContainFilename_validDataString = cdoesArrayContainFilename + wrd.cvalid + wrd.cData + wrd.cString; // doesArrayContainFilename_validDataString
export const cdoesArrayContainFilename_inValidDataInputDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesArrayContainFilename_inValidDataInputDataString
export const cdoesArrayContainFilename_inValidDataInputMetaDataString = cdoesArrayContainFilename + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesArrayContainFilename_inValidDataInputMetaDataString
export const cdoesArrayContainFilename_inValidInputDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesArrayContainFilename_inValidInputDataInteger
export const cdoesArrayContainFilename_inValidInputDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesArrayContainFilename_inValidInputDataBoolean
export const cdoesArrayContainFilename_inValidInputMetaDataInteger = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesArrayContainFilename_inValidInputMetaDataInteger
export const cdoesArrayContainFilename_inValidInputMetaDataBoolean = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesArrayContainFilename_inValidInputMetaDataBoolean
export const cdoesArrayContainFilename_inValidInputDataUndefined = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // doesArrayContainFilename_inValidInputDataUndefined
export const cdoesArrayContainFilename_inValidInputDataNaN = cdoesArrayContainFilename + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // doesArrayContainFilename_inValidInputDataNaN

export const cgetFileAndPathListForPath_validDataString = cgetFileAndPathListForPath + wrd.cvalid + wrd.cData + wrd.cString; // getFileAndPathListForPath_validDataString
export const cgetFileAndPathListForPath_inValidDataInputDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getFileAndPathListForPath_inValidDataInputDataString
export const cgetFileAndPathListForPath_inValidDataInputMetaDataString = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getFileAndPathListForPath_inValidDataInputMetaDataString
export const cgetFileAndPathListForPath_inValidInputDataInteger = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getFileAndPathListForPath_inValidInputDataInteger
export const cgetFileAndPathListForPath_inValidInputDataBoolean = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getFileAndPathListForPath_inValidInputDataBoolean
export const cgetFileAndPathListForPath_inValidInputMetaDataInteger = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getFileAndPathListForPath_inValidInputMetaDataInteger
export const cgetFileAndPathListForPath_inValidInputMetaDataBoolean = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getFileAndPathListForPath_inValidInputMetaDataBoolean
export const cgetFileAndPathListForPath_inValidInputDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getFileAndPathListForPath_inValidInputDataUndefined
export const cgetFileAndPathListForPath_inValidInputDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getFileAndPathListForPath_inValidInputDataNaN
export const cgetFileAndPathListForPath_inValidInputMetaDataUndefined = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // getFileAndPathListForPath_inValidInputMetaDataUndefined
export const cgetFileAndPathListForPath_inValidInputMetaDataNaN = cgetFileAndPathListForPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // getFileAndPathListForPath_inValidInputMetaDataNaN

/* wordArrayParsing */
export const cconvertCamelCaseStringToArray_validDataString = cconvertCamelCaseStringToArray + wrd.cvalid + wrd.cData + wrd.cString; // convertCamelCaseStringToArray_validDataString
export const cconvertCamelCaseStringToArray_inValidDataInputDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertCamelCaseStringToArray_inValidDataInputDataString
export const cconvertCamelCaseStringToArray_inValidDataInputMetaDataString = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertCamelCaseStringToArray_inValidDataInputMetaDataString
export const CconvertCamelCaseStringToArray_inValidInputDataInteger = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertCamelCaseStringToArray_inValidInputDataInteger
export const cconvertCamelCaseStringToArray_inValidInputDataBoolean = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertCamelCaseStringToArray_inValidInputDataBoolean
export const cconvertCamelCaseStringToArray_inValidInputMetaDataInteger = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertCamelCaseStringToArray_inValidInputMetaDataInteger
export const cconvertCamelCaseStringToArray_inValidInputMetaDataBoolean = cconvertCamelCaseStringToArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertCamelCaseStringToArray_inValidInputMetaDataBoolean

export const cgetWordsArrayFromString_validDataString = cgetWordsArrayFromString + wrd.cvalid + wrd.cData + wrd.cString; // getWordsArrayFromString_validDataString
export const cgetWordsArrayFromString_inValidDataInputDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getWordsArrayFromString_inValidDataInputDataString
export const cgetWordsArrayFromString_inValidDataInputMetaDataString = cgetWordsArrayFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getWordsArrayFromString_inValidDataInputMetaDataString
export const cgetWordsArrayFromString_inValidInputDataBoolean = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getWordsArrayFromString_inValidInputDataBoolean
export const cgetWordsArrayFromString_inValidInputDataInteger = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getWordsArrayFromString_inValidInputDataInteger
export const cgetWordsArrayFromString_inValidInputMetaDataInteger = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getWordsArrayFromString_inValidInputMetaDataInteger
export const cgetWordsArrayFromString_inValidInputMetaDataBoolean = cgetWordsArrayFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getWordsArrayFromString_inValidInputMetaDataBoolean

export const crecombineStringArrayWithSpaces_validDataString = crecombineStringArrayWithSpaces + wrd.cvalid + wrd.cData + wrd.cString; // recombineStringArrayWithSpaces_validDataString
export const crecombineStringArrayWithSpaces_inValidDataInputMetaDataString = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // recombineStringArrayWithSpaces_inValidDataInputMetaDataString
export const crecombineStringArrayWithSpaces_inValidInputDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // recombineStringArrayWithSpaces_inValidInputDataBoolean
export const crecombineStringArrayWithSpaces_inValidInputMetaDataInteger = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // recombineStringArrayWithSpaces_inValidInputMetaDataInteger
export const crecombineStringArrayWithSpaces_inValidInputMetaDataBoolean = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // recombineStringArrayWithSpaces_inValidInputMetaDataBoolean
export const crecombineStringArrayWithSpaces_inValidInputDataUndefined = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // recombineStringArrayWithSpaces_inValidInputDataUndefined
export const crecombineStringArrayWithSpaces_inValidInputDataNaN = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // recombineStringArrayWithSpaces_inValidInputDataNaN
export const crecombineStringArrayWithSpaces_inValidDataInputDataString = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // recombineStringArrayWithSpaces_inValidDataInputDataString
export const crecombineStringArrayWithSpaces_inValidInputDataInteger = crecombineStringArrayWithSpaces + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // recombineStringArrayWithSpaces_inValidInputDataInteger

export const cconvertArrayToCamelCaseString_validDataString = cconvertArrayToCamelCaseString + wrd.cvalid + wrd.cData + wrd.cString; // convertArrayToCamelCaseString_validDataString
export const cconvertArrayToCamelCaseString_inValidDataInputDataString = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertArrayToCamelCaseString_inValidDataInputDataString
export const cconvertArrayToCamelCaseString_inValidDataInputMetaDataString = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertArrayToCamelCaseString_inValidDataInputMetaDataString
export const cconvertArrayToCamelCaseString_inValidInputDataInteger = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertArrayToCamelCaseString_inValidInputDataInteger
export const cconvertArrayToCamelCaseString_inValidInputDataBoolean = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertArrayToCamelCaseString_inValidInputDataBoolean
export const cconvertArrayToCamelCaseString_inValidInputMetaDataInteger = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertArrayToCamelCaseString_inValidInputMetaDataInteger
export const cconvertArrayToCamelCaseString_inValidInputMetaDataBoolean = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertArrayToCamelCaseString_inValidInputMetaDataBoolean
export const cconvertArrayToCamelCaseString_inValidInputDataUndefined = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // convertArrayToCamelCaseString_inValidInputDataUndefined
export const cconvertArrayToCamelCaseString_inValidInputDataNaN = cconvertArrayToCamelCaseString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // convertArrayToCamelCaseString_inValidInputDataNaN

export const cdoesArrayContainLowerCaseConsolidatedString_validDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cvalid + wrd.cData + wrd.cString; // doesArrayContainLowerCaseConsolidatedString_validDataString
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesArrayContainLowerCaseConsolidatedString_inValidDataInputDataString
export const cdoesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesArrayContainLowerCaseConsolidatedString_inValidDataInputMetaDataString
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesArrayContainLowerCaseConsolidatedString_inValidInputDataInteger
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesArrayContainLowerCaseConsolidatedString_inValidInputDataBoolean
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataInteger = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataInteger
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesArrayContainLowerCaseConsolidatedString_inValidInputMetaDataBoolean
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // doesArrayContainLowerCaseConsolidatedString_inValidInputDataUndefined
export const cdoesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN = cdoesArrayContainLowerCaseConsolidatedString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // doesArrayContainLowerCaseConsolidatedString_inValidInputDataNaN

export const cascertainMatchingElements_validDataString = cascertainMatchingElements + wrd.cvalid + wrd.cData + wrd.cString; // ascertainMatchingElements_validDataString
export const cascertainMatchingElements_inValidDataInputDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // ascertainMatchingElements_inValidDataInputDataString
export const cascertainMatchingElements_inValidDataInputMetaDataString = cascertainMatchingElements + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // ascertainMatchingElements_inValidDataInputMetaDataString
export const cascertainMatchingElements_inValidInputDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // ascertainMatchingElements_inValidInputDataInteger
export const cascertainMatchingElements_inValidInputDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // ascertainMatchingElements_inValidInputDataBoolean
export const cascertainMatchingElements_inValidInputMetaDataInteger = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // ascertainMatchingElements_inValidInputMetaDataInteger
export const cascertainMatchingElements_inValidInputMetaDataBoolean = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // ascertainMatchingElements_inValidInputMetaDataBoolean
export const cascertainMatchingElements_inValidInputDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // ascertainMatchingElements_inValidInputDataUndefined
export const cascertainMatchingElements_inValidInputDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // ascertainMatchingElements_inValidInputDataNaN
export const cascertainMatchingElements_inValidInputMetaDataUndefined = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // ascertainMatchingElements_inValidInputMetaDataUndefined
export const cascertainMatchingElements_inValidInputMetaDataNaN = cascertainMatchingElements + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // ascertainMatchingElements_inValidInputMetaDataNaN

/* characterStringParsing */
export const csingleQuoteSwapAfterEquals_validDataString = csingleQuoteSwapAfterEquals + wrd.cvalid + wrd.cData + wrd.cString; // singleQuoteSwapAfterEquals_validDataString
export const csingleQuoteSwapAfterEquals_inValidDataInputDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // singleQuoteSwapAfterEquals_inValidDataInputDataString
export const csingleQuoteSwapAfterEquals_inValidDataInputMetaDataString = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // singleQuoteSwapAfterEquals_inValidDataInputMetaDataString
export const csingleQuoteSwapAfterEquals_inValidInputDataInteger = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // singleQuoteSwapAfterEquals_inValidInputDataInteger
export const csingleQuoteSwapAfterEquals_inValidInputDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // singleQuoteSwapAfterEquals_inValidInputDataBoolean
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataInteger = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // singleQuoteSwapAfterEquals_inValidInputMetaDataInteger
export const csingleQuoteSwapAfterEquals_inValidInputMetaDataBoolean = csingleQuoteSwapAfterEquals + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // singleQuoteSwapAfterEquals_inValidInputMetaDataBoolean

export const cswapForwardSlashToBackSlash_validDataString = cswapForwardSlashToBackSlash + wrd.cvalid + wrd.cData + wrd.cString; // swapForwardSlashToBackSlash_validDataString
export const cswapForwardSlashToBackSlash_inValidDataInputDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // swapForwardSlashToBackSlash_inValidDataInputDataString
export const cswapForwardSlashToBackSlash_inValidDataInputMetaDataString = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // swapForwardSlashToBackSlash_inValidDataInputMetaDataString
export const cswapForwardSlashToBackSlash_inValidInputDataInteger = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // swapForwardSlashToBackSlash_inValidInputDataInteger
export const cswapForwardSlashToBackSlash_inValidInputDataBoolean = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // swapForwardSlashToBackSlash_inValidInputDataBoolean
export const cswapForwardSlashToBackSlash_inValidInputMetaDataInteger = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // swapForwardSlashToBackSlash_inValidInputMetaDataInteger
export const cswapForwardSlashToBackSlash_inValidInputMetaDataBoolean = cswapForwardSlashToBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // swapForwardSlashToBackSlash_inValidInputMetaDataBoolean

export const cswapBackSlashToForwardSlash_validDataString = cswapBackSlashToForwardSlash + wrd.cvalid + wrd.cData + wrd.cString; // swapBackSlashToForwardSlash_validDataString
export const cswapBackSlashToForwardSlash_inValidDataInputDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // swapBackSlashToForwardSlash_inValidDataInputDataString
export const cswapBackSlashToForwardSlash_inValidDataInputMetaDataString = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // swapBackSlashToForwardSlash_inValidDataInputMetaDataString
export const cswapBackSlashToForwardSlash_inValidInputDataInteger = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // swapBackSlashToForwardSlash_inValidInputDataInteger
export const cswapBackSlashToForwardSlash_inValidInputDataBoolean = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // swapBackSlashToForwardSlash_inValidInputDataBoolean
export const cswapBackSlashToForwardSlash_inValidInputMetaDataInteger = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // swapBackSlashToForwardSlash_inValidInputMetaDataInteger
export const cswapBackSlashToForwardSlash_inValidInputMetaDataBoolean = cswapBackSlashToForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // swapBackSlashToForwardSlash_inValidInputMetaDataBoolean

export const cswapDoubleForwardSlashToSingleForwardSlash_validDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cvalid + wrd.cData + wrd.cString; // swapDoubleForwardSlashToSingleForwardSlash_validDataString
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // swapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // swapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataInteger = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataInteger
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataInteger = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // swapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataInteger
export const cswapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataBoolean = cswapDoubleForwardSlashToSingleForwardSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // swapDoubleForwardSlashToSingleForwardSlash_inValidInputMetaDataBoolean

export const cswapDoubleBackSlashToSingleBackSlash_validDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cvalid + wrd.cData + wrd.cString; // swapDoubleBackSlashToSingleBackSlash_validDataString
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // swapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString
export const cswapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // swapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputDataInteger = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // swapDoubleBackSlashToSingleBackSlash_inValidInputDataInteger
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // swapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataInteger = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // swapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataInteger
export const cswapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataBoolean = cswapDoubleBackSlashToSingleBackSlash + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // swapDoubleBackSlashToSingleBackSlash_inValidInputMetaDataBoolean

export const creplaceSpacesWithPlus_validDataString = creplaceSpacesWithPlus + wrd.cvalid + wrd.cData + wrd.cString; // replaceSpacesWithPlus_validDataString
export const creplaceSpacesWithPlus_inValidDataInputDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceSpacesWithPlus_inValidDataInputDataString
export const creplaceSpacesWithPlus_inValidDataInputMetaDataString = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceSpacesWithPlus_inValidDataInputMetaDataString
export const creplaceSpacesWithPlus_inValidInputDataInteger = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // replaceSpacesWithPlus_inValidInputDataInteger
export const creplaceSpacesWithPlus_inValidInputDataBoolean = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // replaceSpacesWithPlus_inValidInputDataBoolean
export const creplaceSpacesWithPlus_inValidInputMetaDataInteger = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // replaceSpacesWithPlus_inValidInputMetaDataInteger
export const creplaceSpacesWithPlus_inValidInputMetaDataBoolean = creplaceSpacesWithPlus + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // replaceSpacesWithPlus_inValidInputMetaDataBoolean

export const creplaceColonWithUnderscore_validDataString = creplaceColonWithUnderscore + wrd.cvalid + wrd.cData + wrd.cString; // replaceColonWithUnderscore_validDataString
export const creplaceColonWithUnderscore_inValidDataInputDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceColonWithUnderscore_inValidDataInputDataString
export const creplaceColonWithUnderscore_inValidDataInputMetaDataString = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceColonWithUnderscore_inValidDataInputMetaDataString
export const creplaceColonWithUnderscore_inValidInputDataInteger = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // replaceColonWithUnderscore_inValidInputDataInteger
export const creplaceColonWithUnderscore_inValidInputDataBoolean = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // replaceColonWithUnderscore_inValidInputDataBoolean
export const creplaceColonWithUnderscore_inValidInputMetaDataInteger = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // replaceColonWithUnderscore_inValidInputMetaDataInteger
export const creplaceColonWithUnderscore_inValidInputMetaDataBoolean = creplaceColonWithUnderscore + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // replaceColonWithUnderscore_inValidInputMetaDataBoolean

export const ccleanCarriageReturnFromString_validDataString = ccleanCarriageReturnFromString + wrd.cvalid + wrd.cData + wrd.cString; // cleanCarriageReturnFromString_validDataString
export const ccleanCarriageReturnFromString_inValidDataInputDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // cleanCarriageReturnFromString_inValidDataInputDataString
export const ccleanCarriageReturnFromString_inValidDataInputMetaDataString = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cString; // cleanCarriageReturnFromString_inValidDataInputMetaDataString
export const ccleanCarriageReturnFromString_inValidInputDataInteger = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // cleanCarriageReturnFromString_inValidInputDataInteger
export const ccleanCarriageReturnFromString_inValidInputDataBoolean = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // cleanCarriageReturnFromString_inValidInputDataBoolean
export const ccleanCarriageReturnFromString_inValidInputMetaDataInteger = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // cleanCarriageReturnFromString_inValidInputMetaDataInteger
export const ccleanCarriageReturnFromString_inValidInputMetaDataBoolean = ccleanCarriageReturnFromString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // cleanCarriageReturnFromString_inValidInputMetaDataBoolean

export const cconvertStringToLowerCase_validDataString = cconvertStringToLowerCase + wrd.cvalid + wrd.cData + wrd.cString; // convertStringToLowerCase_validDataString
export const cconvertStringToLowerCase_inValidDataInputDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertStringToLowerCase_inValidDataInputDataString
export const cconvertStringToLowerCase_inValidDataInputMetaDataString = cconvertStringToLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertStringToLowerCase_inValidDataInputMetaDataString
export const cconvertStringToLowerCase_inValidInputDataInteger = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertStringToLowerCase_inValidInputDataInteger
export const cconvertStringToLowerCase_inValidInputDataBoolean = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertStringToLowerCase_inValidInputDataBoolean
export const cconvertStringToLowerCase_inValidInputMetaDataInteger = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertStringToLowerCase_inValidInputMetaDataInteger
export const cconvertStringToLowerCase_inValidInputMetaDataBoolean = cconvertStringToLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertStringToLowerCase_inValidInputMetaDataBoolean

export const cconvertStringToUpperCase_validDataString = cconvertStringToUpperCase + wrd.cvalid + wrd.cData + wrd.cString; // convertStringToUpperCase_validDataString
export const cconvertStringToUpperCase_inValidDataInputDataString = cconvertStringToUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertStringToUpperCase_inValidDataInputDataString
export const cconvertStringToUpperCase_inValidDataInputMetaDataString = cconvertStringToUpperCase + wrd.cinvalid  + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertStringToUpperCase_inValidDataInputMetaDataString
export const cconvertStringToUpperCase_inValidInputDataInteger = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertStringToUpperCase_inValidInputDataInteger
export const cconvertStringToUpperCase_inValidInputDataBoolean = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertStringToUpperCase_inValidInputDataBoolean
export const cconvertStringToUpperCase_inValidInputMetaDataInteger = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertStringToUpperCase_inValidInputMetaDataInteger
export const cconvertStringToUpperCase_inValidInputMetaDataBoolean = cconvertStringToUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertStringToUpperCase_inValidInputMetaDataBoolean

export const cdoesStringContainUpperCaseCharacter_validDataString = cdoesStringContainUpperCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString; // doesStringContainUpperCaseCharacter_validDataString
export const cdoesStringContainUpperCaseCharacter_inValidDataInputDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesStringContainUpperCaseCharacter_inValidDataInputDataString
export const cdoesStringContainUpperCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesStringContainUpperCaseCharacter_inValidDataInputMetaDataString
export const cdoesStringContainUpperCaseCharacter_inValidInputDataInteger = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesStringContainUpperCaseCharacter_inValidInputDataInteger
export const cdoesStringContainUpperCaseCharacter_inValidInputDataBoolean = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesStringContainUpperCaseCharacter_inValidInputDataBoolean
export const cdoesStringContainUpperCaseCharacter_inValidInputMetaDataInteger = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesStringContainUpperCaseCharacter_inValidInputMetaDataInteger
export const cdoesStringContainUpperCaseCharacter_inValidInputMetaDataBoolean = cdoesStringContainUpperCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesStringContainUpperCaseCharacter_inValidInputMetaDataBoolean

export const cdoesStringContainLowerCaseCharacter_validDataString = cdoesStringContainLowerCaseCharacter + wrd.cvalid + wrd.cData + wrd.cString; // doesStringContainLowerCaseCharacter_validDataString
export const cdoesStringContainLowerCaseCharacter_inValidDataInputDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesStringContainLowerCaseCharacter_inValidDataInputDataString
export const cdoesStringContainLowerCaseCharacter_inValidDataInputMetaDataString = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesStringContainLowerCaseCharacter_inValidDataInputMetaDataString
export const cdoesStringContainLowerCaseCharacter_inValidInputDataInteger = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesStringContainLowerCaseCharacter_inValidInputDataInteger
export const cdoesStringContainLowerCaseCharacter_inValidInputDataBoolean = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesStringContainLowerCaseCharacter_inValidInputDataBoolean
export const cdoesStringContainLowerCaseCharacter_inValidInputMetaDataInteger = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesStringContainLowerCaseCharacter_inValidInputMetaDataInteger
export const cdoesStringContainLowerCaseCharacter_inValidInputMetaDataBoolean = cdoesStringContainLowerCaseCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesStringContainLowerCaseCharacter_inValidInputMetaDataBoolean

export const cisFirstCharacterLowerCase_validDataString = cisFirstCharacterLowerCase + wrd.cvalid + wrd.cData + wrd.cString; // isFirstCharacterLowerCase_validDataString
export const cisFirstCharacterLowerCase_inValidDataInputDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isFirstCharacterLowerCase_inValidDataInputDataString
export const cisFirstCharacterLowerCase_inValidDataInputMetaDataString = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isFirstCharacterLowerCase_inValidDataInputMetaDataString
export const cisFirstCharacterLowerCase_inValidInputDataInteger = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isFirstCharacterLowerCase_inValidInputDataInteger
export const cisFirstCharacterLowerCase_inValidInputDataBoolean = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isFirstCharacterLowerCase_inValidInputDataBoolean
export const cisFirstCharacterLowerCase_inValidInputMetaDataInteger = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isFirstCharacterLowerCase_inValidInputMetaDataInteger
export const cisFirstCharacterLowerCase_inValidInputMetaDataBoolean = cisFirstCharacterLowerCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isFirstCharacterLowerCase_inValidInputMetaDataBoolean

export const cisFirstCharacterUpperCase_validDataString = cisFirstCharacterUpperCase + wrd.cvalid + wrd.cData + wrd.cString; // isFirstCharacterUpperCase_validDataString
export const cisFirstCharacterUpperCase_inValidDataInputDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isFirstCharacterUpperCase_inValidDataInputDataString
export const cisFirstCharacterUpperCase_inValidDataInputMetaDataString = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isFirstCharacterUpperCase_inValidDataInputMetaDataString
export const cisFirstCharacterUpperCase_inValidInputDataInteger = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isFirstCharacterUpperCase_inValidInputDataInteger
export const cisFirstCharacterUpperCase_inValidInputDataBoolean = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isFirstCharacterUpperCase_inValidInputDataBoolean
export const cisFirstCharacterUpperCase_inValidInputMetaDataInteger = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isFirstCharacterUpperCase_inValidInputMetaDataInteger
export const cisFirstCharacterUpperCase_inValidInputMetaDataBoolean = cisFirstCharacterUpperCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isFirstCharacterUpperCase_inValidInputMetaDataBoolean

export const creplaceCharacterAtIndexOfString_validDataString = creplaceCharacterAtIndexOfString + wrd.cvalid + wrd.cData + wrd.cString; // replaceCharacterAtIndexOfString_validDataString
export const creplaceCharacterAtIndexOfString_inValidDataInputDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceCharacterAtIndexOfString_inValidDataInputDataString
export const creplaceCharacterAtIndexOfString_inValidDataInputMetaDataString = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceCharacterAtIndexOfString_inValidDataInputMetaDataString
export const creplaceCharacterAtIndexOfString_inValidInputDataInteger = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // replaceCharacterAtIndexOfString_inValidInputDataInteger
export const creplaceCharacterAtIndexOfString_inValidInputDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // replaceCharacterAtIndexOfString_inValidInputDataBoolean
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataInteger = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // replaceCharacterAtIndexOfString_inValidInputMetaDataInteger
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataBoolean = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // replaceCharacterAtIndexOfString_inValidInputMetaDataBoolean
export const creplaceCharacterAtIndexOfString_inValidInputDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // replaceCharacterAtIndexOfString_inValidInputDataUndefined
export const creplaceCharacterAtIndexOfString_inValidInputDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // replaceCharacterAtIndexOfString_inValidInputDataNaN
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataUndefined = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // replaceCharacterAtIndexOfString_inValidInputMetaDataUndefined
export const creplaceCharacterAtIndexOfString_inValidInputMetaDataNaN = creplaceCharacterAtIndexOfString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // replaceCharacterAtIndexOfString_inValidInputMetaDataNaN

/* commandStringParsing */
export const ccleanCommandInput_validDataString = ccleanCommandInput + wrd.cvalid + wrd.cData + wrd.cString; // cleanCommandInput_validDataString
export const ccleanCommandInput_inValidDataInputDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // cleanCommandInput_inValidDataInputDataString
export const ccleanCommandInput_inValidDataInputMetaDataString = ccleanCommandInput + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // cleanCommandInput_inValidDataInputMetaDataString
export const ccleanCommandInput_inValidInputDataInteger = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // cleanCommandInput_inValidInputDataInteger
export const ccleanCommandInput_inValidInputDataBoolean = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // cleanCommandInput_inValidInputDataBoolean
export const ccleanCommandInput_inValidInputMetaDataInteger = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // cleanCommandInput_inValidInputMetaDataInteger
export const ccleanCommandInput_inValidInputMetaDataBoolean = ccleanCommandInput + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // cleanCommandInput_inValidInputMetaDataBoolean

export const cisValidCommandNameString_validDataString = cisValidCommandNameString + wrd.cvalid + wrd.cData + wrd.cString; // isValidCommandNameString_validDataString
export const cisValidCommandNameString_inValidDataInputDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isValidCommandNameString_inValidDataInputDataString
export const cisValidCommandNameString_inValidDataInputMetaDataString = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isValidCommandNameString_inValidDataInputMetaDataString
export const cisValidCommandNameString_inValidInputDataInteger = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger; // isValidCommandNameString_inValidInputDataInteger
export const cisValidCommandNameString_inValidInputDataBoolean = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean; // isValidCommandNameString_inValidInputDataBoolean
export const cisValidCommandNameString_inValidInputMetaDataInteger = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isValidCommandNameString_inValidInputMetaDataInteger
export const cisValidCommandNameString_inValidInputMetaDataBoolean = cisValidCommandNameString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isValidCommandNameString_inValidInputMetaDataBoolean

/* constantStringParsing */
export const cvalidateConstantsDataValidation_validDataString = cvalidateConstantsDataValidation + wrd.cvalid + wrd.cData + wrd.cString; // validateConstantsDataValidation_validDataString
export const cvalidateConstantsDataValidation_inValidDataInputDataString = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // validateConstantsDataValidation_inValidDataInputDataString
export const cvalidateConstantsDataValidation_inValidDataInputMetaDataString = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // validateConstantsDataValidation_inValidDataInputMetaDataString
export const cvalidateConstantsDataValidation_inValidInputDataInteger = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // validateConstantsDataValidation_inValidInputDataInteger
export const cvalidateConstantsDataValidation_inValidInputDataBoolean = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // validateConstantsDataValidation_inValidInputDataBoolean
export const cvalidateConstantsDataValidation_inValidInputMetaDataInteger = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // validateConstantsDataValidation_inValidInputMetaDataInteger
export const cvalidateConstantsDataValidation_inValidInputMetaDataBoolean = cvalidateConstantsDataValidation + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // validateConstantsDataValidation_inValidInputMetaDataBoolean

export const cdetermineConstantsContextQualifiedPrefix_validDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cvalid + wrd.cData + wrd.cString; // determineConstantsContextQualifiedPrefix_validDataString
export const cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // determineConstantsContextQualifiedPrefix_inValidDataInputDataString
export const cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // determineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString
export const cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // determineConstantsContextQualifiedPrefix_inValidInputDataInteger
export const cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
export const cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
export const cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean = cdetermineConstantsContextQualifiedPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean

export const cdetermineSuggestedConstantsValidationLineOfCode_validDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cvalid + wrd.cData + wrd.cString; // determineSuggestedConstantsValidationLineOfCode_validDataString
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // determineSuggestedConstantsValidationLineOfCode_inValidDataInputDataString
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // determineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // determineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // determineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger
export const cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean = cdetermineSuggestedConstantsValidationLineOfCode + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean

export const cvalidateConstantsDataValidationLineItemName_validDataString = cvalidateConstantsDataValidationLineItemName + wrd.cvalid + wrd.cData + wrd.cString; // validateConstantsDataValidationLineItemName_validDataString
export const cvalidateConstantsDataValidationLineItemName_inValidDataInputDataString = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // validateConstantsDataValidationLineItemName_inValidDataInputDataString
export const cvalidateConstantsDataValidationLineItemName_inValidDataInputMetaDataString = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // validateConstantsDataValidationLineItemName_inValidDataInputMetaDataString
export const cvalidateConstantsDataValidationLineItemName_inValidInputDataInteger = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // validateConstantsDataValidationLineItemName_inValidInputDataInteger
export const cvalidateConstantsDataValidationLineItemName_inValidInputDataBoolean = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // validateConstantsDataValidationLineItemName_inValidInputDataBoolean
export const cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataInteger = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // validateConstantsDataValidationLineItemName_inValidInputMetaDataInteger
export const cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean = cvalidateConstantsDataValidationLineItemName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // validateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean

export const cdoesConstantExist_validDataString = cdoesConstantExist + wrd.cvalid + wrd.cData + wrd.cString; // doesConstantExist_validDataString
export const cdoesConstantExist_inValidDataInputDataString = cdoesConstantExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesConstantExist_inValidDataInputDataString
export const cdoesConstantExist_inValidDataInputMetaDataString = cdoesConstantExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesConstantExist_inValidDataInputMetaDataString
export const cdoesConstantExist_inValidInputDataInteger = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesConstantExist_inValidInputDataInteger
export const cdoesConstantExist_inValidInputDataBoolean = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesConstantExist_inValidInputDataBoolean
export const cdoesConstantExist_inValidInputMetaDataInteger = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesConstantExist_inValidInputMetaDataInteger
export const cdoesConstantExist_inValidInputMetaDataBoolean = cdoesConstantExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesConstantExist_inValidInputMetaDataBoolean

export const cgetConstantType_validDataString = cgetConstantType + wrd.cvalid + wrd.cData + wrd.cString; // getConstantType_validDataString
export const cgetConstantType_inValidDataInputDataString = cgetConstantType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getConstantType_inValidDataInputDataString
export const cgetConstantType_inValidDataInputMetaDataString = cgetConstantType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getConstantType_inValidDataInputMetaDataString
export const cgetConstantType_inValidInputDataInteger = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getConstantType_inValidInputDataInteger
export const cgetConstantType_inValidInputDataBoolean = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getConstantType_inValidInputDataBoolean
export const cgetConstantType_inValidInputMetaDataInteger = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getConstantType_inValidInputMetaDataInteger
export const cgetConstantType_inValidInputMetaDataBoolean = cgetConstantType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getConstantType_inValidInputMetaDataBoolean

export const cgetConstantActualValue_validDataString = cgetConstantActualValue + wrd.cvalid + wrd.cData + wrd.cString; // getConstantActualValue_validDataString
export const cgetConstantActualValue_inValidDataInputDataString = cgetConstantActualValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getConstantActualValue_inValidDataInputDataString
export const cgetConstantActualValue_inValidDataInputMetaDataString = cgetConstantActualValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getConstantActualValue_inValidDataInputMetaDataString
export const cgetConstantActualValue_inValidInputDataInteger = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getConstantActualValue_inValidInputDataInteger
export const cgetConstantActualValue_inValidInputDataBoolean = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getConstantActualValue_inValidInputDataBoolean
export const cgetConstantActualValue_inValidInputMetaDataInteger = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getConstantActualValue_inValidInputMetaDataInteger
export const cgetConstantActualValue_inValidInputMetaDataBoolean = cgetConstantActualValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getConstantActualValue_inValidInputMetaDataBoolean

export const cgetConstantName_validDataString = cgetConstantName + wrd.cvalid + wrd.cData + wrd.cString; // getConstantName_validDataString
export const cgetConstantName_inValidDataInputDataString = cgetConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getConstantName_inValidDataInputDataString
export const cgetConstantName_inValidDataInputMetaDataString = cgetConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getConstantName_inValidDataInputMetaDataString
export const cgetConstantName_inValidInputDataInteger = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getConstantName_inValidInputDataInteger
export const cgetConstantName_inValidInputDataBoolean = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getConstantName_inValidInputDataBoolean
export const cgetConstantName_inValidInputMetaDataInteger = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getConstantName_inValidInputMetaDataInteger
export const cgetConstantName_inValidInputMetaDataBoolean = cgetConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getConstantName_inValidInputMetaDataBoolean

export const cfindConstantName_validDataString = cfindConstantName + wrd.cvalid + wrd.cData + wrd.cString; // findConstantName_validDataString
export const cfindConstantName_inValidDataInputDataString = cfindConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // findConstantName_inValidDataInputDataString
export const cfindConstantName_inValidDataInputMetaDataString = cfindConstantName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // findConstantName_inValidDataInputMetaDataString
export const cfindConstantName_inValidInputDataInteger = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // findConstantName_inValidInputDataInteger
export const cfindConstantName_inValidInputDataBoolean = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // findConstantName_inValidInputDataBoolean
export const cfindConstantName_inValidInputMetaDataInteger = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // findConstantName_inValidInputMetaDataInteger
export const cfindConstantName_inValidInputMetaDataBoolean = cfindConstantName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // findConstantName_inValidInputMetaDataBoolean

export const cisConstantTypeValid_validDataString = cisConstantTypeValid + wrd.cvalid + wrd.cData + wrd.cString; // isConstantTypeValid_validDataString
export const cisConstantTypeValid_inValidDataInputDataString = cisConstantTypeValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isConstantTypeValid_inValidDataInputDataString
export const cisConstantTypeValid_inValidDataInputMetaDataString = cisConstantTypeValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isConstantTypeValid_inValidDataInputMetaDataString
export const cisConstantTypeValid_inValidInputDataInteger = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isConstantTypeValid_inValidInputDataInteger
export const cisConstantTypeValid_inValidInputDataBoolean = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isConstantTypeValid_inValidInputDataBoolean
export const cisConstantTypeValid_inValidInputMetaDataInteger = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isConstantTypeValid_inValidInputMetaDataInteger
export const cisConstantTypeValid_inValidInputMetaDataBoolean = cisConstantTypeValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isConstantTypeValid_inValidInputMetaDataBoolean

export const cconvertConstantTypeToConstantPrefix_validDataString = cconvertConstantTypeToConstantPrefix + wrd.cvalid + wrd.cData + wrd.cString; // convertConstantTypeToConstantPrefix_validDataString
export const cconvertConstantTypeToConstantPrefix_inValidDataInputDataString = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertConstantTypeToConstantPrefix_inValidDataInputDataString
export const cconvertConstantTypeToConstantPrefix_inValidDataInputMetaDataString = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertConstantTypeToConstantPrefix_inValidDataInputMetaDataString
export const cconvertConstantTypeToConstantPrefix_inValidInputDataInteger = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertConstantTypeToConstantPrefix_inValidInputDataInteger
export const cconvertConstantTypeToConstantPrefix_inValidInputDataBoolean = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertConstantTypeToConstantPrefix_inValidInputDataBoolean
export const cconvertConstantTypeToConstantPrefix_inValidInputMetaDataInteger = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertConstantTypeToConstantPrefix_inValidInputMetaDataInteger
export const cconvertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean = cconvertConstantTypeToConstantPrefix + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean

export const cconstantsOptimizedFulfillmentSystem_validDataString = cconstantsOptimizedFulfillmentSystem + wrd.cvalid + wrd.cData + wrd.cString; // constantsOptimizedFulfillmentSystem_validDataString
export const cconstantsOptimizedFulfillmentSystem_inValidDataInputDataString = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // constantsOptimizedFulfillmentSystem_inValidDataInputDataString
export const cconstantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // constantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString
export const cconstantsOptimizedFulfillmentSystem_inValidInputDataInteger = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // constantsOptimizedFulfillmentSystem_inValidInputDataInteger
export const cconstantsOptimizedFulfillmentSystem_inValidInputDataBoolean = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // constantsOptimizedFulfillmentSystem_inValidInputDataBoolean
export const cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataInteger = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // constantsOptimizedFulfillmentSystem_inValidInputMetaDataInteger
export const cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataBoolean = cconstantsOptimizedFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // constantsOptimizedFulfillmentSystem_inValidInputMetaDataBoolean

export const cconstantsFulfillmentSystem_validDataString = cconstantsFulfillmentSystem + wrd.cvalid + wrd.cData + wrd.cString; // constantsFulfillmentSystem_validDataString
export const cconstantsFulfillmentSystem_inValidDataInputDataString = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // constantsFulfillmentSystem_inValidDataInputDataString
export const cconstantsFulfillmentSystem_inValidDataInputMetaDataString = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // constantsFulfillmentSystem_inValidDataInputMetaDataString
export const cconstantsFulfillmentSystem_inValidInputDataInteger = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // constantsFulfillmentSystem_inValidInputDataInteger
export const cconstantsFulfillmentSystem_inValidInputDataBoolean = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // constantsFulfillmentSystem_inValidInputDataBoolean
export const cconstantsFulfillmentSystem_inValidInputMetaDataInteger = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // constantsFulfillmentSystem_inValidInputMetaDataInteger
export const cconstantsFulfillmentSystem_inValidInputMetaDataBoolean = cconstantsFulfillmentSystem + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // constantsFulfillmentSystem_inValidInputMetaDataBoolean

export const cvalidateConstantsDataValues_validDataString = cvalidateConstantsDataValues + wrd.cvalid + wrd.cData + wrd.cString; // validateConstantsDataValues_validDataString
export const cvalidateConstantsDataValues_inValidDataInputDataString = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // validateConstantsDataValues_inValidDataInputDataString
export const cvalidateConstantsDataValues_inValidDataInputMetaDataString = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // validateConstantsDataValues_inValidDataInputMetaDataString
export const cvalidateConstantsDataValues_inValidInputDataInteger = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // validateConstantsDataValues_inValidInputDataInteger
export const cvalidateConstantsDataValues_inValidInputDataBoolean = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // validateConstantsDataValues_inValidInputDataBoolean
export const cvalidateConstantsDataValues_inValidInputMetaDataInteger = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // validateConstantsDataValues_inValidInputMetaDataInteger
export const cvalidateConstantsDataValues_inValidInputMetaDataBoolean = cvalidateConstantsDataValues + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // validateConstantsDataValues_inValidInputMetaDataBoolean

export const cisConstantValid_validDataString = cisConstantValid + wrd.cvalid + wrd.cData + wrd.cString; // isConstantValid_validDataString
export const cisConstantValid_inValidDataInputDataString = cisConstantValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isConstantValid_inValidDataInputDataString
export const cisConstantValid_inValidDataInputMetaDataString = cisConstantValid + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isConstantValid_inValidDataInputMetaDataString
export const cisConstantValid_inValidInputDataInteger = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isConstantValid_inValidInputDataInteger
export const cisConstantValid_inValidInputDataBoolean = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isConstantValid_inValidInputDataBoolean
export const cisConstantValid_inValidInputMetaDataInteger = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isConstantValid_inValidInputMetaDataInteger
export const cisConstantValid_inValidInputMetaDataBoolean = cisConstantValid + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isConstantValid_inValidInputMetaDataBoolean

/* dataStringParsing */
export const cgetAttributeName_validDataString = cgetAttributeName + wrd.cValid + wrd.cData + wrd.cString; // getAttributeName_validDataString
export const cgetAttributeName_inValidDataInputDataString = cgetAttributeName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getAttributeName_inValidDataInputDataString
export const cgetAttributeName_inValidDataInputMetaDataString = cgetAttributeName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getAttributeName_inValidDataInputMetaDataString
export const cgetAttributeName_inValidInputDataInteger = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getAttributeName_inValidInputDataInteger
export const cgetAttributeName_inValidInputDataBoolean = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getAttributeName_inValidInputDataBoolean
export const cgetAttributeName_inValidInputMetaDataInteger = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getAttributeName_inValidInputMetaDataInteger
export const cgetAttributeName_inValidInputMetaDataBoolean = cgetAttributeName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getAttributeName_inValidInputMetaDataBoolean

export const cgetAttributeValue_validDataString = cgetAttributeValue + wrd.cvalid + wrd.cData + wrd.cString; // getAttributeValue_validDataString
export const cgetAttributeValue_inValidDataInputDataString = cgetAttributeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getAttributeValue_inValidDataInputDataString
export const cgetAttributeValue_inValidDataInputMetaDataString = cgetAttributeValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getAttributeValue_inValidDataInputMetaDataString
export const cgetAttributeValue_inValidInputDataInteger = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getAttributeValue_inValidInputDataInteger
export const cgetAttributeValue_inValidInputDataBoolean = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getAttributeValue_inValidInputDataBoolean
export const cgetAttributeValue_inValidInputMetaDataInteger = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getAttributeValue_inValidInputMetaDataInteger
export const cgetAttributeValue_inValidInputMetaDataBoolean = cgetAttributeValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getAttributeValue_inValidInputMetaDataBoolean

export const cgetValueFromAssignmentOperationString_validDataString = cgetValueFromAssignmentOperationString + wrd.cvalid + wrd.cData + wrd.cString; // getValueFromAssignmentOperationString_validDataString
export const cgetValueFromAssignmentOperationString_inValidDataInputDataString = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getValueFromAssignmentOperationString_inValidDataInputDataString
export const cgetValueFromAssignmentOperationString_inValidDataInputMetaDataString = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getValueFromAssignmentOperationString_inValidDataInputMetaDataString
export const cgetValueFromAssignmentOperationString_inValidInputDataInteger = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getValueFromAssignmentOperationString_inValidInputDataInteger
export const cgetValueFromAssignmentOperationString_inValidInputDataBoolean = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getValueFromAssignmentOperationString_inValidInputDataBoolean
export const cgetValueFromAssignmentOperationString_inValidInputMetaDataInteger = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getValueFromAssignmentOperationString_inValidInputMetaDataInteger
export const cgetValueFromAssignmentOperationString_inValidInputMetaDataBoolean = cgetValueFromAssignmentOperationString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getValueFromAssignmentOperationString_inValidInputMetaDataBoolean

export const cgetDataCategoryFromDataContextName_validDataString = cgetDataCategoryFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString; // getDataCategoryFromDataContextName_validDataString
export const cgetDataCategoryFromDataContextName_inValidDataInputDataString = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getDataCategoryFromDataContextName_inValidDataInputDataString
export const cgetDataCategoryFromDataContextName_inValidDataInputMetaDataString = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getDataCategoryFromDataContextName_inValidDataInputMetaDataString
export const cgetDataCategoryFromDataContextName_inValidInputDataInteger = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getDataCategoryFromDataContextName_inValidInputDataInteger
export const cgetDataCategoryFromDataContextName_inValidInputDataBoolean = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getDataCategoryFromDataContextName_inValidInputDataBoolean
export const cgetDataCategoryFromDataContextName_inValidInputMetaDataInteger = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getDataCategoryFromDataContextName_inValidInputMetaDataInteger
export const cgetDataCategoryFromDataContextName_inValidInputMetaDataBoolean = cgetDataCategoryFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getDataCategoryFromDataContextName_inValidInputMetaDataBoolean

export const cgetDataCategoryDetailNameFromDataContextName_validDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString; // getDataCategoryDetailNameFromDataContextName_validDataString
export const cgetDataCategoryDetailNameFromDataContextName_inValidDataInputDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getDataCategoryDetailNameFromDataContextName_inValidDataInputDataString
export const cgetDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputDataInteger = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getDataCategoryDetailNameFromDataContextName_inValidInputDataInteger
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataInteger = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getDataCategoryDetailNameFromDataContextName_inValidInputMetaDataInteger
export const cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataBoolean = cgetDataCategoryDetailNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getDataCategoryDetailNameFromDataContextName_inValidInputMetaDataBoolean

export const cgetKeywordNameFromDataContextName_validDataString = cgetKeywordNameFromDataContextName + wrd.cvalid + wrd.cData + wrd.cString; // getKeywordNameFromDataContextName_validDataString
export const cgetKeywordNameFromDataContextName_inValidDataInputDataString = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getKeywordNameFromDataContextName_inValidDataInputDataString
export const cgetKeywordNameFromDataContextName_inValidDataInputMetaDataString = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getKeywordNameFromDataContextName_inValidDataInputMetaDataString
export const cgetKeywordNameFromDataContextName_inValidInputDataInteger = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getKeywordNameFromDataContextName_inValidInputDataInteger
export const cgetKeywordNameFromDataContextName_inValidInputDataBoolean = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getKeywordNameFromDataContextName_inValidInputDataBoolean
export const cgetKeywordNameFromDataContextName_inValidInputMetaDataInteger = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getKeywordNameFromDataContextName_inValidInputMetaDataInteger
export const cgetKeywordNameFromDataContextName_inValidInputMetaDataBoolean = cgetKeywordNameFromDataContextName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getKeywordNameFromDataContextName_inValidInputMetaDataBoolean

export const cloadDataFile_validDataString = cloadDataFile + wrd.cvalid + wrd.cData + wrd.cString; // loadDataFile_validDataString
export const cloadDataFile_inValidDataInputDataString = cloadDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // loadDataFile_inValidDataInputDataString
export const cloadDataFile_inValidDataInputMetaDataString = cloadDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // loadDataFile_inValidDataInputMetaDataString
export const cloadDataFile_inValidInputDataInteger = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // loadDataFile_inValidInputDataInteger
export const cloadDataFile_inValidInputDataBoolean = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // loadDataFile_inValidInputDataBoolean
export const cloadDataFile_inValidInputMetaDataInteger = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // loadDataFile_inValidInputMetaDataInteger
export const cloadDataFile_inValidInputMetaDataBoolean = cloadDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // loadDataFile_inValidInputMetaDataBoolean

export const csaveDataFile_validDataString = csaveDataFile + wrd.cvalid + wrd.cData + wrd.cString; // saveDataFile_validDataString
export const csaveDataFile_inValidDataInputDataString = csaveDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // saveDataFile_inValidDataInputDataString
export const csaveDataFile_inValidDataInputMetaDataString = csaveDataFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // saveDataFile_inValidDataInputMetaDataString
export const csaveDataFile_inValidInputDataInteger = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // saveDataFile_inValidInputDataInteger
export const csaveDataFile_inValidInputDataBoolean = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // saveDataFile_inValidInputDataBoolean
export const csaveDataFile_inValidInputMetaDataInteger = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // saveDataFile_inValidInputMetaDataInteger
export const csaveDataFile_inValidInputMetaDataBoolean = csaveDataFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // saveDataFile_inValidInputMetaDataBoolean

export const cgetUserNameFromEmail_validDataString = cgetUserNameFromEmail + wrd.cvalid + wrd.cData + wrd.cString; // getUserNameFromEmail_validDataString
export const cgetUserNameFromEmail_inValidDataInputDataString = cgetUserNameFromEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getUserNameFromEmail_inValidDataInputDataString
export const cgetUserNameFromEmail_inValidDataInputMetaDataString = cgetUserNameFromEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getUserNameFromEmail_inValidDataInputMetaDataString
export const cgetUserNameFromEmail_inValidInputDataInteger = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getUserNameFromEmail_inValidInputDataInteger
export const cgetUserNameFromEmail_inValidInputDataBoolean = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getUserNameFromEmail_inValidInputDataBoolean
export const cgetUserNameFromEmail_inValidInputMetaDataInteger = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getUserNameFromEmail_inValidInputMetaDataInteger
export const cgetUserNameFromEmail_inValidInputMetaDataBoolean = cgetUserNameFromEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getUserNameFromEmail_inValidInputMetaDataBoolean

/* fileStringParsing */
export const cgetFileNameFromPath_validDataString = cgetFileNameFromPath + wrd.cvalid + wrd.cData + wrd.cString; // getFileNameFromPath_validDataString
export const cgetFileNameFromPath_inValidDataInputDataString = cgetFileNameFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getFileNameFromPath_inValidDataInputDataString
export const cgetFileNameFromPath_inValidDataInputMetaDataString = cgetFileNameFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getFileNameFromPath_inValidDataInputMetaDataString
export const cgetFileNameFromPath_inValidInputDataInteger = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getFileNameFromPath_inValidInputDataInteger
export const cgetFileNameFromPath_inValidInputDataBoolean = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getFileNameFromPath_inValidInputDataBoolean
export const cgetFileNameFromPath_inValidInputMetaDataInteger = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getFileNameFromPath_inValidInputMetaDataInteger
export const cgetFileNameFromPath_inValidInputMetaDataBoolean = cgetFileNameFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getFileNameFromPath_inValidInputMetaDataBoolean

export const cgetFileExtension_validDataString = cgetFileExtension + wrd.cvalid + wrd.cData + wrd.cString; // getFileExtension_validDataString
export const cgetFileExtension_inValidDataInputDataString = cgetFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getFileExtension_inValidDataInputDataString
export const cgetFileExtension_inValidDataInputMetaDataString = cgetFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getFileExtension_inValidDataInputMetaDataString
export const cgetFileExtension_inValidInputDataInteger = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getFileExtension_inValidInputDataInteger
export const cgetFileExtension_inValidInputDataBoolean = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getFileExtension_inValidInputDataBoolean
export const cgetFileExtension_inValidInputMetaDataInteger = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getFileExtension_inValidInputMetaDataInteger
export const cgetFileExtension_inValidInputMetaDataBoolean = cgetFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getFileExtension_inValidInputMetaDataBoolean

export const cremoveDotFromFileExtension_validDataString = cremoveDotFromFileExtension + wrd.cvalid + wrd.cData + wrd.cString; // removeDotFromFileExtension_validDataString
export const cremoveDotFromFileExtension_inValidDataInputDataString = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // removeDotFromFileExtension_inValidDataInputDataString
export const cremoveDotFromFileExtension_inValidDataInputMetaDataString = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // removeDotFromFileExtension_inValidDataInputMetaDataString
export const cremoveDotFromFileExtension_inValidInputDataInteger = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // removeDotFromFileExtension_inValidInputDataInteger
export const cremoveDotFromFileExtension_inValidInputDataBoolean = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // removeDotFromFileExtension_inValidInputDataBoolean
export const cremoveDotFromFileExtension_inValidInputMetaDataInteger = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // removeDotFromFileExtension_inValidInputMetaDataInteger
export const cremoveDotFromFileExtension_inValidInputMetaDataBoolean = cremoveDotFromFileExtension + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // removeDotFromFileExtension_inValidInputMetaDataBoolean

export const cremoveFileExtensionFromFileName_validDataString = cremoveFileExtensionFromFileName + wrd.cvalid + wrd.cData + wrd.cString; // removeFileExtensionFromFileName_validDataString
export const cremoveFileExtensionFromFileName_inValidDataInputDataString = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // removeFileExtensionFromFileName_inValidDataInputDataString
export const cremoveFileExtensionFromFileName_inValidDataInputMetaDataString = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // removeFileExtensionFromFileName_inValidDataInputMetaDataString
export const cremoveFileExtensionFromFileName_inValidInputDataInteger = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // removeFileExtensionFromFileName_inValidInputDataInteger
export const cremoveFileExtensionFromFileName_inValidInputDataBoolean = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // removeFileExtensionFromFileName_inValidInputDataBoolean
export const cremoveFileExtensionFromFileName_inValidInputMetaDataInteger = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // removeFileExtensionFromFileName_inValidInputMetaDataInteger
export const cremoveFileExtensionFromFileName_inValidInputMetaDataBoolean = cremoveFileExtensionFromFileName + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // removeFileExtensionFromFileName_inValidInputMetaDataBoolean

export const cascertainMatchingFilenames_validDataString = cascertainMatchingFilenames + wrd.cvalid + wrd.cData + wrd.cString; // ascertainMatchingFilenames_validDataString
export const cascertainMatchingFilenames_inValidDataInputDataString = cascertainMatchingFilenames + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // ascertainMatchingFilenames_inValidDataInputDataString
export const cascertainMatchingFilenames_inValidDataInputMetaDataString = cascertainMatchingFilenames + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // ascertainMatchingFilenames_inValidDataInputMetaDataString
export const cascertainMatchingFilenames_inValidInputDataInteger = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // ascertainMatchingFilenames_inValidInputDataInteger
export const cascertainMatchingFilenames_inValidInputDataBoolean = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // ascertainMatchingFilenames_inValidInputDataBoolean
export const cascertainMatchingFilenames_inValidInputMetaDataInteger = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // ascertainMatchingFilenames_inValidInputMetaDataInteger
export const cascertainMatchingFilenames_inValidInputMetaDataBoolean = cascertainMatchingFilenames + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // ascertainMatchingFilenames_inValidInputMetaDataBoolean

export const csupportedFileFormatsAre_validDataString = csupportedFileFormatsAre + wrd.cvalid + wrd.cData + wrd.cString; // supportedFileFormatsAre_validDataString
export const csupportedFileFormatsAre_inValidDataInputDataString = csupportedFileFormatsAre + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // supportedFileFormatsAre_inValidDataInputDataString
export const csupportedFileFormatsAre_inValidDataInputMetaDataString = csupportedFileFormatsAre + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // supportedFileFormatsAre_inValidDataInputMetaDataString
export const csupportedFileFormatsAre_inValidInputDataInteger = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // supportedFileFormatsAre_inValidInputDataInteger
export const csupportedFileFormatsAre_inValidInputDataBoolean = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // supportedFileFormatsAre_inValidInputDataBoolean
export const csupportedFileFormatsAre_inValidInputMetaDataInteger = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // supportedFileFormatsAre_inValidInputMetaDataInteger
export const csupportedFileFormatsAre_inValidInputMetaDataBoolean = csupportedFileFormatsAre + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // supportedFileFormatsAre_inValidInputMetaDataBoolean

export const cremoveXnumberOfFoldersFromEndOfPath_validDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cvalid + wrd.cData + wrd.cString; // removeXnumberOfFoldersFromEndOfPath_validDataString
export const cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // removeXnumberOfFoldersFromEndOfPath_inValidDataInputDataString
export const cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // removeXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataInteger = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // removeXnumberOfFoldersFromEndOfPath_inValidInputDataInteger
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // removeXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger
export const cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataBoolean = cremoveXnumberOfFoldersFromEndOfPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataBoolean

export const cgetFirstTopLevelFolderFromPath_validDataString = cgetFirstTopLevelFolderFromPath + wrd.cvalid + wrd.cData + wrd.cString; // getFirstTopLevelFolderFromPath_validDataString
export const cgetFirstTopLevelFolderFromPath_inValidDataInputDataString = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getFirstTopLevelFolderFromPath_inValidDataInputDataString
export const cgetFirstTopLevelFolderFromPath_inValidDataInputMetaDataString = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getFirstTopLevelFolderFromPath_inValidDataInputMetaDataString
export const cgetFirstTopLevelFolderFromPath_inValidInputDataInteger = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getFirstTopLevelFolderFromPath_inValidInputDataInteger
export const cgetFirstTopLevelFolderFromPath_inValidInputDataBoolean = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getFirstTopLevelFolderFromPath_inValidInputDataBoolean
export const cgetFirstTopLevelFolderFromPath_inValidInputMetaDataInteger = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getFirstTopLevelFolderFromPath_inValidInputMetaDataInteger
export const cgetFirstTopLevelFolderFromPath_inValidInputMetaDataBoolean = cgetFirstTopLevelFolderFromPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getFirstTopLevelFolderFromPath_inValidInputMetaDataBoolean

/* wordStringParsing */
export const cisStringCamelCase_validDataString = cisStringCamelCase + wrd.cvalid + wrd.cData + wrd.cString; // isStringCamelCase_validDataString
export const cisStringCamelCase_inValidDataInputDataString = cisStringCamelCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isStringCamelCase_inValidDataInputDataString
export const cisStringCamelCase_inValidDataInputMetaDataString = cisStringCamelCase + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isStringCamelCase_inValidDataInputMetaDataString
export const cisStringCamelCase_inValidInputDataInteger = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isStringCamelCase_inValidInputDataInteger
export const cisStringCamelCase_inValidInputDataBoolean = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isStringCamelCase_inValidInputDataBoolean
export const cisStringCamelCase_inValidInputMetaDataInteger = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isStringCamelCase_inValidInputMetaDataInteger
export const cisStringCamelCase_inValidInputMetaDataBoolean = cisStringCamelCase + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isStringCamelCase_inValidInputMetaDataBoolean

export const cmapWordToCamelCaseWord_validDataString = cmapWordToCamelCaseWord + wrd.cvalid + wrd.cData + wrd.cString; // mapWordToCamelCaseWord_validDataString
export const cmapWordToCamelCaseWord_inValidDataInputDataString = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // mapWordToCamelCaseWord_inValidDataInputDataString
export const cmapWordToCamelCaseWord_inValidDataInputMetaDataString = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // mapWordToCamelCaseWord_inValidDataInputMetaDataString
export const cmapWordToCamelCaseWord_inValidInputDataInteger = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // mapWordToCamelCaseWord_inValidInputDataInteger
export const cmapWordToCamelCaseWord_inValidInputDataBoolean = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // mapWordToCamelCaseWord_inValidInputDataBoolean
export const cmapWordToCamelCaseWord_inValidInputMetaDataInteger = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // mapWordToCamelCaseWord_inValidInputMetaDataInteger
export const cmapWordToCamelCaseWord_inValidInputMetaDataBoolean = cmapWordToCamelCaseWord + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // mapWordToCamelCaseWord_inValidInputMetaDataBoolean

export const csimplifyAndConsolidateString_validDataString = csimplifyAndConsolidateString + wrd.cvalid + wrd.cData + wrd.cString; // simplifyAndConsolidateString_validDataString
export const csimplifyAndConsolidateString_inValidDataInputDataString = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // simplifyAndConsolidateString_inValidDataInputDataString
export const csimplifyAndConsolidateString_inValidDataInputMetaDataString = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // simplifyAndConsolidateString_inValidDataInputMetaDataString
export const csimplifyAndConsolidateString_inValidInputDataInteger = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // simplifyAndConsolidateString_inValidInputDataInteger
export const csimplifyAndConsolidateString_inValidInputDataBoolean = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // simplifyAndConsolidateString_inValidInputDataBoolean
export const csimplifyAndConsolidateString_inValidInputMetaDataInteger = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // simplifyAndConsolidateString_inValidInputMetaDataInteger
export const csimplifyAndConsolidateString_inValidInputMetaDataBoolean = csimplifyAndConsolidateString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // simplifyAndConsolidateString_inValidInputMetaDataBoolean

export const ccompareSimplifiedAndConsolidatedStrings_validDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cvalid + wrd.cData + wrd.cString; // compareSimplifiedAndConsolidatedStrings_validDataString
export const ccompareSimplifiedAndConsolidatedStrings_inValidDataInputDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // compareSimplifiedAndConsolidatedStrings_inValidDataInputDataString
export const ccompareSimplifiedAndConsolidatedStrings_inValidDataInputMetaDataString = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // compareSimplifiedAndConsolidatedStrings_inValidDataInputMetaDataString
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputDataInteger = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // compareSimplifiedAndConsolidatedStrings_inValidInputDataInteger
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputDataBoolean = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // compareSimplifiedAndConsolidatedStrings_inValidInputDataBoolean
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputMetaDataInteger = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // compareSimplifiedAndConsolidatedStrings_inValidInputMetaDataInteger
export const ccompareSimplifiedAndConsolidatedStrings_inValidInputMetaDataBoolean = ccompareSimplifiedAndConsolidatedStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // compareSimplifiedAndConsolidatedStrings_inValidInputMetaDataBoolean

export const ccountCamelCaseWords_validDataString = ccountCamelCaseWords + wrd.cvalid + wrd.cData + wrd.cString; // countCamelCaseWords_validDataString
export const ccountCamelCaseWords_inValidDataInputDataString = ccountCamelCaseWords + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // countCamelCaseWords_inValidDataInputDataString
export const ccountCamelCaseWords_inValidDataInputMetaDataString = ccountCamelCaseWords + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // countCamelCaseWords_inValidDataInputMetaDataString
export const ccountCamelCaseWords_inValidInputDataInteger = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // countCamelCaseWords_inValidInputDataInteger
export const ccountCamelCaseWords_inValidInputDataBoolean = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // countCamelCaseWords_inValidInputDataBoolean
export const ccountCamelCaseWords_inValidInputMetaDataInteger = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // countCamelCaseWords_inValidInputMetaDataInteger
export const ccountCamelCaseWords_inValidInputMetaDataBoolean = ccountCamelCaseWords + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // countCamelCaseWords_inValidInputMetaDataBoolean

export const cdoesStringContainAcronym_validDataString = cdoesStringContainAcronym + wrd.cvalid + wrd.cData + wrd.cString; // doesStringContainAcronym_validDataString
export const cdoesStringContainAcronym_inValidDataInputDataString = cdoesStringContainAcronym + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesStringContainAcronym_inValidDataInputDataString
export const cdoesStringContainAcronym_inValidDataInputMetaDataString = cdoesStringContainAcronym + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesStringContainAcronym_inValidDataInputMetaDataString
export const cdoesStringContainAcronym_inValidInputDataInteger = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesStringContainAcronym_inValidInputDataInteger
export const cdoesStringContainAcronym_inValidInputDataBoolean = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesStringContainAcronym_inValidInputDataBoolean
export const cdoesStringContainAcronym_inValidInputMetaDataInteger = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesStringContainAcronym_inValidInputMetaDataInteger
export const cdoesStringContainAcronym_inValidInputMetaDataBoolean = cdoesStringContainAcronym + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesStringContainAcronym_inValidInputMetaDataBoolean

export const cdetermineWordDelimiter_validDataString = cdetermineWordDelimiter + wrd.cvalid + wrd.cData + wrd.cString; // determineWordDelimiter_validDataString
export const cdetermineWordDelimiter_inValidDataInputDataString = cdetermineWordDelimiter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // determineWordDelimiter_inValidDataInputDataString
export const cdetermineWordDelimiter_inValidDataInputMetaDataString = cdetermineWordDelimiter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // determineWordDelimiter_inValidDataInputMetaDataString
export const cdetermineWordDelimiter_inValidInputDataInteger = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // determineWordDelimiter_inValidInputDataInteger
export const cdetermineWordDelimiter_inValidInputDataBoolean = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // determineWordDelimiter_inValidInputDataBoolean
export const cdetermineWordDelimiter_inValidInputMetaDataInteger = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // determineWordDelimiter_inValidInputMetaDataInteger
export const cdetermineWordDelimiter_inValidInputMetaDataBoolean = cdetermineWordDelimiter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // determineWordDelimiter_inValidInputMetaDataBoolean

export const ccountDelimiterInString_validDataString = ccountDelimiterInString + wrd.cvalid + wrd.cData + wrd.cString; // countDelimiterInString_validDataString
export const ccountDelimiterInString_inValidDataInputDataString = ccountDelimiterInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // countDelimiterInString_inValidDataInputDataString
export const ccountDelimiterInString_inValidDataInputMetaDataString = ccountDelimiterInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // countDelimiterInString_inValidDataInputMetaDataString
export const ccountDelimiterInString_inValidInputDataInteger = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // countDelimiterInString_inValidInputDataInteger
export const ccountDelimiterInString_inValidInputDataBoolean = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // countDelimiterInString_inValidInputDataBoolean
export const ccountDelimiterInString_inValidInputMetaDataInteger = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // countDelimiterInString_inValidInputMetaDataInteger
export const ccountDelimiterInString_inValidInputMetaDataBoolean = ccountDelimiterInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // countDelimiterInString_inValidInputMetaDataBoolean

export const cgetWordCountInString_validDataString = cgetWordCountInString + wrd.cvalid + wrd.cData + wrd.cString; // getWordCountInString_validDataString
export const cgetWordCountInString_inValidDataInputDataString = cgetWordCountInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getWordCountInString_inValidDataInputDataString
export const cgetWordCountInString_inValidDataInputMetaDataString = cgetWordCountInString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getWordCountInString_inValidDataInputMetaDataString
export const cgetWordCountInString_inValidInputDataInteger = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getWordCountInString_inValidInputDataInteger
export const cgetWordCountInString_inValidInputDataBoolean = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getWordCountInString_inValidInputDataBoolean
export const cgetWordCountInString_inValidInputMetaDataInteger = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getWordCountInString_inValidInputMetaDataInteger
export const cgetWordCountInString_inValidInputMetaDataBoolean = cgetWordCountInString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getWordCountInString_inValidInputMetaDataBoolean

export const cisStringList_validDataString = cisStringList + wrd.cvalid + wrd.cData + wrd.cString; // isStringList_validDataString
export const cisStringList_inValidDataInputDataString = cisStringList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isStringList_inValidDataInputDataString
export const cisStringList_inValidDataInputMetaDataString = cisStringList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isStringList_inValidDataInputMetaDataString
export const cisStringList_inValidInputDataInteger = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isStringList_inValidInputDataInteger
export const cisStringList_inValidInputDataBoolean = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isStringList_inValidInputDataBoolean
export const cisStringList_inValidInputMetaDataInteger = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isStringList_inValidInputMetaDataInteger
export const cisStringList_inValidInputMetaDataBoolean = cisStringList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isStringList_inValidInputMetaDataBoolean

export const caggregateNumericalDifferenceBetweenTwoStrings_validDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cvalid + wrd.cData + wrd.cString; // aggregateNumericalDifferenceBetweenTwoStrings_validDataString
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // aggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputDataString
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputMetaDataString = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // aggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputMetaDataString
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataInteger = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // aggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataInteger
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataBoolean = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // aggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataBoolean
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataInteger = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // aggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataInteger
export const caggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataBoolean = caggregateNumericalDifferenceBetweenTwoStrings + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // aggregateNumericalDifferenceBetweenTwoStrings_inValidInputMetaDataBoolean

/* characterGeneration */
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_validDataString
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_validDataString
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_validDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_validDataString
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseLetterOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_validDataString
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_validDataString
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_validDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_validDataString
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateMixedCaseAlphaNumericCharacter_validDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphaNumericCharacter_validDataString
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputDataString
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataInteger
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataBoolean
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateUpperCaseAlphaNumericCharacter_validDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseAlphaNumericCharacter_validDataString
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputDataString
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataInteger
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataBoolean
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateLowerCaseAlphaNumericCharacter_validDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseAlphaNumericCharacter_validDataString
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputDataString
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataInteger = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataInteger
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataBoolean = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataBoolean
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseAlphaNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateNumericCharacter_validDataString = crandomlyGenerateNumericCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateNumericCharacter_validDataString
export const crandomlyGenerateNumericCharacter_inValidDataInputDataString = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateNumericCharacter_inValidDataInputDataString
export const crandomlyGenerateNumericCharacter_inValidDataInputMetaDataString = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateNumericCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateNumericCharacter_inValidInputDataInteger = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateNumericCharacter_inValidInputDataInteger
export const crandomlyGenerateNumericCharacter_inValidInputDataBoolean = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateNumericCharacter_inValidInputDataBoolean
export const crandomlyGenerateNumericCharacter_inValidInputMetaDataInteger = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateNumericCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateNumericCharacter_inValidInputMetaDataBoolean = crandomlyGenerateNumericCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateNumericCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateSpecialCharacter_validDataString = crandomlyGenerateSpecialCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateSpecialCharacter_validDataString
export const crandomlyGenerateSpecialCharacter_inValidDataInputDataString = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateSpecialCharacter_inValidDataInputDataString
export const crandomlyGenerateSpecialCharacter_inValidDataInputMetaDataString = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateSpecialCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateSpecialCharacter_inValidInputDataInteger = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateSpecialCharacter_inValidInputDataInteger
export const crandomlyGenerateSpecialCharacter_inValidInputDataBoolean = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateSpecialCharacter_inValidInputDataBoolean
export const crandomlyGenerateSpecialCharacter_inValidInputMetaDataInteger = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateSpecialCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateSpecialCharacter_inValidInputMetaDataBoolean = crandomlyGenerateSpecialCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateSpecialCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateNumberInRange_validDataStringTrueTrue = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "TrueTrue"; // randomlyGenerateNumberInRange_validDataStringTrueTrue
export const crandomlyGenerateNumberInRange_validDataStringTrueFalse = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "TrueFalse"; // randomlyGenerateNumberInRange_validDataStringTrueFalse
export const crandomlyGenerateNumberInRange_validDataStringFalseTrue = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "FalseTrue"; // randomlyGenerateNumberInRange_validDataStringFalseTrue
export const crandomlyGenerateNumberInRange_validDataStringFalseFalse = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cString + "FalseFalse"; // randomlyGenerateNumberInRange_validDataStringFalseFalse
export const crandomlyGenerateNumberInRange_validDataInteger = crandomlyGenerateNumberInRange + wrd.cvalid + wrd.cData + wrd.cInteger; // randomlyGenerateNumberInRange_validDataInteger
export const crandomlyGenerateNumberInRange_inValidDataInputDataString = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateNumberInRange_inValidDataInputDataString
export const crandomlyGenerateNumberInRange_inValidDataInputMetaDataString = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateNumberInRange_inValidDataInputMetaDataString
export const crandomlyGenerateNumberInRange_inValidInputDataInteger = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateNumberInRange_inValidInputDataInteger
export const crandomlyGenerateNumberInRange_inValidInputDataBoolean = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateNumberInRange_inValidInputDataBoolean
export const crandomlyGenerateNumberInRange_inValidInputMetaDataInteger = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateNumberInRange_inValidInputMetaDataInteger
export const crandomlyGenerateNumberInRange_inValidInputMetaDataBoolean = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateNumberInRange_inValidInputMetaDataBoolean
export const crandomlyGenerateNumberInRange_inValidInputDataUndefined = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // randomlyGenerateNumberInRange_inValidInputDataUndefined
export const crandomlyGenerateNumberInRange_inValidInputDataNaN = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // randomlyGenerateNumberInRange_inValidInputDataNaN
export const crandomlyGenerateNumberInRange_inValidInputMetaDataUndefined = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // randomlyGenerateNumberInRange_inValidInputMetaDataUndefined
export const crandomlyGenerateNumberInRange_inValidInputMetaDataNaN = crandomlyGenerateNumberInRange + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // randomlyGenerateNumberInRange_inValidInputMetaDataNaN

export const crandomlyGenerateBooleanValue_validDataString = crandomlyGenerateBooleanValue + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateBooleanValue_validDataString
export const crandomlyGenerateBooleanValue_inValidDataInputDataString = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateBooleanValue_inValidDataInputDataString
export const crandomlyGenerateBooleanValue_inValidDataInputMetaDataString = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateBooleanValue_inValidDataInputMetaDataString
export const crandomlyGenerateBooleanValue_inValidInputDataInteger = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateBooleanValue_inValidInputDataInteger
export const crandomlyGenerateBooleanValue_inValidInputDataBoolean = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateBooleanValue_inValidInputDataBoolean
export const crandomlyGenerateBooleanValue_inValidInputMetaDataInteger = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateBooleanValue_inValidInputMetaDataInteger
export const crandomlyGenerateBooleanValue_inValidInputMetaDataBoolean = crandomlyGenerateBooleanValue + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateBooleanValue_inValidInputMetaDataBoolean

export const crandomlyGenerateMixedCaseAlphabeticCharacter_validDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphabeticCharacter_validDataString
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputDataString
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputMetaDataString = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputMetaDataString
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataInteger = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataInteger
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataBoolean = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataBoolean
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataInteger = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataInteger
export const crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataBoolean = crandomlyGenerateMixedCaseAlphabeticCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataBoolean

export const crandomlyGenerateLowerCaseLetter_validDataString = crandomlyGenerateLowerCaseLetter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetter_validDataString
export const crandomlyGenerateLowerCaseLetter_inValidDataInputDataString = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetter_inValidDataInputDataString
export const crandomlyGenerateLowerCaseLetter_inValidDataInputMetaDataString = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateLowerCaseLetter_inValidDataInputMetaDataString
export const crandomlyGenerateLowerCaseLetter_inValidInputDataInteger = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseLetter_inValidInputDataInteger
export const crandomlyGenerateLowerCaseLetter_inValidInputDataBoolean = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseLetter_inValidInputDataBoolean
export const crandomlyGenerateLowerCaseLetter_inValidInputMetaDataInteger = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateLowerCaseLetter_inValidInputMetaDataInteger
export const crandomlyGenerateLowerCaseLetter_inValidInputMetaDataBoolean = crandomlyGenerateLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateLowerCaseLetter_inValidInputMetaDataBoolean

export const crandomlyGenerateUpperCaseLetter_validDataString = crandomlyGenerateUpperCaseLetter + wrd.cvalid + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetter_validDataString
export const crandomlyGenerateUpperCaseLetter_inValidDataInputDataString = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetter_inValidDataInputDataString
export const crandomlyGenerateUpperCaseLetter_inValidDataInputMetaDataString = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // randomlyGenerateUpperCaseLetter_inValidDataInputMetaDataString
export const crandomlyGenerateUpperCaseLetter_inValidInputDataInteger = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseLetter_inValidInputDataInteger
export const crandomlyGenerateUpperCaseLetter_inValidInputDataBoolean = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseLetter_inValidInputDataBoolean
export const crandomlyGenerateUpperCaseLetter_inValidInputMetaDataInteger = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // randomlyGenerateUpperCaseLetter_inValidInputMetaDataInteger
export const crandomlyGenerateUpperCaseLetter_inValidInputMetaDataBoolean = crandomlyGenerateUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // randomlyGenerateUpperCaseLetter_inValidInputMetaDataBoolean

export const cconvertNumberToUpperCaseLetter_validDataString = cconvertNumberToUpperCaseLetter + wrd.cvalid + wrd.cData + wrd.cString; // convertNumberToUpperCaseLetter_validDataString
export const cconvertNumberToUpperCaseLetter_inValidDataInputDataString = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertNumberToUpperCaseLetter_inValidDataInputDataString
export const cconvertNumberToUpperCaseLetter_inValidDataInputMetaDataString = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertNumberToUpperCaseLetter_inValidDataInputMetaDataString
export const cconvertNumberToUpperCaseLetter_inValidInputDataInteger = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertNumberToUpperCaseLetter_inValidInputDataInteger
export const cconvertNumberToUpperCaseLetter_inValidInputDataBoolean = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertNumberToUpperCaseLetter_inValidInputDataBoolean
export const cconvertNumberToUpperCaseLetter_inValidInputMetaDataInteger = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertNumberToUpperCaseLetter_inValidInputMetaDataInteger
export const cconvertNumberToUpperCaseLetter_inValidInputMetaDataBoolean = cconvertNumberToUpperCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertNumberToUpperCaseLetter_inValidInputMetaDataBoolean

export const cconvertNumberToLowerCaseLetter_validDataString = cconvertNumberToLowerCaseLetter + wrd.cvalid + wrd.cData + wrd.cString; // convertNumberToLowerCaseLetter_validDataString
export const cconvertNumberToLowerCaseLetter_inValidDataInputDataString = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // convertNumberToLowerCaseLetter_inValidDataInputDataString
export const cconvertNumberToLowerCaseLetter_inValidDataInputMetaDataString = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // convertNumberToLowerCaseLetter_inValidDataInputMetaDataString
export const cconvertNumberToLowerCaseLetter_inValidInputDataInteger = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // convertNumberToLowerCaseLetter_inValidInputDataInteger
export const cconvertNumberToLowerCaseLetter_inValidInputDataBoolean = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // convertNumberToLowerCaseLetter_inValidInputDataBoolean
export const cconvertNumberToLowerCaseLetter_inValidInputMetaDataInteger = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // convertNumberToLowerCaseLetter_inValidInputMetaDataInteger
export const cconvertNumberToLowerCaseLetter_inValidInputMetaDataBoolean = cconvertNumberToLowerCaseLetter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // convertNumberToLowerCaseLetter_inValidInputMetaDataBoolean

/* fileOperations */
export const cgetXmlData_validDataString = cgetXmlData + wrd.cvalid + wrd.cData + wrd.cString; // getXmlData_validDataString
export const cgetXmlData_inValidDataInputDataString = cgetXmlData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getXmlData_inValidDataInputDataString
export const cgetXmlData_inValidDataInputMetaDataString = cgetXmlData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getXmlData_inValidDataInputMetaDataString
export const cgetXmlData_inValidInputDataInteger = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getXmlData_inValidInputDataInteger
export const cgetXmlData_inValidInputDataBoolean = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getXmlData_inValidInputDataBoolean
export const cgetXmlData_inValidInputMetaDataInteger = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getXmlData_inValidInputMetaDataInteger
export const cgetXmlData_inValidInputMetaDataBoolean = cgetXmlData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getXmlData_inValidInputMetaDataBoolean

export const cgetCsvData_validDataString = cgetCsvData + wrd.cvalid + wrd.cData + wrd.cString; // getCsvData_validDataString
export const cgetCsvData_inValidDataInputDataString = cgetCsvData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getCsvData_inValidDataInputDataString
export const cgetCsvData_inValidDataInputMetaDataString = cgetCsvData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getCsvData_inValidDataInputMetaDataString
export const cgetCsvData_inValidInputDataInteger = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getCsvData_inValidInputDataInteger
export const cgetCsvData_inValidInputDataBoolean = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getCsvData_inValidInputDataBoolean
export const cgetCsvData_inValidInputMetaDataInteger = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getCsvData_inValidInputMetaDataInteger
export const cgetCsvData_inValidInputMetaDataBoolean = cgetCsvData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getCsvData_inValidInputMetaDataBoolean

export const cgetJsonData_validDataString = cgetJsonData + wrd.cvalid + wrd.cData + wrd.cString; // getJsonData_validDataString
export const cgetJsonData_inValidDataInputDataString = cgetJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getJsonData_inValidDataInputDataString
export const cgetJsonData_inValidDataInputMetaDataString = cgetJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getJsonData_inValidDataInputMetaDataString
export const cgetJsonData_inValidInputDataInteger = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getJsonData_inValidInputDataInteger
export const cgetJsonData_inValidInputDataBoolean = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getJsonData_inValidInputDataBoolean
export const cgetJsonData_inValidInputMetaDataInteger = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getJsonData_inValidInputMetaDataInteger
export const cgetJsonData_inValidInputMetaDataBoolean = cgetJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getJsonData_inValidInputMetaDataBoolean

export const cwriteJsonData_validDataString = cwriteJsonData + wrd.cvalid + wrd.cData + wrd.cString; // writeJsonData_validDataString
export const cwriteJsonData_inValidDataInputDataString = cwriteJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // writeJsonData_inValidDataInputDataString
export const cwriteJsonData_inValidDataInputMetaDataString = cwriteJsonData + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // writeJsonData_inValidDataInputMetaDataString
export const cwriteJsonData_inValidInputDataInteger = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // writeJsonData_inValidInputDataInteger
export const cwriteJsonData_inValidInputDataBoolean = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // writeJsonData_inValidInputDataBoolean
export const cwriteJsonData_inValidInputMetaDataInteger = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // writeJsonData_inValidInputMetaDataInteger
export const cwriteJsonData_inValidInputMetaDataBoolean = cwriteJsonData + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // writeJsonData_inValidInputMetaDataBoolean

export const creadDirectoryContents_validDataString = creadDirectoryContents + wrd.cvalid + wrd.cData + wrd.cString; // readDirectoryContents_validDataString
export const creadDirectoryContents_inValidDataInputDataString = creadDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // readDirectoryContents_inValidDataInputDataString
export const creadDirectoryContents_inValidDataInputMetaDataString = creadDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // readDirectoryContents_inValidDataInputMetaDataString
export const creadDirectoryContents_inValidInputDataInteger = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // readDirectoryContents_inValidInputDataInteger
export const creadDirectoryContents_inValidInputDataBoolean = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // readDirectoryContents_inValidInputDataBoolean
export const creadDirectoryContents_inValidInputMetaDataInteger = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // readDirectoryContents_inValidInputMetaDataInteger
export const creadDirectoryContents_inValidInputMetaDataBoolean = creadDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // readDirectoryContents_inValidInputMetaDataBoolean

export const cscanDirectoryContents_validDataString = cscanDirectoryContents + wrd.cvalid + wrd.cData + wrd.cString; // scanDirectoryContents_validDataString
export const cscanDirectoryContents_inValidDataInputDataString = cscanDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // scanDirectoryContents_inValidDataInputDataString
export const cscanDirectoryContents_inValidDataInputMetaDataString = cscanDirectoryContents + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // scanDirectoryContents_inValidDataInputMetaDataString
export const cscanDirectoryContents_inValidInputDataInteger = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // scanDirectoryContents_inValidInputDataInteger
export const cscanDirectoryContents_inValidInputDataBoolean = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // scanDirectoryContents_inValidInputDataBoolean
export const cscanDirectoryContents_inValidInputMetaDataInteger = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // scanDirectoryContents_inValidInputMetaDataInteger
export const cscanDirectoryContents_inValidInputMetaDataBoolean = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // scanDirectoryContents_inValidInputMetaDataBoolean
export const cscanDirectoryContents_inValidInputMetaDataUndefined = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // scanDirectoryContents_inValidInputMetaDataUndefined
export const cscanDirectoryContents_inValidInputMetaDataNaN = cscanDirectoryContents + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // scanDirectoryContents_inValidInputMetaDataNaN

export const cgetDirectoryList_validDataString = cgetDirectoryList + wrd.cvalid + wrd.cData + wrd.cString; // getDirectoryList_validDataString
export const cgetDirectoryList_inValidDataInputDataString = cgetDirectoryList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getDirectoryList_inValidDataInputDataString
export const cgetDirectoryList_inValidDataInputMetaDataString = cgetDirectoryList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getDirectoryList_inValidDataInputMetaDataString
export const cgetDirectoryList_inValidInputDataInteger = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getDirectoryList_inValidInputDataInteger
export const cgetDirectoryList_inValidInputDataBoolean = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getDirectoryList_inValidInputDataBoolean
export const cgetDirectoryList_inValidInputMetaDataInteger = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getDirectoryList_inValidInputMetaDataInteger
export const cgetDirectoryList_inValidInputMetaDataBoolean = cgetDirectoryList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getDirectoryList_inValidInputMetaDataBoolean

export const creadDirectorySynchronously_validDataString = creadDirectorySynchronously + wrd.cvalid + wrd.cData + wrd.cString; // readDirectorySynchronously_validDataString
export const creadDirectorySynchronously_inValidDataInputDataString = creadDirectorySynchronously + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // readDirectorySynchronously_inValidDataInputDataString
export const creadDirectorySynchronously_inValidDataInputMetaDataString = creadDirectorySynchronously + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // readDirectorySynchronously_inValidDataInputMetaDataString
export const creadDirectorySynchronously_inValidInputDataInteger = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // readDirectorySynchronously_inValidInputDataInteger
export const creadDirectorySynchronously_inValidInputDataBoolean = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // readDirectorySynchronously_inValidInputDataBoolean
export const creadDirectorySynchronously_inValidInputMetaDataInteger = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // readDirectorySynchronously_inValidInputMetaDataInteger
export const creadDirectorySynchronously_inValidInputMetaDataBoolean = creadDirectorySynchronously + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // readDirectorySynchronously_inValidInputMetaDataBoolean

export const ccopyAllFilesAndFoldersFromFolderToFolder_validDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cvalid + wrd.cData + wrd.cString; // copyAllFilesAndFoldersFromFolderToFolder_validDataString
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidDataInputDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // copyAllFilesAndFoldersFromFolderToFolder_inValidDataInputDataString
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidDataInputMetaDataString = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // copyAllFilesAndFoldersFromFolderToFolder_inValidDataInputMetaDataString
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataInteger = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputDataInteger
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataBoolean = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputDataBoolean
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataInteger = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataInteger
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataBoolean = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataBoolean
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataUndefined = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputDataUndefined
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputDataNaN = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputDataNaN
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataUndefined = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataUndefined
export const ccopyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataNaN = ccopyAllFilesAndFoldersFromFolderToFolder + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // copyAllFilesAndFoldersFromFolderToFolder_inValidInputMetaDataNaN

export const cbuildReleasePackage_validDataString = cbuildReleasePackage + wrd.cvalid + wrd.cData + wrd.cString; // buildReleasePackage_validDataString
export const cbuildReleasePackage_inValidDataInputDataString = cbuildReleasePackage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // buildReleasePackage_inValidDataInputDataString
export const cbuildReleasePackage_inValidDataInputMetaDataString = cbuildReleasePackage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // buildReleasePackage_inValidDataInputMetaDataString
export const cbuildReleasePackage_inValidInputDataInteger = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // buildReleasePackage_inValidInputDataInteger
export const cbuildReleasePackage_inValidInputDataBoolean = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // buildReleasePackage_inValidInputDataBoolean
export const cbuildReleasePackage_inValidInputMetaDataInteger = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // buildReleasePackage_inValidInputMetaDataInteger
export const cbuildReleasePackage_inValidInputMetaDataBoolean = cbuildReleasePackage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // buildReleasePackage_inValidInputMetaDataBoolean

export const ccreateZipArchive_validDataString = ccreateZipArchive + wrd.cvalid + wrd.cData + wrd.cString; // createZipArchive_validDataString
export const ccreateZipArchive_inValidDataInputDataString = ccreateZipArchive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // createZipArchive_inValidDataInputDataString
export const ccreateZipArchive_inValidDataInputMetaDataString = ccreateZipArchive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // createZipArchive_inValidDataInputMetaDataString
export const ccreateZipArchive_inValidInputDataInteger = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // createZipArchive_inValidInputDataInteger
export const ccreateZipArchive_inValidInputDataBoolean = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // createZipArchive_inValidInputDataBoolean
export const ccreateZipArchive_inValidInputMetaDataInteger = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // createZipArchive_inValidInputMetaDataInteger
export const ccreateZipArchive_inValidInputMetaDataBoolean = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // createZipArchive_inValidInputMetaDataBoolean
export const ccreateZipArchive_inValidInputDataUndefined = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // createZipArchive_inValidInputDataUndefined
export const ccreateZipArchive_inValidInputDataNaN = ccreateZipArchive + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // createZipArchive_inValidInputDataNaN

export const ccleanRootPath_validDataString = ccleanRootPath + wrd.cvalid + wrd.cData + wrd.cString; // cleanRootPath_validDataString
export const ccleanRootPath_inValidDataInputDataString = ccleanRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // cleanRootPath_inValidDataInputDataString
export const ccleanRootPath_inValidDataInputMetaDataString = ccleanRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // cleanRootPath_inValidDataInputMetaDataString
export const ccleanRootPath_inValidInputDataInteger = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // cleanRootPath_inValidInputDataInteger
export const ccleanRootPath_inValidInputDataBoolean = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // cleanRootPath_inValidInputDataBoolean
export const ccleanRootPath_inValidInputMetaDataInteger = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // cleanRootPath_inValidInputMetaDataInteger
export const ccleanRootPath_inValidInputMetaDataBoolean = ccleanRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // cleanRootPath_inValidInputMetaDataBoolean

export const ccopyFileSync_validDataString = ccopyFileSync + wrd.cvalid + wrd.cData + wrd.cString; // copyFileSync_validDataString
export const ccopyFileSync_inValidDataInputDataString = ccopyFileSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // copyFileSync_inValidDataInputDataString
export const ccopyFileSync_inValidDataInputMetaDataString = ccopyFileSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // copyFileSync_inValidDataInputMetaDataString
export const ccopyFileSync_inValidInputDataInteger = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // copyFileSync_inValidInputDataInteger
export const ccopyFileSync_inValidInputDataBoolean = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // copyFileSync_inValidInputDataBoolean
export const ccopyFileSync_inValidInputMetaDataInteger = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // copyFileSync_inValidInputMetaDataInteger
export const ccopyFileSync_inValidInputMetaDataBoolean = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // copyFileSync_inValidInputMetaDataBoolean
export const ccopyFileSync_inValidInputDataUndefined = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // copyFileSync_inValidInputDataUndefined
export const ccopyFileSync_inValidInputDataNaN = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // copyFileSync_inValidInputDataNaN
export const ccopyFileSync_inValidInputMetaDataUndefined = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // copyFileSync_inValidInputMetaDataUndefined
export const ccopyFileSync_inValidInputMetaDataNaN = ccopyFileSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // copyFileSync_inValidInputMetaDataNaN

export const ccopyFolderRecursiveSync_validDataString = ccopyFolderRecursiveSync + wrd.cvalid + wrd.cData + wrd.cString; // copyFolderRecursiveSync_validDataString
export const ccopyFolderRecursiveSync_inValidDataInputDataString = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // copyFolderRecursiveSync_inValidDataInputDataString
export const ccopyFolderRecursiveSync_inValidDataInputMetaDataString = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // copyFolderRecursiveSync_inValidDataInputMetaDataString
export const ccopyFolderRecursiveSync_inValidInputDataInteger = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // copyFolderRecursiveSync_inValidInputDataInteger
export const ccopyFolderRecursiveSync_inValidInputDataBoolean = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // copyFolderRecursiveSync_inValidInputDataBoolean
export const ccopyFolderRecursiveSync_inValidInputMetaDataInteger = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // copyFolderRecursiveSync_inValidInputMetaDataInteger
export const ccopyFolderRecursiveSync_inValidInputMetaDataBoolean = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // copyFolderRecursiveSync_inValidInputMetaDataBoolean
export const ccopyFolderRecursiveSync_inValidInputDataUndefined = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + undefined; // copyFolderRecursiveSync_inValidInputDataUndefined
export const ccopyFolderRecursiveSync_inValidInputDataNaN = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cData + NaN; // copyFolderRecursiveSync_inValidInputDataNaN
export const ccopyFolderRecursiveSync_inValidInputMetaDataUndefined = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + undefined; // copyFolderRecursiveSync_inValidInputMetaDataUndefined
export const ccopyFolderRecursiveSync_inValidInputMetaDataNaN = ccopyFolderRecursiveSync + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + NaN; // copyFolderRecursiveSync_inValidInputMetaDataNaN

export const cappendMessageToFile_validDataString = cappendMessageToFile + wrd.cvalid + wrd.cData + wrd.cString; // appendMessageToFile_validDataString
export const cappendMessageToFile_inValidDataInputDataString = cappendMessageToFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // appendMessageToFile_inValidDataInputDataString
export const cappendMessageToFile_inValidDataInputMetaDataString = cappendMessageToFile + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // appendMessageToFile_inValidDataInputMetaDataString
export const cappendMessageToFile_inValidInputDataInteger = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // appendMessageToFile_inValidInputDataInteger
export const cappendMessageToFile_inValidInputDataBoolean = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // appendMessageToFile_inValidInputDataBoolean
export const cappendMessageToFile_inValidInputMetaDataInteger = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // appendMessageToFile_inValidInputMetaDataInteger
export const cappendMessageToFile_inValidInputMetaDataBoolean = cappendMessageToFile + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // appendMessageToFile_inValidInputMetaDataBoolean

/* lexicalAnalyzer */
export const cparseBusinessRuleArgument_validDataString = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cString; // parseBusinessRuleArgument_validDataString
export const cparseBusinessRuleArgument_validDataArrayString = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cString; // parseBusinessRuleArgument_validDataArrayString
export const cparseBusinessRuleArgument_validDataArrayInteger = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cInteger; // parseBusinessRuleArgument_validDataArrayInteger
export const cparseBusinessRuleArgument_validDataArrayBoolean = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cBoolean; // parseBusinessRuleArgument_validDataArrayBoolean
export const cparseBusinessRuleArgument_validDataArrayObject = cparseBusinessRuleArgument + wrd.cvalid + wrd.cData + wrd.cArray + wrd.cObject; // parseBusinessRuleArgument_validDataArrayObject
export const cparseBusinessRuleArgument_inValidDataInputDataString = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // parseBusinessRuleArgument_inValidDataInputDataString
export const cparseBusinessRuleArgument_inValidDataInputMetaDataString = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // parseBusinessRuleArgument_inValidDataInputMetaDataString
export const cparseBusinessRuleArgument_inValidInputDataInteger = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // parseBusinessRuleArgument_inValidInputDataInteger
export const cparseBusinessRuleArgument_inValidInputDataBoolean = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // parseBusinessRuleArgument_inValidInputDataBoolean
export const cparseBusinessRuleArgument_inValidInputMetaDataInteger = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // parseBusinessRuleArgument_inValidInputMetaDataInteger
export const cparseBusinessRuleArgument_inValidInputMetaDataBoolean = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // parseBusinessRuleArgument_inValidInputMetaDataBoolean
export const cparseBusinessRuleArgument_inValidInputDataUndefined = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // parseBusinessRuleArgument_inValidInputDataUndefined
export const cparseBusinessRuleArgument_inValidInputDataNaN = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // parseBusinessRuleArgument_inValidInputDataNaN
export const cparseBusinessRuleArgument_inValidInputMetaDataUndefined = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // parseBusinessRuleArgument_inValidInputMetaDataUndefined
export const cparseBusinessRuleArgument_inValidInputMetaDataNaN = cparseBusinessRuleArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // parseBusinessRuleArgument_inValidInputMetaDataNaN

export const canalyzeArgument_validDataString = canalyzeArgument + wrd.cvalid + wrd.cData + wrd.cString; // analyzeArgument_validDataString
export const canalyzeArgument_inValidDataInputDataString = canalyzeArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // analyzeArgument_inValidDataInputDataString
export const canalyzeArgument_inValidDataInputMetaDataString = canalyzeArgument + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // analyzeArgument_inValidDataInputMetaDataString
export const canalyzeArgument_inValidInputDataInteger = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // analyzeArgument_inValidInputDataInteger
export const canalyzeArgument_inValidInputDataBoolean = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // analyzeArgument_inValidInputDataBoolean
export const canalyzeArgument_inValidInputMetaDataInteger = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // analyzeArgument_inValidInputMetaDataInteger
export const canalyzeArgument_inValidInputMetaDataBoolean = canalyzeArgument + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // analyzeArgument_inValidInputMetaDataBoolean

export const canalyzeForRegularExpression_validDataString = canalyzeForRegularExpression + wrd.cvalid + wrd.cData + wrd.cString; // analyzeForRegularExpression_validDataString
export const canalyzeForRegularExpression_inValidDataInputDataString = canalyzeForRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // analyzeForRegularExpression_inValidDataInputDataString
export const canalyzeForRegularExpression_inValidDataInputMetaDataString = canalyzeForRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // analyzeForRegularExpression_inValidDataInputMetaDataString
export const canalyzeForRegularExpression_inValidInputDataInteger = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // analyzeForRegularExpression_inValidInputDataInteger
export const canalyzeForRegularExpression_inValidInputDataBoolean = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // analyzeForRegularExpression_inValidInputDataBoolean
export const canalyzeForRegularExpression_inValidInputMetaDataInteger = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // analyzeForRegularExpression_inValidInputMetaDataInteger
export const canalyzeForRegularExpression_inValidInputMetaDataBoolean = canalyzeForRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // analyzeForRegularExpression_inValidInputMetaDataBoolean

export const cparseArgumentAsRegularExpression_validDataString = cparseArgumentAsRegularExpression + wrd.cvalid + wrd.cData + wrd.cString; // parseArgumentAsRegularExpression_validDataString
export const cparseArgumentAsRegularExpression_inValidDataInputDataString = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // parseArgumentAsRegularExpression_inValidDataInputDataString
export const cparseArgumentAsRegularExpression_inValidDataInputMetaDataString = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // parseArgumentAsRegularExpression_inValidDataInputMetaDataString
export const cparseArgumentAsRegularExpression_inValidInputDataInteger = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // parseArgumentAsRegularExpression_inValidInputDataInteger
export const cparseArgumentAsRegularExpression_inValidInputDataBoolean = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // parseArgumentAsRegularExpression_inValidInputDataBoolean
export const cparseArgumentAsRegularExpression_inValidInputMetaDataInteger = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // parseArgumentAsRegularExpression_inValidInputMetaDataInteger
export const cparseArgumentAsRegularExpression_inValidInputMetaDataBoolean = cparseArgumentAsRegularExpression + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // parseArgumentAsRegularExpression_inValidInputMetaDataBoolean

export const cparseArgumentAsArray_validDataString = cparseArgumentAsArray + wrd.cvalid + wrd.cData + wrd.cString; // parseArgumentAsArray_validDataString
export const cparseArgumentAsArray_inValidDataInputDataString = cparseArgumentAsArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // parseArgumentAsArray_inValidDataInputDataString
export const cparseArgumentAsArray_inValidDataInputMetaDataString = cparseArgumentAsArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // parseArgumentAsArray_inValidDataInputMetaDataString
export const cparseArgumentAsArray_inValidInputDataInteger = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // parseArgumentAsArray_inValidInputDataInteger
export const cparseArgumentAsArray_inValidInputDataBoolean = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // parseArgumentAsArray_inValidInputDataBoolean
export const cparseArgumentAsArray_inValidInputMetaDataInteger = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // parseArgumentAsArray_inValidInputMetaDataInteger
export const cparseArgumentAsArray_inValidInputMetaDataBoolean = cparseArgumentAsArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // parseArgumentAsArray_inValidInputMetaDataBoolean

export const cremoveStringLiteralTagsFromArray_validDataString = cremoveStringLiteralTagsFromArray + wrd.cvalid + wrd.cData + wrd.cString; // removeStringLiteralTagsFromArray_validDataString
export const cremoveStringLiteralTagsFromArray_inValidDataInputDataString = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // removeStringLiteralTagsFromArray_inValidDataInputDataString
export const cremoveStringLiteralTagsFromArray_inValidDataInputMetaDataString = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // removeStringLiteralTagsFromArray_inValidDataInputMetaDataString
export const cremoveStringLiteralTagsFromArray_inValidInputDataInteger = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // removeStringLiteralTagsFromArray_inValidInputDataInteger
export const cremoveStringLiteralTagsFromArray_inValidInputDataBoolean = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // removeStringLiteralTagsFromArray_inValidInputDataBoolean
export const cremoveStringLiteralTagsFromArray_inValidInputMetaDataInteger = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // removeStringLiteralTagsFromArray_inValidInputMetaDataInteger
export const cremoveStringLiteralTagsFromArray_inValidInputMetaDataBoolean = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // removeStringLiteralTagsFromArray_inValidInputMetaDataBoolean
export const cremoveStringLiteralTagsFromArray_inValidInputDataUndefined = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // removeStringLiteralTagsFromArray_inValidInputDataUndefined
export const cremoveStringLiteralTagsFromArray_inValidInputDataNaN = cremoveStringLiteralTagsFromArray + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // removeStringLiteralTagsFromArray_inValidInputDataNaN

/* mathOperations */
export const chex2rgbConversion_validDataString = chex2rgbConversion + wrd.cvalid + wrd.cData + wrd.cString; // hex2rgbConversion_validDataString
export const chex2rgbConversion_inValidDataInputDataString = chex2rgbConversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // hex2rgbConversion_inValidDataInputDataString
export const chex2rgbConversion_inValidDataInputMetaDataString = chex2rgbConversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // hex2rgbConversion_inValidDataInputMetaDataString
export const chex2rgbConversion_inValidInputDataInteger = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // hex2rgbConversion_inValidInputDataInteger
export const chex2rgbConversion_inValidInputDataBoolean = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // hex2rgbConversion_inValidInputDataBoolean
export const chex2rgbConversion_inValidInputMetaDataInteger = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // hex2rgbConversion_inValidInputMetaDataInteger
export const chex2rgbConversion_inValidInputMetaDataBoolean = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // hex2rgbConversion_inValidInputMetaDataBoolean
export const chex2rgbConversion_inValidInputDataUndefined = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // hex2rgbConversion_inValidInputDataUndefined
export const chex2rgbConversion_inValidInputDataNaN = chex2rgbConversion + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // hex2rgbConversion_inValidInputDataNaN

export const cisOdd_validDataString = cisOdd + wrd.cvalid + wrd.cData + wrd.cString; // isOdd_validDataString
export const cisOdd_inValidDataInputDataString = cisOdd + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isOdd_inValidDataInputDataString
export const cisOdd_inValidDataInputMetaDataString = cisOdd + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isOdd_inValidDataInputMetaDataString
export const cisOdd_inValidInputDataInteger = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isOdd_inValidInputDataInteger
export const cisOdd_inValidInputDataBoolean = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isOdd_inValidInputDataBoolean
export const cisOdd_inValidInputMetaDataInteger = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isOdd_inValidInputMetaDataInteger
export const cisOdd_inValidInputMetaDataBoolean = cisOdd + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isOdd_inValidInputMetaDataBoolean

export const cisEven_validDataString = cisEven + wrd.cvalid + wrd.cData + wrd.cString; // isEven_validDataString
export const cisEven_inValidDataInputDataString = cisEven + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isEven_inValidDataInputDataString
export const cisEven_inValidDataInputMetaDataString = cisEven + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isEven_inValidDataInputMetaDataString
export const cisEven_inValidInputDataInteger = cisEven + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isEven_inValidInputDataInteger
export const cisEven_inValidInputDataBoolean = cisEven + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isEven_inValidInputDataBoolean
export const cisEven_inValidInputMetaDataInteger = cisEven + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isEven_inValidInputMetaDataInteger
export const cisEven_inValidInputMetaDataBoolean = cisEven + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isEven_inValidInputMetaDataBoolean

/* promptOperations */
export const cprompt_validDataString = cprompt + wrd.cvalid + wrd.cData + wrd.cString; // prompt_validDataString
export const cprompt_inValidDataInputDataString = cprompt + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // prompt_inValidDataInputDataString
export const cprompt_inValidDataInputMetaDataString = cprompt + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // prompt_inValidDataInputMetaDataString
export const cprompt_inValidInputDataInteger = cprompt + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // prompt_inValidInputDataInteger
export const cprompt_inValidInputDataBoolean = cprompt + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // prompt_inValidInputDataBoolean
export const cprompt_inValidInputMetaDataInteger = cprompt + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // prompt_inValidInputMetaDataInteger
export const cprompt_inValidInputMetaDataBoolean = cprompt + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // prompt_inValidInputMetaDataBoolean

/* ruleParsing */
export const cdoAllRulesExist_validDataString = cdoAllRulesExist + wrd.cvalid + wrd.cData + wrd.cString; // doAllRulesExist_validDataString
export const cdoAllRulesExist_inValidDataInputDataString = cdoAllRulesExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doAllRulesExist_inValidDataInputDataString
export const cdoAllRulesExist_inValidDataInputMetaDataString = cdoAllRulesExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doAllRulesExist_inValidDataInputMetaDataString
export const cdoAllRulesExist_inValidInputDataInteger = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doAllRulesExist_inValidInputDataInteger
export const cdoAllRulesExist_inValidInputDataBoolean = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doAllRulesExist_inValidInputDataBoolean
export const cdoAllRulesExist_inValidInputMetaDataInteger = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doAllRulesExist_inValidInputMetaDataInteger
export const cdoAllRulesExist_inValidInputMetaDataBoolean = cdoAllRulesExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doAllRulesExist_inValidInputMetaDataBoolean

export const cdoesRuleExist_validDataString = cdoesRuleExist + wrd.cvalid + wrd.cData + wrd.cString; // doesRuleExist_validDataString
export const cdoesRuleExist_inValidDataInputDataString = cdoesRuleExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // doesRuleExist_inValidDataInputDataString
export const cdoesRuleExist_inValidDataInputMetaDataString = cdoesRuleExist + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // doesRuleExist_inValidDataInputMetaDataString
export const cdoesRuleExist_inValidInputDataInteger = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // doesRuleExist_inValidInputDataInteger
export const cdoesRuleExist_inValidInputDataBoolean = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // doesRuleExist_inValidInputDataBoolean
export const cdoesRuleExist_inValidInputMetaDataInteger = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // doesRuleExist_inValidInputMetaDataInteger
export const cdoesRuleExist_inValidInputMetaDataBoolean = cdoesRuleExist + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // doesRuleExist_inValidInputMetaDataBoolean

export const cgetRule_validDataString = cgetRule + wrd.cvalid + wrd.cData + wrd.cString; // getRule_validDataString
export const cgetRule_inValidDataInputDataString = cgetRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getRule_inValidDataInputDataString
export const cgetRule_inValidDataInputMetaDataString = cgetRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getRule_inValidDataInputMetaDataString
export const cgetRule_inValidInputDataInteger = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getRule_inValidInputDataInteger
export const cgetRule_inValidInputDataBoolean = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getRule_inValidInputDataBoolean
export const cgetRule_inValidInputMetaDataInteger = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getRule_inValidInputMetaDataInteger
export const cgetRule_inValidInputMetaDataBoolean = cgetRule + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getRule_inValidInputMetaDataBoolean

export const cprocessRulesInternal_validDataString = cprocessRulesInternal + wrd.cvalid + wrd.cData + wrd.cString; // processRulesInternal_validDataString
export const cprocessRulesInternal_inValidDataInputDataString = cprocessRulesInternal + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // processRulesInternal_inValidDataInputDataString
export const cprocessRulesInternal_inValidDataInputMetaDataString = cprocessRulesInternal + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // processRulesInternal_inValidDataInputMetaDataString
export const cprocessRulesInternal_inValidInputDataInteger = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // processRulesInternal_inValidInputDataInteger
export const cprocessRulesInternal_inValidInputDataBoolean = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // processRulesInternal_inValidInputDataBoolean
export const cprocessRulesInternal_inValidInputMetaDataInteger = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // processRulesInternal_inValidInputMetaDataInteger
export const cprocessRulesInternal_inValidInputMetaDataBoolean = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // processRulesInternal_inValidInputMetaDataBoolean
export const cprocessRulesInternal_inValidInputDataUndefined = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // processRulesInternal_inValidInputDataUndefined
export const cprocessRulesInternal_inValidInputDataNaN = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // processRulesInternal_inValidInputDataNaN
export const cprocessRulesInternal_inValidInputMetaDataUndefined = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // processRulesInternal_inValidInputMetaDataUndefined
export const cprocessRulesInternal_inValidInputMetaDataNaN = cprocessRulesInternal + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // processRulesInternal_inValidInputMetaDataNaN

/* stringGeneration */
export const cgenerateRandomMixedCaseTextByLength_validDataString = cgenerateRandomMixedCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomMixedCaseTextByLength_validDataString
export const cgenerateRandomMixedCaseTextByLength_inValidDataInputDataString = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomMixedCaseTextByLength_inValidDataInputDataString
export const cgenerateRandomMixedCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomMixedCaseTextByLength_inValidDataInputMetaDataString
export const cgenerateRandomMixedCaseTextByLength_inValidInputDataInteger = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomMixedCaseTextByLength_inValidInputDataInteger
export const cgenerateRandomMixedCaseTextByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseTextByLength_inValidInputDataBoolean
export const cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomMixedCaseTextByLength_inValidInputMetaDataInteger
export const cgenerateRandomMixedCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseTextByLength_inValidInputMetaDataBoolean

export const cgenerateRandomUpperCaseTextByLength_validDataString = cgenerateRandomUpperCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomUpperCaseTextByLength_validDataString
export const cgenerateRandomUpperCaseTextByLength_inValidDataInputDataString = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomUpperCaseTextByLength_inValidDataInputDataString
export const cgenerateRandomUpperCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomUpperCaseTextByLength_inValidDataInputMetaDataString
export const cgenerateRandomUpperCaseTextByLength_inValidInputDataInteger = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomUpperCaseTextByLength_inValidInputDataInteger
export const cgenerateRandomUpperCaseTextByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseTextByLength_inValidInputDataBoolean
export const cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomUpperCaseTextByLength_inValidInputMetaDataInteger
export const cgenerateRandomUpperCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseTextByLength_inValidInputMetaDataBoolean

export const cgenerateRandomLowerCaseTextByLength_validDataString = cgenerateRandomLowerCaseTextByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomLowerCaseTextByLength_validDataString
export const cgenerateRandomLowerCaseTextByLength_inValidDataInputDataString = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomLowerCaseTextByLength_inValidDataInputDataString
export const cgenerateRandomLowerCaseTextByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomLowerCaseTextByLength_inValidDataInputMetaDataString
export const cgenerateRandomLowerCaseTextByLength_inValidInputDataInteger = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomLowerCaseTextByLength_inValidInputDataInteger
export const cgenerateRandomLowerCaseTextByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseTextByLength_inValidInputDataBoolean
export const cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomLowerCaseTextByLength_inValidInputMetaDataInteger
export const cgenerateRandomLowerCaseTextByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseTextByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseTextByLength_inValidInputMetaDataBoolean

export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomMixedCaseTextWithSpecialCharactersByLength_validDataString
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomUpperCaseTextWithSpecialCharactersByLength_validDataString
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_validDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomLowerCaseTextWithSpecialCharactersByLength_validDataString
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseTextWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseTextWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeByLength_validDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataInteger
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputDataBoolean
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean

export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeByLength_validDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataInteger
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputDataBoolean
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean

export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_validDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeByLength_validDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidDataInputMetaDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataInteger
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputDataBoolean
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataInteger
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseAlphaNumericCodeByLength_inValidInputMetaDataBoolean

export const cgenerateRandomNumericCodeByLength_validDataString = cgenerateRandomNumericCodeByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomNumericCodeByLength_validDataString
export const cgenerateRandomNumericCodeByLength_inValidDataInputDataString = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomNumericCodeByLength_inValidDataInputDataString
export const cgenerateRandomNumericCodeByLength_inValidDataInputMetaDataString = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomNumericCodeByLength_inValidDataInputMetaDataString
export const cgenerateRandomNumericCodeByLength_inValidInputDataInteger = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomNumericCodeByLength_inValidInputDataInteger
export const cgenerateRandomNumericCodeByLength_inValidInputDataBoolean = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomNumericCodeByLength_inValidInputDataBoolean
export const cgenerateRandomNumericCodeByLength_inValidInputMetaDataInteger = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomNumericCodeByLength_inValidInputMetaDataInteger
export const cgenerateRandomNumericCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomNumericCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomNumericCodeByLength_inValidInputMetaDataBoolean

export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_validDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidDataInputMetaDataString
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataInteger
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputDataBoolean
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataInteger
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean = cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength_inValidInputMetaDataBoolean

export const cgenerateRandomSpecialCharacterCodeByLength_validDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomSpecialCharacterCodeByLength_validDataString
export const cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomSpecialCharacterCodeByLength_inValidDataInputDataString
export const cgenerateRandomSpecialCharacterCodeByLength_inValidDataInputMetaDataString = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomSpecialCharacterCodeByLength_inValidDataInputMetaDataString
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputDataInteger = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomSpecialCharacterCodeByLength_inValidInputDataInteger
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputDataBoolean = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomSpecialCharacterCodeByLength_inValidInputDataBoolean
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputMetaDataInteger = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomSpecialCharacterCodeByLength_inValidInputMetaDataInteger
export const cgenerateRandomSpecialCharacterCodeByLength_inValidInputMetaDataBoolean = cgenerateRandomSpecialCharacterCodeByLength + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomSpecialCharacterCodeByLength_inValidInputMetaDataBoolean

export const cgenerateValidEmail_validDataString = cgenerateValidEmail + wrd.cvalid + wrd.cData + wrd.cString; // generateValidEmail_validDataString
export const cgenerateValidEmail_inValidDataInputDataString = cgenerateValidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateValidEmail_inValidDataInputDataString
export const cgenerateValidEmail_inValidDataInputMetaDataString = cgenerateValidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateValidEmail_inValidDataInputMetaDataString
export const cgenerateValidEmail_inValidInputDataInteger = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateValidEmail_inValidInputDataInteger
export const cgenerateValidEmail_inValidInputDataBoolean = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateValidEmail_inValidInputDataBoolean
export const cgenerateValidEmail_inValidInputMetaDataInteger = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateValidEmail_inValidInputMetaDataInteger
export const cgenerateValidEmail_inValidInputMetaDataBoolean = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateValidEmail_inValidInputMetaDataBoolean
export const cgenerateValidEmail_inValidInputDataUndefined = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateValidEmail_inValidInputDataUndefined
export const cgenerateValidEmail_inValidInputDataNaN = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateValidEmail_inValidInputDataNaN
export const cgenerateValidEmail_inValidInputMetaDataUndefined = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // generateValidEmail_inValidInputMetaDataUndefined
export const cgenerateValidEmail_inValidInputMetaDataNaN = cgenerateValidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // generateValidEmail_inValidInputMetaDataNaN

export const cgenerateInvalidEmail_validDataString = cgenerateInvalidEmail + wrd.cvalid + wrd.cData + wrd.cString; // generateInvalidEmail_validDataString
export const cgenerateInvalidEmail_inValidDataInputDataString = cgenerateInvalidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateInvalidEmail_inValidDataInputDataString
export const cgenerateInvalidEmail_inValidDataInputMetaDataString = cgenerateInvalidEmail + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateInvalidEmail_inValidDataInputMetaDataString
export const cgenerateInvalidEmail_inValidInputDataInteger = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateInvalidEmail_inValidInputDataInteger
export const cgenerateInvalidEmail_inValidInputDataBoolean = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateInvalidEmail_inValidInputDataBoolean
export const cgenerateInvalidEmail_inValidInputMetaDataInteger = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateInvalidEmail_inValidInputMetaDataInteger
export const cgenerateInvalidEmail_inValidInputMetaDataBoolean = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateInvalidEmail_inValidInputMetaDataBoolean
export const cgenerateInvalidEmail_inValidInputDataUndefined = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateInvalidEmail_inValidInputDataUndefined
export const cgenerateInvalidEmail_inValidInputDataNaN = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateInvalidEmail_inValidInputDataNaN
export const cgenerateInvalidEmail_inValidInputMetaDataUndefined = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // generateInvalidEmail_inValidInputMetaDataUndefined
export const cgenerateInvalidEmail_inValidInputMetaDataNaN = cgenerateInvalidEmail + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // generateInvalidEmail_inValidInputMetaDataNaN

export const cgenerateRandomBrightColor_validDataString = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomBrightColor_validDataString
export const cgenerateRandomBrightColor_validDataInteger = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cInteger; // generateRandomBrightColor_validDataInteger
export const cgenerateRandomBrightColor_validDataStringInteger = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger; // generateRandomBrightColor_validDataStringInteger
export const cgenerateRandomBrightColor_validDataIntegerString = cgenerateRandomBrightColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString; // generateRandomBrightColor_validDataIntegerString
export const cgenerateRandomBrightColor_inValidDataInputDataString = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomBrightColor_inValidDataInputDataString
export const cgenerateRandomBrightColor_inValidDataInputMetaDataString = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomBrightColor_inValidDataInputMetaDataString
export const cgenerateRandomBrightColor_inValidInputDataInteger = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomBrightColor_inValidInputDataInteger
export const cgenerateRandomBrightColor_inValidInputDataBoolean = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomBrightColor_inValidInputDataBoolean
export const cgenerateRandomBrightColor_inValidInputMetaDataInteger = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomBrightColor_inValidInputMetaDataInteger
export const cgenerateRandomBrightColor_inValidInputMetaDataBoolean = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomBrightColor_inValidInputMetaDataBoolean
export const cgenerateRandomBrightColor_inValidInputDataUndefined = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateRandomBrightColor_inValidInputDataUndefined
export const cgenerateRandomBrightColor_inValidInputDataNaN = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateRandomBrightColor_inValidInputDataNaN
export const cgenerateRandomBrightColor_inValidInputMetaDataUndefined = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // generateRandomBrightColor_inValidInputMetaDataUndefined
export const cgenerateRandomBrightColor_inValidInputMetaDataNaN = cgenerateRandomBrightColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // generateRandomBrightColor_inValidInputMetaDataNaN

export const cgenerateRandomDarkColor_validDataString = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomDarkColor_validDataString
export const cgenerateRandomDarkColor_validDataInteger = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cInteger; // generateRandomDarkColor_validDataInteger
export const cgenerateRandomDarkColor_validDataStringInteger = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger; // generateRandomDarkColor_validDataStringInteger
export const cgenerateRandomDarkColor_validDataIntegerString = cgenerateRandomDarkColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString; // generateRandomDarkColor_validDataIntegerString
export const cgenerateRandomDarkColor_inValidDataInputDataString = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomDarkColor_inValidDataInputDataString
export const cgenerateRandomDarkColor_inValidDataInputMetaDataString = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomDarkColor_inValidDataInputMetaDataString
export const cgenerateRandomDarkColor_inValidInputDataInteger = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomDarkColor_inValidInputDataInteger
export const cgenerateRandomDarkColor_inValidInputDataBoolean = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomDarkColor_inValidInputDataBoolean
export const cgenerateRandomDarkColor_inValidInputMetaDataInteger = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomDarkColor_inValidInputMetaDataInteger
export const cgenerateRandomDarkColor_inValidInputMetaDataBoolean = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomDarkColor_inValidInputMetaDataBoolean
export const cgenerateRandomDarkColor_inValidInputDataUndefined = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateRandomDarkColor_inValidInputDataUndefined
export const cgenerateRandomDarkColor_inValidInputDataNaN = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateRandomDarkColor_inValidInputDataNaN
export const cgenerateRandomDarkColor_inValidInputMetaDataUndefined = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // generateRandomDarkColor_inValidInputMetaDataUndefined
export const cgenerateRandomDarkColor_inValidInputMetaDataNaN = cgenerateRandomDarkColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // generateRandomDarkColor_inValidInputMetaDataNaN

export const cgenerateRandomColor_validDataString = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cString; // generateRandomColor_validDataString
export const cgenerateRandomColor_validDataInteger = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cInteger; // generateRandomColor_validDataInteger
export const cgenerateRandomColor_validDataStringInteger = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cString + wrd.cInteger; // generateRandomColor_validDataStringInteger
export const cgenerateRandomColor_validDataIntegerString = cgenerateRandomColor + wrd.cvalid + wrd.cData + wrd.cInteger + wrd.cString; // generateRandomColor_validDataIntegerString
export const cgenerateRandomColor_inValidDataInputDataString = cgenerateRandomColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // generateRandomColor_inValidDataInputDataString
export const cgenerateRandomColor_inValidDataInputMetaDataString = cgenerateRandomColor + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // generateRandomColor_inValidDataInputMetaDataString
export const cgenerateRandomColor_inValidInputDataInteger = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // generateRandomColor_inValidInputDataInteger
export const cgenerateRandomColor_inValidInputDataBoolean = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // generateRandomColor_inValidInputDataBoolean
export const cgenerateRandomColor_inValidInputMetaDataInteger = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // generateRandomColor_inValidInputMetaDataInteger
export const cgenerateRandomColor_inValidInputMetaDataBoolean = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // generateRandomColor_inValidInputMetaDataBoolean
export const cgenerateRandomColor_inValidInputDataUndefined = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // generateRandomColor_inValidInputDataUndefined
export const cgenerateRandomColor_inValidInputDataNaN = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // generateRandomColor_inValidInputDataNaN
export const cgenerateRandomColor_inValidInputMetaDataUndefined = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // generateRandomColor_inValidInputMetaDataUndefined
export const cgenerateRandomColor_inValidInputMetaDataNaN = cgenerateRandomColor + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // generateRandomColor_inValidInputMetaDataNaN

/* stringParsingUtilities */
export const cparseSystemRootPath_validDataString = cparseSystemRootPath + wrd.cvalid + wrd.cData + wrd.cString; // parseSystemRootPath_validDataString
export const cparseSystemRootPath_inValidDataInputDataString = cparseSystemRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // parseSystemRootPath_inValidDataInputDataString
export const cparseSystemRootPath_inValidDataInputMetaDataString = cparseSystemRootPath + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // parseSystemRootPath_inValidDataInputMetaDataString
export const cparseSystemRootPath_inValidInputDataInteger = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // parseSystemRootPath_inValidInputDataInteger
export const cparseSystemRootPath_inValidInputDataBoolean = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // parseSystemRootPath_inValidInputDataBoolean
export const cparseSystemRootPath_inValidInputMetaDataInteger = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // parseSystemRootPath_inValidInputMetaDataInteger
export const cparseSystemRootPath_inValidInputMetaDataBoolean = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // parseSystemRootPath_inValidInputMetaDataBoolean
export const cparseSystemRootPath_inValidInputDataUndefined = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // parseSystemRootPath_inValidInputDataUndefined
export const cparseSystemRootPath_inValidInputDataNaN = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // parseSystemRootPath_inValidInputDataNaN
export const cparseSystemRootPath_inValidInputMetaDataUndefined = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // parseSystemRootPath_inValidInputMetaDataUndefined
export const cparseSystemRootPath_inValidInputMetaDataNaN = cparseSystemRootPath + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // parseSystemRootPath_inValidInputMetaDataNaN

export const cstringToDataType_validDataString = cstringToDataType + wrd.cvalid + wrd.cData + wrd.cString; // stringToDataType_validDataString
export const cstringToDataType_inValidDataInputDataString = cstringToDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // stringToDataType_inValidDataInputDataString
export const cstringToDataType_inValidDataInputMetaDataString = cstringToDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // stringToDataType_inValidDataInputMetaDataString
export const cstringToDataType_inValidInputDataInteger = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // stringToDataType_inValidInputDataInteger
export const cstringToDataType_inValidInputDataBoolean = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // stringToDataType_inValidInputDataBoolean
export const cstringToDataType_inValidInputMetaDataInteger = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // stringToDataType_inValidInputMetaDataInteger
export const cstringToDataType_inValidInputMetaDataBoolean = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // stringToDataType_inValidInputMetaDataBoolean
export const cstringToDataType_inValidInputDataUndefined = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // stringToDataType_inValidInputDataUndefined
export const cstringToDataType_inValidInputDataNaN = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // stringToDataType_inValidInputDataNaN
export const cstringToDataType_inValidInputMetaDataUndefined = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // stringToDataType_inValidInputMetaDataUndefined
export const cstringToDataType_inValidInputMetaDataNaN = cstringToDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // stringToDataType_inValidInputMetaDataNaN

export const cstringToBoolean_validDataString = cstringToBoolean + wrd.cvalid + wrd.cData + wrd.cString; // stringToBoolean_validDataString
export const cstringToBoolean_inValidDataInputDataString = cstringToBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // stringToBoolean_inValidDataInputDataString
export const cstringToBoolean_inValidDataInputMetaDataString = cstringToBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // stringToBoolean_inValidDataInputMetaDataString
export const cstringToBoolean_inValidInputDataInteger = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // stringToBoolean_inValidInputDataInteger
export const cstringToBoolean_inValidInputDataBoolean = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // stringToBoolean_inValidInputDataBoolean
export const cstringToBoolean_inValidInputMetaDataInteger = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // stringToBoolean_inValidInputMetaDataInteger
export const cstringToBoolean_inValidInputMetaDataBoolean = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // stringToBoolean_inValidInputMetaDataBoolean
export const cstringToBoolean_inValidInputDataUndefined = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // stringToBoolean_inValidInputDataUndefined
export const cstringToBoolean_inValidInputDataNaN = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // stringToBoolean_inValidInputDataNaN
export const cstringToBoolean_inValidInputMetaDataUndefined = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // stringToBoolean_inValidInputMetaDataUndefined
export const cstringToBoolean_inValidInputMetaDataNaN = cstringToBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // stringToBoolean_inValidInputMetaDataNaN

export const cdetermineObjectDataType_validDataString = cdetermineObjectDataType + wrd.cvalid + wrd.cData + wrd.cString; // determineObjectDataType_validDataString
export const cdetermineObjectDataType_inValidDataInputDataString = cdetermineObjectDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // determineObjectDataType_inValidDataInputDataString
export const cdetermineObjectDataType_inValidDataInputMetaDataString = cdetermineObjectDataType + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // determineObjectDataType_inValidDataInputMetaDataString
export const cdetermineObjectDataType_inValidInputDataInteger = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // determineObjectDataType_inValidInputDataInteger
export const cdetermineObjectDataType_inValidInputDataBoolean = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // determineObjectDataType_inValidInputDataBoolean
export const cdetermineObjectDataType_inValidInputMetaDataInteger = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // determineObjectDataType_inValidInputMetaDataInteger
export const cdetermineObjectDataType_inValidInputMetaDataBoolean = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // determineObjectDataType_inValidInputMetaDataBoolean
export const cdetermineObjectDataType_inValidInputDataUndefined = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // determineObjectDataType_inValidInputDataUndefined
export const cdetermineObjectDataType_inValidInputDataNaN = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // determineObjectDataType_inValidInputDataNaN
export const cdetermineObjectDataType_inValidInputMetaDataUndefined = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // determineObjectDataType_inValidInputMetaDataUndefined
export const cdetermineObjectDataType_inValidInputMetaDataNaN = cdetermineObjectDataType + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // determineObjectDataType_inValidInputMetaDataNaN

export const cisBoolean_validDataString = cisBoolean + wrd.cvalid + wrd.cData + wrd.cString; // isBoolean_validDataString
export const cisBoolean_inValidDataInputDataString = cisBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isBoolean_inValidDataInputDataString
export const cisBoolean_inValidDataInputMetaDataString = cisBoolean + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isBoolean_inValidDataInputMetaDataString
export const cisBoolean_inValidInputDataInteger = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isBoolean_inValidInputDataInteger
export const cisBoolean_inValidInputDataBoolean = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isBoolean_inValidInputDataBoolean
export const cisBoolean_inValidInputMetaDataInteger = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isBoolean_inValidInputMetaDataInteger
export const cisBoolean_inValidInputMetaDataBoolean = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isBoolean_inValidInputMetaDataBoolean
export const cisBoolean_inValidInputDataUndefined = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isBoolean_inValidInputDataUndefined
export const cisBoolean_inValidInputDataNaN = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isBoolean_inValidInputDataNaN
export const cisBoolean_inValidInputMetaDataUndefined = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isBoolean_inValidInputMetaDataUndefined
export const cisBoolean_inValidInputMetaDataNaN = cisBoolean + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isBoolean_inValidInputMetaDataNaN

export const cisInteger_validDataString = cisInteger + wrd.cvalid + wrd.cData + wrd.cString; // isInteger_validDataString
export const cisInteger_inValidDataInputDataString = cisInteger + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isInteger_inValidDataInputDataString
export const cisInteger_inValidDataInputMetaDataString = cisInteger + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isInteger_inValidDataInputMetaDataString
export const cisInteger_inValidInputDataInteger = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isInteger_inValidInputDataInteger
export const cisInteger_inValidInputDataBoolean = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isInteger_inValidInputDataBoolean
export const cisInteger_inValidInputMetaDataInteger = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isInteger_inValidInputMetaDataInteger
export const cisInteger_inValidInputMetaDataBoolean = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isInteger_inValidInputMetaDataBoolean
export const cisInteger_inValidInputDataUndefined = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isInteger_inValidInputDataUndefined
export const cisInteger_inValidInputDataNaN = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isInteger_inValidInputDataNaN
export const cisInteger_inValidInputMetaDataUndefined = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isInteger_inValidInputMetaDataUndefined
export const cisInteger_inValidInputMetaDataNaN = cisInteger + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isInteger_inValidInputMetaDataNaN

export const cisFloat_validDataString = cisFloat + wrd.cvalid + wrd.cData + wrd.cString; // isFloat_validDataString
export const cisFloat_inValidDataInputDataString = cisFloat + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isFloat_inValidDataInputDataString
export const cisFloat_inValidDataInputMetaDataString = cisFloat + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isFloat_inValidDataInputMetaDataString
export const cisFloat_inValidInputDataInteger = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isFloat_inValidInputDataInteger
export const cisFloat_inValidInputDataBoolean = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isFloat_inValidInputDataBoolean
export const cisFloat_inValidInputMetaDataInteger = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isFloat_inValidInputMetaDataInteger
export const cisFloat_inValidInputMetaDataBoolean = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isFloat_inValidInputMetaDataBoolean
export const cisFloat_inValidInputDataUndefined = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isFloat_inValidInputDataUndefined
export const cisFloat_inValidInputDataNaN = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isFloat_inValidInputDataNaN
export const cisFloat_inValidInputMetaDataUndefined = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isFloat_inValidInputMetaDataUndefined
export const cisFloat_inValidInputMetaDataNaN = cisFloat + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isFloat_inValidInputMetaDataNaN

export const cisString_validDataString = cisString + wrd.cvalid + wrd.cData + wrd.cString; // isString_validDataString
export const cisString_inValidDataInputDataString = cisString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // isString_inValidDataInputDataString
export const cisString_inValidDataInputMetaDataString = cisString + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // isString_inValidDataInputMetaDataString
export const cisString_inValidInputDataInteger = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // isString_inValidInputDataInteger
export const cisString_inValidInputDataBoolean = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // isString_inValidInputDataBoolean
export const cisString_inValidInputMetaDataInteger = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // isString_inValidInputMetaDataInteger
export const cisString_inValidInputMetaDataBoolean = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // isString_inValidInputMetaDataBoolean
export const cisString_inValidInputDataUndefined = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // isString_inValidInputDataUndefined
export const cisString_inValidInputDataNaN = cisString + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // isString_inValidInputDataNaN
export const cisString_inValidInputMetaDataUndefined = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // isString_inValidInputMetaDataUndefined
export const cisString_inValidInputMetaDataNaN = cisString + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // isString_inValidInputMetaDataNaN

export const creplaceDoublePercentWithMessage_validDataString = creplaceDoublePercentWithMessage + wrd.cvalid + wrd.cData + wrd.cString; // replaceDoublePercentWithMessage_validDataString
export const creplaceDoublePercentWithMessage_inValidDataInputDataString = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // replaceDoublePercentWithMessage_inValidDataInputDataString
export const creplaceDoublePercentWithMessage_inValidDataInputMetaDataString = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // replaceDoublePercentWithMessage_inValidDataInputMetaDataString
export const creplaceDoublePercentWithMessage_inValidInputDataInteger = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // replaceDoublePercentWithMessage_inValidInputDataInteger
export const creplaceDoublePercentWithMessage_inValidInputDataBoolean = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // replaceDoublePercentWithMessage_inValidInputDataBoolean
export const creplaceDoublePercentWithMessage_inValidInputMetaDataInteger = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // replaceDoublePercentWithMessage_inValidInputMetaDataInteger
export const creplaceDoublePercentWithMessage_inValidInputMetaDataBoolean = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // replaceDoublePercentWithMessage_inValidInputMetaDataBoolean
export const creplaceDoublePercentWithMessage_inValidInputDataUndefined = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // replaceDoublePercentWithMessage_inValidInputDataUndefined
export const creplaceDoublePercentWithMessage_inValidInputDataNaN = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // replaceDoublePercentWithMessage_inValidInputDataNaN
export const creplaceDoublePercentWithMessage_inValidInputMetaDataUndefined = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // replaceDoublePercentWithMessage_inValidInputMetaDataUndefined
export const creplaceDoublePercentWithMessage_inValidInputMetaDataNaN = creplaceDoublePercentWithMessage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // replaceDoublePercentWithMessage_inValidInputMetaDataNaN

export const cutilitiesReplaceCharacterWithCharacter_validDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cvalid + wrd.cData + wrd.cString; // utilitiesReplaceCharacterWithCharacter_validDataString
export const cutilitiesReplaceCharacterWithCharacter_inValidDataInputDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // utilitiesReplaceCharacterWithCharacter_inValidDataInputDataString
export const cutilitiesReplaceCharacterWithCharacter_inValidDataInputMetaDataString = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // utilitiesReplaceCharacterWithCharacter_inValidDataInputMetaDataString
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // utilitiesReplaceCharacterWithCharacter_inValidInputDataInteger
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataBoolean = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // utilitiesReplaceCharacterWithCharacter_inValidInputDataBoolean
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataUndefined = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // utilitiesReplaceCharacterWithCharacter_inValidInputDataUndefined
export const cutilitiesReplaceCharacterWithCharacter_inValidInputDataNaN = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // utilitiesReplaceCharacterWithCharacter_inValidInputDataNaN
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataUndefined = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataUndefined
export const cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN = cutilitiesReplaceCharacterWithCharacter + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN

/* timeComputation  */
export const cgetNowMoment_validDataString = cgetNowMoment + wrd.cvalid + wrd.cData + wrd.cString; // getNowMoment_validDataString
export const cgetNowMoment_inValidDataInputDataString = cgetNowMoment + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // getNowMoment_inValidDataInputDataString
export const cgetNowMoment_inValidDataInputMetaDataString = cgetNowMoment + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // getNowMoment_inValidDataInputMetaDataString
export const cgetNowMoment_inValidInputDataInteger = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // getNowMoment_inValidInputDataInteger
export const cgetNowMoment_inValidInputDataBoolean = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // getNowMoment_inValidInputDataBoolean
export const cgetNowMoment_inValidInputMetaDataInteger = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // getNowMoment_inValidInputMetaDataInteger
export const cgetNowMoment_inValidInputMetaDataBoolean = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // getNowMoment_inValidInputMetaDataBoolean
export const cgetNowMoment_inValidInputDataUndefined = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // getNowMoment_inValidInputDataUndefined
export const cgetNowMoment_inValidInputDataNaN = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // getNowMoment_inValidInputDataNaN
export const cgetNowMoment_inValidInputMetaDataUndefined = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // getNowMoment_inValidInputMetaDataUndefined
export const cgetNowMoment_inValidInputMetaDataNaN = cgetNowMoment + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // getNowMoment_inValidInputMetaDataNaN

export const ccomputeDeltaTime_validDataString = ccomputeDeltaTime + wrd.cvalid + wrd.cData + wrd.cString; // computeDeltaTime_validDataString
export const ccomputeDeltaTime_inValidDataInputDataString = ccomputeDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // computeDeltaTime_inValidDataInputDataString
export const ccomputeDeltaTime_inValidDataInputMetaDataString = ccomputeDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // computeDeltaTime_inValidDataInputMetaDataString
export const ccomputeDeltaTime_inValidInputDataInteger = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // computeDeltaTime_inValidInputDataInteger
export const ccomputeDeltaTime_inValidInputDataBoolean = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // computeDeltaTime_inValidInputDataBoolean
export const ccomputeDeltaTime_inValidInputMetaDataInteger = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // computeDeltaTime_inValidInputMetaDataInteger
export const ccomputeDeltaTime_inValidInputMetaDataBoolean = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // computeDeltaTime_inValidInputMetaDataBoolean
export const ccomputeDeltaTime_inValidInputDataUndefined = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // computeDeltaTime_inValidInputDataUndefined
export const ccomputeDeltaTime_inValidInputDataNaN = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // computeDeltaTime_inValidInputDataNaN
export const ccomputeDeltaTime_inValidInputMetaDataUndefined = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // computeDeltaTime_inValidInputMetaDataUndefined
export const ccomputeDeltaTime_inValidInputMetaDataNaN = ccomputeDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // computeDeltaTime_inValidInputMetaDataNaN

export const creformatDeltaTime_validDataString = creformatDeltaTime + wrd.cvalid + wrd.cData + wrd.cString; // reformatDeltaTime_validDataString
export const creformatDeltaTime_validInputDataInteger = creformatDeltaTime + wrd.cvalid + wrd.cInput + wrd.cData + wrd.cInteger; // reformatDeltaTime_validInputDataInteger
export const creformatDeltaTime_validInputDataStringInteger = creformatDeltaTime + wrd.cvalid + wrd.cInput + wrd.cData + wrd.cString + wrd.cInteger; // reformatDeltaTime_validInputDataStringInteger
export const creformatDeltaTime_validInputDataIntegerString = creformatDeltaTime + wrd.cvalid + wrd.cInput + wrd.cData + wrd.cInteger + wrd.cString; // reformatDeltaTime_validInputDataIntegerString
export const creformatDeltaTime_inValidDataInputDataString = creformatDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // reformatDeltaTime_inValidDataInputDataString
export const creformatDeltaTime_inValidDataInputMetaDataString = creformatDeltaTime + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // reformatDeltaTime_inValidDataInputMetaDataString
export const creformatDeltaTime_inValidInputDataInteger = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // reformatDeltaTime_inValidInputDataInteger
export const creformatDeltaTime_inValidInputDataBoolean = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // reformatDeltaTime_inValidInputDataBoolean
export const creformatDeltaTime_inValidInputMetaDataInteger = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // reformatDeltaTime_inValidInputMetaDataInteger
export const creformatDeltaTime_inValidInputMetaDataBoolean = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // reformatDeltaTime_inValidInputMetaDataBoolean
export const creformatDeltaTime_inValidInputDataUndefined = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // reformatDeltaTime_inValidInputDataUndefined
export const creformatDeltaTime_inValidInputDataNaN = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // reformatDeltaTime_inValidInputDataNaN
export const creformatDeltaTime_inValidInputMetaDataUndefined = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // reformatDeltaTime_inValidInputMetaDataUndefined
export const creformatDeltaTime_inValidInputMetaDataNaN = creformatDeltaTime + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // reformatDeltaTime_inValidInputMetaDataNaN

export const csleep_validDataString = csleep + wrd.cvalid + wrd.cData + wrd.cString; // sleep_validDataString
export const csleep_inValidDataInputDataString = csleep + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // sleep_inValidDataInputDataString
export const csleep_inValidDataInputMetaDataString = csleep + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString; // sleep_inValidDataInputMetaDataString
export const csleep_inValidInputDataInteger = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // sleep_inValidInputDataInteger
export const csleep_inValidInputDataBoolean = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // sleep_inValidInputDataBoolean
export const csleep_inValidInputMetaDataInteger = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger; // sleep_inValidInputMetaDataInteger
export const csleep_inValidInputMetaDataBoolean = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean; // sleep_inValidInputMetaDataBoolean
export const csleep_inValidInputDataUndefined = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // sleep_inValidInputDataUndefined
export const csleep_inValidInputDataNaN = csleep + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // sleep_inValidInputDataNaN
export const csleep_inValidInputMetaDataUndefined = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined; // sleep_inValidInputMetaDataUndefined
export const csleep_inValidInputMetaDataNaN = csleep + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN; // sleep_inValidInputMetaDataNaN

/* advanced */
export const ccommandSequencer_validDataString = ccommandSequencer + wrd.cvalid + wrd.cData + wrd.cString; // commandSequencer_validDataString
export const ccommandSequencer_inValidDataInputDataString = ccommandSequencer + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // commandSequencer_inValidDataInputDataString
export const ccommandSequencer_inValidInputDataInteger = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // commandSequencer_inValidInputDataInteger
export const ccommandSequencer_inValidInputDataBoolean = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // commandSequencer_inValidInputDataBoolean
export const ccommandSequencer_inValidInputDataUndefined = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // commandSequencer_inValidInputDataUndefined
export const ccommandSequencer_inValidInputDataNaN = ccommandSequencer + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // commandSequencer_inValidInputDataNaN

export const cworkflow_validDataString = cworkflow + wrd.cvalid + wrd.cData + wrd.cString; // workflow_validDataString
export const cworkflow_inValidDataInputDataString = cworkflow + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // workflow_inValidDataInputDataString
export const cworkflow_inValidInputDataInteger = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // workflow_inValidInputDataInteger
export const cworkflow_inValidInputDataBoolean = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // workflow_inValidInputDataBoolean
export const cworkflow_inValidInputDataUndefined = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // workflow_inValidInputDataUndefined
export const cworkflow_inValidInputDataNaN = cworkflow + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // workflow_inValidInputDataNaN

export const cbusinessRule_validDataString = cbusinessRule + wrd.cvalid + wrd.cData + wrd.cString; // businessRule_validDataString
export const cbusinessRule_inValidDataInputDataString = cbusinessRule + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // businessRule_inValidDataInputDataString
export const cbusinessRule_inValidInputDataInteger = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // businessRule_inValidInputDataInteger
export const cbusinessRule_inValidInputDataBoolean = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // businessRule_inValidInputDataBoolean
export const cbusinessRule_inValidInputDataUndefined = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // businessRule_inValidInputDataUndefined
export const cbusinessRule_inValidInputDataNaN = cbusinessRule + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // businessRule_inValidInputDataNaN

export const ccommandGenerator_validDataString = ccommandGenerator + wrd.cvalid + wrd.cData + wrd.cString; // commandGenerator_validDataString
export const ccommandGenerator_inValidDataInputDataString = ccommandGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // commandGenerator_inValidDataInputDataString
export const ccommandGenerator_inValidInputDataInteger = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // commandGenerator_inValidInputDataInteger
export const ccommandGenerator_inValidInputDataBoolean = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // commandGenerator_inValidInputDataBoolean
export const ccommandGenerator_inValidInputDataUndefined = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // commandGenerator_inValidInputDataUndefined
export const ccommandGenerator_inValidInputDataNaN = ccommandGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // commandGenerator_inValidInputDataNaN

export const ccommandAliasGenerator_validDataString = ccommandAliasGenerator + wrd.cvalid + wrd.cData + wrd.cString; // commandAliasGenerator_validDataString
export const ccommandAliasGenerator_inValidDataInputDataString = ccommandAliasGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // commandAliasGenerator_inValidDataInputDataString
export const ccommandAliasGenerator_inValidInputDataInteger = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // commandAliasGenerator_inValidInputDataInteger
export const ccommandAliasGenerator_inValidInputDataBoolean = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // commandAliasGenerator_inValidInputDataBoolean
export const ccommandAliasGenerator_inValidInputDataUndefined = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // commandAliasGenerator_inValidInputDataUndefined
export const ccommandAliasGenerator_inValidInputDataNaN = ccommandAliasGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // commandAliasGenerator_inValidInputDataNaN

/* auxiliary */
export const cconvertColors_validDataString = cconvertColors + wrd.cvalid + wrd.cData + wrd.cString; // convertColors_validDataString

/* configuration */
export const cchangeConfigurationSetting_validDataString = cchangeConfigurationSetting + wrd.cvalid + wrd.cData + wrd.cString; // changeConfigurationSetting_validDataString
export const cchangeConfigurationSetting_inValidDataInputDataString = cchangeConfigurationSetting + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // changeConfigurationSetting_inValidDataInputDataString
export const cchangeConfigurationSetting_inValidInputDataInteger = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // changeConfigurationSetting_inValidInputDataInteger
export const cchangeConfigurationSetting_inValidInputDataBoolean = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // changeConfigurationSetting_inValidInputDataBoolean
export const cchangeConfigurationSetting_inValidInputDataNaN = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // changeConfigurationSetting_inValidInputDataNaN
export const cchangeConfigurationSetting_inValidInputDataUndefined = cchangeConfigurationSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // changeConfigurationSetting_inValidInputDataUndefined

export const cchangeDebugConfigurationTheme_validDataString = cchangeDebugConfigurationTheme + wrd.cvalid + wrd.cData + wrd.cString; // changeDebugConfigurationTheme_validDataString
export const cchangeDebugConfigurationTheme_inValidDataInputDataString = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString; // changeDebugConfigurationTheme_inValidDataInputDataString
export const cchangeDebugConfigurationTheme_inValidInputDataInteger = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger; // changeDebugConfigurationTheme_inValidInputDataInteger
export const cchangeDebugConfigurationTheme_inValidInputDataBoolean = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean; // changeDebugConfigurationTheme_inValidInputDataBoolean
export const cchangeDebugConfigurationTheme_inValidInputDataUndefined = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined; // changeDebugConfigurationTheme_inValidInputDataUndefined
export const cchangeDebugConfigurationTheme_inValidInputDataNaN = cchangeDebugConfigurationTheme + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN; // changeDebugConfigurationTheme_inValidInputDataNaN

export const csaveConfiguration_validDataString = csaveConfiguration + wrd.cvalid + wrd.cData + wrd.cString; // saveConfiguration_validDataString

export const clistConfigurationThemes_validDataString = clistConfigurationThemes + wrd.cvalid + wrd.cData + wrd.cString; // listConfigurationThemes_validDataString

/* constant */
export const cconstantsGenerator_validDataString = cconstantGenerator + wrd.cvalid + wrd.cData + wrd.cString;
export const cconstantsGenerator_inValidDataInputDataString = cconstantGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconstantsGenerator_inValidDataInputMetaDataString = cconstantGenerator + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconstantsGenerator_inValidInputDataInteger = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconstantsGenerator_inValidInputDataBoolean = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconstantsGenerator_inValidInputMetaDataInteger = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconstantsGenerator_inValidInputMetaDataBoolean = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cconstantsGenerator_inValidInputDataUndefined = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cconstantsGenerator_inValidInputDataNaN = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cconstantsGenerator_inValidInputMetaDataUndefined = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cconstantsGenerator_inValidInputMetaDataNaN = cconstantGenerator + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cconstantsGeneratorList_validDataString = cconstantsGeneratorList + wrd.cvalid + wrd.cData + wrd.cString;
export const cconstantsGeneratorList_inValidDataInputDataString = cconstantsGeneratorList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconstantsGeneratorList_inValidDataInputMetaDataString = cconstantsGeneratorList + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconstantsGeneratorList_inValidInputDataInteger = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconstantsGeneratorList_inValidInputDataBoolean = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconstantsGeneratorList_inValidInputMetaDataInteger = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconstantsGeneratorList_inValidInputMetaDataBoolean = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cconstantsGeneratorList_inValidInputDataUndefined = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cconstantsGeneratorList_inValidInputDataNaN = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cconstantsGeneratorList_inValidInputMetaDataUndefined = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cconstantsGeneratorList_inValidInputMetaDataNaN = cconstantsGeneratorList + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cconstantsPatternRecognizer_validDataString = cconstantsPatternRecognizer + wrd.cvalid + wrd.cData + wrd.cString;
export const cconstantsPatternRecognizer_inValidDataInputDataString = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cconstantsPatternRecognizer_inValidDataInputMetaDataString = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cconstantsPatternRecognizer_inValidInputDataInteger = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cconstantsPatternRecognizer_inValidInputDataBoolean = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cconstantsPatternRecognizer_inValidInputMetaDataInteger = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cconstantsPatternRecognizer_inValidInputMetaDataBoolean = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cconstantsPatternRecognizer_inValidInputDataUndefined = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cconstantsPatternRecognizer_inValidInputDataNaN = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cconstantsPatternRecognizer_inValidInputMetaDataUndefined = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cconstantsPatternRecognizer_inValidInputMetaDataNaN = cconstantsPatternRecognizer + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cevaluateConstant_validDataString = cevaluateConstant + wrd.cvalid + wrd.cData + wrd.cString;
export const cevaluateConstant_inValidDataInputDataString = cevaluateConstant + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cevaluateConstant_inValidDataInputMetaDataString = cevaluateConstant + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cevaluateConstant_inValidInputDataInteger = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cevaluateConstant_inValidInputDataBoolean = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cevaluateConstant_inValidInputMetaDataInteger = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cevaluateConstant_inValidInputMetaDataBoolean = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cevaluateConstant_inValidInputDataUndefined = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cevaluateConstant_inValidInputDataNaN = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cevaluateConstant_inValidInputMetaDataUndefined = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cevaluateConstant_inValidInputMetaDataNaN = cevaluateConstant + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* dataDirectorate */
export const cprintDataHive_validDataString = cprintDataHive + wrd.cvalid + wrd.cData + wrd.cString;
export const cprintDataHive_inValidDataInputDataString = cprintDataHive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cprintDataHive_inValidDataInputMetaDataString = cprintDataHive + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cprintDataHive_inValidInputDataInteger = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cprintDataHive_inValidInputDataBoolean = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cprintDataHive_inValidInputMetaDataInteger = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cprintDataHive_inValidInputMetaDataBoolean = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cprintDataHive_inValidInputDataUndefined = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cprintDataHive_inValidInputDataNaN = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cprintDataHive_inValidInputMetaDataUndefined = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cprintDataHive_inValidInputMetaDataNaN = cprintDataHive + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cprintDataHiveAttributes_validDataString = cprintDataHiveAttributes + wrd.cvalid + wrd.cData + wrd.cString;
export const cprintDataHiveAttributes_inValidDataInputDataString = cprintDataHiveAttributes + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cprintDataHiveAttributes_inValidDataInputMetaDataString = cprintDataHiveAttributes + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cprintDataHiveAttributes_inValidInputDataInteger = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cprintDataHiveAttributes_inValidInputDataBoolean = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cprintDataHiveAttributes_inValidInputMetaDataInteger = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cprintDataHiveAttributes_inValidInputMetaDataBoolean = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cprintDataHiveAttributes_inValidInputDataUndefined = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cprintDataHiveAttributes_inValidInputDataNaN = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cprintDataHiveAttributes_inValidInputMetaDataUndefined = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cprintDataHiveAttributes_inValidInputMetaDataNaN = cprintDataHiveAttributes + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cclearDataStorage_validDataString = cclearDataStorage + wrd.cvalid + wrd.cData + wrd.cString;
export const cclearDataStorage_inValidDataInputDataString = cclearDataStorage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cclearDataStorage_inValidDataInputMetaDataString = cclearDataStorage + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cclearDataStorage_inValidInputDataInteger = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cclearDataStorage_inValidInputDataBoolean = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cclearDataStorage_inValidInputMetaDataInteger = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cclearDataStorage_inValidInputMetaDataBoolean = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cclearDataStorage_inValidInputDataUndefined = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cclearDataStorage_inValidInputDataNaN = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cclearDataStorage_inValidInputMetaDataUndefined = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cclearDataStorage_inValidInputMetaDataNaN = cclearDataStorage + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cchangeSetting_validDataString = cchangeSetting + wrd.cvalid + wrd.cData + wrd.cString;
export const cchangeSetting_inValidDataInputDataString = cchangeSetting + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cchangeSetting_inValidDataInputMetaDataString = cchangeSetting + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cchangeSetting_inValidInputDataInteger = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cInteger;
export const cchangeSetting_inValidInputDataBoolean = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cchangeSetting_inValidInputMetaDataInteger = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cchangeSetting_inValidInputMetaDataBoolean = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cchangeSetting_inValidInputDataUndefined = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cUndefined;
export const cchangeSetting_inValidInputDataNaN = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cData + cNaN;
export const cchangeSetting_inValidInputMetaDataUndefined = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cchangeSetting_inValidInputMetaDataNaN = cchangeSetting + wrd.cinvalid + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* integrationTests */
export const cvalidateConstants_validDataString = cvalidateConstants + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateConstants_inValidDataString = cvalidateConstants + wrd.cinvalid + wrd.cData + wrd.cString;
export const cvalidateConstants_inValidDataUndefined1 = cvalidateConstants + wrd.cinvalid + wrd.cData + cUndefined + num.c1;
export const cvalidateConstants_inValidDataUndefined2 = cvalidateConstants + wrd.cinvalid + wrd.cData + cUndefined + num.c2;
export const cvalidateConstants_inValidDataUndefined3 = cvalidateConstants + wrd.cinvalid + wrd.cData + cUndefined + num.c3;
export const cvalidateConstants_inValidDataNaN1 = cvalidateConstants + wrd.cinvalid + wrd.cData + cNaN + num.c1;
export const cvalidateConstants_inValidDataNaN2 = cvalidateConstants + wrd.cinvalid + wrd.cData + cNaN + num.c2;
export const cvalidateConstants_inValidDataNaN3 = cvalidateConstants + wrd.cinvalid + wrd.cData + cNaN + num.c3;

export const cvalidateCommandAliases_validDataString = cvalidateCommandAliases + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateCommandAliases_inValidDataObjectDuplicate = cvalidateCommandAliases + wrd.cinvalid + wrd.cData + wrd.cObject + wrd.cDuplicate;
export const cvalidateCommandAliases_inValidDataUndefined = cvalidateCommandAliases + wrd.cinvalid + wrd.cData + cUndefined;
export const cvalidateCommandAliases_inValidDataNaN = cvalidateCommandAliases + wrd.cinvalid + wrd.cData + cNaN;

export const cvalidateWorkflows_validDataString = cvalidateWorkflows + wrd.cvalid + wrd.cData + wrd.cString;
export const cvalidateWorkflows_inValidDataObjectDuplicate = cvalidateWorkflows + wrd.cinvalid + wrd.cData + wrd.cObject + wrd.cDuplicate;
export const cvalidateWorkflows_inValidDataUndefined = cvalidateWorkflows + wrd.cinvalid + wrd.cData + cUndefined;
export const cvalidateWorkflows_inValidDataNaN = cvalidateWorkflows + wrd.cinvalid + wrd.cData + cNaN;

/* performanceMetric */
export const cbusinessRulesMetrics_validDataString = cbusinessRulesMetrics + wrd.cvalid + wrd.cData + wrd.cString;
export const cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackString = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cString;
export const cbusinessRulesMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackString = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cString;
export const cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackInteger = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cInteger;
export const cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackBoolean = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cBoolean;
export const cbusinessRulesMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackInteger = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cInteger;
export const cbusinessRulesMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackBoolean = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cBoolean;
export const cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackUndefined = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack + cUndefined;
export const cbusinessRulesMetrics_inValidDataBusinessRulesPerformanceTrackingStackNaN = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cPerformance + wrd.cTracking + wrd.cStack + cNaN;
export const cbusinessRulesMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackUndefined = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + cUndefined;
export const cbusinessRulesMetrics_inValidDataBusinessRulesNamesPerformanceTrackingStackNaN = cbusinessRulesMetrics + wrd.cinvalid + wrd.cData + wrd.cBusiness + wrd.cRules + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + cNaN;

export const ccommandMetrics_validDataString = ccommandMetrics + wrd.cvalid + wrd.cData + wrd.cString;
export const ccommandMetrics_inValidDataCommandPerformanceTrackingStackString = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cString;
export const ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackString = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommands + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cString;
export const ccommandMetrics_inValidDataCommandPerformanceTrackingStackInteger = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cInteger;
export const ccommandMetrics_inValidDataCommandPerformanceTrackingStackBoolean = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cBoolean;
export const ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackInteger = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommands + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cInteger;
export const ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackBoolean = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommands + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + wrd.cBoolean;
export const ccommandMetrics_inValidDataCommandPerformanceTrackingStackUndefined = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack + cUndefined;
export const ccommandMetrics_inValidDataCommandPerformanceTrackingStackNaN = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cPerformance + wrd.cTracking + wrd.cStack + cNaN;
export const ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackUndefined = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommands + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + cUndefined;
export const ccommandMetrics_inValidDataCommandsNamesPerformanceTrackingStackNaN = ccommandMetrics + wrd.cinvalid + wrd.cData + wrd.cCommands + wrd.cNames + wrd.cPerformance + wrd.cTracking + wrd.cStack + cNaN;

/* system */
export const cechoCommand_validDataString = cechoCommand + wrd.cvalid + wrd.cData + wrd.cString;
export const cechoCommand_inValidDataInputDataString = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cechoCommand_inValidDataInputMetaDataString = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cechoCommand_inValidInputDataInteger = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cechoCommand_inValidInputDataBoolean = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cechoCommand_inValidInputMetaDataInteger = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cechoCommand_inValidInputMetaDataBoolean = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cechoCommand_inValidInputDataUndefined = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cechoCommand_inValidInputDataNaN = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cechoCommand_inValidInputMetaDataUndefined = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cechoCommand_inValidInputMetaDataNaN = cechoCommand + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cexit_validDataString = cexit + wrd.cvalid + wrd.cData + wrd.cString;
export const cexit_inValidDataInputDataString = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cexit_inValidDataInputMetaDataString = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cexit_inValidInputDataInteger = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cexit_inValidInputDataBoolean = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cexit_inValidInputMetaDataInteger = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cexit_inValidInputMetaDataBoolean = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cexit_inValidInputDataUndefined = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cexit_inValidInputDataNaN = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cexit_inValidInputMetaDataUndefined = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cexit_inValidInputMetaDataNaN = cexit + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cversion_validDataString = cversion + wrd.cvalid + wrd.cData + wrd.cString;
export const cversion_inValidDataInputDataString = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cversion_inValidDataInputMetaDataString = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cversion_inValidInputDataInteger = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cversion_inValidInputDataBoolean = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cversion_inValidInputMetaDataInteger = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cversion_inValidInputMetaDataBoolean = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cversion_inValidInputDataUndefined = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cversion_inValidInputDataNaN = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cversion_inValidInputMetaDataUndefined = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cversion_inValidInputMetaDataNaN = cversion + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cabout_validDataString = cabout + wrd.cvalid + wrd.cData + wrd.cString;
export const cabout_inValidDataInputDataString = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cabout_inValidDataInputMetaDataString = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cabout_inValidInputDataInteger = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cabout_inValidInputDataBoolean = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cabout_inValidInputMetaDataInteger = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cabout_inValidInputMetaDataBoolean = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cabout_inValidInputDataUndefined = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cabout_inValidInputDataNaN = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cabout_inValidInputMetaDataUndefined = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cabout_inValidInputMetaDataNaN = cabout + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cname_validDataString = cname + wrd.cvalid + wrd.cData + wrd.cString;
export const cname_inValidDataInputDataString = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cname_inValidDataInputMetaDataString = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cname_inValidInputDataInteger = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cname_inValidInputDataBoolean = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cname_inValidInputMetaDataInteger = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cname_inValidInputMetaDataBoolean = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cname_inValidInputDataUndefined = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cname_inValidInputDataNaN = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cname_inValidInputMetaDataUndefined = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cname_inValidInputMetaDataNaN = cname + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const chelp_validDataString = chelp + wrd.cvalid + wrd.cData + wrd.cString;
export const chelp_inValidDataInputDataString = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const chelp_inValidDataInputMetaDataString = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const chelp_inValidInputDataInteger = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const chelp_inValidInputDataBoolean = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const chelp_inValidInputMetaDataInteger = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const chelp_inValidInputMetaDataBoolean = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const chelp_inValidInputDataUndefined = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const chelp_inValidInputDataNaN = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const chelp_inValidInputMetaDataUndefined = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const chelp_inValidInputMetaDataNaN = chelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

export const cworkflowHelp_validDataString = cworkflowHelp + wrd.cvalid + wrd.cData + wrd.cString;
export const cworkflowHelp_inValidDataInputDataString = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cString;
export const cworkflowHelp_inValidDataInputMetaDataString = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cString;
export const cworkflowHelp_inValidInputDataInteger = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cInteger;
export const cworkflowHelp_inValidInputDataBoolean = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + wrd.cBoolean;
export const cworkflowHelp_inValidInputMetaDataInteger = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cInteger;
export const cworkflowHelp_inValidInputMetaDataBoolean = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + wrd.cBoolean;
export const cworkflowHelp_inValidInputDataUndefined = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cUndefined;
export const cworkflowHelp_inValidInputDataNaN = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cData + cNaN;
export const cworkflowHelp_inValidInputMetaDataUndefined = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cUndefined;
export const cworkflowHelp_inValidInputMetaDataNaN = cworkflowHelp + wrd.cinvalid + wrd.cData + wrd.cInput + wrd.cMeta + wrd.cData + cNaN;

/* chiefCommander */
export const caddClientCommands_validDataString = caddClientCommands + wrd.cvalid + wrd.cData + wrd.cString;
export const caddClientCommands_inValidDataClientCommandsString = caddClientCommands + wrd.cinvalid + wrd.cData + wrd.cClient + wrd.cCommands + wrd.cString;
export const caddClientCommands_inValidClientCommandsInteger = caddClientCommands + wrd.cinvalid + wrd.cClient + wrd.cCommands + wrd.cInteger;
export const caddClientCommands_inValidClientCommandsBoolean = caddClientCommands + wrd.cinvalid + wrd.cClient + wrd.cCommands + wrd.cBoolean;
export const caddClientCommands_inValidClientCommandsUndefined = caddClientCommands + wrd.cinvalid + wrd.cClient + wrd.cCommands + cUndefined;
export const caddClientCommands_inValidClientCommandsNaN = caddClientCommands + wrd.cinvalid + wrd.cClient + wrd.cCommands + cNaN;

/* chiefConfiguration */
export const csetupConfiguration_validDataString = csetupConfiguration + wrd.cvalid + wrd.cData + wrd.cString;
export const csetupConfiguration_inValidDataAppConfigPathString = csetupConfiguration + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cString;
export const csetupConfiguration_inValidDataFrameworkConfigPathString = csetupConfiguration + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cString;
export const csetupConfiguration_inValidAppConfigPathInteger = csetupConfiguration + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cInteger;
export const csetupConfiguration_inValidAppConfigPathBoolean = csetupConfiguration + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cBoolean;
export const csetupConfiguration_inValidFrameworkConfigPathInteger = csetupConfiguration + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cInteger;
export const csetupConfiguration_inValidFrameworkConfigPathBoolean = csetupConfiguration + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cBoolean;
export const csetupConfiguration_inValidAppConfigPathUndefined = csetupConfiguration + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + cUndefined;
export const csetupConfiguration_inValidAppConfigPathNaN = csetupConfiguration + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + cNaN;
export const csetupConfiguration_inValidFrameworkConfigPathUndefined = csetupConfiguration + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + cUndefined;
export const csetupConfiguration_inValidFrameworkConfigPathNaN = csetupConfiguration + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + cNaN;

/* chiefData */
export const csearchForUniversalDebugConfigSetting_validDataString = csearchForUniversalDebugConfigSetting + wrd.cvalid + wrd.cData + wrd.cString;
export const csearchForUniversalDebugConfigSetting_inValidDataAppConfigPathNameString = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cData + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cString;
export const csearchForUniversalDebugConfigSetting_inValidDataFrameworkConfigPathNameString = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cData + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cString;
export const csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameInteger = csearchForUniversalDebugConfigSetting + wrd.cinvalid + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cInteger;
export const csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameBoolean = csearchForUniversalDebugConfigSetting + wrd.cinvalid + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cBoolean;
export const csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameInteger = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cInteger;
export const csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameBoolean = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cBoolean;
export const csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameUndefined = csearchForUniversalDebugConfigSetting + wrd.cinvalid + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cName + cUndefined;
export const csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameNaN = csearchForUniversalDebugConfigSetting + wrd.cinvalid + phn.cApp + wrd.cConfig + wrd.cPath + wrd.cName + cNaN;
export const csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameUndefined = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cName + cUndefined;
export const csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameNaN = csearchForUniversalDebugConfigSetting + wrd.cinvalid + wrd.cFramework + wrd.cConfig + wrd.cPath + wrd.cName + cNaN;

export const cdetermineThemeDebugConfigFilesToLoad_validDataString = cdetermineThemeDebugConfigFilesToLoad + wrd.cvalid + wrd.cData + wrd.cString;
export const cdetermineThemeDebugConfigFilesToLoad_inValidDataThemeConfigPathNameString = cdetermineThemeDebugConfigFilesToLoad + wrd.cinvalid + wrd.cData + wrd.cTheme + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cString;
export const cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameInteger = cdetermineThemeDebugConfigFilesToLoad + wrd.cinvalid + wrd.cTheme + wrd.cConfig + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cInteger;
export const cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameBoolean = cdetermineThemeDebugConfigFilesToLoad + wrd.cinvalid + wrd.cTheme + wrd.cConfig + wrd.cConfig + wrd.cPath + wrd.cName + wrd.cBoolean;
export const cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameUndefined = cdetermineThemeDebugConfigFilesToLoad + wrd.cinvalid + wrd.cTheme + wrd.cConfig + wrd.cConfig + wrd.cPath + wrd.cName + cUndefined;
export const cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameNaN = cdetermineThemeDebugConfigFilesToLoad + wrd.cinvalid + wrd.cTheme + wrd.cConfig + wrd.cConfig + wrd.cPath + wrd.cName + cNaN;

export const cgetAndProcessCsvData_validDataString = cgetAndProcessCsvData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetAndProcessCsvData_inValidDataPathAndFilenameString = cgetAndProcessCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cString;
export const cgetAndProcessCsvData_inValidDataContextNameString = cgetAndProcessCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cString;
export const cgetAndProcessCsvData_inValidPathAndFilenameInteger = cgetAndProcessCsvData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cInteger;
export const cgetAndProcessCsvData_inValidPathAndFilenameBoolean = cgetAndProcessCsvData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cBoolean;
export const cgetAndProcessCsvData_inValidContextNameInteger = cgetAndProcessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cInteger;
export const cgetAndProcessCsvData_inValidContextNameBoolean = cgetAndProcessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + wrd.cBoolean;
export const cgetAndProcessCsvData_inValidPathAndFilenameUndefined = cgetAndProcessCsvData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + cUndefined;
export const cgetAndProcessCsvData_inValidPathAndFilenameNaN = cgetAndProcessCsvData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + cNaN;
export const cgetAndProcessCsvData_inValidContextNameUndefined = cgetAndProcessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + cUndefined;
export const cgetAndProcessCsvData_inValidContextNameNaN = cgetAndProcessCsvData + wrd.cinvalid + wrd.cContext + wrd.cName + cNaN;

export const cgetAndProcessXmlData_validDataString = cgetAndProcessXmlData + wrd.cvalid + wrd.cData + wrd.cString;
export const cgetAndProcessXmlData_inValidDataPathAndFilenameString = cgetAndProcessXmlData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cString;
export const cgetAndProcessXmlData_inValidPathAndFilenameInteger = cgetAndProcessXmlData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cInteger;
export const cgetAndProcessXmlData_inValidPathAndFilenameBoolean = cgetAndProcessXmlData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + wrd.cBoolean;
export const cgetAndProcessXmlData_inValidPathAndFilenameUndefined = cgetAndProcessXmlData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + cUndefined;
export const cgetAndProcessXmlData_inValidPathAndFilenameNaN = cgetAndProcessXmlData + wrd.cinvalid + wrd.cPath + wrd.cAnd + wrd.cFilename + cNaN;

export const csetupAllCsvData_validDataString = csetupAllCsvData + wrd.cvalid + wrd.cData + wrd.cString;
export const csetupAllCsvData_inValidDataDataPathConfigurationNameString = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cString;
export const csetupAllCsvData_inValidDataContextNameString = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cString;
export const csetupAllCsvData_inValidDataPathConfigurationNameInteger = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cInteger;
export const csetupAllCsvData_inValidDataPathConfigurationNameBoolean = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cBoolean;
export const csetupAllCsvData_inValidContextNameInteger = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cInteger;
export const csetupAllCsvData_inValidContextNameBoolean = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cBoolean;
export const csetupAllCsvData_inValidDataPathConfigurationNameUndefined = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cUndefined;
export const csetupAllCsvData_inValidDataPathConfigurationNameNaN = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cNaN;
export const csetupAllCsvData_inValidContextNameUndefined = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cUndefined;
export const csetupAllCsvData_inValidContextNameNaN = csetupAllCsvData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cNaN;

export const csetupAllXmlData_validDataString = csetupAllXmlData + wrd.cvalid + wrd.cData + wrd.cString;
export const csetupAllXmlData_inValidDataDataPathConfigurationNameString = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cString;
export const csetupAllXmlData_inValidDataContextNameString = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cString;
export const csetupAllXmlData_inValidDataPathConfigurationNameInteger = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cInteger;
export const csetupAllXmlData_inValidDataPathConfigurationNameBoolean = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cBoolean;
export const csetupAllXmlData_inValidContextNameInteger = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cInteger;
export const csetupAllXmlData_inValidContextNameBoolean = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cBoolean;
export const csetupAllXmlData_inValidDataPathConfigurationNameUndefined = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cUndefined;
export const csetupAllXmlData_inValidDataPathConfigurationNameNaN = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cNaN;
export const csetupAllXmlData_inValidContextNameUndefined = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cUndefined;
export const csetupAllXmlData_inValidContextNameNaN = csetupAllXmlData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cNaN;

export const csetupAllJsonConfigData_validDataString = csetupAllJsonConfigData + wrd.cvalid + wrd.cData + wrd.cString;
export const csetupAllJsonConfigData_inValidDataPathConfigurationNameString = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cString;
export const csetupAllJsonConfigData_inValidDataContextNameString = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cString;
export const csetupAllJsonConfigData_inValidDataPathConfigurationNameInteger = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cInteger;
export const csetupAllJsonConfigData_inValidDataPathConfigurationNameBoolean = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cBoolean;
export const csetupAllJsonConfigData_inValidContextNameInteger = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cInteger;
export const csetupAllJsonConfigData_inValidContextNameBoolean = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cBoolean;
export const csetupAllJsonConfigData_inValidDataPathConfigurationNameUndefined = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cUndefined;
export const csetupAllJsonConfigData_inValidDataPathConfigurationNameNaN = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cPath + wrd.cConfiguration + wrd.cName + cNaN;
export const csetupAllJsonConfigData_inValidContextNameUndefined = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cUndefined;
export const csetupAllJsonConfigData_inValidContextNameNaN = csetupAllJsonConfigData + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cNaN;

export const caddConstantsValidationData_validDataString = caddConstantsValidationData + wrd.cvalid + wrd.cData + wrd.cString;
export const caddConstantsValidationData_inValidDataArrayValidationDataString = caddConstantsValidationData + wrd.cinvalid + wrd.cData + wrd.cArray + wrd.cValidation + wrd.cData + wrd.cString;
export const caddConstantsValidationData_inValidArrayValidationDataInteger = caddConstantsValidationData + wrd.cinvalid + wrd.cArray + wrd.cValidation + wrd.cData + wrd.cInteger;
export const caddConstantsValidationData_inValidArrayValidationDataBoolean = caddConstantsValidationData + wrd.cinvalid + wrd.cArray + wrd.cValidation + wrd.cData + wrd.cBoolean;
export const caddConstantsValidationData_inValidArrayValidationDataUndefined = caddConstantsValidationData + wrd.cinvalid + wrd.cArray + wrd.cValidation + wrd.cData + cUndefined;
export const caddConstantsValidationData_inValidArrayValidationDataNaN = caddConstantsValidationData + wrd.cinvalid + wrd.cArray + wrd.cValidation + wrd.cData + cNaN;

/* chiefWorkflow */
export const cloadCommandWorkflowsFromPath_validDataString = cloadCommandWorkflowsFromPath + wrd.cvalid + wrd.cData + wrd.cString;
export const cloadCommandWorkflowsFromPath_inValidDataCommandWorkflowFilePathConfigurationNameString = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cString;
export const cloadCommandWorkflowsFromPath_inValidDataContextNameString = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cString;
export const cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameInteger = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cInteger;
export const cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameBoolean = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + wrd.cBoolean;
export const cloadCommandWorkflowsFromPath_inValidContextNameInteger = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cInteger;
export const cloadCommandWorkflowsFromPath_inValidContextNameBoolean = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + wrd.cBoolean;
export const cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameUndefined = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + cUndefined;
export const cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameNaN = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cCommand + wrd.cWorkflow + wrd.cFile + wrd.cPath + wrd.cConfiguration + wrd.cName + cNaN;
export const cloadCommandWorkflowsFromPath_inValidContextNameUndefined = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cUndefined;
export const cloadCommandWorkflowsFromPath_inValidContextNameNaN = cloadCommandWorkflowsFromPath + wrd.cinvalid + wrd.cData + wrd.cContext + wrd.cName + cNaN;