import { FormikErrors, FormikValues } from 'formik'
import { CircleAlert } from 'lucide-react'
import React, { FC } from 'react'

interface Props {
    message: any
}

const ErrorMessage: FC<Props> = ({message}) => {
  return (
    <div className='flex justify-start gap-2 items-center'>
        <CircleAlert width={15} height={15} color='red' />
        <p className='text-xs text-red-600'>{message}</p>
    </div>
  )
}

export default ErrorMessage
