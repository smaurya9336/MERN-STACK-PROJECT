

export default function Edit(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");


    return(
        <>
         <div className="row">
            <div className="col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5">
                <h4><span className="text-danger text-decoration-underline">Registration</span> Form</h4>
                <br />
                <form>
                    Enter Your First Name
                     <input className="form-control" type="text" name="firstname" value={firstname} onChange={ (e)=> setFirstname(e.target.value) }/>
                     <br /> 
                     Enter Your Last Name
                     <input className="form-control" type="text" name="lastname" value={lastname} onChange={ (e)=> setLastname(e.target.value) } />
                     <br />
                    
                     Enter Your Email
                     <input className="form-control" type="email" name="email" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                     
                     <br />
                     Enter Your Salary 
                     <input className="form-control" type="text" name="salary" value={salary} onChange={ (e)=> setSalary(e.target.value) } />
                     
                     <br />
                     <button className="form-control btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}