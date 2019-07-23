import {
	ADD_ITEM,
	ALTER_ALLCOMPLETE,
	DELETE_COMPLETE,
	SELECT_All
} from './mutation-types'

export default {
	addItem({commit, state}, item) {
		const newList = state.list
		newList.push(item)
		commit(ADD_ITEM, {newList})
	},
	
	selectAll({commit, state}, allCheck) {
		const newList = state.list
		if(allCheck) {
			for(let item of newList) {
				item.complete = false
			}
		}else {
			for(let item of newList) {
				item.complete = true
			}
		}
		commit(SELECT_All, {newList})
	},
	
	deleteComplete({commit, state}) {
		const newList = []
		for(let item of state.list) {
			if(!item.complete) {
				newList.push(item)
			}
		}
		commit(DELETE_COMPLETE, {newList})
	},
	
}
