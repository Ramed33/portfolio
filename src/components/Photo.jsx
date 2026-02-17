import image from '../assets/perfil-foto.jpg'

const Photo = () => {
    return (
        <>
            <div className="image">
                <img src={image} alt="Personaje" className="personaje" />
            </div>
        </>
    )
}

export default Photo