// globalStyle system

import {StyleSheet} from 'react-native';
import {calcWidth} from '~utils';

const gs = StyleSheet.create({
  globalWidth: {width: calcWidth(100) - 40},
  posRel: {
    position: 'relative',
  },
  posAbs: {
    position: 'absolute',
  },
  aife: {
    alignItems: 'flex-end',
  },
  aic: {
    alignItems: 'center',
  },
  aifs: {
    alignItems: 'flex-start',
  },
  jcfe: {
    justifyContent: 'flex-end',
  },
  jcc: {
    justifyContent: 'center',
  },
  jcfs: {
    justifyContent: 'flex-start',
  },
  jcsb: {
    justifyContent: 'space-between',
  },
  jcsa: {
    justifyContent: 'space-around',
  },
  jcse: {
    justifyContent: 'space-evenly',
  },
  jcfsaifs: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  jccaic: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  jccaicasc: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  jcfeaife: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textCc: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tac: {textAlign: 'center'},
  fdr: {
    flexDirection: 'row',
  },
  fdc: {
    flexDirection: 'column',
  },
  fdcr: {
    flexDirection: 'column-reverse',
  },
  fdrc: {
    flexDirection: 'row-reverse',
  },
  asfs: {
    alignSelf: 'flex-start',
  },
  asc: {
    alignSelf: 'center',
  },
  asfe: {
    alignSelf: 'flex-end',
  },

  //zIndex
  zi0: {
    zIndex: 0,
  },
  zi1: {
    zIndex: 1,
  },
  zi2: {
    zIndex: 2,
  },
  zi3: {
    zIndex: 3,
  },
  zi4: {
    zIndex: 4,
  },

  //shadows

  shadow1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  shadow2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.57,
    shadowRadius: 5.19,
    elevation: 10,
  },
  shadow3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.57,
    shadowRadius: 1.19,
    elevation: 1,
  },
  shadow4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.57,
    shadowRadius: 1.19,
    elevation: 4,
  },
  //shadows top
  shadowTop: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    elevation: 24,
  },
  bottomTabShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  newShadowTop: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12.0,
    elevation: 1,
  },
  noShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
// exported global Styles
export {gs};
