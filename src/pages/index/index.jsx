import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
import { AtMessage, AtFloatLayout, AtFab } from 'taro-ui'
import './index.scss'

export default function Index() {
  const [posts, setPosts] = useState([
    {
      title: '1',
      content: '2'
    }
  ])

  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setPosts([...posts, {
      title: formTitle,
      content: formContent
    }])
    setFormTitle('')
    setFormContent('')

    Taro.atMessage({
      message: '发表文章成功',
      type: 'success',
      duration: 1000
    })
    setIsOpen(false)
  }

  return (
    <View className="index">
      <AtMessage />
      {
        posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            isList
          />
        ))
      }
      <AtFloatLayout
        isOpened={isOpen}
        title="发表新文章"
        onClose={() => setIsOpen(false)}
      >
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={handleSubmit}
          handleTitleInput={e => setFormTitle(e.target.value)}
          handleContentInput={e => setFormContent(e.target.value)}
        />
      </AtFloatLayout>
      {
        !isOpen && (
          <View className="post-button">
            <AtFab onClick={() => setIsOpen(true)}>
              <Text className="at-fab__icon at-icon at-icon-edit"></Text>
            </AtFab>
          </View>
        )
      }
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
}