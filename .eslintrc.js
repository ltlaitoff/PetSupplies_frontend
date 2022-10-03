module.exports = {
	env: {
		node: true
	},

	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],

	parser: 'vue-eslint-parser',

	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'no-console': 'warn',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off'
	}
}
