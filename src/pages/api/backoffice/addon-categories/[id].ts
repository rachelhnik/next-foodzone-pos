import { prisma } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { Press_Start_2P } from "next/font/google";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const addoncatId = parseInt(req.query.id as string, 10);
    const { selectedMenus, addonCategory } = req.body;
    const { name, is_required } = addonCategory;
    // const updatedAddonCategory = await prisma.addon_categories.update({
    //     where:{id:addoncatId},
    //     data:{
    //         name:name,
    //         is_required:is_required
    //     }
    // });
    const selectedMenuIds = selectedMenus.map((data: any) => data.id);

    const alreadyExistMenuAddoncat = await prisma.$transaction(
        selectedMenuIds.map(async (id: number) => {
            const alreadyExist = await prisma.menu_addoncategories.findFirst({
                where: { menu_id: id, addoncategory_id: addoncatId },
            });
            if (alreadyExist) return;
            if (!alreadyExist)
                await prisma.menu_addoncategories.create({
                    data: {
                        menu_id: id,
                        addoncategory_id: addoncatId,
                    },
                });
        })
    );

    res.send(200);
}
