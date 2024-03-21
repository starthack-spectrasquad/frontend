import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';

const Profile: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
