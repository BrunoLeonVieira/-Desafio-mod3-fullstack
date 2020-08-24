import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
  const [capital, setCapital] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [parcelas, setParcelas] = useState([]);

  useEffect(() => {
    if (capital !== 0 && taxaJuros !== 0 && periodo !== 0) {
      // calcularparcelas
      let valorCalculado;
      let taxaReajustada;
      let capitalCalculado = capital;
      const data = [];
      
      for (let i = 0; i < periodo; i++) {
        valorCalculado = capitalCalculado * (taxaJuros * 0.01);
        capitalCalculado = capitalCalculado + valorCalculado;
        taxaReajustada = ((capitalCalculado - capital) * 100) / capital;

        data.push({
          capitalCalculado,
          valorCalculado: capitalCalculado - capital,
          taxaReajustada,
        });
      }

      setParcelas(data);
    }
  }, [capital, taxaJuros, periodo]);

  const handleCapital = (value) => {
    setCapital(value);
  };
  const handleTaxaJuros = (value) => {
    setTaxaJuros(value);
  };
  const handlePeriodo = (value) => {
    setPeriodo(value);
  };

  return (
    <div>
      <h1 className="center">React - Juros Compostos</h1>
      <Form
        onCapital={handleCapital}
        onTaxaJuros={handleTaxaJuros}
        onPeriodo={handlePeriodo}
      />
      <Installments parcelas={parcelas} />
    </div>
  );
}
