import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import Button from '../../components/Button';
import BackLink from '../../components/BackLink';
import { NewIncidentContainer, NewIncidentContent } from './styles';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/api/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      navigate('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso');
    }
  }

  return (
    <NewIncidentContainer>
      <NewIncidentContent>
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <BackLink className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para home
          </BackLink>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título do Caso"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do caso"
          ></textarea>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor em reais"
          />
          <Button type="submit">Cadastrar</Button>
        </form>
      </NewIncidentContent>
    </NewIncidentContainer>
  );
}
