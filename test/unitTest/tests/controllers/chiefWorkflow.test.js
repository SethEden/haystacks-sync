'use strict';
/* eslint-disable no-undef */
/**
 * @file chiefWorkflow.test.js
 * @module constant.test
 * @description Unit tests for the chiefWorkflow.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/chiefWorkflow
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import chiefWorkflow from '../../../../src/controllers/chiefWorkflow.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function loadCommandWorkflowsFromPath
 * @description Tests the positive and negative test cases of the loadCommandWorkflowsFromPath
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cloadCommandWorkflowsFromPath, () => {
    /**
     * @function loadCommandWorkflowsFromPath_validDataString
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_validDataString, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidDataCommandWorkflowFilePathConfigurationNameString
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid commandWorkflowFilePathConfigurationName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidDataCommandWorkflowFilePathConfigurationNameString, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidDataContextNameString
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid contextName string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidDataContextNameString, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = "";

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameInteger
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid commandWorkflowFilePathConfigurationName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameInteger, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameBoolean
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid commandWorkflowFilePathConfigurationName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameBoolean, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidContextNameInteger
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidContextNameInteger, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidContextNameBoolean
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidContextNameBoolean, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = false;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameUndefined
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid commandWorkflowFilePathConfigurationName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameUndefined, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameNaN
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid commandWorkflowFilePathConfigurationName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidCommandWorkflowFilePathConfigurationNameNaN, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = NaN;
        let contextName = "";

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidContextNameUndefined
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidContextNameUndefined, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = undefined;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function loadCommandWorkflowsFromPath_inValidContextNameNaN
     * @description Tests the controllers.chiefWorkflow.loadCommandWorkflowsFromPath function, with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cloadCommandWorkflowsFromPath_inValidContextNameNaN, () => {
        // Arrange
        let commandWorkflowFilePathConfigurationName = data_con.dataBrokerXmlPath();
        let contextName = NaN;

        // Act
        let returnData = chiefWorkflow.loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
