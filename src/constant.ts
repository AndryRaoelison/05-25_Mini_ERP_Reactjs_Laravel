import { homeIcon, orderIcon, profileMenuIcon, usersIcon, commentsIcon,
     chartBoxUserIcon, chartBoxProductIcon, chartBoxRevenueIcon,
     chartBoxConversionIcon } from "./assets/icons";
import { janedoe1, janedoe2, janedoe3, johndoe } from "./assets/images";

//--------Data for top deals menu sidebar
export const menuDatas = [
    {
        id : 1,
        menuTitle : "Main",
        menuItems : [
            {
                id:1,
                icon : homeIcon,
                label : "Homepage",
                link : "/"
            }, {
                id:2,
                icon : profileMenuIcon,
                label : "Profile",
                link : "/profile"
            }
        ]
    },
    {
        id : 2,
        menuTitle : "Lists",
        menuItems : [
            {
                id:1,
                icon : usersIcon,
                label : "Users",
                link : "/users"
            }, {
                id:2,
                icon : profileMenuIcon,
                label : "Products",
                link : "/products"
            },{
                id:3,
                icon : orderIcon,
                label : "Orders",
                link : "/orders"
                

            },
            {
                id:4,
                icon : commentsIcon,
                label : "Posts",
                link : "/posts"
            }
        ]
    }
]

//--------Data for top deals menu at homepage
export const topDealsProfiles = [
    {
        id:1,
        profilePicture : johndoe,
        name : "John Doe",
        email : "John@doe.com",
        deal : 5.4,
      

    },
    {
        id:2,
        profilePicture : janedoe2,
        name : "Jane Doe",
        email : "Janedoe@doe.com",
        deal : 4.5,

    },
    {
        id:3,
        profilePicture : janedoe3,
        name : "Jane Doe",
        email : "Janedoe@doe.com",
        deal : 1.5,

    },
    {
        id: 4,
        profilePicture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Juan Harrington",
        email:"juan@juan.com",
        deal: 2.134,
      },
    {
        id:5,
        profilePicture :janedoe1 ,
        name : "Jane Doe",
        email : "Janedoe@doe.com",
        deal : 7.5,

    },
    { 
        id: 6,
        profilePicture: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Brent Reeves",
        email: "brent@gmail.com",
        deal: "2.998",
    },
    {
        id: 7,
        profilePicture: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Adeline Watson",
        email: "adeline@gmail.com",
        deal: "2.512",
    },
    {
        id: 8,
        profilePicture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Juan Harrington",
        email: "juan@gmail.com",
        deal: "2.134",
    },
    {
        id: 9,
        profilePicture: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Augusta McGee",
        email: "augusta@gmail.com",
        deal: "1.932",
    },
    {
        id: 10,
        profilePicture: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
        name: "Augusta McGee",
        email: "augusta@gmail.com",
        deal: "1.932",
    },
   
        
]

//--------Data for Total Users  at homepage
export const chartBoxUser = {
    color: "#8884d8",
    icon: chartBoxUserIcon,
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 4,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 510 },
    ],
  };
  
//--------Data for Product at homepage
  export const chartBoxProduct = {
    color: "#43b3f9",
    icon: chartBoxProductIcon,
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 8,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 525 },
    ],
  };

//--------Data for Product users at homepage
  export const chartBoxRevenue = {
    color: "#3919d7",
    icon: chartBoxRevenueIcon,
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };

//--------Data for Product conversion (total ratio) at homepage
  export const chartBoxConversion = {
    color: "#ac7d2a",
    icon: chartBoxConversionIcon,
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: -26,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 350 },
    ],
  };

//--------Data for total visit at homepage
  export const barChartVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Jan",
      visit: 4000,
    },
    {
      name: "Feb",
      visit: 3000,
    },
    {
      name: "Mar",
      visit: 2000,
    },
    {
      name: "Apr",
      visit: 2780,
    },
    {
      name: "May",
      visit: 1890,
    },
    {
      name: "Jun",
      visit: 2390,
    },
    {
      name: "Jul",
      visit: 3490,
    },
    ],
};

//--------Data for total revenue at homepage
export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Jan",
      profit: 4000,
    },
    {
      name: "Feb",
      profit: 3000,
    },
    {
      name: "Mar",
      profit: 2000,
    },
    {
      name: "Apr",
      profit: 2780,
    },
    {
      name: "May",
      profit: 1890,
    },
    {
      name: "Jun",
      profit: 2390,
    },
    {
      name: "Jul",
      profit: 3490,
    },
  ],
};
  