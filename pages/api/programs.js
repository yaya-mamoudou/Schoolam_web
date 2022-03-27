import axios from 'axios';
const URL = process.env.API_HOSTNAME;

const programs = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const api_res = await axios.get(`${URL}/schoolGuide/spec_info/getspe_info/${req.query.id}`);

      const data = await api_res.data;

      if (api_res.status === 200) {
        return res.status(200).json({
          programs: data,
        });
      } else {
        return res.status(api_res.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when retrieving programs',
      });
    }
  } else if (req.method == 'POST') {
    const body = JSON.stringify(req.body);

    try {
      const api_res = await axios.post(`${URL}/schoolGuide/university/getuniversity`);

      const data = await api_res.json();

      if (api_res.status === 200) {
        return res.status(200).json({
          notes: data,
        });
      } else {
        return res.status(api_res.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: 'Something went wrong when adding agency',
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
  }
};

export default programs;
