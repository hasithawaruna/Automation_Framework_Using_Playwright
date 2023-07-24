/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','spellcheck'],
    root: true,
    rules: {
        'spellcheck/spell-checker': [
          'error',
          {
            comments: true,
            strings: true,
            identifiers: false,
            lang: 'en_US',
            skipWords: ['TODO', 'FIXME','checkbox','Checkboxes','mce','ifr','Gapstars','#tinymce','Dropdown','dotenv','goto','firefox','viewports','webkit','msedge'], // Add any words to skip here
            skipIfMatch: [
              // Add any regular expressions to skip here
            ],
          },
        ],
      },
  };