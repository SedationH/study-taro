import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'

import LoggedMine from '../LoggedMine'
import LoginButton from '../LoginButton'
import WeappLoginButton from '../WeappLoginButton'

import './index.scss'

export default function Header({
  userInfo,
  setLoginInfo,
  isLogged,
  handleClick
}) {

  return (
    <View className="user-box">
      <AtMessage />
      <LoggedMine userInfo={userInfo} />
      {!isLogged && (
        <View className="login-button-box">
          <LoginButton handleClick={handleClick} />
          <WeappLoginButton setLoginInfo={setLoginInfo} />
        </View>
      )}
    </View>
  )
}