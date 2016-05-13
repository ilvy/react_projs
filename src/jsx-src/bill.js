import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './sidebar';
import BillList from './billlist';
import gridstyles from '../css/bootstrap-grid.css';

class MyApp extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	billList:null,
	  	payList:null
	  };
	}
	componentDidMount(){
		var billList = [
					    {
					        "cid": 77,
					        "oid": 284,
					        "product_id": 473,
					        "product_name": "iphone6 6288hkd",
					        "nickname": "Niklaus",
					        "quantity": 0,
					        "status": 2,
					        "remark": null,
					        "unit_cost": 900,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": 1,
					        "cate_id": 1,
					        "cate_name": "default"
					    },
					    {
					        "cid": 10,
					        "oid": 406,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "雪峰",
					        "quantity": 2,
					        "status": 2,
					        "remark": null,
					        "unit_cost": null,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.84,
					        "discount": 1,
					        "cate_id": 1,
					        "cate_name": "default"
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": null,
					        "unit_cost": 1000,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default"
					    },
					    {
					        "cid": 109,
					        "oid": 405,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Hello！远征",
					        "quantity": 6,
					        "status": 2,
					        "remark": null,
					        "unit_cost": null,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.84,
					        "discount": 1,
					        "cate_id": 1,
					        "cate_name": "default"
					    },
					    {
					        "cid": 109,
					        "oid": 403,
					        "product_id": 559,
					        "product_name": "面霜",
					        "nickname": "Hello！远征",
					        "quantity": 1,
					        "status": 2,
					        "remark": null,
					        "unit_cost": null,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.84,
					        "discount": 1,
					        "cate_id": 1,
					        "cate_name": "default"
					    }
					];
        this.setState({billList:this.dealBillListDataSource(billList)});
	}
	dealBillListDataSource(data){
		var cards = {};
        for (var i = 0; i < data.length; i++) {
            var record = data[i];
            if (!cards[record.cate_name]) {
                cards[record.cate_name] = {};
            }
            if (!cards[record.cate_name][record.product_name + "_" + record.product_id]) {
                cards[record.cate_name][record.product_name + "_" + record.product_id] = [];
            }
            cards[record.cate_name][record.product_name + "_" + record.product_id].push(record);
        }
        console.log(cards);
        return cards;
	}
    render () {
        return (
              <div>
                <div id="toolbar-wrap"></div>
				<div id="sidebar-wrap"><Sidebar ds=this.state.billList className="col-xxs-2"/></div>
				<div id="main-content-wrap"><BillList ds=this.state.billList className="col-xxs-10"/></div>
              </div>
        	)
    }
}

ReactDOM.render(<MyApp />,
    document.getElementById('content-wrap'));
