/**
 * @file timeComputation.js
 * @module timeComputation
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

const { bas, gen, num, sys, wrd } = hayConst;

export const stringRandomDate = num.c20 + num.c23 + bas.cDash + num.c05 + bas.cDash + num.c08;
export const stringRandomDate1 = num.c20 + num.c24 + bas.cDash + num.c05 + bas.cDash + num.c08;
