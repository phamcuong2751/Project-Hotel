import React from 'react'
import { Formik } from 'formik'

// components

export default function CardSettings () {
  return (
    <>
      <div
        className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='rounded-t bg-white mb-0 px-6 py-6'>
        </div>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <Formik
            initialValues={{ name: '', description: '' }}
            onSubmit={async (values, { setSubmitting }) => {
              console.log('asdsad', values)
              // await sendForm(values.name, values.description)
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
              <form onSubmit={handleSubmit}><h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                Add new type room
              </h6>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Type room name
                      </label>
                      <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      />
                    </div>
                  </div>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      >
                        Description
                      </label>
                      <input
                        type='text'
                        name='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        defaultValue='Lucky'
                      />
                    </div>
                  </div>
                </div>
              </form>)}</Formik>
        </div>
      </div>
    </>
  )
}
