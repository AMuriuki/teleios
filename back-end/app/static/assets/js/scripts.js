"use strict";!function(s,r){s.Package.name="DashLite",s.Package.version="2.2";var c=r(window),i=r("body"),l=r(document),t="nk-menu",d="nk-header",u="nk-header-menu",a="nk-aside",g=s.Break;function f(e,n){return Object.keys(n).forEach(function(t){e[t]=n[t]}),e}s.ClassBody=function(){s.AddInBody(a)},s.ClassNavMenu=function(){s.BreakClass("."+u,g.lg,{timeOut:0}),s.BreakClass("."+a,g.lg,{timeOut:0}),c.on("resize",function(){s.BreakClass("."+u,g.lg),s.BreakClass("."+a,g.lg)})},s.Prettify=function(){window.prettyPrint&&prettyPrint()},s.Copied=function(){var t=".clipboard-init",a=".clipboard-text",o="clipboard-success",s="clipboard-error";function e(t,e){var t=r(t),n=t.parent(),i={text:"Copy",done:"Copied",fail:"Failed"},t={text:t.data("clip-text"),done:t.data("clip-success"),fail:t.data("clip-error")};i.text=t.text||i.text,i.done=t.done||i.done,i.fail=t.fail||i.fail;t="success"===e?i.done:i.fail,e="success"===e?o:s;n.addClass(e).find(a).html(t),setTimeout(function(){n.removeClass(o+" "+s).find(a).html(i.text).blur(),n.find("input").blur()},2e3)}ClipboardJS.isSupported()?new ClipboardJS(t).on("success",function(t){e(t.trigger,"success"),t.clearSelection()}).on("error",function(t){e(t.trigger,"error")}):r(t).css("display","none")},s.CurrentLink=function(){var t=window.location.href,n=(n=t.substring(0,-1==t.indexOf("#")?t.length:t.indexOf("#"))).substring(0,-1==n.indexOf("?")?n.length:n.indexOf("?"));r(".nk-menu-link, .menu-link, .nav-link").each(function(){var t=r(this),e=t.attr("href");n.match(e)?(t.closest("li").addClass("active current-page").parents().closest("li").addClass("active current-page"),t.closest("li").children(".nk-menu-sub").css("display","block"),t.parents().closest("li").children(".nk-menu-sub").css("display","block")):t.closest("li").removeClass("active current-page").parents().closest("li:not(.current-page)").removeClass("active")})},s.PassSwitch=function(){s.Passcode(".passcode-switch")},s.Toast=function(t,e,n){var i="",a="info"===(e=e||"info")?"ni ni-info-fill":"success"===e?"ni ni-check-circle-fill":"error"===e?"ni ni-cross-circle-fill":"warning"===e?"ni ni-alert-fill":"",o={position:"bottom-right",ui:"",icon:"auto",clear:!1},o=n?f(o,n):o;o.position=o.position?"toast-"+o.position:"toast-bottom-right",o.icon="auto"===o.icon?a:o.icon||"",o.ui=o.ui?" "+o.ui:"",i=""!==o.icon?'<span class="toastr-icon"><em class="icon '+o.icon+'"></em></span>':"",""!==(t=""!==t?i+'<div class="toastr-text">'+t+"</div>":"")&&(!0===o.clear&&toastr.clear(),i={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:o.position+o.ui,closeHtml:'<span class="btn-trigger">Close</span>',preventDuplicates:!0,showDuration:"1500",hideDuration:"1500",timeOut:"2000",toastClass:"toastr",extendedTimeOut:"3000"},toastr.options=f(i,o),toastr[e](t))},s.TGL.screen=function(t){r(t).exists()&&r(t).each(function(){var t=r(this).data("toggle-screen");t&&r(this).addClass("toggle-screen-"+t)})},s.TGL.content=function(t,e){var n=r(t||".toggle"),i=r("[data-content]"),a=!1,t={active:"active",content:"content-active",break:!0},o=e?f(t,e):t;s.TGL.screen(i),n.on("click",function(t){a=this,s.Toggle.trigger(r(this).data("target"),o),t.preventDefault()}),l.on("mouseup",function(t){var e;a&&((e=r(a)).is(t.target)||0!==e.has(t.target).length||i.is(t.target)||0!==i.has(t.target).length||(s.Toggle.removed(e.data("target"),o),a=!1))}),c.on("resize",function(){i.each(function(){var t=r(this).data("content"),e=r(this).data("toggle-screen"),e=g[e];s.Win.width>e&&s.Toggle.removed(t,o)})})},s.TGL.expand=function(t,e){var n=t||".expand",t={toggle:!0},i=e?f(t,e):t;r(n).on("click",function(t){s.Toggle.trigger(r(this).data("target"),i),t.preventDefault()})},s.TGL.ddmenu=function(t,e){var n=t||".nk-menu-toggle",t={active:"active",self:"nk-menu-toggle",child:"nk-menu-sub"},i=e?f(t,e):t;r(n).on("click",function(t){(s.Win.width<g.lg||r(this).parents().hasClass(a))&&s.Toggle.dropMenu(r(this),i),t.preventDefault()})},s.TGL.showmenu=function(t,e){var n=r(t||".nk-nav-toggle"),i=r("[data-content]"),a=i.hasClass(u)?g.lg:g.xl,t={active:"toggle-active",content:d+"-active",body:"nav-shown",overlay:"nk-header-overlay",break:a,close:{profile:!0,menu:!1}},o=e?f(t,e):t;n.on("click",function(t){s.Toggle.trigger(r(this).data("target"),o),t.preventDefault()}),l.on("mouseup",function(t){!n.is(t.target)&&0===n.has(t.target).length&&!i.is(t.target)&&0===i.has(t.target).length&&s.Win.width<a&&s.Toggle.removed(n.data("target"),o)}),c.on("resize",function(){(s.Win.width<g.xl||s.Win.width<a)&&s.Toggle.removed(n.data("target"),o)})},s.Ani.formSearch=function(t,e){var n={active:"active",timeout:400,target:"[data-search]"},i=e?f(n,e):n,a=r(t),o=r(i.target);a.exists()&&(a.on("click",function(t){t.preventDefault();var t=r(this).data("target"),e=r("[data-search="+t+"]"),t=r("[data-target="+t+"]");e.hasClass(i.active)?(t.add(e).removeClass(i.active),setTimeout(function(){e.find("input").val("")},i.timeout)):(t.add(e).addClass(i.active),e.find("input").focus())}),l.on({keyup:function(t){"Escape"===t.key&&a.add(o).removeClass(i.active)},mouseup:function(t){o.find("input").val()||o.is(t.target)||0!==o.has(t.target).length||a.is(t.target)||0!==a.has(t.target).length||a.add(o).removeClass(i.active)}}))},s.Ani.formElm=function(t,e){var n={focus:"focused"},i=e?f(n,e):n;r(t).exists()&&r(t).each(function(){var t=r(this);t.val()&&t.parent().addClass(i.focus),t.on({focus:function(){t.parent().addClass(i.focus)},blur:function(){t.val()||t.parent().removeClass(i.focus)}})})},s.Validate=function(t,e){r(t).exists()&&r(t).each(function(){var t={errorElement:"span"},t=e?f(t,e):t;r(this).validate(t)})},s.Validate.init=function(){s.Validate(".form-validate",{errorElement:"span",errorClass:"invalid",errorPlacement:function(t,e){t.appendTo(e.parent())}})},s.Dropzone=function(t,e){r(t).exists()&&r(t).each(function(){var t={autoDiscover:!1},t=e?f(t,e):t;r(this).addClass("dropzone").dropzone(t)})},s.Wizard=function(){var i=r(".nk-wizard").show();i.steps({headerTag:".nk-wizard-head",bodyTag:".nk-wizard-content",labels:{finish:"Submit",next:"Next",previous:"Prev",loading:"Loading ..."},onStepChanging:function(t,e,n){return n<e||(e<n&&(i.find(".body:eq("+n+") label.error").remove(),i.find(".body:eq("+n+") .error").removeClass("error")),i.validate().settings.ignore=":disabled,:hidden",i.valid())},onFinishing:function(){return i.validate().settings.ignore=":disabled",i.valid()},onFinished:function(){window.location.href="#"}}).validate({errorElement:"span",errorClass:"invalid",errorPlacement:function(t,e){t.appendTo(e.parent())}})},s.DataTable=function(t,n){r(t).exists()&&r(t).each(function(){var t=r(this).data("auto-responsive"),e={responsive:!0,autoWidth:!1,dom:r(this).hasClass("is-separate")?'<"row justify-between g-2"<"col-7 col-sm-6 text-left"f><"col-5 col-sm-6 text-right"<"datatable-filter"l>>><"my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>':'<"row justify-between g-2"<"col-7 col-sm-6 text-left"f><"col-5 col-sm-6 text-right"<"datatable-filter"l>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>',language:{search:"",searchPlaceholder:"Type in to Search",lengthMenu:"<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",info:"_START_ -_END_ of _TOTAL_",infoEmpty:"No records found",infoFiltered:"( Total _MAX_  )",paginate:{first:"First",last:"Last",next:"Next",previous:"Prev"}}},e=n?f(e,n):e,e=!1===t?f(e,{responsive:!1}):e;r(this).DataTable(e)})},s.BS.ddfix=function(t,e){var n=e||"a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *";r(t||".dropdown-menu").on("click",function(t){r(t.target).is(n)||t.stopPropagation()}),s.State.isRTL&&r(".dropdown-menu").each(function(){var t=r(this);t.hasClass("dropdown-menu-right")&&!t.hasClass("dropdown-menu-center")?t.prev('[data-toggle="dropdown"]').dropdown({popperConfig:{placement:"bottom-start"}}):t.hasClass("dropdown-menu-right")||t.hasClass("dropdown-menu-center")||t.prev('[data-toggle="dropdown"]').dropdown({popperConfig:{placement:"bottom-end"}})})},s.BS.tabfix=function(t){r(t||'[data-toggle="modal"]').on("click",function(){var t=r(this),e=t.data("target"),n=t.attr("href"),t=t.data("tab-target"),n=e?i.find(e):i.find(n);t&&"#"!==t&&n?n.find('[href="'+t+'"]').tab("show"):n&&(n=n.find(".nk-nav.nav-tabs"),n=r(n[0]).find('[data-toggle="tab"]'),r(n[0]).tab("show"))})},s.ModeSwitch=function(){var t=r(".dark-switch");i.hasClass("dark-mode")?t.addClass("active"):t.removeClass("active"),t.on("click",function(t){t.preventDefault(),r(this).toggleClass("active"),i.toggleClass("dark-mode")})},s.Knob.init=function(){var t={readOnly:!0,lineCap:"round"},e={angleOffset:-90,angleArc:180,readOnly:!0,lineCap:"round"};s.Knob(".knob",t),s.Knob(".knob-half",e)},s.Range.init=function(){s.Range(".form-range-slider")},s.Select2.init=function(){s.Select2(".form-select")},s.Slider.init=function(){s.Slick(".slider-init")},s.Dropzone.init=function(){s.Dropzone(".upload-zone",{url:"/images"})},s.DataTable.init=function(){s.DataTable(".datatable-init",{responsive:{details:!0}}),r.fn.DataTable.ext.pager.numbers_length=7},s.OtherInit=function(){s.ClassBody(),s.PassSwitch(),s.CurrentLink(),s.LinkOff(".is-disable"),s.ClassNavMenu(),s.SetHW("[data-height]","height"),s.SetHW("[data-width]","width")},s.Ani.init=function(){s.Ani.formElm(".form-control-outlined"),s.Ani.formSearch(".toggle-search")},s.BS.init=function(){s.BS.menutip("a.nk-menu-link"),s.BS.tooltip(".nk-tooltip"),s.BS.tooltip(".btn-tooltip",{placement:"top"}),s.BS.tooltip('[data-toggle="tooltip"]'),s.BS.tooltip(".tipinfo,.nk-menu-tooltip",{placement:"right"}),s.BS.popover('[data-toggle="popover"]'),s.BS.progress("[data-progress]"),s.BS.fileinput(".custom-file-input"),s.BS.modalfix(),s.BS.ddfix(),s.BS.tabfix()},s.Picker.init=function(){s.Picker.date(".date-picker"),s.Picker.dob(".date-picker-alt"),s.Picker.time(".time-picker")},s.Addons.Init=function(){s.Knob.init(),s.Range.init(),s.Select2.init(),s.Dropzone.init(),s.Slider.init(),s.DataTable.init()},s.TGL.init=function(){s.TGL.content(".toggle"),s.TGL.expand(".toggle-expand"),s.TGL.expand(".toggle-opt",{toggle:!1}),s.TGL.showmenu(".nk-nav-toggle"),s.TGL.ddmenu("."+t+"-toggle",{self:t+"-toggle",child:t+"-sub"})},s.BS.modalOnInit=function(){r(".modal").on("shown.bs.modal",function(){s.Select2.init(),s.Validate.init()})},s.init=function(){s.coms.docReady.push(s.OtherInit),s.coms.docReady.push(s.Prettify),s.coms.docReady.push(s.ColorBG),s.coms.docReady.push(s.ColorTXT),s.coms.docReady.push(s.Copied),s.coms.docReady.push(s.Ani.init),s.coms.docReady.push(s.TGL.init),s.coms.docReady.push(s.BS.init),s.coms.docReady.push(s.Validate.init),s.coms.docReady.push(s.Picker.init),s.coms.docReady.push(s.Addons.Init),s.coms.docReady.push(s.Wizard),s.coms.winLoad.push(s.ModeSwitch)},s.init()}(NioApp,jQuery);