import {
	ADD_ITEM,
	ALTER_ALLCOMPLETE,
	DELETE_COMPLETE,
	SELECT_All
} from './mutation-types'

export default {
	addItem({ commit, state }, item) {
		commit(ADD_ITEM, { newList: [...state.list, item] })
	},

	selectAll({ commit, state }, isCheck) {
		commit(SELECT_All, { newList: state.list.map(item => ({ ...item, complete: isCheck })) })
	},

	deleteComplete({ commit, state }) {

		commit(DELETE_COMPLETE, { newList: state.list.filter(item => !item.complete) })
	},

}
