YUI.add("aui-dropdown",function(e,t){e.Dropdown=e.Base.create("dropdown",e.Widget,[e.WidgetCssClass,e.WidgetToggle,e.WidgetStack,e.WidgetTrigger],{CONTENT_TEMPLATE:'<ul class="dropdown-menu"/>',TPL_DIVIDER:'<li class="divider"></li>',TPL_ENTRY:'<li id="{id}">{content}</li>',_hideOnEscHandle:null,_hideOnClickOutsideHandle:null,initializer:function(){this._uiSetHideOnClickOutside(this.get("hideOnClickOutSide")),this._uiSetHideOnEsc(this.get("hideOnEsc")),this._uiSetOpen(this.get("open"))},bindUI:function(){this.after({hideOnClickOutSideChange:this._afterHideOnClickOutsideChange,hideOnEscChange:this._afterHideOnEscChange,itemsChange:this._afterItemsChange,openChange:this._afterOpenChange}),this._bindFocusManager()},renderUI:function(){this._uiSetItems(this.get("items")),this._setAriaUI()},bringToTop:function(){e.Dropdown.Z_INDEX<0&&(e.Dropdown.Z_INDEX=this.get("zIndex")),this.set("zIndex",e.Dropdown.Z_INDEX++)},close:function(){this.set("open",!1)},open:function(){this.set("open",!0)},toggleContent:function(){var e=this.get("boundingBox");e.hasClass("open")?this.close():this.open()},_afterHideOnClickOutsideChange:function(e){this._uiSetHideOnClickOutside(e.newVal)},_afterHideOnEscChange:function(e){this._uiSetHideOnEsc(e.newVal)},_afterItemsChange:function(e){this._uiSetItems(e.newVal)},_afterOpenChange:function(e){this._uiSetOpen(e.newVal)},_bindFocusManager:function(){this.get("boundingBox").plug(e.Plugin.NodeFocusManager,this.get("focusmanager"))},_onClickOutside:function(){this.close()},_onEscKey:function(){this.close()},_setAriaUI:function(){var e=this.get("contentBox"),t=this.get("items"),n=this.get("trigger"),r=n&&n.get("id");n&&r&&e.setAttribute("aria-labelledby",r),e.setAttribute("rule","menu"),t&&t.setAttribute("rule","presentation")},_setItems:function(t){var n=this,r="";return e.Lang.isArray(t)?(e.Array.each(t,function(t){t.divider?r+=n.TPL_DIVIDER:r+=e.Lang.sub(n.TPL_ENTRY,{content:t.content,id:t.id||e.guid()})}),e.NodeList.create(r)):t},_uiSetHideOnClickOutside:function(e){this._hideOnClickOutsideHandle&&this._hideOnClickOutsideHandle.detach(),e&&(this._hideOnClickOutsideHandle=this.get("boundingBox").on("clickoutside",this._onClickOutside,this))},_uiSetHideOnEsc:function(t){this._hideOnEscHandle&&this._hideOnEscHandle.detach(),t&&(this._hideOnEscHandle=e.one("doc").on("key",this._onEscKey,"esc",this))},_uiSetItems:function(e){this.get("contentBox").setContent(e)},_uiSetOpen:function(e){this.get("bringToTop")&&this.bringToTop(),this.get("boundingBox").toggleClass("open",e)},_validateItems:function(t){return e.Lang.isArray(t)||e.instanceOf(t,e.NodeList)}},{CSS_PREFIX:e.getClassName("dropdown"),ATTRS:{bringToTop:{validator:e.Lang.isBoolean,value:!0},focusmanager:{value:{descendants:"li > a",keys:{next:"down:40",previous:"down:38"},circular:!1},writeOnce:"initOnly"},items:{setter:"_setItems",validator:"_validateItems"},hideOnEsc:{validator:e.Lang.isBoolean,value:!0},hideOnClickOutSide:{validator:e.Lang.isBoolean,value:!0},open:{validator:e.Lang.isBoolean,value:!1},triggerToggleEvent:{value:"click"},triggerToggleFn:{value:"toggleContent"}},HTML_PARSER:{items:["> li"]},Z_INDEX:-1})},"2.5.0",{requires:["event-delegate","event-key","event-outside","node-focusmanager","widget","widget-stack","aui-classnamemanager","aui-node","aui-widget-cssclass","aui-widget-toggle","aui-widget-trigger"],skinnable:!0});