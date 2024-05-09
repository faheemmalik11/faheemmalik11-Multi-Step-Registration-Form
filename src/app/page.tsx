
import LoginForm from "@/components/LoginForm";
import RegistrationInfoProvider from "@/contexts/RegistrationContext";

export default function Home() {


  return (
    <div className="border w-full h-[100vh] flex justify-center items-center">
      <RegistrationInfoProvider>
              <LoginForm />
      </RegistrationInfoProvider>

    </div>
  );
}
