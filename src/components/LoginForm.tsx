"use client";
import React, { useState } from "react";
import { STEPS } from "@/enums";
import UserDetails from "./UserDetails";
import ProfileInformation from "./ProfileInformation";
import Preferences from "./Preferences";
import Confirmation from "./Confirmation";


const LoginForm = () => {
  const [step, setStep] = useState(STEPS.USER_DETAILS);
  

  return (
    <> 

      {step === STEPS.USER_DETAILS && <UserDetails setStep={setStep} />}
      {step === STEPS.PROFILE_INFO && <ProfileInformation setStep={setStep} />}
      {step === STEPS.PREFERENCES && <Preferences setStep={setStep} />}
      {step === STEPS.CONFIRMATION && <Confirmation setStep = {setStep} />}

    </>
  );
};

export default LoginForm;
