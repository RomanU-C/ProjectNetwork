const FLAG = 'FLAG';
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    flagState: false,
    userData: '',
    dataNews: [
        {
          id: '1',
          userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          userName: 'Mike Mikowich',
          userPost: 'https://i.pinimg.com/originals/4d/1f/1a/4d1f1ac828c249e37332c84ac601165e.jpg',
          location: 'Bangkok',
        },
        {
          id: '2',
          userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
          userName: 'Jogan Joganowich',
          userPost: 'https://img4.goodfon.ru/wallpaper/nbig/1/f4/shimbashi-tokyo-japan-gorod-ulitsa.jpg',
          location: 'Tokyo',
        },
        {
          id: '3',
          userAvatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
          userName: 'Richard Richardiwich',
          userPost: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/10/p-1-90248746-the-city-of-london-proves-its-serious-about-going-car-free.jpg',
          location: 'London',
        },]
      
}


const globalRedusers = (state=initialState, action) => {
    switch (action.type) {
        case FLAG:
           return {
               ...state,
               flagState: true
           } 
        case SET_USER_DATA:
           return {
               ...state,
               userData: data
           } 
        default:
            return state;
    }
}



// action creators
export const flag = () => {
    return{type: FLAG};
};
export const setUserData = (data) => {
    return{type: SET_USER_DATA, data};
};



export default globalRedusers;