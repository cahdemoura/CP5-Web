import { NavMenu } from "../Estilos/estilo";

const Menu = () => {
  return (
    <>
      <NavMenu>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
          <li>
            <a href="/tema">Tema</a>
          </li>
        </ul>
      </NavMenu>
    </>
  );
};
export default Menu;
