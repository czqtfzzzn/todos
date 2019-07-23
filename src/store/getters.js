export default {
	num (state) {
		var num = 0
		for(let item of state.list) {
			if(!item.complete) {
				num++
			}
		}
		return num
	},
	
	allComplete (state) {
		if (state.list) {
			var num = 0
			for(let item of state.list) {
				if(item.complete) {
					num++
				}
			}
			if(num === state.list.length) {
				return true
			}
		}
	}
}