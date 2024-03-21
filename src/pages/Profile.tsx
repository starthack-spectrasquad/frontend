import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";
import {
    arrowForwardCircleOutline,
    bulb,
    flame,
    personCircle,
    idCard,
    barbell,
    arrowDownCircleOutline
} from "ionicons/icons";
import {useState} from "react";

const Profile: React.FC = () => {
    const data = [
        { name: 'Goal weight', value: 80, unit: "kg" },
        { name: 'Proteins', value: 10, unit: "%"},
        { name: 'Vitamins', value: 30,unit: "%" },
        { name: 'Amino Acids', value: 50,unit: "%" },
        { name: 'Electrolytes', value: 80,unit: "%" },
        { name: 'Bodybuilding', value: 100, unit: "%" },
    ];

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
  return (
      <IonPage >
          <IonContent >
              <div className="bg-gray-100 h-fit min-h-full">
                  <Container>
                      <Heading name={"Profile"}/>

                      <div className={"flex"}>
                          <div className={"w-2/4"}>
                              <IonIcon style={{width: "150px", height: "150px"}} icon={personCircle}/>

                          </div>
                          <div className={"w-2/4 flex flex-col justify-center text-xl"}>
                              <span className={"text-2xl font-semibold"}>Ben Martin</span>
                              <span className={"text-lg font-semibold"}>17 years</span>
                          </div>
                      </div>


                      <div className="text-xl mt-8 my-2 font-semibold">Current stats:</div>

                      <div className={"flex items-center "}>
                          <IonIcon className={"px-1"} style={{width: '20px', height: '20px'}} icon={idCard}/>
                          <div className="text-lg font-semibold">Height: {height} cm</div>
                      </div>
                      <div className={"flex items-center "}>
                          <IonIcon className={"px-1"} style={{width: '20px', height: '20px'}} icon={barbell}/>
                          <div className="text-lg font-semibold">Weight: {weight} kg</div>
                      </div>

                      <div className="text-xl mt-8 my-2 font-semibold">Your goals:</div>




                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                              className="flex justify-between w-full rounded-3xl text-lg font-semibold bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  px-5 py-6 text-center inline-flex items-center"
                              type="button">
                          <span>Build muscule</span>
                          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                                                 xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4"/>
                      </svg>
                      </button>


                      <div id="dropdown"
                           className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow bg-white">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDefaultButton">
                              <li>
                                  <a href="#"
                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                              </li>
                              <li>
                                  <a href="#"
                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                              </li>
                              <li>
                                  <a href="#"
                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                              </li>
                              <li>

                                  <a href="#"
                                     className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                      out</a>
                              </li>
                          </ul>
                      </div>


                      <div className={"px-2 my-8"}>
                          {data.map((e: any): any => {
                              let customClass = "h-6 flex items-center justify-center"
                              if (e.value > 80 && e.value <= 120)
                                  customClass += " bg-indigo-900"
                              else if (e.value > 50 && e.value <= 80 || e.value > 120 && e.value <= 150)
                                  customClass += " bg-indigo-500"
                              else if (e.value >= 20 && e.value <= 50 || e.value > 150 && e.value <= 180)
                                  customClass += " bg-red-300"
                              else
                                  customClass += " bg-red-500"
                              //80-120 indigo-900 50-80

                              return (
                                  <div className={"flex items-center my-4"}>
                                      <h3 className=" font-semibold text-lg text-gray-600"
                                          style={{width: "45%"}}>{e.name}</h3>
                                      <div className='flex items-center h-6 bg-gray-200 '
                                           style={{width: "30%", borderRadius: "25px"}}>
                                          <div className={customClass}
                                               style={{width: e.value, borderRadius: "25px"}}></div>
                                          <div className=' bg-gray-200 h-6'
                                               style={{width: 100 - e.value, borderRadius: "25px"}}></div>
                                      </div>
                                      <div className={"font-semibold flex justify-center"} style={{width: "25%"}}>
                                          {e.value} {e.unit}
                                      </div>
                                  </div>
                              )
                          })}
                      </div>
                  </Container>
              </div>
          </IonContent>
      </IonPage>
  );
};

export default Profile;
