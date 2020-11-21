import React, { useState } from 'react';
import '../css/event.css';
import event1 from '../res/event1.PNG';
import event2 from '../res/event2.PNG';
import event3 from '../res/event3.PNG';
import event8 from '../res/event8.PNG';
import event7 from '../res/event7.PNG';
import event6 from '../res/event6.PNG';
import event5 from '../res/event5.PNG';
import event4 from '../res/event4.PNG';


import 'bootstrap/dist/css/bootstrap.min.css';
import EventCard from './EventCard';

const EventList = () => {
    const [Events, SetEvents] = useState([{ id: 1, imgUrl: event1, theme: 'Évènement sportif et spirituel', activities: 'Camping, randonné, Paddle, BodyBalance', destination: 'Bazina,Bizerte', date: '29,30 Aoùt 2020' },
    { id: 2, imgUrl: event2, theme: 'Évènement spirituel', activities: 'Camping', destination: 'l`ile de la Galite', date: '13,14 Aoùt 2020' },
    { id: 3, imgUrl: event3, theme: 'Évènement sportif et spirituel', activities: 'Camping, randonné, Observation téléscopique', destination: 'Kef Abed,Bizerte', date: '15,16 Aoùt 2020' },
    { id: 4, imgUrl: event4, theme: 'Le mystère', activities: 'Camping, randonnée', destination: 'Destination non publiée', date: '11,12 Juillet 2020' },
    { id: 5, imgUrl: event5, theme: 'Évènement sportif et spirituel', activities: 'Camping, yoga et méditation', destination: 'El Abweb,Bizerte', date: '27,28 Juin 2020' },
    { id: 6, imgUrl: event6, theme: 'Évènement sportif et spirituel', activities: 'Camping,randonnée,Yoga, méditation', destination: 'le parc national ElFeija,Jendouba', date: '14,15 Mars 2020' },
    { id: 7, imgUrl: event7, theme: 'Évènement sportif et spirituel', activities: 'Camping,randonnée,Yoga, méditation', destination: 'montagne El Hirech', date: '29 février,1 Mars 2020' },
    { id: 8, imgUrl: event8, theme: 'Action de reboisement', activities: 'Camping, plantation', destination: 'Dar Chichou, ElHawaria', date: '01,02 février 2020' },

    ]);
    return (<>
        <div className="containerlist">
            <div className="row">
                {Events.map(item => <EventCard key={item.id} imgURl={item.imgUrl} theme={item.theme} activities={item.activities} destination={item.destination} date={item.date} />)}
            </div>
        </div>


    </>);

};


export default EventList;