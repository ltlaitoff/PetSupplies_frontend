interface ThemeSwitchDataBase {
	id: number
	type: string
}

interface ThemeSwitchDataDark extends ThemeSwitchDataBase {
	id: 0
	type: 'dark'
}

interface ThemeSwitchDataAuto extends ThemeSwitchDataBase {
	id: 1
	type: 'auto'
}

interface ThemeSwitchDataLight extends ThemeSwitchDataBase {
	id: 2
	type: 'light'
}

export type Theme = Readonly<
	ThemeSwitchDataDark | ThemeSwitchDataAuto | ThemeSwitchDataLight
>
