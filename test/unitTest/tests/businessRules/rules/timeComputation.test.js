'use strict';
/* eslint-disable no-undef */
/**
 * @file timeComputation.test.js
 * @module timeComputation.test
 * @description Unit tests for the timeComputation.js
 * @requires module:timeComputation
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/timeComputation
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import timeComputation from '../../../../../src/businessRules/rules/timeComputation';
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as utl_con from '../../testData/businessRules/rules/stringParsingUtilities.js';
import * as tim_con from '../../testData/businessRules/rules/timeComputation.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import { describe, expect, test } from '@jest/globals';

/**
 * @function getNowMoment
 * @description Tests the positive and negative test cases of the getNowMoment
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.cgetNowMoment, () => {
  /**
   * @function getNowMoment_validDataString
   * @description Tests the business rules function getNowMoment with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_validDataString, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = '';

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(tim_con.stringRandomDate); 
  });

  /**
   * @function getNowMoment_inValidDataInputDataString
   * @description Tests the business rules function getNowMoment with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // 'timestamp+g24346dfg'
  });

  /**
   * @function getNowMoment_inValidDataInputMetaDataString
   * @description Tests the business rules function getNowMoment with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(tim_con.stringRandomDate); 
  });

  /**
   * @function getNowMoment_inValidInputDataInteger
   * @description Tests the business rules function getNowMoment with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // '2023-05-08T12:28:30-04:00'
  });

  /**
   * @function getNowMoment_inValidInputDataBoolean
   * @description Tests the business rules function getNowMoment with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // '2023-05-08T12:28:30-04:00'
  });

  /**
   * @function getNowMoment_inValidInputMetaDataInteger
   * @description Tests the business rules function getNowMoment with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();  //234String432
  });

  /**
   * @function getNowMoment_inValidInputMetaDataBoolean
   * @description Tests the business rules function getNowMoment with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();  //234String432
  });

  /**
   * @function getNowMoment_inValidInputDataUndefined
   * @description Tests the business rules function getNowMoment with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // '2023-05-08T12:28:30-04:00'
  });

  /**
   * @function getNowMoment_inValidInputDataNaN
   * @description Tests the business rules function getNowMoment with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';

    // Act
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // '2023-05-08T12:28:30-04:00'
  });

  /**
   * @function getNowMoment_inValidInputMetaDataUndefined
   * @description Tests the business rules function getNowMoment with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(tim_con.stringRandomDate); 
  });

  /**
   * @function getNowMoment_inValidInputMetaDataNaN
   * @description Tests the business rules function getNowMoment with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cgetNowMoment_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.getNowMoment(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(tim_con.stringRandomDate); 
  });
});

/**
 * @function computeDeltaTime
 * @description Tests the positive and negative test cases of the computeDeltaTime
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.ccomputeDeltaTime, () => {
  /**
   * @function computeDeltaTime_validDataString
   * @description Tests the business rules function computeDeltaTime with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_validDataString, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = tim_con.stringRandomDate1;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(31622400000); 
  });

  /**
   * @function computeDeltaTime_inValidDataInputDataString
   * @description Tests the business rules function computeDeltaTime with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = tim_con.stringRandomDate1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(-12940387200000);
  });

  /**
   * @function computeDeltaTime_inValidDataInputMetaDataString
   * @description Tests the business rules function computeDeltaTime with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(12972009600000); 
  });

  /**
   * @function computeDeltaTime_inValidInputDataInteger
   * @description Tests the business rules function computeDeltaTime with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputDataBoolean
   * @description Tests the business rules function computeDeltaTime with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputMetaDataInteger
   * @description Tests the business rules function computeDeltaTime with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputMetaDataBoolean
   * @description Tests the business rules function computeDeltaTime with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputDataUndefined
   * @description Tests the business rules function computeDeltaTime with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = tim_con.stringRandomDate1;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputDataNaN
   * @description Tests the business rules function computeDeltaTime with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = tim_con.stringRandomDate1;

    // Act
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputMetaDataUndefined
   * @description Tests the business rules function computeDeltaTime with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });

  /**
   * @function computeDeltaTime_inValidInputMetaDataNaN
   * @description Tests the business rules function computeDeltaTime with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.ccomputeDeltaTime_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = tim_con.stringRandomDate;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.computeDeltaTime(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(NaN);
  });
});

/**
 * @function sleep
 * @description Tests the positive and negative test cases of the sleep
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.csleep, () => {
  /**
   * @function sleep_validDataString
   * @description Tests the business rules function sleep with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_validDataString, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = '';

    // Act
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(); 
  });

  /**
   * @function sleep_inValidDataInputDataString
   * @description Tests the business rules function sleep with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidDataInputMetaDataString
   * @description Tests the business rules function sleep with invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(); 
  });

  /**
   * @function sleep_inValidInputDataInteger
   * @description Tests the business rules function sleep with invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputDataBoolean
   * @description Tests the business rules function sleep with invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;

    // Act
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputMetaDataInteger
   * @description Tests the business rules function sleep with invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputMetaDataBoolean
   * @description Tests the business rules function sleep with invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = utl_con.stringRandomText2;
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputDataUndefined
   * @description Tests the business rules function sleep with invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';

    // Act
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputDataNaN
   * @description Tests the business rules function sleep with invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputDataNaN, () => {
      // Arrange
      let inputData = NaN;
      let inputMetaData = '';
  
      // Act
      let returnData = timeComputation.sleep(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputMetaDataUndefined
   * @description Tests the business rules function sleep with invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function sleep_inValidInputMetaDataNaN
   * @description Tests the business rules function sleep with invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.csleep_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = num.c5;
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = timeComputation.sleep(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });
});