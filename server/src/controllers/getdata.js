// controllers/getdata.js

const Form = require('../models/Form');

/**
 * Controller to fetch and log all form submissions.
 * Sends the data as a JSON response.
 */
const getData = async (req, res) => {
  try {
    // Fetch all form submissions from the database
    const forms = await Form.find();

    // Log the JSON data to the console in a readable format
    console.log('Retrieved Form Submissions:', JSON.stringify(forms, null, 2));

    // Send the data as a JSON response to the client
    res.status(200).json({
      success: true,
      data: forms,
    });
  } catch (error) {
    console.error('Error fetching form data:', error);

    // Send an error response to the client
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};

module.exports = { getData };
