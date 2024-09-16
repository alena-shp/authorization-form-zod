import classNames from 'classnames'
import { type TTextSize, type TTextType, ETextSize, ETextType } from '@/shared/types'

import $ from './styles.module.scss'

type Props = Readonly<{
	content: string
	size?: TTextSize
	type?: TTextType
}>

export const Text = ({ content, size = ETextSize.middle, type = ETextType.text }: Props) => {
	return <p className={classNames($.title, $[`title_${size}`], $[`title_${type}`])}>{content}</p>
}
