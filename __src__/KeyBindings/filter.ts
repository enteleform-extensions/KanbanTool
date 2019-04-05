//###  Module  ###//
import {Keyboard} from "~/Utils/Keyboard"

//###  NPM  ###//
import jquery from "jquery"
const $:any = jquery


class FilterKeybindings{

	@Keyboard.bind("Ctrl + F")
	static focus_SearchField(event){
		event.preventDefault()
		const searchField = $("#kt-board_search-q")
		searchField.focus()
	}

	@Keyboard.bind("Ctrl + Space")
	static show_FilterMenu(event){
		event.preventDefault()
		// const filterButton = $(".kt-board_search-container > .btn[data-toggle=kt-board_search-filters_popover]")
		// filterButton.click()
		const filterMenu = $(".kt-board_search-filters_popover")
		const displayValue =
			(filterMenu.css("display") == "none")
			? "block"
			: "none"
		filterMenu.css("display", displayValue)
	}

}
