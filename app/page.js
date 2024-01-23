import Core from "@/components/HomeComps/Core";
import Dolani from "@/components/HomeComps/Dolani";
import How from "@/components/HomeComps/How";
import If from "@/components/HomeComps/If";
import Insurance from "@/components/HomeComps/Insurance";
import Our from "@/components/HomeComps/Our";
import Psych from "@/components/HomeComps/Psych";
import Talk from "@/components/HomeComps/Talk";
import Testimonial from "@/components/HomeComps/Testimonial";
import What from "@/components/HomeComps/What";

export default function Home() {
  return (
    <>
      <Psych />
      <Core />
      <What />
      <Talk />
      <Insurance />
      <How />
      <Our />
      <Testimonial />
      <Dolani />
      <If />
    </>
  );
}