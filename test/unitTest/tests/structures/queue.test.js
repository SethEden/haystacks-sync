'use strict';
/* eslint-disable no-undef */
/**
 * @file queue.test.js
 * @module constant.test
 * @description Unit tests for the queue.js
 * @requires module:rulesLibrary
 * @requires module:constant
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/queue
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/09/05
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import queue from '../../../../src/structures/queue.js';
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
 * @function initQueue
 * @description Tests the positive and negative test cases of the initQueue
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cinitQueue, () => {
    /**
     * @function initQueue_validDataString
     * @description Tests the structures.queue function initQueue with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initQueue_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function initQueue with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initQueue_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function initQueue with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initQueue_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function initQueue with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initQueue_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function initQueue with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function initQueue_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function initQueue with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cinitQueue_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.initQueue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function dequeue
 * @description Tests the positive and negative test cases of the dequeue
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cdequeue, () => {
    /**
     * @function dequeue_validDataString
     * @description Tests the structures.queue function dequeue with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function dequeue_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function dequeue with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function dequeue_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function dequeue with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function dequeue_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function dequeue with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function dequeue_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function dequeue with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function dequeue_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function dequeue with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cdequeue_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.dequeue(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function enqueue
 * @description Tests the positive and negative test cases of the enqueue
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cenqueue, () => {
    /**
     * @function enqueue_validDataString
     * @description Tests the structures.queue function enqueue with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function enqueue with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidDataValueString
     * @description Tests the structures.queue function enqueue with a invalid value string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidDataValueString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = wrd.cHello;

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function enqueue with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function enqueue with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidValueInteger
     * @description Tests the structures.queue function enqueue with a invalid value integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidValueInteger, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = num.c123;

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidValueBoolean
     * @description Tests the structures.queue function enqueue with a invalid value boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidValueBoolean, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = false;

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function enqueue with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function enqueue with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidValueUndefined
     * @description Tests the structures.queue function enqueue with a invalid value undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidValueUndefined, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = undefined;

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueue_inValidValueNaN
     * @description Tests the structures.queue function enqueue with a invalid value NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueue_inValidValueNaN, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = NaN;

        // Act
        let returnData = queue.enqueue(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function enqueueFront
 * @description Tests the positive and negative test cases of the enqueueFront
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cenqueueFront, () => {
    /**
     * @function enqueueFront_validDataString
     * @description Tests the structures.queue function enqueueFront with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function enqueueFront with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidDataValueString
     * @description Tests the structures.queue function enqueueFront with a invalid value string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidDataValueString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = wrd.cHello;

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function enqueueFront with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function enqueueFront with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidValueInteger
     * @description Tests the structures.queue function enqueueFront with a invalid value integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidValueInteger, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = num.c123;

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidValueBoolean
     * @description Tests the structures.queue function enqueueFront with a invalid value boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidValueBoolean, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = false;

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function enqueueFront with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function enqueueFront with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;
        let value = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidValueUndefined
     * @description Tests the structures.queue function enqueueFront with a invalid value undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidValueUndefined, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = undefined;

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function enqueueFront_inValidValueNaN
     * @description Tests the structures.queue function enqueueFront with a invalid NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cenqueueFront_inValidValueNaN, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;
        let value = NaN;

        // Act
        let returnData = queue.enqueueFront(queueNameSpace, value);

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
     * @description Tests the structures.queue function isEmpty with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function isEmpty with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function isEmpty with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function isEmpty with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function isEmpty with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function isEmpty_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function isEmpty with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cisEmpty_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.isEmpty(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function queueFront
 * @description Tests the positive and negative test cases of the queueFront
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cqueueFront, () => {
    /**
     * @function queueFront_validDataString
     * @description Tests the structures.queue function queueFront with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueFront_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function queueFront with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueFront_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function queueFront with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueFront_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function queueFront with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueFront_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function queueFront with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueFront_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function queueFront with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueFront_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.queueFront(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function queueSize
 * @description Tests the positive and negative test cases of the queueSize
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cqueueSize, () => {
    /**
     * @function queueSize_validDataString
     * @description Tests the structures.queue function queueSize with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueSize_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function queueSize with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueSize_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function queueSize with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueSize_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function queueSize with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueSize_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function queueSize with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueSize_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function queueSize with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueSize_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.queueSize(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function queueContents
 * @description Tests the positive and negative test cases of the queueContents
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cqueueContents, () => {
    /**
     * @function queueContents_validDataString
     * @description Tests the structures.queue function queueContents with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueContents_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function queueContents with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueContents_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function queueContents with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueContents_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function queueContents with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueContents_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function queueContents with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queueContents_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function queueContents with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueueContents_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.queueContents(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function queuePrint
 * @description Tests the positive and negative test cases of the queuePrint
 * @author Json Howard
 * @date 2023/09/05
*/
describe(tst_con.cqueuePrint, () => {
    /**
     * @function queuePrint_validDataString
     * @description Tests the structures.queue function queuePrint with a valid input.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_validDataString, () => {
        // Arrange
        let queueNameSpace = wrd.cHello;

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queuePrint_inValidDataQueueNameSpaceString
     * @description Tests the structures.queue function queuePrint with a invalid queueNameSpace string.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_inValidDataQueueNameSpaceString, () => {
        // Arrange
        let queueNameSpace = "";

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queuePrint_inValidQueueNameSpaceInteger
     * @description Tests the structures.queue function queuePrint with a invalid queueNameSpace integer.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_inValidQueueNameSpaceInteger, () => {
        // Arrange
        let queueNameSpace = num.c123;

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queuePrint_inValidQueueNameSpaceBoolean
     * @description Tests the structures.queue function queuePrint with a invalid queueNameSpace boolean.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_inValidQueueNameSpaceBoolean, () => {
        // Arrange
        let queueNameSpace = false;

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queuePrint_inValidQueueNameSpaceUndefined
     * @description Tests the structures.queue function queuePrint with a invalid queueNameSpace undefined.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_inValidQueueNameSpaceUndefined, () => {
        // Arrange
        let queueNameSpace = undefined;

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
    
    /**
     * @function queuePrint_inValidQueueNameSpaceNaN
     * @description Tests the structures.queue function queuePrint with a invalid queueNameSpace NaN.
     * @author Json Howard
     * @date 2023/09/05
     */
    test(tst_con.cqueuePrint_inValidQueueNameSpaceNaN, () => {
        // Arrange
        let queueNameSpace = NaN;

        // Act
        let returnData = queue.queuePrint(queueNameSpace);

        // Assert
        expect(returnData).toBeTruthy();
    });
});
