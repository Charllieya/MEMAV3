import React from 'react';
import { Route } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

function Tab4(props) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Contact Info" />
      </IonContent>
    </IonPage>
  );
}

export default Tab4;
