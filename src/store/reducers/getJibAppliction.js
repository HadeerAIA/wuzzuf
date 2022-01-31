const intial = {
  posts: []
};

const getJobs = (state = intial, action) => {
  if (action.type === "GET_Jobs") {
    state = { ...state, posts: action.payload };
  }
  return state;
};

export default getJobs;
