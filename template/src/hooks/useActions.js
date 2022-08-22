import {getUserAction, updateUser} from '~/modules/auth/actions';

import {bindActionCreators} from 'redux';
import {changeLang} from '~/modules/settings/slice';
import {setInitial} from '~/modules/auth/slice';
import {useDispatch} from 'react-redux';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      getUserAction,
      updateUser,
      changeLang,
      setInitial,
    },
    dispatch,
  );
};

export default useActions;
