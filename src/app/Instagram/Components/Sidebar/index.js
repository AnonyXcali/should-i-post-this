import "./styles.scss"
import Image from "next/image"
import Form from "../Form"

const Sidebar = ({
  ...rest
}) => {

  const {
    dispatchedAction: {
      generateConfig,
    },
  } = rest || {}



  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = {}

    for (let pair of formData.entries()) {
      payload[pair[0]] = pair[1]
    }

    generateConfig(payload)
  }

  return (
    <div className="inner_sideBar">
      <div className="header">
        <p className="xcaliLabsTitle">
          xcalilabs
          <span>
            <Image src="/beakerIcon.png" alt="icon" width={18} height={18} />
          </span>
        </p>
        <p className="inner_sidebarDescription">
          An AI powered gram profile creator.
        </p>
        <div className="user_Instruction_Wrap">
          <p>fill the following fields to generate a profile tailored to your imagination.</p>
        </div>
      </div>
      <div className="formSection">
        <Form onSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default Sidebar