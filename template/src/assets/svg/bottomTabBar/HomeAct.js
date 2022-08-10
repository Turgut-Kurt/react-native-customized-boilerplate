import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const HomeAct = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.2 10.5985V18.5985C20.2 19.3985 19.5 20.0985 18.7 20.0985H15.7C14.9 20.0985 14.2 19.3985 14.2 18.5985V15.6984C14.2 14.4984 13.1999 13.4985 11.9999 13.4985C10.7999 13.4985 9.79999 14.4984 9.79999 15.6984V18.5985C9.79999 19.3985 9.09999 20.0985 8.29999 20.0985H5.29999C4.49999 20.0985 3.79999 19.3985 3.79999 18.5985V10.5985C3.79999 10.0985 3.99996 9.69845 4.39996 9.39845L11.2 4.19844C11.7 3.79844 12.4999 3.79844 12.9999 4.19844L19.8 9.39845C20 9.69845 20.2 10.0985 20.2 10.5985Z"
        fill={color}
      />
    </Svg>
  );
};
//propTypes
HomeAct.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
HomeAct.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
  color: colors.color8,
};
export default HomeAct;
