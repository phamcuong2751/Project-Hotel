import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import Client from '../../services/Client'
import { saveToken } from '../../services/LocalStorage'
import { Formik } from 'formik'

export default function Login () {
  const history = useHistory()
  const client = new Client()
  const sendForm = async (username, password) => {
    const result = await client.login(username, password)

    console.log('result', result)
    if (result.status === 200) {
      toast.success('Login successfully')
      console.log('result.data', result)
      saveToken(result.data)

      // navigate to home
      window.location.href = '/'
    } else {
      toast.error('Create account fail')
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='container mx-auto px-4 h-full'>
        <div className='bg-blueGray-100 flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div
              className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <div className='text-blueGray-400 text-center mb-3 font-bold'>
                  <small>Sign in with your credentials</small>
                </div>
                <Formik
                  initialValues={{ username: '', password: '' }}
                  onSubmit={async (values, { setSubmitting }) => {
                    console.log('asdsad', values)
                    await sendForm(values.username, values.password)
                    setSubmitting(false)
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Username
                        </label>
                        <input
                          type='name'
                          name='username'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          placeholder='Username'
                        />
                      </div>

                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          placeholder='Password'
                        />
                      </div>
                      <div>
                        <label className='inline-flex items-center cursor-pointer'>
                          <input
                            id='customCheckLogin'
                            type='checkbox'
                            className='form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
                          />
                          <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                        Remember me
                      </span>
                        </label>
                      </div>

                      <div className='text-center mt-6'>
                        <button
                          className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                          type='submit'
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  )}</Formik>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <a
                  href='#pablo'
                  onClick={(e) => e.preventDefault()}
                  className='text-blueGray-500'
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className='w-1/2 text-right'>
                <Link to='/register' className='text-blueGray-500'>
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
