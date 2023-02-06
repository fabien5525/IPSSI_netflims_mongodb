import clientPromise from "lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Film } from "../films";

export interface Artist {
    _id: string;
    last_name: string;
    first_name: string;
    birth_date: string;
}

export default async function artistsHander(req: NextApiRequest,
    res: NextApiResponse<{
        status: number;
        data: Artist[];
    }>) {
    const client = await clientPromise;
    const db = client.db("netflims");
    switch (req.method) {
        case "GET":
            const data = await db.collection("artists").find({}).toArray() as unknown as Artist[];
            res.json({ status: 200, data: data });
            break;
        case "POST":
            if (req.body === null || req.body === undefined) {
                res.json({ status: 400, data: [] });
                break;
            }
            const result : any = await db.collection("artists").insertOne(req.body);
            result ? res.json({ status: 201, data: [] }) : res.json({ status: 500, data: [] });
            break;
        default:
            res.json({ status: 405, data: [] });
    }
    return res;
}