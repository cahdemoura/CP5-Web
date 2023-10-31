import { BannerImg,Button2 } from "../Estilos/estilo";

const Banner = () => {
    return (
        <BannerImg>

            <img src="/ES.jpg" alt="" srcset="" />

            <div>
                <h1>Explorando o Maravilhoso</h1>
                <h2>Mundo dos Ecossistemas</h2>
                <p>Descubra a beleza e a complexidade da vida na Terra. Aprecie a diversidade da natureza em no máximo duas linhas.</p>
                <Button2>Saiba mais!</Button2>
            </div>

        </BannerImg>
    )
}

export default Banner;