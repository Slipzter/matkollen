import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const { q } = req.query;
            res.status(200).json({message: "Hej!"});
        } catch (error) {}
    }
    
}
