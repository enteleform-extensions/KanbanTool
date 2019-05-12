//###  Module: HTML_Injector  ###//
require("~/Utils/HTML_Injector").inject(__dirname, {CSS:true, HTML:true})

//###  Module  ###//
import {autoMapped_Key_Rows                           } from "./Settings"
import {Entry                                         } from "./Entry"
import {Layout                                        } from "./Layout"
import {KeyBinding                                    } from "~/Utils/KeyBinding/__Main__"
import {Module                                        } from "~/Utils/Module_BaseClasses"
import {
	Position,
	HorizontalPosition, VerticalPosition,
	is_HorizontalPosition, is_VerticalPosition,
} from "./Position"


//#######################//
//###  Export: Class  ###//
//#######################//

export class FunctionBar extends Module{

	static Entry    = Entry
	static Position = Position

	static Show  = require("./DefaultFunctions/Show/__Main__").default
	static Hide  = require("./DefaultFunctions/Hide/__Main__").default

	layout:               Layout
	position:             Position
	autoMap_KeyBindings:  boolean
	keyBinding_Modifiers: KeyBinding.ModifierKey[]
	entryGroups:          Entry[][]
	stretchCells:         boolean

	constructor(  //  Left / Right
		{position,                    entryGroups          }:
		{position:HorizontalPosition, entryGroups:Entry[][]}
	)
	constructor(  //  Top / Bottom
		{position,                  entryGroups,           autoMap_KeyBindings,         keyBinding_Modifiers,                          stretchCells        }:
		{position:VerticalPosition, entryGroups:Entry[][], autoMap_KeyBindings:boolean, keyBinding_Modifiers:KeyBinding.ModifierKey[], stretchCells:boolean}
	)
	constructor(
		{position,          entryGroups,           autoMap_KeyBindings,          keyBinding_Modifiers,                           stretchCells         }:
		{position:Position, entryGroups:Entry[][], autoMap_KeyBindings?:boolean, keyBinding_Modifiers?:KeyBinding.ModifierKey[], stretchCells?:boolean}
	){
		super()
		this.position             = position
		this.autoMap_KeyBindings  = autoMap_KeyBindings
		this.keyBinding_Modifiers = keyBinding_Modifiers
		this.entryGroups          = entryGroups
		this.stretchCells         = stretchCells
	}

	static load(
		...functionBars:FunctionBar[]
	){
		functionBars.forEach(functionBar => {
			functionBar.initialize()
		})
	}

	initialize(){
		this._validate_AutoMapped_Rows()
		this.layout = new Layout(this)
	}


	get is_HorizontalBar()
		{return is_HorizontalPosition(this.position)}

	get is_VerticalBar()
		{return is_VerticalPosition(this.position)}

	_validate_AutoMapped_Rows(){
		if(! this.autoMap_KeyBindings)
			{return}

		const valid_GroupCount =
			(this.entryGroups.length <= autoMapped_Key_Rows.length)

		const valid_KeyCounts =
			this.entryGroups.every((group, i) =>
				(group.length <= autoMapped_Key_Rows[i].length)
			)

		if(! (valid_GroupCount && valid_KeyCounts)){
			const position = this.position.valueOf()
			throw new Error(`
				Invalid FunctionBar Group/Entry Count @ ${position} Bar
			`)
		}
	}

}


//###########################//
//###  Export: Namespace  ###//
//###########################//

export namespace FunctionBar{

	export enum KeyBinding_Mode{
		Automatic,
		Manual,
	}

}