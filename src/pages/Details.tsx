import { IonBackButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';
import { useState } from 'react';
import Heading from "../components/Heading";
import { Cell, Pie, PieChart, Tooltip, Legend } from "recharts";
import CustomBarChart from "../components/CustomBarChart";
import { arrowForwardCircle, arrowDownCircleOutline, arrowUpCircleOutline } from "ionicons/icons";

interface AdvancedData {
    Allergenes: any,
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

const dailyData = [
    { name: 'Allergenes', value: 80, },
    { name: 'Proteins', value: 30, },
    { name: 'Vitamins', value: 60, },
    { name: 'Amino Acids', value: 70, },
    { name: 'Electrolytes', value: 80, },
    { name: 'Bodybuilding', value: 55, },
];

const Details: React.FC = () => {
    const macroData = [
        { name: 'Carbohydrates', value: 60, },
        { name: 'Proteins', value: 25, },
        { name: 'Fats', value: 15, },
    ];

    const COLORS = ['#27187E', '#758BFD', '#AEB8FE'];

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
        <IonPage >
            <IonContent>
                <div className="bg-gray-100 h-fit min-h-full  px-2 py-4">
                    <div className='flex items-center jusitify-between'>
                        <IonBackButton defaultHref="home"></IonBackButton>
                    </div>
                    <Heading name={"Details"} />
                    <Container>


                        <div className="max-w-md mx-auto mb-6 p-6 pb-10 bg-white rounded-3xl">
                            <div className="text-2xl font-semibold">Overview</div>
                            <div className="flex items-center justify-center">
                                <PieChart width={250} height={300}>
                                    <Pie
                                        data={macroData}
                                        cx={120}
                                        cy={120}
                                        innerRadius={0}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={0}
                                        dataKey="value"
                                        label

                                    >

                                        {macroData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}


                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={20} />
                                </PieChart>
                            </div>

                        </div>

                        <div className="max-w-md mx-auto my-2 p-4 bg-white rounded-3xl">
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
                                        <>
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

                                                {
                                                    (() => {
                                                        // trying to access the element advancedData . nameExpanded, so e.g. advancedData.ProteinsExpanded
                                                        if (advancedData[`${e.name}Expanded` as keyof AdvancedData] === true) {
                                                            return (
                                                                <div className={"flex justify-center"} style={{ width: "20%" }}>
                                                                    <IonIcon icon={arrowUpCircleOutline} />
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className={"flex justify-center"} style={{ width: "20%" }}>
                                                                    <IonIcon icon={arrowDownCircleOutline} />
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    })()
                                                }
                                            </div>
                                            {
                                                (() => {
                                                    // trying to access the element advancedData . nameExpanded, so e.g. advancedData.ProteinsExpanded
                                                    if (advancedData[`${e.name}Expanded` as keyof AdvancedData] === true) {
                                                        return (
                                                            <div className="">
                                                                {Object.entries(advancedData[e.name]).map(([key, value]) => (
                                                                    <p key={key}>{key}: {value}</p>
                                                                ))}
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                })()
                                            }
                                        </>
                                    )
                                })}

                            </div >

                        </div>
                    </Container>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Details;
