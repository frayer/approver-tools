import {expect, test} from '@jest/globals'
import {ApproversRepository} from '../../../src/domain/ports/approvers-repository'
import {ApproversFromRepositoryUseCase} from '../../../src/domain/use-cases/approvers-from-repository-use-case'

test('command response for repository', async () => {
  const mockRepository: ApproversRepository = {
    findAll: () => ['username_1', 'username_2']
  }
  const command = new ApproversFromRepositoryUseCase(mockRepository)

  expect(command.execute().approvers.length).toEqual(2)
  expect(command.execute().approvers[0].login).toEqual('username_1')
  expect(command.execute().approvers[1].login).toEqual('username_2')
})
