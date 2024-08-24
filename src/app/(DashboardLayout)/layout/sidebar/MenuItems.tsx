import {
  IconBoxMultiple, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconHome,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconCircleDot,
    href: "/ui-components/product_list",
  },
  {
    id: uniqueId(),
    title: "Orders",
    icon: IconTable,
    href: "/ui-components/forms",
  },
  {
    id: uniqueId(),
    title: "Payments",
    icon: IconInfoCircle,
    href: "/ui-components/alerts",
  },
  {
    id: uniqueId(),
    title: "Customers",
    icon: IconStar,
    href: "/ui-components/ratings",
  },
  {
    id: uniqueId(),
    title: "Push Notifications",
    icon: IconPhoto,
    href: "/ui-components/images",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconUser,
    href: "/ui-components/pagination",
  },
  // {
  //   id: uniqueId(),
  //   title: "Tables",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/table",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Products",
  //   icon: IconLayoutGrid,
  //   href: "/ui-components/apis",
  // },
];

export default Menuitems;
