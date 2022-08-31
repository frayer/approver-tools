import * as fs from 'fs'
import * as YAML from 'yaml'

import {ApprovalsRepository} from '../domain/ports'

export class FileApproversRepository implements ApprovalsRepository {
  constructor(readonly path: string) {}

  findAll(): string[] {
    const contents = YAML.parse(this.readYAML())
    return contents.approvers
  }

  private readYAML(): string {
    return fs.readFileSync(this.path, 'utf-8')
  }
}
