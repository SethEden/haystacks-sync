/**
 * @file dataStringParsing.js
 * @module dataStringParsing
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/04/17
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd, gen } = hayConst;

/**
 * @function dataStringParsingXmlPath
 * @description Get xml path to be used in dataStringParsing.test.js for unit tests:
 * loadDataFile_validDataString
 * loadDataFile_inValidDataInputMetaDataString
 * saveDataFile_validDataString
 * saveDataFile_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/04/17
 */
export const dataStringParsingXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}