import React, { useEffect, useState } from 'react';
import { Image, Text, FlatList, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import {
  HeaderText,
  Title,
  Description,
  DetailsButton,
  DetailsButtonText,
} from './styles';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {
  IncidentCard,
  IncidentProperty,
  IncidentValue,
} from '../../components/IncidentCard';

export default function Incidents({ navigation }) {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return false;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);
    const response = await api.get('/api/incidents', {
      params: { page },
    });

    if (response.data.length) {
      setIncidents([...incidents, ...response.data]);
      setTotal(response.headers['x-total-count']);
      setPage(page + 1);
    }
    setLoading(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <Text style={{ fontWeight: 'bold' }}>{total} casos</Text>
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      {!incidents.length ? (
        <Text>Nenhum caso disponível no momento :(</Text>
      ) : (
        <Description>Escolha um dos casos abaixo e salve o dia!</Description>
      )}
      <FlatList
        style={{ marginTop: 32 }}
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <IncidentCard>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat({ style: 'currency', curreny: 'BRL' }).format(
                incident.value
              )}
            </IncidentValue>

            <DetailsButton
              onPress={() => navigation.navigate('Detail', { incident })}
            >
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </IncidentCard>
        )}
      />
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#e02041"
          style={{ marginTop: 10 }}
        />
      ) : null}
    </Container>
  );
}
