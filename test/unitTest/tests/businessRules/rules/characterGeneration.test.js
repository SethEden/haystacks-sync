'use strict';
/* eslint-disable no-undef */
/**
 * @file characterGeneration.test.js
 * @module characterGeneration.test
 * @description Unit tests for the characterGeneration.js
 * @requires module:characterGeneration
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import characterGeneration from '../../../../../src/businessRules/rules/characterGeneration';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';
const { bas, wrd, num } = hayConst;

/**
 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateMixedCaseLetterOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter, () => {
	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_validDataString, () => {
        // Arrange
        let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
        let inputMetaData = '';
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
            inputData,
            inputMetaData
        );

        // Assert
        expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputDataString, () => {
        // Arrange
        let inputData = data_con.stringRandomText;
        let inputMetaData = '';
        rulesLibrary.initRulesLibrary();

        // Act
        let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
            inputData,
            inputMetaData
        );

        // Assert
        expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateUpperCaseLetterOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter, () => {
	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateLowerCaseLetterOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter, () => {
	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetterOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter, () => {
	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter, () => {
  /**
   * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter, () => {
  /**
   * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateMixedCaseAlphaNumericCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateMixedCaseAlphaNumericCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter, () => {
	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphaNumericCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateUpperCaseAlphaNumericCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateUpperCaseAlphaNumericCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter, () => {
	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseAlphaNumericCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateLowerCaseAlphaNumericCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateLowerCaseAlphaNumericCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter, () => {
	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseAlphaNumericCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateNumericCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateNumericCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateNumericCharacter, () => {
	/**
	 * @function randomlyGenerateNumericCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateNumericCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumericCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumericCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumericCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateSpecialCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateSpecialCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateSpecialCharacter, () => {
	/**
	 * @function randomlyGenerateSpecialCharacter_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_validDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = wrd.chello + bas.cUnderscore + wrd.cWorld;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateSpecialCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateSpecialCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateSpecialCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateSpecialCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateNumberInRange
 * @description Tests the positive and negative test cases of the randomlyGenerateNumberInRange
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateNumberInRange, () => {
	/**
	 * @function randomlyGenerateNumberInRange_validDataStringTrueTrue
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with a valid inputMeta true, true.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_validDataStringTrueTrue, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = [num.c5, true, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // 3~5
	});

	/**
	 * @function randomlyGenerateNumberInRange_validDataStringTrueFalse
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with a valid inputMeta true, false.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_validDataStringTrueFalse, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = [num.c5, true, false];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // less than 5
	});

	/**
	 * @function randomlyGenerateNumberInRange_validDataStringFalseTrue
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with a valid inputMeta false, true.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_validDataStringFalseTrue, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = [num.c5, false, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // 3~5
	});

	/**
	 * @function randomlyGenerateNumberInRange_validDataStringFalseFalse
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with a valid inputMeta false, false.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_validDataStringFalseFalse, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = [num.c5, false, false];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // 3~5
	});

	/**
	 * @function randomlyGenerateNumberInRange_validDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_validDataInteger, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = [5, true, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // 3~5
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = [5, true, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // less than 3
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe(num.c0); // 3~5
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe("");
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputDataUndefined
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid undefined input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputDataUndefined, () => {
		// Arrange
		let inputData = undefined;
		let inputMetaData = [5, true, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputDataNaN
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid NaN input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputDataNaN, () => {
		// Arrange
		let inputData = NaN;
		let inputMetaData = [5, true, true];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputMetaDataUndefined
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid undefined inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputMetaDataUndefined, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = undefined;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function randomlyGenerateNumberInRange_inValidInputMetaDataNaN
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateNumberInRange function, with an invalid NaN inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateNumberInRange_inValidInputMetaDataNaN, () => {
		// Arrange
		let inputData = num.c3;
		let inputMetaData = NaN;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateNumberInRange(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});
});

/**
 * @function randomlyGenerateBooleanValue
 * @description Tests the positive and negative test cases of the randomlyGenerateBooleanValue
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateBooleanValue, () => {
	/**
	 * @function randomlyGenerateBooleanValue_validDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with a valid input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_validDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateBooleanValue_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateBooleanValue function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateBooleanValue_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateBooleanValue(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateMixedCaseAlphabeticCharacter
 * @description Tests the positive and negative test cases of the randomlyGenerateMixedCaseAlphabeticCharacter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter, () => {
  /**
   * @function randomlyGenerateMixedCaseAlphabeticCharacter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_validDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // a-z random
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateMixedCaseAlphabeticCharacter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateLowerCaseLetter
 * @description Tests the positive and negative test cases of the randomlyGenerateLowerCaseLetter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateLowerCaseLetter, () => {
  /**
   * @function randomlyGenerateLowerCaseLetter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.crandomlyGenerateLowerCaseLetter_validDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // a-z random
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateLowerCaseLetter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateLowerCaseLetter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateLowerCaseLetter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function randomlyGenerateUpperCaseLetter
 * @description Tests the positive and negative test cases of the randomlyGenerateUpperCaseLetter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.crandomlyGenerateUpperCaseLetter, () => {
  /**
   * @function randomlyGenerateUpperCaseLetter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.crandomlyGenerateUpperCaseLetter_validDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // a-z random
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = '';
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined(); // true or false
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});

	/**
	 * @function randomlyGenerateUpperCaseLetter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.randomlyGenerateUpperCaseLetter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.crandomlyGenerateUpperCaseLetter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.randomlyGenerateUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBeDefined();
	});
});

/**
 * @function convertNumberToUpperCaseLetter
 * @description Tests the positive and negative test cases of the convertNumberToUpperCaseLetter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cconvertNumberToUpperCaseLetter, () => {
  /**
   * @function convertNumberToUpperCaseLetter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.cconvertNumberToUpperCaseLetter_validDataString, () => {
		// Arrange
		let inputData = num.c1;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('A'); // a-z random
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = num.c1;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('A');
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('A');
	});

	/**
	 * @function convertNumberToUpperCaseLetter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToUpperCaseLetter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToUpperCaseLetter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToUpperCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('A');
	});
});

/**
 * @function convertNumberToLowerCaseLetter
 * @description Tests the positive and negative test cases of the convertNumberToLowerCaseLetter
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cconvertNumberToLowerCaseLetter, () => {
  /**
   * @function convertNumberToLowerCaseLetter_validDataString
   * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with a valid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
	test(tst_con.cconvertNumberToLowerCaseLetter_validDataString, () => {
	// Arrange
	let inputData = num.c1;
	let inputMetaData = '';
	rulesLibrary.initRulesLibrary();

	// Act
	let returnData = characterGeneration.convertNumberToLowerCaseLetter(
		inputData,
		inputMetaData
	);

	// Assert
	expect(returnData).toBe('a'); // a-z random
});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidDataInputDataString
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid string input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidDataInputDataString, () => {
		// Arrange
		let inputData = data_con.stringRandomText;
		let inputMetaData = '';
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidDataInputMetaDataString
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid string inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidDataInputMetaDataString, () => {
		// Arrange
		let inputData = num.c1;
		let inputMetaData = data_con.stringRandomText;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('a');
	});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidInputDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid integer input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidInputDataInteger, () => {
		// Arrange
		let inputData = 4567;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidInputDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid boolean input.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidInputDataBoolean, () => {
		// Arrange
		let inputData = false;
		let inputMetaData = [1, 2, 3, 4, 5];
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('');
	});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidInputMetaDataInteger
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid integer inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidInputMetaDataInteger, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = 4567;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('a');
	});

	/**
	 * @function convertNumberToLowerCaseLetter_inValidInputMetaDataBoolean
	 * @description Tests the businessRules.rules.characterGeneration.convertNumberToLowerCaseLetter function, with an invalid boolean inputMetaData.
	 * @author Json Howard
	 * @date 2023/05/03
	 */
	test(tst_con.cconvertNumberToLowerCaseLetter_inValidInputMetaDataBoolean, () => {
		// Arrange
		let inputData = [1, 2, 3, 4, 5];
		let inputMetaData = false;
		rulesLibrary.initRulesLibrary();

		// Act
		let returnData = characterGeneration.convertNumberToLowerCaseLetter(
			inputData,
			inputMetaData
		);

		// Assert
		expect(returnData).toBe('a');
	});
});
