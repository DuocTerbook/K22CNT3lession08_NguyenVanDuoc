import React, { Component } from 'react'

export default class NvdProductList extends Component {
    nvdHandleEdit = (product)=>{
        console.log("Edit:",product);
        // this.props.nvdOnEdit(product);
    }
    render() {
        let { renderProducts } = this.props;
        console.log("Products:", renderProducts);
        let elementProduct = renderProducts.map((item, index) => {
            return (
                <>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            {item.active?'Hiển thị':'Ẩn'}
                        </td>
                        <td>
                            <button onClick={() => this.nvdHandleEdit(item.id)} className="btn btn-warning" name='nvdBtnEdit'><i class="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={() => this.handleDelete(item.id)} className="btn btn-danger" name='nvdBtnDelete'><i class="fa-solid fa-trash-can"></i></button>
                        </td>

                    </tr>
                </>
            )
        })
        return (
            <div>
                <h2>Danh sách sản phẩm</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementProduct}
                    </tbody>
                </table>
            </div>
        )
    }
}
