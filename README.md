> This is a fork of sanity-plugin-internationalized-array.
>
> You can check [the original plugin](https://github.com/sanity-io/sanity-plugin-internationalized-array).

# Summary
Provides shorter type names than official InternationalizedArray like `internationalizedArrayString`.

It also reduces the awkwardness of dot notation in type names like `internatinalizedArrayTranslation.pageValue`.

# Caution
⚠️ Exercise caution when changing type names in existing datasets.

⚠️ This is an experiment.

# Example (Dot notation)

・Parent Type: i18nArray.translation.page

・Value Type: i18nArray.translation.page.value

# Add this plugin (Provisional)

```ts
import {defineConfig} from 'sanity'
// import {i18nArrayDot} from './plugins/sanity-plugin-i18n-array-dot/src'
// import {i18nArrayDot} from './sanity/plugins/sanity-plugin-i18n-array-dot/src'

export const defineConfig({
  // ...
  plugins: [
    i18nArrayDot({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
        {id: 'ja', title: 'Japanese'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    })
  ]
})
```

# Other things

[Just check original](https://github.com/sanity-io/sanity-plugin-internationalized-array)


# Original license

[MIT](LICENSE) © Simeon Griggs
