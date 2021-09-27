import Service from '../../../../lib/lgt/service';

export default async function handler(req, res) {
  const lgt = new Service();
  const { platform } = req.query;

  const defaultRequest = {
    refurl: req.headers.HTTP_REFERER ?? null,
    ipaddr: req.headers.REMOTE_ADDR ?? null,
    queryparams: '{}',
    lead_source: 'Website',
  };

  const reqBody = {
    ...defaultRequest,
    ...req.body.values,
  };

  const result = await lgt.saveResponseWSL(reqBody, platform);

  res.status(200).json(result);
}
