import { View, Image } from '@tarojs/components'
import avatar from '../../images/avatar.jpg'
import './index.scss'

export default function ({
  userInfo = {}
}) {
  function onImageClick() {
    Taro.previewImage({
      urls: [userInfo.avatar],
    })
  }

  return (
    <View className="logged-mine">
      <Image
        src={userInfo.avatar ? userInfo.avatar : avatar}
        className="mine-avatar"
        onClick={onImageClick}
      />
      <View className="mine-nickName">
        {userInfo.nickName ? userInfo.nickName : 'SedationH'}
      </View>
    </View>
  )
}