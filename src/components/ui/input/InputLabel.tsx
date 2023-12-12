import { Typography, TypographyProps } from '../typography'

export function InputLabel({ text, ...rest }: TypographyProps): JSX.Element {
  return <Typography text={text} {...rest} />
}
