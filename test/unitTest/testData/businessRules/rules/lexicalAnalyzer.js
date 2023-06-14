/**
 * @file lexicalAnalyzer.js
 * @module lexicalAnalyzer
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Vlad Sorokin
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Vlad Sorokin. All rights reserved
 */

// Internal imports
import * as tst_con from '../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, sys, wrd, gen } = hayConst;

export const arrayObjectRandomWords = [{"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"},{"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}];
export const RandomParameters = "<?xml version='1.0' encoding='UTF-8'?><CommandWorkflows></CommandWorkflows>";
export const arrayStringRandomText = ["df","xg","24","34","6d","fg"];
export const arrayStringNumbers = bas.ccOpenBracket + bas.c1 + bas.cComa + bas.c2 + bas.cComa + bas.c3 + bas.cCloseBracket;