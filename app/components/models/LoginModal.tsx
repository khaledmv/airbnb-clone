'use client';
import { signIn } from 'next-auth/react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import {  useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from 'next/navigation';

import Models from "./Models";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";




const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, }
    } = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
         signIn('credentials', {
           ...data,
           redirect:false,

         }).then((callback) => {
          setIsLoading(false);
          if(callback?.ok){
            toast.success('Logged in');
            router.refresh();
            loginModal.onClose();
          }

          if(callback?.error){
            toast.error(callback.error);
          }
         })
    }
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
             title="Wellcome back!"
             subtitle="Log in your account"
            />

            <Input 
             id="email"
             label="Email"
             disabled={isLoading}
             register={register}
             errors = {errors}
             required
            />

            <Input 
             id="password"
             type="password"
             label="Password"
             disabled={isLoading}
             register={register}
             errors = {errors}
             required
            />

        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
          <hr/>

           <Button 
            outline
            label="Coontinue with Google"
            icon={FcGoogle}
            onClick={() => {}}

           />

           <Button 
            outline
            label="Coontinue with Github"
            icon={AiFillGithub}
            onClick={() => signIn('github')}

           />
           <div className="text-netutral-700 text-center mt-4 font-light">
            
            <div className="flex flex-row items-center justify-center gap-4">
            <div>
                Already have an account?
             </div>
             <div onClick={registerModal.onClose} className="text-neutral-800 font-bold cursor-pointer hover:underline">
                Log in
             </div>
            </div>

           </div>
        </div>
    )
  return (
    <Models
      disabled={isLoading}
      isOpen={ loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body= {bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal