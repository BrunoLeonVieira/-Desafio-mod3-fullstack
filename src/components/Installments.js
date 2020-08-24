import React from "react";
import Installment from "./Installment";

export default function Installments({ parcelas }) {
  return (
    <div className="container row">
      {parcelas.map((parcela, index) => {
        return <Installment parcela={parcela} key={index} />;
      })}
    </div>
  );
}
