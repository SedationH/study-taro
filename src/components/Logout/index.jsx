import { AtButton } from 'taro-ui'
import { useDispatch } from '@tarojs/redux'
import { SET_LOGIN_INFO } from '../../constants'

export default function LoginButton() {

  const dispatch = useDispatch()

  async function handleLogout() {
    try {
      await Taro.removeStorage({ key: 'userInfo' })
      dispatch({
        type: SET_LOGIN_INFO,
        payload: {
          avatarUrl: '',
          nickName: '',
        },
      })
    } catch (err) {
      console.log('removeStorage ERR: ', err)
    }
  }

  return (
    <AtButton
      type="secondary"
      full
      onClick={handleLogout}
    >
      退出登录
    </AtButton>
  )
}