import {Link} from 'react-router'
function Page404(){
    
      return (
        <div>
            <h1>404</h1>
            <p>Pagina não encontrada</p>
            <Link to="/"> Voltar a página inicial</Link>
        </div>
    );
}

export default Page404;