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
            <select name="options" id="options" onChange={handleChooseTheme}>
              <option selected>Choose Theme</option>
              <option value="vs-dark">vs-dark</option>
              <option value="vs">vs</option>
              <option value="hc-black">hc-black</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Configuration
