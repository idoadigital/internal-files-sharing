(self.webpackChunkbedrive2=self.webpackChunkbedrive2||[]).push([[24],{82613:function(e,t,i){"use strict";i.d(t,{U0:function(){return Z},VQ:function(){return v},Fk:function(){return y}});var n=i(37716),o=i(72458),a=i(39490),s=i(3679),r=i(46237),c=i(19238),l=i(38345);const d=["input"],u=function(){return{enterDuration:150}},p=["*"],h=new n.OlP("mat-radio-default-options",{providedIn:"root",factory:function(){return{color:"accent"}}});let m=0;const b={provide:s.JU,useExisting:(0,n.Gpc)(()=>v),multi:!0};class g{constructor(e,t){this.source=e,this.value=t}}const f=new n.OlP("MatRadioGroup");let _=(()=>{class e{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+m++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new n.vpe}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,a.Ig)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,a.Ig)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(e=>{e.checked=this.value===e.value,e.checked&&(this._selected=e)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new g(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.sBO))},e.\u0275dir=n.lG2({type:e,inputs:{name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"}}),e})(),v=(()=>{class e extends _{}return e.\u0275fac=function(){let t;return function(i){return(t||(t=n.n5z(e)))(i||e)}}(),e.\u0275dir=n.lG2({type:e,selectors:[["mat-radio-group"]],contentQueries:function(e,t,i){if(1&e&&n.Suo(i,Z,5),2&e){let e;n.iGM(e=n.CRH())&&(t._radios=e)}},hostAttrs:["role","radiogroup",1,"mat-radio-group"],exportAs:["matRadioGroup"],features:[n._Bn([b,{provide:f,useExisting:e}]),n.qOj]}),e})();class k{constructor(e){this._elementRef=e}}const w=(0,o.Kr)((0,o.sb)(k));let x=(()=>{class e extends w{constructor(e,t,i,o,s,r,c,l){super(t),this._changeDetector=i,this._focusMonitor=o,this._radioDispatcher=s,this._animationMode=r,this._providerOverride=c,this._uniqueId="mat-radio-"+ ++m,this.id=this._uniqueId,this.change=new n.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,l&&(this.tabIndex=(0,a.su)(l,0)),this._removeUniqueSelectionListener=s.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}get checked(){return this._checked}set checked(e){const t=(0,a.Ig)(e);this._checked!==t&&(this._checked=t,t&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!t&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),t&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,a.Ig)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,a.Ig)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new g(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputChange(e){e.stopPropagation();const t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_),n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(c.tE),n.Y36(l.A8),n.Y36(String),n.Y36(void 0),n.Y36(String))},e.\u0275dir=n.lG2({type:e,viewQuery:function(e,t){if(1&e&&n.Gf(d,5),2&e){let e;n.iGM(e=n.CRH())&&(t._inputElement=e.first)}},inputs:{id:"id",checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change"},features:[n.qOj]}),e})(),Z=(()=>{class e extends x{constructor(e,t,i,n,o,a,s,r){super(e,t,i,n,o,a,s,r)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(f,8),n.Y36(n.SBq),n.Y36(n.sBO),n.Y36(c.tE),n.Y36(l.A8),n.Y36(r.Qb,8),n.Y36(h,8),n.$8M("tabindex"))},e.\u0275cmp=n.Xpm({type:e,selectors:[["mat-radio-button"]],hostAttrs:[1,"mat-radio-button"],hostVars:17,hostBindings:function(e,t){1&e&&n.NdJ("focus",function(){return t._inputElement.nativeElement.focus()}),2&e&&(n.uIk("tabindex",null)("id",t.id)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),n.ekj("mat-radio-checked",t.checked)("mat-radio-disabled",t.disabled)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-primary","primary"===t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matRadioButton"],features:[n.qOj],ngContentSelectors:p,decls:13,vars:19,consts:[[1,"mat-radio-label"],["label",""],[1,"mat-radio-container"],[1,"mat-radio-outer-circle"],[1,"mat-radio-inner-circle"],["type","radio",1,"mat-radio-input","cdk-visually-hidden",3,"id","checked","disabled","tabIndex","required","change","click"],["input",""],["mat-ripple","",1,"mat-radio-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mat-radio-label-content"],[2,"display","none"]],template:function(e,t){if(1&e&&(n.F$t(),n.TgZ(0,"label",0,1),n.TgZ(2,"span",2),n._UZ(3,"span",3),n._UZ(4,"span",4),n.TgZ(5,"input",5,6),n.NdJ("change",function(e){return t._onInputChange(e)})("click",function(e){return t._onInputClick(e)}),n.qZA(),n.TgZ(7,"span",7),n._UZ(8,"span",8),n.qZA(),n.qZA(),n.TgZ(9,"span",9),n.TgZ(10,"span",10),n._uU(11,"\xa0"),n.qZA(),n.Hsn(12),n.qZA(),n.qZA()),2&e){const e=n.MAs(1);n.uIk("for",t.inputId),n.xp6(5),n.Q6J("id",t.inputId)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex)("required",t.required),n.uIk("name",t.name)("value",t.value)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-describedby",t.ariaDescribedby),n.xp6(2),n.Q6J("matRippleTrigger",e)("matRippleDisabled",t._isRippleDisabled())("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",n.DdM(18,u)),n.xp6(2),n.ekj("mat-radio-label-before","before"==t.labelPosition)}},directives:[o.wG],styles:[".mat-radio-button{display:inline-block;-webkit-tap-highlight-color:transparent;outline:0}.mat-radio-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle;width:100%}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}._mat-animation-noopable .mat-radio-outer-circle{transition:none}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;display:block;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(0.001);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-radio-inner-circle{transition:none}.mat-radio-checked .mat-radio-inner-circle{transform:scale(0.5)}.cdk-high-contrast-active .mat-radio-checked .mat-radio-inner-circle{border:solid 10px}.mat-radio-label-content{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto;display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-button .mat-radio-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-radio-button .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple){opacity:.16}.mat-radio-persistent-ripple{width:100%;height:100%;transform:none;top:0;left:0}.mat-radio-container:hover .mat-radio-persistent-ripple{opacity:.04}.mat-radio-button:not(.mat-radio-disabled).cdk-keyboard-focused .mat-radio-persistent-ripple,.mat-radio-button:not(.mat-radio-disabled).cdk-program-focused .mat-radio-persistent-ripple{opacity:.12}.mat-radio-persistent-ripple,.mat-radio-disabled .mat-radio-container:hover .mat-radio-persistent-ripple{opacity:0}@media(hover: none){.mat-radio-container:hover .mat-radio-persistent-ripple{display:none}}.mat-radio-input{bottom:0;left:50%}.cdk-high-contrast-active .mat-radio-disabled{opacity:.5}\n"],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.si,o.BQ],o.BQ]}),e})()},6008:function(e,t,i){"use strict";i.d(t,{b:function(){return r}});var n=i(38583),o=i(76627),a=i(51095),s=i(37716);let r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,o.Ps,a.ot]]}),e})()},68145:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var n=i(26215),o=i(3679),a=i(22238),s=i(68939),r=i(37716),c=i(87991),l=i(35718),d=i(38583),u=i(76627),p=i(15515),h=i(51095);function m(e,t){1&e&&(r.TgZ(0,"span",6),r._uU(1,"Create Workspace"),r.qZA())}function b(e,t){1&e&&(r.TgZ(0,"span",6),r._uU(1,"Update Workspace"),r.qZA())}function g(e,t){if(1&e&&(r.TgZ(0,"div",15),r._uU(1),r.qZA()),2&e){const e=r.oxw().ngIf;r.xp6(1),r.Oqu(e.name)}}function f(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"form",7),r.NdJ("ngSubmit",function(){return r.CHM(e),r.oxw().confirm()}),r.TgZ(1,"mat-dialog-content",8),r.TgZ(2,"div",9),r.TgZ(3,"label",10),r._uU(4,"Name"),r.qZA(),r._UZ(5,"input",11),r.YNc(6,g,2,1,"div",12),r.qZA(),r.qZA(),r.TgZ(7,"mat-dialog-actions"),r.TgZ(8,"button",13),r.NdJ("click",function(){return r.CHM(e),r.oxw().close()}),r._uU(9,"Cancel"),r.qZA(),r.TgZ(10,"button",14),r.ALo(11,"async"),r._uU(12),r.qZA(),r.qZA(),r.qZA()}if(2&e){const e=t.ngIf,i=r.oxw();r.Q6J("formGroup",i.form),r.xp6(6),r.Q6J("ngIf",e.name),r.xp6(4),r.Q6J("disabled",r.lcZ(11,4,i.loading$)),r.xp6(2),r.Oqu(i.data.workspace?"Update":"Create")}}let _=(()=>{class e{constructor(e,t,i,a){this.dialogRef=e,this.data=t,this.workspaces=i,this.toast=a,this.loading$=new n.X(!1),this.errors$=new n.X({}),this.form=new o.cw({name:new o.NI}),t.workspace&&this.form.patchValue(t.workspace)}confirm(){this.loading$.next(!0),(this.data.workspace?this.workspaces.update(this.data.workspace.id,this.form.value):this.workspaces.create(this.form.value)).pipe((0,s.x)(()=>this.loading$.next(!1))).subscribe(e=>{this.toast.open(this.data.workspace?"Workspace updated.":"Workspace created."),this.close(e.workspace)},e=>this.errors$.next(e.errors))}close(e){this.dialogRef.close(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(a.so),r.Y36(a.WI),r.Y36(c.b),r.Y36(l.F))},e.\u0275cmp=r.Xpm({type:e,selectors:[["crupdate-workspace-modal"]],decls:8,vars:5,consts:[[1,"modal-header"],["mat-dialog-title",""],["trans","",4,"ngIf"],["type","button","tabindex","-1",1,"close-button","no-style",3,"click"],["svgIcon","close"],["ngNativeValidate","",3,"formGroup","ngSubmit",4,"ngIf"],["trans",""],["ngNativeValidate","",3,"formGroup","ngSubmit"],[1,"many-inputs"],[1,"input-container","name-container"],["for","crupdate-workspace-name","trans",""],["type","text","id","crupdate-workspace-name","formControlName","name","required","","minlength","3"],["class","error",4,"ngIf"],["type","button","mat-button","","trans","",3,"click"],["type","submit","mat-raised-button","","color","accent","trans","",3,"disabled"],[1,"error"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"h2",1),r.YNc(2,m,2,0,"span",2),r.YNc(3,b,2,0,"span",2),r.qZA(),r.TgZ(4,"button",3),r.NdJ("click",function(){return t.close()}),r._UZ(5,"mat-icon",4),r.qZA(),r.qZA(),r.YNc(6,f,13,6,"form",5),r.ALo(7,"async")),2&e&&(r.xp6(2),r.Q6J("ngIf",!t.data.workspace),r.xp6(1),r.Q6J("ngIf",t.data.workspace),r.xp6(3),r.Q6J("ngIf",r.lcZ(7,3,t.errors$)))},directives:[a.uh,d.O5,u.Hw,p.P,o.JL,o.sg,a.xY,o.Fj,o.JJ,o.u,o.Q7,o.wO,a.H8,h.lW],pipes:[d.Ov],styles:["[_nghost-%COMP%]{display:block;width:400px;max-width:100%}"],changeDetection:0}),e})()},34899:function(e,t,i){"use strict";i.d(t,{W:function(){return n}});const n={title:"Leave Workspace",body:"Are you sure you want to leave this workspace?",bodyBold:"All resources you've created in the workspace will be transferred to workspace owner.",ok:"Leave"}},97335:function(e,t,i){"use strict";i.d(t,{t:function(){return F}});var n=i(26215),o=i(3679),a=i(22238),s=i(68939),r=(()=>(function(e){e.LEFT_WORKSPACE="You have left the workspace.",e.MEMBER_DELETED="Member Deleted.",e.INVITES_SENT="Invites Sent.",e.INVITE_RESENT="Resent invite.",e.ROLE_ASSIGNED="Role Assigned."}(r||(r={})),r))(),c=i(8208),l=i(34899),d=i(83326),u=i(37716),p=i(87991),h=i(35718),m=i(74388),b=i(24688),g=i(15381),f=i(15515),_=i(76627),v=i(38583),k=i(33935),w=i(44666),x=i(51095),Z=i(12178),y=i(64833),I=i(11436),A=i(63297);function q(e,t){1&e&&u._UZ(0,"mat-progress-bar",23)}function T(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",16),u.TgZ(1,"div",17),u.TgZ(2,"label",18),u._uU(3,"Invite by email"),u.qZA(),u.TgZ(4,"div",19),u._UZ(5,"chip-input",20),u.TgZ(6,"button",21),u.NdJ("click",function(){return u.CHM(e),u.oxw().invitePeople()}),u.ALo(7,"async"),u.ALo(8,"async"),u._uU(9,"Invite "),u.qZA(),u.qZA(),u.qZA(),u.YNc(10,q,1,0,"mat-progress-bar",22),u.ALo(11,"async"),u.qZA()}if(2&e){const e=u.oxw();let t;u.Q6J("@fadeIn",void 0),u.xp6(5),u.Q6J("emailsInput",!0)("formControl",e.peopleToInvite),u.xp6(1),u.Q6J("disabled",u.lcZ(7,5,e.inviting$)||!(null!=(t=u.lcZ(8,7,e.peopleToInvite.valueChanges))&&t.length)),u.xp6(4),u.Q6J("ngIf",u.lcZ(11,9,e.inviting$))}}function C(e,t){1&e&&(u.TgZ(0,"li",24),u._UZ(1,"skeleton",25),u.TgZ(2,"div",26),u._UZ(3,"skeleton"),u._UZ(4,"skeleton"),u.qZA(),u.qZA())}const M=function(){return[1,2,3]};function O(e,t){1&e&&(u.TgZ(0,"ul",12),u.YNc(1,C,5,0,"li",13),u.qZA()),2&e&&(u.Q6J("@fadeOut",void 0),u.xp6(1),u.Q6J("ngForOf",u.DdM(2,M)))}function R(e,t){1&e&&(u.TgZ(0,"span",38),u._uU(1,"(You)"),u.qZA())}function P(e,t){if(1&e){const e=u.EpF();u.ynx(0),u._uU(1," \xb7 "),u.TgZ(2,"button",39),u.NdJ("click",function(){u.CHM(e);const t=u.oxw(2).$implicit;return u.oxw().maybeResendInvite(t)}),u.ALo(3,"async"),u._uU(4,"Resend Invite"),u.qZA(),u.BQk()}if(2&e){const e=u.oxw(3);u.xp6(2),u.Q6J("disabled",u.lcZ(3,1,e.inviting$))}}function E(e,t){if(1&e&&(u.TgZ(0,"span"),u._uU(1," \xb7 "),u.TgZ(2,"span",34),u._uU(3,"Invited"),u.qZA(),u.YNc(4,P,5,3,"ng-container",30),u.qZA()),2&e){const e=u.oxw(2);u.xp6(4),u.Q6J("ngIf",e.canInvite)}}function U(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"button",40),u.NdJ("click",function(){u.CHM(e);const t=u.oxw().$implicit;return u.oxw().maybeDeleteMember(t)}),u.ALo(1,"async"),u._UZ(2,"mat-icon",3),u.qZA()}if(2&e){const e=u.oxw().$implicit,t=u.oxw();u.ekj("visually-hidden",e.is_owner||!t.canDelete),u.Q6J("disabled",u.lcZ(1,3,t.deleting$))}}function J(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"button",41),u.NdJ("click",function(){u.CHM(e);const t=u.oxw().$implicit;return u.oxw().maybeLeaveWorkspace(t)}),u.ALo(1,"trans"),u.ALo(2,"async"),u._UZ(3,"mat-icon",42),u.qZA()}if(2&e){const e=u.oxw(2);u.Q6J("matTooltip",u.lcZ(1,2,"Leave workspace"))("disabled",u.lcZ(2,4,e.deleting$))}}const $=function(e){return{member:e}};function N(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"li",24),u.NdJ("@fadeIn.done",function(){return u.CHM(e),u.oxw(),u.MAs(6).style.overflow="auto"}),u._UZ(1,"img",27),u.TgZ(2,"div",26),u.TgZ(3,"div",28),u.TgZ(4,"span"),u._uU(5),u.qZA(),u._uU(6," "),u.YNc(7,R,2,0,"span",29),u.YNc(8,E,5,1,"span",30),u.qZA(),u.TgZ(9,"div",31),u._uU(10),u.qZA(),u.qZA(),u.TgZ(11,"div",32),u.TgZ(12,"button",33),u.TgZ(13,"span",34),u._uU(14),u.qZA(),u._UZ(15,"mat-icon",35),u.qZA(),u.YNc(16,U,3,5,"button",36),u.YNc(17,J,4,6,"button",37),u.qZA(),u.qZA()}if(2&e){const e=t.$implicit,i=u.oxw(),n=u.MAs(19);u.Q6J("@fadeIn",void 0),u.xp6(1),u.Q6J("src",e.avatar,u.LSH),u.xp6(4),u.Oqu(e.display_name),u.xp6(2),u.Q6J("ngIf",i.currentUser.get("id")===e.id),u.xp6(1),u.Q6J("ngIf","invite"===e.model_type),u.xp6(2),u.Oqu(e.email),u.xp6(2),u.ekj("not-clickable",e.is_owner||!i.canEdit),u.Q6J("matMenuTriggerFor",n)("matMenuTriggerData",u.VKq(13,$,e)),u.xp6(2),u.Oqu(e.role_name),u.xp6(2),u.Q6J("ngIf",e.is_owner||i.currentUser.get("id")!==e.id),u.xp6(1),u.Q6J("ngIf",!e.is_owner&&i.currentUser.get("id")===e.id)}}function Y(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",44),u.NdJ("click",function(){const t=u.CHM(e).$implicit,i=u.oxw().member;return u.oxw().changeRole(i,t)}),u._UZ(1,"mat-icon",45),u.TgZ(2,"div",46),u.TgZ(3,"div",47),u._uU(4),u.qZA(),u.TgZ(5,"div",48),u._uU(6),u.qZA(),u.qZA(),u.qZA()}if(2&e){const e=t.$implicit,i=u.oxw().member;u.ekj("active",i.role_id===e.id),u.xp6(1),u.ekj("visually-hidden",i.role_id!==e.id),u.xp6(3),u.Oqu(e.name),u.xp6(2),u.Oqu(e.description)}}function G(e,t){if(1&e&&(u.YNc(0,Y,7,6,"div",43),u.ALo(1,"async")),2&e){const e=u.oxw();u.Q6J("ngForOf",u.lcZ(1,1,e.workspaceRoles$))}}const D=function(e){return{workspace:e}};let F=(()=>{class e{constructor(e,t,i,a,s,r,c){this.dialogRef=e,this.data=t,this.workspaces=i,this.toast=a,this.valueLists=s,this.currentUser=r,this.modal=c,this.inviting$=new n.X(!1),this.deleting$=new n.X(!1),this.loadingMembers$=new n.X(!1),this.workspaceRoles$=new n.X([]),this.members$=new n.X([]),this.peopleToInvite=new o.NI([]),this.canInvite=!1,this.canEdit=!1,this.canDelete=!1}ngOnInit(){this.loadingMembers$.next(!0),this.valueLists.get(["workspaceRoles"]).subscribe(e=>{this.workspaceRoles$.next(e.workspaceRoles)}),this.workspaces.get(this.data.workspace.id).pipe((0,s.x)(()=>this.loadingMembers$.next(!1))).subscribe(e=>{this.members$.next([...e.workspace.invites,...e.workspace.members]),this.setCurrentUserPermissions()})}close(e){this.dialogRef.close(e)}invitePeople(){const e=this.peopleToInvite.value.filter(e=>!this.members$.value.find(t=>t.email===e));if(!e.length)return this.peopleToInvite.reset(),void this.toast.open("All invited people are already members.");const t={emails:e,roleId:(this.workspaceRoles$.value.find(e=>e.default)||this.workspaceRoles$.value[0]).id};this.inviting$.next(!0),this.workspaces.invitePeople(this.data.workspace.id,t).pipe((0,s.x)(()=>this.inviting$.next(!1))).subscribe(e=>{this.members$.next([...this.members$.value,...e.invites]),this.peopleToInvite.reset(),this.toast.open(r.INVITES_SENT)})}resendInvite(e){this.inviting$.next(!0),this.workspaces.resendInvite(this.data.workspace.id,e.id).pipe((0,s.x)(()=>this.inviting$.next(!1))).subscribe(()=>{this.toast.open(r.INVITE_RESENT)})}changeRole(e,t){this.workspaces.changeRole(this.data.workspace.id,e,t.id).subscribe(()=>{this.toast.open(r.ROLE_ASSIGNED);const i=[...this.members$.value],n=i.findIndex(t=>t.id===e.id);i[n].role_name=t.name,i[n].role_id=t.id,this.members$.next(i)})}deleteMember(e){this.deleting$.next(!0),("member"===e.model_type?this.workspaces.deleteMember(this.data.workspace.id,e.id):this.workspaces.deleteInvite(e.id)).pipe((0,s.x)(()=>this.deleting$.next(!1))).subscribe(()=>{const t=[...this.members$.value],i=t.findIndex(t=>e.id&&t.model_type===e.model_type);t.splice(i,1),this.members$.next(t),e.id===this.currentUser.get("id")?(this.close(),this.toast.open(r.LEFT_WORKSPACE)):this.toast.open(r.MEMBER_DELETED)})}maybeDeleteMember(e){this.modal.show(c.z,{title:"Delete Member",body:"Are you sure you want to delete this member?",bodyBold:"All workspace resources created by this member will be transferred to workspace owner.",ok:"Delete"}).afterClosed().subscribe(t=>{t&&this.deleteMember(e)})}maybeResendInvite(e){this.modal.show(c.z,{title:"Resend Invite",body:"Are you sure you want to send this invite again?",ok:"Resend"}).afterClosed().subscribe(t=>{t&&this.resendInvite(e)})}maybeLeaveWorkspace(e){this.modal.show(c.z,l.W).afterClosed().subscribe(t=>{t&&this.deleteMember(e)})}setCurrentUserPermissions(){const e=this.members$.value.find(e=>e.id===this.currentUser.get("id"));this.canInvite=e.is_owner||!!e.permissions.find(e=>"workspace_members.invite"===e.name),this.canEdit=e.is_owner||!!e.permissions.find(e=>"workspace_members.update"===e.name),this.canDelete=e.is_owner||!!e.permissions.find(e=>"workspace_members.delete"===e.name)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(a.so),u.Y36(a.WI),u.Y36(p.b),u.Y36(h.F),u.Y36(m.l),u.Y36(b.I),u.Y36(g.u))},e.\u0275cmp=u.Xpm({type:e,selectors:[["manage-workspace-members-modal"]],decls:21,vars:10,consts:[[1,"modal-header"],["mat-dialog-title","","trans",""],["type","button","tabindex","-1",1,"close-button","no-style",3,"click"],["svgIcon","close"],[2,"overflow","hidden"],["container",""],["class","invite-container",4,"ngIf"],[1,"header"],["svgIcon","people"],["trans","",1,"text",3,"transValues"],[1,"animation-container"],["class","member-list unstyled-list",4,"ngIf"],[1,"member-list","unstyled-list"],["class","member-list-item",4,"ngFor","ngForOf"],["selectRoleMenu","matMenu"],["matMenuContent",""],[1,"invite-container"],[1,"input-container"],["for","workspace-emails-input","trans",""],[1,"input-with-action"],["id","workspace-emails-input","placeholder","Email addresses",3,"emailsInput","formControl"],["type","button","mat-flat-button","","color","accent","trans","",1,"add-tags-button",3,"disabled","click"],["mode","indeterminate","color","accent",4,"ngIf"],["mode","indeterminate","color","accent"],[1,"member-list-item"],["variant","avatar"],[1,"details"],["alt","",3,"src"],[1,"email"],["class","strong","trans","",4,"ngIf"],[4,"ngIf"],[1,"invited_at"],[1,"actions"],["type","button","mat-stroked-button","",1,"role-trigger-button",3,"matMenuTriggerFor","matMenuTriggerData"],["trans",""],["svgIcon","keyboard-arrow-down",1,"dropdown-icon"],["type","button","class","delete-member-button","mat-icon-button","",3,"visually-hidden","disabled","click",4,"ngIf"],["type","button","class","delete-member-button","mat-icon-button","",3,"matTooltip","disabled","click",4,"ngIf"],["trans","",1,"strong"],["type","button","trans","",1,"no-style","resend-invite-button",3,"disabled","click"],["type","button","mat-icon-button","",1,"delete-member-button",3,"disabled","click"],["type","button","mat-icon-button","",1,"delete-member-button",3,"matTooltip","disabled","click"],["svgIcon","exit-to-app"],["class","multiline-mat-menu-item with-icon","mat-menu-item","","trans","",3,"active","click",4,"ngFor","ngForOf"],["mat-menu-item","","trans","",1,"multiline-mat-menu-item","with-icon",3,"click"],["svgIcon","check"],[1,"menu-item-content"],["trans","",1,"title"],["trans","",1,"description"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"h2",1),u._uU(2,"Manage workspace members"),u.qZA(),u.TgZ(3,"button",2),u.NdJ("click",function(){return t.close()}),u._UZ(4,"mat-icon",3),u.qZA(),u.qZA(),u.TgZ(5,"mat-dialog-content",4,5),u.YNc(7,T,12,11,"div",6),u.TgZ(8,"div",7),u._UZ(9,"mat-icon",8),u.TgZ(10,"span",9),u._uU(11,"Members of :workspace"),u.qZA(),u.qZA(),u.TgZ(12,"div",10),u.YNc(13,O,2,3,"ul",11),u.ALo(14,"async"),u.TgZ(15,"ul",12),u.YNc(16,N,18,15,"li",13),u.ALo(17,"async"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"mat-menu",null,14),u.YNc(20,G,2,3,"ng-template",15),u.qZA()),2&e&&(u.xp6(7),u.Q6J("ngIf",t.canInvite),u.xp6(3),u.Q6J("transValues",u.VKq(8,D,t.data.workspace.name)),u.xp6(3),u.Q6J("ngIf",u.lcZ(14,4,t.loadingMembers$)),u.xp6(3),u.Q6J("ngForOf",u.lcZ(17,6,t.members$)))},directives:[a.uh,f.P,_.Hw,a.xY,v.O5,v.sg,k.VK,k.KA,w.S,o.JJ,o.oH,x.lW,Z.pW,y._,k.p6,I.gM,k.OP],pipes:[v.Ov,A.R],styles:["[_nghost-%COMP%]{display:block;width:600px;max-width:100%}chip-input[_ngcontent-%COMP%]{flex:1}.invite-container[_ngcontent-%COMP%]{margin-bottom:30px;position:relative}.mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0}.header[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:15px}.header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:5px}.header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{vertical-align:middle}.animation-container[_ngcontent-%COMP%]{position:relative}.member-list-item[_ngcontent-%COMP%]{display:flex;margin-bottom:20px}.member-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex-shrink:0;width:40px;height:40px;-o-object-fit:cover;object-fit:cover;margin-right:10px;border-radius:4px}.member-list-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1 1 auto}.member-list-item[_ngcontent-%COMP%]   .delete-member-button[_ngcontent-%COMP%], .member-list-item[_ngcontent-%COMP%]   .invited_at[_ngcontent-%COMP%]{color:var(--be-secondary-text)}.not-clickable[_ngcontent-%COMP%]{pointer-events:none}.not-clickable[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{display:none}.dropdown-icon[_ngcontent-%COMP%]{width:18px;height:18px;line-height:18px}.resend-invite-button[_ngcontent-%COMP%]{color:var(--be-link)}.role-trigger-button[_ngcontent-%COMP%]{margin-right:8px;font-size:1.3rem;font-weight:400}"],data:{animation:d.B},changeDetection:0}),e})()},77024:function(e,t,i){"use strict";i.r(t),i.d(t,{WorkspaceModule:function(){return w}});var n=i(38583),o=i(68145),a=i(97335),s=i(76627),r=i(51095),c=i(22238),l=i(49866),d=i(3679),u=i(82613),p=i(58193),h=i(6008),m=i(11436),b=i(98097),g=i(12178),f=i(87446),_=i(87738),v=i(33935),k=i(37716);let w=(()=>{class e{}return e.components={crupdateModal:o.Z,manageMembers:a.t},e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k.oAB({type:e}),e.\u0275inj=k.cJS({imports:[[n.ez,d.u5,d.UX,l.N,p.x,h.b,b.X,f.m,_.G,s.Ps,r.ot,c.Is,u.Fk,m.AV,g.Cv,v.Tx]]}),e})()}}]);
//# sourceMappingURL=24-es2015.6a3e74a6c36d606611f6.js.map