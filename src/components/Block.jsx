import { BlockDiv, Border } from "../Estilos/estilo";

const Block = (props) => {
    return (
        <>
            <BlockDiv>
                <img src="/photo1.jpg" alt="" srcset="" />
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