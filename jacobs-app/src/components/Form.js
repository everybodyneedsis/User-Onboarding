import React from 'react'
import styled from 'styled-components'

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid white;
  margin-bottom: 20px;
  border-radius: 5px;

  background-color: ${props => props.theme.tertiaryColor};
  color: ${props => props.theme.white};

  @media ${props => props.theme.breakpointMobile} {
    width: initial;
  }

  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${props => props.theme.black};
  }

  button {
    background-color: ${props => props.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
    }
  }
`

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <StyledFriend>
          <form onSubmit={onSubmit}>
        <h2>Become a Member:</h2>
        <label> Name:
            <input 
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
        </label>

        <label>Email:
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>

        <label>Password:
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms Of Service
          <input
            checked={values.termsOfService}
            onChange={onChange}
            name='termsOfService'
            type='checkbox'
          />
        </label>

        <button id='submit' disabled={disabled}>submit</button>

    </form>
        </StyledFriend>
    
    )
}