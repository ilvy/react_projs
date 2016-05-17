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
        return (
            <div>
                {
                	this.state.areas.map(function(item){
	                	return <div ><pre>{_this.dealWordsToVertical(item)}</pre></div>
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