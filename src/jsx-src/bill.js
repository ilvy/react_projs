import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './sidebar';
import gridstyles from '../css/bootstrap-grid.css';
import BillList from './billlist';

class MyApp extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	billList:null,
	  	payList:null
	  };
	}
	componentWillUpdate(){
		console.log("MyApp componentWillUpdate");
	}
	componentDidMount(){
		console.log("MyApp componentDidMount")
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
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": "ahhahah",
					        "unit_cost": 100,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default2"
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
					        "cate_name": "default2"
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
					        "cate_name": "default3"
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
					        "cate_name": "default3"
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
					        "cate_name": "default3"
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": "ahhahah",
					        "unit_cost": 100,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default3"
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
					        "cate_name": "default3"
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
					        "cate_name": "default6"
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
					        "cate_name": "default6"
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
					        "cate_name": "default6"
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
					        "cate_name": "default6"
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": "ahhahah",
					        "unit_cost": 100,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default6"
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
					        "cate_name": "default6"
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
					        "cate_name": "default66"
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
					        "cate_name": "default66"
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
					        "cate_name": "default66"
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
					        "cate_name": "default66"
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": "ahhahah",
					        "unit_cost": 100,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default26"
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
					        "cate_name": "default26"
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
					        "cate_name": "default68"
					    },
					    {
					        "cid": 77,
					        "oid": 152,
					        "product_id": 474,
					        "product_name": "浪琴手表 17000",
					        "nickname": "Niklaus",
					        "quantity": 4,
					        "status": 2,
					        "remark": "ahhahah",
					        "unit_cost": 100,
					        "unit_price": null,
					        "mail_free": 0,
					        "mail_pay": 0,
					        "room_id": "666666",
					        "exchange_rate": 0.8,
					        "discount": null,
					        "cate_id": 1,
					        "cate_name": "default36"
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
					        "cate_name": "default56"
					    }
					];
        this.setState({billList:this.dealBillListDataSource(billList)});
        var _this = this;
        setTimeout(function(){
            
        },5000)
	}
	handlerTest(context,event){
		var _this = context;
		var currBtn = event.currentTarget;
        event.currentTarget.className = [event.currentTarget.className,'sidebar-cur-btn'].join(' ');
        var allSbBtns = currBtn.parentNode.children;
        for(var i = 0; i < allSbBtns.length; i++){
        	if(allSbBtns[i] != currBtn){
        		allSbBtns[i].className = 'sidebar-btn';
        	}
        }
        var btnContent = currBtn.innerText.replace(/\s/g,'');
        var cateArea = _this.refs[btnContent];
        document.body.scrollTop = document.getElementById(btnContent).offsetTop;
	}
	dealBillListDataSource(data){
		var cards = [];
        for (var i = 0; i < data.length; i++) {
            var record = data[i];
            if (!cards[record.cate_name]) {
                cards[record.cate_name] = [];
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
    	console.log("MyApp render");
        return (
              <div>
                <div id="toolbar-wrap"></div>
				<div id="sidebar-wrap" className="col-xxs-1 no-lpadding no-rpadding"><Sidebar ds={this.state.billList} onClick={this.handlerTest} className="col-xxs-1"/></div>
				<div id="main-content-wrap" className="col-xxs-11 col-xxs-offset-1 no-lpadding no-rpadding"><BillList ds={this.state.billList} className="col-xxs-11"/></div>
              </div>
        	)
    }
}

ReactDOM.render(<MyApp />,
    document.getElementById('content-wrap'));
