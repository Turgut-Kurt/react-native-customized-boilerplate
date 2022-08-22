import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const PasswordContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.0548 8.66331V6.69523C15.0548 4.39165 13.1866 2.52348 10.883 2.52348C8.57943 2.51339 6.70393 4.3724 6.69385 6.6769V6.69523V8.66331"
        stroke="#656F77"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3762 19.4851H7.372C5.4525 19.4851 3.896 17.9296 3.896 16.0091V12.0776C3.896 10.1571 5.4525 8.60156 7.372 8.60156H14.3762C16.2957 8.60156 17.8522 10.1571 17.8522 12.0776V16.0091C17.8522 17.9296 16.2957 19.4851 14.3762 19.4851Z"
        stroke="#656F77"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.8743 13.0234V15.0594"
        stroke="#656F77"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
//propTypes
PasswordContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
PasswordContent.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default PasswordContent;
