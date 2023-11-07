/* eslint-disable react/prop-types */


const BidsTable = ({ bid }) => {
    const { title, email, deadline } = bid;
    return (
        <tr>
            <th>{title}</th>
            <td>{email}</td>
            <td>{deadline}</td>
            <div>
                <button className="mx-2 font-medium text-red-400">Pending</button>
            </div>
        </tr>
    );
};

export default BidsTable;