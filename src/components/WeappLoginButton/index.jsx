import Taro, { useState } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import { useDispatch } from '@tarojs/redux'
import { SET_LOGIN_INFO } from '../../constants'
import './index.scss'

export default function LoginButton() {
  const [isLogin, setIsLogin] = useState(false)
  const dispatch = useDispatch()

  async function setLoginInfo({
    avatarUrl,
    nickName
  }) {
    try {
      await Taro.setStorage({
        key: 'userInfo',
        data: { avatarUrl, nickName }
      })
    } catch (err) {
      console.log('setStorage ERR:', err)
    }

    dispatch({
      type: SET_LOGIN_INFO,
      payload: {
        avatarUrl,
        nickName,
      },
    })
  }

  async function onGetUserInfo(e) {
    setIsLogin(true)

    const { avatarUrl, nickName } = e.detail.userInfo
    await setLoginInfo({ avatarUrl, nickName })

    setIsLogin(false)
  }

  return (
    <Button
      openType="getUserInfo"
      onGetUserInfo={onGetUserInfo}
      type="primary"
      className="login-button"
      loading={isLogin}
    >
      微信登陆
    </Button>
  )
}