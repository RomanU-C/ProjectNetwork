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

export const regexString = /^[a-z0-9_-]{3,16}$/;