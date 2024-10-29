import { useEffect, useState } from "react"; 
import Card from "./card";
import axios from "axios"; 

function CardBody() {
  const [individualSeats, setIndividualSeats] = useState(0); 
  const [groupSeats, setGroupSeats] = useState(0);

  useEffect(() => {
    // دالة لجلب البيانات من الـ API
    const fetchAvailability = async () => {
      try {
        const response = await axios.get("http://localhost:3000/competitions/availability");
        setIndividualSeats(response.data.availableIndividualSeats); 
        setGroupSeats(response.data.availableGroupSeats); 
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    };

    fetchAvailability();
  }, []); 

  return (
    <div className="block">
      <div className="pt-10 grid grid-rows-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 m-5 md:m-10 select-none">
        <Card className="row-span-1">
          <b className="block text-[#1793d1e5]">Get started with us now</b>
          <h1 className="text-4xl md:text-7xl ml-4 mt-5 mb-5 BigTXT">
            Everything you need to know <br /> to get started
          </h1>
          <p className="p-2 ml-4 mt-4 md:mt-10">
            The university competition is an opportunity to enhance individual and team skills among students through five exciting challenges, where participants are asked to quickly correct codes in “Problem Solving”, answer mental questions quickly, while teams compete in the “Rubik’s Cube Challenge” to solve the cube as quickly as possible. Participants also use their cybersecurity skills in the “Try Hack Me Challenge” to take control of a vulnerable device. In addition, participants are allowed to take pictures of nature, which are evaluated by a panel of judges. These challenges combine learning and social interaction, which fosters a spirit of competition and cooperation among students.
          </p>
        </Card>
        <img className="TheImageABU rounded-lg w-full h-auto" src="/assets/images/TheAboutUsImage.png" alt="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="TheCardSMEdit">
            <div>
              <b className="text-3xl md:text-4xl block pl-2">{individualSeats}</b>
              <p className="pl-2">Number of people remaining to apply for individual competitions</p>
            </div>
          </Card>
          <Card className="TheCardSMEdit">
            <div>
              <b className="text-3xl md:text-4xl block pl-2">{groupSeats}</b>
              <p className="pl-2">Number of groups that lack people</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CardBody;
