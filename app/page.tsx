import Signin from "./Auth/login/page";
import Image from 'next/image'
import { ImageField } from "./Component/ImageField";
import AuthContainer from "./Auth/AuthContainer/page";
export default function Home() {
  return (
    <div className=" items-center text-black justify-items-center min-h-screen ">
      <div>
        <AuthContainer/>
      </div>
    </div>
  );
}
