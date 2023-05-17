"use strict";
/* eslint-disable no-undef */
/**
 * @file dataStringParsing.test.js
 * @module dataStringParsing.test
 * @description Unit tests for the dataStringParsing.js
 * @requires module:dataBroker
 * @requires module:dataStringParsing
 * @requires module:rulesLibrary
 * @requires module:testData/dataStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/27
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from "../../../../../../src/brokers/dataBroker.js";
import dataStringParsing from "../../../../../../src/businessRules/rules/stringParsing/dataStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import * as obj_con from '../../../../testData/businessRules/rules/stringParsing/dataStringParsing.js';
import * as tst_con from "../../../constants/test.constants.js";

// External imports
import hayConst from "@haystacks/constants";
import { describe, expect, test } from "@jest/globals";

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
   * @description Tests the business rules function getAttributeName with a valid input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = "";
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
   * @description Tests the business rules function getAttributeName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = dataStringParsing.getAttributeName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function getAttributeName_inValidDataInputMetaDataString
   * @description Tests the business rules function getAttributeName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/27
   */
  test(tst_con.cgetAttributeName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";
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
   * @function getAttributeName_inValidInputDataBoolean
   * @description Tests the business rules function getAttributeName with a invalid boolean input.
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

});

/**
 * @function getAttributeValue
 * @description Tests the positive and negative test cases of the getAttributeValue
 * @date 2023/04/28
 */
describe(tst_con.cgetAttributeValue, () => {
    /**
     * @function getAttributeValue_validDataString
     * @description Tests the business rules function getAttributeValue with a valid input.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_validDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = "";
  
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
     * @description Tests the business rules function getAttributeValue with a invalid inputMetaData.
     * @author Json Howard
     * @date 2023/04/28
     */
    test(tst_con.cgetAttributeValue_inValidDataInputMetaDataString, () => {
      // Arrange
      let inputData = wrd.cHello + bas.cColon + wrd.cWorld;
      let inputMetaData = "dfxg24346dfg";
  
      // Act
      let returnData = dataStringParsing.getAttributeValue(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.cWorld);
    }); 

    /**
     * @function getAttributeValue_inValidInputDataBoolean
     * @description Tests the business rules function getAttributeValue with a invalid boolean inputData.
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
});

/**
 * @function getValueFromAssignmentOperationString
 * @description Tests the positive and negative test cases of the getValueFromAssignmentOperationString
 * @date 2023/04/28
 */
describe(tst_con.cgetValueFromAssignmentOperationString, () => {
  /**
   * @function getValueFromAssignmentOperationString_validDataString
   * @description Tests the business rules function getValueFromAssignmentOperationString with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cEqual + wrd.cWorld;
    let inputMetaData = "";

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidDataInputMetaDataString
   * @description Tests the business rules function getValueFromAssignmentOperationString with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetValueFromAssignmentOperationString_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cEqual + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";

    // Act
    let returnData = dataStringParsing.getValueFromAssignmentOperationString(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getValueFromAssignmentOperationString_inValidInputDataBoolean
   * @description Tests the business rules function getValueFromAssignmentOperationString with a invalid boolean inputData.
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
});

/**
 * @function getDataCategoryFromDataContextName
 * @description Tests the positive and negative test cases of the getDataCategoryFromDataContextName
 * @date 2023/04/28
 */
describe(tst_con.cgetDataCategoryFromDataContextName, () => {
  /**
   * @function getDataCategoryFromDataContextName_validDataString
   * @description Tests the business rules function getDataCategoryFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = "";

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
   * @description Tests the business rules function getDataCategoryFromDataContextName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("dfxg24346dfg");
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidDataInputMetaDataString
   * @description Tests the business rules function getDataCategoryFromDataContextName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";

    // Act
    let returnData = dataStringParsing.getDataCategoryFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  });

  /**
   * @function getDataCategoryFromDataContextName_inValidInputDataBoolean
   * @description Tests the business rules function getDataCategoryFromDataContextName with a invalid boolean input.
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
    expect(returnData).toBe("");
  });
});

/**
 * @function getDataCategoryDetailNameFromDataContextName
 * @description Tests the positive and negative test cases of the getDataCategoryDetailNameFromDataContextName
 * @date 2023/04/28
 */
describe(tst_con.cgetDataCategoryDetailNameFromDataContextName, () => {
  /**
   * @function getDataCategoryDetailNameFromDataContextName_validDataString
   * @description Tests the business rules function getDataCategoryDetailNameFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = "";

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
   * @description Tests the business rules function getDataCategoryDetailNameFromDataContextName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";

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
   * @description Tests the business rules function getDataCategoryDetailNameFromDataContextName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetDataCategoryDetailNameFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";

    // Act
    let returnData = dataStringParsing.getDataCategoryDetailNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cWorld);
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean
   * @description Tests the business rules function getDataCategoryDetailNameFromDataContextName with a invalid boolean input.
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
    expect(returnData).toBe("");
  }); 

  /**
   * @function getDataCategoryDetailNameFromDataContextName_inValidInputDataBoolean
   * @description Tests the business rules function getDataCategoryDetailNameFromDataContextName with a invalid boolean input.
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
    expect(returnData).toBe("");
  }); 
});

/**
 * @function getKeywordNameFromDataContextName
 * @description Tests the positive and negative test cases of the getKeywordNameFromDataContextName
 * @date 2023/04/28
 */
describe(tst_con.cgetKeywordNameFromDataContextName, () => {
  /**
   * @function getKeywordNameFromDataContextName_validDataString
   * @description Tests the business rules function getKeywordNameFromDataContextName with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld + bas.cUnderscore + wrd.cUS;
    let inputMetaData = "";

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
   * @description Tests the business rules function getKeywordNameFromDataContextName with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";

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
   * @description Tests the business rules function getKeywordNameFromDataContextName with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetKeywordNameFromDataContextName_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cUnderscore + wrd.cWorld + bas.cUnderscore + wrd.cUS;
    let inputMetaData = "dfxg24346dfg";

    // Act
    let returnData = dataStringParsing.getKeywordNameFromDataContextName(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cUS);
  }); 

  /**
   * @function getKeywordNameFromDataContextName_inValidInputDataBoolean
   * @description Tests the business rules function getKeywordNameFromDataContextName with a invalid string inputMetaData.
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
    expect(returnData).toBe("");
  });
});

/**
 * @function loadDataFile
 * @description Tests the positive and negative test cases of the loadDataFile
 * @date 2023/04/28
 */
describe(tst_con.cloadDataFile, () => {
  /**
   * @function loadDataFile_validDataString
   * @description Tests the business rules function loadDataFile with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_validDataString, () => {
    // Arrange
    let inputData = obj_con.dataStringParsingXmlPath();
    let inputMetaData = 'configuration.controllers.chiefCommander.myDebugSetting';    
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
   * @function loadDataFile_inValidDataInputDataString
   * @description Tests the business rules function loadDataFile with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = 'configuration.controllers.chiefCommander.myDebugSetting';    
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
   * @function loadDataFile_inValidDataInputMetaDataString
   * @description Tests the business rules function loadDataFile with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cloadDataFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.dataStringParsingXmlPath();
    let inputMetaData = 'dfxg24346dfg';    
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
   * @description Tests the business rules function loadDataFile with a invalid integer inputMetaData.
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
   * @description Tests the business rules function loadDataFile with a invalid boolean inputMetaData.
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
 * @date 2023/04/28
 */
describe(tst_con.csaveDataFile, () => {
  /**
   * @function saveDataFile_validDataString
   * @description Tests the business rules function saveDataFile with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_validDataString, () => {
    // Arrange
    let inputData = obj_con.dataStringParsingXmlPath();
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
   * @description Tests the business rules function saveDataFile with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
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
   * @description Tests the business rules function saveDataFile with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.csaveDataFile_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = obj_con.dataStringParsingXmlPath();
    let inputMetaData = "dfxg24346dfg";   

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
   * @description Tests the business rules function saveDataFile with a invalid boolean input.
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
   * @description Tests the business rules function saveDataFile with a invalid integer inputMetaData.
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
   * @description Tests the business rules function saveDataFile with a invalid boolean inputMetaData.
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
 * @date 2023/04/28
 */
describe(tst_con.cgetUserNameFromEmail, () => {
  /**
   * @function getUserNameFromEmail_validDataString
   * @description Tests the business rules function getUserNameFromEmail with a valid input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_validDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cAt + wrd.cWorld;
    let inputMetaData = "";    

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
   * @description Tests the business rules function getUserNameFromEmail with a invalid string input.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidDataInputDataString, () => {
    // Arrange
    let inputData = "dfxg24346dfg";
    let inputMetaData = "";    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe("");
  });  

  /**
   * @function getUserNameFromEmail_inValidDataInputMetaDataString
   * @description Tests the business rules function getUserNameFromEmail with a invalid string inputMetaData.
   * @author Json Howard
   * @date 2023/04/28
   */
  test(tst_con.cgetUserNameFromEmail_inValidDataInputMetaDataString, () => {
    // Arrange
    let inputData = wrd.cHello + bas.cAt + wrd.cWorld;
    let inputMetaData = "dfxg24346dfg";    

    // Act
    let returnData = dataStringParsing.getUserNameFromEmail(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBe(wrd.cHello);
  }); 

  /**
   * @function getUserNameFromEmail_inValidInputDataBoolean
   * @description Tests the business rules function getUserNameFromEmail with a invalid boolean input.
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
});