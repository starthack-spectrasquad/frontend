import {IonTitle} from "@ionic/react";

interface HeadingProps {
    name: string;
}

const Heading: React.FC<HeadingProps> = ({ name }) => {
    return (
           <div className="font-bold pt-10 mx-6">
               <IonTitle size="large">{name}</IonTitle>
               </div>
    );
};

export default Heading;
