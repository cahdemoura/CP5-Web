import { GridCards, Main, MainSobre, PerfilPhoto } from "../Estilos/estilo";
import Banner from "../components/Banner";
import Block from "../components/Block";

const Sobre = () => {
    return (
        <>
            <MainSobre>

                <section>
                    <h1>Projeto Desenvolvido por:</h1>
                    <PerfilPhoto src="/Perfil.jpg" alt="" srcset="" />
                    <div>
                        <h2>Caique De Moura</h2>
                        <h3>RM99474</h3>
                    </div>

                </section>

                <footer>

                </footer>
            </MainSobre>
        </>

    )
}

export default Sobre;