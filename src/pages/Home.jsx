import { GridCards, Main } from "../Estilos/estilo";
import Banner from "../components/Banner";
import Block from "../components/Block";



const Home = () => {
    return (
        <>
            <Main>
                <section>
                    <Banner></Banner>

                </section>

                <section>
                    <h1>Ecossistemas</h1>
                    <GridCards>
                        <Block img={"/photo1.jpg"} title={"Florestas Tropicais"} text={"As florestas tropicais são vitais para a saúde do nosso planeta, produzindo oxigênio e abrigando uma incrível biodiversidade."} />
                        <Block img={"/photo2.jpg"} title={"Recifes de Coral"} text={"Os recifes de coral são ecossistemas incrivelmente coloridos e importantes para os oceanos, fornecendo abrigo e sustento a inúmeras espécies marinhas."} />
                        <Block img={"/photo3.jpg"} title={"Tundra Ártica"} text={"A tundra ártica é um ecossistema desafiador, onde a vida floresce mesmo sob temperaturas congelantes, demonstrando a resiliência da natureza."} />
                        <Block img={"/photo4.jpg"} title={"Beleza na Aride"} text={"Os desertos são ecossistemas desafiadores, onde a vida floresce de maneiras surpreendentes. Descubra como as plantas e animais do deserto se adaptam à escassez de água e às variações extremas de temperatura."} />
                    </GridCards>
                </section>

                <footer>

                </footer>
            </Main>
        </>

    )
}

export default Home;