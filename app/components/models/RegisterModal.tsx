'use client';
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";
import Models from "./Models";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";




const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
          .then(() => {
            registerModal.onClose();
          })
          .catch((error) => {
            toast.error('Somthing went wrong!');
          })
          .finally(()=>{
            setIsLoading(false);
          })
    }
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
             title="Wellcome to AirBnb"
             subtitle="Create an account!"
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
             id="name"
             label="Name"
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
            onClick={() => {}}

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
      isOpen={ registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body= {bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal