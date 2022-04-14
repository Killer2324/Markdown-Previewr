const Fontsize: React.FC = (): JSX.Element => {
  return (
    <div className="config--option-container">
      <div className="option--title">Font size</div>
      <div className="config--option-item">
        <select className="options">
          <option selected>Choose Font Size</option>
        </select>
      </div>
    </div>
  )
}

export default Fontsize
