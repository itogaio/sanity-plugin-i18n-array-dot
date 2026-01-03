import {PluginConfig} from './types'

export const TYPE_NAME_FORMAT = {
  prefix: 'i18nArray.',
  suffix: '.value',
}

export const MAX_COLUMNS = {
  codeOnly: 5,
  titleOnly: 4,
  titleAndCode: 3,
}

export const CONFIG_DEFAULT: Required<PluginConfig> = {
  languages: [],
  select: {},
  defaultLanguages: [],
  fieldTypes: [],
  apiVersion: '2025-10-15',
  buttonLocations: ['field'],
  buttonAddAll: true,
  languageDisplay: 'codeOnly',
}
