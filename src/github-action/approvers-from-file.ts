import * as core from '@actions/core'
import {approversFromFileUseCaseFactory} from '../domain/use-cases/factories'

/*
 * 'approvers-from-file' Primary adapter for invocation from a GitHub Action
 */
async function run(): Promise<void> {
  try {
    const inputs = {
      approversFilePath: core.getInput('path')
    }
    core.debug(`retrieving approvers from ${inputs.approversFilePath} ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    const command = approversFromFileUseCaseFactory(inputs.approversFilePath)
    const result = command.execute()

    core.setOutput('approvers', result.approvers)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
