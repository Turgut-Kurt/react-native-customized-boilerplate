import Svg, {Path, Rect} from 'react-native-svg';
import {calcWidth, fontSize} from '~utils';

import PropTypes from 'prop-types';
import React from 'react';

const LoginContent = ({width, height, style}) => {
  return (
    <Svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 375 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="375" height="176" fill="white" />
      <Path
        d="M147.162 112.78C144.442 112.78 142.342 112.48 140.862 111.88C139.382 111.28 138.362 110.44 137.802 109.36C137.242 108.28 136.962 107 136.962 105.52C136.962 104.8 137.022 104 137.142 103.12C137.262 102.2 137.402 101.16 137.562 100C138.282 95.6 138.642 91.7 138.642 88.3C138.642 86.06 138.542 84.16 138.342 82.6C138.182 81 137.662 79.48 136.782 78.04C136.622 77.8 136.482 77.56 136.362 77.32C136.242 77.04 136.182 76.82 136.182 76.66C136.182 76.18 136.462 75.68 137.022 75.16C137.582 74.64 138.262 74.2 139.062 73.84C139.862 73.48 140.622 73.3 141.342 73.3C142.702 73.3 143.542 73.84 143.862 74.92C144.222 76 144.402 77.54 144.402 79.54C144.402 80.3 144.322 81.52 144.162 83.2C144.002 84.84 143.762 86.94 143.442 89.5C143.122 91.98 142.882 94.12 142.722 95.92C142.562 97.72 142.482 99.16 142.482 100.24C142.482 101.84 142.662 103.06 143.022 103.9C143.422 104.7 144.062 105.26 144.942 105.58C145.822 105.9 147.062 106.06 148.662 106.06C150.382 106.06 152.022 105.92 153.582 105.64C155.142 105.32 156.662 104.84 158.142 104.2C158.342 104.12 158.522 104.06 158.682 104.02C158.842 103.98 158.982 103.96 159.102 103.96C159.462 103.96 159.802 104.18 160.122 104.62C160.442 105.06 160.602 105.68 160.602 106.48C160.602 108.24 159.642 109.62 157.722 110.62C155.162 112.06 151.642 112.78 147.162 112.78ZM172.365 112.78C169.605 112.78 167.385 112.04 165.705 110.56C164.065 109.04 163.245 106.82 163.245 103.9C163.245 102.54 163.425 101.22 163.785 99.94C164.185 98.66 164.705 97.46 165.345 96.34C164.705 96.74 164.225 96.94 163.905 96.94C163.425 96.94 163.085 96.68 162.885 96.16C162.725 95.6 162.645 95.06 162.645 94.54C162.645 93.62 162.825 92.9 163.185 92.38C163.585 91.82 163.965 91.4 164.325 91.12C165.165 90.4 166.485 89.62 168.285 88.78C170.085 87.9 172.245 87.46 174.765 87.46C178.205 87.46 180.865 88.42 182.745 90.34C184.665 92.26 185.625 94.94 185.625 98.38C185.625 101.06 185.065 103.5 183.945 105.7C182.825 107.86 181.265 109.58 179.265 110.86C177.305 112.14 175.005 112.78 172.365 112.78ZM174.225 106.66C176.225 106.66 177.905 106.04 179.265 104.8C180.665 103.52 181.365 101.84 181.365 99.76C181.365 97.6 180.665 96.06 179.265 95.14C177.865 94.22 176.245 93.76 174.405 93.76C173.565 93.76 172.805 93.84 172.125 94C171.445 94.16 170.805 94.36 170.205 94.6C169.645 95.4 169.145 96.3 168.705 97.3C168.265 98.3 168.045 99.4 168.045 100.6C168.045 102.6 168.645 104.12 169.845 105.16C171.045 106.16 172.505 106.66 174.225 106.66ZM197.756 128.56C194.756 128.56 192.376 127.94 190.616 126.7C188.856 125.46 187.976 123.86 187.976 121.9C187.976 120.46 188.416 119.18 189.296 118.06C190.216 116.94 191.416 116.38 192.896 116.38C193.736 116.38 194.156 116.62 194.156 117.1C194.156 117.38 194.096 117.7 193.976 118.06C193.896 118.42 193.856 118.78 193.856 119.14C193.856 120.26 194.496 121.08 195.776 121.6C197.056 122.16 198.596 122.44 200.396 122.44C201.516 122.44 202.656 122.32 203.816 122.08C204.976 121.84 205.936 121.46 206.696 120.94C207.496 120.46 207.896 119.8 207.896 118.96C207.896 118.04 207.436 117.36 206.516 116.92C205.596 116.48 204.436 116.14 203.036 115.9C201.636 115.7 200.196 115.5 198.716 115.3C197.276 115.14 196.036 114.86 194.996 114.46C193.676 114.02 192.696 113.48 192.056 112.84C191.416 112.2 191.096 111.38 191.096 110.38C191.096 108.5 192.236 107 194.516 105.88C193.196 105.2 192.196 104.24 191.516 103C190.876 101.76 190.556 100.38 190.556 98.86C190.556 96.9 191.056 95.06 192.056 93.34C193.096 91.62 194.616 90.22 196.616 89.14C198.656 88.02 201.196 87.46 204.236 87.46C205.596 87.46 206.976 87.6 208.376 87.88C209.776 88.12 210.936 88.6 211.856 89.32C212.816 90 213.296 91 213.296 92.32C213.296 92.8 213.196 93.34 212.996 93.94C212.796 94.5 212.416 94.78 211.856 94.78C211.616 94.78 211.296 94.74 210.896 94.66C210.496 94.54 210.136 94.44 209.816 94.36C209.896 94.76 209.956 95.2 209.996 95.68C210.076 96.16 210.116 96.66 210.116 97.18C210.116 99.54 209.316 101.68 207.716 103.6C206.116 105.48 203.776 106.6 200.696 106.96C199.576 107.04 198.736 107.18 198.176 107.38C197.656 107.54 197.396 107.84 197.396 108.28C197.396 108.68 197.636 108.98 198.116 109.18C198.596 109.34 199.216 109.46 199.976 109.54C202.416 109.74 204.576 110.08 206.456 110.56C208.336 111.04 209.796 111.8 210.836 112.84C211.916 113.92 212.456 115.44 212.456 117.4C212.456 119.68 211.776 121.64 210.416 123.28C209.096 124.96 207.316 126.26 205.076 127.18C202.836 128.1 200.396 128.56 197.756 128.56ZM200.036 101.74C201.876 101.74 203.316 101.24 204.356 100.24C205.396 99.24 205.916 97.94 205.916 96.34C205.916 95.9 205.876 95.46 205.796 95.02C205.716 94.54 205.636 94.14 205.556 93.82C204.916 93.62 204.296 93.5 203.696 93.46C203.096 93.38 202.516 93.34 201.956 93.34C199.836 93.34 198.176 93.74 196.976 94.54C195.776 95.34 195.176 96.44 195.176 97.84C195.176 99.08 195.616 100.04 196.496 100.72C197.376 101.4 198.556 101.74 200.036 101.74ZM226.155 112.78C223.395 112.78 221.175 112.04 219.495 110.56C217.855 109.04 217.035 106.82 217.035 103.9C217.035 102.54 217.215 101.22 217.575 99.94C217.975 98.66 218.495 97.46 219.135 96.34C218.495 96.74 218.015 96.94 217.695 96.94C217.215 96.94 216.875 96.68 216.675 96.16C216.515 95.6 216.435 95.06 216.435 94.54C216.435 93.62 216.615 92.9 216.975 92.38C217.375 91.82 217.755 91.4 218.115 91.12C218.955 90.4 220.275 89.62 222.075 88.78C223.875 87.9 226.035 87.46 228.555 87.46C231.995 87.46 234.655 88.42 236.535 90.34C238.455 92.26 239.415 94.94 239.415 98.38C239.415 101.06 238.855 103.5 237.735 105.7C236.615 107.86 235.055 109.58 233.055 110.86C231.095 112.14 228.795 112.78 226.155 112.78ZM228.015 106.66C230.015 106.66 231.695 106.04 233.055 104.8C234.455 103.52 235.155 101.84 235.155 99.76C235.155 97.6 234.455 96.06 233.055 95.14C231.655 94.22 230.035 93.76 228.195 93.76C227.355 93.76 226.595 93.84 225.915 94C225.235 94.16 224.595 94.36 223.995 94.6C223.435 95.4 222.935 96.3 222.495 97.3C222.055 98.3 221.835 99.4 221.835 100.6C221.835 102.6 222.435 104.12 223.635 105.16C224.835 106.16 226.295 106.66 228.015 106.66Z"
        fill="#3F3D56"
      />
    </Svg>
  );
};
//propTypes
LoginContent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

//defaultProps
LoginContent.defaultProps = {
  width: calcWidth(100),
  height: fontSize(176),
};
export default LoginContent;
