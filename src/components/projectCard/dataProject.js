import CobrancaImg from '../../assets/CobrancaImg.png';
import HarpiaImg from '../../assets/HarpiaImg.png';
import PlayerImg from '../../assets/PlayerImg.png';

const dataProjeto = [
    {
        id: 1,
        nome: 'Cobrança App',
        descricao: 'Projeto de gestão de cobranças',
        tecnologias: 'Next, Chakra, Bcrypt, Postgres, JOI',
        url: 'https://appcobranca.netlify.app',
        Image: CobrancaImg

    },

    {
        id: 2,
        nome: 'Harpia Login',
        descricao: 'Projeto de login com recuperação de senha.',
        tecnologias: 'React, React Router DOM',
        url: 'https://ish-harpia-desafio.netlify.app',
        Image: HarpiaImg
    },

    {
        id: 3,
        nome: 'Player App',
        descricao: 'Projeto de um player de músicas',
        tecnologias: 'React',
        url: 'https://projetorrc-player.netlify.app',
        Image: PlayerImg
    }
]

export default dataProjeto;