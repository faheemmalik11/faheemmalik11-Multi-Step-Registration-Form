import { STEPS } from "@/enums";
import React, { FC, useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Switch } from "./ui/switch";
import { Progress } from "./ui/progress";
import { RegistrationContext } from "@/contexts/RegistrationContext";
import { registerUser } from "@/services/registration";
import { AxiosError } from "axios";

interface Props {
  setStep: (step: STEPS) => void;
}

const Preferences: FC<Props> = ({ setStep }) => {
  const { settings, setSettings, name, email, password, bio, profilePicture } = useContext(RegistrationContext);

  const handleMarketingEmailsChange = () => {
    const updatedSettings = {
      ...settings,
      marketingEmails: !settings.marketingEmails,
    };
    setSettings(updatedSettings);
  };

  const handleSecurityEmailsChange = () => {
    const updatedSettings = {
      ...settings,
      sercurityEmails: !settings.sercurityEmails,
    };
    setSettings(updatedSettings);
  };

  const handleTwoStepVerificationChange = () => {
    const updatedSettings = {
      ...settings,
      twoStepVerification: !settings.twoStepVerification,
    };
    setSettings(updatedSettings);
  };

  const handleMultipleLoginsChange = () => {
    const updatedSettings = {
      ...settings,
      multipleLogins: !settings.multipleLogins,
    };
    setSettings(updatedSettings);
  };





  const  handleSubmitRegistration = async ()=>{

    const registrationData = {
      name: name,
      email: email, 
      bio: bio,
      password: password, 
      settings: settings, 
      profilePicture: profilePicture

    }
    
    try {
      const res = await registerUser(registrationData);
      console.log(res);
      
    }catch(error: any) {
        console.log(error);
    }


    setStep(STEPS.CONFIRMATION)
    
  }

  return (
    <Card className="w-full max-w-[500px]">
      <Progress value={100} />
      <CardHeader>
        <CardTitle>Registeration</CardTitle>
        <CardDescription className="mt-10">Preferences</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-lg font-medium">Email Notifications</h3>
          <div className=" flex w-full border justify-between p-2 rounded-lg">
            <div className="flex flex-col gap-0">
              <h3 className="text-base font-medium">Marketing emails</h3>
              <p className="text-sm">
                Receive emails about new products, features, and more.
              </p>
            </div>
            <Switch
              onClick={handleMarketingEmailsChange}
              checked={settings.marketingEmails}
            />
          </div>
          <div className=" flex w-full border justify-between p-2 rounded-lg">
            <div className="flex flex-col gap-0">
              <h3 className="text-base font-medium">Security emails</h3>
              <p className="text-sm">
                Receive emails about your account security and policies.
              </p>
            </div>
            <Switch
              onClick={handleSecurityEmailsChange}
              checked={settings.sercurityEmails}
            />
          </div>
          <h3 className="mb-2 text-lg font-medium">Security Settings</h3>
          <div className=" flex w-full border justify-between p-2 rounded-lg">
            <div className="flex flex-col gap-0">
              <h3 className="text-base font-medium">2-Step Verification</h3>
              <p className="text-sm">Turn on 2-Step Verification</p>
            </div>
            <Switch
              checked={settings.twoStepVerification}
              onClick={handleTwoStepVerificationChange}
            />
          </div>
          <div className=" flex w-full border justify-between p-2 rounded-lg">
            <div className="flex flex-col gap-0">
              <h3 className="text-base font-medium">Multiple Logins</h3>
              <p className="text-sm">Allow multiple logins by the same user</p>
            </div>
            <Switch
              checked={settings.multipleLogins}
              onClick={handleMultipleLoginsChange}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={() => setStep(STEPS.PROFILE_INFO)} variant="outline">
          Back
        </Button>
        <Button onClick={handleSubmitRegistration}>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default Preferences;
