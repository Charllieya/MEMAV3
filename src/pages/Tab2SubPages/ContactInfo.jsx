import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { Route } from 'react-router-dom';

import { Plugins } from '@capacitor/core';
import { Controller, useForm } from 'react-hook-form';

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
  IonButton,
} from '@ionic/react';
import './Tab2Subs.css';

function ContactInfo(props) {
  const { Storage } = Plugins;
  let [plan, setPlan] = useState();
  let [defaultValues, setDefaultValues] = useState({
    Name: plan?.Name,
    Relationship: plan?.Relationship,
    Address: plan?.Address,
    City: plan?.City,
    State: plan?.State,
    ZipCode: plan?.ZipCode,
  });

  async function saveData(data) {
    await Storage.set({
      key: 'plan',
      value: JSON.stringify({
        data,
      }),
    });
  }
  const getPlan = useCallback(
    async function getPlan() {
      const ret = await Storage.get({ key: 'plan' });
      const plan = JSON.parse(ret.value);
      if (plan) {
        setPlan(plan);
        setDefaultValues(plan.data);
      }
    },
    [Storage]
  );

  const { control, handleSubmit, register, reset } = useForm({
    defaultValues: useMemo(() => defaultValues, [defaultValues]),
  });

  useEffect(() => {
    getPlan();
  }, [getPlan]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonBackButton className="inline-block" />

          <IonTitle className="inline-block">Your Plan</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Your Plan</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleSubmit(saveData)}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              type="text"
              value={defaultValues.Name}
              {...register('Name')}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              Relationship(Spouse, Parent, etc)
            </IonLabel>
            <IonInput
              type="text"
              {...register('Relationship')}
              value={defaultValues.Relationship}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Phone</IonLabel>
            <IonInput
              type="number"
              value={defaultValues.Number}
              {...register('Number')}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonInput
              type="text"
              value={defaultValues.Address}
              {...register('Address')}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">City</IonLabel>
            <IonInput
              type="text"
              value={defaultValues.City}
              {...register('City')}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">State</IonLabel>
            <IonInput
              type="text"
              value={defaultValues.State}
              {...register('State')}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Zip Code</IonLabel>
            <IonInput
              type="Number"
              value={defaultValues.ZipCode}
              {...register('ZipCode')}
            ></IonInput>
          </IonItem>
          <IonButton type="submit" className="submitButton">
            submit
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default ContactInfo;
