module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['unused-imports', 'sort-keys-fix'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': 'webpack',
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	rules: {
		curly: 'error',
		'lines-between-class-members': ['error', 'always'],
		'member-access': 'off',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-dupe-keys': 'error',
		'no-eval': 'error',
		'no-restricted-syntax': ['error', 'TSEnumDeclaration'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'function',
				next: 'function',
			},
			{
				blankLine: 'always',
				prev: 'block-like',
				next: 'block-like',
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '='],
				},
				block: {
					balanced: true,
				},
				markers: ['/'],
			},
		],
		'react/display-name': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'unused-imports/no-unused-imports': 'error',
	},
	overrides: [
		{
			files: ['**/*.ts?(x)'],
			rules: {
				'no-any': 'off',
				'no-dupe-class-members': 'off',
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{
						accessibility: 'no-public',
					},
				],
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-empty-interface': 0,
				'@typescript-eslint/no-explicit-any': 'error',
			},
		},
	],
};
