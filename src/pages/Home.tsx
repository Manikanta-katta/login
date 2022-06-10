import { IonContent, IonItem,IonCard,IonCardContent,IonGrid,IonInput,IonButton, IonCol,IonRow,IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import{calculatorOutline,refreshOutline}from 'ionicons/icons';
import{useRef,useState} from 'react' ;
const Home: React.FC = () => {
  const [calculatedBmi,setcalculatedBmi]=useState<number>();
  const weightInputdef=useRef<HTMLIonInputElement>(null);
  const heightInputRef=useRef<HTMLIonInputElement>(null);
  const calculateBMI = () =>{
    const enteredWeight = weightInputdef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    if(!enteredHeight || !enteredWeight)
    {
      return;
    }
    const bmi = +enteredWeight /(+enteredHeight * +enteredHeight);
    setcalculatedBmi(bmi);
  };
const resetInput = () =>
{
  weightInputdef.current!.value='';
  heightInputRef.current!.value='';
};
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IBM CALCULATOR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem><IonLabel position="floating">Your Height</IonLabel>
            <IonInput ref={weightInputdef}></IonInput></IonItem></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonItem><IonLabel position="floating">Your Weight</IonLabel>
            <IonInput ref={heightInputRef}></IonInput></IonItem></IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text=left">
              <IonButton onClick={calculateBMI}>
                <IonIcon slot="start"  icon={calculatorOutline}></IonIcon>Calculator</IonButton></IonCol>
            <IonCol className="ion-text-left">
              <IonButton onClick={resetInput}>
                <IonIcon  slot="start"icon={refreshOutline} ></IonIcon>Refresh</IonButton></IonCol>
          
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h2>{calculatedBmi}</h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          
        </IonGrid>
      </IonContent>
    </IonPage>
  );};

export default Home;
