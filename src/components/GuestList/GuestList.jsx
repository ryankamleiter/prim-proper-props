function GuestList(props) {
    console.log(props)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kid's Meal</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map(guest => (
                        <tr key={guest.id}>
                            <td>{guest.name}</td>
                            <td>{String(guest.kidsMeal)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default GuestList;