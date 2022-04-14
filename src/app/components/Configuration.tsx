import { useEditorContext } from '../context/EditorContext'

interface Props {
  setIsOpen: Function
}

const Configuration: React.FC<Props> = ({ setIsOpen }): JSX.Element => {
  const { options, setOptions } = useEditorContext()

  const handleClick = (): void => {
    setIsOpen(false)
  }

  const handleChooseTheme = (e: any): void => {
    console.log(e.target.value)
    setOptions({ ...options, theme: e.target.value })
  }

  return (
    <section className="config--container">
      <div className="close--button-container">
        <div className="close--button" onClick={handleClick}>
          x
        </div>
      </div>
      <div className="config--options-container">
        <div className="config--option-container">
          <span className="option--title">Theme</span>
          <div className="config--option-item">
            <select className="options" onChange={handleChooseTheme}>
              <option selected>Choose Theme</option>
              <option value="vs-dark">vs-dark</option>
              <option value="vs">vs</option>
              <option value="hc-black">hc-black</option>
            </select>
          </div>
        </div>
        <div className="config--option-container">
          <div className="option--title">Wordwrap</div>
          <div className="config--option-item">
            <select className="options">
              <option selected>Choose Wordwrap Type</option>
              <option value="on">on</option>
              <option value="off">off</option>
              <option value="wordWrapColumn">wordWrapColumn</option>
              <option value="bounded">bounded</option>
            </select>
          </div>
        </div>
        <div className="config--option-container">
          <div className="option--title">Minimap</div>
          <div className="config--option-item">
            <select className="options">
              <option selected>Enable or Disable</option>
              <option value="on">enable</option>
              <option value="off">disable</option>
            </select>
          </div>
        </div>
        <div className="config--option-container">
          <div className="option--title">Font size</div>
          <div className="config--option-item">
            <select className="options">
              <option selected>Choose Font Size</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Configuration
