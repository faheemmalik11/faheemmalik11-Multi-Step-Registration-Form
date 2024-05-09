This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# To run the project

Go to the home directory of the project.

#### Then run the following commands:

>npm install  
>npm run dev


Open [http://localhost:3000](http://localhost:3000) to see the output .



### React and Node version:

This project is developed using node version `v20.9.0`. React verion `"react": "^18"` 


# Project description

Created project using Next.js, TypeScript, and Shadcn/UI components. 

User interface is created for Multi-Step registration wizard with following steps: 

## 1. User Details 
Name, Email, Password, Confirm Password:  Validations for User Name (required), Password ( validations for minimum characters and special characters ), Confirm Password, (passwords must match) using Formik,

## 2. Profile Information  
Bio  and Profile picture upload - validations implemented for appropriate image format (png, jpg, jpeg) and Bio (required) before moving to next step.

## 3. Preferences  
Notification settings, Privacy settings - page for account preferences created.

- UI components (inputs, labels, card component, avatar image component, progress indicator, buttons ) created using shadcn / UI.  
- Used Tailwind CSS for styling.  
- Used Formik  for form validation where required.  
- Used React context for sharing state across different components.  
- Used React reducer for managing component states.
- Used axios for making http request and sending the registration data to a dummy end point.  