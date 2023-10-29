'use strict';
/* eslint-disable no-undef */
/**
 * @file chiefData.test.js
 * @module constant.test
 * @description Unit tests for the chiefData.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/chiefData
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import chiefData from '../../../../src/controllers/chiefData.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function searchForUniversalDebugConfigSetting
 * @description Tests the positive and negative test cases of the searchForUniversalDebugConfigSetting
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.csearchForUniversalDebugConfigSetting, () => {
    /**
     * @function searchForUniversalDebugConfigSetting_validDataString
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_validDataString, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidDataAppConfigPathNameString
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid appConfigPathName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidDataAppConfigPathNameString, () => {
        // Arrange
        let appConfigPath = wrd.cHello;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidDataFrameworkConfigPathNameString
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid frameworkConfigPathName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidDataFrameworkConfigPathNameString, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = wrd.cHello;

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidAppConfigPathNameInteger
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid appConfigPathName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameInteger, () => {
        // Arrange
        let appConfigPath = num.c123;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidAppConfigPathNameBoolean
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid appConfigPathName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameBoolean, () => {
        // Arrange
        let appConfigPath = false;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameInteger
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid frammeworkConfigPathName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameInteger, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = num.c123;

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameBoolean
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid frameworkConfigPathName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameBoolean, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = false;

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidAppConfigPathNameUndefined
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid appConfigPathName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameUndefined, () => {
        // Arrange
        let appConfigPath = undefined;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidAppConfigPathNameNaN
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid appConfigPathName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidAppConfigPathNameNaN, () => {
        // Arrange
        let appConfigPath = NaN;
        let frameworkConfigPath = data_con.frameworkPath();

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameUndefined
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid frameworkConfigPathName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameUndefined, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = undefined;

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function searchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameNaN
     * @description Tests the controllers.chiefData function searchForUniversalDebugConfigSetting with a invalid frameworkConfigPathName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csearchForUniversalDebugConfigSetting_inValidFrameworkConfigPathNameNaN, () => {
        // Arrange
        let appConfigPath = data_con.applicationPath();
        let frameworkConfigPath = NaN;

        // Act
        let returnData = chiefData.searchForUniversalDebugConfigSetting(appConfigPath, frameworkConfigPath);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function determineThemeDebugConfigFilesToLoad
 * @description Tests the positive and negative test cases of the determineThemeDebugConfigFilesToLoad
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cdetermineThemeDebugConfigFilesToLoad, () => {
    /**
     * @function determineThemeDebugConfigFilesToLoad_validDataString
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_validDataString, () => {
        // Arrange
        let themeConfigPathName = data_con.themeConfigPathName();

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function determineThemeDebugConfigFilesToLoad_inValidDataThemeConfigPathNameString
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a invalid themeConfigPathName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_inValidDataThemeConfigPathNameString, () => {
        // Arrange
        let themeConfigPathName = wrd.cHello;

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function determineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameInteger
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a invalid themeConfigPathName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameInteger, () => {
        // Arrange
        let themeConfigPathName = num.c123;

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function determineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameBoolean
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a invalid themeConfigPathName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameBoolean, () => {
        // Arrange
        let themeConfigPathName = false;

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function determineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameUndefined
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a invalid themeConfigPathName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameUndefined, () => {
        // Arrange
        let themeConfigPathName = undefined;

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function determineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameNaN
     * @description Tests the controllers.chiefData function determineThemeDebugConfigFilesToLoad with a invalid themeConfigPathName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cdetermineThemeDebugConfigFilesToLoad_inValidThemeConfigPathNameNaN, () => {
        // Arrange
        let themeConfigPathName = NaN;

        // Act
        let returnData = chiefData.determineThemeDebugConfigFilesToLoad(themeConfigPathName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getAndProcessCsvData
 * @description Tests the positive and negative test cases of the getAndProcessCsvData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cgetAndProcessCsvData, () => {
    /**
     * @function getAndProcessCsvData_validDataString
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_validDataString, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidDataPathAndFilenameString
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid pathAndFilename string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidDataPathAndFilenameString, () => {
        // Arrange
        let pathAndFileName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidDataContextNameString
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid contextName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidDataContextNameString, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = "";

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidPathAndFilenameInteger
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid pathAndFilename integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidPathAndFilenameInteger, () => {
        // Arrange
        let pathAndFileName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidPathAndFilenameBoolean
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid pathAndFilename boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidPathAndFilenameBoolean, () => {
        // Arrange
        let pathAndFileName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidContextNameInteger
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidContextNameInteger, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidContextNameBoolean
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidContextNameBoolean, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = false;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidPathAndFilenameUndefined
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid pathAndFilename undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidPathAndFilenameUndefined, () => {
        // Arrange
        let pathAndFileName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidPathAndFilenameNaN
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid pathAndFilename NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidPathAndFilenameNaN, () => {
        // Arrange
        let pathAndFileName = NaN;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidContextNameUndefined
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidContextNameUndefined, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = undefined;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessCsvData_inValidContextNameNaN
     * @description Tests the controllers.chiefData function getAndProcessCsvData with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessCsvData_inValidContextNameNaN, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerCsvPath();
        let contextName = NaN;

        // Act
        let returnData = chiefData.getAndProcessCsvData(pathAndFileName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getAndProcessXmlData
 * @description Tests the positive and negative test cases of the getAndProcessXmlData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cgetAndProcessXmlData, () => {
    /**
     * @function getAndProcessXmlData_validDataString
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_validDataString, () => {
        // Arrange
        let pathAndFileName = data_con.dataBrokerXmlPath();

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessXmlData_inValidDataPathAndFilenameString
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a invalid pathAndFilename string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_inValidDataPathAndFilenameString, () => {
        // Arrange
        let pathAndFileName = wrd.cHello;

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessXmlData_inValidPathAndFilenameInteger
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a invalid pathAndFilename integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_inValidPathAndFilenameInteger, () => {
        // Arrange
        let pathAndFileName = num.c123;

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessXmlData_inValidPathAndFilenameBoolean
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a invalid pathAndFilename boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_inValidPathAndFilenameBoolean, () => {
        // Arrange
        let pathAndFileName = false;

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessXmlData_inValidPathAndFilenameUndefined
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a invalid pathAndFilename undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_inValidPathAndFilenameUndefined, () => {
        // Arrange
        let pathAndFileName = undefined;

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getAndProcessXmlData_inValidPathAndFilenameNaN
     * @description Tests the controllers.chiefData function getAndProcessXmlData with a invalid pathAndFilename NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cgetAndProcessXmlData_inValidPathAndFilenameNaN, () => {
        // Arrange
        let pathAndFileName = NaN;

        // Act
        let returnData = chiefData.getAndProcessXmlData(pathAndFileName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setupAllCsvData
 * @description Tests the positive and negative test cases of the setupAllCsvData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.csetupAllCsvData, () => {
    /**
     * @function setupAllCsvData_validDataString
     * @description Tests the controllers.chiefData function setupAllCsvData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_validDataString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataDataPathConfigurationNameString
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid dataPathConfigurationName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataDataPathConfigurationNameString, () => {
        // Arrange
        let dataPathConfigurationName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataContextNameString
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid contextName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataContextNameString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = "";

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataPathConfigurationNameInteger
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid dataPathConfigurationName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataPathConfigurationNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataPathConfigurationNameBoolean
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid dataPathConfigurationName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataPathConfigurationNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidContextNameInteger
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidContextNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidContextNameBoolean
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidContextNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = false;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataPathConfigurationNameUndefined
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid dataPathConfigurationName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataPathConfigurationNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidDataPathConfigurationNameNaN
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid dataPathConfigurationName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidDataPathConfigurationNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = NaN;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidContextNameUndefined
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidContextNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = undefined;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllCsvData_inValidContextNameNaN
     * @description Tests the controllers.chiefData function setupAllCsvData with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllCsvData_inValidContextNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerCsvPath();
        let contextName = NaN;

        // Act
        let returnData = chiefData.setupAllCsvData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setupAllXmlData
 * @description Tests the positive and negative test cases of the setupAllXmlData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.csetupAllXmlData, () => {
    /**
     * @function setupAllXmlData_validDataString
     * @description Tests the controllers.chiefData function setupAllXmlData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_validDataString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataDataPathConfigurationNameString
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid dataPathConfigurationName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataDataPathConfigurationNameString, () => {
        // Arrange
        let dataPathConfigurationName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataContextNameString
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid contextName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataContextNameString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = "";

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataPathConfigurationNameInteger
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid dataPathConfigurationName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataPathConfigurationNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataPathConfigurationNameBoolean
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid dataPathConfigurationname boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataPathConfigurationNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidContextNameInteger
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidContextNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidContextNameBoolean
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidContextNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = false;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataPathConfigurationNameUndefined
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid dataPathConfigurationName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataPathConfigurationNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidDataPathConfigurationNameNaN
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid dataPathConfigurationName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidDataPathConfigurationNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = NaN;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidContextNameUndefined
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidContextNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = undefined;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllXmlData_inValidContextNameNaN
     * @description Tests the controllers.chiefData function setupAllXmlData with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllXmlData_inValidContextNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = NaN;

        // Act
        let returnData = chiefData.setupAllXmlData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function setupAllJsonConfigData
 * @description Tests the positive and negative test cases of the setupAllJsonConfigData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.csetupAllJsonConfigData, () => {
    /**
     * @function setupAllJsonConfigData_validDataString
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_validDataString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataPathConfigurationNameString
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid dataPathConfigurationName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataPathConfigurationNameString, () => {
        // Arrange
        let dataPathConfigurationName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataContextNameString
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid contextName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataContextNameString, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = "";

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataPathConfigurationNameInteger
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid dataPathConfigurationName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataPathConfigurationNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataPathConfigurationNameBoolean
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid dataPathConfigurationName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataPathConfigurationNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidContextNameInteger
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidContextNameInteger, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidContextNameBoolean
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidContextNameBoolean, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = false;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataPathConfigurationNameUndefined
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid dataPathConfigurationname undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataPathConfigurationNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidDataPathConfigurationNameNaN
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid dataPathConfigurationName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidDataPathConfigurationNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = NaN;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidContextNameUndefined
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidContextNameUndefined, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = undefined;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setupAllJsonConfigData_inValidContextNameNaN
     * @description Tests the controllers.chiefData function setupAllJsonConfigData with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.csetupAllJsonConfigData_inValidContextNameNaN, () => {
        // Arrange
        let dataPathConfigurationName = data_con.dataBrokerJsonPath();
        let contextName = NaN;

        // Act
        let returnData = chiefData.setupAllJsonConfigData(dataPathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function addConstantsValidationData
 * @description Tests the positive and negative test cases of the addConstantsValidationData
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.caddConstantsValidationData, () => {
    /**
     * @function addConstantsValidationData_validDataString
     * @description Tests the controllers.chiefData function addConstantsValidationData with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_validDataString, () => {
        // Arrange
        let arrayValidationData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addConstantsValidationData_inValidDataArrayValidationDataString
     * @description Tests the controllers.chiefData function addConstantsValidationData with a invalid arrayValidationData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_inValidDataArrayValidationDataString, () => {
        // Arrange
        let arrayValidationData = wrd.cHello;

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addConstantsValidationData_inValidArrayValidationDataInteger
     * @description Tests the controllers.chiefData function addConstantsValidationData with a invalid arrayValidationData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_inValidArrayValidationDataInteger, () => {
        // Arrange
        let arrayValidationData = num.c123;

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addConstantsValidationData_inValidArrayValidationDataBoolean
     * @description Tests the controllers.chiefData function addConstantsValidationData with a invalid arrayValidationData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_inValidArrayValidationDataBoolean, () => {
        // Arrange
        let arrayValidationData = false;

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addConstantsValidationData_inValidArrayValidationDataUndefined
     * @description Tests the controllers.chiefData function addConstantsValidationData with a invalid arrayValidationData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_inValidArrayValidationDataUndefined, () => {
        // Arrange
        let arrayValidationData = undefined;

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function addConstantsValidationData_inValidArrayValidationDataNaN
     * @description Tests the controllers.chiefData function addConstantsValidationData with a invalid arrayValidationData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddConstantsValidationData_inValidArrayValidationDataNaN, () => {
        // Arrange
        let arrayValidationData = NaN;

        // Act
        let returnData = chiefData.addConstantsValidationData(arrayValidationData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
