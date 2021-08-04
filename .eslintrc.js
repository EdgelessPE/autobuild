module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint/eslint-plugin'
    ],
    extends: [
        "xo",
        "xo-typescript"
    ],
    rules: {
        'eqeqeq': 0,
        '@typescript-eslint/no-require-imports': 0,
        'indent': ['warn', 2],
        '@typescript-eslint/indent': ['warn', 2],
        '@typescript-eslint/prefer-readonly': 0,
        '@typescript-eslint/object-curly-spacing': 0,
    }
}