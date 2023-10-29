'use strict';
/* eslint-disable no-undef */
/**
 * @file characterArrayParsing.test.js
 * @module characterArrayParsing.test
 * @description Unit tests for the characterArrayParsing.js
 * @requires module:characterArrayParsing
 * @requires module:testData/dataBroker
 * @requires module:testData/characterArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import characterArrayParsing from '../../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as obj_con from '../../../../testData/businessRules/rules/arrayParsing/characterArrayParsing.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const {bas, wrd, num} = hayConst;

/**
 * @function replaceCharacterWithCharacter
 * @description Tests the positive and negative test cases of the replaceCharacterWithCharacter function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.creplaceCharacterWithCharacter, () => {
    /**
    * @function replaceCharacterWithCharacter_validDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/06
    */
    test(tst_con.creplaceCharacterWithCharacter_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act 
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cWorld + wrd.cWorld);
    });

    /**
    * @function replaceCharacterWithCharacter_validDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/06
    */
    test(tst_con.creplaceCharacterWithCharacter_validDataInputDataString, () => {
        // Arrange
        let inputData = data_con.stringRandomText;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act 
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(data_con.stringRandomText);
    });

    /**
    * @function replaceCharacterWithCharacter_validDataInputMetaDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a valid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cSpace + wrd.cWorld;
        let inputMetaData = data_con.stringRandomText;

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        //Assert
        expect(returnData).toBe('wrd.cHello + wrd.cSpace + wrd.cWorld');
    })

    /**
    * @function replaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a invalid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })

    /**
    * @function replaceCharacterWithCharacter_inValidDataStorageInputMetaDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a invalid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_inValidDataStorageInputMetaDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })

    /**
    * @function replaceCharacterWithCharacter_inValidInputMetaDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = [undefined, undefined];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })

    /**
    * @function replaceCharacterWithCharacter_inValidInputMetaDataNaN
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterWithCharacter with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = [NaN, NaN];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })
});

/**
 * @function doesArrayContainCharacter
 * @description Tests the positive and negative test cases of the doesArrayContainCharacter function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cdoesArrayContainCharacter, () => {
    /**
    * @function doesArrayContainCharacter_validDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = [wrd.cHello + wrd.cSpace + wrd.cWorld, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataString, () => {
        // Arrange
        let inputData = data_con.stringRandomText;
        let inputMetaData = [wrd.cHello + wrd.cSpace + wrd.cWorld, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputDataInteger
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid integer input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [wrd.cHello + wrd.cSpace + num.c123, wrd.cHello];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid boolean input.
    * @author Json Howard
    * @date 2023/04/11
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataBoolean, () => {
        // Arrabge
        let inputData = false;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })    

    /**
    * @function doesArrayContainCharacter_validDataInputDataObject
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid object input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataObject, () => {
        // Arrange
        let inputData = {[wrd.cHello] : wrd.cWorld};
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = wrd.cHello + wrd.cSpace + wrd.cWorld;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataInteger
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataInteger, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = 23456;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataBoolean, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = false;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataObject
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a valid object inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataObject, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = {[wrd.cHello] : wrd.cWorld};

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a invalid undefined input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputDataNaN
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a invalid NaN input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputMetaDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a invalid undefined input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputMetaDataNaN
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function doesArrayContainCharacter with a invalid NaN input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = [wrd.cHello, wrd.cWorld];
        let inputMetaData = NaN;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function removeCharacterFromArray
 * @description Tests the positive and negative test cases of the removeCharacterFromArray function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.cremoveCharacterFromArray, () => {
    /**
    * @function removeCharacterFromArray_validDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cWorld]);
    })

    /**
     * @function removeCharacterFromArray_validDataInputDataInteger
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid integer inputData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataInteger, () => {
        // Arrange
        let inputData = 23456;
        let inputMetaData = [23456, 78910];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(78910);
    })

    /**
     * @function removeCharacterFromArray_validDataInputDataBoolean
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid boolean inputData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [false, true];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(true);
    })

    /**
     * @function removeCharacterFromArray_validDataInputDataObject
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid object inputData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataObject, () => {
        // Arrange
        let inputData = [1,2,3,4];
        let inputMetaData = [wrd.cHello + wrd.cWorld, wrd.cHello];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBeTruthy();
    })

    /**
    * @function removeCharacterFromArray_validDataInputMetaDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/11
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello;
        let inputMetaData = [wrd.cHello, wrd.cWorld];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([wrd.cWorld]);
    })
    
    /**
    * @function removeCharacterFromArray_validDataInputMetaDataInteger
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/11
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputMetaDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = [123, 456];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([456]);
    })

    /**
    * @function removeCharacterFromArray_validDataInputMetaDataBoolean
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid boolean inputMetaData.
    * @author Json Howard
    * @date 2023/04/11
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputMetaDataBoolean, () => {
        // Arrange
        let inputData = true;
        let inputMetaData = [true, false];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([false]);
    })

    /**
    * @function removeCharacterFromArray_validDataInputMetaDataObject
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a valid object inputMetaData.
    * @author Json Howard
    * @date 2023/04/11
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputMetaDataObject, () => {
        // Arrange
        let inputData = obj_con.JsonObjectOfStrings_01;
        let inputMetaData = [obj_con.JsonObjectOfStrings_01, {'hello': '345', 'world': 'haystacks'}];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual([{'hello': '345', 'world': 'haystacks'}]);
    })

    /**
    * @function removeCharacterFromArray_inValidInputDataUndefined
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid undefined input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = [wrd.cHello + wrd.cWorld, wrd.cHello];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputDataNaN
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid NaN input.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = [wrd.cHello + wrd.cWorld, wrd.cHello];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputMetaDataUndefined
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.chello;
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputMetaDataNaN
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function removeCharacterFromArray with a invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.chello;
        let inputMetaData = NaN;

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })
})

/**
 * @function replaceCharacterAtIndex
 * @description Tests the positive and negative test cases of the replaceCharacterAtIndex function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.creplaceCharacterAtIndex, () => {
    /**
    * @function replaceCharacterAtIndex_validDataInputDataString
    * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterAtIndex with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterAtIndex_validDataInputDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = [2, wrd.cHello];

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(bas.cH + bas.ce + wrd.cHello + bas.cl + bas.co + wrd.cWorld);
    })

    /**
     * @function replaceCharacterAtIndex_validDataInputMetaDataString
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterAtIndex with a valid string inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.creplaceCharacterAtIndex_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = wrd.cWorld;

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })

    /**
     * @function replaceCharacterAtIndex_inValidInputMetaDataUndefined
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterAtIndex with a invalid undefiend inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })
    
    /**
     * @function replaceCharacterAtIndex_inValidInputMetaDataNaN
     * @description Tests the businessRules.rules.arrayParsing.characterArrayParsing function replaceCharacterAtIndex with a invalid undefiend inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
     test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = wrd.cHello + wrd.cWorld;
        let inputMetaData = NaN;

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(wrd.cHello + wrd.cWorld);
    })
})
