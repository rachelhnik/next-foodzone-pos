import { prisma } from "@/utils/db";
import { private_safeAlpha } from "@mui/system";
import { NextApiRequest, NextApiResponse } from "next";
import { Press_Start_2P } from "next/font/google";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const addonCategoryId = parseInt(req.query.id as string, 10);
    const { name, is_required, selectedAddons } = req.body;
    await prisma.addon_categories.update({
        data: {
            name: name,
            is_required: is_required,
        },
        where: { id: addonCategoryId },
    });
    const selectedAddonsIds = selectedAddons.map(
        (addon: any) => addon.id
    ) as number[];
    const currentAddons = await prisma.addons.findMany({
        where: { addon_categories_id: addonCategoryId },
    });
    const currentAddonsIds = currentAddons.map((addon) => addon.id) as number[];

    const addedAddonsIds = selectedAddonsIds.filter(
        (selectedId) => !currentAddonsIds.includes(selectedId)
    );
    const removedAddonsIds = currentAddonsIds.filter(
        (removedId) => !selectedAddonsIds.includes(removedId)
    );

    // if (removedAddonsIds) {
    //     removedAddonsIds.forEach(async (removedId) => {
    //         await prisma.addons.delete({
    //             where: { id: removedId },
    //         });
    //     });
    // }
    res.send(200);
}
