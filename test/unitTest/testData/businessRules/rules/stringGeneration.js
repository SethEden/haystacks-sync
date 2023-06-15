/**
 * @file stringGeneration.js
 * @module stringGeneration
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';

const { bas, gen, num, sys, wrd } = hayConst;

export const stringRandomSymbols = '!@#$%^&*';
export const stringRandomBrackets = bas.cOpenBracket + bas.cComa + bas.cSpace + bas.cCloseBracket + bas.cComa + bas.Space + bas.cOpenParenthesis + bas.cComa + bas.cSpace + bas.ccCloseParenthesis;
export const stringRandomURL = wrd.ctest + bas.cDot + gen.ccom;
