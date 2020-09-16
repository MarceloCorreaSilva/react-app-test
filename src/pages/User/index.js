import React, { useState, useEffect } from 'react';

// Layout
import LayoutDefault from '../Layouts/Default';

// Componets
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Table from '../../components/Table';

// Repositories
import userRepository from '../../repositories/users';

// Hooks
import useForm from '../../hooks/useForm';

function User() {
  // const data = [{ id: 1, name: 'Test' }, { id: 2, name: 'Marcelo' }];

  const [users, setUsers] = useState([]);
  const { handleChange, values, clearForm } = useForm({
    name: '',
  });

  async function searchUsers() {
    const usersFromServer = await userRepository.getAll();
    setUsers(usersFromServer);
  }

  useEffect(() => {
    // userRepository.getAll()
    //   .then((usersFromServer) => {
    //     setUsers(usersFromServer);
    //   });
    searchUsers();
  }, []);

  return (
    <LayoutDefault>
      <h1>
        Users:
        {' '}
        {values.name}
      </h1>
      <hr />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          userRepository.create({
            name: values.name,
          })
            .then(() => {
              console.log('Cadastrou com sucesso!');

              setUsers([
                ...users,
                {
                  name: values.name,
                },
              ]);

              clearForm();
              searchUsers();
            });
        }}
      >
        <FormField
          label="Nome do usuário:"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <Button className="btn btn-primary">
          Cadastrar
        </Button>
      </form>

      <hr />
      {
        users.length >= 1 && (
          <Table
            head={{ id: '#', name: 'Nome' }}
            data={users}
          />
        )
      }

      {/* {users.length === 0 && (
      <div>
        Loading...
      </div>
      )} */}

      {/* <ul>
        {users.map((user) => (
          <li key={`${user.id}`}>
            {user.name}
          </li>
        ))}
      </ul> */}
    </LayoutDefault>
  );
}

export default User;
