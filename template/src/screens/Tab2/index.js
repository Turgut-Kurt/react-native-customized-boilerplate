import {Button, StyleSheet, View} from 'react-native';
import {catsDataMemo, dogsDataMemo} from '~/modules/auth/selector';
import {changeCats, changeDogs} from '~/modules/auth/slice';
import {useDispatch, useSelector} from 'react-redux';

import {Cats} from '../Cats';
import {Dogs} from '../Dogs';
import React from 'react';
import useActions from '~/hooks/useActions';

const Tab2 = props => {
  const actions = useActions();

  const dogs = useSelector(dogsDataMemo);
  const catsData = useSelector(catsDataMemo);
  const dispatch = useDispatch();
  const {Container} = styles;
  return (
    <View style={Container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '20%',
          borderWidth: 2,
        }}>
        <Dogs dogsData={dogs} />
        <Cats catsData={catsData} />
        <Button title="changeCats" onPress={() => dispatch(changeCats())} />
        <Button title="changeDogs" onPress={() => dispatch(changeDogs())} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1},
});

export {Tab2};
