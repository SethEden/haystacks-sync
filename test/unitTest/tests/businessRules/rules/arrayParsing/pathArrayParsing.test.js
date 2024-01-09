'use strict';
/* eslint-disable no-undef */
/**
 * @file pathArrayParsing.test.js
 * @module pathArrayParsing.test
 * @description Unit tests for the pathArrayParsing.js
 * @requires module:pathArrayParsing
 * @requires module:rulesLibrary
 * @requires module:testData/pathArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import pathArrayParsing from '../../../../../../src/businessRules/rules/arrayParsing/pathArrayParsing.js';
import rulesLibrary from '../../../../../../src/businessRules/rulesLibrary.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/pathArrayParsing.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function doesArrayContainFilename
 * @description Tests the positive and negative test cases of the doesArrayContainFilename
 * @author Json Howard
 * @date 2023/04/20
 */
describe(tst_con.cdoesArrayContainFilename, () => {
    /**
    * @function doesArrayContainFilename_validDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with a valid data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_validDataString, () => {
        // Arrange
        let inputData = obj_con.stringPathsArray_01();
        let inputMetaData = obj_con.stringPath_01();
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainFilename_inValidDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidDataInputDataString, () => {
        // Arrange
        let inputData = obj_con.stringPath_01();
        let inputMetaData = obj_con.stringPath_01();
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidDataInputMetaDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.stringPathsArray_01();
        let inputMetaData = wrd.cHello;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataInteger
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputMetaDataInteger
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputMetaDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = wrd.cHello;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataNaN
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.doesArrayContainFilename function, with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = wrd.cHello;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getFileAndPathListForPath
 * @description Tests the positive and negative test cases of the getFileAndPathListForPath
 * @author Json Howard
 * @date 2023/04/20
 */
describe(tst_con.cgetFileAndPathListForPath, () => {
    /**
    * @function getFileAndPathListForPath_validDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with a valid data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_validDataString, () => {
        // Arrange
        let inputData = obj_con.stringPath_02();
        let inputMetaData = 3;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getFileAndPathListForPath_inValidDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = obj_con.stringPath_02() + num.c123;
        let inputMetaData = 3;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function getFileAndPathListForPath_inValidDataInputMetaDataString
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.stringPath_02();
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getFileAndPathListForPath_inValidInputDataInteger
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid integer input.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });

    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataInteger
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getFileAndPathListForPath_inValidInputDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = 123;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputDataNaN
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = 123;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe('');
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.stringPath_02();
        let inputMetaData = undefined;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataNaN
    * @description Tests the businessRules.rules.arrayParsing.pathArrayParsing.getFileAndPathListForPath function, with an invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.stringPath_02();
        let inputMetaData = NaN;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
