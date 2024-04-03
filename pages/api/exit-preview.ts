import { NextApiRequest, NextApiResponse } from "next";

export default async function exit(_: NextApiRequest, res: NextApiResponse) {
  // Exit Draft Mode by removing the cookie
  res.setPreviewData({});

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: "/" });
  res.end();
}
