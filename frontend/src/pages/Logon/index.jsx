import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import { Button, BackLink } from '../../assets/styles/components';
import { LogonContainer } from './styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('/api/sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <LogonContainer>
      <section className="form">
        <img src={logoImg} alt="Be the hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <BackLink to="/register">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </BackLink>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </LogonContainer>
  );
}
