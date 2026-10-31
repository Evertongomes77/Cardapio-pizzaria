import imagemPizza from '../../assets/pizza_mangericao.png';
import { ImagemPizza, Container, Secao1, Frase, FraseIngredientes, InformacaoesEntrega } from './styled';
import { Clock, Bike } from "lucide-react";

function Apresentacao() {

    return (
        <Container>
            <Secao1>
                <Frase>Feita no fogo. Servida com afeto.</Frase>
                <h2>O melhor da <br /><span>pizzaria artesanal</span></h2>
                <FraseIngredientes>Ingredientes selecionados, massa de longa fermentação <br /> e o sabor inconfundível do nosso forno a lenha.</FraseIngredientes>
                <InformacaoesEntrega>
                    <div>
                        <Clock />
                        <p>18-35 min</p>
                    </div>
                    <div>
                        <Bike />
                        <p>Entrega grátis acima de R$ 80</p>
                    </div>
                </InformacaoesEntrega>
            </Secao1>

            <div>
                <ImagemPizza src={imagemPizza} alt="Imagem pizza artesanal" />
            </div>
        </Container>
    )
}

export default Apresentacao;