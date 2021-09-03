module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
    },
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    'no-extra-parens': [
      'error',
      'all',
      {
        'nestedBinaryExpressions': false,
      },
    ],
    'class-methods-use-this': 'error',
    'curly': [
      'error',
      'multi-line',
    ],
    'default-case': 'error',
    'array-callback-return': 'error',
    'dot-location': [
      'error',
      'object',
    ],
    'dot-notation': [
      'error',
      {
        'allowKeywords': false,
      },
    ],
    'eqeqeq': [
      'error',
      'always',
    ],
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-empty-function': [
      'error',
      {
        'allow': [ 
          'constructors',
        ],
      },
    ],
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-labels': 'error',
    'no-implicit-coercion': [
      'error',
      {
        'allow': ['!!'],
      },
    ],
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-multi-spaces': [
      'error',
      {
        'ignoreEOLComments': true,
        'exceptions': {
          'ImportDeclaration': true,
          'VariableDeclaration': true,
        },
      },
    ],
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'radix': 'error',
    'require-await': 'error',
    'wrap-iife': 'error',
    'yoda': [
      'error',
      'never',
      {
        'exceptRange': true,
      },
    ],
    'strict': 'error',
    'no-shadow': [
      'error',
      {
        'builtinGlobals': true,
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'camelcase': [
      'error',
      {
        'ignoreDestructuring': true,
      },
    ],
    'array-bracket-newline': [
      'error',
      {
        'multiline': true,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'singleValue': false,
      },
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    'block-spacing': 'error',
    '@typescript-eslint/brace-style': 'error',
    '@typescript-eslint/comma-dangle': [
      'error',
      'always-multiline',
    ],
    '@typescript-eslint/comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': [
      'error',
      'never',
    ],
    'func-call-spacing': 'error',
    'func-names': [
      'error',
      'never',
    ],
    'func-style': 'error',
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    'implicit-arrow-linebreak': 'error',
    'key-spacing': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    'lines-between-class-members': 'error',
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        'ignoreChainWithDepth': 3,
      },
    ],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
      },
    ],
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': 'error',
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'semi-style': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    '@typescript-eslint/space-before-function-paren': 'error',
    '@typescript-eslint/space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false,
      },
    ],
    'switch-colon-spacing': 'error',
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'prefer-rest-params': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-useless-constructor': 'error',
    'no-useless-computed-key': 'error',
  },
};
