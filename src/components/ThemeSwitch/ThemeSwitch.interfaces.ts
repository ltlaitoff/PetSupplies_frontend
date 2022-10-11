import { FunctionalComponent, SVGAttributes } from 'vue'
import { Theme } from '../../types'

export type ThemeSwithIcon = FunctionalComponent<SVGAttributes>
export type ThemeSwithAdditionaClasses = string[]

export type ThemeSwitchData = Readonly<
	Theme & {
		icon: ThemeSwithIcon
		additionalClasses?: ThemeSwithAdditionaClasses
	}
>
