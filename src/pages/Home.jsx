import { GridCards, Main } from "../Estilos/estilo";
import Banner from "../components/Banner";
import Block from "../components/Block";
import Menu from "../components/Menu";


const Home = () => {
    return (
        <>
            <Main>
                <section>
                    <Banner></Banner>

                </section>

                <section>
                    <h1>Entenda Sobre o Assunto</h1>
                    <h2>Ecossistema</h2>
                    <GridCards>
                        <Block title={"Gestão ambiental"} text={"O município vem, desde a constituição de 1988 adquirindo cada vez mais autonomia."} />
                        <Block title={"Gestão ambiental"} text={"O município vem, desde a constituição de 1988 adquirindo cada vez mais autonomia."} />
                        <Block title={"Gestão ambiental"} text={"O município vem, desde a constituição de 1988 adquirindo cada vez mais autonomia."} />
                        <Block title={"Gestão ambiental"} text={"O município vem, desde a constituição de 1988 adquirindo cada vez mais autonomia."} />
                    </GridCards>
                </section>

                <footer>
                    
                </footer>
            </Main>
        </>

    )
}

export default Home;