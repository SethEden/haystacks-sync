'use strict';
/* eslint-disable no-undef */
/**
 * @file themeBroker.test.js
 * @module themeBroker.test
 * @description Unit tests for the themeBroker.js
 * @requires module:themeBroker
 * @requires module:rulesLibrary
 * @requires module:configurator
 * @requires module:testData/themeBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import themeBroker from '../../../../src/brokers/themeBroker.js';
import rulesLibrary from '../../../../src/businessRules/rulesLibrary.js';
import configurator from '../../../../src/executrix/configurator.js';
import * as obj_con from '../../testData/brokers/themeBroker.js';
import * as tst_con from '../constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { bas, sys, wrd, cfg } = hayConst;

/**
 * @function getNamedThemes
 * @description Tests the positive and negative test cases of the getNamedThemes function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetNamedThemes, () => {
    /**
    * @function getNamedThemes_validData
    * @description Tests the brokers.themeBroker.getNamedThemes function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_validData, () => {
        // Arrange
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act
        let returnData = themeBroker.getNamedThemes();

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidString
    * @description Tests the brokers.themeBroker.getNamedThemes function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidString, () => {
        // Arrange
        let input = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemes(input);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidNumber
    * @description Tests the brokers.themeBroker.getNamedThemes function, with an invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidNumber, () => {
        // Arrange
        let input = 123;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemes(input);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidBoolean
    * @description Tests the brokers.themeBroker.getNamedThemes function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidBoolean, () => {
        // Arrange
        let input = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemes(input);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function getNamedThemePath
 * @description Tests the positive and negative test cases of the getNamedThemePath function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetNamedThemePath, () => {
    /**
    * @function getNamedThemePath_validData
    * @description Tests the brokers.themeBroker.getNamedThemePath function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_validData, () => {
        // Arrange
        let themeName = wrd.cbrokers;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemePath(themeName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemePath_inValidString
    * @description Tests the brokers.themeBroker.getNamedThemePath function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_inValidString, () => {
        // Arrange
        let themeName = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemePath(themeName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getNamedThemePath_inValidNumber
    * @description Tests the brokers.themeBroker.getNamedThemePath function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_inValidNumber, () => {
        // Arrange
        let themeName = 546;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemePath(themeName);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function getNamedThemePath_inValidBoolean
    * @description Tests the brokers.themeBroker.getNamedThemePath function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_inValidBoolean, () => {
        // Arrange
        let themeName = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        // Act        
        let returnData = themeBroker.getNamedThemePath(themeName);

        // Assert
        expect(returnData).toBe(false);
    });
});

/**
 * @function loadTheme
 * @description Tests the positive and negative test cases of the loadTheme function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cloadTheme, () => {
    /**
    * @function loadTheme_validData
    * @description Tests the brokers.themeBroker.loadTheme function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cloadTheme_validData, () => {
        // Arrange
        let themePath = obj_con.themePath() + bas.cForwardSlash + wrd.cbrokers;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act      
        let returnData = themeBroker.loadTheme(themePath);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadTheme_inValidString
    * @description Tests the brokers.themeBroker.loadTheme function, with an invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    * @NOTE If this test is implemented and executed it will create a garbage folder in the root folder called '464gsdsfae8f46', therefore this test is not implemented.
    */
    test(tst_con.cloadTheme_inValidString, () => {
        // Arrange
        let themePath = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.cSystem, cfg.cdebugSettings, true);

        // Act
        let returnData = themeBroker.loadTheme(themePath);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadTheme_inValidNumber
    * @description Tests the brokers.themeBroker.loadTheme function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cloadTheme_inValidNumber, () => {
        // Arrange
        let themePath = 546;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act      
        let returnData = themeBroker.loadTheme(themePath);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function loadTheme_inValidBoolean
    * @description Tests the brokers.themeBroker.loadTheme function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cloadTheme_inValidBoolean, () => {
        // Arrange
        let themePath = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act      
        let returnData = themeBroker.loadTheme(themePath);

        // Assert
        expect(returnData).toBeTruthy();
    });
});

/**
 * @function applyTheme
 * @description Tests the positive and negative test cases of the applyTheme function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.capplyTheme, () => {
    /**
    * @function applyTheme_validData
    * @description Tests the brokers.themeBroker.applyTheme function, with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.capplyTheme_validData, () => {
        // Arrange
        let themePath = obj_con.themePath() + bas.cForwardSlash + wrd.cbrokers;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act 
        let loadedThemeData = themeBroker.loadTheme(themePath);
        let returnData = themeBroker.applyTheme(loadedThemeData);

        // Assert
        expect(returnData).toBe(true);
    });

    /**
    * @function applyTheme_inValidString
    * @description Tests the brokers.themeBroker.applyTheme function, with an invalid string data.
    * @result In root path create '464gsdsfae8f46' folder.
    * @author Json Howard
    * @date 2023/04/17
    * @NOTE If this test is implemented and executed it will create a garbage folder in the root folder called '464gsdsfae8f46', therefore this test is not implemented.
    */
    test(tst_con.capplyTheme_inValidString, () => {
        // Arrange
        let themePath = wrd.cHello;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act 
        let loadedThemeData = themeBroker.loadTheme(themePath);
        let returnData = themeBroker.applyTheme(loadedThemeData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function applyTheme_inValidNumber
    * @description Tests the brokers.themeBroker.applyTheme function, with an invalid integer data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.capplyTheme_inValidNumber, () => {
        // Arrange
        let themePath = 546;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act 
        let loadedThemeData = themeBroker.loadTheme(themePath);
        let returnData = themeBroker.applyTheme(loadedThemeData);

        // Assert
        expect(returnData).toBe(false);
    });

    /**
    * @function applyTheme_inValidBoolean
    * @description Tests the brokers.themeBroker.applyTheme function, with an invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.capplyTheme_inValidBoolean, () => {
        // Arrange
        let themePath = false;
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        // Act 
        let loadedThemeData = themeBroker.loadTheme(themePath);
        let returnData = themeBroker.applyTheme(loadedThemeData);

        // Assert
        expect(returnData).toBe(false);
    });
});
