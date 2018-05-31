import events from '../../models/events';
import centers from '../../models/centers';

const updateEvent = (req, res) => {
     for (const [k] of Object.entries(centers)){
       if(centers[k].id === parseInt(req.body.centerId, 10)){
        for (const [k] of Object.entries(events)){
            if ( events[k].id === parseInt(req.params.eventsId, 10)){
              console.log(events[k].id);
              events[k].title = req.body.title;
              events[k].date = req.body.date;
              events[k].centerId = req.body.certerId;
              events[k].phone = req.body.phone;
              return res.status(201).json({
                id: req.params.eventsId,
                title: req.body.title,
                date: req.body.date,
                centerId: req.body.centerId,
                phone: req.body.phone,
                message: `Event with ${events[k].id} has been updated...`,
                error: false
              })
            }
          }
          return res.status(404).json({
            message: 'event not found',
            error: true
          })
       }
     }
     return res.status(404).json({
         message: 'Center does not exist',
         error: true
     })
    
    
    }

    export default updateEvent;