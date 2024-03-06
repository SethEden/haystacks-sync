'use strict';
/* eslint-disable no-undef */
/**
 * @file advanced.test.js
 * @module advanced.test
 * @description Unit tests for the advanced.js
 * @requires module:rulesLibrary
 * @requires module:advanced
 * @requires module:commandsLibrary
 * @requires module:configurator
 * @requires module:data
 * @requires module:testData/dataBroker
 * @requires module:testData/stringParsingUtilities
 * @requires module:testData/advanced
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/05/09
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import rulesLibrary from '../../../../../src/businessRules/rulesLibrary.js';
import advanced from '../../../../../src/commandsBlob/commands/advanced.js';
import commandsLibrary from '../../../../../src/commandsBlob/commandsLibrary.js';
import configurator from '../../../../../src/executrix/configurator.js';
import D from '../../../../../src/structures/data.js';
import * as data_con from '../../../testData/brokers/dataBroker.js';
import * as utl_con from '../../../testData/businessRules/rules/stringParsingUtilities.js';
import * as adv_con from '../../../testData/commandsBlob/commands/advanced.js';
import * as tst_con from '../../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect, test } from '@jest/globals';

const { bas, sys, wrd, cfg, cmd } = hayConst;

/**
 * @function commandSequencer
 * @description Tests the positive and negative test cases of the commandSequencer
 * @author Json Howard
 * @date 2023/05/09
*/
describe(tst_con.ccommandSequencer, () => {
  /**
   * @function commandSequencer_validDataString
   * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with a valid input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandSequencer_validDataString, () => {
    // Arrange    
    let inputData = [wrd.cTest + wrd.cCommand + wrd.cSequence + wrd.cALL, cmd.cconvertColors + bas.cSpace + wrd.cHello + bas.cSpace + wrd.cWorld];
    let inputMetaData = '';    
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); // [true, true]
  });

  /**
     * @function commandSequencer_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with an invalid string input.
     * @author Json Howard
     * @date 2023/05/09
     */
  test(tst_con.ccommandSequencer_inValidDataInputDataString, () => {
    // Arrange    
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';   
    rulesLibrary.initRulesLibrary(); 
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act 
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.commandSequencer: The specified command was not found, please enter a valid command and try again. g']
  });

  /**
 * @function commandSequencer_inValidInputDataInteger
 * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with an invalid integer input.
 * @author Json Howard
 * @date 2023/05/09
 */
  test(tst_con.ccommandSequencer_inValidInputDataInteger, () => {
    // Arrange    
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act 
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.commandSequencer: The specified command was not found, please enter a valid command and try again. g']
  });

  /**
   * @function commandSequencer_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandSequencer_inValidInputDataBoolean, () => {
    // Arrange      
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });

  /**
   * @function commandSequencer_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandSequencer_inValidInputDataUndefined, () => {
    // Arrange    
    let inputData = undefined;
    let inputMetaData = '';    
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act  
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });

  /**
   * @function commandSequencer_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.advanced.commandSequencer function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandSequencer_inValidInputDataNaN, () => {
    // Arrange    
    let inputData = NaN;
    let inputMetaData = '';    
    rulesLibrary.initRulesLibrary();
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    // Act  
    let returnData = advanced.commandSequencer(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); 
  });
});

/**
 * @function workflow
 * @description Tests the positive and negative test cases of the workflow
 * @author Json Howard
 * @date 2023/05/09
 */
describe(tst_con.cworkflow, () => {
  /**
   * @function workflow_validDataString
   * @description Tests the commandsBlob.commands.advanced.workflow function, with a valid input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_validDataString, () => {
    // Arrange      
    let inputData = [wrd.call + wrd.cSystem + wrd.cWorkflows, wrd.cworkflow];
    let inputMetaData = '';  
    rulesLibrary.initRulesLibrary();    

    // Act      
    let returnData = advanced.workflow(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });

  /**
   * @function workflow_inValidDataInputDataString
   * @description Tests the commandsBlob.commands.advanced.workflow function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.workflow(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });

  /**
   * @function workflow_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.advanced.workflow function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.workflow(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });

  /**
   * @function workflow_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.advanced.workflow function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.workflow(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });

  /**
   * @function workflow_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.advanced.workflow function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_inValidInputDataUndefined, () => {
  // Arrange
  let inputData = undefined;
  let inputMetaData = '';
  rulesLibrary.initRulesLibrary();

  // Act        
  let returnData = advanced.workflow(
    inputData,
    inputMetaData
  );

  // Assert
  expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });

  /**
   * @function workflow_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.advanced.workflow function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cworkflow_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.workflow(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.workflow: The specified workflow: wrkflo, was not found in either the system defined workflows, or client defined workflows. Please enter a valid workflow name and try again.']
  });
});

/**
 * @function businessRule
 * @description Tests the positive and negative test cases of the businessRule
 * @author Json Howard
 * @date 2023/05/09
 */
describe(tst_con.cbusinessRule, () => {
  /**
   * @function businessRule_validDataString
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with a valid input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_validDataString, () => {
    // Arrange
    let inputData = [wrd.call + wrd.cSystem + wrd.cWorkflows, wrd.cworkflow];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.businessRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, undefined]
  });

  /**
   * @function businessRule_inValidDataInputDataString
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.businessRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, undefined]
  });

  /**
   * @function businessRule_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.businessRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, undefined]
  });

  /**
   * @function businessRule_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.businessRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, undefined]
  });

  /**
   * @function businessRule_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_inValidInputDataUndefined, () => {
  // Arrange
  let inputData = undefined;
  let inputMetaData = '';
  rulesLibrary.initRulesLibrary();

  // Act        
  let returnData = advanced.businessRule(
    inputData,
    inputMetaData
  );

  // Assert
  expect(returnData).toBeTruthy(); //[true, undefined]
  });

  /**
   * @function businessRule_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.advanced.businessRule function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.cbusinessRule_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.businessRule(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, undefined]
  });
});

/**
 * @function commandGenerator
 * @description Tests the positive and negative test cases of the commandGenerator
 * @author Json Howard
 * @date 2023/05/09
 */

describe(tst_con.ccommandGenerator, () => {
  /**
   * @function commandGenerator_validDataString
   * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with a valid input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandGenerator_validDataString, () => {
    // Arrange
    let inputData = [wrd.cTest + wrd.cCommand + wrd.cSequence + wrd.cALL, cmd.cconvertColors + bas.cSpace + wrd.cHello + bas.cSpace + wrd.cWorld];
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    configurator.setConfigurationSetting(wrd.csystem, cfg.csecondaryCommandDelimiter, bas.cComa);
    commandsLibrary.initCommandsLibrary();
    D[sys.cCommandQueue] = [];

    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'WARNING: advanced.commandGenerator: The specified command:  was not found, please enter a valid command and try again.']
  });

  /**
     * @function commandGenerator_inValidDataInputDataString
     * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with an invalid string input.
     * @author Json Howard
     * @date 2023/05/09
     */
  test(tst_con.ccommandGenerator_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act    
    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandGenerator_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandGenerator_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandGenerator_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandGenerator_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandGenerator_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandGenerator_inValidInputDataUndefined, () => {
    // Arrange
    let inputData = undefined;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandGenerator_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.advanced.commandGenerator function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandGenerator_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.commandGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });
});

/**
 * @function commandAliasGenerator
 * @description Tests the positive and negative test cases of the commandAliasGenerator
 * @author Json Howard
 * @date 2023/05/09
 */
describe(tst_con.ccommandAliasGenerator, () => {
  /**
   * @function commandAliasGenerator_validDataString
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with a valid input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_validDataString, () => {
    // Arrange
    let inputData = adv_con.arrayStringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act      
    let returnData = advanced.commandAliasGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandAliasGenerator_inValidDataInputDataString
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with an invalid string input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_inValidDataInputDataString, () => {
    // Arrange
    let inputData = data_con.stringRandomText;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.commandAliasGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandAliasGenerator_inValidInputDataInteger
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with an invalid integer input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_inValidInputDataInteger, () => {
    // Arrange
    let inputData = 4567;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.commandAliasGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandAliasGenerator_inValidInputDataBoolean
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with an invalid boolean input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_inValidInputDataBoolean, () => {
    // Arrange
    let inputData = false;
    let inputMetaData = utl_con.stringRandomText1;
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.commandAliasGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandAliasGenerator_inValidInputDataUndefined
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with an invalid undefined input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_inValidInputDataUndefined, () => {
  // Arrange
  let inputData = undefined;
  let inputMetaData = '';
  rulesLibrary.initRulesLibrary();

  // Act        
  let returnData = advanced.commandAliasGenerator(
    inputData,
    inputMetaData
  );

  // Assert
  expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });

  /**
   * @function commandAliasGenerator_inValidInputDataNaN
   * @description Tests the commandsBlob.commands.advanced.commandAliasGenerator function, with an invalid NaN input.
   * @author Json Howard
   * @date 2023/05/09
   */
  test(tst_con.ccommandAliasGenerator_inValidInputDataNaN, () => {
    // Arrange
    let inputData = NaN;
    let inputMetaData = '';
    rulesLibrary.initRulesLibrary();

    // Act        
    let returnData = advanced.commandAliasGenerator(
      inputData,
      inputMetaData
    );

    // Assert
    expect(returnData).toBeTruthy(); //[true, 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.']
  });
});
