import events from '../../models/events';
import centers from '../../models/centers';

  const addEvents = (req, res) => {
     for (const [k] of Object.entries(centers)){
       console.log(`here is key ${centers[k].id}`);
       if (centers[k].id === parseInt(req.body.centerId, 10)){
        centers[k].events.push({
          id: events.length + 1,
          title: req.body.title,
          date: req.body.date,
          centerId: parseInt(centers[k].id, 10),
          phone: req.body.phone,
        });
        return res.status(201).json({
          message: 'Event with ' + centers[k].events.id + ' has successfully been created',
          // id: events.length + 1,
          // title: req.body.title,
          // date: req.body.date,
          // centerId: req.body.centerId,
          // phone: req.body.phone
          centerId: parseInt(centers[k].id, 10) ,
          center: centers[k].events
        }); 
       }
     }
      return res.status(404).json({
        message: 'center is not found...'
      }) 
  }
export default addEvents;
