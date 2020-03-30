import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { ButtonLink } from '../../assets/styles/components';
import { ProfileContainer, Header, List } from './styles.js';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const history = useHistory();
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api
      .get('/api/profile', {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/api/incidents/${id}`, {
        headers: { Authorization: ongId }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <ProfileContainer>
      <Header>
        <Link to="/">
          <img src={logoImg} alt="Be the Hero" />
        </Link>
        <span>Bem vinda, {ongName}</span>

        <ButtonLink to="/incidents/new">Cadastrar novo caso</ButtonLink>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02141" />
        </button>
      </Header>
      <h1>Casos cadastrados</h1>
      <List>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>
            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </List>
    </ProfileContainer>
  );
}
