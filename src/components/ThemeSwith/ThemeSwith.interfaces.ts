import { FunctionalComponent, SVGAttributes } from 'vue'

interface ThemeSwitchDataBase {
	id: number
	type: string
	icon: FunctionalComponent<SVGAttributes>
	additionalClasses?: string[]
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

export type ThemeSwitchData = Readonly<
	ThemeSwitchDataDark | ThemeSwitchDataAuto | ThemeSwitchDataLight
>
