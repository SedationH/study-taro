import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'

export default function LoginButton({
  handleLogout
}) {
  return (
    <AtButton
      type="secondary"
      full
      onClick={handleLogout}
    >
      退出登录
    </AtButton>
  )
}