"use client";
import React, { FC, createContext, useReducer } from "react";

  interface SettingsType {
    marketingEmails: boolean;
    sercurityEmails: boolean;
    twoStepVerification: boolean;
    multipleLogins: boolean;
}

export interface IRegistrationContext {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  profilePicture: string;
  settings: SettingsType;
  setName: (name: string) => void;
  setEmail: (email: string)=> void;
  setPassword: (password: string)=> void;
  setConfirmPassword: (password: string)=> void,
  setBio: (bio: string)=> void,
  setProfilePicture: (picture: string)=> void,
  setSettings: (settings: SettingsType)=> void

}
export enum RegistrationActions {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_PROFILE_PICTURE,
  SET_BIO,
  SET_SETTINGS,
}

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  bio: "",
  profilePicture: "",
  settings: {
    marketingEmails: false,
    sercurityEmails: false,
    twoStepVerification: false,
    multipleLogins: false,
  },
  setName: (name: string) => {},
  setEmail: (email: string) => {},
  setPassword: (password: string) => {},
  setConfirmPassword: (name: string) => {},
  setProfilePicture: (picture: string)=>{},
  setBio: (bio: string)=>{},
  setSettings: (settings: SettingsType)=>{}

};

const registrationReducer = (state: IRegistrationContext, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case RegistrationActions.SET_NAME: {
      return { ...state, name: payload };
    }
    case RegistrationActions.SET_EMAIL: {
      return { ...state, email: payload };
    }
    case RegistrationActions.SET_PASSWORD: {
      return { ...state, password: payload };
    }
    case RegistrationActions.SET_CONFIRM_PASSWORD: {
      return { ...state, confirmPassword: payload };
    }
    case RegistrationActions.SET_PROFILE_PICTURE: {
      return { ...state, profilePicture: payload };
    }
    case RegistrationActions.SET_SETTINGS: {
      return { ...state, settings: payload };
    }
    case RegistrationActions.SET_BIO: {
      return { ...state, bio: payload };
    }

    default:
      return state;
  }
};

export const RegistrationContext = createContext<IRegistrationContext>(null!);

const RegistrationInfoProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [
    { name, email, bio, password, confirmPassword, profilePicture, settings },
    dispatch,
  ] = useReducer(registrationReducer, initialState);

  const setName = (name: string) => {
    dispatch({ type: RegistrationActions.SET_NAME, payload: name });
  };

  const setEmail = (email: string)=>{
    dispatch({type: RegistrationActions.SET_EMAIL, payload: email});
  }

  const setPassword= (password: string)=>{
      dispatch({type: RegistrationActions.SET_PASSWORD, payload: password})
  }
  const setConfirmPassword = (confirmPassword: string)=>{
    dispatch({type: RegistrationActions.SET_CONFIRM_PASSWORD, payload: confirmPassword})
  }
  
  const setProfilePicture = (picture: string)=>{
    dispatch({type: RegistrationActions.SET_PROFILE_PICTURE, payload: picture})
  }

  const setBio = (bio: string)=>{
    dispatch({type: RegistrationActions.SET_BIO, payload: bio})
  }

  const setSettings = (settings: SettingsType)=>{
    dispatch({type: RegistrationActions.SET_SETTINGS, payload: settings})
  }






  return (
    <RegistrationContext.Provider
      value={{
        name,
        email,
        password,
        confirmPassword,
        profilePicture,
        settings,
        bio,
        setName,
        setEmail, 
        setPassword, 
        setConfirmPassword, 
        setBio,
        setProfilePicture,
        setSettings
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationInfoProvider;
