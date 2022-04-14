import { useEditorContext } from '../context/EditorContext'
import Fontsize from './ConfigComponents/Fontsize'
import Minimap from './ConfigComponents/Minimap'
import Theme from './ConfigComponents/Theme'
import Wordwrap from './ConfigComponents/Wordwrap'

interface Props {
  setIsOpen: Function
}

const Configuration: React.FC<Props> = ({ setIsOpen }): JSX.Element => {
  const handleClick = (): void => {
    setIsOpen(false)
  }

  return (
    <section className="config--container">
      <div className="close--button-container">
        <div className="close--button" onClick={handleClick}>
          x
        </div>
      </div>
      <div className="config--options-container">
        <Theme />
        <Wordwrap />
        <Minimap />
        <Fontsize />
      </div>
    </section>
  )
}

export default Configuration
