/**
 * @file fileStringParsing.js
 * @module fileStringParsing
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/02
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, gen, num, sys, wrd } = hayConst;

/**
 * @function fileStringParsingXmlPath
 * @description Get xml path to be used in fileStringParsing.test.js for unit tests:
 * getFileNameFromPath_validDataString
 * getFileNameFromPath_inValidDataInputMetaDataString
 * getFileExtension_validDataString
 * getFileExtension_inValidDataInputMetaDataString
 * removeDotFromFileExtension_validDataString
 * removeDotFromFileExtension_inValidDataInputMetaDataString
 * removeFileExtensionFromFileName_validDataString
 * removeFileExtensionFromFileName_inValidDataInputMetaDataString
 * ascertainMatchingFilenames_validDataString
 * ascertainMatchingFilenames_inValidDataInputDataString
 * ascertainMatchingFilenames_inValidDataInputMetaDataString
 * supportedFileFormatsAre_validDataString
 * supportedFileFormatsAre_inValidDataInputDataString
 * supportedFileFormatsAre_inValidDataInputMetaDataString
 * removeXnumberOfFoldersFromEndOfPath_validDataString
 * removeXnumberOfFoldersFromEndOfPath_inValidDataInputDataString
 * removeXnumberOfFoldersFromEndOfPath_inValidDataInputMetaDataString
 * getFirstTopLevelFolderFromPath_validDataString
 * getFirstTopLevelFolderFromPath_inValidDataInputDataString
 * getFirstTopLevelFolderFromPath_inValidDataInputMetaDataString
 * @author Json Howard
 * @date 2023/05/02
 */
export const fileStringParsingXmlPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.csystem + bas.cDot + gen.cxml;
    return baseUrl;
}