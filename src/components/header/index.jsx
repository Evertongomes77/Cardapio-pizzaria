import logo_pizza from '../../assets/logo_pizza.png'
import {ImagemLogo, Container, ContainerTexto, TituloPizzaria} from './styled'

function Header(){

    return(
        <Container>
            <ImagemLogo src={logo_pizza} alt="Logo pizzaria forlenha" />
            <ContainerTexto>
                <p style={{fontSize:16,color:"rgb(48, 47, 47)", fontWeight:700}}>Pizzaria artesanal fogo e brasa</p>
                <TituloPizzaria>Pizzaria forlenha</TituloPizzaria>
            </ContainerTexto>
        </Container>
    )
}

export default Header;