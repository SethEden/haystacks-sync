'use strict';
/* eslint-disable no-undef */
/**
 * @file characterStringParsing.test.js
 * @module characterStringParsing.test
 * @description Unit tests for the characterStringParsing.js
 * @requires module:characterStringParsing
 * @requires module:rulesLibrary
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/25
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import characterStringParsing from "../../../../../../src/businessRules/rules/stringParsing/characterStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, wrd, num } = hayConst;

/**
 * @function singleQuoteSwapAfterEquals
 * @description Tests the positive and negative test cases of the singleQuoteSwapAfterEquals
 * @author Json Howard
 * @date 2023/04/25
 */
describe(tst_con.csingleQuoteSwapAfterEquals, () => {
    /**
    * @function singleQuoteSwapAfterEquals_validDataString
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cSingleQuote + wrd.cWorld + bas.cSingleQuote;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cDoubleQuote + wrd.cWorld + bas.cSingleQuote);
    });

    /**
    * @function singleQuoteSwapAfterEquals_inValidDataInputDataString
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
    * @function singleQuoteSwapAfterEquals_inValidDataInputMetaDataString
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
    * @function singleQuoteSwapAfterEquals_inValidInputDataBoolean
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function singleQuoteSwapAfterEquals_inValidInputMetaDataInteger
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(inputData);
    });

    /**
    * @function singleQuoteSwapAfterEquals_inValidInputMetaDataBoolean
    * @description Tests the business rules function singleQuoteSwapAfterEquals with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.csingleQuoteSwapAfterEquals_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = characterStringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(inputData);
    });
});

/**
 * @function swapForwardSlashToBackSlash
 * @description Tests the positive and negative test cases of the swapForwardSlashToBackSlash
 * @date 2023/04/25
 */
describe(tst_con.cswapForwardSlashToBackSlash, () => {
    /**
    * @function swapForwardSlashToBackSlash_validDataString
    * @description Tests the business rules function swapForwardSlashToBackSlash with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapForwardSlashToBackSlash_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cForwardSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cBackSlash + wrd.cWorld);
    });

    /**
    * @function swapForwardSlashToBackSlash_inValidDataInputDataString
    * @description Tests the business rules function swapForwardSlashToBackSlash with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapForwardSlashToBackSlash_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    /**
    * @function swapForwardSlashToBackSlash_inValidDataInputMetaDataString
    * @description Tests the business rules function swapForwardSlashToBackSlash with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapForwardSlashToBackSlash_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cForwardSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cBackSlash + wrd.cWorld);
    });

    /**
    * @function swapForwardSlashToBackSlash_inValidInputDataBoolean
    * @description Tests the business rules function swapForwardSlashToBackSlash with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapForwardSlashToBackSlash_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function swapBackSlashToForwardSlash
 * @description Tests the positive and negative test cases of the swapBackSlashToForwardSlash
 * @date 2023/04/25
 */
describe(tst_con.cswapBackSlashToForwardSlash, () => {
    /**
    * @function swapBackSlashToForwardSlash_validDataString
    * @description Tests the business rules function swapBackSlashToForwardSlash with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapBackSlashToForwardSlash_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cBackSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cForwardSlash + wrd.cWorld);
    });

    /**
    * @function swapBackSlashToForwardSlash_inValidDataInputDataString
    * @description Tests the business rules function swapBackSlashToForwardSlash with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapBackSlashToForwardSlash_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    /**
    * @function swapBackSlashToForwardSlash_inValidDataInputMetaDataString
    * @description Tests the business rules function swapBackSlashToForwardSlash with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapBackSlashToForwardSlash_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cBackSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cForwardSlash + wrd.cWorld);
    });

    /**
    * @function swapBackSlashToForwardSlash_inValidInputDataBoolean
    * @description Tests the business rules function swapBackSlashToForwardSlash with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapBackSlashToForwardSlash_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function swapDoubleForwardSlashToSingleForwardSlash
 * @description Tests the positive and negative test cases of the swapDoubleForwardSlashToSingleForwardSlash
 * @date 2023/04/25
 */
describe(tst_con.cswapDoubleForwardSlashToSingleForwardSlash, () => {
    /**
    * @function swapDoubleForwardSlashToSingleForwardSlash_validDataString
    * @description Tests the business rules function swapDoubleForwardSlashToSingleForwardSlash with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cDoubleForwardSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cForwardSlash + wrd.cWorld);
    });

    /**
    * @function swapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString
    * @description Tests the business rules function swapDoubleForwardSlashToSingleForwardSlash with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    /**
    * @function swapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString
    * @description Tests the business rules function swapDoubleForwardSlashToSingleForwardSlash with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cDoubleForwardSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cForwardSlash + wrd.cWorld);
    });

    /**
    * @function swapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean
    * @description Tests the business rules function swapDoubleForwardSlashToSingleForwardSlash with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleForwardSlashToSingleForwardSlash_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function swapDoubleBackSlashToSingleBackSlash
 * @description Tests the positive and negative test cases of the swapDoubleBackSlashToSingleBackSlash
 * @date 2023/04/25
 */
describe(tst_con.cswapDoubleBackSlashToSingleBackSlash, () => {
    /**
    * @function swapDoubleBackSlashToSingleBackSlash_validDataString
    * @description Tests the business rules function swapDoubleBackSlashToSingleBackSlash with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cDoubleBackSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cBackSlash + wrd.cWorld);
    });

    /**
    * @function swapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString
    * @description Tests the business rules function swapDoubleBackSlashToSingleBackSlash with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    /**
    * @function swapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString
    * @description Tests the business rules function swapDoubleBackSlashToSingleBackSlash with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cDoubleBackSlash + wrd.cWorld;
        let inputMetaData = "";

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cBackSlash + wrd.cWorld);
    });

    /**
    * @function swapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean
    * @description Tests the business rules function swapDoubleBackSlashToSingleBackSlash with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cswapDoubleBackSlashToSingleBackSlash_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = characterStringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function replaceSpacesWithPlus
 * @description Tests the positive and negative test cases of the replaceSpacesWithPlus
 * @date 2023/04/25
 */
describe(tst_con.creplaceSpacesWithPlus, () => {
    /**
    * @function replaceSpacesWithPlus_validDataString
    * @description Tests the business rules function replaceSpacesWithPlus with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceSpacesWithPlus_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cSpace + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cPlus + wrd.cWorld);
    });

    /**
    * @function replaceSpacesWithPlus_inValidDataInputDataString
    * @description Tests the business rules function replaceSpacesWithPlus with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceSpacesWithPlus_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
    * @function replaceSpacesWithPlus_inValidDataInputMetaDataString
    * @description Tests the business rules function replaceSpacesWithPlus with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceSpacesWithPlus_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cSpace + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cPlus + wrd.cWorld);
    });

    /**
    * @function replaceSpacesWithPlus_inValidInputDataBoolean
    * @description Tests the business rules function replaceSpacesWithPlus with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceSpacesWithPlus_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.replaceSpacesWithPlus(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function replaceColonWithUnderscore
 * @description Tests the positive and negative test cases of the replaceColonWithUnderscore
 * @date 2023/04/25
 */
describe(tst_con.creplaceColonWithUnderscore, () => {
    /**
    * @function replaceColonWithUnderscore_validDataString
    * @description Tests the business rules function replaceColonWithUnderscore with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceColonWithUnderscore_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cUnderscore + wrd.cWorld);
    });

    /**
    * @function replaceColonWithUnderscore_inValidDataInputDataString
    * @description Tests the business rules function replaceColonWithUnderscore with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceColonWithUnderscore_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
    * @function replaceColonWithUnderscore_inValidDataInputMetaDataString
    * @description Tests the business rules function replaceColonWithUnderscore with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceColonWithUnderscore_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cUnderscore + wrd.cWorld);
    });

    /**
    * @function replaceColonWithUnderscore_inValidInputDataBoolean
    * @description Tests the business rules function replaceColonWithUnderscore with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceColonWithUnderscore_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.replaceColonWithUnderscore(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function cleanCarriageReturnFromString
 * @description Tests the positive and negative test cases of the cleanCarriageReturnFromString
 * @date 2023/04/25
 */
describe(tst_con.ccleanCarriageReturnFromString, () => {
    /**
    * @function cleanCarriageReturnFromString_validDataString
    * @description Tests the business rules function cleanCarriageReturnFromString with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCarriageReturnFromString_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cCarriageReturn + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cSpace + wrd.cWorld);
    });

    /**
    * @function cleanCarriageReturnFromString_inValidDataInputDataString
    * @description Tests the business rules function cleanCarriageReturnFromString with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCarriageReturnFromString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    });

    /**
    * @function cleanCarriageReturnFromString_inValidDataInputMetaDataString
    * @description Tests the business rules function cleanCarriageReturnFromString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCarriageReturnFromString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + bas.cCarriageReturn + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + bas.cSpace + wrd.cWorld);
    });

    /**
    * @function cleanCarriageReturnFromString_inValidInputDataBoolean
    * @description Tests the business rules function cleanCarriageReturnFromString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCarriageReturnFromString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.cleanCarriageReturnFromString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function convertStringToLowerCase
 * @description Tests the positive and negative test cases of the convertStringToLowerCase
 * @date 2023/04/25
 */
describe(tst_con.cconvertStringToLowerCase, () => {
    /**
    * @function convertStringToLowerCase_validDataString
    * @description Tests the business rules function convertStringToLowerCase with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToLowerCase_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.chello + wrd.cworld);
    });

    /**
    * @function convertStringToLowerCase_inValidDataInputDataString
    * @description Tests the business rules function convertStringToLowerCase with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToLowerCase_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(num.c123);
    });

    /**
    * @function convertStringToLowerCase_inValidDataInputMetaDataString
    * @description Tests the business rules function convertStringToLowerCase with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToLowerCase_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.chello + wrd.cworld);
    });

    /**
    * @function convertStringToLowerCase_inValidInputDataBoolean
    * @description Tests the business rules function convertStringToLowerCase with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToLowerCase_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.convertStringToLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function convertStringToUpperCase
 * @description Tests the positive and negative test cases of the convertStringToUpperCase
 * @date 2023/04/25
 */
describe(tst_con.cconvertStringToUpperCase, () => {
    /**
    * @function convertStringToUpperCase_validDataString
    * @description Tests the business rules function convertStringToUpperCase with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToUpperCase_validDataString, () => {
        // Arrange
        let inputData = wrd.chello + wrd.cworld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HELLOWORLD");
    });

    /**
    * @function convertStringToUpperCase_inValidDataInputDataString
    * @description Tests the business rules function convertStringToUpperCase with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToUpperCase_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(num.c123);
    });

    /**
    * @function convertStringToUpperCase_inValidDataInputMetaDataString
    * @description Tests the business rules function convertStringToUpperCase with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToUpperCase_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.chello + wrd.cworld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.convertStringToUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HELLOWORLD");
    });

    /**
    * @function convertStringToUpperCase_inValidInputDataBoolean
    * @description Tests the business rules function convertStringToUpperCase with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cconvertStringToUpperCase_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.convertStringToUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function doesStringContainUpperCaseCharacter
 * @description Tests the positive and negative test cases of the doesStringContainUpperCaseCharacter
 * @date 2023/04/25
 */
describe(tst_con.cdoesStringContainUpperCaseCharacter, () => {
    /**
    * @function doesStringContainUpperCaseCharacter_validDataString
    * @description Tests the business rules function doesStringContainUpperCaseCharacter with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainUpperCaseCharacter_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesStringContainUpperCaseCharacter_inValidDataInputDataString
    * @description Tests the business rules function doesStringContainUpperCaseCharacter with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesStringContainUpperCaseCharacter_inValidDataInputMetaDataString
    * @description Tests the business rules function doesStringContainUpperCaseCharacter with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesStringContainUpperCaseCharacter_inValidInputDataInteger
    * @description Tests the business rules function doesStringContainUpperCaseCharacter with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesStringContainUpperCaseCharacter_inValidInputDataBoolean
    * @description Tests the business rules function doesStringContainUpperCaseCharacter with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainUpperCaseCharacter_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function doesStringContainLowerCaseCharacter
 * @description Tests the positive and negative test cases of the doesStringContainLowerCaseCharacter
 * @date 2023/04/25
 */
describe(tst_con.cdoesStringContainLowerCaseCharacter, () => {
    /**
    * @function doesStringContainLowerCaseCharacter_validDataString
    * @description Tests the business rules function doesStringContainLowerCaseCharacter with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainLowerCaseCharacter_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesStringContainLowerCaseCharacter_inValidDataInputDataString
    * @description Tests the business rules function doesStringContainLowerCaseCharacter with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesStringContainLowerCaseCharacter_inValidDataInputMetaDataString
    * @description Tests the business rules function doesStringContainLowerCaseCharacter with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesStringContainLowerCaseCharacter_inValidInputDataInteger
    * @description Tests the business rules function doesStringContainLowerCaseCharacter with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesStringContainLowerCaseCharacter_inValidInputDataBoolean
    * @description Tests the business rules function doesStringContainLowerCaseCharacter with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cdoesStringContainLowerCaseCharacter_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isFirstCharacterLowerCase
 * @description Tests the positive and negative test cases of the isFirstCharacterLowerCase
 * @date 2023/04/25
 */
describe(tst_con.cisFirstCharacterLowerCase, () => {
    /**
    * @function isFirstCharacterLowerCase_validDataString
    * @description Tests the business rules function isFirstCharacterLowerCase with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterLowerCase_validDataString, () => {
        // Arrange
        let inputData = wrd.chello + wrd.cworld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isFirstCharacterLowerCase_inValidDataInputDataString
    * @description Tests the business rules function isFirstCharacterLowerCase with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterLowerCase_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isFirstCharacterLowerCase_inValidDataInputMetaDataString
    * @description Tests the business rules function isFirstCharacterLowerCase with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterLowerCase_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.chello + wrd.cworld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isFirstCharacterLowerCase_inValidInputDataBoolean
    * @description Tests the business rules function isFirstCharacterLowerCase with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterLowerCase_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.isFirstCharacterLowerCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isFirstCharacterUpperCase
 * @description Tests the positive and negative test cases of the isFirstCharacterUpperCase
 * @date 2023/04/25
 */
describe(tst_con.cisFirstCharacterUpperCase, () => {
    /**
    * @function isFirstCharacterUpperCase_validDataString
    * @description Tests the business rules function isFirstCharacterUpperCase with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterUpperCase_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isFirstCharacterUpperCase_inValidDataInputDataString
    * @description Tests the business rules function isFirstCharacterUpperCase with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterUpperCase_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isFirstCharacterUpperCase_inValidDataInputMetaDataString
    * @description Tests the business rules function isFirstCharacterUpperCase with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterUpperCase_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = "";

        // Act
        let returnData = characterStringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isFirstCharacterUpperCase_inValidInputDataBoolean
    * @description Tests the business rules function isFirstCharacterUpperCase with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisFirstCharacterUpperCase_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.isFirstCharacterUpperCase(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function replaceCharacterAtIndexOfString
 * @description Tests the positive and negative test cases of the replaceCharacterAtIndexOfString
 * @date 2023/04/25
 */
describe(tst_con.creplaceCharacterAtIndexOfString, () => {
    /**
    * @function replaceCharacterAtIndexOfString_validDataString
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, 3];
        let inputMetaData = bas.ca;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("Helao");
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidDataInputDataString
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = bas.ca;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidDataInputMetaDataString
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, 3];
        let inputMetaData = bas.ca;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("Helao");
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputDataInteger
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputDataBoolean
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputMetaDataBoolean
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputDataUndefined
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = bas.ca;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputDataNaN
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = bas.ca;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputMetaDataUndefined
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, 3];
        let inputMetaData = undefined;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function replaceCharacterAtIndexOfString_inValidInputMetaDataNaN
    * @description Tests the business rules function replaceCharacterAtIndexOfString with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.creplaceCharacterAtIndexOfString_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, 3];
        let inputMetaData = NaN;

        // Act
        let returnData = characterStringParsing.replaceCharacterAtIndexOfString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(undefined);
    });
});