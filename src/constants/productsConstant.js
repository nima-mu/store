let products = [
  {
    colors: ["blue","black", "gold"],
    id: 1,
    productName: "iPhone 13 Pro CH",
    rate: 4,
    category: "گوشی",
    brand: "اپل",
    productImage: "https://api.iransweb.com/uploads/mobiles/iphone13.webp",
    price: 144400000,
    cameraResulation: 12,
    screenTechnology: "Super Retina XDR OLED",
    osVersion: "iOS 15",
    size: "6.1",
    memory: "256 GB",
    ram: "6 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T03:39:24.792Z",
    updatedAt: "2024-07-14T03:39:24.792Z",
  },
  {
    colors: ["black", "gold", "gray"],
    id: 2,
    productName: "Galaxy S24 Ultra",
    rate: 4,
    category: "گوشی",
    brand: "سامسونگ",
    productImage: "https://api.iransweb.com/uploads/mobiles/s24Ultra.webp",
    price: 64200000,
    cameraResulation: 200,
    screenTechnology: "ynamic LTPO AMOLED 2",
    osVersion: "Android 14",
    size: "6.8",
    memory: "512 GB",
    ram: "12 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T06:11:02.017Z",
    updatedAt: "2024-07-14T06:11:02.017Z",
  },
  {
    colors: ["black", "blue", "gold"],
    id: 3,
    productName: "Redmi Note 13 4G",
    rate: 4,
    category: "گوشی",
    brand: "شیائومی",
    productImage: "https://api.iransweb.com/uploads/mobiles/redmiNode13.webp",
    price: 9899000,
    cameraResulation: 108,
    screenTechnology: "AMOLED",
    osVersion: "Android 13",
    size: "6.67",
    memory: "256 GB",
    ram: "8 GB",
    IncludedItems: "دفترچه‌ راهنما، شارژر،",
    createdAt: "2024-07-14T06:13:00.165Z",
    updatedAt: "2024-07-14T06:13:00.165Z",
  },
  {
    colors: ["black", "blue"],
    id: 4,
    productName: "Galaxy A55",
    rate: 4,
    category: "گوشی",
    brand: "سامسونگ",
    productImage: "https://api.iransweb.com/uploads/mobiles/galaxyA55.webp",
    price: 21799000,
    cameraResulation: 50,
    screenTechnology: "Super AMOLED",
    osVersion: "Android 14",
    size: "6.6",
    memory: "256 GB",
    ram: "8 GB",
    IncludedItems: "دفترچه‌ راهنما، کابل USB",
    createdAt: "2024-07-14T06:14:53.995Z",
    updatedAt: "2024-07-14T06:14:53.995Z",
  },
  {
    colors: ["black", "gray", "lemonchiffon"],
    id: 5,
    productName: "Poco X6 Pro 5G",
    rate: 5,
    category: "گوشی",
    brand: "شیائومی",
    productImage: "https://api.iransweb.com/uploads/mobiles/pocoX6Pro.webp",
    price: 18420000,
    cameraResulation: 64,
    screenTechnology: " AMOLED",
    osVersion: "Android 14",
    size: "6.67",
    memory: "512 GB",
    ram: "12 GB",
    IncludedItems: "دفترچه‌ راهنما، شارژر، قاب ژله‌ای",
    createdAt: "2024-07-14T06:17:07.898Z",
    updatedAt: "2024-07-14T06:17:07.898Z",
  },
  {
    colors: ["blue"],
    id: 7,
    productName: "Moto G54 5G",
    rate: 4,
    category: "گوشی",
    brand: "موتورلا",
    productImage: "https://api.iransweb.com/uploads/mobiles/motoG64.webp",
    price: 9430000,
    cameraResulation: 50,
    screenTechnology: "IPS",
    osVersion: "Android 13",
    size: "6.5",
    memory: "256 GB",
    ram: "8 GB",
    IncludedItems: "دفترچه‌ راهنما، شارژر، قاب ژله‌ای",
    createdAt: "2024-07-14T06:21:21.966Z",
    updatedAt: "2024-07-14T06:21:21.966Z",
  },
  {
    colors: ["black", "white"],
    id: 8,
    productName: "iPhone 11",
    rate: 5,
    category: "گوشی",
    brand: "اپل",
    productImage: "https://api.iransweb.com/uploads/mobiles/iphone11.webp",
    price: 40699000,
    cameraResulation: 12,
    screenTechnology: "Liquid Retina",
    osVersion: "iOS 13",
    size: "6.1",
    memory: "64 GB",
    ram: "4 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T06:26:50.202Z",
    updatedAt: "2024-07-14T06:26:50.202Z",
  },
  {
    colors: ["black", "lightgoldenrodyellow", "green"],
    id: 9,
    productName: "Galaxy Z Flip5",
    rate: 5,
    category: "گوشی",
    brand: "سامسونگ",
    productImage: "https://api.iransweb.com/uploads/mobiles/galaxyZ.webp",
    price: 54350000,
    cameraResulation: 12,
    screenTechnology: "Foldable Dynamic AMOLED 2X",
    osVersion: "Android 13",
    size: "6.7",
    memory: "512 GB",
    ram: "8 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T06:28:50.588Z",
    updatedAt: "2024-07-14T06:28:50.588Z",
  },
  {
    colors: ["blue","gold"],
    id: 10,
    productName: "iPhone 13 Pro Max CH",
    rate: 3,
    productImage:
      "https://api.iransweb.com/uploads/mobiles/iphone13promax.webp",
    category: "گوشی",
    brand: "اپل",
    price: 126000000,
    cameraResulation: 12,
    screenTechnology: "Super Retina XDR OLED",
    osVersion: "iOS 15",
    size: "6.7",
    memory: "1 TB",
    ram: "6 GB",
    IncludedItems: "دفترچه‌ راهنما، کابل Lightning",
    createdAt: "2024-07-14T06:30:49.203Z",
    updatedAt: "2024-07-14T06:30:49.203Z",
  },
  {
    colors: ["blue"],
    id: 11,
    productName: "Galaxy Z Fold5",
    rate: 5,
    category: "گوشی",
    brand: "سامسونگ",
    productImage: "https://api.iransweb.com/uploads/mobiles/zfold5.webp",
    price: 78600000,
    cameraResulation: 50,
    screenTechnology: "Foldable Dynamic AMOLED 2X",
    osVersion: "Android 13",
    size: "7.6",
    memory: "256 GB",
    ram: "12 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T06:33:29.677Z",
    updatedAt: "2024-07-14T06:33:29.677Z",
  },
  {
    colors: ["gray"],
    id: 12,
    productName: "Galaxy S24 Plus",
    rate: 5,
    category: "گوشی",
    brand: "سامسونگ",
    productImage: "https://api.iransweb.com/uploads/mobiles/s24plus.webp",
    price: 57960000,
    cameraResulation: 50,
    screenTechnology: "Dynamic LTPO AMOLED 2X",
    osVersion: "Android 14",
    size: "6.7",
    memory: "512 GB",
    ram: "12 GB",
    IncludedItems: "دفترچه‌ راهنما",
    createdAt: "2024-07-14T06:34:57.325Z",
    updatedAt: "2024-07-14T06:34:57.325Z",
  },
  {
    colors: ["black"],
    id: 13,
    productName: "MSI Raider GE78HX 13VH-i9 RTX4080",
    rate: 4,
    productImage: "https://api.iransweb.com/uploads/laptop/RTX4080.webp",
    price: 219950000,
    memory: "2 TB",
    ram: "32 GB",
    graphic: "NVIDIA RTX-4080",
    category: "لپ تاپ",
    brand: "ام اس آی",
    createdAt: "2024-07-14T03:33:51.103Z",
    updatedAt: "2024-07-14T03:33:51.103Z",
  },
  {
    colors: ["silver"],
    id: 14,
    productName: "HP EF2126WM-A - کاستوم شده",
    rate: 4,
    productImage: "https://api.iransweb.com/uploads/laptop/efHp.webp",
    price: 54000000,
    memory: "256 GB",
    ram: "16 GB",
    graphic: "AMD",
    category: "لپ تاپ",
    brand: "اچ پی",
    createdAt: "2024-07-14T07:16:43.071Z",
    updatedAt: "2024-07-14T07:16:43.071Z",
  },
  {
    colors: ["black"],
    id: 15,
    productName: "ASUS ROG Flow Z13 GZ301ZE-i9 RTX3050Ti",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/1ed975c6d938df2745c1843198e57fe5dfd6c009_1701866526.webp",
    price: 93500000,
    memory: "1 TB",
    ram: "16 GB",
    graphic: "NVIDIA RTX-3050-Ti",
    category: "لپ تاپ",
    brand: "ایسوس",
    createdAt: "2024-07-14T07:19:02.226Z",
    updatedAt: "2024-07-14T07:19:02.226Z",
  },
  {
    colors: ["black"],
    id: 16,
    productName: "ASUS TUF Gaming F15 FX506HF-HN014-i5 RTX2050",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/299894b3ea76b553a9360f3cd1974544380b0235_1692599926.webp",
    price: 93500000,
    memory: "512 GB",
    ram: "8 GB",
    graphic: "NVIDIA RTX-2050",
    category: "لپ تاپ",
    brand: "ایسوس",
    createdAt: "2024-07-14T07:20:50.335Z",
    updatedAt: "2024-07-14T07:20:50.335Z",
  },
  {
    colors: ["black"],
    id: 17,
    productName: "ASUS Zenbook Pro Duo 14 UX8402VU-P1093-i7 RTX4050",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/bb9e4dc651e6ab3710c7bfcf6b552ecfa8178050_1716118282.webp",
    price: 93500000,
    memory: "1 TB",
    ram: "16 GB",
    graphic: "NVIDIA RTX-4050",
    category: "لپ تاپ",
    brand: "ایسوس",
    createdAt: "2024-07-14T07:22:17.114Z",
    updatedAt: "2024-07-14T07:22:17.114Z",
  },
  {
    colors: ["black"],
    id: 18,
    productName: "ََACER Nitro V 15 ANV15-51-59RM-i5 RTX2050",
    rate: 1,
    productImage:
      "https://api.iransweb.com/uploads/laptop/053d7f1758d46f9b0133cd23858b50f3abc9b777_1714977962.webp",
    price: 38499000,
    memory: "512 GB",
    ram: "8 GB",
    graphic: "NVIDIA RTX-2050",
    category: "لپ تاپ",
    brand: "ایسر",
    createdAt: "2024-07-14T07:24:14.112Z",
    updatedAt: "2024-07-14T07:24:14.112Z",
  },
  {
    colors: ["beige", "silver", "gray", "blue"],
    id: 19,
    productName: "APPLE MacBook Air-B M2 2022-N 2GB 256SSD",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/0453261f5778b624dae7dda88a414fe8fcf8d109_1671472045.webp",
    price: 56100000,
    memory: "256 GB",
    ram: "8 GB",
    graphic: "APPLE",
    category: "لپ تاپ",
    brand: "اپل",
    createdAt: "2024-07-14T07:26:18.501Z",
    updatedAt: "2024-07-14T07:26:18.501Z",
  },
  {
    colors: ["silver"],
    id: 20,
    productName: "APPLE MacBook Pro MRW73 2023-M3 36GB 1SSD",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/ddab48e98ad967f4c06be60ed7ab28f22806825a_1702130212.webp",
    price: 209990000,
    memory: "1 TB",
    ram: "36 GB",
    graphic: "Apple",
    category: "لپ تاپ",
    brand: "اپل",
    createdAt: "2024-07-14T07:31:22.950Z",
    updatedAt: "2024-07-14T07:31:22.950Z",
  },
  {
    colors: ["gray"],
    id: 21,
    productName: "LENOVO Legion 5 15ARH7H",
    rate: 5,
    productImage:
      "https://api.iransweb.com/uploads/laptop/38027bf3b926629da930942518cf1f236620c56c_1678538583.webp",
    price: 63245000,
    memory: "512 GB",
    ram: "16 GB",
    graphic: "NVIDIA",
    category: "لپ تاپ",
    brand: "لنوو",
    createdAt: "2024-07-14T07:35:17.335Z",
    updatedAt: "2024-07-14T07:35:17.335Z",
  },
  {
    colors: ["black"],
    id: 22,
    productName: "DELL Alienware m16 R1-i7 RTX4070 W",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/5ba13032365e3faa13ed317425206df84f8281f7_1716889698.webp",
    price: 129900000,
    memory: "1 TB",
    ram: "16 GB",
    graphic: "NVIDIA RTX-4070",
    category: "لپ تاپ",
    brand: "دل",
    createdAt: "2024-07-14T07:36:36.270Z",
    updatedAt: "2024-07-14T07:36:36.270Z",
  },
  {
    colors: ["black"],
    id: 23,
    productName: "HP Spectre x360 2-in-1 16t-F1023dx-i7",
    rate: 4,
    productImage:
      "https://api.iransweb.com/uploads/laptop/5ba13032365e3faa13ed317425206df84f8281f7_1716889698.webp",
    price: 104090000,
    memory: "2 TB",
    ram: "16 GB",
    graphic: "Intel",
    category: "لپ تاپ",
    brand: "اچ پی",
    createdAt: "2024-07-14T07:37:29.237Z",
    updatedAt: "2024-07-14T07:37:29.237Z",
  },
];

export default products;
