import Editor from '@monaco-editor/react'
import '../../styles/Editor.css'

interface Props {
  text: string
  setText: Function
}

const MonacoEditor: React.FC<Props> = ({ text, setText }): JSX.Element => {
  const handleChangeText = (e: any): void => {
    setText(e)
  }

  return (
    <section className="editor--container">
      <Editor
        language="markdown"
        theme="vs-dark"
        value={text}
        options={{
          selectOnLineNumbers: true,
          fontSize: 20,
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleChangeText}
      />
    </section>
  )
}

export default MonacoEditor
