'use strict';
/* eslint-disable no-undef */
/**
 * @file configurator.test.js
 * @module constant.test
 * @description Unit tests for the configurator.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/configurator
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/09/04
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
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
 * @function setConfigurationSetting
 * @description Tests the positive and negative test cases of the setConfigurationSetting
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.csetConfigurationSetting, () => {
    /**
     * @function setConfigurationSetting_validData
     * @description Tests the business rules function setConfigurationSetting with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_validData, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceString
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNameSpace string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceString, () => {
        // Arrange
        let configurationNamespace = wrd.cHello;
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNameString
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameString, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = "";
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationValueString
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationValue string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueString, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = "";

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceNumber
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceNumber, () => {
        // Arrange
        let configurationNamespace = num.c123;
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceBoolean
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceBoolean, () => {
        // Arrange
        let configurationNamespace = false;
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceUndefined, () => {
        // Arrange
        let configurationNamespace = undefined;
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNamespaceNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNamespaceNaN, () => {
        // Arrange
        let configurationNamespace = NaN;
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNameNumber
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName Number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameNumber, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = num.c123;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNameBoolean
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameBoolean, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = false;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNameUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameUndefined, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = undefined;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationNameNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationNameNaN, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = NaN;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationValueNumber
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationValue number.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueNumber, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = num.c123;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationValueBoolean
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationValue boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueBoolean, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = false;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationValueUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationValue undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueUndefined, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = undefined;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidConfigurationValueNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationValue NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidConfigurationValueNaN, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;
        let configurationValue = NaN;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidAllUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid all undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidAllUndefined, () => {
        // Arrange
        let configurationNamespace = undefined;
        let configurationName = undefined;
        let configurationValue = undefined;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function setConfigurationSetting_inValidAllNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid all NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.csetConfigurationSetting_inValidAllNaN, () => {
        // Arrange
        let configurationNamespace = NaN;
        let configurationName = NaN;
        let configurationValue = NaN;

        // Act
        let returnData = colorizer.setConfigurationSetting(configurationNamespace, configurationName, configurationValue);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getConfigurationSetting
 * @description Tests the positive and negative test cases of the getConfigurationSetting
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.cgetConfigurationSetting, () => {
    /**
     * @function getConfigurationSetting_validDataString
     * @description Tests the business rules function setConfigurationSetting with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_validDataString, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidDataConfigurationNamespaceString
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidDataConfigurationNamespaceString, () => {
        // Arrange
        let configurationNamespace = wrd.cHello;
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidDataConfigurationNameString
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidDataConfigurationNameString, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = "";

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceInteger
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceInteger, () => {
        // Arrange
        let configurationNamespace = num.c123;
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceBoolean
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceBoolean, () => {
        // Arrange
        let configurationNamespace = false;
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNameInteger
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameInteger, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = num.c123;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNameBoolean
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameBoolean, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = false;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceUndefined, () => {
        // Arrange
        let configurationNamespace = undefined;
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNamespaceNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationNamespace NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNamespaceNaN, () => {
        // Arrange
        let configurationNamespace = NaN;
        let configurationName = wrd.cHello;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNameUndefined
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameUndefined, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = undefined;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function getConfigurationSetting_inValidConfigurationNameNaN
     * @description Tests the business rules function setConfigurationSetting with a invalid configurationName NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cgetConfigurationSetting_inValidConfigurationNameNaN, () => {
        // Arrange
        let configurationNamespace = data_con.dataBrokerJsonPath();
        let configurationName = NaN;

        // Act
        let returnData = colorizer.getConfigurationSetting(configurationNamespace, configurationName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function processConfigurationNameRules
 * @description Tests the positive and negative test cases of the processConfigurationNameRules
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.cprocessConfigurationNameRules, () => {
    /**
     * @function processConfigurationNameRules_validDataString
     * @description Tests the business rules function processConfigurationNameRules with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_validDataString, () => {
        // Arrange
        let fullyQualifiedName = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNameRules_inValidDataFullyQualifiedNameString
     * @description Tests the business rules function processConfigurationNameRules with a invalid fullyQualifiedName string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_inValidDataFullyQualifiedNameString, () => {
        // Arrange
        let fullyQualifiedName = "";

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNameRules_inValidFullyQualifiedNameInteger
     * @description Tests the business rules function processConfigurationNameRules with a invalid fullyQualifiedName integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_inValidFullyQualifiedNameInteger, () => {
        // Arrange
        let fullyQualifiedName = num.c123;

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNameRules_inValidFullyQualifiedNameBoolean
     * @description Tests the business rules function processConfigurationNameRules with a invalid fullyQualifiedName boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_inValidFullyQualifiedNameBoolean, () => {
        // Arrange
        let fullyQualifiedName = false;

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNameRules_inValidFullyQualifiedNameUndefined
     * @description Tests the business rules function processConfigurationNameRules with a invalid fullyQualifiedName undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_inValidFullyQualifiedNameUndefined, () => {
        // Arrange
        let fullyQualifiedName = undefined;

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNameRules_inValidFullyQualifiedNameNaN
     * @description Tests the business rules function processConfigurationNameRules with a invalid fullyQualifiedName NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNameRules_inValidFullyQualifiedNameNaN, () => {
        // Arrange
        let fullyQualifiedName = NaN;

        // Act
        let returnData = colorizer.processConfigurationNameRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function processConfigurationNamespaceRules
 * @description Tests the positive and negative test cases of the processConfigurationNamespaceRules
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.cprocessConfigurationNamespaceRules, () => {
    /**
     * @function processConfigurationNamespaceRules_validDataString
     * @description Tests the business rules function processConfigurationNamespaceRules with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_validDataString, () => {
        // Arrange
        let fullyQualifiedName = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNamespaceRules_inValidDataFullyQualifiedNameString
     * @description Tests the business rules function processConfigurationNamespaceRules with a invalid fullyQualifiedName string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_inValidDataFullyQualifiedNameString, () => {
        // Arrange
        let fullyQualifiedName = "";

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNamespaceRules_inValidFullyQualifiedNameInteger
     * @description Tests the business rules function processConfigurationNamespaceRules with a invalid fullyQualifiedName integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_inValidFullyQualifiedNameInteger, () => {
        // Arrange
        let fullyQualifiedName = num.c123;

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNamespaceRules_inValidFullyQualifiedNameBoolean
     * @description Tests the business rules function processConfigurationNamespaceRules with a invalid fullyQualifiedName boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_inValidFullyQualifiedNameBoolean, () => {
        // Arrange
        let fullyQualifiedName = false;

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNamespaceRules_inValidFullyQualifiedNameUndefined
     * @description Tests the business rules function processConfigurationNamespaceRules with a invalid fullyQualifiedName undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_inValidFullyQualifiedNameUndefined, () => {
        // Arrange
        let fullyQualifiedName = undefined;

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationNamespaceRules_inValidFullyQualifiedNameNaN
     * @description Tests the business rules function processConfigurationNamespaceRules with a invalid fullyQualifiedName NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationNamespaceRules_inValidFullyQualifiedNameNaN, () => {
        // Arrange
        let fullyQualifiedName = NaN;

        // Act
        let returnData = colorizer.processConfigurationNamespaceRules(fullyQualifiedName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function processConfigurationValueRules
 * @description Tests the positive and negative test cases of the processConfigurationValueRules
 * @author Json Howard
 * @date 2023/09/04
*/
describe(tst_con.cprocessConfigurationValueRules, () => {
    /**
     * @function processConfigurationValueRules_validDataString
     * @description Tests the business rules function processConfigurationValueRules with a valid input.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_validDataString, () => {
        // Arrange
        let name = wrd.cHello;
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidDataNameString
     * @description Tests the business rules function processConfigurationValueRules with a invalid name string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidDataNameString, () => {
        // Arrange
        let name = "";
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidDataValueString
     * @description Tests the business rules function processConfigurationValueRules with a invalid value string.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidDataValueString, () => {
        // Arrange
        let name = wrd.cHello;
        let value = "";

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidNameInteger
     * @description Tests the business rules function processConfigurationValueRules with a invalid name integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidNameInteger, () => {
        // Arrange
        let name = num.c123;
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidNameBoolean
     * @description Tests the business rules function processConfigurationValueRules with a invalid name boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidNameBoolean, () => {
        // Arrange
        let name = false;
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidValueInteger
     * @description Tests the business rules function processConfigurationValueRules with a invalid value integer.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidValueInteger, () => {
        // Arrange
        let name = wrd.cHello;
        let value = num.c123;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidValueBoolean
     * @description Tests the business rules function processConfigurationValueRules with a invalid value boolean.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidValueBoolean, () => {
        // Arrange
        let name = wrd.cHello;
        let value = false;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidNameUndefined
     * @description Tests the business rules function processConfigurationValueRules with a invalid name undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidNameUndefined, () => {
        // Arrange
        let name = undefined;
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidNameNaN
     * @description Tests the business rules function processConfigurationValueRules with a invalid name NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidNameNaN, () => {
        // Arrange
        let name = NaN;
        let value = wrd.cHello;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidValueUndefined
     * @description Tests the business rules function processConfigurationValueRules with a invalid value undefined.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidValueUndefined, () => {
        // Arrange
        let name = wrd.cHello;
        let value = undefined;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function processConfigurationValueRules_inValidValueNaN
     * @description Tests the business rules function processConfigurationValueRules with a invalid value NaN.
     * @author Json Howard
     * @date 2023/09/04
     */
    test(tst_con.cprocessConfigurationValueRules_inValidValueNaN, () => {
        // Arrange
        let name = wrd.cHello;
        let value = NaN;

        // Act
        let returnData = colorizer.processConfigurationValueRules(name, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
});