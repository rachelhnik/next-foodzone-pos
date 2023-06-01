// import { OrderContext } from "@/contexts/OrderContext";
// import { MenuCategory } from "@/typings/Types";
// import { Box, Button } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";

// export default function Order() {
//     const { menuCategories } = useContext(OrderContext);
//     const [selectedMenuCategory, setSelectedMenuCategory] =
//         useState<MenuCategory>();

//     useEffect(() => {
//         menuCategories && setSelectedMenuCategory(menuCategories[0]);
//     }, [menuCategories]);

//     return (
//         <Box>
//             {menuCategories.map((menucat) => (
//                 <Button
//                     onClick={() => setSelectedMenuCategory(menucat)}
//                     variant={
//                         menucat.id === selectedMenuCategory?.id
//                             ? "contained"
//                             : "outlined"
//                     }
//                     key={menucat.id}
//                 >
//                     {menucat.name}
//                 </Button>
//             ))}
//         </Box>
//     );
// }
