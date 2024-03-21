import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';
import { IonIcon, useIonRouter, IonBackButton } from '@ionic/react';
import { trendingUp, arrowForwardCircle, arrowDownCircleOutline } from 'ionicons/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import {useState} from "react";


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

const dailyData = [
    { name: 'Allergenes', value: 80, },
    { name: 'Proteins', value: 10, },
    { name: 'Vitamins', value: 30, },
    { name: 'Amino Acids', value: 50, },
    { name: 'Electrolytes', value: 80, },
    { name: 'Bodybuilding', value: 100, },
];


const toPercent = (decimal: number, fixed: number = 0): string => `${Math.round(decimal * 100 * Math.pow(10, fixed)) / Math.pow(10, fixed)}%`;

const getPercent = (value: number, total: number): string => {
    const ratio: number = total > 0 ? value / total : 0;
    return toPercent(ratio, 2);
};

interface AdvancedData {
    Allergenes : any,
    Proteins: any,
    Vitamins: any,
    "Amino Acids": any,
    Electrolytes: any,
    Bodybuilding: any,
    AllergenesExpanded: boolean,
    ProteinsExpanded: boolean,
    VitaminsExpanded: boolean,
    AminoAcidsExpanded: boolean,
    ElectrolytesExpanded: boolean,
    BodybuildingExpanded: boolean
}


const Stats: React.FC = () => {
    const [advancedData, setAdvancedData] = useState<AdvancedData>(
        {
            Allergenes: {
                Lactose: "17.3 grams", Gluten: "166mg", Nuts: "0mg", Soy: "0mg", Eggs: "0mg"
            },
            Proteins: {
                Whey: "4.7 grams", Casein: "2.3 grams", Soy: "0mg", Pea: "0mg", Hemp: "0mg"
            },

            Vitamins: {
                A: "3mcg", B: "0.4mg", C: "0mg", D: "0mg", E: "0.14mg"
            },

            "Amino Acids": {
                Leucine: "100mg", Isoleucine: "70mg", Valine: "40mg", Methionine: "20mg", Phenylalanine: "0mg"
            },
            Electrolytes: {
                Sodium: "100mg", Potassium: "70mg", Chloride: "40mg", Magnesium: "20mg", Calcium: "0mg"
            },
            Bodybuilding: {
                Creatine: "100mg", BetaAlanine: "70mg", Citrulline: "40mg", BCAA: "20mg", HMB: "0mg"
            },
            AllergenesExpanded: false,
            ProteinsExpanded: false,
            VitaminsExpanded: false,
            AminoAcidsExpanded: false,
            ElectrolytesExpanded: false,
            BodybuildingExpanded: false
        }

    )


    return (
        <IonPage>
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
                                <h1 className='font-bold text-2xl'>Health score</h1>
                                <div className='flex items-center justify-start'>
                                    <h2 className="text-4xl font-black text-indigo-500">67</h2>
                                    <h2 className="text-4xl font-black text-gray-800">/100</h2>
                                </div>

                                <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-3xl">
                                    {dailyData.map((e: any, index: number): any => {
                                        let customClass = "h-6 flex items-center justify-center"
                                        if (e.value > 80 && e.value <= 120)
                                            customClass += " bg-indigo-900"
                                        else if (e.value > 50 && e.value <= 80 || e.value > 120 && e.value <= 150)
                                            customClass += " bg-indigo-500"
                                        else if (e.value >= 20 && e.value <= 50 || e.value > 150 && e.value <= 180)
                                            customClass += " bg-red-300"
                                        else
                                            customClass += " bg-red-500"

                                        return (
                                            <div className={"flex items-center my-2"} key={e.name + index}
                                                onClick={
                                                    // trying to access the element advancedData . nameExpanded, so e.g. advancedData.ProteinsExpanded
                                                    () => {
                                                        const field = `${e.name}Expanded`
                                                        const newData = JSON.parse(JSON.stringify(advancedData))
                                                        newData[field as keyof AdvancedData] = !newData[field as keyof AdvancedData]
                                                        setAdvancedData(newData)
                                                    }
                                                }>
                                                <h3 className="text-base text-gray-600"
                                                    style={{ width: "50%" }}>{e.name}</h3>
                                                <div className='flex items-center h-6 bg-gray-200 ' style={{ width: "30%", borderRadius: "25px" }}>
                                                    <div className={customClass} style={{ width: e.value, borderRadius: "25px" }}></div>
                                                    <div className=' bg-gray-200 h-6' style={{ width: 100 - e.value, borderRadius: "25px" }}></div>
                                                </div>
                                                <div className={"flex justify-center"} style={{ width: "20%" }}>
                                                    <IonIcon icon={arrowDownCircleOutline} />
                                                </div>

                                                {(() => {
                                                    // trying to access the element advancedData . nameExpanded, so e.g. advancedData.ProteinsExpanded
                                                    if (advancedData[`${e.name}Expanded` as keyof AdvancedData] === true) {
                                                        return (
                                                            <div className="">
                                                                <p>hello</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })()}


                                            </div>
                                        )
                                    })}
                                </div>


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
        </IonPage>
    );
};

export default Stats;
