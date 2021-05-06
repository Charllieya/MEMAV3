import React from 'react';
// import { Route } from 'react-router-dom';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonBackButton,
  IonLabel,
  IonInput,
  IonItem,
} from '@ionic/react';
import './Tab2Subs.css';

function ContactInfo(props) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBackButton defaultHref="tab2" />

          <IonTitle className="button">Your Plan</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Your Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Relationship(Spouse, Parent, etc)
          </IonLabel>
          <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone</IonLabel>
          <IonInput type="number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Address</IonLabel>
          <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">City</IonLabel>
          <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">State</IonLabel>
          <IonInput type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Zip Code</IonLabel>
          <IonInput type="Number"></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default ContactInfo;
