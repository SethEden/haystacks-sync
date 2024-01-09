'use strict';
/* eslint-disable no-undef */
/**
 * @file chiefConfiguration.test.js
 * @module constant.test
 * @description Unit tests for the chiefConfiguration.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/chiefConfiguration
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import chiefConfiguration from '../../../../src/controllers/chiefConfiguration.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function setupConfiguration
 * @description Tests the positive and negative test cases of the setupConfiguration
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.csetupConfiguration, () => {
    /**
     * @function setupConfiguration_validDataString
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_validDataString, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidDataAppConfigPathString
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid appConfigPath string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidDataAppConfigPathString, () => {
        // Arrange
        let appConfigPath = wrd.cHello;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidDataFrameworkConfigPathString
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid frameworkConfigPath string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidDataFrameworkConfigPathString, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = wrd.cHello;

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidAppConfigPathInteger
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid appConfigPath integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidAppConfigPathInteger, () => {
        // Arrange
        let appConfigPath = num.c123;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidAppConfigPathBoolean
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid appConfigPath boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidAppConfigPathBoolean, () => {
        // Arrange
        let appConfigPath = false;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidFrameworkConfigPathInteger
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid frameworkConfigPath integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidFrameworkConfigPathInteger, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = num.c123;

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidFrameworkConfigPathBoolean
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid frameworkConfigPath boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidFrameworkConfigPathBoolean, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = false;

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidAppConfigPathUndefined
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid appConfigPath undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidAppConfigPathUndefined, () => {
        // Arrange
        let appConfigPath = undefined;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidAppConfigPathNaN
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid appConfigPath NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidAppConfigPathNaN, () => {
        // Arrange
        let appConfigPath = NaN;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidFrameworkConfigPathUndefined
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid frameworkConfigPath undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidFrameworkConfigPathUndefined, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = undefined;

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupConfiguration_inValidFrameworkConfigPathNaN
     * @description Tests the controllers.chiefConfiguration.setupConfiguration function, with a invalid frameworkConfigPath NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupConfiguration_inValidFrameworkConfigPathNaN, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = NaN;

        // Act
        let returnData = chiefConfiguration.setupConfiguration(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @note setupConfiguration is not exist.
 * @note parseLoadedConfigurationData is not exist.
 */
