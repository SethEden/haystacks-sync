"use strict";
import { crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter } from "@haystacks/constants/src/constants/business.constants.js";
/**
 * @file fileStringParsing.test.js
 * @module fileStringParsing.test
 * @description Unit tests for the fileStringParsing.js
 * @requires module:fileStringParsing
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/02
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import fileStringParsing from "../../../../../../src/businessRules/rules/stringParsing/fileStringParsing.js";
import rulesLibrary from "../../../../../../src/businessRules/rulesLibrary.js";
import dataBroker from "../../../../../../src/brokers/dataBroker.js";
import D from "../../../../../../src/structures/data.js";

import * as tst_con from "../../../constants/test.constants.js";
import * as obj_con from '../../../../testData/businessRules/rules/stringParsing/fileStringParsing.js';

// External imports
import hayConst from "@haystacks/constants";
import path from "path";
import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

const { bas, msg, sys, wrd, num, biz, cfg, cmd } = hayConst;
const baseFileName = path.basename(
  import.meta.url,
  path.extname(import.meta.url)
);

/**
 * @function getFileNameFromPath
 * @description Tests the positive and negative test cases of the getFileNameFromPath
 * @date 2023/05/02
 */
describe(tst_con.cgetFileNameFromPath, () => {
    /**
     * @function getFileNameFromPath_validDataString
     * @description Tests the business rules function getFileNameFromPath with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileNameFromPath_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.getFileNameFromPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(wrd.csystem + bas.cDot + "xml");
    });

    /**
     * @function getFileNameFromPath_inValidDataInputDataString
     * @description Tests the business rules function getFileNameFromPath with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileNameFromPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFileNameFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
      });

    /**
     * @function getFileNameFromPath_inValidDataInputMetaDataString
     * @description Tests the business rules function getFileNameFromPath with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileNameFromPath_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFileNameFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(wrd.csystem + bas.cDot + "xml");
    });

    /**
     * @function getFileNameFromPath_inValidInputDataBoolean
     * @description Tests the business rules function getFileNameFromPath with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileNameFromPath_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.cgetFileExtension, () => {
    /**
     * @function getFileExtension_validDataString
     * @description Tests the business rules function getFileExtension with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileExtension_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.getFileExtension(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(bas.cDot + "xml");
    });

    /**
     * @function getFileExtension_inValidDataInputDataString
     * @description Tests the business rules function getFileExtension with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileExtension_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFileExtension(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
      });

    /**
     * @function getFileExtension_inValidDataInputMetaDataString
     * @description Tests the business rules function getFileExtension with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileExtension_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFileExtension(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(bas.cDot + "xml");
    });

    /**
     * @function getFileExtension_inValidInputDataBoolean
     * @description Tests the business rules function getFileExtension with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFileExtension_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.cremoveDotFromFileExtension, () => {
    /**
     * @function removeDotFromFileExtension_validDataString
     * @description Tests the business rules function removeDotFromFileExtension with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveDotFromFileExtension_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.removeDotFromFileExtension(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toContain(wrd.csystem + bas.cDot + "xml");
    });

    /**
     * @function removeDotFromFileExtension_inValidDataInputDataString
     * @description Tests the business rules function removeDotFromFileExtension with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveDotFromFileExtension_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeDotFromFileExtension(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("fxg24346dfg");
      });

    /**
     * @function removeDotFromFileExtension_inValidDataInputMetaDataString
     * @description Tests the business rules function removeDotFromFileExtension with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveDotFromFileExtension_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeDotFromFileExtension(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toContain(wrd.csystem + bas.cDot + "xml");
    });

    /**
     * @function removeDotFromFileExtension_inValidInputDataBoolean
     * @description Tests the business rules function removeDotFromFileExtension with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveDotFromFileExtension_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.cremoveFileExtensionFromFileName, () => {
    /**
     * @function removeFileExtensionFromFileName_validDataString
     * @description Tests the business rules function removeFileExtensionFromFileName with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveFileExtensionFromFileName_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = "";
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.removeFileExtensionFromFileName(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toContain(wrd.csystem);
    });

    /**
     * @function removeFileExtensionFromFileName_inValidDataInputDataString
     * @description Tests the business rules function removeFileExtensionFromFileName with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveFileExtensionFromFileName_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = "";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeFileExtensionFromFileName(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
      });

    /**
     * @function removeFileExtensionFromFileName_inValidDataInputMetaDataString
     * @description Tests the business rules function removeFileExtensionFromFileName with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveFileExtensionFromFileName_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeFileExtensionFromFileName(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toContain(wrd.csystem);
    });

    /**
     * @function removeFileExtensionFromFileName_inValidInputDataBoolean
     * @description Tests the business rules function removeFileExtensionFromFileName with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveFileExtensionFromFileName_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.cascertainMatchingFilenames, () => {
    /**
     * @function ascertainMatchingFilenames_validDataString
     * @description Tests the business rules function ascertainMatchingFilenames with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cascertainMatchingFilenames_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = obj_con.xmlPath();
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.ascertainMatchingFilenames(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(true);
    });

    /**
     * @function ascertainMatchingFilenames_inValidDataInputDataString
     * @description Tests the business rules function ascertainMatchingFilenames with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cascertainMatchingFilenames_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = obj_con.xmlPath();
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.ascertainMatchingFilenames(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function ascertainMatchingFilenames_inValidDataInputMetaDataString
     * @description Tests the business rules function ascertainMatchingFilenames with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cascertainMatchingFilenames_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.ascertainMatchingFilenames(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function ascertainMatchingFilenames_inValidInputDataBoolean
     * @description Tests the business rules function ascertainMatchingFilenames with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cascertainMatchingFilenames_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.csupportedFileFormatsAre, () => {
    /**
     * @function supportedFileFormatsAre_validDataString
     * @description Tests the business rules function supportedFileFormatsAre with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = obj_con.xmlPath();
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.supportedFileFormatsAre(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("XML, CSV, JSON");
    });

    /**
     * @function supportedFileFormatsAre_inValidDataInputDataString
     * @description Tests the business rules function supportedFileFormatsAre with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = obj_con.xmlPath();
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
      });

    /**
     * @function supportedFileFormatsAre_inValidDataInputMetaDataString
     * @description Tests the business rules function supportedFileFormatsAre with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
    });

    /**
     * @function supportedFileFormatsAre_inValidInputDataBoolean
     * @description Tests the business rules function supportedFileFormatsAre with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
    });

    /**
     * @function supportedFileFormatsAre_inValidInputDataInteger
     * @description Tests the business rules function supportedFileFormatsAre with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
    });

    /**
     * @function supportedFileFormatsAre_inValidInputMetaDataInteger
     * @description Tests the business rules function supportedFileFormatsAre with a invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
    });

    /**
     * @function supportedFileFormatsAre_inValidInputMetaDataInteger
     * @description Tests the business rules function supportedFileFormatsAre with a invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.csupportedFileFormatsAre_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.supportedFileFormatsAre(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("XML, CSV, JSON");
    });
});

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Tests the positive and negative test cases of the removeXnumberOfFoldersFromEndOfPath
 * @date 2023/05/02
 */
describe(tst_con.cremoveXnumberOfFoldersFromEndOfPath, () => {
    /**
     * @function removeXnumberOfFoldersFromEndOfPath_validDataString
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = obj_con.xmlPath();
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe(obj_con.xmlPath());
    });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidDataInputDataString
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = obj_con.xmlPath();
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("dfxg24346dfg");
      });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(obj_con.xmlPath());
    });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidInputDataInteger
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid integer input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputDataInteger, () => {
        // Arrange
        let inputData = 4567;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(4567);
    });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.removeXnumberOfFoldersFromEndOfPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function removeXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger
     * @description Tests the business rules function removeXnumberOfFoldersFromEndOfPath with a invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cremoveXnumberOfFoldersFromEndOfPath_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
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
 * @date 2023/05/02
 */
describe(tst_con.cgetFirstTopLevelFolderFromPath, () => {
    /**
     * @function getFirstTopLevelFolderFromPath_validDataString
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a valid input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_validDataString, () => {
      // Arrange
      let inputData = obj_con.xmlPath();
      let inputMetaData = obj_con.xmlPath();
  
      // Act
      rulesLibrary.initRulesLibrary();
      let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
        inputData,
        inputMetaData
      );
  
      // Assert
      expect(returnData).toBe("testData");
    });

    /**
     * @function getFirstTopLevelFolderFromPath_inValidDataInputDataString
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a invalid string input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_inValidDataInputDataString, () => {
        // Arrange
        let inputData = "dfxg24346dfg";
        let inputMetaData = obj_con.xmlPath();
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
      });

    /**
     * @function getFirstTopLevelFolderFromPath_inValidDataInputMetaDataString
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a invalid string inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_inValidDataInputMetaDataString, () => {
        // Arrange
        let inputData = obj_con.xmlPath();
        let inputMetaData = "dfxg24346dfg";
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("testData");
    });

    /**
     * @function getFirstTopLevelFolderFromPath_inValidInputDataBoolean
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a invalid boolean input.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputDataBoolean, () => {
        // Arrange
        let inputData = false;
        let inputMetaData = [1,2,3,4,5];
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe("");
    });

    /**
     * @function getFirstTopLevelFolderFromPath_inValidInputMetaDataInteger
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a invalid integer inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = 4567;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });

    /**
     * @function getFirstTopLevelFolderFromPath_inValidInputMetaDataInteger
     * @description Tests the business rules function getFirstTopLevelFolderFromPath with a invalid boolean inputMetaData.
     * @author Json Howard
     * @date 2023/05/02
     */
    test(tst_con.cgetFirstTopLevelFolderFromPath_inValidInputMetaDataInteger, () => {
        // Arrange
        let inputData = [1,2,3,4,5];
        let inputMetaData = false;
    
        // Act
        rulesLibrary.initRulesLibrary();
        let returnData = fileStringParsing.getFirstTopLevelFolderFromPath(
          inputData,
          inputMetaData
        );
    
        // Assert
        expect(returnData).toBe(false);
    });
});