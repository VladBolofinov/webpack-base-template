module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "parser": '@typescript-eslint/parser',
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/semi": 0,
        "@typescript-eslint/indent": [2,4],
        "spaced-comment": 0,
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": 0,
        "@typescript-eslint/strict-boolean-expressions": 0
    }
}
