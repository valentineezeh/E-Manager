import events from '../../models/events';
import centers from '../../models/centers';

 const showEvents = (req, res) => {
    res.status(200).json(events);
  }

  export default showEvents;