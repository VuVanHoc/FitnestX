import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function LightArrowRight2(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" color="#fff" {...props}>
      <Path
        d="M8.5 5l7 7-7 7"
        stroke={props.stroke || '#130F26'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LightArrowRight2;
