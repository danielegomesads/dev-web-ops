//App.js
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './App.css'

function App() {
  // Estados para armazenar email, senha e mensagem de feedback
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função de validação ao clicar no botão
  const validarLogin = () => {
    if (email === 'daniele.gomes@pucpr.br' && senha === '987654') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', marginTop: '100px' }}>
      <h2>Login</h2>
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
        onClick={validarLogin}
        style={{ width: '100%' }}
      >
        Acessar
      </Button>
      <label style={{ display: 'block', marginTop: '20px' }}>{mensagem}</label>
    </div>
  );
}

export default App;
