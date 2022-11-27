## API Endpoins

`POST` **/api/sessions** - Criar sessão

- Body (JSON)

```json
{
  "id": "235acs45e"
}
```

`GET` **/api/ongs** - Listar todas as ongs

`POST` **/api/ongs** - Criar uma ong

- Body (JSON)

```json
{
  "name": "Atados SP",
  "email": "contato@atadosp.com.br",
  "whatsapp": "11948240050",
  "city": "São Paulo",
  "uf": "SP"
}
```

`POST` **/api/incidents** - Criar um caso

- Headers
  - Authorization - `ongId`
- Body (JSON)

```json
{
  "title": "Recuperação da cadelinha cordelia",
  "description": "Nossa cadelinha cordelia se feriu gravemente em um acidente, precisamos de sua ajuda.",
  "value": 100
}
```

`GET` **/api/incidents/** - Listar todos os casos

- Headers
  - Authorization - `ongId`

`DELETE` **/api/incidents/:id** - Remover um caso

- Headers

  - Authorization - `ongId`

- URL Parameters

| Nome        | Descrição  |
| ----------- | ---------- |
| id (number) | ID do caso |

`GET` **/api/profile/** - Visualizar perfil

- Headers
  - Authorization - `ongId`
