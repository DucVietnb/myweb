export const adminMenu = [
  {
    //hệ thống
    name: "Quản lý người dùng",
    menus: [
      {
        name: "menu.system.system-administrator.user-manage",
        link: "/system/user-manage",
      },
    ],
  },
  {
    name: "Quản lý sản phẩm",
    menus: [
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
  {
    name: "Quản lý đơn hàng",
    menus: [
      {
        name: "Đơn hàng chờ xác nhận",
        link: "/system/order-checking",
      },
      {
        name: "Đơn hàng đã xác nhận",
        link: "/system/order-checked",
      },
      {
        name: "Đơn hàng đã hủy",
        link: "/system/order-canceled",
      },
    ],
  },
];
