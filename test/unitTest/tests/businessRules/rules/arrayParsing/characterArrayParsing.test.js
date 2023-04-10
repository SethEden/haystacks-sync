'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file characterArrayParsing.test.js
 * @module characterArrayParsing.test
 * @description Unit tests for the characterArrayParsing.js
 * @requires module:characterArrayParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import characterArrayParsing from "../../../../../../src/businessRules/rules/arrayParsing/characterArrayParsing.js";
import * as tst_con from '../../../constants/test.constants.js';

// External imports
// import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';

// const {bas, msg, sys, wrd} = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function replaceCharacterWithCharacter
 * @description Tests the positive and negative test cases of the replaceCharacterWithCharacter function.
 * @author Json Howard
 * @date 2023/04/06
 */
describe(tst_con.creplaceCharacterWithCharacter, () => {
    /**
    * @function replaceCharacterWithCharacter_validDataInputDataString
    * @description Tests the business rules function replaceCharacterWithCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/06
    */
    test(tst_con.creplaceCharacterWithCharacter_validDataInputDataString, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = ["Hello", "World"];

        // Act 
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("WorldWorld");
    });

    /**
    * @function replaceCharacterWithCharacter_validDataInputMetaDataString
    * @description Tests the business rules function replaceCharacterWithCharacter with a valid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterWithCharacter_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = "Hello World";
        let inputMetaData = "Hh";

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        //Assert
        expect(returnData).toBe("hello World");
    })

    /**
    * @function replaceCharacterWithCharacter_inValidDataStorageInputMetaDataInteger
    * @description Tests the business rules function replaceCharacterWithCharacter with a invalid undefined inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.replaceCharacterWithCharacter_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = [undefined, undefined];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HelloWorld");
    })

    /**
    * @function replaceCharacterWithCharacter_inValidInputMetaDataNaN
    * @description Tests the business rules function replaceCharacterWithCharacter with a invalid NaN inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.replaceCharacterWithCharacter_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = [NaN, NaN];

        // Act
        let returnData = characterArrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HelloWorld");
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
    * @function doesArrayContainCharacter_validDataInputDataString
    * @description Tests the business rules function doesArrayContainCharacter with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataString, () => {
        // Arrange
        let inputData = "Hello";
        let inputMetaData = ["Hello World", "World"];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputDataInteger
    * @description Tests the business rules function doesArrayContainCharacter with a valid integer input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = ["Hello 123", "Hello"];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataString
    * @description Tests the business rules function doesArrayContainCharacter with a valid string inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = "H"
        let inputMetaData = "Hello World";

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_validDataInputMetaDataInteger
    * @description Tests the business rules function doesArrayContainCharacter with a valid integer inputMetaData.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_validDataInputMetaDataInteger, () => {
        // Arrange
        let inputData = 2;
        let inputMetaData = "23456";

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputDataUndefined
    * @description Tests the business rules function doesArrayContainCharacter with a invalid undefined input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = ["Hello", "World"];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function doesArrayContainCharacter_inValidInputDataNaN
    * @description Tests the business rules function doesArrayContainCharacter with a invalid NaN input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cdoesArrayContainCharacter_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = ["Hello", "World"];

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
   * @function doesArrayContainCharacter_inValidInputMetaDataUndefined
   * @description Tests the business rules function doesArrayContainCharacter with a invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/04/09
   */
    test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "Hello";
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.doesArrayContainCharacter(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function doesArrayContainCharacter_inValidInputMetaDataNaN
     * @description Tests the business rules function doesArrayContainCharacter with a invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cdoesArrayContainCharacter_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "Hello";
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
    * @description Tests the business rules function removeCharacterFromArray with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataString, () => {
        // Arrange
        let inputData = "Hello";
        let inputMetaData = ["HelloWorld", "World"];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(["World", "World"]);
    })

    /**
    * @function removeCharacterFromArray_validDataInputDataInteger
    * @description Tests the business rules function removeCharacterFromArray with a valid integer input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataInteger, () => {
        // Arrange
        let inputData = 123;
        let inputMetaData = ["Hello123", "World"];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(["Hello123", "World"]);
    })

    /**
    * @function removeCharacterFromArray_validDataInputDataBoolean
    * @description Tests the business rules function removeCharacterFromArray with a valid boolean input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_validDataInputDataBoolean, () => {
        // Arrange
        let inputData = true;
        let inputMetaData = ["Hello true", "World"];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toEqual(["Hello true", "World"]);
    })

    /**
    * @function removeCharacterFromArray_inValidInputDataUndefined
    * @description Tests the business rules function removeCharacterFromArray with a invalid undefined input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.cremoveCharacterFromArray_inValidInputDataUndefined, () => {
        // Arrange
        let inputData = undefined;
        let inputMetaData = ["HelloWorld", "Hello"];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputDataNaN
     * @description Tests the business rules function removeCharacterFromArray with a invalid NaN input.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputDataNaN, () => {
        // Arrange
        let inputData = NaN;
        let inputMetaData = ["HelloWorld", "Hello"];

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputMetaDataUndefined
     * @description Tests the business rules function removeCharacterFromArray with a invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "hello";
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.removeCharacterFromArray(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe(false);
    })

    /**
     * @function removeCharacterFromArray_inValidInputMetaDataNaN
     * @description Tests the business rules function removeCharacterFromArray with a invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.cremoveCharacterFromArray_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "hello";
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
    * @description Tests the business rules function replaceCharacterAtIndex with a valid string input.
    * @author Json Howard
    * @date 2023/04/09
    */
    test(tst_con.creplaceCharacterAtIndex_validDataInputDataString, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = [2, "Hello"];

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HeHelloloWorld");
    })

    /**
     * @function replaceCharacterAtIndex_validDataInputMetaDataString
     * @description Tests the business rules function replaceCharacterAtIndex with a valid string inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.creplaceCharacterAtIndex_validDataInputMetaDataString, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = "World";

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HelloWorld");
    })

    /**
     * @function replaceCharacterAtIndex_inValidInputMetaDataUndefined
     * @description Tests the business rules function replaceCharacterAtIndex with a invalid undefiend inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
    test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = undefined;

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HelloWorld");
    })
    
    /**
     * @function replaceCharacterAtIndex_inValidInputMetaDataNaN
     * @description Tests the business rules function replaceCharacterAtIndex with a invalid undefiend inputMetaData.
     * @author Json Howard
     * @date 2023/04/09
     */
     test(tst_con.creplaceCharacterAtIndex_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "HelloWorld";
        let inputMetaData = NaN;

        // Act
        let returnData = characterArrayParsing.replaceCharacterAtIndex(inputData, inputMetaData);

        // Assert
        expect(returnData).toBe("HelloWorld");
    })
})