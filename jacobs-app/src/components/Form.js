import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
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
            value={values.termsOfService}
            onChange={onChange}
            name='termsOfService'
            type='checkbox'
          />
        </label>
    </form>
    )
}