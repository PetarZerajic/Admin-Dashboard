export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "Users",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"></img>
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithEmail">
          <span>{params.row.email}</span>
        </div>
      );
    },
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellAge">
          <span>{params.row.age}</span>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellStatus">
          <span className={`cellStatus ${params.row.status}`}>
            {params.row.status}
          </span>
        </div>
      );
    },
  },
];
export const productColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "prodcuts",
    headerName: "Products",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar"></img>
          {params.row.productsname}
        </div>
      );
    },
  },
  {
    field: "customer",
    headerName: "Customers",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithCustomer">
          <span>{params.row.customers}</span>
        </div>
      );
    },
  },
  {
    field: "date",
    headerName: "Date",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellDate">
          <span>{params.row.date}</span>
        </div>
      );
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellAmount">
          <span>{params.row.amount}</span>
        </div>
      );
    },
  },
  {
    field: "paymenth metod",
    headerName: "Paymenth metod",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellMetod">
          <span>{params.row.Paymenthmetod}</span>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellStatus">
          <span className={`cellStatus ${params.row.status}`}>
            {params.row.status}
          </span>
        </div>
      );
    },
  },
];

//Trenutno
export const userRows = [
  {
    id: 1,
    username: "Jasmin Doe",
    img: "https://images.pexels.com/photos/1963075/pexels-photo-1963075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "JasminDoe@gmail.com ",
    status: "active",
    age: 25,
  },
  {
    id: 2,
    username: "Raus Jordan",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "RausJordan@gmail.com ",
    status: "passive",
    age: 45,
  },
  {
    id: 3,
    username: "Adam Hawkins",
    img: "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "AdamHawkins@gmail.com ",
    status: "pending",
    age: 35,
  },
  {
    id: 4,
    username: "Benjamin Cox",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "BenjaminCox@hotmail.com ",
    status: "active",
    age: 26,
  },
  {
    id: 5,
    username: "Harrison Woods",
    img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "HarrisonWoods@hotmail.com ",
    status: "passive",
    age: 70,
  },
  {
    id: 6,
    username: "Jeremiah Reeves",
    img: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "JeremiahReeves@yahoo.com ",
    status: "active",
    age: 49,
  },
  {
    id: 7,
    username: "David Perry  ",
    img: "https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "DavidPerry@yahoo.com ",
    status: "passive",
    age: 60,
  },
  {
    id: 8,
    username: "Peter Francis",
    img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "PeterFrancis@gmail.com ",
    status: "active",
    age: 30,
  },
  {
    id: 9,
    username: "Taylor Mcdonald",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    email: "TaylorMcdonald@outlook.com ",
    status: "active",
    age: 25,
  },
];

export const productRows = [
  {
    id: 1,
    productsname: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/61iGju1RL5L._SX522_.jpg",
    customers: "Michael Doe",
    amount: 785,
    date: "8 March",
    Paymenthmetod: "Online Payment",
    status: "passive",
  },
  {
    id: 2,
    productsname: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SX466_.jpg",
    customers: "John Smith ",
    date: "1 March",
    amount: 785,
    Paymenthmetod: "Cash on Delivery",
    status: "active",
  },
  {
    id: 3,
    productsname: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
    customers: "John Smith ",
    amount: 785,
    date: "1 December",
    Paymenthmetod: "Cash on Delivery",
    status: "pending",
  },
  {
    id: 4,
    productsname: "Rezer Blade 15",
    img: "https://m.media-amazon.com/images/I/71mIkTVDwKL._AC_SX679_.jpg",
    customers: "John Johnes",
    amount: 785,
    date: "9 April",
    Paymenthmetod: "Online",
    status: "active",
  },
  {
    id: 5,
    productsname: "Asus ROG Strix",
    img: "https://m.media-amazon.com/images/I/81fZmxBbQgL._AC_SX466_.jpg",
    customers: "Harold Carol",
    amount: 785,
    date: "11 January",
    Paymenthmetod: "Online Payment",
    status: "passive",
  },
  {
    id: 6,
    productsname: "RTX 3090",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71t5WWhtLTL._AC_SX679_.jpg",
    customers: "Dexter Byrne",
    amount: 785,
    date: "2 February",
    Paymenthmetod: "Online",
    status: "pending",
  },
  {
    id: 7,
    productsname: "Xbox series X",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61JGKhqxHxL._SX522_.jpg",
    customers: "Bobby Kennedy ",
    amount: 785,
    date: "23 July",
    Paymenthmetod: "Online Payment",
    status: "active",
  },
  {
    id: 8,
    productsname: "Gaming Chair",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61BIffgG6CL._AC_SL1500_.jpg",
    customers: "Jamal Crawford ",
    amount: 785,
    date: "17 September",
    Paymenthmetod: "Cash on Delivery",
    status: "active",
  },
  {
    id: 9,
    productsname: "Razer Kraken",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71BKQhFzDmL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    customers: "Ray Allen ",
    amount: 785,
    date: "10 October",
    Paymenthmetod: "Online",
    status: "pending",
  },
];
