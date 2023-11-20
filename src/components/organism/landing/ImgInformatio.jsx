import { motion } from "framer-motion"
import Title from "../../atoms/Title"
import SubTitle from "../../atoms/SubTitle";

function ImgInformation() {

    return (
        <motion.div className="fotito">
            <motion.div className="cuadroIzquierda"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>
                <motion.div className="textoIzquierda"
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}>
                    <Title msn={"Lizard"} />
                </motion.div>
                <motion.div className="subtitulo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}>
                    <SubTitle msn={"Donde la tecnología y la naturaleza se encuentran, para darle el mejor confort a tus amigos escamosos."} />
                </motion.div>
            </motion.div>
            <div className="cuadroDerecha">
                <motion.div className="textoDerecha"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2.5 }}>
                    <Title msn={"Tech"} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ImgInformation;