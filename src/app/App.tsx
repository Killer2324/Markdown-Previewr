import MarkdownPreviewr from './components/MarkdownPreviewr'
import Menu from './components/Menu'
import MonacoEditor from './components/MonacoEditor'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Menu />
      <main>
        <MonacoEditor />
        <MarkdownPreviewr />
      </main>
    </>
  )
}

export default App
