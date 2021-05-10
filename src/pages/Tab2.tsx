import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {Link} from "react-router-dom";
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import RoutesNames from '../constants/RoutesNames'

const Tab2: React.FC = () => {
  console.log('tab2')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer name="Tab 2 page" />
        <Link to={RoutesNames.tab2.contactInfo}>
          Contact info
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
