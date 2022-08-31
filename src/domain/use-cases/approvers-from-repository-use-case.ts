import {Approver} from '../entities'
import {ApproversRepository} from '../ports/approvers-repository'

export interface ApproversResponse {
  approvers: Approver[]
}

export class ApproversFromRepositoryUseCase {
  constructor(readonly approversRepository: ApproversRepository) {}

  execute(): ApproversResponse {
    const approverLoginNames = this.approversRepository.findAll()
    const approvers = approverLoginNames.map(name => new Approver(name))
    return {approvers}
  }
}
