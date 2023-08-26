import './Item.css'

const Item = props => {
  const {pics, fun} = props
  const {id, name, imageUrl} = pics

  const onButton = () => {
    fun()
  }

  return (
    <li>
      <button className="btn" onClick={onButton}>
        <img src={imageUrl} alt={name} />
      </button>
      <p>{name}</p>
    </li>
  )
}

export default Item
