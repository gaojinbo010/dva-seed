import { Table,Button } from 'antd';
import { connect } from 'dva';
import UserModal from './create';

const UserTable = ({ list,dispatch }) => {

    const createUser=(user)=>{
        dispatch({
            type:'user/create',
            payload:{
                user
            }
        });
    };

    const columns=[
        {
            Title:'ID',
            dataIndex:'id'
        },
        {
            Title:'NAME',
            dataIndex:'name'
        },
        {
            Title:'AGE',
            dataIndex:'age'
        }
    ];
    return (
        <div>
            <UserModal record={ {} } ok={ createUser }>
                <Button type="primary">NEW</Button>
            </UserModal>
            <Table
                columns={ columns }
                dataSource={ list }
                rowKey={ t=>t.id }
                pagination={ false }>
                {/* users datatable */}
            </Table>
        </div>
    );
};

export default connect(({ user }) => {

    console.log(user);
    return {
        list: user.list
    };
})(UserTable);