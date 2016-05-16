import React from 'react';

class BillList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'BillList';
        console.log("BillList");
        this.ds = !this.props.ds ? [] : this.props.ds;
    }
    render() {
        var ds = !this.props.ds ? [] : this.props.ds;
        console.log("BillList render");
        var cateTables = [];
        for(var key in ds){
            cateTables.push(<CateTable title={key} tableDs={ds[key]} />);
        }
                        
        return (
            <div>
                {
                    cateTables
                }
            </div>
        	);
    }
}

class CateTable extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CateTable';
    }
    render() {
        console.log("CateTable render")
        var ds = !this.props.tableDs ? [] : this.props.tableDs;
        var tableLists = [];
        for(var key in ds){
            tableLists.push(<TableList cate={this.props.title} cardTitle={key} listDs={ds[key]} />);
        }
        return (
            <div className="cate_wrap 雪峰测试 ">
			    <div className="category title">{this.props.title}</div>
                {
                    tableLists
                }
                
			    
			</div>
        	);
    }
}

class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TableList';
    }
    /**
     * 列表头部数据格式化
     * @return {[type]} [description]
     */
    dealListDs(){
        var listDs = this.props.listDs;
        this.totalQuantity = 0;
        for (var i = listDs.length - 1; i >= 0; i--) {
            this.totalQuantity += listDs[i].quantity;
        }
    }
    render() {
        var listDs = this.props.listDs;
        var cardTitles = this.props.cardTitle.split("_");
        var pid = cardTitles[1],
            productName = cardTitles[0];
        var lists = [];
        return (
            <div data-pid={pid} className="card">
                    <div className="card-title">
                        <div className="caret-wrapper"><i className="fa fa-caret-right card-btn"></i></div>
                        <div className="product"><span>商品：</span><span className="name product_name">{productName}</span> ×<span className="total-quantity"> {this.totalQuantity}</span> </div>
                        <div className="all-status ignore"><span>买到:</span><i className="fa fa-square-o"></i></div>
                    </div>
                <div className="table">
    	            <div className="t-row t-row-over-1 t-row-header">
    	                <div className="t-col t-col-2">买家</div>
    	                <div className="t-col t-col-2">数量</div>
    	                <div className="t-col t-col-4">备注</div>
    	                <div className="t-col t-col-1">状态</div>
    	                <div className="t-col t-col-1 extra">操作</div>
    	            </div>
                    {
                        listDs.map(function(item){
                            return <List record={item} />
                        })
                    }
                    
                    <div className="extra-row">
                        <div className="t-col-5 product-detail" data-pid={pid}>【商品详情】</div>
                        <div className="t-col-5 order-add">
                            <input className="order-add-btn" data-cate={this.props.cate} type="button" value="加单" />
                        </div>
                    </div>
                </div>
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
        var record = this.props.record;
        return (
            <div className="t-row t-row-over-1" data-oid={record.oid} data-cid={record.cid}>
                <div className="t-col t-col-2 nickname cnickname" data-type="1" data-value={record.nickname}>{record.nickname}</div>
                <div className="t-col t-col-2 quantity" data-value="2">
                    <select>
                        <option value="0">0</option>
                        <option value="0">1</option>
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

