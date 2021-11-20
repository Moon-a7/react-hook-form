import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit } = useForm()
  const { result, setResult } = useState('')
  const onSubmit = (data) => setResult(JSON.stringify(data))

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First name"></input>
        <input {...register('lastName')} placeholder="Last name" />
        <input {...register('email')} placeholder="email" />
        <input {...register('password')} placeholder="password" />
        <input {...register('confirmPassword')} placeholder="confirmPassword" />
        <div>
          <label id="age">I'm over 18 years old.</label>
          <input
            {...register('age>18')}
            id="age"
            type="checkbox"
            placeholder="age>18"
          />
        </div>

        <select {...register('select categories')}>
          <option value="">Select...</option>
          <option value="P">Principal-zleceniodawca</option>
          <option value="C">Contractor</option>
        </select>
      </form>
    </div>
  )
}

export default App
