import image from '../assets/coraje.webp'

const Personaje = () => {
    return (
        <>
            <div className="personaje-contenedor">
                <div className="bocadillo">¡Hola! Soy un cuadro de texto apuntando.</div>
                <img src={image} alt="Personaje" className="personaje" />
            </div>
        </>
    )
}

export default Personaje