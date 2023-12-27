import "./styles.scss"
import { useState, useEffect } from "react"
import Form from "../Form";

const SwipeBar = ({
  ...rest
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dragStartY, setDragStartY] = useState(null);
  const [dragDistance, setDragDistance] = useState(0);
  const [swiperVisible, setSwiperVisible] = useState(true)

  const {
    dispatchedAction: {
      generateConfig,
    },
    state,
  } = rest || {}

  const {
    requestingProfileConfig,
    profileConfig,
  } = state || {}

  console.log("requestingProfileConfig", requestingProfileConfig)

  useEffect(() => {

    if (requestingProfileConfig) {
      setSwiperVisible(false)
    } else {
      setSwiperVisible(true)
    }

  }, [requestingProfileConfig])



  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = {}

    for (let pair of formData.entries()) {
      payload[pair[0]] = pair[1]
    }

    setMenuVisible(false)
    setDragDistance(0)
    generateConfig(payload)
  }

  const handleTouchStart = (e) => {
    console.log("drag started")
    setDragStartY(e.touches[0].clientY);
  }

  const handleTouchMove = (e) => {
    console.log("drag moved")
    if (dragStartY !== null) {
      const currentY = e.touches[0].clientY;
      const distance = dragStartY - currentY;

      if (distance > 0) {
        setDragDistance(distance);
      }
    }
  }

  const handleTouchEnd = (e) => {
    console.log("drag ended")
    if (dragDistance > 100) {
      setMenuVisible(true);
    } else {
      // setMenuVisible(false)
      setDragDistance(0);
    }
    setDragStartY(null);
  }


  return (
    <>
      {!requestingProfileConfig && !profileConfig && (
        <div className="swipeBar" data-visible={menuVisible ? "true" : "false"}>
          <div
            className="inner_SwipeBar"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {!menuVisible ? (
              <p className="title_swipeUp">
                {dragStartY ? "Swipe Up!" : "Hold here"}
              </p>
            ) : (
              <Form onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SwipeBar