import { useState } from 'react'
import MarkdownPreviewr from './components/MarkdownPreviewr'
import Menu from './components/Menu'
import MonacoEditor from './components/MonacoEditor'

const App: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>('')
  return (
    <>
      <Menu />
      <main>
        <MonacoEditor text={text} setText={setText} />
        <MarkdownPreviewr text={text} />
      </main>
    </>
  )
}

export default App
