import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";
import {Cell, Pie, PieChart, Tooltip} from "recharts";
import CustomBarChart from "../components/CustomBarChart";

const Details: React.FC = () => {
    const data = [
        { name: 'Proteins', value: 400 },
        { name: 'Carbohydrates', value: 300 },
        { name: 'Fat', value: 300 },
    ];

    const COLORS = ['#6b7280', '#a0aec0', '#e2e8f0'];

    return (
        <IonPage >
            <div className="bg-gray-100">
                <Container>
                    <Heading name={"Details"}/>
                    <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-3xl">
                        <div className="text-2xl font-semibold">Overview</div>
                        <div className="flex items-center">
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
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>

                    </div>

                    <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-3xl">
                            <CustomBarChart/>
                    </div>
                </Container>
        </div>
        </IonPage>
    );
};

export default Details;
