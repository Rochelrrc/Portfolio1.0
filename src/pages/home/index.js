import './styles.css';
import ImgLogo from '../../assets/Boy3d.jpg';
import AboutIcon from '../../assets/AboutIcon.png';
import CodeIcon from '../../assets/CodeIcon.png';
import ContatoIcon from '../../assets/ContatoIcon.png'
import ProjectCard from '../../components/projectCard/projectCard';
import ContatoCard from '../../components/contatosCard/contatosCard';


export default function Home() {

    const openCurriculo = () => {
        const arquivo = "/Curriculo-chel.pdf";

        window.open(arquivo, "_blank");
    };

    return (
        <div className='geral'>
            <header >
                <h2><span>Bem-vindo</span> ao meu Portfólio!</h2>

                <navbar>
                    <ul>
                        <li> <a href='#'>Home</a> </li>
                        <li> <a href='#sobreMim'>Sobre mim</a> </li>
                        <li> <a href='#projetos'>Projetos</a> </li>
                        <li> <a href='#sobreMim'>Contato</a> </li>
                    </ul>
                </navbar>

            </header>

            <main>

                <section className='apresentacao'>

                    <div className='apresentacao-text'>
                        <h1><span>Prazer</span>, me chamo Rochel!</h1>
                        <p>Desenvolvedor de Softwares FullStack!</p>

                        <div className='container-btn'>
                            <button className='btn-curriculo' onClick={openCurriculo}>Currículo</button>
                            <button className='btn-contato' > <a href="https://wa.me/+5585987843322" target='_blank'>Entrar em contato</a></button>
                        </div>

                    </div>

                    <img src={ImgLogo} alt='animacao 3d' />

                </section>

                <section className='about' id='sobreMim'>
                    <h3 className='title'>Sobre mim <img src={AboutIcon} /></h3>
                    <p>Nordestino "nascido e crescido" em Fortaleza(Melhor cidade litorânea desse país) e que desde sempre foi apaixonado por tecnologia, música(aqui pense num caba eclético), filmes, jogos, praia e um bom esporte.<br></br><br></br>
                        Possuo um ano de experiência em desenvolvimento de software, com proficiência em HTML, CSS, typescript, frameworks JavaScript, além de experiência em APIs, bancos de dados,Git e muito mais na base do lema do "se não sei eu aprendo".<br></br><br></br>
                        Em transição de carreira dei um salto de fé(pegou o código? rsrs) pro mundo da programação pela paixão antiga pela área, mas há um ano era militar da Escola de Sargento das Armas. Adquiri habilidades como planejamento estratégico, criatividade, autogestão, organização e dinamismo, características fundamentais para um desenvolvedor. Tenho a expectativa de contribuir positivamente para a sua equipe ou projeto.

                    </p>

                    <ContatoCard />

                </section >

                <section className='projetos' id='projetos'>

                    <h3 className='title'>Projetos <img src={CodeIcon} /></h3>

                    <div className='projeto-exibicao'>
                        <ProjectCard />
                    </div>
                </section>


            </main>

        </div>
    )
}