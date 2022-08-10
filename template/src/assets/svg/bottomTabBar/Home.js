import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {colors} from '~/components';
import {fontSize} from '~utils';

const Home = ({width, height, color}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20.4 9.7V17.7C20.4 18.5 19.7 19.2 18.9 19.2H15.9C15.1 19.2 14.4 18.5 14.4 17.7V14.8C14.4 13.6 13.4 12.6 12.2 12.6C11 12.6 10 13.6 10 14.8V17.7C10 18.5 9.3 19.2 8.5 19.2H5.5C4.7 19.2 4 18.5 4 17.7V9.7C4 9.2 4.2 8.8 4.6 8.5L11.4 3.3C11.9 2.9 12.7 2.9 13.2 3.3L20 8.5C20.1 8.8 20.4 9.2 20.4 9.7Z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
//propTypes
Home.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

//defaultProps
Home.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
  color: colors.color9,
};
export default Home;
