import centers from '../../models/centers';
import events from '../../models/events';

const modifyCenter = (req, res) => {
  for (const [k] of Object.entries(centers)) {
    console.log(centers[k].id);
    if (centers[k].id === parseInt(req.params.centerId, 10)) {
      centers[k].title = req.body.title;
      centers[k].capacity = parseInt(req.body.capacity, 10);
      centers[k].price = parseInt(req.body.price, 10);
      centers[k].location = req.body.location;
      return res.status(200).json({
        center: centers[k],
        message: 'Center has been successfully been updated...',
        error: false,
      });
    }
  }
  return res.status(404).json({
    error: true,
    message: 'Center does not exist...'
  });
};
export default modifyCenter;
