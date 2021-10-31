import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function LightVolumeUp(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M2.502 12c-.003 1.23-.058 2.907.703 3.534.71.585 1.209.434 2.504.53 1.297.095 4.033 3.906 6.142 2.7 1.088-.855 1.17-2.649 1.17-6.764s-.082-5.909-1.17-6.764C9.741 4.029 7.006 7.84 5.71 7.937c-1.295.095-1.794-.055-2.504.53-.76.626-.706 2.303-.703 3.533z"
        stroke={props.stroke || '#130F26'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.584 5.904a10.657 10.657 0 010 12.192M17.081 8.314a7.399 7.399 0 010 7.372"
        stroke={props.stroke || '#130F26'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LightVolumeUp;
