import {FileApproversRepository} from '../../adapters/file-approvers-repository'
import {ApproversFromRepositoryUseCase} from './approvers-from-repository-use-case'

export function approversFromFileUseCaseFactory(
  path: string
): ApproversFromRepositoryUseCase {
  const repository = new FileApproversRepository(path)
  return new ApproversFromRepositoryUseCase(repository)
}
