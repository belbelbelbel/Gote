import Signin from "./Auth/auths/page";
import Image from 'next/image'
import { ImageField } from "./Component/ImageField";
import PurchasePage from "./purchase/page";
export default function Home() {
  return (
    <div className=" items-center text-black justify-items-center min-h-screen ">
      <div>
        <PurchasePage/>
      </div>
    </div>
  );
}
