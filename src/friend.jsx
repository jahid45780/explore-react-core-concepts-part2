export default function Friend({friend}){
    const {name, email, username,address,company }= friend; 
   return(
    <div className="box">
        <h4> Name: {name}  </h4>
        <p>UserName: {username} </p>
        <p>Email: {email} </p>
        <p>Cit: { address .city} </p>
        <p>Job: {company. name} </p>
    </div>
   )
}