import { useState, useEffect, useContext } from "react"
import "./styles.css"
import {
  RootContainer,
} from "../../Contexts"

const getInitState = (data = []) => {
  const obj = {}

  if (data && data.length > 0) {
    data.forEach((item) => {
      obj[item.label] = {
        init: 0,
        final: item.score * 100,
      }
    })
  }

  return obj
}

const ProgressBarData = ({
  title,
  response,
}) => {

  const [currentMapped, updateMap] = useState(getInitState(response))

  const setAfterSometime = async () => {

    const widthPromise = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    widthPromise().then(() => {
      const obj = {}

      if (response && response.length > 0) {
        response.forEach((item) => {
          obj[item.label] = {
            init: item.score * 100,
            final: item.score * 100
          }
        })
        updateMap({ ...obj })
      }
    })
  }

  useEffect(() => {
    setAfterSometime()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAfterSometime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])


  return (
    <div className="card stats_card">
      <h2 className="underline">{title || "Stats"}</h2>
      <div className="wrap centered">
        {currentMapped ? Object.keys(currentMapped).map((item, iter) => (
          <div key={iter * currentMapped[item].final} className="progressBar_wrap">
            <div className="fixedWidth_p">
              <p>{item}</p>
            </div>
            <div className="outerProgressBar">
              <div
                className="progressBar"
                style={{
                  width: `${currentMapped[item].init}%`,
                }}
              />
            </div>
            <div className="fixedWidth_num">
              <p>{`${Math.floor(currentMapped[item].init)}%`}</p>
            </div>
          </div>
        )) : (
          <p>null</p>
        )}
      </div>
    </div>
   

  )
}

export default ProgressBarData