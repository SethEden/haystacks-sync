'use strict';
/* eslint-disable no-undef */
/**
 * @file dataBroker.test.js
 * @module dataBroker.test
 * @description Unit tests for the dataBroker.js
 * @requires module:dataBroker
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/16
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from "../../../../src/brokers/dataBroker.js";
import rulesLibrary from "../../../../src/businessRules/rulesLibrary.js";
import D from "../../../../src/structures/data.js";
import * as obj_con from '../../testData/brokers/dataBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { sys, wrd, num, bas, gen } = hayConst;

/**
 * @function scanDataPath
 * @description Tests the positive and negative test cases of the scanDataPath function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cscanDataPath, () => {
    /**
    * @function scanDataPath_validData
    * @description Tests the business rules function scanDataPath with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cscanDataPath_validData, () => {
        // Arrange
        let dataPath = tst_con.basePath();
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData.length).toBeGreaterThan(1);
    });

    /**
    * @function scanDataPath_inValidString
    * @description Tests the business rules function scanDataPath with a invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cscanDataPath_inValidString, () => {
        // Arrange
        let dataPath = tst_con.basePath() + num.c123;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.scanDataPath(dataPath);

        // Assert
        expect(returnData).toEqual([]);
    });
});

/**
 * @function findUniversalDebugConfigSetting
 * @description Tests the positive and negative test cases of the findUniversalDebugConfigSetting function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cfindUniversalDebugConfigSetting, () => {
    /**
    * @function findUniversalDebugConfigSetting_validData
    * @description Tests the business rules function findUniversalDebugConfigSetting with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_validData, () => {
        // Arrange
        let appConfigFilesToLoad = [obj_con.applicationPath()];
        let frameworkConfigFilesToLoad = [obj_con.frameworkPath()];
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidString
    * @description Tests the business rules function findUniversalDebugConfigSetting with a invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidString, () => {
        // Arrange
        let appConfigFilesToLoad = tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.capplication + num.c1 + wrd.csystem + bas.cDot + gen.cjson;
        let frameworkConfigFilesToLoad = tst_con.basePath() + bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cframework + num.c1 + wrd.csystem + bas.cDot + gen.cjson;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function findUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString
    * @description Tests the business rules function findUniversalDebugConfigSetting with a invalid string frameworkConfigFilesToLoad data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cfindUniversalDebugConfigSetting_inValidFrameworkConfigFilesToLoadString, () => {
        // Arrange
        let appConfigFilesToLoad = [obj_con.applicationPath()];
        let frameworkConfigFilesToLoad = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.findUniversalDebugConfigSetting(appConfigFilesToLoad, frameworkConfigFilesToLoad);

        // Assert
        expect(returnData).toBe(true);
    });
});

/**
 * @function loadAllCsvData
 * @description Tests the positive and negative test cases of the loadAllCsvData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllCsvData, () => {
    /**
    * @function loadAllCsvData_validData
    * @description Tests the business rules function loadAllCsvData with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerCsvPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadAllCsvData_inValidString
    * @description Tests the business rules function loadAllCsvData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerCsvPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function loadAllCsvData_inValidContextNameString
    * @description Tests the business rules function loadAllCsvData with a invalid string context name.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllCsvData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerCsvPath();
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });

    /**
    * @function loadAllCsvData_inValidBoolean
    * @description Tests the business rules function loadAllCsvData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.loadAllCsvData_inValidBoolean, () => {
        // Arrange
        let filesToLoad = [false];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllCsvData(filesToLoad, contextName);

        // Assert
        expect(returnData).toBe(undefined);
    });
});

/**
 * @function loadAllXmlData
 * @description Tests the positive and negative test cases of the loadAllXmlData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllXmlData, () => {
    /**
    * @function loadedAllXmlData_validData
    * @description Tests the business rules function loadAllXmlData with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadedAllXmlData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerXmlPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadedAllXmlData_inValidString
    * @description Tests the business rules function loadAllXmlData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadedAllXmlData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerXmlPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllXmlData_inValidContextNameString
    * @description Tests the business rules function loadAllXmlData with a invalid string contextName.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllXmlData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerXmlPath()];
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadedAllXmlData_inValidBoolean
    * @description Tests the business rules function loadAllXmlData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadedAllXmlData_inValidBoolean, () => {
        // Arrange
        let filesToLoad = [false];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllXmlData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });
});

/**
 * @function loadAllJsonData
 * @description Tests the positive and negative test cases of the loadAllJsonData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cloadAllJsonData, () => {
    /**
    * @function loadAllJsonData_validData
    * @description Tests the business rules function loadAllJsonData with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_validData, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerJsonPath()];
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidString
    * @description Tests the business rules function loadAllJsonData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidString, () => {
        // Arrange
        let filesToLoad = obj_con.dataBrokerJsonPath();
        let contextName = wrd.cSpace;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });

    /**
    * @function loadAllJsonData_inValidContextNameString
    * @description Tests the business rules function loadAllJsonData with a invalid string contextName.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cloadAllJsonData_inValidContextNameString, () => {
        // Arrange
        let filesToLoad = [obj_con.dataBrokerJsonPath()];
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });
});

/**
 * @function processCsvData
 * @description Tests the positive and negative test cases of the processCsvData function.
 * @author Json Howard
 * @date 2023/04/16
 */
describe(tst_con.cprocessCsvData, () => {
    /**
    * @function processCsvData_validData
    * @description Tests the business rules function processCsvData with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_validData, () => {
        // Arrange
        let data = obj_con.JsonObjectArrayOfStrings_01;
        let contextName = wrd.ccolors;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function processCsvData_inValidContextNameString
    * @description Tests the business rules function processCsvData with a invalid string context name.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cprocessCsvData_inValidContextNameString, () => {
        // Arrange
        let data = obj_con.JsonObjectArrayOfStrings_01;
        let contextName = wrd.cComa;
        rulesLibrary.initRulesLibrary();

        // Act        
        let returnData = dataBroker.processCsvData(data, contextName);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function preprocessJsonFile
 * @description Tests the positive and negative test cases of the preprocessJsonFile function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cpreprocessJsonFile, () => {
    /**
    * @function preprocessJsonFile_validData
    * @description Tests the business rules function preprocessJsonFile with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cpreprocessJsonFile_validData, () => {
        // Arrange
        let fileToLoad = [obj_con.dataBrokerJsonPath()];

        // Act
        let returnData = dataBroker.preprocessJsonFile(fileToLoad);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function writeJsonDataToFile
 * @description Tests the positive and negative test cases of the writeJsonDataToFile function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cwriteJsonDataToFile, () => {
    /**
    * @function writeJsonDataToFile_validData
    * @description Tests the business rules function writeJsonDataToFile with a valid data.
    * @author Json Howard
    * @date 2023/04/16
    */
    test(tst_con.cwriteJsonDataToFile_validData, () => {
        // Arrange
        let fileToSaveTo = obj_con.writeJsonDataPath();
        let dataToWriteOut = obj_con.JsonObjectArrayOfStrings_01;

        // Act
        let returnData = dataBroker.writeJsonDataToFile(fileToSaveTo, dataToWriteOut);

        // Assert
        expect(returnData).toBe(true);
    });
});

/**
 * @function setupDataStorage
 * @description Tests the positive and negative test cases of the setupDataStorage function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.csetupDataStorage, () => {
    /**
    * @function setupDataStorage_validData
    * @description Tests the business rules function setupDataStorage with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_validData, () => {
        // Act
        dataBroker.setupDataStorage();

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidString
    * @description Tests the business rules function setupDataStorage with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidString, () => {
        // Arrange
        let input = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidNumber
    * @description Tests the business rules function setupDataStorage with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });

    /**
    * @function setupDataStorage_inValidBoolean
    * @description Tests the business rules function setupDataStorage with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.csetupDataStorage_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        dataBroker.setupDataStorage(input);

        // Assert
        expect(D[sys.cDataStorage]).toEqual({});
    });
});

/**
 * @function storeData
 * @description Tests the positive and negative test cases of the storeData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cstoreData, () => {
    /**
    * @function storeData_validDataString
    * @description Tests the business rules function storeData with a valid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataString, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = wrd.cHello + wrd.cWorld;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_validDataBoolean
    * @description Tests the business rules function storeData with a valid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataBoolean, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = false;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_validDataInteger
    * @description Tests the business rules function storeData with a valid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataInteger, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = 123;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_validDataArray
    * @description Tests the business rules function storeData with a valid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataArray, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_validDataObject
    * @description Tests the business rules function storeData with a valid object data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_validDataObject, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = obj_con.JsonObjectOfStrings_02;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataToStoreUndefined
    * @description Tests the business rules function storeData with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataToStoreUndefined, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = undefined;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataToStoreNaN
    * @description Tests the business rules function storeData with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataToStoreNaN, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;
        let dataToStore = NaN;

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataStorageDataToStoreNumber
    * @description Tests the business rules function storeData with a invalid number dataStorageContextName.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataStorageDataToStoreNumber, () => {
        // Arrange
        let dataStorageContextName = 123;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function storeData_inValidDataStorageDataToStoreBoolean
    * @description Tests the business rules function storeData with a invalid boolean dataStorageContextName.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cstoreData_inValidDataStorageDataToStoreBoolean, () => {
        // Arrange
        let dataStorageContextName = false;
        let dataToStore = [1, 2, 3, 4, 5];

        // Act
        let returnData = dataBroker.storeData(dataStorageContextName, dataToStore);

        // Assert
        expect(returnData).toBe(true);
    });
});

/**
 * @function getData
 * @description Tests the positive and negative test cases of the getData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetData, () => {
    /**
    * @function getData_validData
    * @description Tests the business rules function getData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_validData, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(dataStorageContextName);

        // Assert
        expect(returnData).toEqual(obj_con.JsonObjectArrayOfStrings_01);
    });

    /**
    * @function getData_inValidString
    * @description Tests the business rules function getData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidString, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(wrd.cHello);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getData_inValidNumber
    * @description Tests the business rules function getData with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidNumber, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(567);

        // Assert
        expect(returnData).toEqual(false);
    });

    /**
    * @function getData_inValidBoolean
    * @description Tests the business rules function getData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetData_inValidBoolean, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        let returnData = dataBroker.getData(true);

        // Assert
        expect(returnData).toEqual(false);
    });
});

/**
 * @function clearData
 * @description Tests the positive and negative test cases of the clearData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cclearData, () => {
    /**
    * @function clearData_validData
    * @description Tests the business rules function clearData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_validData, () => {
        // Arrange
        let dataStorageContextName = wrd.ccolors;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidUndefined
    * @description Tests the business rules function clearData with a invalid undefined data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidUndefined, () => {
        // Arrange
        let dataStorageContextName = undefined;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidNaN
    * @description Tests the business rules function clearData with a invalid NaN data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidNaN, () => {
        // Arrange
        let dataStorageContextName = NaN;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidNumber
    * @description Tests the business rules function clearData with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidNumber, () => {
        // Arrange
        let dataStorageContextName = 123;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });

    /**
    * @function clearData_inValidBoolean
    * @description Tests the business rules function clearData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cclearData_inValidBoolean, () => {
        // Arrange
        let dataStorageContextName = false;

        // Act
        dataBroker.storeData(dataStorageContextName, obj_con.JsonObjectArrayOfStrings_01);
        dataBroker.clearData(dataStorageContextName);

        // Assert
        expect(D[sys.cDataStorage][dataStorageContextName]).toEqual({});
    });
});

/**
 * @function initializeConstantsValidationData
 * @description Tests the positive and negative test cases of the initializeConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cinitializeConstantsValidationData, () => {
    /**
    * @function initializeConstantsValidationData_validData
    * @description Tests the business rules function initializeConstantsValidationData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_validData, () => {
        // Act
        dataBroker.initializeConstantsValidationData();

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidString
    * @description Tests the business rules function initializeConstantsValidationData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidString, () => {
        // Arrange
        let input = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidNumber
    * @description Tests the business rules function initializeConstantsValidationData with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function initializeConstantsValidationData_inValidBoolean
    * @description Tests the business rules function initializeConstantsValidationData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cinitializeConstantsValidationData_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        dataBroker.initializeConstantsValidationData(input);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });
});

/**
 * @function addConstantsValidationData
 * @description Tests the positive and negative test cases of the addConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddConstantsValidationData, () => {
    /**
    * @function addConstantsValidationData_validData
    * @description Tests the business rules function addConstantsValidationData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_validData, () => {
        // Arrange
        let constantLibraryData = obj_con.jsonObjectOfStrings_03();

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidString
    * @description Tests the business rules function addConstantsValidationData with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidString, () => {
        // Arrange
        let constantLibraryData = wrd.cHello + wrd.cWorld;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidNumber
    * @description Tests the business rules function addConstantsValidationData with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidNumber, () => {
        // Arrange
        let constantLibraryData = 123;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });

    /**
    * @function addConstantsValidationData_inValidBoolean
    * @description Tests the business rules function addConstantsValidationData with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddConstantsValidationData_inValidBoolean, () => {
        // Arrange
        let constantLibraryData = false;

        // Act
        dataBroker.addConstantsValidationData(constantLibraryData);

        // Assert
        expect(D[sys.cConstantsValidationData]).toBeTruthy();
    });
});

/**
 * @function addDeeplyNestedConstantsValidationData
 * @description Tests the positive and negative test cases of the addDeeplyNestedConstantsValidationData function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.caddDeeplyNestedConstantsValidationData, () => {
    /**
    * @function addDeeplyNestedConstantsValidationData_validData
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_validData, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid string nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataString, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = wrd.cWorld;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid number nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataNumber, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = 123;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid boolean nested data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidDeeplyNestedDataBoolean, () => {
        // Arrange
        let contextName = wrd.cConstant;
        let deeplyNestedData = false;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameUndefined
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid undefined context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameUndefined, () => {
        // Arrange
        let contextName = undefined;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameNaN
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid NaN context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameNaN, () => {
        // Arrange
        let contextName = NaN;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameNumber
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid number context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameNumber, () => {
        // Arrange
        let contextName = 123;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
    
    /**
    * @function addDeeplyNestedConstantsValidationData_inValidContextNameBoolean
    * @description Tests the business rules function addDeeplyNestedConstantsValidationData with a invalid boolean context name.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.caddDeeplyNestedConstantsValidationData_inValidContextNameBoolean, () => {
        // Arrange
        let contextName = false;
        let deeplyNestedData = obj_con.JsonObjectOfStrings_02;

        // Act
        D[sys.cConstantsValidationData][contextName] = {};
        dataBroker.addDeeplyNestedConstantsValidationData(contextName, deeplyNestedData);

        // Assert
        expect(D[sys.cConstantsValidationData][contextName]).toBeTruthy();
    });
});