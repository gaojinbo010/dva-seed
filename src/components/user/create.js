import React,{ Component } from 'react';
import { Modal,Form,Input } from 'antd';

class UserModal extends Component{
    constructor(props){
        super(props);
        this.state={
            visible:false
        };
    }

    
    render(){
        const { children,form:{ getFieldDecorator },record,ok }=this.props;

        const showModal=()=>{

            this.setState({
                visible:true
            });
        };
        const hideModal=()=>{

            this.setState({
                visible:false
            });
        };
        const save=()=>{

            this.props.form.validateFields((err,val)=>{
                //val ==> record
                // console.log(val);
                ok(val);
                hideModal();
            });
        };

        return (
            <div>
                <span onClick={ showModal }>
                    { children }
                </span>
                <Modal
                    title="Create User"
                    visible={ this.state.visible }
                    onCancel={ hideModal }
                    onOk={ save }>
                    <Form>
                        <Form.Item label="Name">
                            {
                                getFieldDecorator('name', {
                                    initialValue: record.name
                                })(<Input />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('age',{
                                    initialValue:record.age
                                })(<Input />)
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    };
}


export default Form.create()(UserModal);