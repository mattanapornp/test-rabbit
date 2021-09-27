import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;

  if (!queryParams.car_brand && !queryParams.model_name) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('cars')
      .distinctOn('model_name')
      .where({
        brand_name: queryParams.car_brand,
        model_name: queryParams.model_name,
      })
      .select('*');
    return res.status(200).json({
      questions: {
        car_sub_model: {
          singlechoice: {
            choices: data.map((x) => ({
              label: x.sub_model_name,
              value: x.sub_model_name,
            })),
          },
        },
      },
    });
  } catch (e) {
    return res.status(500).send({ error: 'Something went wrong', details: e });
  }
};

export default connectionHandler()(handler);
