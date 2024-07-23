import { FormattedMessage } from "react-intl"
import "./Title.css"

interface Props {
  id: string
}

const Title = ({ id }: Props) => {
  return (
    <h3 className="section-title fw-bold">
      <FormattedMessage id={id} />
    </h3>
  )
}

export default Title
