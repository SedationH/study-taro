import Taro, { useState, offLocalServiceResolveFail } from '@tarojs/taro'
import { Button } from '@tarojs/components'

import './index.scss'

export default function LoginButton({
  setLoginInfo
}) {
  const [isLogin, setIsLogin] = useState(false)

  async function onGetUserInfo(e) {
    setIsLogin(true)
    console.log(e)
    await new Promise(resolve => {
      setTimeout(() => {
        setLoginInfo()
        resolve()
      },2000)
    })
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