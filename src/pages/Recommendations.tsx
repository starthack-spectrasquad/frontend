import {IonContent, IonIcon, IonPage} from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";
import {bulb, arrowForwardCircleOutline, flame} from "ionicons/icons";

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
            title: "Nice Noodles",
            subtitle: "View recipe",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcel5pWrEwvMBYOILf_Cb0eZIsMF4alx2wYspunZYPFw&s",
            image: "https://www.allrecipes.com/thmb/2rPJp4sRMmSa-5MgBRuHz8XDxlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233446-lo-mein-noodles-dmfs-2x1-1356-1490-62771eb9cd6840fdb75f332303fff7b1.jpg"
        },
        {
            title: "Nice Noodles",
            subtitle: "View recipe",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcel5pWrEwvMBYOILf_Cb0eZIsMF4alx2wYspunZYPFw&s",
            image: "https://www.allrecipes.com/thmb/2rPJp4sRMmSa-5MgBRuHz8XDxlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233446-lo-mein-noodles-dmfs-2x1-1356-1490-62771eb9cd6840fdb75f332303fff7b1.jpg"
        }
    ]
  return (

          <IonPage >
              <IonContent >
                  <div className="bg-gray-100 h-fit min-h-full">
              <Container >
                  <Heading name={"Recommendations"}/>

                  <div className={"flex gap-5 items-center my-5"}>
                      <IonIcon icon={bulb}/>
                      <div className="text-2xl font-semibold">Insights</div>
                  </div>


                  <div>
                      {insightData.map((e: any) => {
                          return (
                              <div className={"py-3 gap-1 flex flex-col"}>
                                  <span style={{lineHeight: "15pt"}}
                                        className={"font-semibold text-lg"}>{e.title}</span>
                                  <div onClick={() => {window.location.replace(e.url)}} className={"flex gap-6 items-center"}>
                                      <span style={{color: "#9C7474"}}
                                            className={"font-semibold text-base"}>{e.subtitle}</span>
                                      <IonIcon style={{color: "#9C7474"}} icon={arrowForwardCircleOutline}/>
                                  </div>
                              </div>
                          )
                      })}
                  </div>

                  <div className={"flex items-center gap-5 my-6"}>
                      <IonIcon    icon={flame}/>
                      <div className="text-2xl font-semibold">Recipes</div>
                  </div>
                  <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-3xl flex flex-col gap-4">
                      {recipeData.map((e: any) => {
                          return (
                              <div>
                                  <div className="text-2xl font-semibold">{e.title}</div>

                                  <img alt={".."}
                                       src={e.image}/>

                                  <div className={"flex gap-6 items-center"}>
                                      <span onClick={() => {window.location.replace(e.url)}} style={{color: "#9C7474"}}
                                            className={"font-semibold text-base"}>
                                          {e.subtitle}
                                      </span>
                                      <IonIcon style={{color: "#9C7474"}} icon={arrowForwardCircleOutline}/>
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

export default Recommendations;
