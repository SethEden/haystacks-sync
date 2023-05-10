'use strict';
/* eslint-disable no-undef */
/**
 * @file themeBroker.test.js
 * @module themeBroker.test
 * @description Unit tests for the themeBroker.js
 * @requires module:themeBroker
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/jest|jest}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// Internal imports
import themeBroker from "../../../../src/brokers/themeBroker.js";
import configurator from "../../../../src/executrix/configurator.js";
import rulesLibrary from "../../../../src/businessRules/rulesLibrary.js";
import D from "../../../../src/structures/data.js";
import * as tst_con from '../constants/test.constants.js';
import * as obj_con from '../../testData/brokers/themeBroker.js';

// External imports
import hayConst from '@haystacks/constants';
import { describe, expect } from '@jest/globals';

const { bas, sys, wrd, cfg } = hayConst;
// const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// businessRules.rules.arrayParsing.auxiliaryArrayParsing.
// const namespacePrefix = sys.cbusinessRules + bas.cDot + wrd.crules + bas.cDot + wrd.carray + wrd.cParsing + bas.cDot + baseFileName + bas.cDot;

/**
 * @function getNamedThemes
 * @description Tests the positive and negative test cases of the getNamedThemes function.
 * @author Json Howard
 * @date 2023/04/17
 */
describe(tst_con.cgetNamedThemes, () => {
    /**
    * @function getNamedThemes_validData
    * @description Tests the business rules function getNamedThemes with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_validData, () => {
        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        let returnData = themeBroker.getNamedThemes();

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidString
    * @description Tests the business rules function getNamedThemes with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidString, () => {
        // Arrange
        let input = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        let returnData = themeBroker.getNamedThemes(input);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidNumber
    * @description Tests the business rules function getNamedThemes with a invalid number data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidNumber, () => {
        // Arrange
        let input = 123;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        let returnData = themeBroker.getNamedThemes(input);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemes_inValidBoolean
    * @description Tests the business rules function getNamedThemes with a invalid boolean data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemes_inValidBoolean, () => {
        // Arrange
        let input = false;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

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
    * @description Tests the business rules function getNamedThemePath with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_validData, () => {
        // Arrange
        let themeName = wrd.cbrokers;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

        let returnData = themeBroker.getNamedThemePath(themeName);

        // Assert
        expect(returnData).toBeTruthy();
    });

    /**
    * @function getNamedThemePath_inValidString
    * @description Tests the business rules function getNamedThemePath with a invalid string data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cgetNamedThemePath_inValidString, () => {
        // Arrange
        let themeName = wrd.cHello;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, cfg.cframeworkThemesPath, obj_con.themePath());

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
    * @description Tests the business rules function loadTheme with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.cloadTheme_validData, () => {
        // Arrange
        let themePath = obj_con.themePath() + bas.cForwardSlash + wrd.cbrokers;

        // Act
        rulesLibrary.initRulesLibrary();
        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

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
    * @description Tests the business rules function applyTheme with a valid data.
    * @author Json Howard
    * @date 2023/04/17
    */
    test(tst_con.capplyTheme_validData, () => {
        // Arrange
        let themePath = obj_con.themePath() + bas.cForwardSlash + wrd.cbrokers;

        // Act
        rulesLibrary.initRulesLibrary();

        configurator.setConfigurationSetting(wrd.csystem, sys.cthemeConfigPath, themePath);
        configurator.setConfigurationSetting(wrd.csystem, cfg.cdebugSettings, true);

        let loadedThemeData = themeBroker.loadTheme(themePath);
        let returnData = themeBroker.applyTheme(loadedThemeData);

        // Assert
        expect(returnData).toBe(true);
    });
});