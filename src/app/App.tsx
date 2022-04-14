import { useState } from 'react'
import MarkdownPreviewr from './components/MarkdownPreviewr'
import Menu from './components/Menu'
import MonacoEditor from './components/MonacoEditor'
import { EditorContext } from './context/EditorContext'

const App: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>('')
  return (
    <EditorContext>
      <Menu />
      <main>
        <MonacoEditor text={text} setText={setText} />
        <MarkdownPreviewr text={text} />
      </main>
    </EditorContext>
  )
}

export default App
