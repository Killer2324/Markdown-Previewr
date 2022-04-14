const Minimap: React.FC = (): JSX.Element => {
  return (
    <div className="config--option-container">
      <div className="option--title">Minimap</div>
      <div className="config--option-item">
        <select className="options">
          <option selected>Enable or Disable</option>
          <option value="on">enable</option>
          <option value="off">disable</option>
        </select>
      </div>
    </div>
  )
}

export default Minimap
