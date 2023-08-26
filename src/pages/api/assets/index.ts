import { fileUpload } from "@/utils/fileUpload";
import { NextApiRequest, NextApiResponse } from "next";
import { Request, Response } from "express";

export const config = {
    api: {
        bodyParser: false,
    },
};

type CustomNextApiRequest = NextApiRequest &
    Request & {
        files: any[];
    };

type CustomNextApiResponse = NextApiResponse & Response;

export default async function handler(
    req: CustomNextApiRequest,
    res: CustomNextApiResponse
) {
    try {
        fileUpload(req, res, async (error: any) => {
            if (error) return res.send(error);
            const files = req.files as Express.MulterS3.File[];
            const file = files[0];
            const assetUrl = file.location;

            res.send({ assetUrl });
        });
    } catch (error) {
        return res.send(500);
    }
}
