import { useState } from '@tarojs/taro'
import { view } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'
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

  function handleSubmit(e) {
    e.preventDefault()
    setPosts([...posts, {
      title: formTitle,
      content: formContent
    }])
  }

  return (
    <View className="index">
      {
        posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
          />
        ))
      }
      <PostForm
        formTitle={formTitle}
        formContent={formContent}
        handleSubmit={handleSubmit}
        handleTitleInput={e => setFormTitle(e.target.value)}
        handleContentInput={e => setFormContent(e.target.value)}
      />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
}