let xAxisData = [
    {
        "name": "jan",
        "sale": 120_000
    },
    {
        "name": "feb",
        "sale": 90_000
    },
    {
        "name": "mar",
        "sale": 50_000
    },
    {
        "name": "apr",
        "sale": 110_000
    },
    {
        "name": "may",
        "sale": 30_000
    },
    {
        "name": "jun",
        "sale": 10_000
    },
    {
        "name": "jul",
        "sale": 105_000
    },
    {
        "name": "agu",
        "sale": 0
    },
    {
        "name": "sep",
        "sale": 70_000
    },
    {
        "name": "oct",
        "sale": 85_000
    },
    {
        "name": "nov",
        "sale": 40_000
    },
    {
        "name": "dec",
        "sale": 110_000
    },
]
const newUser = [
    {
        id:1,
        username:"Mojtaba",
        title:"Hacker",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:2,
        username:"Ali",
        title:"Designer",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:3,
        username:"Reza",
        title:"FrontEnd",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:4,
        username:"Java",
        title:"Markting",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:5,
        username:"Morteza",
        title:"BackEnd",
        img:"./images/IMG_8216a.jpg"
    },
]
const transActions = [
    {
        id:1,
        customer:"qadir",
        date: "12 jun 2023",
        amout: 100,
        status:"Approved",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:2,
        customer:"ali",
        date: "10 may 2023",
        amout: 80,
        status:"Declined",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:3,
        customer:"reza",
        date: "8 jul 2023",
        amout: 140,
        status:"Declined",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:4,
        customer:"jafar",
        date: "20 sep 2023",
        amout: 210,
        status:"Pending",
        img:"./images/IMG_8216a.jpg"
    },
    {
        id:5,
        customer:"salar",
        date: "28 dec 2023",
        amout: 400,
        status:"Approved",
        img:"./images/IMG_8216a.jpg"
    },
]
let userRows = [
    {
        id: 1,
        username:"ali",
        avatar:"./images/IMG_8216a.jpg",
        status:"active",
        transAction: "$100",
        email:"ali@gmail.com"
    },    
    {
        id: 2,
        username:"amir",
        avatar:"./images/IMG_8216a.jpg",
        status:"non-active",
        transAction: "$100",
        email:"ali@gmail.com"
    },
    {
        id: 3,
        username:"reza",
        avatar:"./images/IMG_8216a.jpg",
        status:"active",
        transAction: "$150",
        email:"ali@gmail.com"
    },
    {
        id: 4,
        username:"javad",
        avatar:"./images/IMG_8216a.jpg",
        status:"non-active",
        transAction: "$130",
        email:"ali@gmail.com"
    },
    {
        id: 5,
        username:"milad",
        avatar:"./images/IMG_8216a.jpg",
        status:"active",
        transAction: "$90",
        email:"ali@gmail.com"
    }
]
const ProductsData = [
    {
        id:1,
        title: "asus",
        avatar: "./images/IMG_8216p.jpg",
        price: 600,
    },
    {
        id:2,
        title: "dell",
        avatar: "./images/IMG_8216p.jpg",
        price: 1000,
    },
    {
        id:3,
        title: "apple",
        avatar: "./images/IMG_8216p.jpg",
        price: 1500,
    },
    {
        id:4,
        title: "hp",
        avatar: "./images/IMG_8216p.jpg",
        price: 800,
    },
    {
        id:5,
        title: "acer",
        avatar: "./images/IMG_8216p.jpg",
        price: 900,
    },

]

export {xAxisData , newUser ,transActions , userRows, ProductsData};