import {getUserAction, updateUser} from '~/modules/auth/actions';

import {bindActionCreators} from 'redux';
import {changeLang} from '~/modules/settings/slice';
import {useDispatch} from 'react-redux';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      getUserAction,
      updateUser,
      changeLang,
    },
    dispatch,
  );
};

export default useActions;
