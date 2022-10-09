export type LanguageType =
	| { id: 0; language: 'ukrainian'; languageCode: 'UA' }
	| { id: 1; language: 'english'; languageCode: 'EN' }

export const LANGUAGES: LanguageType[] = [
	{
		id: 0,
		language: 'ukrainian',
		languageCode: 'UA'
	},
	{
		id: 1,
		language: 'english',
		languageCode: 'EN'
	}
]
