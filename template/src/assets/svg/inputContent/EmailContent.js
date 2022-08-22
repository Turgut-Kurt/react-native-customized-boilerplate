import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const EmailContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15.8288 8.3125L11.9188 11.4606C11.1789 12.0407 10.1416 12.0407 9.40168 11.4606L5.45813 8.3125"
        stroke="#656F77"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31392 3.21094H14.9562C16.2023 3.22491 17.3883 3.7517 18.238 4.66862C19.0878 5.58554 19.527 6.81255 19.4535 8.06388V14.0478C19.527 15.2991 19.0878 16.5261 18.238 17.443C17.3883 18.3599 16.2023 18.8867 14.9562 18.9007H6.31392C3.63734 18.9007 1.83337 16.7232 1.83337 14.0478V8.06388C1.83337 5.38843 3.63734 3.21094 6.31392 3.21094Z"
        stroke="#656F77"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
//propTypes
EmailContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
EmailContent.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default EmailContent;
