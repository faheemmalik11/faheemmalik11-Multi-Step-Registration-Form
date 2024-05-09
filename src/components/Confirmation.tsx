import { RegistrationContext } from "@/contexts/RegistrationContext";
import React, { FC, useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { STEPS } from "@/enums";

interface Props {
    setStep: (step: STEPS)=>void
}

const Confirmation: FC<Props> = ({setStep}) => {
  const { name, email, profilePicture, settings, bio } =
    useContext(RegistrationContext);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>All set</CardTitle>
        <CardDescription className="mt-10">
          We have recieved you registration request.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="w-full flex sm:flex-row flex-col justify-between gap-4">
          <Avatar className="w-[150px] h-[150px]">
            <AvatarImage src={profilePicture} />
            <AvatarFallback className="flex justify-center">
              {" "}
              <img src={"profile_icon.png"} />
            </AvatarFallback>
          </Avatar>

          <div className="sm:w-[70%] flex flex-col gap-3 border p-3 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>

              <Input
                name="name"
                readOnly
                value={name}
                className="cursor-auto"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>

              <Input
                name="email"
                readOnly
                value={email}
                className="cursor-auto"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="bio">Bio</Label>

              <Textarea
                readOnly
                name="bio"
                className="h-fit min-h-[200px] cursor-default"
                value={bio}
              />
            </div>
            <h3 className="mb-2 text-lg font-medium">Notifications</h3>

            <div className=" flex w-full border justify-between p-2 rounded-lg">
              <h3 className="text-base font-medium">Marketing emails</h3>
              <Switch className="cursor-default" checked={settings.marketingEmails} />
            </div>

            <div className=" flex w-full border justify-between p-2 rounded-lg">
              <h3 className="text-base font-medium">Security emails</h3>
              <Switch className="cursor-default" checked={settings.sercurityEmails} />
            </div>
            <div className=" flex w-full border justify-between p-2 rounded-lg">
              <h3 className="text-base font-medium">2-step verification</h3>
              <Switch className="cursor-default" checked={settings.twoStepVerification} />
            </div>
            <div className=" flex w-full border justify-between p-2 rounded-lg">
              <h3 className="text-base font-medium">Multipe Logins</h3>
              <Switch className="cursor-default" checked={settings.multipleLogins} />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={()=> setStep(STEPS.USER_DETAILS)} >Back to home</Button>
      </CardFooter>
    </Card>
  );
};

export default Confirmation;
