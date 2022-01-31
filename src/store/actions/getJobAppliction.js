import firebase from "../../config/db";

const getJobs = () => {
  return async function (dispatch) {
    const postsArray = await firebase.getJobs();
    console.log(postsArray);
    dispatch({ type: "GET_Jobs", payload: postsArray });
  };
};
export default getJobs;
