import {IonBackButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";
import {Cell, Pie, PieChart, Tooltip} from "recharts";
import CustomBarChart from "../components/CustomBarChart";
import {arrowForwardCircle, arrowDownCircleOutline} from "ionicons/icons";

const Details: React.FC = () => {
    const data = [
        { name: 'Allergenes', value: 80,  },
        { name: 'Proteins', value: 10,},
        { name: 'Vitamins', value: 30, },
        { name: 'Amino Acids', value: 50, },
        { name: 'Electrolytes', value: 80, },
        { name: 'Bodybuilding', value: 100,  },
    ];

    const COLORS = ['#6b7280', '#a0aec0', '#e2e8f0'];

    return (
        <IonPage >
           <IonContent>
               <div className="bg-gray-100 h-fit min-h-full  px-2 py-4">
                   <div className='flex items-center jusitify-between'>
                       <IonBackButton defaultHref="home"></IonBackButton>
                       <div></div>
                   </div>
                   <Heading name={"Details"}/>
                   <Container>


                       <div className="max-w-md mx-auto my-2 mb-12 p-6 bg-white rounded-3xl">
                           <div className="text-2xl font-semibold">Overview</div>
                           <div className="flex items-center justify-center">
                               <PieChart width={250} height={250}>
                                   <Pie
                                       data={data}
                                       cx={120}
                                       cy={120}
                                       innerRadius={0}
                                       outerRadius={80}
                                       fill="#8884d8"
                                       paddingAngle={0}
                                       dataKey="value"
                                       label
                                   >
                                       {data.map((entry, index) => (
                                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                       ))}
                                   </Pie>
                                   <Tooltip/>
                               </PieChart>
                           </div>

                       </div>

                       <div className="max-w-md mx-auto my-2 p-4 bg-white rounded-3xl">
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
                                   <div className={"flex items-center my-2"}>
                                       <h3 className=" font-semibold text-xl text-gray-600"
                                           style={{width: "45%"}}>{e.name}</h3>
                                       <div className='flex items-center h-6 bg-gray-200 '
                                            style={{width: "30%", borderRadius: "25px"}}>
                                           <div className={customClass}
                                                style={{width: e.value, borderRadius: "25px"}}></div>
                                           <div className=' bg-gray-200 h-6'
                                                style={{width: 100 - e.value, borderRadius: "25px"}}></div>
                                       </div>
                                       <div className={"flex justify-center"} style={{width: "25%"}}>
                                           <IonIcon icon={arrowDownCircleOutline}/>
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

export default Details;
