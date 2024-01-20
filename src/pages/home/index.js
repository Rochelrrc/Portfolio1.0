import './styles.css';
import ImgLogo from '../../assets/Boy3d.jpg';
import AboutIcon from '../../assets/AboutIcon.png'

export default function Home() {
    return (
        <>
            <header>
                <h2><span>Bem-vindo</span> ao meu Portifólio</h2>

                <navbar>
                    <ul>
                        <li> <a href=''>Home</a> </li>
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
                <p></p>
            </main>

        </>
    )
}