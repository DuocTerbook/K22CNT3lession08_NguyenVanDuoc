import React, { Component } from 'react'

export default class NvdProductAddOrEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            title: 'Cabbage',
            active: true,
            flag:true,
        }
    }
    componentWillMount = () => {
        let { renderProduct } = this.props;
        console.log("renderProduct",renderProduct);
        if (renderProduct != null) {
            this.setState({
                id: renderProduct.id,
                title: renderProduct.title,
                active: renderProduct.active,
            })
        }
    }
    componentWillReceiveProps=(nextProps)=>{
        let { renderProduct } = nextProps;
        console.log("nextProps",nextProps);
        this.setState({
            id: renderProduct.id,
            title: renderProduct.title,
            active: renderProduct.active,
            flag:false
        })
    }
    NvdHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //Submit form
    NvdHandleSubmit = (ev) => {
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
    render() {
        let elementButton= "Thêm mới"
        if(this.state.flag === false){
            elementButton="Cập nhật"
        }
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form className='col-md-6'>
                    <div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Id</span>
                            <input type="text"
                                class="form-control"
                                placeholder="Username"
                                name='id'
                                value={this.state.id}
                                onChange={this.NvdHandleChange}
                                aria-label="id"
                                aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">Title</span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Username"
                            name='title'
                            value={this.state.title}
                            onChange={this.NvdHandleChange}
                            aria-label="title"
                            aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon3">Active</span>
                        <select class="form-control" name='active' value={this.state.active} onChange={this.NvdHandleChange}>
                            <option value={true}>Hiển thị</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                    <button className='btn btn-success' onClick={this.NvdHandleSubmit}>{elementButton}</button>
                </form>
            </div>
        )
    }
}
