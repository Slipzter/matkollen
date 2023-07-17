import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { q: query } = req.query;
    res.status(200).json({message: "hej!"})
}