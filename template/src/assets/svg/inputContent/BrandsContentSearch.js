import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const BrandsContentSearch = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM16.3336 15.273C16.0407 14.9801 15.5659 14.9801 15.273 15.273C14.9801 15.5659 14.9801 16.0408 15.273 16.3336L16.3336 15.273ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM20.5303 19.4697L16.3336 15.273L15.273 16.3336L19.4697 20.5303L20.5303 19.4697Z"
        fill="#3F3D56"
      />
    </Svg>
  );
};
//propTypes
BrandsContentSearch.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
BrandsContentSearch.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default BrandsContentSearch;
