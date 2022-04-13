import MarkdownPreview from '@uiw/react-markdown-preview'

interface Props {
  text: string
}

const MarkdownPreviewr: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <section className="markdown--container">
      <MarkdownPreview source={text} />
    </section>
  )
}

export default MarkdownPreviewr
