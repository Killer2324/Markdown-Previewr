import { useEditorContext } from '../../context/EditorContext'

const Minimap: React.FC = (): JSX.Element => {
  const { options, setOptions } = useEditorContext()

  const handleChooseMinimapIsEnable = (e: any): void => {
    if (e.target.value === 'enable') {
      const isEnable: boolean = true
      setOptions({
        ...options,
        optionsConfig: {
          ...options.optionsConfig,
          minimap: { enabled: isEnable },
        },
      })
    }

    if (e.target.value === 'disable') {
      const isEnable: boolean = false
      setOptions({
        ...options,
        optionsConfig: {
          ...options.optionsConfig,
          minimap: { enabled: isEnable },
        },
      })
    }
  }

  return (
    <div className="config--option-container">
      <div className="option--title">Minimap</div>
      <div className="config--option-item">
        <select className="options" onChange={handleChooseMinimapIsEnable}>
          <option selected>Enable or Disable</option>
          <option value="enable">enable</option>
          <option value="disable">disable</option>
        </select>
      </div>
    </div>
  )
}

export default Minimap
