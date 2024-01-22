import './styles.css';
import dataContato from './dataContato';

export default function contatoCard() {
    return (
        <div className='container-geral'>

            {dataContato.map((item) =>

                <div className='container-individual'>
                    <img src={item.icon} alt='imagem' />
                </div>

            )}

        </div>
    )
}