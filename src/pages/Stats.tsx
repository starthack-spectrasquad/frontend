import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';
import { IonIcon, useIonRouter, IonBackButton } from '@ionic/react';
import { trendingUp, arrowForwardCircle } from 'ionicons/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';


const data = [
    {
        name: 'Saturday',
        uv: 80,

        amt: 2400,
    },
    {
        name: 'Sunday',
        uv: 77,

        amt: 2210,
    },
    {
        name: 'Monday',
        uv: 43,

        amt: 2290,
    },
    {
        name: 'Tuesday',
        uv: 90,

        amt: 2000,
    },
    {
        name: 'Wednesday',
        uv: 60,

        amt: 2181,
    },
    {
        name: 'Thursday',
        uv: 93,
        amt: 2500,
    },
    {
        name: 'Friday',
        uv: 86,
        amt: 2100,
    },
];


const data2 = [
    {
        day: '15.3',
        a: 4000,
        b: 2400,
        c: 2400,
    },
    {
        day: '16.3',
        a: 3000,
        b: 1398,
        c: 2210,
    },
    {
        day: '17.3',
        a: 2000,
        b: 9800,
        c: 2290,
    },
    {
        day: '18.3',
        a: 2780,
        b: 3908,
        c: 2000,
    },
    {
        day: '19.3',
        a: 1890,
        b: 4800,
        c: 2181,
    },
    {
        day: '20.3',
        a: 2390,
        b: 3800,
        c: 2500,
    },
    {
        day: '21.3',
        a: 3490,
        b: 4300,
        c: 2100,
    },
];
const toPercent = (decimal: number, fixed: number = 0): string => `${Math.round(decimal * 100 * Math.pow(10, fixed)) / Math.pow(10, fixed)}%`;

const getPercent = (value: number, total: number): string => {
    const ratio: number = total > 0 ? value / total : 0;
    return toPercent(ratio, 2);
};



const Stats: React.FC = () => {
    return (
        <IonContent className='bg-gray-100'>
            <div className='m-0 p-0'>


                <div className='bg-gray-100 min-h-screen px-2 py-4'>
                    <div className='flex items-center jusitify-between'>
                        <IonBackButton defaultHref="home" ></IonBackButton>
                        <div></div>
                    </div>
                    <IonHeader className='mt-5 mx-6'>
                        <IonTitle size="large">Statistics</IonTitle>
                    </IonHeader>


                    <Container>

                        <div className="bg-white rounded-xl p-7">

                            <h2 className='font-bold text-2xl mb-10'>Daily statistics</h2>
                        </div>
                    </Container>
                    <Container>
                        <div className='flex justify-start items-center mb-6'>
                            <IonIcon icon={trendingUp} className='mr-2' />
                            <h2 className="text-2xl font-bold text-gray-800">Trend</h2>


                        </div>


                        <div className="bg-white rounded-xl p-7 mb-5">
                            <h2 className='font-bold text-2xl mb-10'>Health score</h2>


                            <div className='flex justify-center mr-10'>
                                <LineChart
                                    width={250}
                                    height={200}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 0,
                                        left: 0,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-7">
                            <h2 className='font-bold text-2xl mb-10'>Macronutrients</h2>

                            <AreaChart
                                width={250}
                                height={200}
                                data={data2}
                                stackOffset="expand"
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis tickFormatter={toPercent} />
                                <Area type="monotone" dataKey="a" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="b" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="c" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </div>
                    </Container>


                </div>
            </div>
        </IonContent>
    );
};

export default Stats;