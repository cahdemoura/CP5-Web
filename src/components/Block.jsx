import { BlockDiv, Border, ImgCards } from "../Estilos/estilo";

const Block = (props) => {
    return (
        <>
            <BlockDiv>
                <ImgCards src={props.img} alt="" srcset="" />
                <div>
                    <h1>{props.title}</h1>
                    <Border></Border>
                    <p>{props.text}</p>
                </div>
            </BlockDiv>
        </>
    )
}

export default Block;