import "./styles.scss"

const Bio = ({
  bio,
  name,
}) => (
  <div className="inner_Bio">
    <div className="wrap_tagName">
      <p className="tagName">{name}</p>
    </div>
    <div className="wrap_bioWrap">
      <p>{bio}</p>
    </div>
  </div>
)

export default Bio