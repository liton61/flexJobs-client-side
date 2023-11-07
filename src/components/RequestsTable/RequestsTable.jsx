/* eslint-disable react/prop-types */


const RequestsTable = ({ bid }) => {
    const { title, email, deadline, price } = bid;
    return (
        <tr>
            <th>{title}</th>
            <td>{email}</td>
            <td>{deadline}</td>
            <td>{price}</td>
            <div>
                <button className="mx-2 font-medium text-green-400">Accept</button>
                <button className="mx-2 font-medium text-red-400">Reject</button>
            </div>
        </tr>
    );
};

export default RequestsTable;