import React from 'react';
import { useController, useForm } from 'react-hook-form';
import { IonInput } from '@ionic/react';

function ControlledIonInput({ control, name }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  });

  return <IonInput {...inputProps} inputRef={ref} />;
}

export default ControlledIonInput;
