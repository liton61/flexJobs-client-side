/* eslint-disable react/prop-types */


const BidsTable = ({bid}) => {
    const {title,email,deadline} = bid;
    return (
        <tr>
        <td>{title}</td>
        <td>{email}</td>
        <td>{deadline}</td>
        <div>
            <button className="mx-2">Accept</button>
            <button className="mx-2">Reject</button>
        </div>
        {/* <th>
            {
                status === 'confirm' ? <span className="font-semibold text-green-400">Confirmed</span>
                    :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
        </th> */}
    </tr>
    );
};

export default BidsTable;