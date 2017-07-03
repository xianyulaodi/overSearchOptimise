
/**
 * 主要任务:
 * 1. 可配置
 * 2. 低耦合
 * 3. 各司其职
 */


function GetSaveTitle(args_config,query,showCount) {
	this.title = null;  // 
	this.count = showCount || 3;
	this.continute = true;  //是否继续，还是跳到下一个循环
	this.query = query;
	this.config = args_config;
	this.typeArgs = [];
}

/**
 * [addType description]
 * @param {[type]}   type     [description]
 * @param {Function} callback [description]
 */
GetSaveTitle.prototype.addType = function(type,callback) {
	this.typeArgs.push(type);
	return callback;
}

// 遍历typeArgs
getSaveTitle.prototype.mapConfig = function(config,key) {
	var typeArgs = this.typeArgs;
	var len = typeArgs.length;
	if(len == 0) return;
	for(var i = 0;i < len; i++) {

	}
}

//是否跳出循环本次循环，进入下一个循环
getSaveTitle.prototype.isContinute = function() {
	
}

// 遍历所有回调函数，获取最终的title
GetSaveTitle.prototype.resulut = function() {
	var count = this.count;
	var args_config = this.args_config;
	for(var i = 0; count > 0 && i < args_config.length; i++ ) { 
		var config = args_config[i];
		var key = id = config[0];
		this.mapConfig(config,key);
	}
}

var getSaveTitle = new GetSaveTitle(args_config, query, showCount);

getSaveTitle.add('int',function() {
	return title	
});

getSaveTitle


