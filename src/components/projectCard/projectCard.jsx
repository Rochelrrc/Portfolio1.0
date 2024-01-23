import './styles.css';
import dataProjeto from './dataProject';


export default function ProjectCard() {

    return (
        <div className='container-geral'>

            {dataProjeto.map((item) =>

                <div className='container-individual'>
                    <img src={item.Image} alt='imagem' />

                    <div className='descricao-projeto' id={item.id}>
                        <h3>{item.nome}</h3>
                        <h4>{item.descricao}</h4>
                        <p>{item.tecnologias}</p>
                    </div>

                    <a href={item.url} target='_blank+' className='btn-teste'> Link de teste </a>

                </div>

            )}

        </div>
    )
}