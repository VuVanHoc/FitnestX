import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function LightVolumeOff(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M14.533 9.467l-6.82 6.82c-.176-.103-.344-.168-.494-.177-1.296-.094-1.8.056-2.51-.55-.764-.654-.708-2.399-.708-3.677s-.056-3.022.709-3.675c.709-.607 1.213-.448 2.51-.55 1.296-.103 4.039-4.06 6.156-2.809.859.7 1.092 2.006 1.157 4.618z"
        stroke={props.stroke || '#130F26'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.533 13.917c-.037 2.874-.261 4.273-1.157 5-.98.58-2.09.047-3.134-.708M4.001 20l3.713-3.713 6.82-6.82L20 4"
        stroke={props.stroke || '#130F26'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LightVolumeOff;
