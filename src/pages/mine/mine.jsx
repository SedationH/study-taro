import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Header, Footer } from '../../components'

import './mine.scss'

export default function Mine({

}) {

  const [nickName, setNickName] = useState('')
  const [avatar, setAvatar] = useState('')

  const isLogged = !!nickName

  useEffect(() => {
    async function getStorage() {
      try {
        const { data } = await Taro.getStorage({
          key: 'userInfo',
        })
        const { nickName, avatarUrl } = data
        setAvatar(avatarUrl)
        setNickName(nickName)
      } catch (err) {
        console.log('getStorage ERR:', err)
      }
    }

    getStorage()
  }, [])

  function handleClick() {
    console.log('handleClick')
  }

  async function setLoginInfo({
    avatarUrl,
    nickName
  }) {
    setNickName(nickName)
    setAvatar(avatarUrl)

    try {
      await Taro.setStorage({
        key: 'userInfo',
        data: { avatarUrl, nickName }
      })
    } catch (err) {
      console.log('setStorage ERR:', err)
    }
  }

  async function handleLogout() {
    try {
      await Taro.removeStorage({ key: 'userInfo' })

      setAvatar('')
      setNickName('')
    } catch (err) {
      console.log('removeStorage ERR: ', err)
    }
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
      <Footer
        isLogged={isLogged}
        handleLogout={handleLogout}
      />
    </View>
  )
}

Mine.config = {
  navigationBarTitleText: '我的'
}