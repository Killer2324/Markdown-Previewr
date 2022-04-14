import { useEditorContext } from '../../context/EditorContext'

const Wordwrap: React.FC = (): JSX.Element => {
  const { options, setOptions } = useEditorContext()

  const handleChooseWordwrap = (e: any): void => {
    setOptions({
      ...options,
      optionsConfig: { ...options.optionsConfig, wordWrap: e.target.value },
    })
  }

  return (
    <div className="config--option-container">
      <div className="option--title">Wordwrap</div>
      <div className="config--option-item">
        <select className="options" onChange={handleChooseWordwrap}>
          <option selected>Choose Wordwrap Type</option>
          <option value="on">on</option>
          <option value="off">off</option>
          <option value="wordWrapColumn">wordWrapColumn</option>
          <option value="bounded">bounded</option>
        </select>
      </div>
    </div>
  )
}

export default Wordwrap
