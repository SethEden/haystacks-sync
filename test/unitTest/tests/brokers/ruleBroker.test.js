'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file ruleBroker.test.js
 * @module ruleBroker.test
 * @description Unit tests for the ruleBroker.js
 * @requires module:ruleBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import ruleBroker from "../../../../src/brokers/ruleBroker.js";
import D from "../../../../src/structures/data.js";
import * as tst_con from '../constants/test.constants.js';
import * as obj_con from '../../testData/brokers/ruleBroker.js';

// External imports
import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

const { bas, msg, sys, wrd, num, biz } = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function bootStrapBusinessRules
 * @description Tests the positive and negative test cases of the bootStrapBusinessRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cbootStrapBusinessRules, () => {
    /**
    * @function bootStrapBusinessRules_validData
    * @description Tests the business rules function bootStrapBusinessRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_validData, () => {
        // Act
        ruleBroker.bootStrapBusinessRules();

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidString
    * @description Tests the business rules function bootStrapBusinessRules with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidString, () => {
        // Arrange
        let input = wrd.cWorld;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidNumber
    * @description Tests the business rules function bootStrapBusinessRules with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });

    /**
    * @function bootStrapBusinessRules_inValidBoolean
    * @description Tests the business rules function bootStrapBusinessRules with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cbootStrapBusinessRules_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        ruleBroker.bootStrapBusinessRules(input);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
});

/**
 * @function addClientRules
 * @description Tests the positive and negative test cases of the addClientRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddClientRules, () => {
    /**
    * @function addClientRules_validData
    * @description Tests the business rules function addClientRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_validData, () => {
        // Arrange
        let clientRules = obj_con.JsonObjectArrayOfStrings_01;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidString
    * @description Tests the business rules function addClientRules with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidString, () => {
        // Arrange
        let clientRules = wrd.cHello + wrd.cWorld;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidNumber
    * @description Tests the business rules function addClientRules with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidNumber, () => {
        // Arrange
        let clientRules = 123;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
    
    /**
    * @function addClientRules_inValidBoolean
    * @description Tests the business rules function addClientRules with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddClientRules_inValidBoolean, () => {
        // Arrange
        let clientRules = false;

        // Act
        ruleBroker.addClientRules(clientRules);

        // Assert
        expect(D[sys.cbusinessRules]).toBeTruthy();
    });
});

/**
 * @function processRules
 * @description Tests the positive and negative test cases of the processRules function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cprocessRules, () => {
    /**
    * @function processRules_validData
    * @description Tests the business rules function processRules with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_validData, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(wrd.chello);
    });
    
    /**
    * @function processRules_inValidInputsUndefined
    * @description Tests the business rules function processRules with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsUndefined, () => {
        // Arrange
        let inputs = undefined;
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidInputsNaN
    * @description Tests the business rules function processRules with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsNaN, () => {
        // Arrange
        let inputs = NaN;
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteUndefined
    * @description Tests the business rules function processRules with a invalid undefined rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteUndefined, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = undefined;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteNaN
    * @description Tests the business rules function processRules with a invalid NaN rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteNaN, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = NaN;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidInputsInteger
    * @description Tests the business rules function processRules with a invalid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsInteger, () => {
        // Arrange
        let inputs = 1234;
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidInputsBoolean
    * @description Tests the business rules function processRules with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidInputsBoolean, () => {
        // Arrange
        let inputs = false;
        let rulesToExecute = [biz.cconvertStringToLowerCase];

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(false);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteInteger
    * @description Tests the business rules function processRules with a invalid integer rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteInteger, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = 123;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
    
    /**
    * @function processRules_inValidRulesToExecuteBoolean
    * @description Tests the business rules function processRules with a invalid boolean rulesToExecute.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cprocessRules_inValidRulesToExecuteBoolean, () => {
        // Arrange
        let inputs = [wrd.cHello, wrd.cWorld];
        let rulesToExecute = false;

        // Act
        let returnData = ruleBroker.processRules(inputs, rulesToExecute);

        // Assert
        expect(returnData).toBe(undefined);
    });
});