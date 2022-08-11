import {createSelector} from 'reselect';
export const auth = state => state.auth;
export const dogsSelector = createSelector(auth, data => data.dogs);
export const loadingSelector = createSelector(auth, data => {
  console.log('loadingSelector has worked');
  return data.loading;
});


export const dogsDataMemo = createSelector(state => state.auth.dogs, dogs => {
    console.log('DogsDataMemo has worked');
    return dogs;
});


export const catsDataMemo = createSelector(
  state => state.auth.cats,
  cats => {
    console.log('CatsDataMemo has worked');
    return cats;
  },
);
export const usersSelector = createSelector(
  state => state.auth.user,
  users => {
    console.log('userSelector has worked');
    return users;
  },
);
