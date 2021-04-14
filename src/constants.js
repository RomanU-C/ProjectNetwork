export const ROUTE = {
    HOME: 'Home',
    NEWS: 'News',
    PROFILE: 'Profile'
}

export const LOGIN_FIELDS = {
    username: 'username',
    password: 'password',
}

export const SETTING_VALIDATION = {
    settingLogin: {
        required: {
            value: true,
            message: 'This Required'
        },
        minLength: {
            value: 3,
            message: 'Min Lenght 3 symbol'
        },
        maxLength: {
            value: 8,
            message: 'Max Lenght 8 symbol'
        }

    },
    settingPassword: {
        required: {
            value: true,
            message: 'This Required'
        },
        minLength: {
            value: 3,
            message: 'Min Lenght 3 symbol'
        },
        maxLength: {
            value: 8,
            message: 'Max Lenght 8 symbol'
        }
    }

}


export const hardCodeDataNews =  [
    {
      id: '1',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      userPost: 'https://i.pinimg.com/originals/4d/1f/1a/4d1f1ac828c249e37332c84ac601165e.jpg',
      status: 'Online',
    },
    {
      id: '2',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      userPost: 'https://img4.goodfon.ru/wallpaper/nbig/1/f4/shimbashi-tokyo-japan-gorod-ulitsa.jpg',
      status: 'Online',
    },
    {
      id: '3',
      userAvatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      userName: 'Richard Richardiwich',
      userPost: 'https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/10/p-1-90248746-the-city-of-london-proves-its-serious-about-going-car-free.jpg',
      status: 'Offline',
    },]


export const hardCodeUserData = [
    {
      id: '1',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      status: 'Online',
    },
    {
      id: '2',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      status: 'Online',
    },
    {
      id: '3',
      userAvatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      userName: 'Richard Richardiwich',
      status: 'Offline',
    },
    {
      id: '4',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      status: 'Offline',
    },
    {
      id: '5',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      status: 'Offline',
    },
    {
      id: '7',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      status: 'Online',
    },
    {
      id: '8',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      status: 'Online',
    },
    {
      id: '9',
      userAvatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      userName: 'Richard Richardiwich',
      status: 'Offline',
    },
    {
      id: '10',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      status: 'Offline',
    },
    {
      id: '11',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      status: 'Offline',
    },
    {
      id: '12',
      userAvatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Mike Mikowich',
      status: 'Offline',
    },
    {
      id: '13',
      userAvatar: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e97c18db5725396f4f60bbc8a7eee1c8',
      userName: 'Jogan Joganowich',
      status: 'Offline',
    },
    {
      id: '6',
      userAvatar: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      userName: 'Richard Richardiwich',
      status: 'Online',
    },]

export const regexString = /^[a-z0-9_-]{3,16}$/;