import centers from '../../models/centers';

const deleteCenter = (req, res) => {
    for ( const [k] of Object.entries(centers)){
        if (centers[k].id === parseInt(req.params.centerId, 10)){
            centers.splice(k, 1);
            res.status(200).json({
                message: 'This Center has been deleted...'
            })
        }
    }
    return res.status(404).json({
        message: 'Center does not exist...'
    })
}
export default deleteCenter;