import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const SubjectContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75V7.25ZM16 8.75C16.4142 8.75 16.75 8.41421 16.75 8C16.75 7.58579 16.4142 7.25 16 7.25V8.75ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V11.25ZM16 12.75C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25V12.75ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75V15.25ZM12 16.75C12.4142 16.75 12.75 16.4142 12.75 16C12.75 15.5858 12.4142 15.25 12 15.25V16.75ZM4.25 12C4.25 8.77793 4.75773 6.92793 5.84283 5.84283C6.92793 4.75773 8.77793 4.25 12 4.25V2.75C8.72207 2.75 6.32207 3.24227 4.78217 4.78217C3.24227 6.32207 2.75 8.72207 2.75 12H4.25ZM12 19.75C8.77793 19.75 6.92793 19.2423 5.84283 18.1572C4.75773 17.0721 4.25 15.2221 4.25 12H2.75C2.75 15.2779 3.24227 17.6779 4.78217 19.2178C6.32207 20.7577 8.72207 21.25 12 21.25V19.75ZM19.75 12C19.75 15.2221 19.2423 17.0721 18.1572 18.1572C17.0721 19.2423 15.2221 19.75 12 19.75V21.25C15.2779 21.25 17.6779 20.7577 19.2178 19.2178C20.7577 17.6779 21.25 15.2779 21.25 12H19.75ZM12 4.25C15.2221 4.25 17.0721 4.75773 18.1572 5.84283C19.2423 6.92793 19.75 8.77793 19.75 12H21.25C21.25 8.72207 20.7577 6.32207 19.2178 4.78217C17.6779 3.24227 15.2779 2.75 12 2.75V4.25ZM8 8.75H16V7.25H8V8.75ZM8 12.75H16V11.25H8V12.75ZM8 16.75H12V15.25H8V16.75Z"
        fill="#656F77"
      />
    </Svg>
  );
};
//propTypes
SubjectContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
SubjectContent.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default SubjectContent;