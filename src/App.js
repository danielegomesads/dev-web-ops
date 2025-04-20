import React, { useState } from 'react';
import Button from './Button';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const specialCharRegex = /[!@#$%^&*]/;

  // Função de validação ao clicar no botão ou pressionar Enter
  const validarLogin = (event) => {
    if (event) event.preventDefault(); // Evita o reload da página

    if (!specialCharRegex.test(senha)) {
      setMensagem('A senha deve conter pelo menos um caractere especial!');
      return;
    }

    if (email === 'daniele.gomes@pucpr.br' && senha === '987654!') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2>Login</h2>
      <form onSubmit={validarLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />
        <Button
          type="submit"
          style={{ width: '100%' }}
        >
          Acessar
        </Button>
      </form>
      <label style={{ display: 'block', marginTop: '20px' }}>{mensagem}</label>
    </div>
  );
}

export default App;
