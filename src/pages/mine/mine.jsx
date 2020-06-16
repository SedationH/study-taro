import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Header } from '../../components'

import './mine.scss'

export default function Mine({

}) {

  const [nickName, setNickName] = useState('')
  const [avatar, setAvatar] = useState('')

  const isLogged = !!nickName

  function handleClick() {
    console.log('handleClick')
  }

  function setLoginInfo() {
    console.log('setLoginInfo')
  }

  return (
    <View
      className="mine"
    >
      <Header
        isLogged={isLogged}
        userInfo={{ avatar, nickName }}
        handleClick={handleClick}
        setLoginInfo={setLoginInfo}
      />
    </View>
  )
}

Mine.config = {
  navigationBarTitleText: '我的'
}