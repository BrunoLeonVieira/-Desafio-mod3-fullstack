import React from "react";

export default function Form({ onCapital, onTaxaJuros, onPeriodo }) {
  const handleCapitalChange = (event) => {
    onCapital(+event.target.value);
  };

  const handleTaxaJurosChange = (event) => {
    onTaxaJuros(+event.target.value);
  };

  const handlePeriodoChange = (event) => {
    onPeriodo(+event.target.value);
  };
  return (
    <div className="container row">
      <div className="input-field col s4">
        <input
          id="inputCapital"
          type="number"
          min="100"
          max="100000"
          step="100"
          autoFocus
          onChange={handleCapitalChange}
        />
        <label className="active" htmlFor="inputCapital">
          Capital inicial:
        </label>
      </div>

      <div className="input-field col s4">
        <input
          id="inputTaxaJuros"
          type="number"
          min="-12"
          max="12"
          step="0.1"
          onChange={handleTaxaJurosChange}
        />
        <label className="active" htmlFor="inputTaxaJuros">
          Taxa de juros mensal:
        </label>
      </div>

      <div className="input-field col s4">
        <input
          id="inputPeriodo"
          type="number"
          min="1"
          max="36"
          step="1"
          onChange={handlePeriodoChange}
        />
        <label className="active" htmlFor="inputPeriodo">
          Periodo (meses):
        </label>
      </div>
    </div>
  );
}
