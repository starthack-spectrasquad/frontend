import { IonContent, IonIcon, IonPage } from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";
import { bulb, arrowForwardCircleOutline, flame } from "ionicons/icons";

const Recommendations: React.FC = () => {
    const insightData = [
        {
            title: "We noticed a very high sodium intake over the last 7 days, try lowering your sodium intake. ",
            subtitle: "View tips",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcel5pWrEwvMBYOILf_Cb0eZIsMF4alx2wYspunZYPFw&s"
        },
        {
            title: "Your consumption of high density proteins was lower than your goal. Try increasing it.  ",
            subtitle: "View tips",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcel5pWrEwvMBYOILf_Cb0eZIsMF4alx2wYspunZYPFw&s"
        },

    ]

    const recipeData = [
        {
            title: "Optimize your morning cereal",
            subtitle: "View recipe",
            url: "https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Reinvent your noodles",
            subtitle: "View recipe",
            url: "hhttps://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (

        <IonPage >
            <IonContent >
                <div className="bg-gray-100 h-fit min-h-full">
                    <Heading name={"Recommendations"} />
                    <Container >


                        <div className={"flex gap-5 items-center my-5"}>
                            <IonIcon icon={bulb} />
                            <div className="text-2xl font-semibold">Insights</div>
                        </div>


                        <div>
                            {insightData.map((e: any) => {
                                return (
                                    <div className={"py-3 gap-1 flex flex-col"}>
                                        <span style={{ lineHeight: "15pt" }}
                                            className={"font-semibold text-lg"}>{e.title}</span>
                                        <div onClick={() => { window.location.replace(e.url) }} className={"flex gap-6 items-center"}>
                                            <span style={{ color: "#9C7474" }}
                                                className={"font-semibold text-base"}>{e.subtitle}</span>
                                            <IonIcon style={{ color: "#9C7474" }} icon={arrowForwardCircleOutline} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={"flex items-center gap-5 my-6"}>
                            <IonIcon icon={flame} />
                            <div className="text-2xl font-semibold">Recipes</div>
                        </div>

                        {recipeData.map((e: any) => {
                            return (
                                <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-3xl flex flex-col gap-4">
                                    <div>
                                        <div className="text-2xl font-semibold">{e.title}</div>

                                        <img alt={".."}
                                            src={e.image} className='object-cover h-48 w-96 rounded-xl my-3' />

                                        <div className={"flex gap-6 items-center"}>
                                            <span onClick={() => { window.location.replace(e.url) }} style={{ color: "#9C7474" }}
                                                className={"font-semibold text-base"}>
                                                {e.subtitle}
                                            </span>
                                            <IonIcon style={{ color: "#9C7474" }} icon={arrowForwardCircleOutline} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </Container>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Recommendations;
