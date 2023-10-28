import {NavBar} from '../Estilos/estilo'

const Menu = () => {
  return (
    <>
      <NavBar>
        <ul>
          <li>
            <a href="/">HOME</a>
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
      </NavBar>
    </>
  );
};
export default Menu;
