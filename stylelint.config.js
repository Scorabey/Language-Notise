/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern':
      '^[a-z0-9]+(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$',

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
