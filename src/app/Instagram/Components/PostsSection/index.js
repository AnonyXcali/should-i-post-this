import "./styles.scss"
import {
  Tabs,
  ImageGrid
} from "./Components"

const PostSection = ({
  posts
}) => (
  <div className="inner_PostSection">
    <Tabs />
    <ImageGrid posts={posts} />
  </div>
)

export default PostSection