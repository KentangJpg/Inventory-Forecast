const Card = ({ width, height }) => {
    return (
        <div className={`border-2 border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ${width} ${height}`}>
        </div>
    )
}

export default Card;
