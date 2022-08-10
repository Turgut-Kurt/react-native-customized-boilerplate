import {getUserAction, updateUser} from '~/modules/auth/actions';

import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      getUserAction,
      updateUser,
    },
    dispatch,
  );
};

export default useActions;
