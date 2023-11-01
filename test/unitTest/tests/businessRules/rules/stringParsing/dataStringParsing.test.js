'use strict';
/* eslint-disable no-undef */
/**
 * @file dataStringParsing.test.js
 * @module dataStringParsing.test
 * @description Unit tests for the dataStringParsing.js
 * @requires module:dataBroker
 * @requires module:dataStringParsing
 * @requires module:rulesLibrary
 * @requires module:testData/dataBroker
 * @requires module:testData/dataStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/27
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from '../../../../../../src/brokers/dataBroker.js';
import dataStringParsing from '../../../../../../src/businessRules/rules/stringParsing/dataStringParsing.js';
import rulesLibrary from '../../../../../../src/businessRules/rulesLibrary.js';
import * as data_con from '../../../../testData/brokers/dataBroker.js';
import * as tst_con from '../../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, wrd } = hayConst;

/**
 * @function getAttributeName
 * @description Tests the positive and negative test cases of the getAttributeName
 * @author Json Howard
 * @date 2023/04/27
 */
describe(tst_con.cgetAttributeName, () => {
  /**
   * @function getAttributeName_validDataString
   * @description Tests the businessRules.rules.stringParsing.dataStringParsing function getAttributeName with a valid input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });
  
  /**
   * @function getAttributeName_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid string input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function getAttributeName_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = data_con.stringRandomText;
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function getAttributeName_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid integer input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getAttributeName_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });  

  /**
   * @function getAttributeName_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;

    // Act
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getAttributeName_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeName with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;

    // Act
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 
});

/**
 * @function getAttributeValue
 * @description Tests the positive and negative test cases of the getAttributeValue
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetAttributeValue, () => {
    /**
     * @function getAttributeValue_validDataString
     * @description Tests the business.rules.stringParsing.dataStringParsing function getAttributeValue with a valid input.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = '';
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cWorld);
    }); 

    /**
     * @function getAttributeValue_inValidDataInputDataString
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid inputData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidDataInputDataString, () => {
      // Arrange
      let inputData = data_con.stringRandomText;
      let inputMetaData = '';
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cWorld);
    }); 

    /**
     * @function getAttributeValue_inValidDataInputMetaDataString
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid inputMetaData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = data_con.stringRandomText;
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cWorld);
    }); 

      /**
     * @function getAttributeValue_inValidInputDataInteger
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid integer inputData.
     * @author Json Howard
     * @date 2023/04/28
     */
      test(tst_con.cgetAttributeValue_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        let returnData = dataStringParsing.getAttributeValue(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function getAttributeValue_inValidInputDataBoolean
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid boolean inputData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidInputDataBoolean, () => {
      // Arrange
      let inputData = false;
      let inputMetaData = [1,2,3,4,5];
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
    });

    /**
     * @function getAttributeValue_inValidInputMetaDataInteger
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidInputMetaDataInteger, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = 4567;
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
    });

    /**
     * @function getAttributeValue_inValidInputMetaDataBoolean
     * @description Tests businessRules.rules.stringParsing.dataStringParsing function getAttributeValue with an invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidInputMetaDataBoolean, () => {
      // Arrange
      let inputData = [1,2,3,4,5];
      let inputMetaData = false;
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(false);
    });
});

/**
 * @function getValueFromAssignmentOperationString
 * @description Tests the positive and negative test cases of the getValueFromAssignmentOperationString
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetValueFromAssignmentOperationString, () => {
  /**
   * @function getValueFromAssignmentOperationString_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cEqual + wrd.cWorld;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid string inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cEqual + wrd.cWorld;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid integer inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid boolean inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getValueFromAssignmentOperationString with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 
});

/**
 * @function getDataCategoryFromDataContextName
 * @description Tests the positive and negative test cases of the getDataCategoryFromDataContextName
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetDataCategoryFromDataContextName, () => {
  /**
   * @function getDataCategoryFromDataContextName_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });  

  /**
   * @function getDataCategoryFromDataContextName_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(data_con.stringRandomText);
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid integer input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryFromDataContextName with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function getDataCategoryDetailNameFromDataContextName
 * @description Tests the positive and negative test cases of the getDataCategoryDetailNameFromDataContextName
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetDataCategoryDetailNameFromDataContextName, () => {
  /**
   * @function getDataCategoryDetailNameFromDataContextName_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  });  

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(undefined);
  }); 
  
  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid integer input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getDataCategoryDetailNameFromDataContextName with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  }); 
});

/**
 * @function getKeywordNameFromDataContextName
 * @description Tests the positive and negative test cases of the getKeywordNameFromDataContextName
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetKeywordNameFromDataContextName, () => {
  /**
   * @function getKeywordNameFromDataContextName_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld + bas.cUnderscore + wrd.cUS;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cUS);
  });  

  /**
   * @function getKeywordNameFromDataContextName_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(undefined);
  }); 

  /**
   * @function getKeywordNameFromDataContextName_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld + bas.cUnderscore + wrd.cUS;
    let inputMetaData = data_con.stringRandomText;

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cUS);
  }); 

  /**
   * @function getKeywordNameFromDataContextName_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid integer inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getKeywordNameFromDataContextName_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid string inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getKeywordNameFromDataContextName_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });

  /**
   * @function getKeywordNameFromDataContextName_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getKeywordNameFromDataContextName with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });
});

/**
 * @function loadDataFile
 * @description Tests the positive and negative test cases of the loadDataFile
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cloadDataFile, () => {
  /**
   * @function loadDataFile_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function loadDataFile with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = 'constantsValidation.testData';    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('???');
  });  

  /**
   * @function loadDataFile_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = 'constantsValidation.testData';    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('???');
  });  

  /**
   * @function loadDataFile_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  }); 

  /**
   * @function loadDataFile_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid integer inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  }); 

  /**
   * @function loadDataFile_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid boolean inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });

  /**
   * @function loadDataFile_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  }); 

  /**
   * @function loadDataFile_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function loadDataFile with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    
    dataBroker.setupDataStorage(false);

    // Act    
    let returnData = dataStringParsing.loadDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy();
  });  
});

/**
 * @function saveDataFile
 * @description Tests the positive and negative test cases of the saveDataFile
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.csaveDataFile, () => {
  /**
   * @function saveDataFile_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function saveDataFile with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_validDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = {};    

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });  
 
  /**
   * @function saveDataFile_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = {};    

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function saveDataFile_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = './test/unitTest/tests/constants/test.constants.js';
    let inputMetaData = data_con.stringRandomText;   

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function saveDataFile_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid integer inputData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];   

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function saveDataFile_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];   

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function saveDataFile_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;   

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function saveDataFile_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function saveDataFile with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;   

    // Act
    let returnData = dataStringParsing.saveDataFile(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });
});

/**
 * @function getUserNameFromEmail
 * @description Tests the positive and negative test cases of the getUserNameFromEmail
 * @author Json Howard
 * @date 2023/04/28
 */
describe(tst_con.cgetUserNameFromEmail, () => {
  /**
   * @function getUserNameFromEmail_validDataString
   * @description Tests the business.rules.stringParsing.dataStringParsing function getUserNameFromEmail with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cAt + wrd.cWorld;
    let inputMetaData = '';    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });  

  /**
   * @function getUserNameFromEmail_inValidDataInputDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe('');
  });  

  /**
   * @function getUserNameFromEmail_inValidDataInputMetaDataString
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cAt + wrd.cWorld;
    let inputMetaData = data_con.stringRandomText;    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  }); 

  /**
   * @function getUserNameFromEmail_inValidInputDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid integer input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  });

  /**
   * @function getUserNameFromEmail_inValidInputDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid boolean input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = [1,2,3,4,5];    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getUserNameFromEmail_inValidInputMetaDataInteger
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid integer inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidInputMetaDataInteger, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = 4567;    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 

  /**
   * @function getUserNameFromEmail_inValidInputMetaDataBoolean
   * @description Tests businessRules.rules.stringParsing.dataStringParsing function getUserNameFromEmail with an invalid boolean inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidInputMetaDataBoolean, () => {
    // Arrange
    let inputData = [1,2,3,4,5];
    let inputMetaData = false;    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(false);
  }); 
});
