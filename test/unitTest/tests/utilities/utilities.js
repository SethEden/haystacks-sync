/**
 * @file utilities.js
 * @module utilities
 * @description Contains many re-usable utilities.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/08/10
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';

const {bas, num, wrd, gen, biz} = hayConst;

/**
 * @function basePath
 * @description Get base folder path for unit test.
 * @author Seth Hollingsead
 * @date 2023/04/06
 * @NOTE This function doesn't belong here.
 */
export const basePath = () => {
    let url = import.meta.url;
    
    url = url.replace(wrd.cfile + bas.cColon + bas.cForwardSlash + bas.cForwardSlash + bas.cForwardSlash, "");
    let resUrl = '';
    let urlArray = url.split(bas.cForwardSlash);
    for(const element of urlArray) {
        resUrl += element;
        if(element === wrd.cunit + wrd.cTest)
            break;
        resUrl += bas.cForwardSlash;
    }
    return resUrl;
};