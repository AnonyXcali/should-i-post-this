import "./styles.scss"
import { useContext } from "react"
import Image from "next/image"
import {
  ProfileDetails,
  PostSection,
  Sidebar,
  WelcomeImageGrid,
  SwipeBar,
  Loader,
} from "./Components"
import {
  RootContainer,
} from "../Contexts"

const App = () => {

  const {
    state: rootState,
    dispatchedAction: {
      generateConfig,
    },
  } = useContext(RootContainer)

  const {
    profileConfig,
    requestingProfileConfig,
  } = rootState || {}
  
  return (
    <div id="instaAppPage">
      <div className="sidebar">
        <Sidebar
          {...useContext(RootContainer)}
        />
      </div>
      <div className="div_wrapper">
        {profileConfig ? (
          <div id="appPage_upperSection" className="card_row">
            <>
              <ProfileDetails
                profileConfig={profileConfig}
              />
              <PostSection
                posts={profileConfig.renderedPosts}
              />
            </>
          </div>
        ) : (
            <>
            <div className="welcome_screen">
              <div className="headerWrap">
                <h1 className="welcome_header">
                  AiGram
                </h1>
                <p className="xcaliLabsTitle">
                  by xcalilabs
                  <span>
                    <Image src="/beakerIcon.png" alt="icon" width={18} height={18} />
                  </span>
                </p>
              </div>
              <div className="loaderWrap">
                 {requestingProfileConfig ? (
                    <Loader />
                  ) : (
                    <WelcomeImageGrid />
                  )}
              </div>
            </div>
            </>    
        )}
      </div>
      <SwipeBar
        {...useContext(RootContainer)}
      />
    </div>
  )
}

export default App