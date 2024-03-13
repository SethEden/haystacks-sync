'use strict';
/* eslint-disable no-undef */
/**
 * @file configuration.test.js
 * @module configuration.test
 * @description Unit tests for the configuration.js
 * @requires module:rulesLibrary
 * @requires module:configuration
 * @requires module:configurator
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/configuration
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/05/08
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import configuration from '../../../../../src/commandsBlob/commands/configuration.js';
import configurator from '../../../../../src/executrix/configurator.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as utl_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as obj_con from '../../../testData/commandsBlob/commands/configuration.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, cfg, phn, wrd, gen } = hayConst;

// /**
//  * @function saveConfiguration
//  * @description Tests the positive and negative test cases of the saveConfiguration
//  * @author Json Howard
//  * @date 2023/05/08
//  * @note inputData is not used for this function.
//  */
// describe(tst_con.csaveConfiguration, () => {
//   /**
//    * @function saveConfiguration_validDataString
//    * @description Tests the commandsBlob.commands.configuration.saveConfiguration function, with a valid input.
//    * @author Json Howard
//    * @date 2023/05/08
//    */
//   test(tst_con.csaveConfiguration_validDataString, () => {
//     // Arrange
//     let inputData = [wrd.cTest + wrd.cCommand + wrd.cSequence + wrd.cALL, wrd.cworkflow];
//     let inputMetaData = '';
//     let testPath = obj_con.testConfigPath();
//     rulesLibrary.initRulesLibrary();
//     configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, testPath);

//     // Act      
//     let returnData = configuration.saveConfiguration(
//       inputData,
//       inputMetaData
//     );

//     // Assert
//     expect(returnData).toBeTruthy(); //[true, true]
//   });
  
//   /**
//    * @function saveConfiguration_inValidInputMetaDataUndefined
//    * @description Tests the commandsBlob.commands.configuration.saveConfiguration function, with an invalid input undefined.
//    * @author Json Howard
//    * @date 2023/05/08
//    */
//   test(tst_con.csaveConfiguration_inValidInputMetaDataUndefined, () => {
//     // Arrange
//     let inputData = undefined;
//     let inputMetaData = '';
//     let testPath = obj_con.testConfigPath();
//     rulesLibrary.initRulesLibrary();
//     configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, testPath);

//     // Act      
//     let returnData = configuration.saveConfiguration(
//       inputData,
//       inputMetaData
//     );

//     // Assert
//     expect(returnData).toBeTruthy(); //[true, true]
//   });
  
//   /**
//    * @function saveConfiguration_inValidInputMetaDataNaN
//    * @description Tests the commandsBlob.commands.configuration.saveConfiguration function, with a valid input.
//    * @author Json Howard
//    * @date 2023/05/08
//    */
//   test(tst_con.csaveConfiguration_inValidInputMetaDataNaN, () => {
//     // Arrange
//     let inputData = NaN;
//     let inputMetaData = '';
//     let testPath = obj_con.testConfigPath();
//     rulesLibrary.initRulesLibrary();
//     configurator.setConfigurationSetting(wrd.csystem, cfg.cappConfigPath, testPath);

//     // Act      
//     let returnData = configuration.saveConfiguration(
//       inputData,
//       inputMetaData
//     );

//     // Assert
//     expect(returnData).toBeTruthy(); //[true, true]
//   });
// });

/**
 * @function changeConfigurationSetting
 * @description Tests the positive and negative test cases of the changeConfigurationSetting
 * @author Json Howard
 * @date 2023/05/08
 */
describe(tst_con.cchangeConfigurationSetting, () => {
  /**
   * @function changeConfigurationSetting_validDataString
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_validDataString, () => {
    // Arrange
    let inputData = [wrd.cTest + wrd.cCommand + wrd.cSequence + wrd.cALL, wrd.cworkflow];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeConfigurationSetting_inValidDataInputDataString
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeConfigurationSetting_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeConfigurationSetting_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeConfigurationSetting_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeConfigurationSetting_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.configuration.changeConfigurationSetting function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeConfigurationSetting_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = configuration.changeConfigurationSetting(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });
});

/**
 * @function listConfigurationThemes
 * @description Tests the positive and negative test cases of the listConfigurationThemes
 * @author Json Howard
 * @date 2023/05/08
 * NOTE: Happy path unit test will be tested by integration test using the test harness client workflow: TestCommandSequenceALL. 
 */
describe(tst_con.clistConfigurationThemes, () => {
  /**
   * @function listConfigurationThemes_validDataString
   * @description Tests the commandsBlob.commands.configuration function listConfigurationThemes with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   * NOTE: Happy path unit test will be tested by integration test using the test harness client workflow: TestCommandSequenceALL. 
   */
  test(tst_con.clistConfigurationThemes_validDataString, () => {
    // Arrange
    let inputData = '';
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = configuration.listConfigurationThemes(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, true]
  });
});

/**
 * @function changeDebugConfigurationTheme
 * @description Tests the positive and negative test cases of the changeDebugConfigurationTheme
 * @author Json Howard
 * @date 2023/05/08
*/
describe(tst_con.cchangeDebugConfigurationTheme, () => {
  /**
   * @function changeDebugConfigurationTheme_validDataString
   * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with a valid input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_validDataString, () => {
    // Arrange
    let inputData = [wrd.cTest + wrd.cCommand + wrd.cSequence + wrd.cALL, gen.ccmd + phn.cSeq + wrd.cworkflow];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act    
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // [true, 'ERROR: The specified theme name was not found in the current list of supported themes.']
  });

  /**
     * @function changeDebugConfigurationTheme_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with an invalid string input.
     * @author Json Howard
     * @date 2023/05/08
     */
  test(tst_con.cchangeDebugConfigurationTheme_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act    
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act      
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act      
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act      
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });

  /**
   * @function changeDebugConfigurationTheme_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.configuration.changeDebugConfigurationTheme function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/08
   */
  test(tst_con.cchangeDebugConfigurationTheme_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, bas.cForwardSlash);

    // Act      
    let returnData = configuration.changeDebugConfigurationTheme(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'ERROR: Invalid entry, please enter a valid configuration namespace to change, and a value to assign to the configuration setting.']
  });
});
