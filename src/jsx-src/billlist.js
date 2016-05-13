import React from 'react';

class BillList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'BillList';
    }
    render() {
        return (
            <CateTable />
        	);
    }
}

class CateTable extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CateTable';
    }
    render() {
        return (
            <div className="cate_wrap 雪峰测试 ">
			    <div className="category title">雪峰测试</div>
			    <div data-pid="566" className="card">
			        <div className="card-title">
			            <div className="caret-wrapper"><i className="fa fa-caret-right card-btn"></i></div>
			            <div className="product"><span>商品：</span><span className="name product_name">logo</span> ×<span className="total-quantity"> 2</span> </div>
			            <div className="all-status ignore"><span>买到:</span><i className="fa fa-square-o"></i></div>
			        </div>

			        <TableList />

			        <div className="extra-row">
			            <div className="t-col-5 product-detail" data-pid="566">【商品详情】</div>
			            <div className="t-col-5 order-add">
			                <input className="order-add-btn" data-cate="雪峰测试" type="button" value="加单" />
			            </div>
			        </div>
			    </div>
			</div>
        	);
    }
}

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TableList';
    }
    render() {
        return (
            <div className="table">
	            <div className="t-row t-row-over-1 t-row-header">
	                <div className="t-col t-col-2">买家</div>
	                <div className="t-col t-col-2">数量</div>
	                <div className="t-col t-col-4">备注</div>
	                <div className="t-col t-col-1">状态</div>
	                <div className="t-col t-col-1 extra">操作</div>
	            </div>
	            <List />
	        </div>
        	);
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'List';
    }
    render() {
        return (
            <div className="t-row t-row-over-1" data-oid="4700" data-cid="77">
                <div className="t-col t-col-2 nickname cnickname" data-type="1" data-value="Niklaus">Niklaus</div>
                <div className="t-col t-col-2 quantity" data-value="2">
                    <select>
                        <option value="0">0</option>
                    </select>
                </div>
                <div className="t-col t-col-4 input-div order-remark" data-type="2" data-price="" data-value=""></div>
                <div className="t-col t-col-1 buy-status"><i className="fa fa-square-o"></i></div>
                <div className="t-col t-col-1 extra">删除</div>
            </div>
        );
    }
}

export default BillList;
