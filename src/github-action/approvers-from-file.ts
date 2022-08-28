import * as core from '@actions/core'

/*
 * 'approvers-from-file' Primary adapter for invocation from a GitHub Action
 */
async function run(): Promise<void> {
  try {
    const approversFilePath = core.getInput('path')
    core.debug(`retrieving approvers from ${approversFilePath} ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true
    core.setOutput('approvers', [])
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
