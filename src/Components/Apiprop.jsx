const Apiprop = ({ userdata }) => {

    return (
        <div>
            {userdata.slice(0,5).map((item) => (
                <ul key={item.id}>
                    <li>{item.name}</li>
                    <li>{item.email}</li>
                </ul>
            ))}
        </div>
    )
}
export default Apiprop