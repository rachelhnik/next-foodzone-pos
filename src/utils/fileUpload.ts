import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";
import { config } from "../config/Config";
import QRCode from "qrcode";
import { generateLinkForQRCode } from ".";

// Set S3 endpoint to DigitalOcean Spaces
const s3Config = new S3Client({
    endpoint: "https://sgp1.digitaloceanspaces.com",
    region: "sgp1",
    credentials: {
        accessKeyId: config.spaceAccessKeyId,
        secretAccessKey: config.spaceSecretAccessKey,
    },
});

export const qrCodeImageUpload = async (branchId: number, tableId: number) => {
    try {
        const qrImageData = await QRCode.toDataURL(
            generateLinkForQRCode(branchId, tableId)
        );
        const input = {
            Bucket: "msquarefdc",
            Key: `happy-pos/qrcode/sho/branchId-${branchId}-tableId-${tableId}.png`,
            ACL: "public-read",
            Body: Buffer.from(
                qrImageData.replace(/^data:image\/\w+;base64,/, ""),
                "base64"
            ),
        };

        const command = new PutObjectCommand(input);
        const response = await s3Config.send(command);
    } catch (err) {
        console.log("error");
        console.error(err);
    }
};

export const fileUpload = multer({
    storage: multerS3({
        s3: s3Config,
        bucket: "msquarefdc",
        acl: "public-read",
        key: function (request, file, cb) {
            cb(null, `happy-pos/sho/${Date.now()}_${file.originalname}`);
        },
    }),
}).array("files", 1);
