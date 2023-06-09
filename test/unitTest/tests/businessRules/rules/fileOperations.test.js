"use strict";
/* eslint-disable no-undef */
/**
 * @file fileOperations.test.js
 * @module fileOperations.test
 * @description Unit tests for the fileOperations.js
 * @requires module:fileOperations
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker.js
 * @requires module:testData/fileOperations
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import fileOperations from "../../../../../src/businessRules/rules/fileOperations";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";
import * as data_con from '../../testData/brokers/dataBroker.js';
import * as obj_con from '../../../testData/businessRules/rules/fileOperations.js';
import * as tst_con from "../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import { describe, expect, test } from "@jest/globals";

const { bas, wrd } = hayConst;

/**
 * @function getXmlData
 * @description Tests the positive and negative test cases of the getXmlData
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cgetXmlData, () => {
  /**
   * @function getXmlData_validDataString
   * @description Tests the business rules function getXmlData with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlPath();
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidDataInputDataString
   * @description Tests the business rules function getXmlData with a invalid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidDataInputMetaDataString
   * @description Tests the business rules function getXmlData with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsXmlPath();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.getXmlData(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidInputDataInteger
   * @description Tests the business rules function getXmlData with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidInputDataBoolean
   * @description Tests the business rules function getXmlData with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidInputMetaDataInteger
   * @description Tests the business rules function getXmlData with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getXmlData_inValidInputMetaDataBoolean
   * @description Tests the business rules function getXmlData with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetXmlData_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getXmlData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function getCsvData
 * @description Tests the positive and negative test cases of the getCsvData
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cgetCsvData, () => {
  /**
   * @function getCsvData_validDataString
   * @description Tests the business rules function getCsvData with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsCsvPath();
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidDataInputDataString
   * @description Tests the business rules function getCsvData with a invalid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidDataInputMetaDataString
   * @description Tests the business rules function getCsvData with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsCsvPath();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.getCsvData(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidInputDataInteger
   * @description Tests the business rules function getCsvData with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidInputDataBoolean
   * @description Tests the business rules function getCsvData with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidInputMetaDataInteger
   * @description Tests the business rules function getCsvData with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getCsvData_inValidInputMetaDataBoolean
   * @description Tests the business rules function getCsvData with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetCsvData_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getCsvData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function getJsonData
 * @description Tests the positive and negative test cases of the getJsonData
 * @author Json Howards
 * @date 2023/05/03
 */
describe(tst_con.cgetJsonData, () => {
  /**
   * @function getJsonData_validDataString
   * @description Tests the business rules function getJsonData with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsJsonPath();
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.getJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getJsonData_inValidDataInputDataString
   * @description Tests the business rules function getJsonData with a invalid string input.
   * @result Create garbage folder
   * @author Json Howard
   * @date 2023/05/03
   * @NOTE Not implemented because when the test is ran the garbage folder is created.
   */

  /**
   * @function getJsonData_inValidDataInputMetaDataString
   * @description Tests the business rules function getJsonData with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsJsonPath();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.getJsonData(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function getJsonData_inValidInputDataInteger
   * @description Tests the business rules function getJsonData with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getJsonData_inValidInputDataBoolean
   * @description Tests the business rules function getJsonData with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getJsonData_inValidInputMetaDataInteger
   * @description Tests the business rules function getJsonData with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getJsonData_inValidInputMetaDataBoolean
   * @description Tests the business rules function getJsonData with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetJsonData_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function writeJsonData
 * @description Tests the positive and negative test cases of the writeJsonData
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cwriteJsonData, () => {
  /**
   * @function writeJsonData_validDataString
   * @description Tests the business rules function writeJsonData with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cwriteJsonData_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsJsonPath();
    let inputMetaData = wrd.cHello + bas.cColon + wrd.cWorld;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.writeJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function writeJsonData_inValidDataInputDataString
   * @description Tests the business rules function writeJsonData with a valid input.
   * @result In root path create garbage file
   * @author Json Howard
   * @date 2023/05/03
   * @NOTE Not implemented because when the test is ran the garbage file is created in the root folder.
   */

  /**
   * @function writeJsonData_inValidInputDataBoolean
   * @description Tests the business rules function writeJsonData with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cwriteJsonData_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.writeJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function writeJsonData_inValidInputMetaDataInteger
   * @description Tests the business rules function writeJsonData with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cwriteJsonData_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.writeJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function writeJsonData_inValidInputMetaDataBoolean
   * @description Tests the business rules function writeJsonData with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cwriteJsonData_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.writeJsonData(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });
});

/**
 * @function readDirectoryContents
 * @description Tests the positive and negative test cases of the readDirectoryContents
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.creadDirectoryContents, () => {
  /**
   * @function readDirectoryContents_validDataString
   * @description Tests the business rules function readDirectoryContents with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = wrd.cHello + bas.cColon + wrd.cWorld;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.readDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function readDirectoryContents_inValidDataInputDataString
   * @description Tests the business rules function readDirectoryContents with a invalid string input.
   * @return Create garbage folder 
   * @author Json Howard
   * @date 2023/05/03
   * @NOTE Not implemented because when the test is ran the garbage folder is created.
   */

  /**
   * @function readDirectoryContents_inValidDataInputMetaDataString
   * @description Tests the business rules function readDirectoryContents with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsXmlFolder();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.readDirectoryContents(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function readDirectoryContents_inValidInputDataInteger
   * @description Tests the business rules function readDirectoryContents with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function readDirectoryContents_inValidInputDataBoolean
   * @description Tests the business rules function readDirectoryContents with a invalid false input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function readDirectoryContents_inValidInputMetaDataInteger
   * @description Tests the business rules function readDirectoryContents with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function readDirectoryContents_inValidInputMetaDataBoolean
   * @description Tests the business rules function readDirectoryContents with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectoryContents_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function scanDirectoryContents
 * @description Tests the positive and negative test cases of the scanDirectoryContents
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cscanDirectoryContents, () => {
  /**
   * @function scanDirectoryContents_validDataString
   * @description Tests the business rules function scanDirectoryContents with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = [true, 2];
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });    

  /**
   * @function scanDirectoryContents_inValidDataInputDataString
   * @description Tests the business rules function scanDirectoryContents with a invalid string input.
   * @result Create garbage folder
   * @author Json Howard
   * @date 2023/05/03
   * @NOTE Not implemented because when the test is ran the garbage folder is created.
   */

  /**
   * @function scanDirectoryContents_inValidDataInputMetaDataString
   * @description Tests the business rules function scanDirectoryContents with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsXmlFolder();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.scanDirectoryContents(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function scanDirectoryContents_inValidInputDataInteger
   * @description Tests the business rules function scanDirectoryContents with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });

  /**
   * @function scanDirectoryContents_inValidInputDataBoolean
   * @description Tests the business rules function scanDirectoryContents with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });

  /**
   * @function scanDirectoryContents_inValidInputMetaDataInteger
   * @description Tests the business rules function scanDirectoryContents with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });

  /**
   * @function scanDirectoryContents_inValidInputMetaDataBoolean
   * @description Tests the business rules function scanDirectoryContents with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });

  /**
   * @function scanDirectoryContents_inValidInputMetaDataUndefined
   * @description Tests the business rules function scanDirectoryContents with a invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });

  /**
   * @function scanDirectoryContents_inValidInputMetaDataNaN
   * @description Tests the business rules function scanDirectoryContents with a invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cscanDirectoryContents_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.scanDirectoryContents(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
});
});

/**
 * @function getDirectoryList
 * @description Tests the positive and negative test cases of the getDirectoryList
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cgetDirectoryList, () => {
  /**
   * @function getDirectoryList_validDataString
   * @description Tests the business rules function getDirectoryList with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // path array
  });  
  
  /**
   * @function getDirectoryList_inValidDataInputDataString
   * @description Tests the business rules function getDirectoryList with a invalid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getDirectoryList_inValidDataInputMetaDataString
   * @description Tests the business rules function getDirectoryList with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsXmlFolder();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();
  
      // Act        
      let returnData = fileOperations.getDirectoryList(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
  });

  /**
   * @function getDirectoryList_inValidInputDataInteger
   * @description Tests the business rules function getDirectoryList with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getDirectoryList_inValidInputDataBoolean
   * @description Tests the business rules function getDirectoryList with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getDirectoryList_inValidInputMetaDataInteger
   * @description Tests the business rules function getDirectoryList with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function getDirectoryList_inValidInputMetaDataBoolean
   * @description Tests the business rules function getDirectoryList with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cgetDirectoryList_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.getDirectoryList(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function readDirectorySynchronously
 * @description Tests the positive and negative test cases of the readDirectorySynchronously
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.creadDirectorySynchronously, () => {
  /**
   * @function readDirectorySynchronously_validDataString
   * @description Tests the business rules function readDirectorySynchronously with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlFolder();
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileOperations.readDirectorySynchronously(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(); // path array
  });  
  
  /**
   * @function readDirectorySynchronously_inValidDataInputDataString
   * @description Tests the business rules function readDirectorySynchronously with a invalid string input.
   * @result Create garbage folder
   * @author Json Howard
   * @date 2023/05/03
   * @NOTE Not implemented because when the test is ran the garbage folder is created.
   */

  /**
   * @function readDirectorySynchronously_inValidDataInputMetaDataString
   * @description Tests the business rules function readDirectorySynchronously with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = obj_con.fileOperationsXmlFolder();
      let inputMetaData = data_con.stringRandomText;
      rulesLibrary.initRulesLibrary();

      // Act        
      let returnData = fileOperations.readDirectorySynchronously(
        inputData,
        inputMetaData
      );

      // Assert
      expect(returnData).toBe();
  });

  /**
   * @function readDirectorySynchronously_inValidInputDataInteger
   * @description Tests the business rules function readDirectorySynchronously with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectorySynchronously(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function readDirectorySynchronously_inValidInputDataBoolean
   * @description Tests the business rules function readDirectorySynchronously with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectorySynchronously(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function readDirectorySynchronously_inValidInputMetaDataInteger
   * @description Tests the business rules function readDirectorySynchronously with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectorySynchronously(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });

  /**
   * @function readDirectorySynchronously_inValidInputMetaDataBoolean
   * @description Tests the business rules function readDirectorySynchronously with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.creadDirectorySynchronously_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileOperations.readDirectorySynchronously(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe();
  });
});

/**
 * @function copyFileSync
 * @description Tests the positive and negative test cases of the copyFileSync
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.ccopyFileSync, () => {
  /**
   * @function copyFileSync_validDataString
   * @description Tests the business rules function copyFileSync with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_validDataString, () => {
    // Arrange
    let inputData = [obj_con.fileOperationsXmlPath(), obj_con.testXmlPath()];
    let inputMetaData = [[bas.cStar + bas.cDot + bas.cStar], [bas.cStar + bas.cDot + bas.cStar]];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });    

  /**
   * @function copyFileSync_inValidDataInputDataString
   * @description Tests the business rules function copyFileSync with a invalid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = [[bas.cStar + bas.cDot + bas.cStar], [bas.cStar + bas.cDot + bas.cStar]];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidDataInputMetaDataString
   * @description Tests the business rules function copyFileSync with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = [obj_con.fileOperationsXmlPath(), obj_con.testXmlPath()];
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputDataInteger
   * @description Tests the business rules function copyFileSync with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputDataBoolean
   * @description Tests the business rules function copyFileSync with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputMetaDataInteger
   * @description Tests the business rules function copyFileSync with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */  
  test(tst_con.ccopyFileSync_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputMetaDataBoolean
   * @description Tests the business rules function copyFileSync with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputDataUndefined
   * @description Tests the business rules function copyFileSync with a invalid undefined input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = [[bas.cStar + bas.cDot + bas.cStar], [bas.cStar + bas.cDot + bas.cStar]];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputDataNaN
   * @description Tests the business rules function copyFileSync with a invalid NaN input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = [[bas.cStar + bas.cDot + bas.cStar], [bas.cStar + bas.cDot + bas.cStar]];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputMetaDataUndefined
   * @description Tests the business rules function copyFileSync with a invalid undefined inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputMetaDataUndefined, () => {
    // Arrange
    let inputData = [obj_con.fileOperationsXmlPath(), obj_con.testXmlPath()];
    let inputMetaData = undefined;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function copyFileSync_inValidInputMetaDataNaN
   * @description Tests the business rules function copyFileSync with a invalid NaN inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.ccopyFileSync_inValidInputMetaDataNaN, () => {
    // Arrange
    let inputData = [obj_con.fileOperationsXmlPath(), obj_con.testXmlPath()];
    let inputMetaData = NaN;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.copyFileSync(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });
});

/**
 * @function appendMessageToFile
 * @description Tests the positive and negative test cases of the appendMessageToFile
 * @author Json Howard
 * @date 2023/05/03
 */
describe(tst_con.cappendMessageToFile, () => {
  /**
   * @function appendMessageToFile_validDataString
   * @description Tests the business rules function appendMessageToFile with a valid input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_validDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlPath() + obj_con.testXmlPath();
    let inputMetaData = wrd.cHello + wrd.cWorld;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });    

  /**
   * @function appendMessageToFile_inValidDataInputDataString
   * @description Tests the business rules function appendMessageToFile with a invalid string input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = wrd.cHello + wrd.cWorld;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function appendMessageToFile_inValidDataInputMetaDataString
   * @description Tests the business rules function appendMessageToFile with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.fileOperationsXmlPath() + obj_con.testXmlPath();
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true); // path array
  });

  /**
   * @function appendMessageToFile_inValidInputDataInteger
   * @description Tests the business rules function appendMessageToFile with a invalid integer input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });

  /**
   * @function appendMessageToFile_inValidInputDataBoolean
   * @description Tests the business rules function appendMessageToFile with a invalid boolean input.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });

  /**
   * @function appendMessageToFile_inValidInputMetaDataInteger
   * @description Tests the business rules function appendMessageToFile with a invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });

  /**
   * @function appendMessageToFile_inValidInputMetaDataBoolean
   * @description Tests the business rules function appendMessageToFile with a invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });
});