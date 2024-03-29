'use strict';
/* eslint-disable no-undef */
/**
 * @file fileStringParsing.test.js
 * @module fileStringParsing.test
 * @description Unit tests for the fileStringParsing.js
 * @requires module:fileStringParsing
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:testData/fileStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/02
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import fileStringParsing from '../../../../../../src/businessRules/rules/stringParsing/fileStringParsing.js';
import rulesLibrary from '../../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../../testData/brokers/dataBroker.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, wrd, gen } = hayConst;

/**
 * @function getFileNameFromPath
 * @description Tests the positive and negative test cases of the getFileNameFromPath
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cgetFileNameFromPath, () => {
  /**
   * @function getFileNameFromPath_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileNameFromPath_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.csystem + bas.cDot + gen.cxml);
  });

  /**
   * @function getFileNameFromPath_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileNameFromPath_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomTextq;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function getFileNameFromPath_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileNameFromPath_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.csystem + bas.cDot + gen.cxml);
  });

  /**
   * @function getFileNameFromPath_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileNameFromPath_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFileNameFromPath_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileNameFromPath_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
     * @function getFileNameFromPath_inValidInputMetaDataInteger
     * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
  test(tst_con.cgetFileNameFromPath_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
       * @function getFileNameFromPath_inValidInputMetaDataBoolean
       * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileNameFromPath function, with an invalid boolean inputMetaData.
       * @author Json Howard
       * @date 2023/05/02
       */
  test(tst_con.cgetFileNameFromPath_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileNameFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function getFileExtension
 * @description Tests the positive and negative test cases of the getFileExtension
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cgetFileExtension, () => {
  /**
   * @function getFileExtension_validDataString
   * @description Tests the businessRules.rules.arrayParsing.fileStringParsing.getFileExtension function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(bas.cDot + gen.cxml);
  });

  /**
   * @function getFileExtension_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getFileExtension_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(bas.cDot + gen.cxml);
  });

  /**
   * @function getFileExtension_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFileExtension_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFileExtension_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFileExtension_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFileExtension function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFileExtension_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function removeDotFromFileExtension
 * @description Tests the positive and negative test cases of the removeDotFromFileExtension
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cremoveDotFromFileExtension, () => {
  /**
   * @function removeDotFromFileExtension_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.csystem + bas.cDot + gen.cxml);
  });

  /**
   * @function removeDotFromFileExtension_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('fxg24346dfg');
  });

  /**
   * @function removeDotFromFileExtension_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.csystem + bas.cDot + gen.cxml);
  });

  /**
   * @function getFileExtension_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeDotFromFileExtension_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
     * @function removeDotFromFileExtension_inValidInputMetaDataInteger
     * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
  test(tst_con.cremoveDotFromFileExtension_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeDotFromFileExtension_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeDotFromFileExtension function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveDotFromFileExtension_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeDotFromFileExtension(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

 /**
 * @function removeFileExtensionFromFileName
 * @description Tests the positive and negative test cases of the removeFileExtensionFromFileName
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cremoveFileExtensionFromFileName, () => {
  /**
   * @function removeFileExtensionFromFileName_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.csystem);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toContain(wrd.csystem);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeFileExtensionFromFileName_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeFileExtensionFromFileName function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveFileExtensionFromFileName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeFileExtensionFromFileName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function ascertainMatchingFilenames
 * @description Tests the positive and negative test cases of the ascertainMatchingFilenames
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cascertainMatchingFilenames, () => {
  /**
   * @function ascertainMatchingFilenames_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(true);
  });

  /**
   * @function ascertainMatchingFilenames_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function ascertainMatchingFilenames_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
 * @function ascertainMatchingFilenames_inValidInputDataInteger
 * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid integer input.
 * @author Json Howard
 * @date 2023/05/02
 */
  test(tst_con.cascertainMatchingFilenames_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function ascertainMatchingFilenames_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function ascertainMatchingFilenames_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function ascertainMatchingFilenames_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.ascertainMatchingFilenames function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cascertainMatchingFilenames_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.ascertainMatchingFilenames(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function supportedFileFormatsAre
 * @description Tests the positive and negative test cases of the supportedFileFormatsAre
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.csupportedFileFormatsAre, () => {
  /**
   * @function supportedFileFormatsAre_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });

  /**
   * @function supportedFileFormatsAre_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.supportedFileFormatsAre function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.csupportedFileFormatsAre_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.supportedFileFormatsAre(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(gen.cXML + bas.cComa + bas.cSpace + gen.cCSV + bas.cComa + bas.cSpace + gen.cJSON);
  });
});

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Tests the positive and negative test cases of the removeXnumberOfFoldersFromEndOfPath
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cremoveXnumberOfFoldersFromEndOfPath, () => {
  /**
   * @function removeXnumberOfFoldersFromEndOfPath_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
   * @function removeXnumberOfFoldersFromEndOfPath_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function removeXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('./test/unitTest/tests/constants/test.constants.js');
  });

  /**
 * @function removeXnumberOfFoldersFromEndOfPath_inValidInputDataInteger
 * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid integer input.
 * @author Json Howard
 * @date 2023/05/02
 */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(4567);
  });

  /**
   * @function removeXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.removeXnumberOfFoldersFromEndOfPath function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });
});

/**
 * @function getFirstTopLevelFolderFromPath
 * @description Tests the positive and negative test cases of the getFirstTopLevelFolderFromPath
 * @author Json Howard
 * @date 2023/05/02
 */
describe(tst_con.cgetFirstTopLevelFolderFromPath, () => {
  /**
   * @function getFirstTopLevelFolderFromPath_validDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with a valid input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('testData');
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidDataInputDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = './test/unitTest/tests/constants/test.constants.js';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidDataInputMetaDataString
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('testData');
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidInputDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidInputDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1, 2, 3, 4, 5];
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidInputMetaDataInteger
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = 4567;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getFirstTopLevelFolderFromPath_inValidInputMetaDataBoolean
   * @description Tests the businessRules.rules.stringParsing.fileStringParsing.getFirstTopLevelFolderFromPath function, with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/05/02
   */
  test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1, 2, 3, 4, 5];
    let inputMetaData = false;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});
