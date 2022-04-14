interface Props {
  setIsOpen: Function
}

const Configuration: React.FC<Props> = ({ setIsOpen }): JSX.Element => {
  const handleClick = (): void => {
    setIsOpen(false)
  }

  return (
    <section className="config--container">
      <div className="close--button-container">
        <div className="close--button" onClick={handleClick}>
          x
        </div>
      </div>
    </section>
  )
}

export default Configuration
