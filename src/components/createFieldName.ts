import {TYPE_NAME_FORMAT} from '../constants'

export function createFieldName(name: string, addValue = false): string {
  return addValue
    ? [TYPE_NAME_FORMAT.prefix, name, TYPE_NAME_FORMAT.suffix].join(``)
    : [TYPE_NAME_FORMAT.prefix, name].join(``)
}
