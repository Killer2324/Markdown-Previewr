import MarkdownPreview from '@uiw/react-markdown-preview'
import '../../styles/Markdown.css'
interface Props {
  text: string
}

const MarkdownPreviewr: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <section className="markdown--container">
      <MarkdownPreview className="markdown--preview" source={text} />
    </section>
  )
}

export default MarkdownPreviewr
