import {useState} from 'react'
import {userRows} from "../../Data"
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"


export default function UserList() {
    const [userDatas , setUserDatas] = useState(userRows)

    const userDelete = userId => {
        setUserDatas(userDatas.filter(user => user.id != userId))
    }

    const columns = [
        {
            field: "id",
            headerName:"ID",
            width: 90,
        },
        {
            field: "user",
            headerName:"USER",
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={`/user/${params.row.id}`} className='link'>
                    <div className='user-list-user'>
                        <img src={params.row.avatar} className="user-list-img"></img>
                        {params.row.username }

                    </div>
                    </Link>
                    </>
                )
            }
        },
        {
            field:"email",
            headerName:"Email",
            width:200
        },
        {
            field:"status",
            headerName:"Status",
            width:200
        },
        {
            field:"transAction",
            headerName:"TransActions",
            width:200
        },
        {
            field: "actions",
            headerName:"Actions",
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                    <Link to={`/user/${params.row.id}`}>
                    <button className='user-list-edit'>Edit</button>
                    </Link>
                    <DeleteOutlineIcon className='user-list-delete' onClick={() => userDelete(params.row.id)}/>
                    </>
                )
            }
        },

    ]

  return (
    <div className='user-list'>
        <DataGrid
        rows={userDatas}
        columns={columns}
        />
    </div>
  )
}
 