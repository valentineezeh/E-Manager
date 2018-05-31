import events from '../../models/events';
import centers from '../../models/centers';

const deleteEvent = (req, res) => {
    for (const [k] of Object.entries(events)){
        if ( events[k].id === parseInt(req.params.eventsId, 10)){
            console.log(events[k].id)
            events.splice(k, 1);
            console.log(events[k].id)
            return res.status(200).json({
                message: `event with id number ${events[k].id} has successfully been deleted..`,
                error: false,
            })
        }
    }
    return res.status(404).json({
        message: 'event does not exist...',
        error: true
    })
}
export default deleteEvent;