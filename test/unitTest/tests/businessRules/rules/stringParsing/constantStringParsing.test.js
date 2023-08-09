'use strict';
/* eslint-disable no-undef */
/**
 * @file constantStringParsing.test.js
 * @module constantStringParsing.test
 * @description Unit tests for the constantStringParsing.js
 * @requires module:dataBroker
 * @requires module:constantStringParsing
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/constantStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/29
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from '../../../../../../src/brokers/dataBroker.js';
import constantStringParsing from '../../../../../../src/businessRules/rules/stringParsing/constantStringParsing.js';
import D from '../../../../../../src/structures/data.js';
import * as data_con from '../../../../testData/brokers/dataBroker.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { bas, sys, wrd } = hayConst;

/**
 * @function validateConstantsDataValidation
 * @description Tests the positive and negative test cases of the validateConstantsDataValidation
 * @author Json Howard
 * @date 2023/04/30
 * @NOTE Needs significant amount of test date validation implemented.
 */
describe(tst_con.cvalidateConstantsDataValidation, () => {
    /**
     * @function validateConstantsDataValidation_validDataString
     * @description Tests the business rules function validateConstantsDataValidation with a valid input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_validDataString, () => {
      // Arrange
      let inputData = './test/unitTest/tests/constants/test.constants.js';
      let inputMetaData = 'constantsValidation.testData';    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('???');
    });

    /**
     * @function validateConstantsDataValidation_inValidDataInputDataString
     * @description Tests the business rules function validateConstantsDataValidation with a invalid string input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = 'constantsValidation.testData';   
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('???');
    });
  
    /**
     * @function validateConstantsDataValidation_inValidDataInputMetaDataString
     * @description Tests the business rules function validateConstantsDataValidation with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = './test/unitTest/tests/constants/test.constants.js';
      let inputMetaData = data_con.stringRandomText;    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe('???');
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataInteger
     * @description Tests the business rules function validateConstantsDataValidation with a invalid boolean input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataInteger, () => {
      // Arrange
      let inputData = 4567;
      let inputMetaData = [1,2,3,4,5];    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function validateConstantsDataValidation_inValidInputDataBoolean
     * @description Tests the business rules function validateConstantsDataValidation with a invalid boolean input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function validateConstantsDataValidation_inValidInputMetaDataInteger
     * @description Tests the business rules function validateConstantsDataValidation with a invalid boolean input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function validateConstantsDataValidation_inValidInputMetaDataBoolean
     * @description Tests the business rules function validateConstantsDataValidation with a invalid boolean input.
     * @author Json Howard
     * @date 2023/04/29
     */
    test(tst_con.cvalidateConstantsDataValidation_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;    
      dataBroker.setupDataStorage(false);

      // Act      
      let returnData = constantStringParsing.validateConstantsDataValidation(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });
  });

  /**
 * @function determineConstantsContextQualifiedPrefix
 * @description Tests the positive and negative test cases of the determineConstantsContextQualifiedPrefix
 * @author Json Howard
 * @date 2023/04/30
 * @NOTE Needs significant amount of test date validation implemented.
 */
describe(tst_con.cdetermineConstantsContextQualifiedPrefix, () => {
  /**
   * @function determineConstantsContextQualifiedPrefix_validDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });
});

  /**
 * @function determineConstantsContextQualifiedPrefix
 * @description Tests the positive and negative test cases of the determineConstantsContextQualifiedPrefix
 * @author Json Howard
 * @date 2023/04/30
 * @NOTE Needs significant amount of test date validation implemented.
 */
describe(tst_con.cdetermineConstantsContextQualifiedPrefix, () => {
  /**
   * @function determineConstantsContextQualifiedPrefix_validDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });

  /**
   * @function determineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function determineConstantsContextQualifiedPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineConstantsContextQualifiedPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineConstantsContextQualifiedPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toHaveLength(5);
  });
});

 /**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Tests the positive and negative test cases of the determineSuggestedConstantsValidationLineOfCode
 * @author Json Howard
 * @date 2023/04/30
 */
 describe(tst_con.cdetermineSuggestedConstantsValidationLineOfCode, () => {
  /**
   * @function determineSuggestedConstantsValidationLineOfCode_validDataString
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_validDataString, () => {
    // Arrange
    let inputData = bas.cc;
    let inputMetaData = wrd.cHello;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.cHello);
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidDataInputDataString
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cHello;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain('');
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = bas.cc;
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(data_con.stringRandomText);
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain('');
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain('');
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain('');
  });

  /**
   * @function determineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean
   * @description Tests the business rules function determineSuggestedConstantsValidationLineOfCode with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdetermineSuggestedConstantsValidationLineOfCode_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.determineSuggestedConstantsValidationLineOfCode(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain('');
  });
});

/**
 * @function validateConstantsDataValidationLineItemName
 * @description Tests the positive and negative test cases of the validateConstantsDataValidationLineItemName
 * @author Json Howard
 * @date 2023/04/30
 */
describe(tst_con.cvalidateConstantsDataValidationLineItemName, () => {
  /**
   * @function validateConstantsDataValidationLineItemName_validDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = wrd.cWorld;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidDataInputDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cWorld;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidDataInputMetaDataString
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputDataInteger
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputDataBoolean
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataInteger
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act        
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function validateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean
   * @description Tests the business rules function validateConstantsDataValidationLineItemName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cvalidateConstantsDataValidationLineItemName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputMetaData] = [{Name : wrd.cHello}];

    // Act      
    let returnData = constantStringParsing.validateConstantsDataValidationLineItemName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function doesConstantExist
 * @description Tests the positive and negative test cases of the doesConstantExist
 * @author Json Howard
 * @date 2023/04/30
 */
describe(tst_con.cdoesConstantExist, () => {
  /**
   * @function doesConstantExist_validDataString
   * @description Tests the business rules function doesConstantExist with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function doesConstantExist_inValidDataInputDataString
   * @description Tests the business rules function doesConstantExist with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidDataInputMetaDataString
   * @description Tests the business rules function doesConstantExist with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function doesConstantExist_inValidInputDataInteger
   * @description Tests the business rules function doesConstantExist with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputDataBoolean
   * @description Tests the business rules function doesConstantExist with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputMetaDataInteger
   * @description Tests the business rules function doesConstantExist with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function doesConstantExist_inValidInputMetaDataBoolean
   * @description Tests the business rules function doesConstantExist with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cdoesConstantExist_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.doesConstantExist(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function getConstantType
 * @description Tests the positive and negative test cases of the getConstantType
 * @author Json Howard
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantType, () => {
  /**
   * @function getConstantType_validDataString
   * @description Tests the business rules function getConstantType with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = true;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidDataInputDataString
   * @description Tests the business rules function getConstantType with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = true;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantType with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidInputDataInteger
   * @description Tests the business rules function getConstantType with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidInputDataBoolean
   * @description Tests the business rules function getConstantType with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantType with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantType_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantType with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantType_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.getConstantType(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function getConstantActualValue
 * @description Tests the positive and negative test cases of the getConstantActualValue
 * @author Json Howard
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantActualValue, () => {
  /**
   * @function getConstantActualValue_validDataString
   * @description Tests the business rules function getConstantActualValue with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = wrd.cWorld;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantActualValue_inValidDataInputDataString
   * @description Tests the business rules function getConstantActualValue with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cWorld;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantActualValue_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantActualValue with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantActualValue_inValidInputDataInteger
   * @description Tests the business rules function getConstantActualValue with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
  
  /**
   * @function getConstantActualValue_inValidInputDataBoolean
   * @description Tests the business rules function getConstantActualValue with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantActualValue_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantActualValue with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantActualValue_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantActualValue with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantActualValue_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();

    // Act    
    let returnData = constantStringParsing.getConstantActualValue(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function getConstantName
 * @description Tests the positive and negative test cases of the getConstantName
 * @author Json Howard
 * @date 2023/04/30
 */
describe(tst_con.cgetConstantName, () => {
  /**
   * @function getConstantName_validDataString
   * @description Tests the business rules function getConstantName with a valid input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_validDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidDataInputDataString
   * @description Tests the business rules function getConstantName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidDataInputMetaDataString
   * @description Tests the business rules function getConstantName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = data_con.stringRandomText;    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidInputDataInteger
   * @description Tests the business rules function getConstantName with a invalid integer input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidInputDataBoolean
   * @description Tests the business rules function getConstantName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidInputMetaDataInteger
   * @description Tests the business rules function getConstantName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getConstantName_inValidInputMetaDataBoolean
   * @description Tests the business rules function getConstantName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/29
   */
  test(tst_con.cgetConstantName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.getConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function findConstantName
 * @description Tests the positive and negative test cases of the findConstantName
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cfindConstantName, () => {
  /**
   * @function findConstantName_validDataString
   * @description Tests the business rules function findConstantName with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidDataInputDataString
   * @description Tests the business rules function findConstantName with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidDataInputMetaDataString
   * @description Tests the business rules function findConstantName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cSystem;
    let inputMetaData = data_con.stringRandomText;    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidInputDataBoolean
   * @description Tests the business rules function findConstantName with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidInputMetaDataInteger
   * @description Tests the business rules function findConstantName with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidInputMetaDataBoolean
   * @description Tests the business rules function findConstantName with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function findConstantName_inValidInputDataInteger
   * @description Tests the business rules function findConstantName with a invalid integer data.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cfindConstantName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = constantStringParsing.findConstantName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function isConstantTypeValid
 * @description Tests the positive and negative test cases of the isConstantTypeValid
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cisConstantTypeValid, () => {
  /**
   * @function isConstantTypeValid_validDataString
   * @description Tests the business rules function isConstantTypeValid with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantTypeValid_inValidDataInputDataString
   * @description Tests the business rules function isConstantTypeValid with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cWorld;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidDataInputMetaDataString
   * @description Tests the business rules function isConstantTypeValid with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantTypeValid_inValidInputDataInteger
   * @description Tests the business rules function isConstantTypeValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputDataBoolean
   * @description Tests the business rules function isConstantTypeValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputMetaDataInteger
   * @description Tests the business rules function isConstantTypeValid with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantTypeValid_inValidInputMetaDataBoolean
   * @description Tests the business rules function isConstantTypeValid with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantTypeValid_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.isConstantTypeValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function convertConstantTypeToConstantPrefix
 * @description Tests the positive and negative test cases of the convertConstantTypeToConstantPrefix
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cconvertConstantTypeToConstantPrefix, () => {
  /**
   * @function convertConstantTypeToConstantPrefix_validDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidDataInputDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cWorld;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidDataInputMetaDataString
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputDataInteger
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputDataBoolean
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputMetaDataInteger
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function convertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean
   * @description Tests the business rules function convertConstantTypeToConstantPrefix with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconvertConstantTypeToConstantPrefix_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.convertConstantTypeToConstantPrefix(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Tests the positive and negative test cases of the constantsOptimizedFulfillmentSystem
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cconstantsOptimizedFulfillmentSystem, () => {
  /**
   * @function constantsOptimizedFulfillmentSystem_validDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    

    // Act
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidDataInputDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cWorld;  

    // Act
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidInputDataInteger
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidInputDataBoolean
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidInputMetaDataInteger
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function constantsOptimizedFulfillmentSystem_inValidInputMetaDataBoolean
   * @description Tests the business rules function constantsOptimizedFulfillmentSystem with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsOptimizedFulfillmentSystem_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;  
    D[sys.cConstantsValidationData][sys.cConstantsShortNames] = {Hello: wrd.cWorld};

    // Act    
    let returnData = constantStringParsing.constantsOptimizedFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function constantsFulfillmentSystem
 * @description Tests the positive and negative test cases of the constantsFulfillmentSystem
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cconstantsFulfillmentSystem, () => {
  /**
   * @function constantsFulfillmentSystem_validDataString
   * @description Tests the business rules function constantsFulfillmentSystem with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidDataInputDataString
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid string input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidDataInputMetaDataString
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;      

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidInputDataInteger
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidInputDataBoolean
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidInputMetaDataInteger
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });

  /**
   * @function constantsFulfillmentSystem_inValidInputMetaDataBoolean
   * @description Tests the business rules function constantsFulfillmentSystem with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cconstantsFulfillmentSystem_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;       

    // Act
    let returnData = constantStringParsing.constantsFulfillmentSystem(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(' + ');
  });
});

/**
 * @function validateConstantsDataValues
 * @description Tests the positive and negative test cases of the validateConstantsDataValues
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cvalidateConstantsDataValues, () => {
  /**
   * @function validateConstantsDataValues_validDataString
   * @description Tests the business rules function validateConstantsDataValues with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidDataInputDataString
   * @description Tests the business rules function validateConstantsDataValues with a invalid string input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';  
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];  

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidDataInputMetaDataString
   * @description Tests the business rules function validateConstantsDataValues with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;  
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];  

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputDataInteger
   * @description Tests the business rules function validateConstantsDataValues with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputDataBoolean
   * @description Tests the business rules function validateConstantsDataValues with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];   
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2]; 

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputMetaDataInteger
   * @description Tests the business rules function validateConstantsDataValues with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function validateConstantsDataValues_inValidInputMetaDataBoolean
   * @description Tests the business rules function validateConstantsDataValues with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cvalidateConstantsDataValues_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false; 
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];   

    // Act    
    let returnData = constantStringParsing.validateConstantsDataValues(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function isConstantValid
 * @description Tests the positive and negative test cases of the isConstantValid
 * @author Json Howard
 * @date 2023/05/01
 */
describe(tst_con.cisConstantValid, () => {
  /**
   * @function isConstantValid_validDataString
   * @description Tests the business rules function isConstantValid with a valid input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = '';    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidDataInputDataString
   * @description Tests the business rules function isConstantValid with a invalid string input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';  
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];  

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidDataInputMetaDataString
   * @description Tests the business rules function isConstantValid with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello;
    let inputMetaData = data_con.stringRandomText;  
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];  

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidInputDataInteger
   * @description Tests the business rules function isConstantValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];   
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2]; 

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantValid_inValidInputDataBoolean
   * @description Tests the business rules function isConstantValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function isConstantValid_inValidInputMetaDataInteger
   * @description Tests the business rules function isConstantValid with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function isConstantValid_inValidInputMetaDataBoolean
   * @description Tests the business rules function isConstantValid with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/01
   */
  test(tst_con.cisConstantValid_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.initializeConstantsValidationData();
    D[sys.cConstantsValidationData][inputData] = [1, 2];

    // Act    
    let returnData = constantStringParsing.isConstantValid(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});