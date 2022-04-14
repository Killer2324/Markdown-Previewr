import { useState } from 'react'
import configuration from '../../assets/icons/configuration.png'
import '../../styles/Menu.css'
import Modal from '../modal/Modal'
import Configuration from './Configuration'

const Menu: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = (): void => {
    setIsOpen(true)
  }

  return (
    <>
      <header className="menu--container">
        <h1 className="menu--title">Markdown Previewr</h1>
        <img
          id="config--img"
          onClick={handleClick}
          src={configuration}
          alt="config img"
        />
      </header>
      {isOpen && (
        <Modal>
          <Configuration setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  )
}

export default Menu
