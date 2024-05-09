
import LoginForm from "@/components/LoginForm";
import RegistrationInfoProvider from "@/contexts/RegistrationContext";

export default function Home() {


  return (
    <div className="w-full md:h-[100vh] md:pt-0 pt-10 flex justify-center items-center px-5">
      <RegistrationInfoProvider>
              <LoginForm />
      </RegistrationInfoProvider>

    </div>
  );
}
