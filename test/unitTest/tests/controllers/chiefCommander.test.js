'use strict';
/* eslint-disable no-undef */
/**
 * @file chiefCommander.test.js
 * @module constant.test
 * @description Unit tests for the chiefCommander.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/chiefCommander
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import chiefCommander from '../../../../src/controllers/chiefCommander.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function bootStrapCommands
 * @description Tests the positive and negative test cases of the bootStrapCommands
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cbootStrapCommands, () => {
    /**
     * @function bootStrapCommands_validDataString
     * @description Tests the controllers.chiefCommander.bootStrapCommands function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cbootStrapCommands_validDataString, () => {
        // Act
        let returnData = chiefCommander.bootStrapCommands();

        // Assert
        expect(returnData).toBeUndefined();
    });
});

/**
 * @function addClientCommands
 * @description Tests the positive and negative test cases of the addClientCommands
 * @author Json Howard
 * @date 2023/09/25
*/
describe(tst_con.caddClientCommands, () => {
    /**
     * @function addClientCommands_validDataString
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_validDataString, () => {
        // Arrange
        let clientCommands = {
            "test": "echo \"Error: no test specified\" && exit 1"
        };

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function addClientCommands_inValidDataClientCommandsString
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a invalid clientCommands string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidDataClientCommandsString, () => {
        // Arrange
        let clientCommands = wrd.cHello;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsInteger
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a invalid clientCommands integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsInteger, () => {
        // Arrange
        let clientCommands = num.c123;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsBoolean
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a invalid clientCommands boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsBoolean, () => {
        // Arrange
        let clientCommands = false;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsUndefined
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a invalid clientCommands undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsUndefined, () => {
        // Arrange
        let clientCommands = undefined;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function addClientCommands_inValidClientCommandsNaN
     * @description Tests the controllers.chiefCommander.addClientCommands function, with a invalid clientCommands NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.caddClientCommands_inValidClientCommandsNaN, () => {
        // Arrange
        let clientCommands = NaN;

        // Act
        let returnData = chiefCommander.addClientCommands(clientCommands);

        // Assert
        expect(returnData).toBeUndefined();
    });
});

/**
 * @function loadCommandAliasesFromPath
 * @description Tests the positive and negative test cases of the loadCommandAliasesFromPath
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cloadCommandAliasesFromPath, () => {
    /**
     * @function loadCommandAliasesFromPath_validDataString
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a valid input.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_validDataString, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidDataCommandAliasesFilePathConfigurationNameString
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid string commandAliasesFilePathConfigurationName.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidDataCommandAliasesFilePathConfigurationNameString, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = wrd.cHello;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidDataContextNameString
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid contextName string.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidDataContextNameString, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = "";

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameInteger
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid commandAliasesFilePathConfigurationName integer.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameInteger, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = num.c123;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameBoolean
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid commandAliasesFilePathConfigurationName boolean.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameBoolean, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = false;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidContextNameInteger
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid contextName integer.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidContextNameInteger, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = num.c123;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidContextNameBoolean
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid contextName boolean.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidContextNameBoolean, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = false;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameUndefined
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid commandAliasesFilePathConfigurationName undefined.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameUndefined, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = undefined;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameNaN
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid commandAliasesFilePathConfigurationName NaN.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidCommandAliasesFilePathConfigurationNameNaN, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = NaN;
        let contextName = wrd.cHello;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidContextNameUndefined
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid contextName undefined.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidContextNameUndefined, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = undefined;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function loadCommandAliasesFromPath_inValidContextNameNaN
     * @description Tests the controllers.chiefCommander.loadCommandAliasesFromPath function, with a invalid contextName NaN.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cloadCommandAliasesFromPath_inValidContextNameNaN, () => {
        // Arrange
        let commandAliasesFilePathConfigurationName = data_con.applicationPath();
        let contextName = NaN;

        // Act
        let returnData = chiefCommander.loadCommandAliasesFromPath(commandAliasesFilePathConfigurationName, contextName);

        // Assert
        expect(returnData).toBeUndefined();
    });
});

/**
 * @function enqueueCommand
 * @description Tests the positive and negative test cases of the enqueueCommand
 * @author Json Howard
 * @date 2023/08/22
 * @note command should be string.
*/
describe(tst_con.cenqueueCommand, () => {
    /**
     * @function enqueueCommand_validDataString
     * @description Tests the controllers.chiefCommander.enqueueCommand function, with a valid input.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cenqueueCommand_validDataString, () => {
        // Arrange
        let command = data_con.JsonObjectArrayOfStrings_02;

        // Act
        let returnData = chiefCommander.enqueueCommand(command);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function enqueueCommand_inValidCommandInteger
     * @description Tests the controllers.chiefCommander.enqueueCommand function, with a invalid command integer.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cenqueueCommand_inValidCommandInteger, () => {
        // Arrange
        let command = num.c123;

        // Act
        let returnData = chiefCommander.enqueueCommand(command);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function enqueueCommand_inValidCommandBoolean
     * @description Tests the controllers.chiefCommander.enqueueCommand function, with a invalid command boolean.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cenqueueCommand_inValidCommandBoolean, () => {
        // Arrange
        let command = false;

        // Act
        let returnData = chiefCommander.enqueueCommand(command);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function enqueueCommand_inValidCommandUndefined
     * @description Tests the controllers.chiefCommander.enqueueCommand function, with a invalid command undefined.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cenqueueCommand_inValidCommandUndefined, () => {
        // Arrange
        let command = undefined;

        // Act
        let returnData = chiefCommander.enqueueCommand(command);

        // Assert
        expect(returnData).toBeUndefined();
    });
    
    /**
     * @function enqueueCommand_inValidCommandNaN
     * @description Tests the controllers.chiefCommander.enqueueCommand function, with a invalid command NaN.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cenqueueCommand_inValidCommandNaN, () => {
        // Arrange
        let command = NaN;

        // Act
        let returnData = chiefCommander.enqueueCommand(command);

        // Assert
        expect(returnData).toBeUndefined();
    });
});

/**
 * @function isCommandQueueEmpty
 * @description Tests the positive and negative test cases of the isCommandQueueEmpty
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cisCommandQueueEmpty, () => {
    /**
     * @function isCommandQueueEmpty_validDataFalse
     * @description Tests the controllers.chiefCommander.isCommandQueueEmpty function, with a valid false.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cisCommandQueueEmpty_validDataFalse, () => {
        // Act
        let returnData = chiefCommander.isCommandQueueEmpty();

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
     * @function isCommandQueueEmpty_validDataTrue
     * @description Tests the controllers.chiefCommander.isCommandQueueEmpty function, with a valid true.
     * @author Json Howard
     * @date 2023/09/25
     */
    test(tst_con.cisCommandQueueEmpty_validDataTrue, () => {
        // Act
        let returnData = chiefCommander.isCommandQueueEmpty();

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function processCommandQueue
 * @description Tests the positive and negative test cases of the processCommandQueue
 * @author Json Howard
 * @date 2023/08/22
 * @NOTE Can only be tested in integration testing.
*/
describe(tst_con.cprocessCommandQueue, () => {
});
