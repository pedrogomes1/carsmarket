import { colors } from '@/styles/theme'
import Svg, { Path } from 'react-native-svg'

interface RegisterSVG {
  fill?: string
}

export function RegisterSVG({ fill = colors.blue_100 }: RegisterSVG) {
  return (
    <Svg width="20" height="24" viewBox="0 0 18 22" fill="none">
      <Path
        d="M16.5 13.25V10.625C16.5 8.76104 14.989 7.25 13.125 7.25H11.625C11.0037 7.25 10.5 6.74632 10.5 6.125V4.625C10.5 2.76104 8.98896 1.25 7.125 1.25H5.25M9 10.25V16.25M12 13.25H6M7.5 1.25H2.625C2.00368 1.25 1.5 1.75368 1.5 2.375V19.625C1.5 20.2463 2.00368 20.75 2.625 20.75H15.375C15.9963 20.75 16.5 20.2463 16.5 19.625V10.25C16.5 5.27944 12.4706 1.25 7.5 1.25Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
