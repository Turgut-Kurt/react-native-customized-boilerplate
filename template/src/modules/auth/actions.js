import { createAction } from "@reduxjs/toolkit";

export const getUserAction = createAction('getUser');

export const clearStore = createAction('clearStore');

//Update User Action
export const updateUser = createAction('updateUser');
