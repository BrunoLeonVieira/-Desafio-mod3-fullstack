import React from "react";
import { formatMonetaryValue } from "../Helpers/formatHelpers";

export default function Installment({ parcela }) {
  const { capitalCalculado, valorCalculado, taxaReajustada } = parcela;
  return (
    <div className="card col s2">
      <div>{formatMonetaryValue(capitalCalculado)}</div>
      <div>{formatMonetaryValue(valorCalculado)}</div>
      <div>{taxaReajustada.toFixed(2)}%</div>
    </div>
  );
}
