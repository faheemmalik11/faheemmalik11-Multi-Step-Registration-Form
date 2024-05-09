import React, { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./ErrorMessage";

interface Props {
  onChange: (file: string) => void;
  setInvalidFile: (invalid: boolean) => void;
  name: string;
  inValidFile: boolean;
  setSelectedFile: (file: string) => void;
  profilePicture: string;
  picError: boolean;
  setPicError: (picError: boolean)=> void
}

const FileInput: FC<Props> = ({
  onChange,
  setInvalidFile,
  name,
  inValidFile,
  setSelectedFile,
  profilePicture,
  picError,
  setPicError
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPicError(false);
    const file = event.target.files?.[0];
    if (file) {
      const { type } = file;
      console.log(type);
      if (!["image/jpeg", "image/png"].includes(type)) {
        event.target.value = "";
        setInvalidFile(true);
        setSelectedFile("");
        return;
      }
      setInvalidFile(false);
      onChange(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full max-w-full flex flex-col gap-1.5">
      <Label htmlFor="profilePicture">Profile Picture</Label>
      <Input
        name={name}
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        id="profilePicture"
        type="file"
        className="cursor-pointer"
      />
      <div className="h-4">
        {picError ? (
            <ErrorMessage message={"Please upload a profile picture"} />
          ) : (
            <></>
          )}

          {inValidFile && !picError ? (
            <ErrorMessage message={"Only png, jpg or jpeg file"} />
          ) : (
            <></>
          )}
      </div>
    </div>
  );
};

export default FileInput;
