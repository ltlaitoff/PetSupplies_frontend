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
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off'
	}
}
