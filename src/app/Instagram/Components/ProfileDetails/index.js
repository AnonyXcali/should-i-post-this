import "./styles.scss"
import ProfilePicture from "./ProfilePicture"
import Stats from "./Stats"

const ProfileDetails = ({
  profileConfig,
}) => {

  console.log("rest", profileConfig)

  const {
    name,
    bio,
    number_of_followers,
    number_of_following,
    number_of_posts,
  } = profileConfig || {}

  return (
    <div className="inner_ProfileDetails">
      <ProfilePicture img="empty" />
      <Stats
        name={name}
        bio={bio}
        numberOfFollowers={number_of_followers}
        numberOfFollowing={number_of_following}
        numberOfPosts={number_of_posts}
      />
    </div>
  )
}

export default ProfileDetails