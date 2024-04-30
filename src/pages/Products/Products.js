import {useState} from 'react'
import {ProductsData} from "../../Data"
import "./Products.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"


export default function Products() {
    const [productsDatas , setProductsDatas] = useState(ProductsData)

    const ProductDelete = productId => {
        setProductsDatas(productsDatas.filter(product => product.id != productId))
    }

    const columns = [
        {
            field: "id",
            headerName:"ID",
            width: 90,
        },
        {
            field: "title",
            headerName:"Title",
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={`/product/${params.row.id}`} className='link'>
                    <div className='user-list-user'>
                        <img src={params.row.avatar} className="user-list-img"></img>
                        {params.row.title }
                    </div>
                    </Link>
                    </>
                )
            }
        },

        {
            field:"price",
            headerName:"Price",
            width:200
        },
        {
            field: "actions",
            headerName:"Actions",
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={`/products/${params.row.id}`}>
                    <button className='user-list-edit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon className='user-list-delete' onClick={() => ProductDelete(params.row.id)}/>
                    </>
                )
            }
        },

    ]

  return (
    <div className='user-list'>
        <DataGrid
        rows={ProductsData}
        columns={columns}
        checkboxSelection
        />
    </div>
  )
}
 