import "./Carteirinha.css"

export default function Carteirinha(props){
    return(
        <div className="container">
            <span>
                <img className="profile" src={props.foto} alt={props.alt} />
                <p>{props.nome}</p>
                <p>{props.rm}</p>
                <p>{props.curso}</p>
                <p>{props.turma}</p>
            </span>
        </div>
    )
}