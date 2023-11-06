/**
 * @file integrationTests.js
 * @module configuration
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/08/22
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */

export const validValidateCommandAliasesArray = [{
    "commandSequencer": {
        "Name": "commandSequencer",
        "Aliases": "CommandS,CommandSeq,CommandSequencer,CmdS,CmdSeq,CmdSequencer,CSeq",
        "Description": "Takes a sequence of commands/aliases and enqueues all to the command queue."
    },
    "workflow": {
        "Name": "workflow",
        "Aliases": "WorkF,WorkFl,WorkFlo,WorkFlow,WrkF,WrkFl,WrkFlo,WrkFlow,WF,WFl,WFlo",
        "Description": "Loads the specified workflow, calls the command sequencer to get each commands enqueued."
    },
    "businessRule": {
        "Name": "businessRule",
        "Aliases": "BusinessR,BusinessRul,BusinessRule,BusR,BusRul,BusRule,BizR,BizRul,BizRule,BR,BRul",
        "Description": "Executes a user specified business rule and prints the results."
    },
    "commandGenerator": {
        "Name": "commandGenerator",
        "Aliases": "CommandG,CommandGen,CommandGenrtr,CommandGenerator,ComdG,ComdGen,ComdGenrtr,ComdGenerator,CmdG,CmdGen,CmdGenrtr,CmdGenerator",
        "Description": "Generates and enqueues any number of command calls based on user input."
    },
    "commandAliasGenerator": {
        "Name": "commandAliasGenerator",
        "Aliases": "CommandAliasG,CommandAliasGen,CommandAliasGenrtr,CommandAliasGenerator,CommandAlisG,CommandAlisGen,CommandAlisGenrtr,CommandAlisGenerator,CommandAlsG,CommandAlsGen,CommandAlsGenrtr,CommandAlsGenerator,CommandAlG,CommandAlGen,CommandAlGenrtr,CommandAlGenerator,CommandAG,CommandAGen,CommandAGenrtr,CommandAGenerator,ComdAliasG,ComdAliasGen,ComdAliasGenrtr,ComdAliasGenerator,ComdAlisG,ComdAlisGen,ComdAlisGenrtr,ComdAlisGenerator,ComdAlsG,ComdAlsGen,ComdAlsGenrtr,ComdAlsGenerator,ComdAlG,ComdAlGen,ComdAlGenrtr,ComdAlGenerator,ComdAG,ComdAGen,ComdAGenrtr,ComdAGenerator,CmdAliasG,CmdAliasGen,CmdAliasGenrtr,CmdAliasGenerator,CmdAlisG,CmdAlisGen,CmdAlisGenrtr,CmdAlisGenerator,CmdAlsG,CmdAlsGen,CmdAlsGenrtr,CmdAlsGenerator,CmdAlG,CmdAlGen,CmdAlGenrtr,CmdAlGenerator,CmdAG,CmdAGen,CmdAGenrtr,CmdAGenerator,CAliasG,CAliasGen,CAliasGenrtr,CAliasGenerator,CAlisG,CAlisGen,CAlisGenrtr,CAlisGenerator,CAlsG,CAlsGen,CAlsGenrtr,CAlsGenerator,CAlG,CAlGen,CAlGenrtr,CAlGenerator,CAG,CAGen,CAGenrtr",
        "Description": "Generates command aliases given a command name and a list of word abbreviations."
    }
}];

export const duplicatedValidateCommandAliasesArray = [{
    "commandSequencer": {
        "Name": "commandSequencer",
        "Aliases": "CommandS,CommandSeq,CommandSequencer,CmdS,CmdSeq,CmdSequencer,CSeq",
        "Description": "Takes a sequence of commands/aliases and enqueues all to the command queue."
    },
    "workflow": {
        "Name": "workflow",
        "Aliases": "WorkF,WorkFl,WorkFlo,WorkFlow,WrkF,WrkFl,WrkFlo,WrkFlow,WF,WFl,WFlo",
        "Description": "Loads the specified workflow, calls the command sequencer to get each commands enqueued."
    },
    "businessRule": {
        "Name": "businessRule",
        "Aliases": "BusinessR,BusinessRul,BusinessRule,BusR,BusRul,BusRule,BizR,BizRul,BizRule,BR,BRul",
        "Description": "Executes a user specified business rule and prints the results."
    },
    "commandGenerator": {
        "Name": "commandGenerator",
        "Aliases": "CommandG,CommandGen,CommandGenrtr,CommandGenerator,ComdG,ComdGen,ComdGenrtr,ComdGenerator,CmdG,CmdGen,CmdGenrtr,CmdGenerator",
        "Description": "Generates and enqueues any number of command calls based on user input."
    },
    "commandAliasGenerator": {
        "Name": "commandAliasGenerator",
        "Aliases": "CommandAliasG,CommandAliasGen,CommandAliasGenrtr,CommandAliasGenerator,CommandAlisG,CommandAlisGen,CommandAlisGenrtr,CommandAlisGenerator,CommandAlsG,CommandAlsGen,CommandAlsGenrtr,CommandAlsGenerator,CommandAlG,CommandAlGen,CommandAlGenrtr,CommandAlGenerator,CommandAG,CommandAGen,CommandAGenrtr,CommandAGenerator,ComdAliasG,ComdAliasGen,ComdAliasGenrtr,ComdAliasGenerator,ComdAlisG,ComdAlisGen,ComdAlisGenrtr,ComdAlisGenerator,ComdAlsG,ComdAlsGen,ComdAlsGenrtr,ComdAlsGenerator,ComdAlG,ComdAlGen,ComdAlGenrtr,ComdAlGenerator,ComdAG,ComdAGen,ComdAGenrtr,ComdAGenerator,CmdAliasG,CmdAliasGen,CmdAliasGenrtr,CmdAliasGenerator,CmdAlisG,CmdAlisGen,CmdAlisGenrtr,CmdAlisGenerator,CmdAlsG,CmdAlsGen,CmdAlsGenrtr,CmdAlsGenerator,CmdAlG,CmdAlGen,CmdAlGenrtr,CmdAlGenerator,CmdAG,CmdAGen,CmdAGenrtr,CmdAGenerator,CAliasG,CAliasGen,CAliasGenrtr,CAliasGenerator,CAlisG,CAlisGen,CAlisGenrtr,CAlisGenerator,CAlsG,CAlsGen,CAlsGenrtr,CAlsGenerator,CAlG,CAlGen,CAlGenrtr,CAlGenerator,CAG,CAGen,CAGenrtr",
        "Description": "Generates command aliases given a command name and a list of word abbreviations."
    },
    "commandSequencer": {
        "Name": "commandSequencer",
        "Aliases": "CommandS,CommandSeq,CommandSequencer,CmdS,CmdSeq,CmdSequencer,CSeq",
        "Description": "Takes a sequence of commands/aliases and enqueues all to the command queue."
    },
    "workflow": {
        "Name": "workflow",
        "Aliases": "WorkF,WorkFl,WorkFlo,WorkFlow,WrkF,WrkFl,WrkFlo,WrkFlow,WF,WFl,WFlo",
        "Description": "Loads the specified workflow, calls the command sequencer to get each commands enqueued."
    },
    "businessRule": {
        "Name": "businessRule",
        "Aliases": "BusinessR,BusinessRul,BusinessRule,BusR,BusRul,BusRule,BizR,BizRul,BizRule,BR,BRul",
        "Description": "Executes a user specified business rule and prints the results."
    },
    "commandGenerator": {
        "Name": "commandGenerator",
        "Aliases": "CommandG,CommandGen,CommandGenrtr,CommandGenerator,ComdG,ComdGen,ComdGenrtr,ComdGenerator,CmdG,CmdGen,CmdGenrtr,CmdGenerator",
        "Description": "Generates and enqueues any number of command calls based on user input."
    },
    "commandAliasGenerator": {
        "Name": "commandAliasGenerator",
        "Aliases": "CommandAliasG,CommandAliasGen,CommandAliasGenrtr,CommandAliasGenerator,CommandAlisG,CommandAlisGen,CommandAlisGenrtr,CommandAlisGenerator,CommandAlsG,CommandAlsGen,CommandAlsGenrtr,CommandAlsGenerator,CommandAlG,CommandAlGen,CommandAlGenrtr,CommandAlGenerator,CommandAG,CommandAGen,CommandAGenrtr,CommandAGenerator,ComdAliasG,ComdAliasGen,ComdAliasGenrtr,ComdAliasGenerator,ComdAlisG,ComdAlisGen,ComdAlisGenrtr,ComdAlisGenerator,ComdAlsG,ComdAlsGen,ComdAlsGenrtr,ComdAlsGenerator,ComdAlG,ComdAlGen,ComdAlGenrtr,ComdAlGenerator,ComdAG,ComdAGen,ComdAGenrtr,ComdAGenerator,CmdAliasG,CmdAliasGen,CmdAliasGenrtr,CmdAliasGenerator,CmdAlisG,CmdAlisGen,CmdAlisGenrtr,CmdAlisGenerator,CmdAlsG,CmdAlsGen,CmdAlsGenrtr,CmdAlsGenerator,CmdAlG,CmdAlGen,CmdAlGenrtr,CmdAlGenerator,CmdAG,CmdAGen,CmdAGenrtr,CmdAGenerator,CAliasG,CAliasGen,CAliasGenrtr,CAliasGenerator,CAlisG,CAlisGen,CAlisGenrtr,CAlisGenerator,CAlsG,CAlsGen,CAlsGenrtr,CAlsGenerator,CAlG,CAlGen,CAlGenrtr,CAlGenerator,CAG,CAGen,CAGenrtr",
        "Description": "Generates command aliases given a command name and a list of word abbreviations."
    }
}
];

export const validValidateWorkflowsArray = [{
    "doesArrayContainCharacter": "cmdgen bizRul,doesArrayContainCharacter,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "removeCharacterFromArray": "cmdgen bizRul,removeCharacterFromArray,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "replaceCharacterAtIndex": "cmdgen bizRul,replaceCharacterAtIndex,aggregateNumericalDifferenceBetweenTwoStrings,[10|$] 4",
    "characterArrayParsing": "cmdSeq wrkflo,doesArrayContainCharacter wrkflo,removeCharacterFromArray wrkflo,replaceCharacterAtIndex"
}
];

export const duplicatedValidateWorkflowsArray = [{
    "doesArrayContainCharacter": "cmdgen bizRul,doesArrayContainCharacter,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "removeCharacterFromArray": "cmdgen bizRul,removeCharacterFromArray,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "replaceCharacterAtIndex": "cmdgen bizRul,replaceCharacterAtIndex,aggregateNumericalDifferenceBetweenTwoStrings,[10|$] 4",
    "characterArrayParsing": "cmdSeq wrkflo,doesArrayContainCharacter wrkflo,removeCharacterFromArray wrkflo,replaceCharacterAtIndex",
    "doesArrayContainCharacter": "cmdgen bizRul,doesArrayContainCharacter,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "removeCharacterFromArray": "cmdgen bizRul,removeCharacterFromArray,$,[the|answer|to|life|the|universe|and|everything|is|$42] 4",
    "replaceCharacterAtIndex": "cmdgen bizRul,replaceCharacterAtIndex,aggregateNumericalDifferenceBetweenTwoStrings,[10|$] 4",
    "characterArrayParsing": "cmdSeq wrkflo,doesArrayContainCharacter wrkflo,removeCharacterFromArray wrkflo,replaceCharacterAtIndex"
}
];