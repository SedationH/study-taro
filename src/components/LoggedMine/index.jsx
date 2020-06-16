import { View, Image } from '@tarojs/components'
import avatar from '../../images/avatar.jpg'
import './index.scss'

export default function ({
  userinfo = {}
}) {
  function onImageClick() {
    Taro.previewImage({
      urls: [userInfo.avatar],
    })
  }

  return (
    <View className="logged-mine">
      <Image
        src={userinfo.avatar ? userinfo.avatar : avatar}
        className="mine-avatar"
        onClick={onImageClick}
      />
      <View className="mine-nickName">
        {userInfo.nickName ? userInfo.nickName : 'SedationH'}
      </View>
      <view className="mine-username">
        {userInfo.username ? userInfo.username : '胡晨曦'}
      </view>
    </View>
  )
}