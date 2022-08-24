import React, { Component } from "react";

export default class App extends Component {
  state = {
    dados: [
      {
        nome: "Mateus",
        age: 25,
        cidade: "Rio de Janeiro"
      },
      {
        nome: "Adriana",
        age: 43,
        cidade: "São Paulo"
      },
      {
        nome: "Lucas",
        age: 20,
        cidade: "São Gonçalo"
      },
      {
        nome: "Guilherme",
        age: 27,
        cidade: "Uberlândia"
      },
      {
        nome: "Felipe",
        age: 330,
        cidade: "Rio de Janeiro"
      },
      {
        nome: "Eduarda",
        age: 21,
        cidade: "Recife"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.dados.map((item) => (
          <div>
            <h2>Nome: {item.nome}</h2>
            <p>Cidade: {item.cidade}</p>
          </div>
        ))}
      </div>
    );
  }
}
