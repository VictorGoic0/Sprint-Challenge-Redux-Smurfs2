import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetchingSmurfs: true,
      error: null
    }
    case GET_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false
    }
    case GET_SMURFS_FAILURE:
    return {
      ...state,
      fetchingSmurfs: false,
      error: action.payload
    }
    case ADD_SMURF:
    return {
      ...state,
      addingSmurf: true,
      error: null
    }
    case ADD_SMURF_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      addingSmurf: false
    }
    case ADD_SMURF_FAILURE:
    return {
      ...state,
      addingSmurf: false,
      error: action.payload
    }
    default:
      return state;
  }
};

export default reducer;
