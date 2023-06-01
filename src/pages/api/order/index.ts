// import { prisma } from "@/utils/db";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const query = req.query;
//     const locationId = parseInt(query.locationId as string, 10);
//     if (!locationId) return res.send(400);
//     const branchesMenus = await prisma.branches_menucategories_menus.findMany({
//         where: {
//             branch_id: locationId,
//         },
//     });
//     const menusIds = branchesMenus.map((branchMenu:any) => branchMenu.menu_id);
//     const menus = await prisma.menus.findMany({
//         where: {
//             id: {
//                 in: menusIds,
//             },
//         },
//     });
//     const menuMenuCategories = await prisma.menus_menu_categories.findMany({
//         where: {
//             menus_id: {
//                 in: menusIds,
//             },
//         },
//     });
//     const MenuCategoryIds = menuMenuCategories.map(
//         (data) => data.menu_categories_id
//     );
//     const MenuCategories = await prisma.menu_categories.findMany({
//         where: {
//             id: {
//                 in: MenuCategoryIds,
//             },
//         },
//     });
//     const menuAddons = await prisma.menu_addons.findMany({
//         where: {
//             menu_id: {
//                 in: menusIds,
//             },
//         },
//     });
//     const addonIds = menuAddons.map((data) => data.addon_id);
//     const addons = await prisma.addons.findMany({
//         where: { id: { in: addonIds } },
//     });
//     const addonCatsIds = addons.map(
//         (data) => data.addon_categories_id
//     ) as number[];
//     const addonCategories = await prisma.addon_categories.findMany({
//         where: {
//             id: {
//                 in: addonCatsIds,
//             },
//         },
//     });
//     res.send({
//         menus: menus,
//         MenuCategories: MenuCategories,
//         addons: addons,
//         addonCategories: addonCategories,
//         menuMenuCategories: menuMenuCategories,
//         menuAddons: menuAddons,
//     });
// }
