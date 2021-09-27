import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  try {
    const data = await req.db('cars').distinctOn('brand_name').select('*');
    return res.status(200).json({
      questions: {
        carbrand: {
          singlechoice: {
            popularcount: 6,
            choices: data.map((x) => ({
              label: x.brand_name,
              value: x.brand_name,
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
