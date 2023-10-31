export const adminMenu = [
  {
    //hệ thống
    name: "menu.system.header",
    menus: [
      {
        name: "menu.system.system-administrator.header",
        subMenus: [
          {
            name: "menu.system.system-administrator.user-manage",
            link: "/system/user-manage",
          },
          {
            name: "menu.system.system-administrator.user-redux",
            link: "/system/user-redux",
          },
          {
            name: "quản lý product",
            link: "/system/product-manage",
          },
          {
            name: "quản lý đơn hàng",
            link: "/system/order-manage",
          },
        ],
      },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    name: "Quản lý sản phẩm",
    menus: [
      // {
      //   name: "Tạo sản phẩm mới",
      //   link: "/system/product-manage-create",
      // },
      {
        name: "Quản lý sản phẩm",
        link: "/system/product-manage",
      },
      {
        name: "Chỉnh sửa sản phẩm",
        link: "/system/product-update",
      },
    ],
  },
];
