import { NextApiResponse } from 'next';

import connectionHandler from 'server/connector';

const handler = async (req: any, res: NextApiResponse) => {
  const { ...queryParams } = req.query;

  if (
    !queryParams.carbrand &&
    !queryParams.carmodel &&
    !queryParams.carmanufac
  ) {
    // TODO: throw error
  }
  try {
    const data = await req
      .db('cars')
      .where({
        brand_name: queryParams.carbrand,
        model_name: queryParams.carmodel,
        year: queryParams.carmanufac,
      })
      // sort and get the highest price
      .orderBy('price', 'DESC')
      .first()
      .select('id', 'price');
    return res.status(200).json({
      questions: {
        hmborrow: {
          price: data.price,
        },
      },
    });
  } catch (e) {
    return res.status(500).send({ error: 'Something went wrong', details: e });
  }
};

export default connectionHandler()(handler);
