import { useRouter } from "@tarojs/taro"
import { PostCard } from "../../components"

export default function Post({

}) {
  const router = useRouter()
  const { params } = router

  return (
    <View className="post">
      <PostCard
        title={params.title}
        content={params.content}
      />
    </View>
  )
}

Post.config = {
  navigationBarTitleText: '帖子详情'
}