export const auth = () => ({
    type: 'ROUTERS_RENDER',
    value: true,
});

// export const logout = () => ({
//     type: 'LOGOROUTERS_RENDERUT',
//     value: false,
// })

export const logout = () => dispatch => {
  console.log('hey hey hey');
  dispatch ({
      type: 'test',
      value: false,
    })
}
