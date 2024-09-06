import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ShowAll(){
   const [data, setData] = useState([ ]);
    const getall = async () => {
        const response = await fetch("http://localhost:8080/");
        const result = await response.json();
        setData(result);
        console.log(data);
        
    }

    useEffect(()=>{
        getall();
    }, [])
    return(
        <>
        <div className="row">
            <div className="col-md-6 mx-auto my-3 bg-dark p-3 rounded-3 shadow-lg table-responsive">
                <table className="table table-dark text-light">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th colSpan={2}>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                   

                    <tbody>
                    {data?.map(ele =>(
                        <tr>
                           <td>{ele._id}</td> 
                           <td>{ele.firstname}</td>
                           <td>{ele.lastname}</td>
                           <td>{ele.email}</td>
                           <td>{ele.salary}</td>
                           <td><Link to={`/view/${ele._id}`} className="btn btn-warning">View</Link></td>
                           <td><Link className="btn btn-primary">Edit</Link></td>
                           <td><button className="btn btn-danger">Delete</button></td>
                           </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}