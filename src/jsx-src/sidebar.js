import React from 'react';
import styles from '../css/bill.less';

class Sidebar extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
			areas:['钵兰街','跑马地','中环','半山','渗水']
		}
	}
	render(){
		var _this = this;
		var ds = !this.props.ds ? [] : this.props.ds;
        var areas = [];
        for(var key in ds){
            areas.push(key);
        }
        return (
            <div>
                {
                	areas.map(function(item){
	                	return <div className="sidebar-btn" onClick={_this.props.onClick.bind(_this,_this)}><pre>{_this.dealWordsToVertical(item)}</pre></div>
	                })
	            }
            </div>
        	)
	}
	dealWordsToVertical(wordstr){
        var words = wordstr.split('');
        return Array.prototype.join.call(words,'\n');
	}
}

module.exports = Sidebar;