'use strict';
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file dataBroker.test.js
 * @module dataBroker.test
 * @description Unit tests for the dataBroker.js
 * @requires module:dataBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/16
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import dataBroker from "../../../../src/brokers/dataBroker.js";
import rulesLibrary from "../../../../src/businessRules/rulesLibrary.js";
import D from "../../../../src/structures/data.js";
import * as tst_con from '../constants/test.constants.js';
import * as obj_con from '../../testData/brokers/dataBroker.js';

// External imports
import hayConst from '@haystacks/constants';
import { beforeAll, beforeEach, describe, expect, jest } from '@jest/globals';
import { wordConstantsValidation } from "@haystacks/constants/src/constantsValidation/word.constants.validation.js";

const { bas, msg, sys, wrd, num } = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

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
        let dataPath = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/';

        // Act
        rulesLibrary.initRulesLibrary();
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
        let dataPath = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest1';

        // Act
        rulesLibrary.initRulesLibrary();
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
        let appConfigFilesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/application.system.json'];
        let frameworkConfigFilesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/framework.system.json'];

        // Act
        rulesLibrary.initRulesLibrary();
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
        let appConfigFilesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/application1.system.json';
        let frameworkConfigFilesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/framework1.system.json';

        // Act
        rulesLibrary.initRulesLibrary();
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
        let appConfigFilesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/application.system.json'];
        let frameworkConfigFilesToLoad = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/test.csv'];
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest1/testData/test.csv';
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest1/testData/test.csv';
        let contextName = wrd.cComa;

        // Act
        rulesLibrary.initRulesLibrary();
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

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/system.xml'];
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/system.xml';
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/system.xml'];
        let contextName = wrd.cComa;

        // Act
        rulesLibrary.initRulesLibrary();
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

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/config.json'];
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = 'D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/config.json';
        let contextName = wrd.cSpace;

        // Act
        rulesLibrary.initRulesLibrary();
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
        let filesToLoad = ['D:/work/WEBGL/Upwork/Haystack/haystacks-sync/test/unitTest/testData/config.json'];
        let contextName = wrd.cComa;

        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = dataBroker.loadAllJsonData(filesToLoad, contextName);

        // Assert
        expect(returnData).toEqual({});
    });
});