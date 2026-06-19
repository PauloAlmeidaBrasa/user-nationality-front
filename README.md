# Nationality User Frontend

## Português

Aplicação frontend em Vue 3 para buscar a nacionalidade de uma pessoa pelo nome. O app inclui tela de login, navegação autenticada e uma página de busca de nacionalidade que mostra a nacionalidade mais provável e a probabilidade.

## Tecnologias

- Vue 3
- Vite
- Pinia
- Vue Router
- Axios

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalar localmente

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

Abra a URL local exibida no terminal para usar o app.

## Build para produção

```bash
npm run build
```

## Visualizar build de produção

```bash
npm run preview
```

## Funcionalidade de busca de nacionalidade

O app permite que o usuário pesquise dados de nacionalidade digitando um nome e clicando em `Search`.

- A página de busca está em `src/views/HomeView.vue`
- A chamada para a API de nacionalidade está em `src/api/nationality-api/nationality.js`
- Os resultados são exibidos em `src/components/NationalityResult.vue`

Quando um nome é enviado, o app faz uma requisição para o endpoint do backend:

```text
/v1/nationality/findNacionalityByPerson/{name}
```

A resposta é exibida com:

- o nome pesquisado
- o país de nacionalidade mais provável
- a probabilidade calculada

## Observações

- Este frontend espera que haja uma API backend em execução para resolver as buscas de nacionalidade.
- Verifique a URL base do backend em `src/api/nationality-api/http.js` se necessário.

---

## English

A Vue 3 frontend application for searching a person’s nationality by name. This app includes login, authenticated navigation, and a nationality lookup screen that displays the most likely nationality and probability.

## Technologies

- Vue 3
- Vite
- Pinia
- Vue Router
- Axios

## Prerequisites

- Node.js 20 or higher
- npm

## Install locally

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to use the app.

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Nationality lookup feature

The app lets users search for nationality data by entering a name and clicking `Search`.

- The search page is implemented in `src/views/HomeView.vue`
- The nationality API call is defined in `src/api/nationality-api/nationality.js`
- Results display in `src/components/NationalityResult.vue`

When a name is submitted, the app sends a request to the backend endpoint:

```text
/v1/nationality/findNacionalityByPerson/{name}
```

The response is shown with:

- the searched name
- the most likely nationality country
- the calculated probability

## Notes

- This frontend expects a running backend API to resolve nationality searches.
- Verify the backend base URL in `src/api/nationality-api/http.js` if needed.
