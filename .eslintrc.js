module.exports = {
	"parser": "babel-eslint",
	"extends": [
		"plugin:jsx-a11y/recommended",
		"react-app",
		"airbnb",
		"prettier"
	],
	"plugins": [
		"jsx-a11y"
	],
	"rules": {
		"array-callback-return": [0],
		"no-console": [0],
		"no-debugger": [0],
		"no-param-reassign": [0],
		"class-methods-use-this": [0],
		"react/no-danger": [0],
		"react/no-unescaped-entities": [0],
		"react/no-array-index-key": [0],
		"react/prop-types": [1, { "skipUndeclared": true }],
		"react/forbid-prop-types": [0],
		"no-use-before-define": ["error", { "functions": false }],
		"react/jsx-wrap-multilines": [0],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"jsx-a11y/href-no-hash": [0], // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/397
		"jsx-a11y/media-has-caption": [0],
		"jsx-a11y/label-has-for": [2, {
			"components": ["FormField", "Form.Field"],
			"required": {
					"some": ["nesting", "id"]
			},
			"allowChildren": false
		}],
		"react/destructuring-assignment": [0],
		"react/jsx-one-expression-per-line": [0],
		"import/no-unresolved": [
			"error",
			{
				"ignore": [ "@" ]
			}
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				"devDependencies": [
					"storybook/**",
					"src/**/*.test.js"
				]
			}
		]
	}
}
