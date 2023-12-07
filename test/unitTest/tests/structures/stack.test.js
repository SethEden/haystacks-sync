'use strict';
/* eslint-disable no-undef */
/**
 * @file stack.test.js
 * @module constant.test
 * @description Unit tests for the stack.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/stack
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/09/05
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import stack from '../../../../src/structures/stack.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { wrd, num } = hayConst;

/**
 * @function initStack
 * @description Tests the positive and negative test cases of the initStack
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cinitStack, () => {
    /**
     * @function initStack_validDataString
     * @description Tests the structures.stack.initStack function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initStack_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.initStack function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initStack_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.initStack function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initStack_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.initStack function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initStack_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.initStack function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initStack_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.initStack function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitStack_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.initStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function clearStack
 * @description Tests the positive and negative test cases of the clearStack
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cclearStack, () => {
    /**
     * @function clearStack_validDataString
     * @description Tests the structures.stack.clearStack function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearStack_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.clearStack function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearStack_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.clearStack function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearStack_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.clearStack function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearStack_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.clearStack function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function clearStack_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.clearStack function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cclearStack_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.clearStack(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function push
 * @description Tests the positive and negative test cases of the push
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cpush, () => {
    /**
     * @function push_validDataString
     * @description Tests the structures.stack.push function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = [num.c123, num.c12]

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.push function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";
        let value = [num.c123, num.c12]

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidDataValueString
     * @description Tests the structures.stack.push function, with a invalid value string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidDataValueString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = wrd.cHello;

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.push function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;
        let value = [num.c123, num.c12]

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.push function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;
        let value = [num.c123, num.c12]

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidValueInteger
     * @description Tests the structures.stack.push function, with a invalid value integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidValueInteger, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = num.c123;

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidValueBoolean
     * @description Tests the structures.stack.push function, with a invalid value boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidValueBoolean, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = false;

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.push function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;
        let value = [num.c123, num.c12];

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.push function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;
        let value = [num.c123, num.c12];

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidValueUndefined
     * @description Tests the structures.stack.push function, with a invalid value undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidValueUndefined, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = undefined;

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function push_inValidValueNaN
     * @description Tests the structures.stack.push function, with a invalid value NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpush_inValidValueNaN, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = NaN;

        // Act
        let returnData = stack.push(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function pop
 * @description Tests the positive and negative test cases of the pop
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cpop, () => {
    /**
     * @function pop_validDataString
     * @description Tests the structures.stack.pop function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function pop_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.pop function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function pop_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.pop function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function pop_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.pop function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function pop_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.pop function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function pop_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.pop function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cpop_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.pop(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function isEmpty
 * @description Tests the positive and negative test cases of the isEmpty
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cisEmpty, () => {
    /**
     * @function isEmpty_validDataString
     * @description Tests the structures.stack.isEmpty function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.isEmpty function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.isEmpty function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.isEmpty function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.isEmpty function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.isEmpty function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.isEmpty(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function length
 * @description Tests the positive and negative test cases of the length
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.clength, () => {
    /**
     * @function length_validDataString
     * @description Tests the structures.stack.length function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function length_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.length function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function length_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.length function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function length_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.length function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function length_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.length function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function length_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.length function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.clength_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.length(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function contains
 * @description Tests the positive and negative test cases of the contains
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.ccontains, () => {
    /**
     * @function contains_validDataString
     * @description Tests the structures.stack.contains function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.contains function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidDataValueString
     * @description Tests the structures.stack.contains function, with a invalid value string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidDataValueString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = wrd.cHello;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.contains function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.contains function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidValueInteger
     * @description Tests the structures.stack.contains function, with a invalid value integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidValueInteger, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = num.c123;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidValueBoolean
     * @description Tests the structures.stack.contains function, with a invalid value boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidValueBoolean, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = false;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.contains function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.contains function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;
        let value = data_con.JsonObjectOfStrings_02;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidValueUndefined
     * @description Tests the structures.stack.contains function, with a invalid value undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidValueUndefined, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = undefined;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function contains_inValidValueNaN
     * @description Tests the structures.stack.contains function, with a invalid value NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.ccontains_inValidValueNaN, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;
        let value = NaN;

        // Act
        let returnData = stack.contains(stackNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function print
 * @description Tests the positive and negative test cases of the print
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cprint, () => {
    /**
     * @function print_validDataString
     * @description Tests the structures.stack.print function, with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_validDataString, () => {
        // Arrange
        let stackNameSpace = wrd.cHello;

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function print_inValidDataStackNameSpaceString
     * @description Tests the structures.stack.print function, with a invalid stackNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_inValidDataStackNameSpaceString, () => {
        // Arrange
        let stackNameSpace = "";

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function print_inValidStackNameSpaceInteger
     * @description Tests the structures.stack.print function, with a invalid stackNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_inValidStackNameSpaceInteger, () => {
        // Arrange
        let stackNameSpace = num.c123;

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function print_inValidStackNameSpaceBoolean
     * @description Tests the structures.stack.print function, with a invalid stackNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_inValidStackNameSpaceBoolean, () => {
        // Arrange
        let stackNameSpace = false;

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function print_inValidStackNameSpaceUndefined
     * @description Tests the structures.stack.print function, with a invalid stackNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_inValidStackNameSpaceUndefined, () => {
        // Arrange
        let stackNameSpace = undefined;

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function print_inValidStackNameSpaceNaN
     * @description Tests the structures.stack.print function, with a invalid stackNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cprint_inValidStackNameSpaceNaN, () => {
        // Arrange
        let stackNameSpace = NaN;

        // Act
        let returnData = stack.print(stackNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
