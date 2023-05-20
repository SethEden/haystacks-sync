'use strict';
/* eslint-disable no-undef */
/**
 * @file constantArrayParsing.test.js
 * @module constantArrayParsing.test
 * @description Unit tests for the constantArrayParsing.js
 * @requires module:dataBroker
 * @requires module:constantArrayParsing
 * @requires module:rulesLibrary
 * @requires module:testData/constantArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/19
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from "../../../../../../src/brokers/dataBroker.js";
import constantArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/constantArrayParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/constantArrayParsing.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { wrd } = hayConst;

/**
 * @function getLengthOfLongestStringInArray
 * @description Tests the positive and negative test cases of the getLengthOfLongestStringInArray
 * @author Json Howard
 * @date 2023/04/19
 */
describe(tst_con.cgetLengthOfLongestStringInArray, () => {
    /**
    * @function getLengthOfLongestStringInArray_validDataString
    * @description Tests the business rules function solveLehmerCode with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(10);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidDataInputMetaDataString
    * @description Tests the business rules function solveLehmerCode with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(10);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputDataBoolean
    * @description Tests the business rules function solveLehmerCode with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4];

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputDataUndefined
    * @description Tests the business rules function solveLehmerCode with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputDataNaN
    * @description Tests the business rules function solveLehmerCode with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidDataInputDataString
    * @description Tests the business rules function solveLehmerCode with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputDataInteger
    * @description Tests the business rules function solveLehmerCode with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputMetaDataInteger
    * @description Tests the business rules function solveLehmerCode with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function getLengthOfLongestStringInArray_inValidInputMetaDataBoolean
    * @description Tests the business rules function solveLehmerCode with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetLengthOfLongestStringInArray_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;

        // Act
        let returnData = constantArrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(0);
    });
});

/**
 * @function searchForPatternsInStringArray
 * @description Tests the positive and negative test cases of the searchForPatternsInStringArray
 * @date 2023/04/19
 */
describe(tst_con.csearchForPatternsInStringArray, () => {
    /**
    * @function searchForPatternsInStringArray_validDataString
    * @description Tests the business rules function searchForPatternsInStringArray with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function searchForPatternsInStringArray_inValidDataInputMetaDataString
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function searchForPatternsInStringArray_inValidInputDataInteger
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function searchForPatternsInStringArray_inValidInputDataBoolean
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function searchForPatternsInStringArray_inValidInputDataUndefined
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid undefiend data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function searchForPatternsInStringArray_inValidInputDataNaN
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchForPatternsInStringArray_inValidDataInputDataString
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchForPatternsInStringArray_inValidInputMetaDataInteger
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchForPatternsInStringArray_inValidInputMetaDataBoolean
    * @description Tests the business rules function searchForPatternsInStringArray with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csearchForPatternsInStringArray_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = constantArrayParsing.searchForPatternsInStringArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function validatePatternsThatNeedImplementation
 * @description Tests the positive and negative test cases of the validatePatternsThatNeedImplementation
 * @date 2023/04/19
 */
describe(tst_con.cvalidatePatternsThatNeedImplementation, () => {
    /**
    * @function validatePatternsThatNeedImplementation_validDataString
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidDataInputDataString
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidDataInputMetaDataString
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidInputDataBoolean
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidInputMetaDataInteger
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidInputMetaDataBoolean
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidInputDataUndefined
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
    
    /**
    * @function validatePatternsThatNeedImplementation_inValidInputDataNaN
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });

    /**
    * @function validatePatternsThatNeedImplementation_inValidInputDataInteger
    * @description Tests the business rules function validatePatternsThatNeedImplementation with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cvalidatePatternsThatNeedImplementation_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
        dataBroker.initializeConstantsValidationData();

        // Act        
        let returnData = constantArrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("");
    });
});