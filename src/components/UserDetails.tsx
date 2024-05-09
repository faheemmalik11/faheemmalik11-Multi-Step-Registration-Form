import React, { useContext } from "react";
import { FormikValues, useFormik } from "formik";
import { userDetailSchema } from "@/validationSchemas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { STEPS } from "@/enums";
import { Progress } from "./ui/progress";
import { RegistrationContext } from "@/contexts/RegistrationContext";
import ErrorMessage from "./ErrorMessage";
import { deleteObjectProperty } from "@/lib/utils";

interface Props {
  setStep: (step: STEPS) => void;
}

const UserDetails: React.FC<Props> = ({ setStep }) => {
  const {
    name,
    email,
    password,
    confirmPassword,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
  } = useContext(RegistrationContext);

  const initialValues = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userDetailSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values: any) => {
      handlClickNext(values);
    },
  });

  const { values, errors, handleChange, handleSubmit, setErrors } = formik;

  const handlClickNext = (values: FormikValues) => {
    setStep(STEPS.PROFILE_INFO);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setName(e.target.value);
    const newErrors = deleteObjectProperty(errors, e.target.name);
    setErrors(newErrors);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setEmail(e.target.value);
    const newErrors = deleteObjectProperty(errors, e.target.name);
    setErrors(newErrors)
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setPassword(e.target.value);
    const newErrors = deleteObjectProperty(errors, e.target.name);
    setErrors(newErrors)
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleChange(e);
    setConfirmPassword(e.target.value);
    const newErrors = deleteObjectProperty(errors, e.target.name);
    setErrors(newErrors)
  };






  return (
    <form className="w-full max-w-[500px] px-5" onSubmit={handleSubmit}>
      <Card className="w-full">
        <Progress value={33} />
        <CardHeader>
          <CardTitle>Registeration</CardTitle>
          <CardDescription className="mt-10">User Details</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                onChange={handleNameChange}
                id="name"
                placeholder="Enter your name"
                value={name}
                className={`${errors.name ? "border-red-600 bg-red-50":""}`}
              />
              <div className="h-4">
                {errors.name ? <ErrorMessage message={errors.name} />: <></> }
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`${errors.email ? "border-red-600 bg-red-50":""}`}
              />
              <div className="h-4">
                {errors.email ? <ErrorMessage message={errors.email} />: <></> }</div>
              </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={handlePasswordChange}
                className={`${errors.password ? "border-red-600 bg-red-50":""}`}

              />
              <div className="h-4">
                {errors.password ? <ErrorMessage message={errors.password} />: <></> }</div>
              </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`${errors.confirmPassword ? "border-red-600 bg-red-50":""}`}

              />
              <div className="h-4">
                {errors.confirmPassword ? <ErrorMessage message={errors.confirmPassword} />: <></> }</div>
              </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button type="submit">Next</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default UserDetails;
