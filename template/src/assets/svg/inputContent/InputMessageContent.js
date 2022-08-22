import Svg, {Path} from 'react-native-svg';

import PropTypes from 'prop-types';
import React from 'react';
import {fontSize} from '~utils';

const InputMessageContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 8.75C7.58579 8.75 7.25 9.08579 7.25 9.5C7.25 9.91421 7.58579 10.25 8 10.25V8.75ZM15 10.25C15.4142 10.25 15.75 9.91421 15.75 9.5C15.75 9.08579 15.4142 8.75 15 8.75V10.25ZM8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25V12.75ZM13 14.25C13.4142 14.25 13.75 13.9142 13.75 13.5C13.75 13.0858 13.4142 12.75 13 12.75V14.25ZM15.9325 18.5203C15.5395 18.3893 15.1148 18.6016 14.9838 18.9946C14.8528 19.3876 15.0652 19.8123 15.4581 19.9433L15.9325 18.5203ZM19.1027 20.3676L18.8656 21.0791H18.8656L19.1027 20.3676ZM20.3676 19.1027L21.0791 18.8655L20.3676 19.1027ZM19.9433 15.4581C19.8124 15.0651 19.3876 14.8528 18.9947 14.9837C18.6017 15.1147 18.3893 15.5395 18.5203 15.9324L19.9433 15.4581ZM15.7464 19.7028C16.0792 19.4563 16.1493 18.9866 15.9028 18.6537C15.6563 18.3208 15.1866 18.2508 14.8537 18.4973L15.7464 19.7028ZM18.4834 14.8732C18.2476 15.2137 18.3326 15.6809 18.6731 15.9167C19.0137 16.1525 19.4809 16.0675 19.7167 15.7269L18.4834 14.8732ZM8 10.25H15V8.75H8V10.25ZM8 14.25H13V12.75H8V14.25ZM15.4581 19.9433L18.8656 21.0791L19.3399 19.6561L15.9325 18.5203L15.4581 19.9433ZM21.0791 18.8655L19.9433 15.4581L18.5203 15.9324L19.6561 19.3398L21.0791 18.8655ZM18.8656 21.0791C20.2336 21.5351 21.5352 20.2336 21.0791 18.8655L19.6561 19.3398C19.7213 19.5353 19.5353 19.7212 19.3399 19.6561L18.8656 21.0791ZM11.5 19.25C7.21979 19.25 3.75 15.7802 3.75 11.5H2.25C2.25 16.6086 6.39137 20.75 11.5 20.75V19.25ZM3.75 11.5C3.75 7.21979 7.21979 3.75 11.5 3.75V2.25C6.39137 2.25 2.25 6.39137 2.25 11.5H3.75ZM11.5 3.75C15.7802 3.75 19.25 7.21979 19.25 11.5H20.75C20.75 6.39137 16.6086 2.25 11.5 2.25V3.75ZM15.3 19.1C14.8537 18.4973 14.854 18.4971 14.8543 18.4969C14.8544 18.4968 14.8547 18.4966 14.8548 18.4965C14.8552 18.4962 14.8556 18.4959 14.8559 18.4957C14.8565 18.4952 14.8571 18.4948 14.8576 18.4944C14.8587 18.4937 14.8594 18.4931 14.8599 18.4928C14.8608 18.4922 14.8606 18.4923 14.8592 18.4933C14.8564 18.4952 14.8491 18.5002 14.8372 18.5078C14.8133 18.5232 14.771 18.5492 14.71 18.5826C14.5879 18.6493 14.3907 18.7455 14.1159 18.8441C13.5678 19.0408 12.7033 19.25 11.5 19.25V20.75C12.8814 20.75 13.917 20.5092 14.6226 20.2559C14.9747 20.1296 15.2429 20.0008 15.4295 19.8987C15.5228 19.8477 15.5956 19.8035 15.6483 19.7696C15.6747 19.7527 15.696 19.7383 15.7123 19.727C15.7205 19.7214 15.7274 19.7165 15.7331 19.7125C15.7359 19.7104 15.7384 19.7086 15.7406 19.707C15.7417 19.7062 15.7428 19.7054 15.7437 19.7047C15.7442 19.7044 15.7447 19.704 15.7451 19.7037C15.7453 19.7036 15.7456 19.7033 15.7457 19.7032C15.746 19.703 15.7464 19.7028 15.3 19.1ZM19.25 11.5C19.25 12.6583 19.0418 13.524 18.8428 14.0879C18.7431 14.3704 18.6453 14.5781 18.5764 14.7096C18.5419 14.7754 18.5147 14.822 18.498 14.8494C18.4897 14.863 18.484 14.8719 18.4815 14.8758C18.4802 14.8778 18.4796 14.8786 18.4799 14.8782C18.4801 14.8779 18.4804 14.8774 18.481 14.8766C18.4813 14.8762 18.4816 14.8757 18.482 14.8751C18.4822 14.8748 18.4824 14.8745 18.4827 14.8742C18.4828 14.874 18.4829 14.8738 18.483 14.8737C18.4832 14.8734 18.4834 14.8732 19.1 15.3C19.7167 15.7269 19.7169 15.7267 19.7171 15.7264C19.7171 15.7263 19.7173 15.726 19.7175 15.7258C19.7178 15.7254 19.718 15.725 19.7183 15.7245C19.719 15.7236 19.7196 15.7227 19.7203 15.7216C19.7218 15.7195 19.7234 15.7171 19.7253 15.7143C19.729 15.7088 19.7335 15.702 19.7388 15.6938C19.7494 15.6775 19.7631 15.656 19.7794 15.6292C19.8119 15.5757 19.855 15.5013 19.9049 15.4061C20.0047 15.2157 20.132 14.9422 20.2573 14.5871C20.5082 13.876 20.75 12.8417 20.75 11.5H19.25Z"
        fill="#656F77"
      />
    </Svg>
  );
};
//propTypes
InputMessageContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
InputMessageContent.defaultProps = {
  width: fontSize(24),
  height: fontSize(24),
};
export default InputMessageContent;
