import {SchemaType} from 'sanity'

import {TYPE_NAME_FORMAT} from '../constants'

export function createValueSchemaTypeName(schemaType: SchemaType): string {
  return `${schemaType.name}${TYPE_NAME_FORMAT.suffix}`
}
