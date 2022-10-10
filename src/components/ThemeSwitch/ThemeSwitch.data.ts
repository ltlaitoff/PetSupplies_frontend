/// <reference types="vite-svg-loader" />

import DarkIcon from '../../assets/icons/ThemeSwitch/dark.svg?component'
import AutoIcon from '../../assets/icons/ThemeSwitch/auto.svg?component'
import LightIcon from '../../assets/icons/ThemeSwitch/light.svg?component'
import { ThemeSwitchData } from './ThemeSwitch.interfaces'

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
