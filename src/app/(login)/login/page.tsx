import ButtonForm from '@/components/UI/button/ButtonForm';
import Form from '@/components/UI/form/Form';
import FormLabel from '@/components/UI/form/FormLabel';
import Input from '@/components/UI/form/Input';
import Image from 'next/image';
import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <Image src="/assets/img/logo-light.png" alt="log" width={150} height={150}/>
      </div>
      <h1 className="text-2xl font-[700] text-grey-700">Log in to your account</h1>
      <div className="bg-grey-0 p-6 rounded-md !w-screen sm:!w-[480px]">
        <Form classes='flex flex-col gap-2'>
          <div className="flex flex-col">
            <FormLabel label='Email address'/>
            <Input type='email' name='email'/>
          </div>
          <div className='flex flex-col'>
            <FormLabel label='Password'/>
            <Input type='password' name='password'/>
          </div>
          <ButtonForm classes='self-stretch'>Login</ButtonForm>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage;