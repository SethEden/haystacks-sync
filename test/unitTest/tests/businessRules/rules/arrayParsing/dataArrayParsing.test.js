'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file dataArrayParsing.test.js
 * @module dataArrayParsing.test
 * @description Unit tests for the dataArrayParsing.js
 * @requires module:dataArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/19
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/dataArrayParsing.js";
import D from "../../../../../../src/structures/data.js";
import commandsLibrary from "../../../../../../src/commandsBlob/commandsLibrary.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from '../../../constants/test.constants.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/dataArrayParsing.js';

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num, biz, cfg, cmd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function arraysAreEqual
 * @description Tests the positive and negative test cases of the arraysAreEqual
 * @date 2023/04/19
 */
describe(tst_con.carraysAreEqual, () => {
    /**
    * @function arraysAreEqual_validDataString
    * @description Tests the business rules function arraysAreEqual with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cHello + wrd.cWorld];
        let inputMetaData = [wrd.cHello, wrd.cWorld, wrd.cHello + wrd.cWorld];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidDataInputDataString
    * @description Tests the business rules function arraysAreEqual with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = [wrd.cHello, wrd.cWorld, wrd.cHello + wrd.cWorld];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidDataInputMetaDataString
    * @description Tests the business rules function arraysAreEqual with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld, wrd.cHello + wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputDataInteger
    * @description Tests the business rules function arraysAreEqual with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputDataBoolean
    * @description Tests the business rules function arraysAreEqual with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputMetaDataInteger
    * @description Tests the business rules function arraysAreEqual with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputMetaDataBoolean
    * @description Tests the business rules function arraysAreEqual with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputDataUndefined
    * @description Tests the business rules function arraysAreEqual with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputDataNaN
    * @description Tests the business rules function arraysAreEqual with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputMetaDataUndefined
    * @description Tests the business rules function arraysAreEqual with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = undefined;

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arraysAreEqual_inValidInputMetaDataNaN
    * @description Tests the business rules function arraysAreEqual with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carraysAreEqual_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = NaN;

        // Act
        let returnData = dataArrayParsing.arraysAreEqual(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function storeData
 * @description Tests the positive and negative test cases of the storeData
 * @date 2023/04/19
 */
describe(tst_con.cstoreData, () => {
    /**
    * @function storeData_validDataString
    * @description Tests the business rules function storeData with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataInputDataString
    * @description Tests the business rules function storeData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "";
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function storeData_inValidDataInputMetaDataString
    * @description Tests the business rules function storeData with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function storeData_inValidInputDataInteger
    * @description Tests the business rules function storeData with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidInputDataBoolean
    * @description Tests the business rules function storeData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function storeData_inValidInputMetaDataInteger
    * @description Tests the business rules function storeData with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidInputMetaDataBoolean
    * @description Tests the business rules function storeData with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = false;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function storeData_inValidInputMetaDataUndefined
    * @description Tests the business rules function storeData with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = undefined;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function storeData_inValidInputMetaDataNaN
    * @description Tests the business rules function storeData with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cstoreData_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = NaN;

        // Act
        D[sys.cDataStorage] = {};
        let returnData = dataArrayParsing.storeData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getStoredData
 * @description Tests the positive and negative test cases of the getStoredData
 * @date 2023/04/19
 */
describe(tst_con.cgetStoredData, () => {
    /**
    * @function getStoredData_validDataString
    * @description Tests the business rules function getStoredData with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cWorld);
    });

    /**
    * @function getStoredData_inValidDataInputDataString
    * @description Tests the business rules function getStoredData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(wrd.cWorld, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getStoredData_inValidDataInputMetaDataString
    * @description Tests the business rules function getStoredData with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cWorld);
    });

    /**
    * @function getStoredData_inValidInputDataInteger
    * @description Tests the business rules function getStoredData with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(inputMetaData);
    });

    /**
    * @function getStoredData_inValidInputDataBoolean
    * @description Tests the business rules function getStoredData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getStoredData_inValidInputMetaDataInteger
    * @description Tests the business rules function getStoredData with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = 123;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(123);
    });

    /**
    * @function getStoredData_inValidInputMetaDataBoolean
    * @description Tests the business rules function getStoredData with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [1, 2, 3, 4, 5];
        let inputMetaData = true;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function getStoredData_inValidInputDataUndefined
    * @description Tests the business rules function getStoredData with a invalid undefiend data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(undefined, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getStoredData_inValidInputDataNaN
    * @description Tests the business rules function getStoredData with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(NaN, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getStoredData_inValidInputMetaDataUndefined
    * @description Tests the business rules function getStoredData with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;
        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, undefined);

        // Assert
        expect(returnData).toBe(wrd.cWorld);
    });

    /**
    * @function getStoredData_inValidInputMetaDataNaN
    * @description Tests the business rules function getStoredData with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetStoredData_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        D[sys.cDataStorage] = {};
        dataArrayParsing.storeData(inputData, inputMetaData);
        let returnData = dataArrayParsing.getStoredData(inputData, NaN);

        // Assert
        expect(returnData).toBe(wrd.cWorld);
    });
});

/**
 * @function isObjectEmpty
 * @description Tests the positive and negative test cases of the isObjectEmpty
 * @date 2023/04/19
 */
describe(tst_con.cisObjectEmpty, () => {
    /**
    * @function isObjectEmpty_validDataString
    * @description Tests the business rules function isObjectEmpty with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidDataInputDataString
    * @description Tests the business rules function isObjectEmpty with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidDataInputMetaDataString
    * @description Tests the business rules function isObjectEmpty with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidInputDataInteger
    * @description Tests the business rules function isObjectEmpty with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObjectEmpty_inValidInputDataBoolean
    * @description Tests the business rules function isObjectEmpty with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObjectEmpty_inValidInputMetaDataInteger
    * @description Tests the business rules function isObjectEmpty with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = 123;

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidInputMetaDataBoolean
    * @description Tests the business rules function isObjectEmpty with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = false;

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidInputDataUndefined
    * @description Tests the business rules function isObjectEmpty with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObjectEmpty_inValidInputDataNaN
    * @description Tests the business rules function isObjectEmpty with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObjectEmpty_inValidInputMetaDataUndefined
    * @description Tests the business rules function isObjectEmpty with a invalid undefiend inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = undefined;

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObjectEmpty_inValidInputMetaDataNaN
    * @description Tests the business rules function isObjectEmpty with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObjectEmpty_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = NaN;

        // Act
        let returnData = dataArrayParsing.isObjectEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isArrayEmpty
 * @description Tests the positive and negative test cases of the isArrayEmpty
 * @date 2023/04/19
 */
describe(tst_con.cisArrayEmpty, () => {
    /**
    * @function isArrayEmpty_validDataString
    * @description Tests the business rules function isArrayEmpty with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayEmpty_inValidDataInputDataString
    * @description Tests the business rules function isArrayEmpty with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayEmpty_inValidDataInputMetaDataString
    * @description Tests the business rules function isArrayEmpty with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayEmpty_inValidInputDataInteger
    * @description Tests the business rules function isArrayEmpty with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayEmpty_inValidInputDataBoolean
    * @description Tests the business rules function isArrayEmpty with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayEmpty_inValidInputDataUndefined
    * @description Tests the business rules function isArrayEmpty with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayEmpty_inValidInputDataNaN
    * @description Tests the business rules function isArrayEmpty with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayEmpty_inValidInputMetaDataUndefined
    * @description Tests the business rules function isArrayEmpty with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = undefined;

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayEmpty_inValidInputMetaDataNaN
    * @description Tests the business rules function isArrayEmpty with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayEmpty_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = undefined;

        // Act
        let returnData = dataArrayParsing.isArrayEmpty(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isObject
 * @description Tests the positive and negative test cases of the isObject
 * @date 2023/04/19
 */
describe(tst_con.cisObject, () => {
    /**
    * @function isObject_validDataObject
    * @description Tests the business rules function isObject with a valid object data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_validDataObject, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObject_validDataArray
    * @description Tests the business rules function isObject with a valid array data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_validDataArray, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isObject_inValidDataInputDataString
    * @description Tests the business rules function isObject with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObject_inValidInputDataInteger
    * @description Tests the business rules function isObject with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObject_inValidInputDataBoolean
    * @description Tests the business rules function isObject with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObject_inValidInputDataUndefined
    * @description Tests the business rules function isObject with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isObject_inValidInputDataNaN
    * @description Tests the business rules function isObject with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisObject_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isArray
 * @description Tests the positive and negative test cases of the isArray
 * @date 2023/04/19
 */
describe(tst_con.cisArray, () => {
    /**
    * @function isArray_validDataObject
    * @description Tests the business rules function isArray with a valid object data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_validDataObject, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArray_validDataArray
    * @description Tests the business rules function isArray with a valid Array data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_validDataArray, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArray_inValidDataInputDataString
    * @description Tests the business rules function isArray with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArray_inValidInputDataInteger
    * @description Tests the business rules function isArray with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArray_inValidInputDataBoolean
    * @description Tests the business rules function isArray with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArray_inValidInputDataUndefined
    * @description Tests the business rules function isArray with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArray_inValidInputDataNaN
    * @description Tests the business rules function isArray with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isArrayOrObject
 * @description Tests the positive and negative test cases of the isArrayOrObject
 * @date 2023/04/19
 */
describe(tst_con.cisArrayOrObject, () => {
    /**
    * @function isArrayOrObject_validDataObject
    * @description Tests the business rules function isArrayOrObject with a valid object data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_validDataObject, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayOrObject_validDataArray
    * @description Tests the business rules function isArrayOrObject with a valid array data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_validDataArray, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isArrayOrObject_inValidDataInputDataString
    * @description Tests the business rules function isArrayOrObject with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayOrObject_inValidInputDataInteger
    * @description Tests the business rules function isArrayOrObject with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayOrObject_inValidInputDataBoolean
    * @description Tests the business rules function isArrayOrObject with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayOrObject_inValidInputDataUndefined
    * @description Tests the business rules function isArrayOrObject with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isArrayOrObject_inValidInputDataNaN
    * @description Tests the business rules function isArrayOrObject with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisArrayOrObject_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isArrayOrObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function isNonZeroLengthArray
 * @description Tests the positive and negative test cases of the isNonZeroLengthArray
 * @date 2023/04/19
 */
describe(tst_con.cisNonZeroLengthArray, () => {
    /**
    * @function isNonZeroLengthArray_validDataObject
    * @description Tests the business rules function isNonZeroLengthArray with a valid object data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_validDataObject, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isNonZeroLengthArray_validDataArray
    * @description Tests the business rules function isNonZeroLengthArray with a valid array data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_validDataArray, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function isNonZeroLengthArray_inValidDataInputDataString
    * @description Tests the business rules function isNonZeroLengthArray with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isNonZeroLengthArray_inValidInputDataInteger
    * @description Tests the business rules function isNonZeroLengthArray with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isNonZeroLengthArray_inValidInputDataBoolean
    * @description Tests the business rules function isNonZeroLengthArray with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isNonZeroLengthArray_inValidInputDataUndefined
    * @description Tests the business rules function isNonZeroLengthArray with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function isNonZeroLengthArray_inValidInputDataNaN
    * @description Tests the business rules function isNonZeroLengthArray with a invalid naN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cisNonZeroLengthArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.isNonZeroLengthArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function arrayDeepClone
 * @description Tests the positive and negative test cases of the arrayDeepClone
 * @date 2023/04/19
 */
describe(tst_con.carrayDeepClone, () => {
    /**
    * @function arrayDeepClone_validDataString
    * @description Tests the business rules function arrayDeepClone with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(obj_con.StringsArray_01);
    });

    /**
    * @function arrayDeepClone_inValidDataInputDataString
    * @description Tests the business rules function arrayDeepClone with a valid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arrayDeepClone_inValidDataInputMetaDataString
    * @description Tests the business rules function arrayDeepClone with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(obj_con.StringsArray_01);
    });

    /**
    * @function arrayDeepClone_inValidInputDataInteger
    * @description Tests the business rules function arrayDeepClone with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arrayDeepClone_inValidInputDataBoolean
    * @description Tests the business rules function arrayDeepClone with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function arrayDeepClone_inValidInputMetaDataInteger
    * @description Tests the business rules function arrayDeepClone with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = 123;

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(obj_con.StringsArray_01);
    });

    /**
    * @function arrayDeepClone_inValidInputMetaDataBoolean
    * @description Tests the business rules function arrayDeepClone with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.StringsArray_01;
        let inputMetaData = false;

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(obj_con.StringsArray_01);
    });

    /**
    * @function arrayDeepClone_inValidInputDataUndefined
    * @description Tests the business rules function arrayDeepClone with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function arrayDeepClone_inValidInputDataNaN
    * @description Tests the business rules function arrayDeepClone with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.carrayDeepClone_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataArrayParsing.arrayDeepClone(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function objectDeepMerge
 * @description Tests the positive and negative test cases of the objectDeepMerge
 * @date 2023/04/19
 */
describe(tst_con.cobjectDeepMerge, () => {
    /**
    * @function objectDeepMerge_validDataObject
    * @description Tests the business rules function objectDeepMerge with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_validDataObject, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function objectDeepMerge_inValidDataInputDataString
    * @description Tests the business rules function objectDeepMerge with a invalid string data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidDataInputMetaDataString
    * @description Tests the business rules function objectDeepMerge with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputDataInteger
    * @description Tests the business rules function objectDeepMerge with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputDataBoolean
    * @description Tests the business rules function objectDeepMerge with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputMetaDataInteger
    * @description Tests the business rules function objectDeepMerge with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = 123;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputMetaDataBoolean
    * @description Tests the business rules function objectDeepMerge with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = false;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputDataUndefined
    * @description Tests the business rules function objectDeepMerge with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputDataNaN
    * @description Tests the business rules function objectDeepMerge with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsObject_02;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputMetaDataUndefined
    * @description Tests the business rules function objectDeepMerge with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = undefined;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function objectDeepMerge_inValidInputMetaDataNaN
    * @description Tests the business rules function objectDeepMerge with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cobjectDeepMerge_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.StringsObject_01;
        let inputMetaData = NaN;

        // Act
        let returnData = dataArrayParsing.objectDeepMerge(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getNamespacedDataObject
 * @description Tests the positive and negative test cases of the getNamespacedDataObject
 * @date 2023/04/19
 */
describe(tst_con.cgetNamespacedDataObject, () => {
    /**
    * @function getNamespacedDataObject_validDataString
    * @description Tests the business rules function getNamespacedDataObject with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetNamespacedDataObject_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = false;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();
        dataArrayParsing.setNamespacedDataObject(inputData, obj_con.StringsObject_01);

        // Act
        let returnData = dataArrayParsing.getNamespacedDataObject(obj_con.StringsArray_03, inputMetaData);

        // Assert
        expect(returnData).toEqual(expect.arrayContaining(["configuration", "debugSetting", "brokers"]));
    });

    /**
    * @function getNamespacedDataObject_inValidDataInputMetaDataString
    * @description Tests the business rules function getNamespacedDataObject with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetNamespacedDataObject_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = wrd.cHello;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[obj_con.StringsArray_02[i]];
        }
        rulesLibrary.initRulesLibrary();
        dataArrayParsing.setNamespacedDataObject(inputData, obj_con.StringsObject_01);

        // Act
        let returnData = dataArrayParsing.getNamespacedDataObject(obj_con.StringsArray_03, inputMetaData);

        // Assert
        expect(returnData).toEqual(expect.arrayContaining(["configuration", "debugSetting", "brokers"]));
    });

    /**
    * @function getNamespacedDataObject_inValidInputDataInteger
    * @description Tests the business rules function getNamespacedDataObject with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetNamespacedDataObject_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();
        dataArrayParsing.setNamespacedDataObject(inputData, obj_con.StringsObject_01);

        // Act
        let returnData = dataArrayParsing.getNamespacedDataObject(obj_con.StringsArray_03, inputMetaData);

        // Assert
        expect(returnData).toEqual(expect.arrayContaining(["configuration", "debugSetting", "brokers"]));
    });

    /**
    * @function getNamespacedDataObject_inValidInputDataBoolean
    * @description Tests the business rules function getNamespacedDataObject with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetNamespacedDataObject_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();
        dataArrayParsing.setNamespacedDataObject(inputData, obj_con.StringsObject_01);

        // Act
        let returnData = dataArrayParsing.getNamespacedDataObject(obj_con.StringsArray_03, inputMetaData);

        // Assert
        expect(returnData).toEqual(expect.arrayContaining(["configuration", "debugSetting", "brokers"]));
    });

    /**
    * @function getNamespacedDataObject_inValidInputDataNaN
    * @description Tests the business rules function getNamespacedDataObject with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.cgetNamespacedDataObject_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = false;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();
        dataArrayParsing.setNamespacedDataObject(inputData, obj_con.StringsObject_01);

        // Act
        let returnData = dataArrayParsing.getNamespacedDataObject(obj_con.StringsArray_03, inputMetaData);

        // Assert
        expect(returnData).toEqual(expect.arrayContaining(["configuration", "debugSetting", "brokers"]));
    });
});

/**
 * @function setNamespacedDataObject
 * @description Tests the positive and negative test cases of the setNamespacedDataObject
 * @date 2023/04/19
 */
describe(tst_con.csetNamespacedDataObject, () => {
    /**
    * @function setNamespacedDataObject_validDataString
    * @description Tests the business rules function getNamespacedDataObject with a valid data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csetNamespacedDataObject_validDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = obj_con.StringsArray_01;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });
    
    /**
    * @function setNamespacedDataObject_inValidDataInputMetaDataString
    * @description Tests the business rules function getNamespacedDataObject with a invalid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csetNamespacedDataObject_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.StringsArray_02;
        let inputMetaData = wrd.cHello;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });
    
    /**
    * @function setNamespacedDataObject_inValidInputDataInteger
    * @description Tests the business rules function getNamespacedDataObject with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csetNamespacedDataObject_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [1, 2, 3, 4, 5];
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function setNamespacedDataObject_inValidInputDataBoolean
    * @description Tests the business rules function getNamespacedDataObject with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csetNamespacedDataObject_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1, 2, 3, 4, 5];
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function setNamespacedDataObject_inValidInputDataNaN
    * @description Tests the business rules function getNamespacedDataObject with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/19
    */
    test(tst_con.csetNamespacedDataObject_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = obj_con.StringsArray_01;
        let temp_D = D;
        for (let i = 0; i < inputData.length - 1; i++) {
            if (i < inputData.length - 2) {
                temp_D[inputData[i]] = {};
            }
            else {
                temp_D[inputData[i]] = inputData[inputData.length - 1];
            }
            temp_D = temp_D[inputData[i]];
        }
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = dataArrayParsing.setNamespacedDataObject(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});