/**
 * @file commandBroker.js
 * @module commandBroker
 * @description Contains many re-usable test object constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Json Howard
 * @date 2023/04/11
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const { bas, biz, cfg, gen, msg, num, sys, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// brokers.commandBroker.
const namespacePrefix = wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

/**
 * @function testHelloWorldCommand
 * @description print 'hello world' message as a test command.
 * @return {string}
 * @author Json Howard
 * @date 2024/02/05
 */
function testHelloWorldCommand() {
    let functionName = testHelloWorldCommand.name;
    console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    let returnData = wrd.chello + bas.cSpace + wrd.cWorld;
    console.log(msg.creturnDataIs + returnData);
    console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
    return returnData;
}

// Objects name
/**
 * @function testCommandsLibrary
 * @description test commands library.
 * @return {string}
 * @author Json Howard
 * @date 2024/02/05
 */
export const testCommandsLibrary = {
    // Test commands
    // ***********************************************
    // Test commands in order
    // ***********************************************
    ['testHelloWorldCommand']: () => testHelloWorldCommand(),
    ['name']: () => testHelloWorldCommand(),
    ['application']: () => testHelloWorldCommand(),
    ['version']: () => testHelloWorldCommand(),
    ['about']: () => testHelloWorldCommand(),
};

export const JsonObjectArrayOfStrings_01 = [
    { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" },
    { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" },
    { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" },
    { "constants": "c,const", "Generator": "g,gen,genrtr", "List": "l,lst" }
];
export const JsonObjectOfStrings_02 = {
    "hello": "world", "constant": {
        "Aliases": "g,gen,world,hello"
    }, "List": "hello"
};
export const JsonObjectOfStrings_03 = {
    "hello": { "Aliases": "world" },
    "constant": { "Aliases": "g,gen,world" },
    "List": { "Aliases": "hello" }
};
