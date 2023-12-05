// import Capa from "../album/capa.png"
import "./style.css";


const entrar = async() => {
    window.location = "/header"
}

export default function Inicio() {
    return(
        <>
        <div className="initial">
        </div>
        <button onClick={() => entrar()} className="btn">Entrar</button>
        
        </>
    )
}