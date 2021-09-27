import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;

  if (!queryParams.carbrand) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('cars')
      .distinctOn('model_name')
      .where({ brand_name: queryParams.carbrand })
      .select('*');
    return res.status(200).json({
      questions: {
        carmodel: {
          singlechoice: {
            popularcount: 6,
            choices: data.map((x) => ({
              label: x.model_name,
              value: x.model_name,
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
