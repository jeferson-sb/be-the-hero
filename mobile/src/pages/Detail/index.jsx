import React from 'react';
import { TouchableOpacity, Linking, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailCompose from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {
  IncidentCard,
  IncidentProperty,
  IncidentValue,
} from '../../components/IncidentCard';
import {
  HeroContainer,
  HeroTitle,
  HeroDescription,
  ActionsContainer,
  ActionButton,
  ActionButtonText,
} from './styles';

export default function Detail({ navigation, route }) {
  const incident = route.params.incident;

  // prettier-ignore
  const message = `
  Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat({
    style: 'currency',
    curreny: 'BRL'
  }).format(incident.value)}.
  `;

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Herói do caso : ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=55${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>

      <IncidentCard style={{ marginTop: 40 }}>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat({ style: 'currency', curreny: 'BRL' }).format(
            incident.value
          )}
        </IncidentValue>
      </IncidentCard>

      <HeroContainer>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o heroi desse caso.</HeroTitle>
        <HeroDescription>Entre em contato.</HeroDescription>

        <ActionsContainer>
          <ActionButton onPress={sendWhatsApp}>
            <ActionButtonText>WhatsApp</ActionButtonText>
          </ActionButton>
          <ActionButton onPress={sendMail}>
            <ActionButtonText>E-mail</ActionButtonText>
          </ActionButton>
        </ActionsContainer>
      </HeroContainer>
    </Container>
  );
}
