'use strict';
/* eslint-disable no-undef */
/**
 * @file colorizer.test.js
 * @module constant.test
 * @description Unit tests for the colorizer.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/colorizer
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/29
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import colorizer from '../../../../src/executrix/colorizer.js';
import configurator from '../../../../src/executrix/configurator.js';
import D from '../../../../src/structures/data.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as bus_con from '../../testData/businessRules/rules/arrayParsing/dataArrayParsing.js';
import * as utl_con from '../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../testData/commandsBlob/commands/advanced.js';
import * as tst_con from '../constants/test.constants.js';
import { basePath } from '../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd, num } = hayConst;

/**
 * @function colorizeMessageSimple
 * @description Tests the positive and negative test cases of the colorizeMessageSimple
 * @author Json Howard
 * @date 2023/08/29
*/

describe(tst_con.ccolorizeMessageSimple, () => {
    /**
     * @function colorizeMessageSimple_validData
     * @description Tests the function colorizeMessageSimple with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_validData, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidMessageString
     * @description Tests the function colorizeMessageSimple with a invalid message string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidMessageString, () => {
        // Arrange
        let message = "";
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidColorArrayString
     * @description Tests the function colorizeMessageSimple with a invalid colorArray string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidColorArrayString, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = wrd.cHello;
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidIsForegroundString
     * @description Tests the function colorizeMessageSimple with a invalid isForeground string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidIsForegroundString, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = wrd.cHello;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidMessageNumber
     * @description Tests the function colorizeMessageSimple with a invalid message number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidMessageNumber, () => {
        // Arrange
        let message = num.c123;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidMessageBoolean
     * @description Tests the function colorizeMessageSimple with a invalid message boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidMessageBoolean, () => {
        // Arrange
        let message = false;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidMessageUndefined
     * @description Tests the function colorizeMessageSimple with a invalid message undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidMessageUndefined, () => {
        // Arrange
        let message = undefined;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidMessageNaN
     * @description Tests the function colorizeMessageSimple with a invalid message NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidMessageNaN, () => {
        // Arrange
        let message = NaN;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidColorArrayNumber
     * @description Tests the function colorizeMessageSimple with a invalid colorArray number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidColorArrayNumber, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = num.c123;
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidColorArrayBoolean
     * @description Tests the function colorizeMessageSimple with a invalid colorArray boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidColorArrayBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = false;
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidColorArrayUndefined
     * @description Tests the function colorizeMessageSimple with a invalid colorArray undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidColorArrayUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = undefined;
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidColorArrayNaN
     * @description Tests the function colorizeMessageSimple with a invalid colorArray NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidColorArrayNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = NaN;
        let isForeground = true;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidIsForegroundNumber
     * @description Tests the function colorizeMessageSimple with a invalid isForeground number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidIsForegroundNumber, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = num.c123;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidIsForegroundBoolean
     * @description Tests the function colorizeMessageSimple with a invalid isForeground boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidIsForegroundBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = false;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidIsForegroundUndefined
     * @description Tests the function colorizeMessageSimple with a invalid isForeground undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidIsForegroundUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = undefined;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidIsForegroundNaN
     * @description Tests the function colorizeMessageSimple with a invalid isForeground NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidIsForegroundNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let colorArray = [num.c123, num.c123, num.c123];
        let isForeground = NaN;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidAllUndefined
     * @description Tests the function colorizeMessageSimple with a invalid all undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidAllUndefined, () => {
        // Arrange
        let message = undefined;
        let colorArray = undefined;
        let isForeground = undefined;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessageSimple_inValidAllNaN
     * @description Tests the function colorizeMessageSimple with a invalid all NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessageSimple_inValidAllNaN, () => {
        // Arrange
        let message = NaN;
        let colorArray = NaN;
        let isForeground = NaN;

        // Act
        let returnData = colorizer.colorizeMessageSimple(message, colorArray, isForeground);

        // Assert
        expect(returnData).toBeTruthy();
    });
  
});

/**
 * @function colorizeMessage
 * @description Tests the positive and negative test cases of the colorizeMessage
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.ccolorizeMessage, () => {
    /**
     * @function colorizeMessage_validData
     * @description Tests the function colorizeMessage with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_validData, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidMessageString
     * @description Tests the function colorizeMessage with a invalid message string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidMessageString, () => {
        // Arrange
        let message = "";
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidClassNameString
     * @description Tests the function colorizeMessage with a invalid className string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidClassNameString, () => {
        // Arrange
        let message = wrd.cHello;
        let className = "";
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFunctionNameString
     * @description Tests the function colorizeMessage with a invalid functionName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFunctionNameString, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = "";
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFlatMessageLogString
     * @description Tests the function colorizeMessage with a invalid messageLog string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFlatMessageLogString, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = wrd.cHello;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidMessageNumber
     * @description Tests the function colorizeMessage with a invalid message number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidMessageNumber, () => {
        // Arrange
        let message = num.c123;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidMessageBoolean
     * @description Tests the function colorizeMessage with a invalid message boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidMessageBoolean, () => {
        // Arrange
        let message = false;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidMessageUndefined
     * @description Tests the function colorizeMessage with a invalid message undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidMessageUndefined, () => {
        // Arrange
        let message = undefined;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidMessageNaN
     * @description Tests the function colorizeMessage with a invalid mesage NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidMessageNaN, () => {
        // Arrange
        let message = NaN;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidClassNameNumber
     * @description Tests the function colorizeMessage with a invalid className number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidClassNameNumber, () => {
        // Arrange
        let message = wrd.cHello;
        let className = num.c123;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidClassNameBoolean
     * @description Tests the function colorizeMessage with a invalid className boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidClassNameBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let className = false;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidClassNameUndefined
     * @description Tests the function colorizeMessage with a invalid className undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidClassNameUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let className = undefined;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidClassNameNaN
     * @description Tests the function colorizeMessage with a invalid className NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidClassNameNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let className = NaN;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFunctionNameNumber
     * @description Tests the function colorizeMessage with a invalid functionName number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFunctionNameNumber, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = num.c123;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFunctionNameBoolean
     * @description Tests the function colorizeMessage with a invalid functionName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFunctionNameBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = false;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFunctionNameUndefined
     * @description Tests the function colorizeMessage with a invalid functionName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFunctionNameUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = undefined;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFunctionNameNaN
     * @description Tests the function colorizeMessage with a invalid functionName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFunctionNameNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = NaN;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = true;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFlatMessageLogNumber
     * @description Tests the function colorizeMessage with a invalid flatMessageLog number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFlatMessageLogNumber, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = num.c123;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFlatMessageLogBoolean
     * @description Tests the function colorizeMessage with a invalid flatMessageLog boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFlatMessageLogBoolean, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = false;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFlatMessageLogUndefined
     * @description Tests the function colorizeMessage with a invalid flatMessageLog undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFlatMessageLogUndefined, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = undefined;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidFlatMessageLogNaN
     * @description Tests the function colorizeMessage with a invalid flatMessageLog NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidFlatMessageLogNaN, () => {
        // Arrange
        let message = wrd.cHello;
        let className = wrd.cHello;
        let functionName = wrd.cHello;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = NaN;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidAllUndefined
     * @description Tests the function colorizeMessage with a invalid all undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidAllUndefined, () => {
        // Arrange
        let message = undefined;
        let className = undefined;
        let functionName = undefined;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = undefined;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function colorizeMessage_inValidAllNaN
     * @description Tests the function colorizeMessage with a invalid all NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.ccolorizeMessage_inValidAllNaN, () => {
        // Arrange
        let message = NaN;
        let className = NaN;
        let functionName = NaN;
        let debugFilesSetting = true;
        let debugFunctionsSetting = true;
        let flatMessageLog = NaN;

        // Act
        let returnData = colorizer.colorizeMessage(message, className, functionName, debugFilesSetting, debugFunctionsSetting, flatMessageLog);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function aggregateStyleSetting
 * @description Tests the positive and negative test cases of the aggregateStyleSetting
 * @author Json Howard
 * @date 2023/08/29
*/

describe(tst_con.caggregateStyleSetting, () => {
    /**
     * @function aggregateStyleSetting_validData
     * @description Tests the function aggregateStyleSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_validData, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNamespaceString
     * @description Tests the function aggregateStyleSetting with a invalid configurationNamespace string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNamespaceString, () => {
        // Arrange
        let settingValue1 = "";
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNameString
     * @description Tests the function aggregateStyleSetting with a invalid configurationName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNameString, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = "";
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationValueString
     * @description Tests the function aggregateStyleSetting with a invalid configurationValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationValueString, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = wrd.cHello;
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNamespaceNumber
     * @description Tests the function aggregateStyleSetting with a invalid configurationNamespace number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNamespaceNumber, () => {
        // Arrange
        let settingValue1 = num.c123;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNamespaceBoolean
     * @description Tests the function aggregateStyleSetting with a invalid configurationNamespace boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNamespaceBoolean, () => {
        // Arrange
        let settingValue1 = false;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNamespaceUndefined
     * @description Tests the function aggregateStyleSetting with a invalid configurationNamespace undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNamespaceUndefined, () => {
        // Arrange
        let settingValue1 = undefined;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNamespaceNaN
     * @description Tests the function aggregateStyleSetting with a invalid configurationNamespace NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNamespaceNaN, () => {
        // Arrange
        let settingValue1 = NaN;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNameNumber
     * @description Tests the function aggregateStyleSetting with a invalid configurationName number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNameNumber, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = num.c123;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNameBoolean
     * @description Tests the function aggregateStyleSetting with a invalid configurationName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNameBoolean, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = false;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNameUndefined
     * @description Tests the function aggregateStyleSetting with a invalid configurationName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNameUndefined, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = undefined;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationNameNaN
     * @description Tests the function aggregateStyleSetting with a invalid configurationName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationNameNaN, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = NaN;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationValueNumber
     * @description Tests the function aggregateStyleSetting with a invalid configurationValue number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationValueNumber, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = num.c123;
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationValueBoolean
     * @description Tests the function aggregateStyleSetting with a invalid configurationValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationValueBoolean, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = false;
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationValueUndefined
     * @description Tests the function aggregateStyleSetting with a invalid configurationValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationValueUndefined, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = undefined;
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidConfigurationValueNaN
     * @description Tests the function aggregateStyleSetting with a invalid configurationValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidConfigurationValueNaN, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = NaN;
        let processAsFontSetting = true;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidProcessAsFontSettingNumber
     * @description Tests the function aggregateStyleSetting with a invalid processsAsFontSetting number.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidProcessAsFontSettingNumber, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = num.c123;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidProcessAsFontSettingBoolean
     * @description Tests the function aggregateStyleSetting with a invalid processAsFontSetting boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidProcessAsFontSettingBoolean, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = false;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidProcessAsFontSettingUndefined
     * @description Tests the function aggregateStyleSetting with a invalid processAsFontSetting undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidProcessAsFontSettingUndefined, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = undefined;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidProcessAsFontSettingNaN
     * @description Tests the function aggregateStyleSetting with a invalid processAsFontSetting NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidProcessAsFontSettingNaN, () => {
        // Arrange
        let settingValue1 = wrd.cHello;
        let settingValue2 = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];
        let processAsFontSetting = NaN;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidAllUndefined
     * @description Tests the function aggregateStyleSetting with a invalid all undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidAllUndefined, () => {
        // Arrange
        let settingValue1 = undefined;
        let settingValue2 = undefined;
        let defaultColorArray = undefined;
        let processAsFontSetting = undefined;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function aggregateStyleSetting_inValidAllNaN
     * @description Tests the function aggregateStyleSetting with a invalid all NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.caggregateStyleSetting_inValidAllNaN, () => {
        // Arrange
        let settingValue1 = NaN;
        let settingValue2 = NaN;
        let defaultColorArray = NaN;
        let processAsFontSetting = NaN;

        // Act
        let returnData = colorizer.aggregateStyleSetting(settingValue1, settingValue2, defaultColorArray, processAsFontSetting);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getFontStyleSettingsFromSetting
 * @description Tests the positive and negative test cases of the getFontStyleSettingsFromSetting
 * @author Json Howard
 * @date 2023/08/29
*/

describe(tst_con.cgetFontStyleSettingsFromSetting, () => {
    /**
     * @function getFontStyleSettingsFromSetting_validDataString
     * @description Tests the function getFontStyleSettingsFromSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_validDataString, () => {
        // Arrange
        let settingValue = wrd.cHello;

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getFontStyleSettingsFromSetting_inValidDataSettingValueString
     * @description Tests the function getFontStyleSettingsFromSetting with a invalid settingValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_inValidDataSettingValueString, () => {
        // Arrange
        let settingValue = "";

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getFontStyleSettingsFromSetting_inValidSettingValueInteger
     * @description Tests the function getFontStyleSettingsFromSetting with a invalid settingValue integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_inValidSettingValueInteger, () => {
        // Arrange
        let settingValue = num.c123;

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getFontStyleSettingsFromSetting_inValidSettingValueBoolean
     * @description Tests the function getFontStyleSettingsFromSetting with a invalid settingValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_inValidSettingValueBoolean, () => {
        // Arrange
        let settingValue = false;

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getFontStyleSettingsFromSetting_inValidSettingValueUndefined
     * @description Tests the function getFontStyleSettingsFromSetting with a invalid settingValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_inValidSettingValueUndefined, () => {
        // Arrange
        let settingValue = undefined;

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getFontStyleSettingsFromSetting_inValidSettingValueNaN
     * @description Tests the function getFontStyleSettingsFromSetting with a invalid settingValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetFontStyleSettingsFromSetting_inValidSettingValueNaN, () => {
        // Arrange
        let settingValue = NaN;

        // Act
        let returnData = colorizer.getFontStyleSettingsFromSetting(settingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getColorStyleSettingFromSetting
 * @description Tests the positive and negative test cases of the getColorStyleSettingFromSetting
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cgetColorStyleSettingFromSetting, () => {
    /**
     * @function getColorStyleSettingFromSetting_validDataString
     * @description Tests the function getColorStyleSettingFromSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_validDataString, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDataColorNameString
     * @description Tests the function getColorStyleSettingFromSetting with a invalid colorName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDataColorNameString, () => {
        // Arrange
        let colorName = "";
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDataDefaultColorArrayString
     * @description Tests the function getColorStyleSettingFromSetting with a invalid defaultColorArray string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDataDefaultColorArrayString, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = wrd.cHello;

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidColorNameInteger
     * @description Tests the function getColorStyleSettingFromSetting with a invalid colorName integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidColorNameInteger, () => {
        // Arrange
        let colorName = num.c123;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidColorNameBoolean
     * @description Tests the function getColorStyleSettingFromSetting with a invalid colorName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidColorNameBoolean, () => {
        // Arrange
        let colorName = false;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDefaultColorArrayInteger
     * @description Tests the function getColorStyleSettingFromSetting with a invalid defaultColorArray integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDefaultColorArrayInteger, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = num.c123;

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDefaultColorArrayBoolean
     * @description Tests the function getColorStyleSettingFromSetting with a invalid defaultColorArray boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDefaultColorArrayBoolean, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = false;

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidColorNameUndefined
     * @description Tests the function getColorStyleSettingFromSetting with a invalid colorName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidColorNameUndefined, () => {
        // Arrange
        let colorName = undefined;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidColorNameNaN
     * @description Tests the function getColorStyleSettingFromSetting with a invalid colorName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidColorNameNaN, () => {
        // Arrange
        let colorName = NaN;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDefaultColorArrayUndefined
     * @description Tests the function getColorStyleSettingFromSetting with a invalid defaultColorArray undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDefaultColorArrayUndefined, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = undefined;

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getColorStyleSettingFromSetting_inValidDefaultColorArrayNaN
     * @description Tests the function getColorStyleSettingFromSetting with a invalid defaultColorArray NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetColorStyleSettingFromSetting_inValidDefaultColorArrayNaN, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = NaN;

        // Act
        let returnData = colorizer.getColorStyleSettingFromSetting(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getNamedColorData
 * @description Tests the positive and negative test cases of the getNamedColorData
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cgetNamedColorData, () => {
    /**
     * @function getNamedColorData_validDataString
     * @description Tests the function getNamedColorData with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_validDataString, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDataColorNameString
     * @description Tests the function getNamedColorData with a invalid colorName string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDataColorNameString, () => {
        // Arrange
        let colorName = "";
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDataDefaultColorArrayString
     * @description Tests the function getNamedColorData with a invalid defaultColorArray string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDataDefaultColorArrayString, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = wrd.cHello;

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidColorNameInteger
     * @description Tests the function getNamedColorData with a invalid colorName integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidColorNameInteger, () => {
        // Arrange
        let colorName = num.c123;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidColorNameBoolean
     * @description Tests the function getNamedColorData with a invalid colorName boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidColorNameBoolean, () => {
        // Arrange
        let colorName = false;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDefaultColorArrayInteger
     * @description Tests the function getNamedColorData with a invalid defaultColorArray integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDefaultColorArrayInteger, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = num.c123;

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDefaultColorArrayBoolean
     * @description Tests the function getNamedColorData with a invalid defaultColorArray boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDefaultColorArrayBoolean, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = false;

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidColorNameUndefined
     * @description Tests the function getNamedColorData with a invalid colorName undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidColorNameUndefined, () => {
        // Arrange
        let colorName = undefined;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidColorNameNaN
     * @description Tests the function getNamedColorData with a invalid colorName NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidColorNameNaN, () => {
        // Arrange
        let colorName = NaN;
        let defaultColorArray = [num.c123, num.c123, num.c123];

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDefaultColorArrayUndefined
     * @description Tests the function getNamedColorData with a invalid defaultColorArray undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDefaultColorArrayUndefined, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = undefined;

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getNamedColorData_inValidDefaultColorArrayNaN
     * @description Tests the function getNamedColorData with a invalid defaultColorArray NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cgetNamedColorData_inValidDefaultColorArrayNaN, () => {
        // Arrange
        let colorName = wrd.cHello;
        let defaultColorArray = NaN;

        // Act
        let returnData = colorizer.getNamedColorData(colorName, defaultColorArray);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting
 * @description Tests the positive and negative test cases of the setUnderlineFontStyleOnMessageComponentAccordingToSetting
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting, () => {
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_validDataString
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_validDataString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidDataMessageComponentString
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidDataMessageComponentString, () => {
        // Arrange
        let messageComponent = "";
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidDataUnderlineSettingValueString
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid underlineSettingValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidDataUnderlineSettingValueString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = wrd.cHello;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentInteger
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentInteger, () => {
        // Arrange
        let messageComponent = num.c123;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean, () => {
        // Arrange
        let messageComponent = false;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueInteger
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid underlineSettingValue integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueInteger, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = num.c123;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueBoolean
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid underlineSettingValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueBoolean, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined, () => {
        // Arrange
        let messageComponent = undefined;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentNaN
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentNaN, () => {
        // Arrange
        let messageComponent = NaN;
        let underlineSettingValue = false;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueUndefined
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid underlineSettingValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueUndefined, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = undefined;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueNaN
     * @description Tests the function setUnderlineFontStyleOnMessageComponentAccordingToSetting with a invalid underlineSettingValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetUnderlineFontStyleOnMessageComponentAccordingToSetting_inValidUnderlineSettingValueNaN, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let underlineSettingValue = NaN;

        // Act
        let returnData = colorizer.setUnderlineFontStyleOnMessageComponentAccordingToSetting(messageComponent, underlineSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setBoldFontStyleOnMessageComponentAccordingToSetting
 * @description Tests the positive and negative test cases of the setBoldFontStyleOnMessageComponentAccordingToSetting
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting, () => {
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_validDataString
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_validDataString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidDataMessageComponentString
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidDataMessageComponentString, () => {
        // Arrange
        let messageComponent = "";
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidDataBoldSettingValueString
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid boldSettingValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidDataBoldSettingValueString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = wrd.cHello;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentInteger
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentInteger, () => {
        // Arrange
        let messageComponent = num.c123;
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean, () => {
        // Arrange
        let messageComponent = false;
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueInteger
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid boldSettingValue integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueInteger, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = num.c123;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueBoolean
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid boldSttingValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueBoolean, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = false;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined, () => {
        // Arrange
        let messageComponent = undefined;
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentNaN
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid messageComponent NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidMessageComponentNaN, () => {
        // Arrange
        let messageComponent = NaN;
        let boldSettingValue = true;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueUndefined
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid boldSettingValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueUndefined, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = undefined;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueNaN
     * @description Tests the function setBoldFontStyleOnMessageComponentAccordingToSetting with a invalid boldSettingValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetBoldFontStyleOnMessageComponentAccordingToSetting_inValidBoldSettingValueNaN, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let boldSettingValue = NaN;

        // Act
        let returnData = colorizer.setBoldFontStyleOnMessageComponentAccordingToSetting(messageComponent, boldSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setFontForegroundColorOnMessageComponentAccordingToSetting
 * @description Tests the positive and negative test cases of the setFontForegroundColorOnMessageComponentAccordingToSetting
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting, () => {
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_validDataString
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_validDataString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidDataMessageComponentString
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidDataMessageComponentString, () => {
        // Arrange
        let messageComponent = "";
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidDataColorSettingValueString
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidDataColorSettingValueString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = wrd.cHello;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentInteger
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentInteger, () => {
        // Arrange
        let messageComponent = num.c123;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean, () => {
        // Arrange
        let messageComponent = false;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueInteger
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueInteger, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = num.c123;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueBoolean
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueBoolean, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined, () => {
        // Arrange
        let messageComponent = undefined;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentNaN
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentNaN, () => {
        // Arrange
        let messageComponent = NaN;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueUndefined
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueUndefined, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = undefined;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueNaN
     * @description Tests the function setFontForegroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontForegroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueNaN, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = NaN;

        // Act
        let returnData = colorizer.setFontForegroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setFontBackgroundColorOnMessageComponentAccordingToSetting
 * @description Tests the positive and negative test cases of the setFontBackgroundColorOnMessageComponentAccordingToSetting
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting, () => {
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_validDataString
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_validDataString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidDataMessageComponentString
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidDataMessageComponentString, () => {
        // Arrange
        let messageComponent = "";
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidDataColorSettingValueString
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidDataColorSettingValueString, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = wrd.cHello;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentInteger
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentInteger, () => {
        // Arrange
        let messageComponent = num.c123;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentBoolean, () => {
        // Arrange
        let messageComponent = false;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueInteger
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueInteger, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = num.c123;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueBoolean
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueBoolean, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = false;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentUndefined, () => {
        // Arrange
        let messageComponent = undefined;
        let colorSettingValue = true;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentNaN
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid messageComponent NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidMessageComponentNaN, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = NaN;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueUndefined
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueUndefined, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = undefined;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function setFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueNaN
     * @description Tests the function setFontBackgroundColorOnMessageComponentAccordingToSetting with a invalid colorSettingValue NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.csetFontBackgroundColorOnMessageComponentAccordingToSetting_inValidColorSettingValueNaN, () => {
        // Arrange
        let messageComponent = wrd.cHello;
        let colorSettingValue = NaN;

        // Act
        let returnData = colorizer.setFontBackgroundColorOnMessageComponentAccordingToSetting(messageComponent, colorSettingValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function removeFontStyles
 * @description Tests the positive and negative test cases of the removeFontStyles
 * @author Json Howard
 * @date 2023/08/29
*/
describe(tst_con.cremoveFontStyles, () => {
    /**
     * @function removeFontStyles_validDataString
     * @description Tests the function removeFontStyles with a valid input.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_validDataString, () => {
        // Arrange
        let message = wrd.cHello;

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function removeFontStyles_inValidDataMessageString
     * @description Tests the function removeFontStyles with a invalid message string.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_inValidDataMessageString, () => {
        // Arrange
        let message = "";

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function removeFontStyles_inValidMessageInteger
     * @description Tests the function removeFontStyles with a invalid message integer.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_inValidMessageInteger, () => {
        // Arrange
        let message = num.c123;

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function removeFontStyles_inValidMessageBoolean
     * @description Tests the function removeFontStyles with a invalid message boolean.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_inValidMessageBoolean, () => {
        // Arrange
        let message = false;

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function removeFontStyles_inValidMessageUndefined
     * @description Tests the function removeFontStyles with a invalid message undefined.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_inValidMessageUndefined, () => {
        // Arrange
        let message = undefined;

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function removeFontStyles_inValidMessageNaN
     * @description Tests the function removeFontStyles with a invalid message NaN.
     * @author Json Howard
     * @date 2023/08/29
     */
    test(tst_con.cremoveFontStyles_inValidMessageNaN, () => {
        // Arrange
        let message = NaN;

        // Act
        let returnData = colorizer.removeFontStyles(message);

        // Assert
        expect(returnData).toBeTruthy();
    });
});