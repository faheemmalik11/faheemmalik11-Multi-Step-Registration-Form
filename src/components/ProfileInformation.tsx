import React, { FC, useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

import { STEPS } from "@/enums";
import FileInput from "./FileInput";
import { Progress } from "./ui/progress";
import { RegistrationContext } from "@/contexts/RegistrationContext";
import ErrorMessage from "./ErrorMessage";

interface Props {
  setStep: (step: STEPS) => void;
}

const ProfileInformation: FC<Props> = ({ setStep }) => {
  const [invalidFile, setInvalidFile] = useState<boolean>(false);
  const { profilePicture, bio, setProfilePicture, setBio } =
    useContext(RegistrationContext);
  const [picError, setPicError] = useState<boolean>(false);
  const [bioError, setBioError] = useState<boolean>(false);

  

  //console.log(selectedFile ? URL.createObjectURL(selectedFile) : undefined);

  const handleClickNext = () => {
    if (!profilePicture && bio === "") {
      setPicError(true);
      setBioError(true);
    } else if (!profilePicture) {
      setPicError(true);
    } else if (bio === "") {
      setBioError(true);
    } else setStep(STEPS.PREFERENCES);
  };


  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setBio(e.target.value);
    setBioError(false);
  
  }
  const handleFileChange = (file: string) => {
    setProfilePicture(file);
  };

  return (
    <Card className="w-[500px]">
      <Progress value={66} />
      <CardHeader>
        <CardTitle>Registeration</CardTitle>
        <CardDescription className="mt-10">Profile Information</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="w-full flex justify-center">
            <Avatar className="w-[150px] h-[150px]">
              <AvatarImage
                src={ profilePicture }
              />
              <AvatarFallback className="flex justify-center">
                {" "}
                <img src={"profile_icon.png" } />
              </AvatarFallback>
            </Avatar>
          </div>

          <FileInput
            setInvalidFile={setInvalidFile}
            onChange={handleFileChange}
            name="profilePicture"
            inValidFile={invalidFile}
            setSelectedFile={setProfilePicture}
            profilePicture={profilePicture}
            picError={picError}
            setPicError={setPicError}
          />
          <div className="grid w-full gap-1.5">
            <div className="flex items-center gap-3">
              <Label htmlFor="bio">Bio</Label>
              {bioError ? (
                <ErrorMessage message={"Please enter your bio"} />
              ) : (
                <></>
              )}
            </div>
            <Textarea
              name="bio"
              className="h-[200px]"
              placeholder="Tell us about yourself."
              id="bio"
              onChange={handleBioChange}
              value={bio}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button onClick={() => setStep(STEPS.USER_DETAILS)} variant="outline">
          Back
        </Button>
        <Button onClick={handleClickNext}>Next</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileInformation;
