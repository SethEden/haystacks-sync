'use strict';
/* eslint-disable no-undef */
/**
 * @file workflowBroker.test.js
 * @module workflowBroker.test
 * @description Unit tests for the workflowBroker.js
 * @requires module:workflowBroker
 * @requires module:rulesLibrary
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/workflowBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import workflowBroker from '../../../../src/brokers/workflowBroker.js';
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import chiefWorkflow from '../../../../src/controllers/chiefWorkflow.js';
import configurator from '../../../../src/executrix/configurator.js';
import D from '../../../../src/structures/data.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as obj_con from '../../testData/brokers/workflowBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { sys, wrd, cfg } = hayConst;

/**
 * @function getWorkflow
 * @description Tests the positive and negative test cases of the getWorkflow function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetWorkflow, () => {
    /**
    * @function getWorkflow_validData
    * @description Tests the brokers.workflowBroker function getWorkflow with valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflow_validData, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getWorkflow_inValidString
    * @description Tests the brokers.workflowBroker function getWorkflow with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflow_inValidString, () => {
        // Arrange
        let workflowName = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getWorkflow_inValidNumber
    * @description Tests the brokers.workflowBroker function getWorkflow with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflow_inValidNumber, () => {
        // Arrange
        let workflowName = 123;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getWorkflow_inValidBoolean
    * @description Tests the brokers.workflowBroker function getWorkflow with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflow_inValidBoolean, () => {
        // Arrange
        let workflowName = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflow(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function doesWorkflowExist
 * @description Tests the positive and negative test cases of the doesWorkflowExist function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cdoesWorkflowExist, () => {
    /**
    * @function doesWorkflowExist_validData
    * @description Tests the brokers.workflowBroker function doesWorkflowExist with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExist_validData, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesWorkflowExist_inValidString
    * @description Tests the brokers.workflowBroker function doesWorkflowExist with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExist_inValidString, () => {
        // Arrange
        let workflowName = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesWorkflowExist_inValidNumber
    * @description Tests the brokers.workflowBroker function doesWorkflowExist with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExist_inValidNumber, () => {
        // Arrange
        let workflowName = 123;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesWorkflowExist_inValidBoolean
    * @description Tests the brokers.workflowBroker function doesWorkflowExist with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExist_inValidBoolean, () => {
        // Arrange
        let workflowName = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExist(workflowName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function doesWorkflowExistInWorkflowData
 * @description Tests the positive and negative test cases of the doesWorkflowExistInWorkflowData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cdoesWorkflowExistInWorkflowData, () => {
    /**
    * @function doesWorkflowExistInWorkflowData_validData
    * @description Tests the brokers.workflowBroker function doesWorkflowExistInWorkflowData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExistInWorkflowData_validData, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExistInWorkflowData(D[sys.cCommandWorkflows], workflowName);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesWorkflowExistInWorkflowData_inValidWorkflowDataString
    * @description Tests the brokers.workflowBroker function doesWorkflowExistInWorkflowData with an invalid string workflow data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowDataString, () => {
        // Arrange
        let workflowData = data_con.stringRandomText;
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesWorkflowExistInWorkflowData_inValidWorkflowNameString
    * @description Tests the brokers.workflowBroker function doesWorkflowExistInWorkflowData with an invalid string workflowName data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidWorkflowNameString, () => {
        // Arrange
        let workflowName = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);        

        // Act
        let returnData = workflowBroker.doesWorkflowExistInWorkflowData(D[sys.cCommandWorkflows], workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesWorkflowExistInWorkflowData_inValidNumber
    * @description Tests the brokers.workflowBroker function doesWorkflowExistInWorkflowData with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidNumber, () => {
        // Arrange
        let workflowData = 123;
        let workflowName = data_con.stringRandomText;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesWorkflowExistInWorkflowData_inValidBoolean
    * @description Tests the brokers.workflowBroker function doesWorkflowExistInWorkflowData with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cdoesWorkflowExistInWorkflowData_inValidBoolean, () => {
        // Arrange
        let workflowData = false;
        let workflowName = data_con.stringRandomText;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.doesWorkflowExistInWorkflowData(workflowData, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function searchWorkflow
 * @description Tests the positive and negative test cases of the searchWorkflow function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.csearchWorkflow, () => {
    /**
    * @function searchWorkflow_validData
    * @description Tests the brokers.workflowBroker function searchWorkflow with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csearchWorkflow_validData, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.searchWorkflow(D[sys.cCommandWorkflows], workflowName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function searchWorkflow_inValidWorkflowDataString
    * @description Tests the brokers.workflowBroker function searchWorkflow with an invalid string workflow data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csearchWorkflow_inValidWorkflowDataString, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.searchWorkflow(data_con.stringRandomText, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchWorkflow_inValidWorkflowNameString
    * @description Tests the brokers.workflowBroker function searchWorkflow with an invalid string workflow name data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csearchWorkflow_inValidWorkflowNameString, () => {
        // Arrange
        let workflowName = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.searchWorkflow(D[sys.cCommandWorkflows], workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchWorkflow_inValidNumber
    * @description Tests the brokers.workflowBroker function searchWorkflow with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csearchWorkflow_inValidNumber, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.searchWorkflow(123, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchWorkflow_inValidBoolean
    * @description Tests the brokers.workflowBroker function searchWorkflow with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csearchWorkflow_inValidBoolean, () => {
        // Arrange
        let workflowName = wrd.cdoes + wrd.cArray + wrd.cContain + wrd.cCharacter;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.searchWorkflow(false, workflowName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getAllWorkflows
 * @description Tests the positive and negative test cases of the getAllWorkflows function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetAllWorkflows, () => {
    /**
    * @function getAllWorkflows_validData
    * @description Tests the brokers.workflowBroker function getAllWorkflows with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetAllWorkflows_validData, () => {
        // Arrange
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getAllWorkflows(D[sys.cCommandWorkflows]);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getAllWorkflows_inValidString
    * @description Tests the brokers.workflowBroker function getAllWorkflows with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetAllWorkflows_inValidString, () => {
        // Arrange
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getAllWorkflows(data_con.stringRandomText);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getAllWorkflows_inValidNumber
    * @description Tests the brokers.workflowBroker function getAllWorkflows with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetAllWorkflows_inValidNumber, () => {
        // Arrange
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getAllWorkflows(123);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getAllWorkflows_inValidBoolean
    * @description Tests the brokers.workflowBroker function getAllWorkflows with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetAllWorkflows_inValidBoolean, () => {
        // Arrange
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getAllWorkflows(false);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getWorkflowNamespaceDataObject
 * @description Tests the positive and negative test cases of the getWorkflowNamespaceDataObject function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetWorkflowNamespaceDataObject, () => {
    /**
    * @function getWorkflowNamespaceDataObject_validData
    * @description Tests the brokers.workflowBroker function getWorkflowNamespaceDataObject with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflowNamespaceDataObject_validData, () => {
        // Arrange
        let namespaceToFind = wrd.cbusiness + wrd.cRules;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflowNamespaceDataObject(D[sys.cCommandWorkflows], namespaceToFind);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString
    * @description Tests the brokers.workflowBroker function getWorkflowNamespaceDataObject with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidWorkflowDataStructureString, () => {
        // Arrange
        let namespaceToFind = wrd.cbusiness + wrd.cRules;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act        
        let returnData = workflowBroker.getWorkflowNamespaceDataObject(data_con.stringRandomText, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getWorkflowNamespaceDataObject_inValidNamespaceToFindString
    * @description Tests the brokers.workflowBroker function getWorkflowNamespaceDataObject with an invalid string namespaceToFind data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNamespaceToFindString, () => {
        // Arrange
        let namespaceToFind = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getWorkflowNamespaceDataObject(D[sys.cCommandWorkflows], namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getWorkflowNamespaceDataObject_inValidNumber
    * @description Tests the brokers.workflowBroker function getWorkflowNamespaceDataObject with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidNumber, () => {
        // Arrange
        let namespaceToFind = wrd.cbusiness + wrd.cRules;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getWorkflowNamespaceDataObject(123, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getWorkflowNamespaceDataObject_inValidBoolean
    * @description Tests the brokers.workflowBroker function getWorkflowNamespaceDataObject with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetWorkflowNamespaceDataObject_inValidBoolean, () => {
        // Arrange
        let namespaceToFind = wrd.cbusiness + wrd.cRules;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkWorkflowsPath, obj_con.workflowPath());
        chiefWorkflow.loadCommandWorkflowsFromPath(cfg.cframeworkWorkflowsPath, wrd.cFramework);

        // Act
        let returnData = workflowBroker.getWorkflowNamespaceDataObject(false, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });
});
