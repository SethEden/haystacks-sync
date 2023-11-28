'use strict';
/* eslint-disable no-undef */
/**
 * @file commandBroker.test.js
 * @module commandBroker.test
 * @description Unit tests for the commandBroker.js
 * @requires module:commandBroker
 * @requires module:data
 * @requires module:testData/commandBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/13
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import commandBroker from '../../../../src/brokers/commandBroker.js';
import D from '../../../../src/structures/data.js';
import * as obj_con from '../../testData/brokers/commandBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { bas, wrd, num } = hayConst;

/**
 * @function bootStrapCommands
 * @description Tests the positive and negative test cases of the bootStrapCommands function.
 * @author Json Howard
 * @date 2023/04/13
 */
describe(tst_con.cbootStrapCommands, () => {
    /**
    * @function bootStrapCommands_validData
    * @description Tests the brokers.commandBroker.bootStrapCommands function, with a valid input.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cbootStrapCommands_validData, () => {
        // Arrange
        let input = undefined;

        // Act
        commandBroker.bootStrapCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });

    /**
    * @function bootStrapCommands_inValidString
    * @description Tests the brokers.commandBroker.bootStrapCommands function, with an invalid string.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cbootStrapCommands_inValidString, () => {
        // Arrange
        let input = wrd.cHello;

        // Act
        commandBroker.bootStrapCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });

    /**
    * @function bootStrapCommands_inValidNumber
    * @description Tests the brokers.commandBroker.bootStrapCommands function, with an invalid number.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cbootStrapCommands_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        commandBroker.bootStrapCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });

    /**
    * @function bootStrapCommands_inValidBoolean
    * @description Tests the brokers.commandBroker.bootStrapCommands function, with an invalid boolean.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cbootStrapCommands_inValidBoolean, () => {
        // Arrange
        let input = true;

        // Act
        commandBroker.bootStrapCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });
});

/**
 * @function addClientCommands
 * @description Tests the positive and negative test cases of the addClientCommands function.
 * @author Json Howard
 * @date 2023/04/13
 */
describe(tst_con.caddClientCommands, () => {
    /**
    * @function addClientCommands_validData
    * @description Tests the brokers.commandBroker.addClientCommands function, with a valid input.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.caddClientCommands_validData, () => {
        // Arrange
        let input = obj_con.JsonObjectArrayOfStrings_01;

        // Act
        commandBroker.addClientCommands(input);

        // Assert
        expect(D[wrd.cCommands][num.c0]).toBeTruthy();
        expect(D[wrd.cCommands][num.c1]).toBeTruthy();
        expect(D[wrd.cCommands][num.c2]).toBeTruthy();
        expect(D[wrd.cCommands][num.c3]).toBeTruthy();
    });

    /**
    * @function addClientCommands_inValidString
    * @description Tests the brokers.commandBroker.addClientCommands function, with an invalid string.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.caddClientCommands_inValidString, () => {
        // Arrange
        let input = wrd.cHello;

        // Act
        commandBroker.addClientCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });

    /**
    * @function addClientCommands_inValidNumber
    * @description Tests the brokers.commandBroker.addClientCommands function, with an invalid number.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.caddClientCommands_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        commandBroker.addClientCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });

    /**
    * @function addClientCommands_inValidBoolean
    * @description Tests the brokers.commandBroker.addClientCommands function, with an invalid boolean.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.caddClientCommands_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        commandBroker.addClientCommands(input);

        // Assert
        expect(D[wrd.cCommands][wrd.cexit]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cname]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cabout]).toBeTruthy();
        expect(D[wrd.cCommands][wrd.cversion]).toBeTruthy();
    });
});

/**
 * @function getValidCommand
 * @description Tests the positive and negative test cases of the getValidCommand function.
 * @author Json Howard
 * @date 2023/04/13
 */
describe(tst_con.cgetValidCommand, () => {
    /**
    * @function getValidCommand_validData
    * @description Tests the brokers.commandBroker.getValidCommand function, with a valid input.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cgetValidCommand_validData, () => {
        // Arrange
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cversion + bas.cSpace + wrd.cabout;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBe(wrd.cname);
    });

    /**
    * @function getValidCommand_inValidString
    * @description Tests the brokers.commandBroker.getValidCommand function, with an invalid string.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cgetValidCommand_inValidString, () => {
        // Arrange
        let commandString = wrd.cHello;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getValidCommand_inValidDelimiterString
    * @description Tests the brokers.commandBroker.getValidCommand function, with an invalid delimiter string.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cgetValidCommand_inValidDelimiterString, () => {
        // Arrange
        let commandString = wrd.cname + bas.cSpace + wrd.capplication + bas.cSpace + wrd.cversion + bas.cSpace + wrd.cabout;
        let commandDelimiter = bas.cAndPersand;

        // Act
        let returnData = commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getValidCommand_inValidNumber
    * @description Tests the brokers.commandBroker.getValidCommand function, with an invalid integer.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cgetValidCommand_inValidNumber, () => {
        // Arrange
        let commandString = 546;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getValidCommand_inValidBoolean
    * @description Tests the brokers.commandBroker.getValidCommand function, with an invalid boolean.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.cgetValidCommand_inValidBoolean, () => {
        // Arrange
        let commandString = false;
        let commandDelimiter = bas.cSpace;

        // Act
        let returnData = commandBroker.getValidCommand(commandString, commandDelimiter);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function countMatchingCommandAlias
 * @description Tests the positive and negative test cases of the countMatchingCommandAlias function.
 * @author Json Howard
 * @date 2023/04/13
 */
describe(tst_con.ccountMatchingCommandAlias, () => {
    /**
    * @function countMatchingCommandAlias_validData
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with a valid data.
    * @author Json Howard
    * @date 2023/04/13
    */
    test(tst_con.ccountMatchingCommandAlias_validData, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = wrd.chello;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(2);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasDataString
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid string alias data.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataString, () => {
        // Arrange
        let commandAliasData = wrd.cHello + wrd.cWorld;
        let commandAliasName = wrd.cHello;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasNameString
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid string alias name.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameString, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = wrd.cWorld;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasDataNumber
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid number alias data.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataNumber, () => {
        // Arrange
        let commandAliasData = 123;
        let commandAliasName = wrd.cWorld;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasDataBoolean
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid boolean alias data.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasDataBoolean, () => {
        // Arrange
        let commandAliasData = false;
        let commandAliasName = wrd.cWorld;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasNameNumber
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid integer alias.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameNumber, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = 546;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });

    /**
    * @function countMatchingCommandAlias_inValidCommandAliasNameBoolean
    * @description Tests the brokers.commandBroker.countMatchingCommandAlias function, with an invalid boolean alias data.
    * @author Json Howard
    * @date 2023/04/14
    */
    test(tst_con.ccountMatchingCommandAlias_inValidCommandAliasNameBoolean, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = false;

        // Act
        let returnData = commandBroker.countMatchingCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(0);
    });
});

/**
 * @function searchCommandAlias
 * @description Tests the positive and negative test cases of the searchCommandAlias function.
 * @author Json Howard
 * @date 2023/04/15
 */
describe(tst_con.csearchCommandAlias, () => {
    /**
    * @function searchCommandAlias_validData
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with a valid data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_validData, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = wrd.chello;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(wrd.cworld);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasDataString
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataString, () => {
        // Arrange
        let commandAliasData = wrd.chello + wrd.cworld;
        let commandAliasName = wrd.chello;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasNameString
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid string name.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameString, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = wrd.cBe;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasDataNumber
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataNumber, () => {
        // Arrange
        let commandAliasData = 123;
        let commandAliasName = wrd.cWorld;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasDataBoolean
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasDataBoolean, () => {
        // Arrange
        let commandAliasData = false;
        let commandAliasName = wrd.cWorld;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasNameNumber
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid integer alias.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameNumber, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = 546;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function searchCommandAlias_inValidCommandAliasNameBoolean
    * @description Tests the brokers.commandBroker.searchCommandAlias function, with an invalid boolean alias.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.csearchCommandAlias_inValidCommandAliasNameBoolean, () => {
        // Arrange
        let commandAliasData = obj_con.JsonObjectOfStrings_02;
        let commandAliasName = false;

        // Act
        let returnData = commandBroker.searchCommandAlias(commandAliasData, commandAliasName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getAllCommandAliasData
 * @description Tests the positive and negative test cases of the getAllCommandAliasData function.
 * @author Json Howard
 * @date 2023/04/15
 */
describe(tst_con.cgetAllCommandAliasData, () => {
    /**
    * @function getAllCommandAliasData_validData
    * @description Tests the brokers.commandBroker.getAllCommandAliasData function, with a valid data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetAllCommandAliasData_validData, () => {
        // Arrange
        let commandAliasDataStructure = obj_con.JsonObjectOfStrings_03;

        // Act
        let reutrnData = commandBroker.getAllCommandAliasData(commandAliasDataStructure);

        // Assert
        expect(reutrnData).toEqual([commandAliasDataStructure]);
    });

    /**
    * @function getAllCommandAliasData_inValidString
    * @description Tests the brokers.commandBroker.getAllCommandAliasData function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetAllCommandAliasData_inValidString, () => {
        // Arrange
        let commandAliasDataStructure = wrd.cWorld;

        // Act
        let reutrnData = commandBroker.getAllCommandAliasData(commandAliasDataStructure);

        // Assert
        expect(reutrnData).toBe(false);
    });

    /**
    * @function getAllCommandAliasData_inValidNumber
    * @description Tests the brokers.commandBroker.getAllCommandAliasData function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetAllCommandAliasData_inValidNumber, () => {
        // Arrange
        let commandAliasDataStructure = 123;

        // Act
        let reutrnData = commandBroker.getAllCommandAliasData(commandAliasDataStructure);

        // Assert
        expect(reutrnData).toBe(false);
    });

    /**
    * @function getAllCommandAliasData_inValidBoolean
    * @description Tests the brokers.commandBroker.getAllCommandAliasData function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetAllCommandAliasData_inValidBoolean, () => {
        // Arrange
        let commandAliasDataStructure = false;

        // Act
        let reutrnData = commandBroker.getAllCommandAliasData(commandAliasDataStructure);

        // Assert
        expect(reutrnData).toBe(false);
    });
});

/**
 * @function getCommandNamespaceDataObject
 * @description Tests the positive and negative test cases of the getCommandNamespaceDataObject function.
 * @author Json Howard
 * @date 2023/04/15
 */
describe(tst_con.cgetCommandNamespaceDataObject, () => {
    /**
    * @function getCommandNamespaceDataObject_validData
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with a valid data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_validData, () => {
        // Arrange
        let commandAliasDataStructure = obj_con.JsonObjectOfStrings_03;
        let namespaceToFind = wrd.cAliases;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toEqual(wrd.cworld);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureString
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid string data structure.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureString, () => {
        // Arrange
        let commandAliasDataStructure = wrd.cHello + wrd.cWorld;
        let namespaceToFind = wrd.cWorld;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidNamespaceToFindString
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid string namespaceToFind.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindString, () => {
        // Arrange
        let commandAliasDataStructure = obj_con.JsonObjectOfStrings_03;
        let namespaceToFind = wrd.cconstants;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureNumber
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid number data structure.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureNumber, () => {
        // Arrange
        let commandAliasDataStructure = 123;
        let namespaceToFind = wrd.cHello;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid boolean data structure.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidCommandAliasDataStructureBoolean, () => {
        // Arrange
        let commandAliasDataStructure = false;
        let namespaceToFind = wrd.cconstants;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidNamespaceToFindNumber
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid number namespaceToFind.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindNumber, () => {
        // Arrange
        let commandAliasDataStructure = obj_con.JsonObjectOfStrings_03;
        let namespaceToFind = 123;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getCommandNamespaceDataObject_inValidNamespaceToFindBoolean
    * @description Tests the brokers.commandBroker.getCommandNamespaceDataObject function, with an invalid boolean namespaceToFind.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandNamespaceDataObject_inValidNamespaceToFindBoolean, () => {
        // Arrange
        let commandAliasDataStructure = obj_con.JsonObjectOfStrings_03;
        let namespaceToFind = false;

        // Act
        let returnData = commandBroker.getCommandNamespaceDataObject(commandAliasDataStructure, namespaceToFind);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function getCommandArgs
 * @description Tests the positive and negative test cases of the getCommandArgs function.
 * @author Json Howard
 * @date 2023/04/15
 */
describe(tst_con.cgetCommandArgs, () => {
    /**
    * @function getCommandArgs_validData
    * @description Tests the brokers.commandBroker.getCommandArgs function, with a valid data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandArgs_validData, () => {
        // Arrange
        let commandString = wrd.cname + wrd.cSpace + wrd.capplication + wrd.cSpace + wrd.cversion + wrd.cSpace + wrd.cabout;
        let commandDelimiter = wrd.cSpace;

        // Act
        let returnData = commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual([wrd.cname, wrd.capplication, wrd.cversion, wrd.cabout]);
    });

    /**
    * @function getCommandArgs_inValidString
    * @description Tests the brokers.commandBroker.getCommandArgs function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandArgs_inValidString, () => {
        // Arrange
        let commandString = wrd.cHello + wrd.cWorld;
        let commandDelimiter = wrd.cSpace;

        // Act
        let returnData = commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getCommandArgs_inValidDelimiterString
    * @description Tests the brokers.commandBroker.getCommandArgs function, with an invalid string delimiter.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandArgs_inValidDelimiterString, () => {
        // Arrange
        let commandString = wrd.cname + wrd.cSpace + wrd.capplication + wrd.cSpace + wrd.cversion + wrd.cSpace + wrd.cabout;
        let commandDelimiter = bas.cAndPersand;

        // Act
        let returnData = commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getCommandArgs_inValidNumber
    * @description Tests the brokers.commandBroker.getCommandArgs function, with an invalid integer delimiter.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandArgs_inValidNumber, () => {
        // Arrange
        let commandString = 546;
        let commandDelimiter = wrd.cSpace;

        // Act
        let returnData = commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getCommandArgs_inValidBoolean
    * @description Tests the brokers.commandBroker.getCommandArgs function, with an invalid boolean delimiter.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cgetCommandArgs_inValidBoolean, () => {
        // Arrange
        let commandString = false;
        let commandDelimiter = wrd.cSpace;

        // Act
        let returnData = commandBroker.getCommandArgs(commandString, commandDelimiter);

        // Assert
        expect(returnData).toEqual(false);
    });
});

/**
 * @function executeCommand
 * @description Tests the positive and negative test cases of the executeCommand function.
 * @author Json Howard
 * @date 2023/04/15
 */
describe(tst_con.cexecuteCommand, () => {
    /**
    * @function executeCommand_validData
    * @description Tests the brokers.commandBroker.executeCommand function, with a valid data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_validData, () => {
        // Arrange
        let commandString = wrd.cname + wrd.cSpace + wrd.capplication + wrd.cSpace + wrd.cversion + wrd.cSpace + wrd.cabout;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });

    /**
    * @function executeCommand_inValidString
    * @description Tests the brokers.commandBroker.executeCommand function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_inValidString, () => {
        // Arrange
        let commandString = wrd.cHello + wrd.cWorld;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });

    /**
    * @function executeCommand_inValidNumber
    * @description Tests the brokers.commandBroker.executeCommand function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_inValidNumber, () => {
        // Arrange
        let commandString = 546;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });

    /**
    * @function executeCommand_inValidBoolean
    * @description Tests the brokers.commandBroker.executeCommand function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_inValidBoolean, () => {
        // Arrange
        let commandString = false;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });

    /**
    * @function executeCommand_inValidUndefined
    * @description Tests the brokers.commandBroker.executeCommand function, with an invalid undefined data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_inValidUndefined, () => {
        // Arrange
        let commandString = undefined;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });

    /**
    * @function executeCommand_inValidNaN
    * @description Tests the brokers.commandBroker.executeCommand function, with an invalid NaN data.
    * @author Json Howard
    * @date 2023/04/15
    */
    test(tst_con.cexecuteCommand_inValidNaN, () => {
        // Arrange
        let commandString = NaN;

        // Act
        let returnData = commandBroker.executeCommand(commandString);

        // Assert
        expect(returnData).toEqual([true, false]);
    });
});
