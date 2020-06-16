import { AtButton } from "taro-ui";

export default function LoginButton({
  handleClick
}) {
  return (
    <AtButton
      type="primary"
      onClick={handleClick}
    >
      普通登陆
    </AtButton>
  )
}