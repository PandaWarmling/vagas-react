import { useParams } from "react-router";
import vagalist from "../data/vagas";
function VagaDetalhe(){
    const {id} = useParams();
    const vagaLoop = vagalist.filter(item=>{
        return item.id === Number(id)
    });
    
    if (vagaLoop.length===0){
        return(
            <div>
                <h1>Vaga com o ID {id} não encontrado</h1>
            </div>
        )
    }

    const vagaSelecionada = vagaLoop[0];

      return (
        <div>
            <h1>Detalhes da Vaga {id} </h1>
            <h2>{vagaSelecionada.cargo}</h2>
            <h3>{vagaSelecionada.empresa}</h3>
            <p>{vagaSelecionada.area}</p>
            <p>{vagaSelecionada.modelo}</p>
            <p> R$ {vagaSelecionada.salario}</p>

        </div>
    )
}

export default VagaDetalhe;