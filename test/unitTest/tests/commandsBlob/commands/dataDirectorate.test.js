'use strict';
/* eslint-disable no-undef */
/**
 * @file dataDirectorate.test.js
 * @module dataDirectorate.test
 * @description Unit tests for the dataDirectorate.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/dataDirectorate
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/18
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataDirectorate from '../../../../../src/commandsBlob/commands/dataDirectorate.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function printDataHive
 * @description Tests the positive and negative test cases of the printDataHive
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cprintDataHive, () => {
    /**
     * @function printDataHive_validDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = num.c123;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = false;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = undefined;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHive_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHive with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHive_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = NaN;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function printDataHiveAttributes
 * @description Tests the positive and negative test cases of the printDataHiveAttributes
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cprintDataHiveAttributes, () => {
    /**
     * @function printDataHiveAttributes_validDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHiveAttributes(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a ivalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function printDataHiveAttributes_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function printDataHiveAttributes with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cprintDataHiveAttributes_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = dataDirectorate.printDataHive(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function clearDataStorage
 * @description Tests the positive and negative test cases of the clearDataStorage
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cclearDataStorage, () => {
    /**
     * @function clearDataStorage_validDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearDataStorage_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function clearDataStorage with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cclearDataStorage_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = dataDirectorate.clearDataStorage(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function changeSetting
 * @description Tests the positive and negative test cases of the changeSetting
 * @author Json Howard
 * @date 2023/08/18
*/
describe(tst_con.cchangeSetting, () => {
    /**
     * @function changeSetting_validDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid input string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function changeSetting_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.dataDirectorate function changeSetting with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/18
     */
    test(tst_con.cchangeSetting_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = dataDirectorate.changeSetting(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
