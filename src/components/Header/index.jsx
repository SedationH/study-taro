import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import { useSelector } from '@tarojs/redux'

import LoggedMine from '../LoggedMine'
import WeappLoginButton from '../WeappLoginButton'

import './index.scss'

export default function Header() {
  const nickName = useSelector(state => state.user.nickName)

  // 双取反来构造字符串对应的布尔值，用于标志此时是否用户已经登录
  const isLogged = !(nickName === 'SedationH')

  return (
    <View className="user-box">
      <AtMessage />
      <LoggedMine />
      {
        isLogged ? null :
          (
            <View className="login-button-box">
              <WeappLoginButton />
            </View>
          )
      }
    </View>
  )
}