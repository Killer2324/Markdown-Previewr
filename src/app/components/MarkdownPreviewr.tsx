import MarkdownPreview from '@uiw/react-markdown-preview'

const MarkdownPreviewr: React.FC = (): JSX.Element => {
  return (
    <section className="markdown--container">
      <MarkdownPreview source="# hola mundo" />
    </section>
  )
}

export default MarkdownPreviewr
