import { View, Image } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'

import './index.scss'

export default function () {

  const nickName = useSelector(state => state.user.nickName)
  const avatar = useSelector(state => state.user.avatarUrl)
  function onImageClick() {
    Taro.previewImage({
      urls: [avatar],
    })
  }

  return (
    <View className="logged-mine">
      <Image
        src={avatar}
        className="mine-avatar"
        onClick={onImageClick}
      />
      <View className="mine-nickName">
        {nickName}
      </View>
    </View>
  )
}