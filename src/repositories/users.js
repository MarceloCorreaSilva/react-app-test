import config from '../config';

const URL_USERS = `${config.URL_BACKEND}/users`;

async function getAll() {
  const response = await fetch(`${URL_USERS}`);
  if (response.ok) {
    const users = await response.json();
    return users;
  }
  throw new Error('Não foi possível pegar os dados');
}

async function create(user) {
  const response = await fetch(`${URL_USERS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }
  throw new Error('Não foi possível cadastrar os dados');
}

export default {
  getAll,
  create,
};
