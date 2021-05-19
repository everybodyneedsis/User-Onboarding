import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import schema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'

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

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const postNewUser = newUser => {
    axios.post('http://buddies.com/api/friends', newUser)
      .then(res => {
        setUsers([res.data, ...users])
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
        [name]: err.errors[0]
      }))
  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
