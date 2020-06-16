import { SET_LOGIN_INFO, SET_IS_OPENED } from '../constants/'
import avatar from '../images/avatar.jpg'
const INITIAL_STATE = {
  avatarUrl: avatar,
  nickName: 'SedationH',
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN_INFO: {
      let { avatarUrl, nickName } = action.payload
      if (avatarUrl === '') {
        avatarUrl = avatar
        nickName = 'SedationH'
      }
      return { ...state, nickName, avatarUrl }
    }

    default:
      return state
  }
}