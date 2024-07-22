import fatosHistoricos from "../dados/fatos";

export default function buscarFatoPorAno(ano) {
    const fatoPorAno = fatosHistoricos.filter((fatos) => {
        if(fatos.ano === ano) {
            console.log(fatos.Fato);
        }
    });

    return fatoPorAno;
};