import { View } from '@tarojs/components'
import classNames from 'classnames'

import './index.scss'

export default function PostCard({
  title,
  content,
  isList
}) {

  function handleClick() {
    if (isList) {
      Taro.navigateTo({
        url: `/pages/post/post?title=${title}&content=${content}`,
      })
    }

  }

  return (
    <View className={classNames(
      'postcard',
      { postcard_isList: isList }
    )} onClick={handleClick}>
      <View className="post-title">{title}</View>
      <View className="post-content">{content}</View>
    </View>
  )
}