'use strict';
import ruleBroker from '../../../../../src/brokers/ruleBroker.js';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
/* eslint-disable no-undef */
/**
 * @file system.test.js
 * @module constant.test
 * @description Unit tests for the system.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/system
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import system from '../../../../../src/commandsBlob/commands/system.js';
import D from '../../../../../src/structures/data.js';
import chiefWorkflow from '../../../../../bin/controllers/chiefWorkflow.js';
import * as tst_con from '../../constants/test.constants.js';
import { basePath } from '../../utilities/utilities.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num, sys, bas, gen } = hayConst;

/**
 * @function echoCommand
 * @description Tests the positive and negative test cases of the echoCommand
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cechoCommand, () => {
    /**
     * @function echoCommand_validDataString
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function echoCommand_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.echoCommand function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cechoCommand_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = system.echoCommand(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function exit
 * @description Tests the positive and negative test cases of the exit
 * @author Json Howard
 * @date 2023/08/22
 * @note inputData is not used for this function
*/
describe(tst_con.cexit, () => {
    /**
     * @function exit_validDataString
     * @description Tests the commandsBlob.commands.system.exit function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function exit_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.exit function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cexit_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = system.exit(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function version
 * @description Tests the positive and negative test cases of the version
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cversion, () => {
    /**
     * @function version_validDataString
     * @description Tests the commandsBlob.commands.system.version function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.version function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.version function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.version function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.version function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.version function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.version function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.version function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.version function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.version function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function version_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.version function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cversion_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = system.version(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function about
 * @description Tests the positive and negative test cases of the about
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cabout, () => {
    /**
     * @function about_validDataString
     * @description Tests the commandsBlob.commands.system.about function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.about function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.about function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.about function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.about function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.about function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.about function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.about function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.about function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.about function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function about_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.about function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cabout_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = system.about(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function name
 * @description Tests the positive and negative test cases of the name
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cname, () => {
    /**
     * @function name_validDataString
     * @description Tests the commandsBlob.commands.system.name function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.name function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.name function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.name function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.name function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.name function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.name function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.name function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.name function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.name function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function name_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.name function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cname_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = system.name(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function clearScreen
 * @description Tests the positive test case of the clearScreen command.
 * @author Seth Hollingsead
 * @date 2023/09/19
 * @NOTE Unsure how to test this?!
 * @note inputData and inputMetaData are not used for this function.
 */
describe(tst_con.cclearScreen, () => {
    /**
     * @function clearScreen_validDataString
     * @description Tests the commandsBlob.commands.system.clearScreen function, with a valid input.
     * @author Seth Hollingsead
     * @date 2023/09/19
     * @NOTE Unsure how to test this?!
     */
    test(tst_con.cclearScreen_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = system.clearScreen(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function help
 * @description Tests the positive and negative test cases of the help.
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.chelp, () => {
    /**
     * @function help_validDataString
     * @description Tests the commandsBlob.commands.system.help function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.help function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.help function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.help function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.help function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function help_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.help function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.chelp_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;
        D[sys.cCommandsAliases] = {};

        // Act
        let returnData = system.help(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function workflowHelp
 * @description Tests the positive and negative test cases of the workflowHelp
 * @author Json Howard
 * @date 2023/08/22
*/
describe(tst_con.cworkflowHelp, () => {
    /**
     * @function workflowHelp_validDataString
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a valid input.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_validDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid input string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cString;
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidDataInputMetaDataString
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid inputMetaData string.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = wrd.cHello;

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputDataInteger
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid input integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputDataInteger, () => {
        // Arrange
        let inputData = num.c123;
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputDataBoolean
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid input boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputMetaDataInteger
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid inputMetaData integer.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = num.c123;

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputMetaDataBoolean
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid inputMetaData boolean.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = false;

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputDataUndefined
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid input undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputDataNaN
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid input NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputMetaDataUndefined
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid inputMetaData undefined.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function workflowHelp_inValidInputMetaDataNaN
     * @description Tests the commandsBlob.commands.system.workflowHelp function, with a invalid inputMetaData NaN.
     * @author Json Howard
     * @date 2023/08/22
     */
    test(tst_con.cworkflowHelp_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = "";

        // Act
        let returnData = system.workflowHelp(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
