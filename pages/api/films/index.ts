import clientPromise from "lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export interface Actor {
    _id: string;
    role: string;
}

export interface Film {
    _id: string;
    title: string;
    year: number;
    genre: string;
    summary: string;
    country: string;
    director: {
        _id: string;
    };
    actors: Actor[];
}

export default async function filmsHander(
    req: NextApiRequest,
    res: NextApiResponse<{
        status: number;
        data: Film[];
    }>
) {
    const client = await clientPromise;
    const db = client.db("netflims");
    switch (req.method) {
        case "GET":
            const data: Film[] = await db.collection("films").find({}).toArray() as unknown as Film[];
            res.json({ status: 200, data: data });
            break;
        case "POST":
            if (req.body == "" || req.body == null) {
                res.json({ status: 400, data: [] });
                break;
            }
            const result: any = await db.collection("films").insertOne(req.body);
            result ? res.json({ status: 201, data: [] }) : res.json({ status: 500, data: [] });
            break;
        default:
            res.json({ status: 405, data: [] });
    }
    return res;
}