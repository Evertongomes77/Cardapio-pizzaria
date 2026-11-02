import { Circulo,Container, Status } from "./styled";



function Horario() {

    const atendimento = [
        { dia: 'domingo', horario: null },
        { dia: 'segunda', aberto: 18, fechado: 23 },
        { dia: 'terça', aberto: 18, fechado: 23 },
        { dia: 'quarta', aberto: 18, fechado: 23 },
        { dia: 'quinta', aberto: 18, fechado: 23 },
        { dia: 'sexta', aberto: 18, fechado: 23 },
        { dia: 'sábado', aberto: 18, fechado: 23.59 }
    ];

    const diaSemana = new Date().getDay()
    const horaAtual = new Date().getHours()
    const status= horaAtual>= atendimento[diaSemana].aberto && horaAtual< atendimento[diaSemana].fechado? 'aberto' : 'fechado';
    return (
        <Container>
            <Circulo status={status} />
            <Status status={status}> {status}</Status>
            <span>fecha às {atendimento[diaSemana].fechado}h</span>
        </Container>
    )
}


export default Horario;