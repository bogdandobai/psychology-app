import { createAction } from 'typesafe-actions';

const SET_FIRST_TIME = '[Core] Set First Time';

export const SetFirstTime = createAction(
    SET_FIRST_TIME,
    (firstTime: boolean) => firstTime,
)<boolean>();
