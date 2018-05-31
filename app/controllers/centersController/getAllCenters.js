import centers from '../../models/centers';

const showCenters = (req, res) => {
  return res.status(200).json({
    centers,
    error: false,
  })
}

export default showCenters;