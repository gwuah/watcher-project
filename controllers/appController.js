const utils = require('../utils/index');

// exports.getInterestByRegion = async (req, res) => {

//   if (!req.body.interest && !req.body.geo) {
//     return res.status(400).json({
//       status: false,
//       msg: 'All required fields were not supplied { interest, geo }'
//     })
//   }

//   try {
//     const dataset = await utils.checkInterestByRegion(req.body);
//     return res.status(200).json({
//       status: true,
//       data:dataset
//     })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       status: false,
//       msg: 'Failed to store data',
//       error
//     })
//   }

// }

// exports.relatedQueries = async (req, res) => {
//   if (!req.body.query && !req.body.geo) {
//     return res.status(400).json({
//       status: false,
//       msg: 'All required fields were not supplied { query, geo }'
//     })
//   }

//   try {
//     const dataset = await utils.checkInterestByRegion(req.body);
//     return res.status(200).json({
//       status: true,
//       data: dataset
//     })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       status: false,
//       msg: 'Failed to store data',
//       error
//     })
//   }
  
// }

exports.getInterestOverTime = async (req, res) => {
  if (!req.body.interest) {
    return res.status(400).json({
      status: false,
      msg: 'All required fields were not supplied { interest }'
    })
  }

  try {
    const dataset = await utils.checkInterestOverTime({
      interest: req.body.interest
    });
    return res.status(200).json({
      status: true,
      data: dataset
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      msg: 'Failed to store data',
      error
    })
  }
}