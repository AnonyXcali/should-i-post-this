import "./styles.scss"
import Image from "next/image"

const Square = ({
  img,
}) => (
  <div className="inner_ImageSquare">
    <Image src={`data:image/jpeg;base64,${img}`} alt="test_image" width="141" height="141" />
  </div>
)

export default Square