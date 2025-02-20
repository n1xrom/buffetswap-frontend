import styled from 'styled-components'
import { Button as PancakeButton } from '@buffet-dex/uikit'
import { variant } from 'styled-system'
import { BaseButtonProps } from './types'
import { scaleVariants, styleVariants } from './theme'

const Button = styled(PancakeButton)<BaseButtonProps>`
  letter-spacing: 0;
  border: 0;
  border-radius: 16px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 700;
  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
`

export default Button
