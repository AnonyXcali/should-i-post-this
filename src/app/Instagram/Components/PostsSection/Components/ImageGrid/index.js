import "./styles.scss"
import Square from "./Square"

const ImageGrid = ({
  posts,
}) => (
  <div className="inner_ImageGrid">
    {posts && posts.map((item, iter) => (
      <Square
        key={`${Math.ceil(Math.sqrt() * iter * 41)}`}
        img={item.imageBlob}
      />
    ))}
    
  </div>
)

export default ImageGrid