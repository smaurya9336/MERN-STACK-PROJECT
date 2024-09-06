export default function Registration(){
    return(
        <>
        <div className="row">
            <div className="col-md-6">
                <h4>Registration Form</h4>
                <form action="">
                    Enter Your First Name
                     <input className="form-control" type="text" name="firstname" />
                     <br /> <br/>
                     Enter Your Last Name
                     <input className="form-control" type="text" name="lastname" />
                     <br />
                     <br />
                     Enter Your Email
                     <input className="form-control" type="email" name="email" />
                     <br />
                     <br />
                     Enter Your Salary 
                     <input className="form-control" type="text" name="salary" />
                     <br />
                     <br />
                     <button>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}