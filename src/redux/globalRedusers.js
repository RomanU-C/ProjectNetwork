import { hardCodeDataNews, hardCodeUserData } from "../constants";

const FLAG = 'FLAG';
const SET_USER_DATA = 'SET_USER_DATA'
const UPDATE_NEWS_DATA = 'UPDATE_NEWS_DATA'

let initialState = {
  flagState: true,
  userLoginData: {
    userName: 'Roman'
  },
  dataNews: hardCodeDataNews,
  UserData: hardCodeUserData
}


const globalRedusers = (state = initialState, action) => {
  switch (action.type) {
    case FLAG:
      return {
        ...state,
        flagState: true
      }
    case UPDATE_NEWS_DATA:
      return {
        ...state,
        dataNews: [... {
          id: '15',
          userName: data.curentUserName,
          userPost: data.stateImg,
          status: 'Online',
        }]
      }
      case SET_USER_DATA:
      return {
        ...state,
        userLoginData: userLoginData
      }
    default:
      return state;
  }
}



// action creators
export const flag = () => {
  return { type: FLAG };
};
export const setUserData = (userLoginData) => {
  return { type: SET_USER_DATA, userLoginData };
};
export const setNewsData = (data) => {
  return { type: UPDATE_NEWS_DATA, data };
};



export default globalRedusers;