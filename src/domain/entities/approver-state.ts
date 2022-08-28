import {Approver} from './approver'

export class ApproverState {
  constructor(readonly approvers: Approver[], readonly approvals: Approver[]) {}

  numberOfValidApprovals(): number {
    return this.uniqueApprovalLoginNames().reduce((count, approvalLogin) => {
      return count + (this.isApprover(approvalLogin) ? 1 : 0)
    }, 0)
  }

  private isApprover(login: string): boolean {
    return this.approvers.filter(byLogin(login)).length > 0
  }

  private uniqueApprovalLoginNames(): string[] {
    return this.uniqueLoginNames(this.approvals)
  }

  private uniqueLoginNames(approvers: Approver[]): string[] {
    const loginNames = approvers.map(a => a.login)
    return [...new Set(loginNames)]
  }
}

function byLogin(login: string) {
  return (approver: Approver) => approver.login === login
}
