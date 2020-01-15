import { localStorageRemove } from '../../helpers/localStorage';

export const auth = () => ({
    type: 'ROUTERS_RENDER',
    value: true,
});

export const logout = () => dispatch => {
  localStorageRemove('access_token');
  localStorageRemove('role');
  dispatch ({
      type: 'LOG_OUT',
      value: false,
    })
}
