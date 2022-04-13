import configuration from '../../assets/icons/configuration.png'
import '../../styles/Menu.css'

const Menu: React.FC = (): JSX.Element => {
  return (
    <header className="menu--container">
      <h1 className="menu--title">Markdown Previewr</h1>
      <img id="config--img" src={configuration} alt="config img" />
    </header>
  )
}

export default Menu
