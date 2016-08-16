import React from 'react';
import {Table} from 'react-bootstrap';

class GroupList extends React.Component {
    render() {

        let groups = this.props.groups;

        if(groups && groups.length > 0) {
            groups = groups.map((item, index) => {
                return (
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                    </tr>
                );
            });
        }
        else {
            groups = (<tr><td>None info yet</td></tr>)
        }

        return (
            <div className="container-fluid">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groups}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default GroupList;

// import React from 'react';
//
// const renderIfData = ( groups ) => {
//     if ( groups && groups.length > 0 ) {
//         return groups.map( ( group ) => {
//             return <li key={ group._id }>{ group.name } - {group.status} </li>;
//         });
//     } else {
//         return <p>No list items yet!</p>;
//     }
// };
//
// export default GroupNew = ( { groups } ) => (
//     <ol>{ renderIfData( groups ) }</ol>
// );