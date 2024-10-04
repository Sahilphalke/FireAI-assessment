
import React from "react";
import "../styles/UserTable.css";

const UserTable = ({ usersData }) => {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody> 
                {usersData.map((user, index) => (
                    <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
