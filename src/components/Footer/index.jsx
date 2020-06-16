import { useSelector } from '@tarojs/redux'
import Logout from '../Logout'

export default function Footer() {
  const nickName = useSelector(state => state.user.nickName)

  // 双取反来构造字符串对应的布尔值，用于标志此时是否用户已经登录
  const isLogged = !(nickName === 'SedationH')

  return (
    isLogged && (
      <Logout
      />
    )
  )
}