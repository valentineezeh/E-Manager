import centers from '../../models/centers';
import events from '../../models/events';

const addCenter = (req, res) => {
    centers.push({
        id: centers.length + 1,
        title: req.body.title,
        capacity: parseInt(req.body.capacity, 10),
        price: parseInt(req.body.price, 10),
        location: req.body.location,
    });
    return res.status(201).json({
        message: 'Center has be created successfully...',
        error: false,
        center: {
            id: centers.length + 1,
            title: req.body.title,
            capacity: parseInt(req.body.capacity, 10),
            price: parseInt(req.body.price, 10),
            location: req.body.location,
        }
    })
}
export default addCenter;