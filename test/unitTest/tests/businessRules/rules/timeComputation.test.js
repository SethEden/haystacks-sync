"use strict";
/* eslint-disable no-undef */
/**
 * @file timeComputation.test.js
 * @module timeComputation.test
 * @description Unit tests for the timeComputation.js
 * @requires module:timeComputation
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import timeComputation from "../../../../../src/businessRules/rules/timeComputation";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../constants/test.constants.js";

// External imports
import {
  describe,
  expect,
  test,
} from "@jest/globals";

/**
 * @function getNowMoment
 * @description Tests the positive and negative test cases of the getNowMoment
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
      let inputData = "2023-05-08";
      let inputMetaData = "";
  
      // Act
      let returnData = timeComputation.getNowMoment(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("2023-05-08"); 
    });

    /**
     * @function getNowMoment_inValidDataInputDataString
     * @description Tests the business rules function getNowMoment with invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // "timestamp+g24346dfg"
    });

    /**
     * @function getNowMoment_inValidDataInputDataString
     * @description Tests the business rules function getNowMoment with invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "2023-05-08";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("2023-05-08"); 
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
        let inputMetaData = "123string321";
    
        // Act
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // "2023-05-08T12:28:30-04:00"
    });

    /**
     * @function getNowMoment_inValidInputMetaDataBoolean
     * @description Tests the business rules function getNowMoment with invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidInputMetaDataBoolean, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();  //2349tring432
    });

    /**
     * @function getNowMoment_inValidInputMetaDataInteger
     * @description Tests the business rules function getNowMoment with invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();  //2349tring432
    });

    /**
     * @function getNowMoment_inValidInputMetaDataUndefined
     * @description Tests the business rules function getNowMoment with invalid undefined inputMetaData.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidInputMetaDataUndefined, () => {
        // Arrange
        let inputData = "2023-05-08";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("2023-05-08"); 
    });

    /**
     * @function getNowMoment_inValidInputMetaDataNaN
     * @description Tests the business rules function getNowMoment with invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.cgetNowMoment_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = "2023-05-08";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("2023-05-08"); 
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
        let inputMetaData = "";
    
        // Act
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // "2023-05-08T12:28:30-04:00"
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
        let inputMetaData = "";
    
        // Act
        let returnData = timeComputation.getNowMoment(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy(); // "2023-05-08T12:28:30-04:00"
    });
});

/**
 * @function computeDeltaTime
 * @description Tests the positive and negative test cases of the computeDeltaTime
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
      let inputData = "2023-05-08";
      let inputMetaData = "2024-05-08";
  
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
        let inputData = "dfxg24346dfg";
        let inputMetaData = "2024-05-08";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = timeComputation.computeDeltaTime(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(-12940387200000);
    });

    /**
     * @function computeDeltaTime_inValidDataInputDataString
     * @description Tests the business rules function computeDeltaTime with invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
    test(tst_con.ccomputeDeltaTime_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "2023-05-08";
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        let returnData = timeComputation.computeDeltaTime(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(12972009600000); 
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
        let inputMetaData = "123string321";
    
        // Act
        let returnData = timeComputation.computeDeltaTime(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(NaN);
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
        let inputMetaData = "123string321";
    
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
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "2023-05-08";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "2023-05-08";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputMetaData = "2024-05-08";
    
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
        let inputMetaData = "2024-05-08";
    
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
      let inputData = "5";
      let inputMetaData = "";
  
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
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "5";
        let inputMetaData = "dfxg24346dfg";
    
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
        let inputMetaData = "123string321";
    
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
        let inputMetaData = "123string321";
    
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
        let inputData = "234string432";
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "234string432";
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "5";
        let inputMetaData = undefined;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputData = "5";
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
        let inputMetaData = "";
    
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
        let inputMetaData = "";
    
        // Act
        let returnData = timeComputation.sleep(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe();
    });
});