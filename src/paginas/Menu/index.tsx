import * as S from "./estilos";


const Menu = () => {
    return (
        <S.Menu>
            <S.MenuItem to="/">Início</S.MenuItem>
            <S.MenuItem to="/estoque">Estoque</S.MenuItem>
            <S.MenuItem to="/laboratorios">Laboratórios</S.MenuItem>
        </S.Menu>
    )
}

export default Menu;
