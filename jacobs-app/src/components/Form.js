import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        errors,
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
    <form onSubmit={onSubmit}>
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

        <button type='submit'>Submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
        </div>

    </form>
    )
}