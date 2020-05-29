module.exports = {
  extends: [
    'react-app'
  ],
  "rules": {
    "curly": [2, "multi-line"],

    "jsx-quotes": [2, "prefer-double"],
    "no-param-reassign": 0,
    "line-comment-position": 0,
    "no-inline-comments": 0,
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "prefer-template": 0,
    "multiline-ternary": 0,
    "react/no-multi-comp": 0,
    "no-negated-condition": 0,
    "react/prop-types": 0,
    "react/jsx-indent": 0,
    "no-loop-func": 0,

    "react-hooks/rules-of-hooks": 1,
    "react-hooks/exhaustive-deps": 1
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "mocha": true
  },
  "globals": {
    "$": true,
    "process": true,
    "__dirname": true
  }
}
