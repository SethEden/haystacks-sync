'use strict';
/* eslint-disable no-undef */
/**
 * @file stringParsingUtilities.test.js
 * @module stringParsingUtilities.test
 * @description Unit tests for the stringParsingUtilities.js
 * @requires module:stringParsingUtilities
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/06
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import stringParsingUtilities from '../../../../../src/businessRules/rules/stringParsingUtilities';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as utl_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as tst_con from '../../constants/test.constants.js';
import { basePath } from '../../utilities/utilities';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, gen, num, wrd } = hayConst;

/**
 * @function parseSystemRootPath
 * @description Tests the positive and negative test cases of the parseSystemRootPath
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cparseSystemRootPath, () => {
  /**
   * @function parseSystemRootPath_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_validDataString, () => {
    // Arrange
    let inputData = basePath();
    let inputMetaData = wrd.chaystack

    // Act
    let returnData = stringParsingUtilities.parseSystemRootPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(""); // haystacks-sync/test/unitTest
  });

  /**
   * @function parseSystemRootPath_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText
      let inputMetaData = wrd.chaystack
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("");
  });

  /**
   * @function parseSystemRootPath_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = basePath();
      let inputMetaData = data_con.stringRandomText
  
      // Act
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // 5 characters generate
  });

  /**
   * @function parseSystemRootPath_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = wrd.chaystack

    // Act
    let returnData = stringParsingUtilities.parseSystemRootPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function parseSystemRootPath_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = wrd.chaystack
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('');
  });

  /**
   * @function parseSystemRootPath_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = wrd.chaystack
    let inputMetaData = 4567;

    // Act
    let returnData = stringParsingUtilities.parseSystemRootPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function parseSystemRootPath_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = basePath();
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('');
  });

  /**
   * @function parseSystemRootPath_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = wrd.chaystack

    // Act
    let returnData = stringParsingUtilities.parseSystemRootPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
});

/**
 * @function parseSystemRootPath_inValidInputDataNaN
 * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid NaN input.
 * @author Json Howard
 * @date 2023/05/06
 */
test(tst_con.cparseSystemRootPath_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = wrd.chaystack

    // Act
    let returnData = stringParsingUtilities.parseSystemRootPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
});

  /**
   * @function parseSystemRootPath_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputMetaDataUndefined, () => {
      // Arrange
      let inputData = basePath();
      let inputMetaData = undefined;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('');
  });

  /**
   * @function parseSystemRootPath_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.parseSystemRootPath function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cparseSystemRootPath_inValidInputMetaDataNaN, () => {
      // Arrange
      let inputData = basePath();
      let inputMetaData = NaN;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.parseSystemRootPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('');
  });
});

/**
 * @function stringToDataType
 * @description Tests the positive and negative test cases of the stringToDataType
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cstringToDataType, () => {
  /**
   * @function stringToDataType_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cstringToDataType_validDataString, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.stringToDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(5);
  });

  /**
   * @function stringToDataType_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function stringToDataType_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = num.c5;
      let inputMetaData = data_con.stringRandomText
  
      // Act
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
  });

  /**
   * @function stringToDataType_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.stringToDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function stringToDataType_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function stringToDataType_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = num.c5;
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
  });

  /**
   * @function stringToDataType_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = num.c5;
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
  });

  /**
   * @function stringToDataType_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cstringToDataType_inValidInputDataUndefined, () => {
		// Arrange
		let inputData = undefined;
		let inputMetaData = '';

		// Act
		let returnData = stringParsingUtilities.stringToDataType(
		  inputData,
		  inputMetaData
		);

		// Assert
		expect(returnData).toBe(false);
	});

	/**
	 * @function stringToDataType_inValidInputDataNaN
	 * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid NaN input.
	 * @author Json Howard
	 * @date 2023/05/06
	 */
	test(tst_con.cstringToDataType_inValidInputDataNaN, () => {
		// Arrange
		let inputData = NaN;
		let inputMetaData = '';

		// Act
		let returnData = stringParsingUtilities.stringToDataType(
		  inputData,
		  inputMetaData
		);

		// Assert
		expect(returnData).toBe(false);
	});

  /**
   * @function stringToDataType_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputMetaDataUndefined, () => {
      // Arrange
      let inputData = num.c5;
      let inputMetaData = undefined;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
  });

  /**
   * @function stringToDataType_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToDataType function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToDataType_inValidInputMetaDataNaN, () => {
      // Arrange
      let inputData = num.c5;
      let inputMetaData = NaN;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToDataType(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(5);
  });
});

/**
 * @function stringToBoolean
 * @description Tests the positive and negative test cases of the stringToBoolean
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cstringToBoolean, () => {
  /**
   * @function stringToBoolean_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cstringToBoolean_validDataString, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.stringToBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function stringToBoolean_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText
      let inputMetaData = '';
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function stringToBoolean_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = gen.ctrue;
      let inputMetaData = data_con.stringRandomText
  
      // Act
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
  });

  /**
   * @function stringToBoolean_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.stringToBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function stringToBoolean_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = utl_con.stringRandomText1;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function stringToBoolean_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = utl_con.stringRandomText2;
      let inputMetaData = 4567;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function stringToBoolean_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = utl_con.stringRandomText2;
      let inputMetaData = false;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
  });

  /**
   * @function stringToBoolean_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputDataUndefined, () => {
		// Arrange
		let inputData = undefined;
		let inputMetaData = '';

		// Act
		let returnData = stringParsingUtilities.stringToBoolean(
		  inputData,
		  inputMetaData
		);

		// Assert
		expect(returnData).toBe(false);
	});

	/**
	 * @function stringToBoolean_inValidInputDataNaN
	 * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid NaN input.
	 * @author Json Howard
	 * @date 2023/05/06
	 */
	test(tst_con.cstringToBoolean_inValidInputDataNaN, () => {
		// Arrange
		let inputData = NaN;
		let inputMetaData = '';

		// Act
		let returnData = stringParsingUtilities.stringToBoolean(
		  inputData,
		  inputMetaData
		);

		// Assert
		expect(returnData).toBe(false);
	});

  /**
   * @function stringToBoolean_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputMetaDataUndefined, () => {
      // Arrange
      let inputData = gen.ctrue;
      let inputMetaData = undefined;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
  });

  /**
   * @function stringToBoolean_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.stringToBoolean function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cstringToBoolean_inValidInputMetaDataNaN, () => {
      // Arrange
      let inputData = gen.ctrue;
      let inputMetaData = NaN;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = stringParsingUtilities.stringToBoolean(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
  });
});

/**
 * @function determineObjectDataType
 * @description Tests the positive and negative test cases of the determineObjectDataType
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cdetermineObjectDataType, () => {
  /**
   * @function determineObjectDataType_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cdetermineObjectDataType_validDataString, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('Boolean');
  });

  /**
   * @function determineObjectDataType_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('String');
  });

  /**
   * @function determineObjectDataType_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('Boolean');
  });

  /**
   * @function determineObjectDataType_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function determineObjectDataType_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function determineObjectDataType_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('String');
  });

  /**
   * @function determineObjectDataType_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('String');
  });

  /**
   * @function determineObjectDataType_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function determineObjectDataType_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function determineObjectDataType_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('Boolean');
  });

  /**
   * @function determineObjectDataType_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.determineObjectDataType function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cdetermineObjectDataType_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.determineObjectDataType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('Boolean');
  });
});

/**
 * @function isBoolean
 * @description Tests the positive and negative test cases of the isBoolean
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cisBoolean, () => {
  /**
   * @function isBoolean_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cisBoolean_validDataString, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isBoolean_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isBoolean_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isBoolean_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isBoolean_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isBoolean function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisBoolean_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = gen.ctrue;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isBoolean(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function isInteger
 * @description Tests the positive and negative test cases of the isInteger
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cisInteger, () => {
  /**
   * @function isInteger_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cisInteger_validDataString, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isInteger_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isInteger_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isInteger_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isInteger_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isInteger_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isInteger function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisInteger_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isInteger(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function isFloat
 * @description Tests the positive and negative test cases of the isFloat
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cisFloat, () => {
  /**
   * @function isFloat_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cisFloat_validDataString, () => {
    // Arrange
    let inputData = num.c5 + bas.cDot + num.c5;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isFloat_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = num.c5 + bas.cDot + num.c5;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isFloat_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isFloat_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = num.c5 + bas.cDot + num.c5;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isFloat_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isFloat function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisFloat_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = num.c5 + bas.cDot + num.c5;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isFloat(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function isString
 * @description Tests the positive and negative test cases of the isString
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cisString, () => {
  /**
   * @function isString_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cisString_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isString_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isString_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isString_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isString_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isString_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.isString function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cisString_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.isString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function replaceDoublePercentWithMessage
 * @description Tests the positive and negative test cases of the replaceDoublePercentWithMessage
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.creplaceDoublePercentWithMessage, () => {
  /**
   * @function replaceDoublePercentWithMessage_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.creplaceDoublePercentWithMessage_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cDoublePercent;
    let inputMetaData = wrd.cWorld;

    // Act
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + wrd.cWorld);
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = wrd.cWorld;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cDoublePercent;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + data_con.stringRandomText);
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid integer input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(utl_con.stringRandomText2);
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(utl_con.stringRandomText2);
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = wrd.cWorld;

    // Act
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = wrd.cWorld;

    // Act
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cDoublePercent;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + 'undefined');
  });

  /**
   * @function replaceDoublePercentWithMessage_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.replaceDoublePercentWithMessage function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.creplaceDoublePercentWithMessage_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cDoublePercent;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.replaceDoublePercentWithMessage(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + 'NaN');
  });
});

/**
 * @function utilitiesReplaceCharacterWithCharacter
 * @description Tests the positive and negative test cases of the utilitiesReplaceCharacterWithCharacter
 * @author Json Howard
 * @date 2023/05/06
 */
describe(tst_con.cutilitiesReplaceCharacterWithCharacter, () => {
  /**
   * @function utilitiesReplaceCharacterWithCharacter_validDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with a valid input.
   * @author Json Howard
   * @date 2023/05/06
   */
	test(tst_con.cutilitiesReplaceCharacterWithCharacter_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cPercent;
    let inputMetaData = [bas.cPercent, wrd.cWorld];

    // Act
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + wrd.cWorld);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText
    let inputMetaData = [bas.cPercent, wrd.cWorld];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid string input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cPercent;
    let inputMetaData = data_con.stringRandomText

    // Act
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid integer inputData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText2;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(utl_con.stringRandomText2);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(utl_con.stringRandomText2);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(utl_con.stringRandomText2);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = [bas.cPercent, wrd.cWorld];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = [bas.cPercent, wrd.cWorld];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataUndefined
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cPercent;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });

  /**
   * @function utilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN
   * @description Tests the businessRules.rules.stringParsingUtilities.utilitiesReplaceCharacterWithCharacter function, with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/06
   */
  test(tst_con.cutilitiesReplaceCharacterWithCharacter_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cPercent;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = stringParsingUtilities.utilitiesReplaceCharacterWithCharacter(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello + bas.cPercent);
  });
});
