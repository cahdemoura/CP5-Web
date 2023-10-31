import { Button, NavMenu } from "../Estilos/estilo";

const Menu = (props) => {

  return (
    <>
      <NavMenu>
        <h2>EcoSystem</h2>
        <Button onClick={props.theme}>Tema</Button>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/tema">Tema</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
        </ul>
      </NavMenu>
    </>
  );
};
export default Menu;
