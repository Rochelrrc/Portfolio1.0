import './styles.css';
import dataContato from './dataContato';

export default function ContatoCard() {
    return (
        <div className='card-container-geral'>

            {dataContato.map((item) =>

                <div className='container-individual-card'>
                    <div className='container-img-card'>
                        <a href={item.url} target='_blank+'><img src={item.icon} alt='imagem' /></a>
                    </div>

                    <p>{item.text}</p>

                </div>

            )}

        </div>
    )
}