'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file pathArrayParsing.test.js
 * @module pathArrayParsing.test
 * @description Unit tests for the pathArrayParsing.js
 * @requires module:pathArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import pathArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/pathArrayParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from '../../../constants/test.constants.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/pathArrayParsing.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num, biz, cfg, cmd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function doesArrayContainFilename
 * @description Tests the positive and negative test cases of the doesArrayContainFilename
 * @date 2023/04/20
 */
describe(tst_con.cdoesArrayContainFilename, () => {
    /**
    * @function doesArrayContainFilename_validDataString
    * @description Tests the business rules function doesArrayContainFilename with a valid data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringPathsArray_01();
        let inputMetaData = obj_con.StringPath_01();

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainFilename_inValidDataInputDataString
    * @description Tests the business rules function doesArrayContainFilename with a invalid string data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidDataInputDataString, () => {
        // Arrange
        let inputData = obj_con.StringPath_01();
        let inputMetaData = obj_con.StringPath_01();

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidDataInputMetaDataString
    * @description Tests the business rules function doesArrayContainFilename with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringPathsArray_01();
        let inputMetaData = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataInteger
    * @description Tests the business rules function doesArrayContainFilename with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataBoolean
    * @description Tests the business rules function doesArrayContainFilename with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputMetaDataInteger
    * @description Tests the business rules function doesArrayContainFilename with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputMetaDataBoolean
    * @description Tests the business rules function doesArrayContainFilename with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataUndefined
    * @description Tests the business rules function doesArrayContainFilename with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainFilename_inValidInputDataNaN
    * @description Tests the business rules function doesArrayContainFilename with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cdoesArrayContainFilename_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = pathArrayParsing.doesArrayContainFilename(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getFileAndPathListForPath
 * @description Tests the positive and negative test cases of the getFileAndPathListForPath
 * @date 2023/04/20
 */
describe(tst_con.cgetFileAndPathListForPath, () => {
    /**
    * @function getFileAndPathListForPath_validDataString
    * @description Tests the business rules function getFileAndPathListForPath with a valid data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringPath_02();
        let inputMetaData = 3;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getFileAndPathListForPath_inValidDataInputDataString
    * @description Tests the business rules function getFileAndPathListForPath with a invalid string data.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = obj_con.StringPath_02() + num.c123;
        let inputMetaData = 3;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([]);
    });

    /**
    * @function getFileAndPathListForPath_inValidDataInputMetaDataString
    * @description Tests the business rules function getFileAndPathListForPath with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringPath_02();
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputDataBoolean
    * @description Tests the business rules function getFileAndPathListForPath with a invalid boolean data.
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
        expect(returnData).toBe("");
    });

    /**
    * @function getFileAndPathListForPath_inValidInputDataUndefined
    * @description Tests the business rules function getFileAndPathListForPath with a invalid undefined data.
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
        expect(returnData).toBe("");
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputDataNaN
    * @description Tests the business rules function getFileAndPathListForPath with a invalid NaN data.
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
        expect(returnData).toBe("");
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataUndefined
    * @description Tests the business rules function getFileAndPathListForPath with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.StringPath_02();
        let inputMetaData = undefined;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
    * @function getFileAndPathListForPath_inValidInputMetaDataNaN
    * @description Tests the business rules function getFileAndPathListForPath with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/20
    */
    test(tst_con.cgetFileAndPathListForPath_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.StringPath_02();
        let inputMetaData = NaN;

        // Act
        let returnData = pathArrayParsing.getFileAndPathListForPath(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});