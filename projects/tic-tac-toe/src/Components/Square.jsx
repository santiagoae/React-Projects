export const Square = ({ children, updateBoard, index, isSelected }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
      updateBoard(index)
    }
    return(
      <section onClick={handleClick} className={className}>
        {children}
      </section>
    )
  }