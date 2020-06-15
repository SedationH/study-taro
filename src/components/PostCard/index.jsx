import Taro from '@tarojs/taro'
import { Vuew } from '@tarojs/components'

import './index.scss'

export default function PostCard({
  title,
  content
}) {

  return (
    <View className="postcard">
      <View className="post-title">{title}</View>
      <View className="post-content">{content}</View>
    </View>
  )
}