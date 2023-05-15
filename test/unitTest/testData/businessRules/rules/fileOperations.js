/**
 * @file fileOpertions.js
 * @module fileOpertions
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/03
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd, gen } = hayConst;

/**
 * @function xmlPath
 * @description get xml path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const xmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function testXmlPath
 * @description get test xml path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const testXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cxml;
    return baseUrl;
}

/**
 * @function xmlFolder
 * @description get xml folder to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const xmlFolder = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash;
    return baseUrl;
}

/**
 * @function csvPath
 * @description get csv path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const csvPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.ccsv;
    return baseUrl;
}

/**
 * @function jsonPath
 * @description get json path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const jsonPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.cjson;
    return baseUrl;
}

/**
 * @function commonFolderPath
 * @description get common folder path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const commonFolderPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cbrokers + bas.cForwardSlash;
    return baseUrl;
}

/**
 * @function zipPath
 * @description get zip path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const zipPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.ctest + bas.cDot + gen.czip;
    return baseUrl;
}

/**
 * @function packageFolder
 * @description get package folder path to are used fileOperation.test.js for unit test
 * @author Json Howard
 * @date 2023/05/03
 */
export const packageFolder = () => {
    let baseUrl = tst_con.basePath();
    console.log(baseUrl)
    baseUrl += bas.cForwardSlash + wrd.cpackages + bas.cForwardSlash;
    return baseUrl;
}