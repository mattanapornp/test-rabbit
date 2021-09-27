import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const thaiYear = 543;

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;

  if (!queryParams.carbrand && !queryParams.carmodel) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('cars')
      .distinctOn('year')
      .where({
        brand_name: queryParams.carbrand,
        model_name: queryParams.carmodel,
      })
      .orderBy('year', 'DESC')
      .select('year');
    return res.status(200).json({
      questions: {
        carmanufac: {
          singlechoice: {
            popularcount: 0,
            choices: data.map((x) => ({
              label: `${x.year} / ${x.year + thaiYear}`,
              value: x.year,
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
