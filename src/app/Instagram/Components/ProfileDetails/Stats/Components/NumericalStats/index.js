import "./styles.scss"

const NumericalStats = ({
  numberOfFollowers,
  numberOfFollowing,
  numberOfPosts,
}) => (
  <div className="inner_NumericalStats">
    <div className="div_wrap">
      <div className="statBox">
        <p className="stat_Number">{numberOfPosts}</p>
        <p className="stat_Title">posts</p>
      </div>
      <div className="statBox">
        <p className="stat_Number">{numberOfFollowers}</p>
        <p className="stat_Title">followers</p>
      </div>
      <div className="statBox">
        <p className="stat_Number">{numberOfFollowing}</p>
        <p className="stat_Title">following</p>
      </div>
    </div>
  </div>
)

export default NumericalStats