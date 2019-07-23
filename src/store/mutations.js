import Vue from 'vue'

import {
	ADD_ITEM,
	ALTER_ALLCOMPLETE,
	DELETE_COMPLETE,
	SELECT_All
} from './mutation-types'

export default {
	[ADD_ITEM] (state, {newList}) {
		state.list = newList
	},
	
	[DELETE_COMPLETE] (state, {newList}) {
		state.list = newList
	},
	
	[SELECT_All] (state, {newList}) {
		state.list = newList
	}
}