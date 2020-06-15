import { View, Image } from '@tarojs/components'
import avatar from '../../images/avatar.jpg'
import './mine.scss'

export default function Mine({

}) {

  return (
    <View className="mine">
      <View>
        <Image src={avatar} className="mine-avatar" />
        <View className="mine-nickName">晨曦</View>
        <View className="mine-username">SedationH</View>
      </View>
      <View className="mine-footer">Study From 图雀社区</View>
    </View>
  )
}

Mine.config = {
  navigationBarTitleText: '我的'
}