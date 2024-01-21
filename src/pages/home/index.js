import './styles.css';
import ImgLogo from '../../assets/Boy3d.jpg';
import AboutIcon from '../../assets/AboutIcon.png';
import CodeIcon from '../../assets/CodeIcon.png';
import ProjectCard from '../../components/projectCard/projectCard';


export default function Home() {
    return (
        <>
            <header>
                <h2><span>Bem-vindo</span> ao meu Portfólio!</h2>

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

                <div className='apresentacao-text'>
                    <h1><span>Prazer</span>, me chamo Rochel!</h1>
                    <p>Desenvolvedor de Softwares FullStack!</p>
                </div>

                <img src={ImgLogo} alt='animacao 3d' />

            </section>

            <main>
                <h3 className='aboutMe'>Sobre mim <img src={AboutIcon} /></h3>
                <p>Nordestino "nascido e crescido" em Fortaleza(Melhor cidade litoranea desse país) e que desde sempre foi apaixonado por tecnologia, música(aqui pense num caba eclético), filmes, jogos, praia e um bom esporte.<br></br><br></br>
                    Possuo um ano de experiência em desenvolvimento de software, com proficiência em HTML, CSS, frameworks JavaScript, além de experiência em APIs, bancos de dados,Git e muito mais na base do lema do "se não sei eu aprendo".<br></br><br></br>
                    Em transição de carreira dei um salto de fé(pegou o código? rsrs) pro mundo da programação por sempre ter sido fascinado nisso, mas há um ano era militar da Escola de Sargento das Armas. Adquiri habilidades como planejamento estratégico, criatividade, autogestão, organização e dinamismo, características fundamentais para um desenvolvedor. Tenho a expectativa de contribuir positivamente para a sua equipe ou projeto.

                </p>
            </main >

            <section className='projetos'>

                <h3 className='projeto-title'>Projetos <img src={CodeIcon} /></h3>

                <div className='projeto-exibicao'>
                    <ProjectCard />
                </div>
            </section>

        </>
    )
}