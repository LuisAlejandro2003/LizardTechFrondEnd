import { useState } from "react";
import { motion } from "framer-motion";
import Paragraph from "../../atoms/Paragraph";
import Imgs from "../../../assets/js/img"
import "../../../assets/style/cards.css";

function InformationCards() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
        <motion.div className="container-fater">
            <motion.div className="card"
                layout
                data-isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}>
                <motion.div className="text" data-isOpen={isOpen} >
                    <Paragraph text={"Somos un innovador producto diseñado para el bienestar y la conservación de tus reptiles, empleando avanzadas tecnologías para monitorizar de manera continua parámetros cruciales como la temperatura y la humedad ambiental."} />
                </motion.div>
                <div className="img" data-isOpen={isOpen}>
                    <img src={Imgs.card1} data-isOpen={isOpen} />
                </div>
            </motion.div>
            <motion.div className="card-midle"
                layout
                data-isOpen2={isOpen2}
                onClick={() => setIsOpen2(!isOpen2)}>
                <motion.div className="text" data-isOpen2={isOpen2} >
                    <Paragraph text={"En un mundo donde la caza ilegal amenaza la existencia de reptiles como el gecko de Lima, hemos creado un producto enfocado en preservar su diversidad y la de otras especies similares. Nuestra solución automatizada simplifica su cuidado."} />
                </motion.div>
                <div className="img" data-isOpen2={isOpen2} >
                    <img src={Imgs.card2} data-isOpen2={isOpen2} />
                </div>
            </motion.div>
            <motion.div className="card-end"
                layout
                data-isOpen3={isOpen3}
                onClick={() => setIsOpen3(!isOpen3)}>
                <motion.div className="text" data-isOpen3={isOpen3} >
                    <Paragraph text={"Para el monitoreo de condiciones para reptiles, hemos desarrollado un sistema IoT utilizando una Raspberry Pi 4 como núcleo central. Se han integrado sensores de temperatura humedad DHT11 y luminosidad bh1750 para recopilar datos ambientales clave."} />
                </motion.div>
                <div className="img" data-isOpen3={isOpen3} >
                    <img src={Imgs.card3} data-isOpen3={isOpen3} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default InformationCards;