import Editor from '@monaco-editor/react'
import '../../styles/Editor.css'
import Spinner from '../common/Spinner'
import { useEditorContext } from '../context/EditorContext'

interface Props {
  text: string
  setText: Function
}

const MonacoEditor: React.FC<Props> = ({ text, setText }): JSX.Element => {
  const { options } = useEditorContext()
  const handleChangeText = (e: any): void => {
    setText(e)
  }

  return (
    <section className="editor--container">
      <Editor
        language="markdown"
        loading={<Spinner />}
        theme={options.theme}
        value={text}
        options={options.optionsConfig}
        onChange={handleChangeText}
      />
    </section>
  )
}

export default MonacoEditor
