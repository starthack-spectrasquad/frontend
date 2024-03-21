import { IonHeader, IonPage, IonTitle } from '@ionic/react';
import Container from '../components/Container';
import { IonIcon } from '@ionic/react';
import { timerOutline, arrowForwardCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
    return (
        <div className='bg-gray-100'>

            <IonPage className='m-0 p-0'>


                <div className='bg-gray-100 min-h-screen'>

                    <IonHeader className='mt-10 mx-6'>
                        <IonTitle size="large">Home</IonTitle>
                    </IonHeader>


                    <Container>

                        <div className="bg-white rounded-xl p-7">

                            <h2 className="text-xl font-bold text-gray-800">Health score</h2>

                            <div className='flex items-center justify-start'>
                                <h2 className="text-4xl font-black text-indigo-500">67</h2>
                                <h2 className="text-4xl font-black text-gray-800">/100</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <div>
                                    <h3 className="text-base font-medium text-gray-600">Calories</h3>
                                    <div className='flex items-center'>
                                        <div className=' bg-indigo-200 h-3' style={{ width: '60%' }}></div>
                                        <div className=' bg-gray-200 h-3' style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-600">Proteins</h3>
                                    <div className='flex items-center'>
                                        <div className=' bg-indigo-200 h-3' style={{ width: '80%' }}></div>
                                        <div className=' bg-gray-200 h-3' style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-600">Carbohydrates</h3>
                                    <div className='flex items-center'>
                                        <div className=' bg-indigo-200 h-3' style={{ width: '70%' }}></div>
                                        <div className=' bg-gray-200 h-3' style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-600">Fats</h3>
                                    <div className='flex items-center'>
                                        <div className=' bg-indigo-200 h-3' style={{ width: '30%' }}></div>
                                        <div className=' bg-gray-200 h-3' style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <Link className='w-full mb-10' to={"/stats"}>
                                <div className="mt-6 text-center flex justify-between">

                                    <h5 className="text-sm font-extrabold">View full stats</h5>

                                    <IonIcon icon={arrowForwardCircle} className='text-lg' />
                                </div>
                            </Link>
                        </div>
                    </Container>
                    <Container>
                        <div className='flex justify-start items-center mb-6'>
                            <IonIcon icon={timerOutline} className='mr-2' />
                            <h2 className="text-2xl font-bold text-gray-800">History</h2>
                        </div>


                        <div className="bg-white rounded-xl p-7">

                            <Link className='w-full mb-10' to={"/details"}>
                                <div>
                                    <h3 className="text-base font-medium text-gray-600">Today, 22:40</h3>
                                </div>
                                <div className='flex items-center justify-between'>

                                    <h3 className="text-lg font-bold ">YFood - very disappointing</h3>
                                    <IonIcon icon={arrowForwardCircle} className='text-lg' />
                                </div>
                            </Link>
                        </div>

                    </Container>


                </div>
            </IonPage>
        </div>
    );
};

export default Home;
