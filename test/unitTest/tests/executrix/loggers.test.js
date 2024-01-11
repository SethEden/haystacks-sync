'use strict';
/* eslint-disable no-undef */
/**
 * @file loggers.test.js
 * @module constant.test
 * @description Unit tests for the loggers.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:loggers
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/loggers
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/09/04
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import loggers from '../../../../src/executrix/loggers.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as bus_con from '../../testData/businessRules/rules/arrayParsing/dataArrayParsing.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function consoleLog
 * @description Tests the positive and negative test cases of the consoleLog
 * @author Json Howard
 * @date 2023/09/04
 * @note loggers.consoleLog is void function, can't get returnData.
*/
describe(tst_con.cconsoleLog, () => {
    /**
     * @function consoleLog_validDataString
     * @description Tests the executrix.loggers.consoleLog function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_validDataString, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidDataClassPathString
     * @description Tests the executrix.loggers.consoleLog function, with a invalid classPath string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidDataClassPathString, () => {
        // Arrange
        let classPath = wrd.cHello;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidDataMessageString
     * @description Tests the executrix.loggers.consoleLog function, with a invalid message string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidDataMessageString, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = "";

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidClassPathInteger
     * @description Tests the executrix.loggers.consoleLog function, with a invalid classPath integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidClassPathInteger, () => {
        // Arrange
        let classPath = num.c123;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidClassPathBoolean
     * @description Tests the executrix.loggers.consoleLog function, with a invalid classPath boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidClassPathBoolean, () => {
        // Arrange
        let classPath = false;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidMessageInteger
     * @description Tests the executrix.loggers.consoleLog function, with a invalid message integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidMessageInteger, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = num.c123;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidMessageBoolean
     * @description Tests the executrix.loggers.consoleLog function, with a invalid message boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidMessageBoolean, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = false;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidClassPathUndefined
     * @description Tests the executrix.loggers.consoleLog function, with a invalid classPath undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidClassPathUndefined, () => {
        // Arrange
        let classPath = undefined;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidClassPathNaN
     * @description Tests the executrix.loggers.consoleLog function, with a invalid classPath NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidClassPathNaN, () => {
        // Arrange
        let classPath = NaN;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidMessageUndefined
     * @description Tests the executrix.loggers.consoleLog function, with a invalid message undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidMessageUndefined, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = undefined;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleLog_inValidMessageNaN
     * @description Tests the executrix.loggers.consoleLog function, with a invalid message NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleLog_inValidMessageNaN, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let message = NaN;

        // Act
        let returnData = loggers.consoleLog(classPath, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function consoleTableLog
 * @description Tests the positive and negative test cases of the consoleTableLog
 * @author Json Howard
 * @date 2023/09/04
 * @note loggers.consoleTableLog is void function, can't get returnData.
*/
describe(tst_con.cconsoleTableLog, () => {
    /**
     * @function consoleTableLog_validData
     * @description Tests the executrix.loggers.consoleTableLog function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_validData, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidClassPathString
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid classPath string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidClassPathString, () => {
        // Arrange
        let classPath = wrd.cHello;
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidTableDataString
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid tableData string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidTableDataString, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = wrd.cHello;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidColumnNamesString
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid columnNames string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesString, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = wrd.cHello;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidClassPathNumber
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid classPath number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidClassPathNumber, () => {
        // Arrange
        let classPath = num.c123;
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidClassPathBoolean
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid classPath boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidClassPathBoolean, () => {
        // Arrange
        let classPath = false;
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidClassPathUndefined
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid classPath undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidClassPathUndefined, () => {
        // Arrange
        let classPath = undefined;
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidClassPathNaN
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid classPath NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidClassPathNaN, () => {
        // Arrange
        let classPath = NaN;
        let tableData = bus_con.StringsObject_01;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidTableDataNumber
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid tableData number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidTableDataNumber, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = num.c123;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidTableDataBoolean
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid tableData boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidTableDataBoolean, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = num.c123;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidTableDataUndefined
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid tableData undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidTableDataUndefined, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = undefined;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidTableDataNaN
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid tableData NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidTableDataNaN, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = NaN;
        let columnNames = bus_con.StringsArray_01;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidColumnNamesNumber
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid columnNames Number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesNumber, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = num.c123;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidColumnNamesBoolean
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid columnNames boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesBoolean, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = false;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidColumnNamesUndefined
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid columnNames undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesUndefined, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = undefined;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidColumnNamesNaN
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid columnNames NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidColumnNamesNaN, () => {
        // Arrange
        let classPath = data_con.dataBrokerJsonPath();
        let tableData = bus_con.StringsObject_01;
        let columnNames = NaN;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidAllUndefined
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid all undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidAllUndefined, () => {
        // Arrange
        let classPath = undefined;
        let tableData = undefined;
        let columnNames = undefined;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function consoleTableLog_inValidAllNaN
     * @description Tests the executrix.loggers.consoleTableLog function, with a invalid all NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconsoleTableLog_inValidAllNaN, () => {
        // Arrange
        let classPath = NaN;
        let tableData = NaN;
        let columnNames = NaN;

        // Act
        let returnData = loggers.consoleTableLog(classPath, tableData, columnNames);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function constantsValidationSummaryLog
 * @description Tests the positive and negative test cases of the constantsValidationSummaryLog
 * @author Json Howard
 * @date 2023/09/04
 * @note loggers.constantsValidationSummaryLog is void function, can't get returnData.
*/
describe(tst_con.cconstantsValidationSummaryLog, () => {
    /**
     * @function constantsValidationSummaryLog_validDataString
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_validDataString, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidDataMessageString
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid message string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidDataMessageString, () => {
        // Arrange
        let message = "";
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidDataPassFailString
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid passFail string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidDataPassFailString, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = wrd.cHello;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidMessageInteger
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid message integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidMessageInteger, () => {
        // Arrange
        let message = num.c213;
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidMessageBoolean
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid message boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidMessageBoolean, () => {
        // Arrange
        let message = false;
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidPassFailInteger
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid passFail integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidPassFailInteger, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = num.c123;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidPassFailBoolean
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid passFail boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidPassFailBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = false;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidMessageUndefined
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid message undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidMessageUndefined, () => {
        // Arrange
        let message = undefined;
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidMessageNaN
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid message NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidMessageNaN, () => {
        // Arrange
        let message = NaN;
        let passFail = true;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidPassFailUndefined
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid passFail undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidPassFailUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = undefined;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function constantsValidationSummaryLog_inValidPassFailNaN
     * @description Tests the executrix.loggers.constantsValidationSummaryLog function, with a invalid passFail NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cconstantsValidationSummaryLog_inValidPassFailNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let passFail = NaN;

        // Act
        let returnData = loggers.constantsValidationSummaryLog(message, passFail);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @note consoleLogProcess is not exist.
 * @note validMessage is not exist.
 * @note parseClassPath is not exit.
 */

/**
 * @function getLogFileNameAndPath
 * @description Tests the positive and negative test cases of the getLogFileNameAndPath
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.cgetLogFileNameAndPath, () => {
    /**
     * @function getLogFileNameAndPath_validDataString
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_validDataString, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidDataClientRootPathString
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid clientRootPath string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidDataClientRootPathString, () => {
        // Arrange
        let clientRootPath = wrd.cHello;
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidDataLogFileNameString
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid logFileName string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidDataLogFileNameString, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = "";

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidClientRootPathInteger
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid clientRootPath integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidClientRootPathInteger, () => {
        // Arrange
        let clientRootPath = num.c123;
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidClientRootPathBoolean
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid clientRootPath boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidClientRootPathBoolean, () => {
        // Arrange
        let clientRootPath = false;
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidLogFileNameInteger
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid logFileName integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidLogFileNameInteger, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = num.c123;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidLogFileNameBoolean
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid logFileName boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidLogFileNameBoolean, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = false;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidClientRootPathUndefined
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidClientRootPathUndefined, () => {
        // Arrange
        let clientRootPath = undefined;
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidClientRootPathNaN
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid clientRootPath NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidClientRootPathNaN, () => {
        // Arrange
        let clientRootPath = NaN;
        let logFileName = wrd.cHello;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidLogFileNameUndefined
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid logFileName undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidLogFileNameUndefined, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = undefined;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getLogFileNameAndPath_inValidLogFileNameNaN
     * @description Tests the executrix.loggers.getLogFileNameAndPath function, with a invalid logFileName NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetLogFileNameAndPath_inValidLogFileNameNaN, () => {
        // Arrange
        let clientRootPath = data_con.applicationPath();
        let logFileName = NaN;

        // Act
        let returnData = loggers.getLogFileNameAndPath(clientRootPath, logFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function printMessageToFile
 * @description Tests the positive and negative test cases of the printMessageToFile
 * @author Json Howard
 * @date 2023/09/04
 * @note loggers.printMessageToFile is void function, can't get returnData.
*/
describe(tst_con.cprintMessageToFile, () => {
    /**
     * @function printMessageToFile_validDataString
     * @description Tests the executrix.loggers.printMessageToFile function, with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_validDataString, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidDataFileString
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid file string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidDataFileString, () => {
        // Arrange
        let file = wrd.cHello;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidDataMessageString
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid message string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidDataMessageString, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = "";

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidFileInteger
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid file integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidFileInteger, () => {
        // Arrange
        let file = num.c123;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidFileBoolean
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid file boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidFileBoolean, () => {
        // Arrange
        let file = false;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidMessageInteger
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid message integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidMessageInteger, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = num.c123;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidMessageBoolean
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid message boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidMessageBoolean, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = false;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidFileUndefined
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid file undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidFileUndefined, () => {
        // Arrange
        let file = undefined;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidFileNaN
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid file NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidFileNaN, () => {
        // Arrange
        let file = NaN;
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidMessageUndefined
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid message undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidMessageUndefined, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = undefined;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printMessageToFile_inValidMessageNaN
     * @description Tests the executrix.loggers.printMessageToFile function, with a invalid message NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprintMessageToFile_inValidMessageNaN, () => {
        // Arrange
        let file = data_con.applicationPath();
        let message = wrd.cHello;

        // Act
        let returnData = loggers.printMessageToFile(file, message);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
