import { useEditorContext } from '../../context/EditorContext'

const Theme: React.FC = (): JSX.Element => {
  const { options, setOptions } = useEditorContext()

  const handleChooseTheme = (e: any): void => {
    console.log(e.target.value)
    setOptions({ ...options, theme: e.target.value })
  }

  return (
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
  )
}

export default Theme
