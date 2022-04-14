import ReactDOM from 'react-dom'
import '../../styles/Config.css'
interface Props {
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal--container">{children}</div>,
    document.getElementById('modal')!
  )
}

export default Modal
