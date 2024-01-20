import './styles.css';
import ImgLogo from '../../assets/Boy3d.jpg';
import AboutIcon from '../../assets/AboutIcon.png';
import CodeIcon from '../../assets/CodeIcon.png';

export default function Home() {
    return (
        <>
            <header>
                <h2><span>Bem-vindo</span> ao meu Portifólio!</h2>

                <navbar>
                    <ul>
                        <li> <a href=''>Home</a> </li>
                        <li> <a href=''>Sobre mim</a> </li>
                        <li> <a href=''>Projetos</a> </li>
                        <li> <a href=''>Contato</a> </li>
                    </ul>
                </navbar>

            </header>

            <section className='apresentacao'>

                <h1><span>Prazer</span>, me chamo Rochel!</h1>

                <img src={ImgLogo} alt='animacao 3d' />

            </section>

            <main>
                <h3 className='aboutMe'>Sobre mim <img src={AboutIcon} /></h3>
                <p>Nordestino "nascido e crescido" em Fortaleza(Melhor cidade litoranea desse país) e que desde sempre foi apaixonado por tecnologia, música, filmes, jogos, praia e um bom esporte.<br></br>
                    Possuo um ano de experiência em desenvolvimento de software, com proficiência em HTML, CSS, frameworks JavaScript, além de experiência em APIs, bancos de dados e Git.<br></br>
                    Estou em transição de carreira, a um ano era militar da Escola de Sargento das Armas. Adquiri habilidades como planejamento estratégico, criatividade, autogestão, organização e dinamismo, características fundamentais para um desenvolvedor. Tenho a expectativa de contribuir positivamente para a sua equipe ou projeto.

                </p>
            </main >

            <section className='projetos'>

                <h3 className='projeto-title'>Projetos <img src={CodeIcon} /></h3>

            </section>

        </>
    )
}