import Taro from '@tarojs/taro'
import {
  View,
  Form,
  Input,
  Textarea,
  Button
} from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

export default function PostForm({
  handleSubmit,
  formTitle,
  handleTitleInput,
  formContent,
  handleContentInput
}) {

  return (
    <View className="post-form">
      <Form onSubmit={handleSubmit}>
        <View>
          <View className="form hint">标题</View>
          <Input
            className="input-title"
            type="text"
            placeholder="请输入标题"
            value={formTitle}
            onInput={handleTitleInput}
          />
          <View className="form-hint">正文</View>
          <Textarea
            placeholder="点击输入正文"
            className="input-content"
            value={formContent}
            onInput={handleContentInput}
          />
          <AtButton
            formType="submit"
            type="primary">
            提交
          </AtButton>
        </View>
      </Form>
    </View>
  )
}