export const auth = () => ({
    type: 'ROUTERS_RENDER',
    value: true,
});

export const logout = () => dispatch => {
  localStorage.removeItem('access_token');
  dispatch ({
      type: 'LOG_OUT',
      value: false,
    })
}
