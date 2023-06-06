'use strict';
/* eslint-disable no-undef */
/**
 * @file commandStringParsing.test.js
 * @module commandStringParsing.test
 * @description Unit tests for the commandStringParsing.js
 * @requires module:commandStringParsing
 * @requires module:rulesLibrary
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/25
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import commandStringParsing from "../../../../../../src/businessRules/rules/stringParsing/commandStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, wrd, num } = hayConst;

/**
 * @function cleanCommandInput
 * @description Tests the positive and negative test cases of the cleanCommandInput
 * @author Json Howard
 * @date 2023/04/25
 */
describe(tst_con.ccleanCommandInput, () => {
    /**
    * @function cleanCommandInput_validDataString
    * @description Tests the business rules function cleanCommandInput with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_validDataString, () => {
        // Arrange
        let inputData = bas.cDoubleDash + wrd.cHello;
        let inputMetaData = '';
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    /**
    * @function cleanCommandInput_inValidDataInputDataString
    * @description Tests the business rules function cleanCommandInput with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = '';
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello);
    });

    // /**
    // * @function cleanCommandInput_inValidDataInputMetaDataString
    // * @description Tests the business rules function cleanCommandInput with a invalid string inputMetaData.
    // * @author Json Howard
    // * @date 2023/04/25
    // */
    // test(tst_con.ccleanCommandInput_inValidDataInputMetaDataString, () => {
    //     // Arrange
    //     let inputData = bas.cDoubleDash + wrd.cHello;
    //     let inputMetaData = num.c123;
    //     rulesLibrary.initRulesLibrary();

    //     // Act        
    //     let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

    //     // Assert
    //     expect(returnData).toBe(wrd.cHello);
    // });

    /**
    * @function cleanCommandInput_inValidInputDataInteger
    * @description Tests the business rules function cleanCommandInput with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1, 2, 3, 4, 5];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });

    /**
    * @function cleanCommandInput_inValidInputDataBoolean
    * @description Tests the business rules function cleanCommandInput with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });

    /**
    * @function cleanCommandInput_inValidInputMetaDataInteger
    * @description Tests the business rules function cleanCommandInput with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });

    /**
    * @function cleanCommandInput_inValidInputMetaDataBoolean
    * @description Tests the business rules function cleanCommandInput with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.ccleanCommandInput_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.cleanCommandInput(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });
});

/**
 * @function isValidCommandNameString
 * @description Tests the positive and negative test cases of the isValidCommandNameString
 * @date 2023/04/25
 */
describe(tst_con.cisValidCommandNameString, () => {
    /**
    * @function isValidCommandNameString_validDataString
    * @description Tests the business rules function isValidCommandNameString with a valid data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_validDataString, () => {
        // Arrange
        let inputData = wrd.chello;
        let inputMetaData = '';

        // Act
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isValidCommandNameString_inValidDataInputDataString
    * @description Tests the business rules function isValidCommandNameString with a invalid string data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_inValidDataInputDataString, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = '';

        // Act
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    // /**
    // * @function isValidCommandNameString_inValidDataInputMetaDataString
    // * @description Tests the business rules function isValidCommandNameString with a invalid string inputMetaData.
    // * @author Json Howard
    // * @date 2023/04/25
    // */
    // test(tst_con.cisValidCommandNameString_inValidDataInputMetaDataString, () => {
    //     // Arrange
    //     let inputData = wrd.chello;
    //     let inputMetaData = num.c123;

    //     // Act
    //     let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

    //     // Assert
    //     expect(returnData).toBe(true);
    // });
    
    /**
    * @function isValidCommandNameString_inValidInputDataInteger
    * @description Tests the business rules function isValidCommandNameString with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function isValidCommandNameString_inValidInputDataBoolean
    * @description Tests the business rules function isValidCommandNameString with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isValidCommandNameString_inValidInputMetaDataInteger
    * @description Tests the business rules function isValidCommandNameString with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });

    /**
    * @function isValidCommandNameString_inValidInputMetaDataBoolean
    * @description Tests the business rules function isValidCommandNameString with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/25
    */
    test(tst_con.cisValidCommandNameString_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = commandStringParsing.isValidCommandNameString(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });
});