import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function LightLocation(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M14.5 10.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M12 21c-1.199 0-7.5-5.102-7.5-10.437C4.5 6.387 7.857 3 12 3c4.142 0 7.5 3.387 7.5 7.563C19.5 15.898 13.198 21 12 21z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LightLocation;
