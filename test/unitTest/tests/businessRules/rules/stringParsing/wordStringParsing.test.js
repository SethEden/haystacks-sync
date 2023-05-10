"use strict";
/* eslint-disable no-undef */
/**
 * @file wordStringParsing.test.js
 * @module wordStringParsing.test
 * @description Unit tests for the wordStringParsing.js
 * @requires module:wordStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/02
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import wordStringParsing from "../../../../../../src/businessRules/rules/stringParsing/wordStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import {
  describe,
  expect,
  test,
} from "@jest/globals";

const { wrd } = hayConst;

/**
 * @function isStringCamelCase
 * @description Tests the positive and negative test cases of the isStringCamelCase
 * @date 2023/05/02
 */
describe(tst_con.cisStringCamelCase, () => {
    /**
     * @function isStringCamelCase_validDataString
     * @description Tests the business rules function isStringCamelCase with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringCamelCase_validDataString, () => {
      // Arrange
      let inputData = "helloWorld";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.isStringCamelCase(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function isStringCamelCase_inValidDataInputDataString
     * @description Tests the business rules function isStringCamelCase with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringCamelCase_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringCamelCase(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function isStringCamelCase_inValidDataInputMetaDataString
     * @description Tests the business rules function isStringCamelCase with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringCamelCase_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "helloWorld";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringCamelCase(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function isStringCamelCase_inValidInputDataBoolean
     * @description Tests the business rules function isStringCamelCase with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringCamelCase_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringCamelCase(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function mapWordToCamelCaseWord
 * @description Tests the positive and negative test cases of the mapWordToCamelCaseWord
 * @date 2023/05/02
 */
describe(tst_con.cmapWordToCamelCaseWord, () => {
    /**
     * @function mapWordToCamelCaseWord_validDataString
     * @description Tests the business rules function mapWordToCamelCaseWord with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cmapWordToCamelCaseWord_validDataString, () => {
      // Arrange
      let inputData = "helloWorld";
      let inputMetaData = "hello";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.mapWordToCamelCaseWord(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("HelloWorld");
    });

    /**
     * @function mapWordToCamelCaseWord_inValidDataInputDataString
     * @description Tests the business rules function mapWordToCamelCaseWord with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cmapWordToCamelCaseWord_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.mapWordToCamelCaseWord(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("Dfxg24346dfg");
      });

    /**
     * @function mapWordToCamelCaseWord_inValidDataInputMetaDataString
     * @description Tests the business rules function mapWordToCamelCaseWord with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cmapWordToCamelCaseWord_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "helloWorld";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.mapWordToCamelCaseWord(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("HelloWorld");
    });

    /**
     * @function mapWordToCamelCaseWord_inValidInputDataBoolean
     * @description Tests the business rules function mapWordToCamelCaseWord with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cmapWordToCamelCaseWord_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.mapWordToCamelCaseWord(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function simplifyAndConsolidateString
 * @description Tests the positive and negative test cases of the simplifyAndConsolidateString
 * @date 2023/05/02
 */
describe(tst_con.csimplifyAndConsolidateString, () => {
    /**
     * @function simplifyAndConsolidateString_validDataString
     * @description Tests the business rules function simplifyAndConsolidateString with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csimplifyAndConsolidateString_validDataString, () => {
      // Arrange
      let inputData = "helloWorld";
      let inputMetaData = "hello";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.simplifyAndConsolidateString(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("helloworld");
    });

    /**
     * @function simplifyAndConsolidateString_inValidDataInputDataString
     * @description Tests the business rules function simplifyAndConsolidateString with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csimplifyAndConsolidateString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.simplifyAndConsolidateString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxgdfg");
      });

    /**
     * @function simplifyAndConsolidateString_inValidDataInputMetaDataString
     * @description Tests the business rules function simplifyAndConsolidateString with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csimplifyAndConsolidateString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "helloWorld";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.simplifyAndConsolidateString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("helloworld");
    });

    /**
     * @function simplifyAndConsolidateString_inValidInputDataBoolean
     * @description Tests the business rules function simplifyAndConsolidateString with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csimplifyAndConsolidateString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.simplifyAndConsolidateString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Tests the positive and negative test cases of the compareSimplifiedAndConsolidatedStrings
 * @date 2023/05/02
 */
describe(tst_con.ccompareSimplifiedAndConsolidatedStrings, () => {
    /**
     * @function compareSimplifiedAndConsolidatedStrings_validDataString
     * @description Tests the business rules function compareSimplifiedAndConsolidatedStrings with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccompareSimplifiedAndConsolidatedStrings_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello;
      let inputMetaData = wrd.cHello;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.compareSimplifiedAndConsolidatedStrings(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function compareSimplifiedAndConsolidatedStrings_inValidDataInputDataString
     * @description Tests the business rules function compareSimplifiedAndConsolidatedStrings with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccompareSimplifiedAndConsolidatedStrings_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = wrd.cHello;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.compareSimplifiedAndConsolidatedStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function compareSimplifiedAndConsolidatedStrings_inValidDataInputMetaDataString
     * @description Tests the business rules function compareSimplifiedAndConsolidatedStrings with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccompareSimplifiedAndConsolidatedStrings_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.compareSimplifiedAndConsolidatedStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function compareSimplifiedAndConsolidatedStrings_inValidInputDataBoolean
     * @description Tests the business rules function compareSimplifiedAndConsolidatedStrings with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccompareSimplifiedAndConsolidatedStrings_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.compareSimplifiedAndConsolidatedStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function countCamelCaseWords
 * @description Tests the positive and negative test cases of the countCamelCaseWords
 * @date 2023/05/02
 */
describe(tst_con.ccountCamelCaseWords, () => {
    /**
     * @function countCamelCaseWords_validDataString
     * @description Tests the business rules function countCamelCaseWords with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountCamelCaseWords_validDataString, () => {
      // Arrange
      let inputData = "helloWorld";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.countCamelCaseWords(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(1);
    });

    /**
     * @function countCamelCaseWords_inValidDataInputDataString
     * @description Tests the business rules function countCamelCaseWords with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountCamelCaseWords_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countCamelCaseWords(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
      });

    /**
     * @function countCamelCaseWords_inValidDataInputMetaDataString
     * @description Tests the business rules function countCamelCaseWords with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountCamelCaseWords_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "helloWorld";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countCamelCaseWords(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(1);
    });

    /**
     * @function countCamelCaseWords_inValidInputDataBoolean
     * @description Tests the business rules function countCamelCaseWords with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountCamelCaseWords_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countCamelCaseWords(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
    });

    /**
     * @function countCamelCaseWords_inValidInputDataInteger
     * @description Tests the business rules function countCamelCaseWords with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountCamelCaseWords_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countCamelCaseWords(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
    });
});

/**
 * @function doesStringContainAcronym
 * @description Tests the positive and negative test cases of the doesStringContainAcronym
 * @date 2023/05/02
 */
describe(tst_con.cdoesStringContainAcronym, () => {
    /**
     * @function doesStringContainAcronym_validDataString
     * @description Tests the business rules function doesStringContainAcronym with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdoesStringContainAcronym_validDataString, () => {
      // Arrange
      let inputData = "CHEllo";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.doesStringContainAcronym(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function doesStringContainAcronym_inValidDataInputDataString
     * @description Tests the business rules function doesStringContainAcronym with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdoesStringContainAcronym_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.doesStringContainAcronym(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function doesStringContainAcronym_inValidDataInputMetaDataString
     * @description Tests the business rules function doesStringContainAcronym with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdoesStringContainAcronym_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "CHEllo";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.doesStringContainAcronym(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(true);
    });

    /**
     * @function doesStringContainAcronym_inValidInputDataBoolean
     * @description Tests the business rules function doesStringContainAcronym with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdoesStringContainAcronym_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.doesStringContainAcronym(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesStringContainAcronym_inValidInputDataInteger
     * @description Tests the business rules function doesStringContainAcronym with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdoesStringContainAcronym_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.doesStringContainAcronym(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function determineWordDelimiter
 * @description Tests the positive and negative test cases of the determineWordDelimiter
 * @date 2023/05/02
 */
describe(tst_con.cdetermineWordDelimiter, () => {
    /**
     * @function determineWordDelimiter_validDataString
     * @description Tests the business rules function determineWordDelimiter with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdetermineWordDelimiter_validDataString, () => {
      // Arrange
      let inputData = "helloWorld";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.determineWordDelimiter(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("CamelCase");
    });

    /**
     * @function determineWordDelimiter_inValidDataInputDataString
     * @description Tests the business rules function determineWordDelimiter with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdetermineWordDelimiter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.determineWordDelimiter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
      });

    /**
     * @function determineWordDelimiter_inValidDataInputMetaDataString
     * @description Tests the business rules function determineWordDelimiter with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdetermineWordDelimiter_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "helloWorld";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.determineWordDelimiter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("CamelCase");
    });

    /**
     * @function determineWordDelimiter_inValidInputDataBoolean
     * @description Tests the business rules function determineWordDelimiter with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cdetermineWordDelimiter_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.determineWordDelimiter(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });
});

/**
 * @function countDelimiterInString
 * @description Tests the positive and negative test cases of the countDelimiterInString
 * @date 2023/05/02
 */
describe(tst_con.ccountDelimiterInString, () => {
    /**
     * @function countDelimiterInString_validDataString
     * @description Tests the business rules function countDelimiterInString with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountDelimiterInString_validDataString, () => {
      // Arrange
      let inputData = "hello_World_welcome";
      let inputMetaData = "_";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.countDelimiterInString(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(2);
    });

    /**
     * @function countDelimiterInString_inValidDataInputDataString
     * @description Tests the business rules function countDelimiterInString with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountDelimiterInString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "_";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countDelimiterInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
      });

    /**
     * @function countDelimiterInString_inValidDataInputMetaDataString
     * @description Tests the business rules function countDelimiterInString with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountDelimiterInString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "hello_World_welcome";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countDelimiterInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
    });

    /**
     * @function countDelimiterInString_inValidInputDataBoolean
     * @description Tests the business rules function countDelimiterInString with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.ccountDelimiterInString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.countDelimiterInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
    });
});

/**
 * @function getWordCountInString
 * @description Tests the positive and negative test cases of the getWordCountInString
 * @date 2023/05/02
 */
describe(tst_con.cgetWordCountInString, () => {
    /**
     * @function getWordCountInString_validDataString
     * @description Tests the business rules function getWordCountInString with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetWordCountInString_validDataString, () => {
      // Arrange
      let inputData = "hello_World_welcome";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.getWordCountInString(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(3);
    });

    /**
     * @function getWordCountInString_inValidDataInputDataString
     * @description Tests the business rules function getWordCountInString with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetWordCountInString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "_";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.getWordCountInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
      });

    /**
     * @function getWordCountInString_inValidDataInputMetaDataString
     * @description Tests the business rules function getWordCountInString with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetWordCountInString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "hello_World_welcome";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.getWordCountInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(3);
    });

    /**
     * @function getWordCountInString_inValidInputDataBoolean
     * @description Tests the business rules function getWordCountInString with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetWordCountInString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.getWordCountInString(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(0);
    });
});

/**
 * @function isStringList
 * @description Tests the positive and negative test cases of the isStringList
 * @date 2023/05/02
 */
describe(tst_con.cisStringList, () => {
    /**
     * @function isStringList_validDataString
     * @description Tests the business rules function isStringList with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringList_validDataString, () => {
      // Arrange
      let inputData = "1,2,3";
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.isStringList(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
    });

    /**
     * @function isStringList_inValidDataInputDataString
     * @description Tests the business rules function isStringList with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringList_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringList(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function isStringList_inValidDataInputMetaDataString
     * @description Tests the business rules function isStringList with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringList_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = "1,2,3";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringList(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isStringList_inValidInputDataBoolean
     * @description Tests the business rules function isStringList with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringList_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringList(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function isStringList_inValidInputMetaDataInteger
     * @description Tests the business rules function isStringList with a invalid integer inputMetadata.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cisStringList_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.isStringList(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Tests the positive and negative test cases of the aggregateNumericalDifferenceBetweenTwoStrings
 * @date 2023/05/02
 */
describe(tst_con.caggregateNumericalDifferenceBetweenTwoStrings, () => {
    /**
     * @function aggregateNumericalDifferenceBetweenTwoStrings_validDataString
     * @description Tests the business rules function aggregateNumericalDifferenceBetweenTwoStrings with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.caggregateNumericalDifferenceBetweenTwoStrings_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello;
      let inputMetaData = wrd.cWorld;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(4);
    });

    /**
     * @function aggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputDataString
     * @description Tests the business rules function aggregateNumericalDifferenceBetweenTwoStrings with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = wrd.cWorld;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(11);
      });

    /**
     * @function aggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputMetaDataString
     * @description Tests the business rules function aggregateNumericalDifferenceBetweenTwoStrings with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.caggregateNumericalDifferenceBetweenTwoStrings_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(12);
    });

    /**
     * @function aggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataBoolean
     * @description Tests the business rules function aggregateNumericalDifferenceBetweenTwoStrings with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.caggregateNumericalDifferenceBetweenTwoStrings_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = wordStringParsing.aggregateNumericalDifferenceBetweenTwoStrings(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(-1);
    });
});