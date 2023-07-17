import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { q } = req.query;
    console.log("AT THE API");

    res.status(200).json({message: "Hej!"});
}
