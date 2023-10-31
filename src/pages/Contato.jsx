import axios from "axios"
import { useState } from "react"
import { Button, CepCheck, Main, Input } from "../Estilos/estilo";
import Banner from "../components/Banner";
import Block from "../components/Block";

const Contato = () => {
    //Vamos criar os estados para armazenas o cep
    const [cep, setCep] = useState('');

    //Estado para armazenas os dados retornados da nossa api VIACEP
    const [data, setData] = useState({});

    //Estado para manipular erro
    const [error, setError] = useState(null);

    function handleCepChange(e) {
        setCep(e.target.value)
    }

    function pesquisaCep() {
        //Usar AXIOS: Manipula o get
        axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
            //Define uma função CALLBACK será bem-sucedida
            .then(
                function (response) {
                    if (response.data && !response.data.erro) {
                        setData(response.data)
                        setError(null);
                    }
                    else {
                        setData({})
                        setError('CEP não encontrado')
                    }
                })
            .catch(function (error) {
                setData({})
                setError('CEP não encontrado')
            })
    }


    return (
        <>
            <Main>
                <section>
                    <Banner></Banner>

                </section>

                <section>
                    <h1>Se cadastre para receber nossa newsletter em casa!</h1>

                    <CepCheck>
                        <Input type="text" placeholder="Cep" value={cep} onChange={handleCepChange} />
                        <Button onClick={pesquisaCep}>Pesquisar</Button>
                    </CepCheck>

                    {error && <p>{error}</p>}
                    {data.cep && (
                        <div>
                            <p>CEP:{data.cep}</p>
                            <p>Logradouro: {data.logradouro}</p>
                            <p>Complemento: {data.complemento}</p>
                            <p>Bairro: {data.bairro} </p>
                            <p>UF: {data.uf}</p>
                            <p>DDD: {data.ddd}</p>
                            <Button><a href="/">Cadastrar</a></Button>
                        </div>
                    )
                    }


                </section>

                <footer>

                </footer>
            </Main>
        </>
    )
}

export default Contato;