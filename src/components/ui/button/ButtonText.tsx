import { Typography, TypographyProps } from '../typography'

export function ButtonText({ text, ...rest }: TypographyProps): JSX.Element {
  return <Typography text={text} {...rest} />
}
