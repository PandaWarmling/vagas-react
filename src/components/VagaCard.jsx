function VagaCard({
        empresa,
        cargo,
        salario,
        modelo,
        publicada}) {
    return(
        <div className="card">
                    <div className="card__avatar">
                        v
                    </div>
                    <div className="card__text">
                        <p>{empresa}</p>
                        <h3>{cargo} </h3>
                        <span className="card__badge">{salario}</span>
                        <span>{modelo}</span>

                    </div>
                    <div className="card__actions">


                        <span>{publicada}</span>
                        <a href="">candidatar-se</a>
                    </div>
                </div>
    )
}
export default VagaCard;