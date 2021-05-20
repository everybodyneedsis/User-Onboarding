import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'
import User from './User'


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(setFormValues(initialFormValues))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfService: formValues.termsOfService,
    }
    postNewUser(newUser)
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({
        ...formErrors, 
        [name]: ''
      }))
      .catch(err => setFormErrors({
        ...formErrors, 
        [name]: err.formErrors
      }))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <h1>Welcome to The Jacob Show</h1>
      <div className="App container">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        reset={formErrors}
        disabled={disabled}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

    </div>
  </div>
    
  );
}

export default App;
