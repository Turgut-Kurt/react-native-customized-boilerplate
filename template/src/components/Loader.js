import {Modal, StyleSheet, View} from 'react-native';

import Lottie from 'lottie-react-native';
import React from 'react';
import {calcWidth} from '~/utils';
import {loader} from '~/assets';

const Loader = props => {
  const {loading} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <Lottie source={loader} autoPlay loop />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    height: calcWidth(40),
    width: calcWidth(40),
  },
});
export default styles;

export {Loader};
