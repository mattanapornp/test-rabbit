import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;

  if (!queryParams.province1) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('districts')
      .where({
        province_oic_code: queryParams.province,
      })
      .select('*');
    return res.status(200).json({
      questions: {
        district: {
          singlechoice: {
            popularcount: 6,
            choices: data.map((x) => ({
              label: queryParams.lang === 'en' ? x.name_en : x.name_th,
              value: x.oic_code,
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
