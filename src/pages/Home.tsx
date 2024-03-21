import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';
import Heading from "../components/Heading";

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Container>
                <Heading name={"Home"}/>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Your health score</h2>
                        <span className="text-2xl font-bold text-green-500">67/100</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <h3 className="text-base font-medium text-gray-600">Proteins</h3>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-600">Carbohydrates</h3>
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-600">Fats</h3>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <a href="#" className="text-sm font-medium text-blue-600 underline">
                            View full stats
                        </a>
                    </div>
                </div>
            </Container>

        </IonContent>
    </IonPage>
  );
};

export default Home;
