export const fetchMatches = () => {
  return (dispatch) => {
    jQuery.ajax({
      url: 'http://localhost:3030/matches',
      method: 'get'
    })
      .then((result) => {
        console.log(result);
        dispatch({
          type: FETCHED_MATCHES,
          payload: result.matches
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
