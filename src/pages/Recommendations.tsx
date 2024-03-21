import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';

const Recommendations: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Recommendations;
