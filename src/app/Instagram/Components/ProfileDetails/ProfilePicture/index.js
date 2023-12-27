import PropTypes from 'prop-types';
import "./style.scss"
import Image from 'next/image';

const ProfilePicture = (
  ...rest
) => {
  return (
    <div className="inner_ProfilePicture">
      <div className="inner_profilePictureImage">
        <Image
          src="/avatar.jpeg"
          alt="hello"
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}

ProfilePicture.propTypes = {
  img: PropTypes.string.isRequired,
}

export default ProfilePicture