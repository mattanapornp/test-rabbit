import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;
  if (!queryParams.district) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('subdistricts')
      .where({
        district_oic_code: queryParams.district,
      })
      .distinct()
      .select('postcode');
    return res.status(200).json({
      questions: {
        zipcode: {
          singlechoice: {
            popularcount: 0,
            choices: data.map((x) => ({
              label: x.postcode,
              value: x.postcode,
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
