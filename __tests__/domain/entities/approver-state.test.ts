import {expect, test} from '@jest/globals'
import {Approver, ApproverState} from '../../../src/domain/entities'

test('only count valid approvers amongst all approvals', async () => {
  const approver_1 = new Approver('1')
  const approver_2 = new Approver('2')
  const approver_3 = new Approver('3')
  const approver_4 = new Approver('4')
  const approver_5 = new Approver('5')

  const approvers = [approver_1, approver_2, approver_3]
  const approvals = [approver_1, approver_2, approver_4, approver_5]
  const state = new ApproverState(approvers, approvals)

  expect(state.numberOfValidApprovals()).toEqual(2)
})

test("don't count duplicate approvals from valid approvers", async () => {
  const approver_1 = new Approver('1')
  const approver_2 = new Approver('2')
  const approver_3 = new Approver('3')
  const approver_4 = new Approver('4')
  const approver_5 = new Approver('5')

  const approvers = [approver_1, approver_2, approver_3]
  const approvals = [
    approver_1,
    approver_1,
    approver_1,
    approver_2,
    approver_4,
    approver_5
  ]
  const state = new ApproverState(approvers, approvals)

  expect(state.numberOfValidApprovals()).toEqual(2)
})
