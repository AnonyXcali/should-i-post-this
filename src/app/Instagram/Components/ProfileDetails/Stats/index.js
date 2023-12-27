import {
  NumericalStats,
  Bio,
  NameHeader,
} from "./Components"
import "./styles.scss"


const Stats = ({
  name,
  bio,
  numberOfFollowers,
  numberOfFollowing,
  numberOfPosts,
}) => (
  <div className="inner_Stats_wrap">
    <NameHeader
      name={name}
    />
    <NumericalStats
      numberOfFollowers={numberOfFollowers}
      numberOfFollowing={numberOfFollowing}
      numberOfPosts={numberOfPosts}
    />
    <Bio name={name} bio={bio} />
  </div>
)


export default Stats