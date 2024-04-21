
import Hero from "./components/Hero";
import IntroSec from "./components/IntroSec";
import ServiceSec from '@/app/components/servicesSec'
import WorkingPlaces from "./components/WorkingPlaces";
import ContactSec from "./components/contactSec";

export default function Home() {
  return (
<>

<div className="w-[95%] mx-auto py-3 px-3">
<Hero/>
<IntroSec/>
<ServiceSec/>
<WorkingPlaces/>
<ContactSec/>

</div>

</>


  );
}
