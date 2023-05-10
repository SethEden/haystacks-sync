"use strict";
/* eslint-disable no-undef */
/**
 * @file fileOperations.test.js
 * @module fileOperations.test
 * @description Unit tests for the fileOperations.js
 * @requires module:fileOperations
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import fileOperations from "../../../../../src/businessRules/rules/fileOperations";
import rulesLibrary from "../../../../../src/businessRules/rulesLibrary.js";

import * as tst_con from "../../constants/test.constants.js";
import * as obj_con from '../../../testData/businessRules/rules/fileOperations.js';

// External imports
import hayConst from "@haystacks/constants";
import {
  describe,
  expect,
  test,
} from "@jest/globals";

const { bas, wrd } = hayConst;

/**
 * @function getXmlData
 * @description Tests the positive and negative test cases of the getXmlData
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
      let inputData = obj_con.xmlPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
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
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.csvPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
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
        let inputData = obj_con.csvPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.jsonPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.getJsonData(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function getJsonData_inValidDataInputMetaDataString
     * @description Tests the business rules function getJsonData with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.cgetJsonData_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.jsonPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.jsonPath();
      let inputMetaData = wrd.cHello + bas.cColon + wrd.cWorld;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.writeJsonData(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function writeJsonData_inValidDataInputMetaDataString
     * @description Tests the business rules function writeJsonData with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.cwriteJsonData_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.jsonPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.xmlFolder();
      let inputMetaData = wrd.cHello + bas.cColon + wrd.cWorld;
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.readDirectoryContents(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy();
    });

    /**
     * @function readDirectoryContents_inValidDataInputMetaDataString
     * @description Tests the business rules function readDirectoryContents with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.creadDirectoryContents_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlFolder();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.xmlFolder();
      let inputMetaData = [true, 2];
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.scanDirectoryContents(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // path array
    });    

    /**
     * @function scanDirectoryContents_inValidDataInputMetaDataString
     * @description Tests the business rules function scanDirectoryContents with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.cscanDirectoryContents_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlFolder();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileOperations.scanDirectoryContents(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
     * @function scanDirectoryContents_inValidInputMetaDataNaN
     * @description Tests the business rules function scanDirectoryContents with a invalid NaN inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.cscanDirectoryContents_inValidInputMetaDataNaN, () => {
        // Arrange
        let inputData = obj_con.xmlFolder();
        let inputMetaData = NaN;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.xmlFolder();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.getDirectoryList(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBeTruthy(); // path array
    });    

    /**
     * @function getDirectoryList_inValidDataInputMetaDataString
     * @description Tests the business rules function getDirectoryList with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.cgetDirectoryList_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlFolder();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
      let inputData = obj_con.xmlFolder();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileOperations.readDirectorySynchronously(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(); // path array
    });    

    /**
     * @function readDirectorySynchronously_inValidDataInputMetaDataString
     * @description Tests the business rules function readDirectorySynchronously with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/03
     */
    test(tst_con.creadDirectorySynchronously_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlFolder();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
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
    let inputData = [obj_con.xmlPath(), obj_con.testXmlPath()];
    let inputMetaData = [["*.*"], ["*.*"]];

    // Act
    rulesLibrary.initRulesLibrary();
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
    let inputData = [obj_con.xmlPath(), obj_con.testXmlPath()];
    let inputMetaData = "dfxg24346dfg";

    // Act
    rulesLibrary.initRulesLibrary();
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
    let inputData = obj_con.testXmlPath();
    let inputMetaData = wrd.cHello;

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });    

  /**
   * @function appendMessageToFile_inValidDataInputMetaDataString
   * @description Tests the business rules function appendMessageToFile with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/03
   */
  test(tst_con.cappendMessageToFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.testXmlPath();
    let inputMetaData = "dfxg24346dfg";

    // Act
    rulesLibrary.initRulesLibrary();
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

    // Act
    rulesLibrary.initRulesLibrary();
    let returnData = fileOperations.appendMessageToFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false); // path array
  });
});