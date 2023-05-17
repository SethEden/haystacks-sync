/**
 * @file advanced.js
 * @module advanced
 * @description Contains many re-usable test object constants.
 * @requires module:test.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Json Howard
 * @date 2023/05/09
 * @copyright Copyright © 2023-… by Json Howard. All rights reserved
 */
// Internal imports
import * as tst_con from '../../../tests/constants/test.constants.js';

// External imports
import hayConst from '@haystacks/constants';

const { bas, wrd } = hayConst;

/**
 * @function workflowPath
 * @description Get workflow path to be used in advanced.test.js for unit test
 * getWorkflow_validData
 * getWorkflow_inValidString
 * getWorkflow_inValidNumber
 * getWorkflow_inValidBoolean
 * doesWorkflowExist_validData
 * doesWorkflowExist_inValidString
 * doesWorkflowExist_inValidNumber
 * doesWorkflowExist_inValidBoolean
 * doesWorkflowExistInWorkflowData_validData
 * doesWorkflowExistInWorkflowData_inValidWorkflowDataString
 * doesWorkflowExistInWorkflowData_inValidWorkflowNameString
 * doesWorkflowExistInWorkflowData_inValidNumber
 * doesWorkflowExistInWorkflowData_inValidBoolean
 * searchWorkflow_validData
 * searchWorkflow_inValidWorkflowDataString
 * searchWorkflow_inValidWorkflowNameString
 * searchWorkflow_inValidNumber
 * searchWorkflow_inValidBoolean
 * getAllWorkflows_validData
 * getAllWorkflows_inValidString
 * getAllWorkflows_inValidNumber
 * getAllWorkflows_inValidBoolean
 * getWorkflowNamespaceDataObject_validData
 * getWorkflowNamespaceDataObject_inValidWorkflowDataStructureString
 * getWorkflowNamespaceDataObject_inValidNamespaceToFindString
 * getWorkflowNamespaceDataObject_inValidNumber
 * getWorkflowNamespaceDataObject_inValidBoolean
 * @author Json Howard
 * @date 2023/05/09
 */
export const workflowPath = () => {
    let baseUrl = tst_con.basePath();
    baseUrl += bas.cForwardSlash + wrd.ctestData + bas.cForwardSlash + wrd.cworkflows + bas.cForwardSlash + wrd.carray + wrd.cParsing;
    return baseUrl;
}