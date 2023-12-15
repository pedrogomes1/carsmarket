import { colors, spacing } from '@/styles/theme'
import Svg, { Path } from 'react-native-svg'
interface HomeSVGProps {
  fill?: string
  size?: number
}

export function HomeSVG({
  fill = colors.blue_100,
  size = spacing[24],
}: HomeSVGProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <Path
        d="M17.0271 21H15.103H6.89696H4.97291C3.05488 21 1.5 19.4607 1.5 17.5618V8.84736C1.50739 8.09967 1.86226 7.39702 2.46203 6.94256L9.01342 1.6853C10.1662 0.771566 11.8049 0.771566 12.9577 1.6853L19.538 6.93303C20.1355 7.38935 20.4898 8.09083 20.5 8.83784V17.5618C20.5 19.4607 18.9451 21 17.0271 21Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
