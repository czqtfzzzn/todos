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
	// unSelected: state => {
	// 	return state.list.map(item => ({...item,complete:false}))
	// },
	// selected: state => {
 //      return state.list.map(item => ({...item, complete: true}))
 //    }
	
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