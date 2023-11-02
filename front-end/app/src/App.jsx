import React, { Component } from 'react';

// Componente de encabezado
class Header extends Component {
  render() {
    return (
      <header>
        <h1>CRM Simple</h1>
        <nav>
          {/* Agrega enlaces a diferentes secciones del CRM */}
          <ul>
            <li>hola </li> 
          </ul>
        </nav>
      </header>
    );
  }
}

// Componente de lista de clientes
class CustomerList extends Component {
  render() {
    return (
      <div>
        <h2>Lista de Clientes</h2>
        {/* Aquí puedes mostrar una tabla o lista de clientes */}
      </div>
    );
  }
}

// Componente de detalles del cliente
class CustomerDetails extends Component {
  render() {
    return (
      <div>
        <h2>Detalles del Cliente</h2>
        {/* Muestra los detalles del cliente seleccionado */}
      </div>
    );
  }
}

// Componente de formulario de cliente
class CustomerForm extends Component {
  render() {
    return (
      <div>
        <h2>Formulario de Cliente</h2>
        {/* Agrega un formulario para agregar o editar clientes */}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <CustomerList />
          <CustomerDetails />
          <CustomerForm />
        </div>
      </div>
    );
  }
}

export default App;
