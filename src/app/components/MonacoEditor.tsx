import Editor from '@monaco-editor/react'
import '../../styles/Editor.css'

const MonacoEditor: React.FC = (): JSX.Element => {
  return (
    <section className="editor--container">
      <Editor
        language="markdown"
        theme="vs-dark"
        value="# Hello World"
        options={{
          selectOnLineNumbers: true,
          fontSize: 20,
          minimap: {
            enabled: false,
          },
        }}
      />
    </section>
  )
}

export default MonacoEditor
