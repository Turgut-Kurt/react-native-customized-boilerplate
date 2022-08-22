import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const SavePhoneContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.25 18.01C11.25 18.4242 11.5858 18.76 12 18.76C12.4142 18.76 12.75 18.4242 12.75 18.01H11.25ZM12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C11.5858 17.25 11.25 17.5858 11.25 18H12.75ZM8 3.75H16V2.25H8V3.75ZM17.25 5V19H18.75V5H17.25ZM16 20.25H8V21.75H16V20.25ZM6.75 19V5H5.25V19H6.75ZM8 20.25C7.30964 20.25 6.75 19.6904 6.75 19H5.25C5.25 20.5188 6.48122 21.75 8 21.75V20.25ZM17.25 19C17.25 19.6904 16.6904 20.25 16 20.25V21.75C17.5188 21.75 18.75 20.5188 18.75 19H17.25ZM16 3.75C16.6904 3.75 17.25 4.30964 17.25 5H18.75C18.75 3.48122 17.5188 2.25 16 2.25V3.75ZM8 2.25C6.48122 2.25 5.25 3.48122 5.25 5H6.75C6.75 4.30964 7.30964 3.75 8 3.75V2.25ZM12.75 18.01V18H11.25V18.01H12.75Z"
        fill="#656F77"
      />
    </Svg>
  );
};
//propTypes
SavePhoneContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
SavePhoneContent.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default SavePhoneContent;
