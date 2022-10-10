/// <reference types="vite-svg-loader" />

import DarkIcon from '../../assets/icons/ThemeSwith/dark.svg?component'
import AutoIcon from '../../assets/icons/ThemeSwith/auto.svg?component'
import LightIcon from '../../assets/icons/ThemeSwith/light.svg?component'
import { ThemeSwitchData } from './ThemeSwith.interfaces'

const DATA: Readonly<ThemeSwitchData[]> = [
	{
		id: 0,
		type: 'dark',
		icon: DarkIcon
	},
	{
		id: 1,
		type: 'auto',
		icon: AutoIcon
	},
	{
		id: 2,
		type: 'light',
		icon: LightIcon,
		additionalClasses: ['item22']
	}
]

export default DATA
