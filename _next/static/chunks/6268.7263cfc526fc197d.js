"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6268],{7574:function(t,e,o){o.d(e,{f:function(){return a}});var i=o(33085),n=o(55543);let r=(0,i.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),a={state:r,subscribe:t=>(0,i.Ld)(r,()=>t(r)),subscribeKey:(t,e)=>(0,n.VW)(r,t,e),showTooltip({message:t,triggerRect:e,variant:o}){r.open=!0,r.message=t,r.triggerRect=e,r.variant=o},hide(){r.open=!1,r.message="",r.triggerRect={width:0,height:0,top:0,left:0}}}},96268:function(t,e,o){o.r(e),o.d(e,{W3mSwapPreviewView:function(){return R},W3mSwapSelectTokenView:function(){return M},W3mSwapView:function(){return P}});var i=o(31133),n=o(84927),r=o(47437),a=o(86777),s=o(68584),l=o(55372),c=o(51294),u=o(53357),p=o(89512),d=o(31929),h=o(92413);o(97585),o(96277),o(4594),o(44732);var g=o(4786),w=o(59712);o(32567),o(92815);var b=(0,i.iv)`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`,f=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let x=w.bq.CONVERT_SLIPPAGE_TOLERANCE,m=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.networkName=l.R.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=c.nY.state.sourceToken,this.toToken=c.nY.state.toToken,this.toTokenAmount=c.nY.state.toTokenAmount,this.sourceTokenPriceInUSD=c.nY.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=c.nY.state.toTokenPriceInUSD,this.priceImpact=c.nY.state.priceImpact,this.maxSlippage=c.nY.state.maxSlippage,this.networkTokenSymbol=c.nY.state.networkTokenSymbol,this.inputError=c.nY.state.inputError,this.unsubscribe.push(c.nY.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){let t=this.toTokenAmount&&this.maxSlippage?r.C.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return(0,i.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${h.Hg.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${h.Hg.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?(0,i.dy)`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?(0,i.dy)` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${h.Hg.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?(0,i.dy)`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${h.Hg.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${h.Hg.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${x}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};m.styles=[b],f([(0,n.SB)()],m.prototype,"networkName",void 0),f([(0,n.Cb)()],m.prototype,"detailsOpen",void 0),f([(0,n.SB)()],m.prototype,"sourceToken",void 0),f([(0,n.SB)()],m.prototype,"toToken",void 0),f([(0,n.SB)()],m.prototype,"toTokenAmount",void 0),f([(0,n.SB)()],m.prototype,"sourceTokenPriceInUSD",void 0),f([(0,n.SB)()],m.prototype,"toTokenPriceInUSD",void 0),f([(0,n.SB)()],m.prototype,"priceImpact",void 0),f([(0,n.SB)()],m.prototype,"maxSlippage",void 0),f([(0,n.SB)()],m.prototype,"networkTokenSymbol",void 0),f([(0,n.SB)()],m.prototype,"inputError",void 0),m=f([(0,h.Mo)("w3m-swap-details")],m),o(80843);var k=(0,i.iv)`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`,v=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let y=class extends i.oi{constructor(){super(...arguments),this.target="sourceToken"}render(){return(0,i.dy)`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return(0,i.dy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};y.styles=[k],v([(0,n.Cb)()],y.prototype,"target",void 0),y=v([(0,h.Mo)("w3m-swap-input-skeleton")],y);let T={numericInputKeyDown(t,e,o){let i=t.metaKey||t.ctrlKey,n=t.key,r=n.toLocaleLowerCase(),a=","===n,s="."===n,l=n>="0"&&n<="9";i||"a"!==r&&"c"!==r&&"v"!==r&&"x"!==r||t.preventDefault(),"0"!==e||a||s||"0"!==n||t.preventDefault(),"0"===e&&l&&(o(n),t.preventDefault()),(a||s)&&(e||(o("0."),t.preventDefault()),(e?.includes(".")||e?.includes(","))&&t.preventDefault()),l||["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"].includes(n)||s||a||t.preventDefault()}};o(7060);var S=(0,i.iv)`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`,$=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let C=class extends i.oi{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){let t=this.marketValue||"0",e=r.C.bigNumber(t).gt("0");return(0,i.dy)`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${h.Hg.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return T.numericInputKeyDown(t,this.value,t=>this.onSetAmount?.(this.target,t))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;let e=t.target.value.replace(/[^0-9.]/gu,"");","===e||"."===e?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?(0,i.dy)`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:(0,i.dy)` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let t=r.C.multiply(this.balance,this.price),e=!!t&&t?.gt(5e-5);return(0,i.dy)`
      ${e?(0,i.dy)`<wui-text variant="small-400" color="fg-200">
            ${h.Hg.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?(0,i.dy)` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:(0,i.dy)` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){d.X.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),a.RouterController.push("SwapSelectToken",{target:this.target})}onBuyToken(){a.RouterController.push("OnRampProviders")}};C.styles=[S],$([(0,n.Cb)()],C.prototype,"focused",void 0),$([(0,n.Cb)()],C.prototype,"balance",void 0),$([(0,n.Cb)()],C.prototype,"value",void 0),$([(0,n.Cb)()],C.prototype,"price",void 0),$([(0,n.Cb)()],C.prototype,"marketValue",void 0),$([(0,n.Cb)()],C.prototype,"disabled",void 0),$([(0,n.Cb)()],C.prototype,"target",void 0),$([(0,n.Cb)()],C.prototype,"token",void 0),$([(0,n.Cb)()],C.prototype,"onSetAmount",void 0),$([(0,n.Cb)()],C.prototype,"onSetMaxValue",void 0),C=$([(0,h.Mo)("w3m-swap-input")],C);var I=(0,i.iv)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,A=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let P=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.initialParams=a.RouterController.state.data?.swap,this.detailsOpen=!1,this.caipAddress=s.AccountController.state.caipAddress,this.caipNetworkId=l.R.state.activeCaipNetwork?.caipNetworkId,this.initialized=c.nY.state.initialized,this.loadingQuote=c.nY.state.loadingQuote,this.loadingPrices=c.nY.state.loadingPrices,this.loadingTransaction=c.nY.state.loadingTransaction,this.sourceToken=c.nY.state.sourceToken,this.sourceTokenAmount=c.nY.state.sourceTokenAmount,this.sourceTokenPriceInUSD=c.nY.state.sourceTokenPriceInUSD,this.toToken=c.nY.state.toToken,this.toTokenAmount=c.nY.state.toTokenAmount,this.toTokenPriceInUSD=c.nY.state.toTokenPriceInUSD,this.inputError=c.nY.state.inputError,this.gasPriceInUSD=c.nY.state.gasPriceInUSD,this.fetchError=c.nY.state.fetchError,this.onDebouncedGetSwapCalldata=u.j.debounce(async()=>{await c.nY.swapTokens()},200),l.R.subscribeKey("activeCaipNetwork",t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!0,initializeSwapState:!1})),s.AccountController.subscribeKey("caipAddress",t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!0,initializeSwapState:!1})),this.unsubscribe.push(l.R.subscribeKey("activeCaipNetwork",t=>this.onCaipNetworkChange({newCaipNetwork:t,resetSwapState:!1,initializeSwapState:!0})),s.AccountController.subscribeKey("caipAddress",t=>this.onCaipAddressChange({newCaipAddress:t,resetSwapState:!1,initializeSwapState:!0})),p.I.subscribeKey("open",t=>{t||c.nY.resetState()}),a.RouterController.subscribeKey("view",t=>{t.includes("Swap")||c.nY.resetValues()}),c.nY.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.gasPriceInUSD=t.gasPriceInUSD,this.fetchError=t.fetchError}))}async firstUpdated(){c.nY.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return(0,i.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{c.nY.getNetworkTokenPrice(),c.nY.getMyTokensWithBalance(),c.nY.swapTokens()},1e4)}templateSwap(){return(0,i.dy)`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return(0,i.dy)`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return(0,i.dy)`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){let o=c.nY.state.myTokensWithBalance?.find(t=>t?.address===e?.address),n="toToken"===t?this.toTokenAmount:this.sourceTokenAmount,a="toToken"===t?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,s=r.C.parseLocalStringToNumber(n)*a;return(0,i.dy)`<w3m-swap-input
      .value=${"toToken"===t?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${"toToken"===t}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${o?.quantity?.numeric}
      .price=${o?.price}
      .marketValue=${s}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){let o="sourceToken"===t?this.sourceToken:this.toToken,i=o?.address===l.R.getActiveNetworkTokenAddress(),n="0";if(!e){n="0",this.handleChangeAmount(t,n);return}if(!this.gasPriceInUSD){n=e,this.handleChangeAmount(t,n);return}let a=r.C.bigNumber(this.gasPriceInUSD.toFixed(5)).div(this.sourceTokenPriceInUSD),s=i?r.C.bigNumber(e).minus(a):r.C.bigNumber(e);this.handleChangeAmount(t,s.gt(0)?s.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,i.dy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(t,e){c.nY.clearError(),"sourceToken"===t?c.nY.setSourceTokenAmount(e):c.nY.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){let t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,n=o||t||e||this.inputError;return(0,i.dy)` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${o}
        .disabled=${n}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){c.nY.switchTokens()}async onSwapPreview(){let t=l.R.state.activeChain;this.fetchError&&await c.nY.swapTokens(),d.X.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:s.AccountController.state.preferredAccountTypes?.[t]===g.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),a.RouterController.push("SwapPreview")}async handleSwapParameters(){if(this.initialParams){if(!c.nY.state.initialized){let t=new Promise(t=>{let e=c.nY.subscribeKey("initialized",o=>{o&&(e?.(),t())})});await t}await this.setSwapParameters(this.initialParams)}}async setSwapParameters({amount:t,fromToken:e,toToken:o}){if(!c.nY.state.tokens||!c.nY.state.myTokensWithBalance){let t=new Promise(t=>{let e=c.nY.subscribeKey("myTokensWithBalance",o=>{o&&o.length>0&&(e?.(),t())});setTimeout(()=>{e?.(),t()},5e3)});await t}let i=[...c.nY.state.tokens||[],...c.nY.state.myTokensWithBalance||[]];if(e){let t=i.find(t=>t.symbol.toLowerCase()===e.toLowerCase());t&&c.nY.setSourceToken(t)}if(o){let t=i.find(t=>t.symbol.toLowerCase()===o.toLowerCase());t&&c.nY.setToToken(t)}t&&!isNaN(Number(t))&&c.nY.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:e,initializeSwapState:o}){this.caipAddress!==t&&(this.caipAddress=t,e&&c.nY.resetState(),o&&c.nY.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:e,initializeSwapState:o}){this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,e&&c.nY.resetState(),o&&c.nY.initializeState())}};P.styles=I,A([(0,n.Cb)({type:Object})],P.prototype,"initialParams",void 0),A([(0,n.SB)()],P.prototype,"interval",void 0),A([(0,n.SB)()],P.prototype,"detailsOpen",void 0),A([(0,n.SB)()],P.prototype,"caipAddress",void 0),A([(0,n.SB)()],P.prototype,"caipNetworkId",void 0),A([(0,n.SB)()],P.prototype,"initialized",void 0),A([(0,n.SB)()],P.prototype,"loadingQuote",void 0),A([(0,n.SB)()],P.prototype,"loadingPrices",void 0),A([(0,n.SB)()],P.prototype,"loadingTransaction",void 0),A([(0,n.SB)()],P.prototype,"sourceToken",void 0),A([(0,n.SB)()],P.prototype,"sourceTokenAmount",void 0),A([(0,n.SB)()],P.prototype,"sourceTokenPriceInUSD",void 0),A([(0,n.SB)()],P.prototype,"toToken",void 0),A([(0,n.SB)()],P.prototype,"toTokenAmount",void 0),A([(0,n.SB)()],P.prototype,"toTokenPriceInUSD",void 0),A([(0,n.SB)()],P.prototype,"inputError",void 0),A([(0,n.SB)()],P.prototype,"gasPriceInUSD",void 0),A([(0,n.SB)()],P.prototype,"fetchError",void 0),P=A([(0,h.Mo)("w3m-swap-view")],P);var B=(0,i.iv)`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`,D=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let R=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=c.nY.state.approvalTransaction,this.swapTransaction=c.nY.state.swapTransaction,this.sourceToken=c.nY.state.sourceToken,this.sourceTokenAmount=c.nY.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=c.nY.state.sourceTokenPriceInUSD,this.toToken=c.nY.state.toToken,this.toTokenAmount=c.nY.state.toTokenAmount??"",this.toTokenPriceInUSD=c.nY.state.toTokenPriceInUSD,this.caipNetwork=l.R.state.activeCaipNetwork,this.balanceSymbol=s.AccountController.state.balanceSymbol,this.gasPriceInUSD=c.nY.state.gasPriceInUSD,this.inputError=c.nY.state.inputError,this.loadingQuote=c.nY.state.loadingQuote,this.loadingApprovalTransaction=c.nY.state.loadingApprovalTransaction,this.loadingBuildTransaction=c.nY.state.loadingBuildTransaction,this.loadingTransaction=c.nY.state.loadingTransaction,this.unsubscribe.push(s.AccountController.subscribeKey("balanceSymbol",t=>{this.balanceSymbol!==t&&a.RouterController.goBack()}),l.R.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),c.nY.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toToken=t.toToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&a.RouterController.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){c.nY.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return(0,i.dy)`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{c.nY.getApprovalLoadingState()||c.nY.getTransaction()},1e4)}templateSwap(){let t=`${h.Hg.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,e=`${h.Hg.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,n=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),r=h.Hg.formatNumberToLocalString(o),a=h.Hg.formatNumberToLocalString(n),s=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return(0,i.dy)`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${s}
            ?disabled=${s}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?(0,i.dy)`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){a.RouterController.goBack()}onSendTransaction(){this.approvalTransaction?c.nY.sendTransactionForApproval(this.approvalTransaction):c.nY.sendTransactionForSwap(this.swapTransaction)}};R.styles=B,D([(0,n.SB)()],R.prototype,"interval",void 0),D([(0,n.SB)()],R.prototype,"detailsOpen",void 0),D([(0,n.SB)()],R.prototype,"approvalTransaction",void 0),D([(0,n.SB)()],R.prototype,"swapTransaction",void 0),D([(0,n.SB)()],R.prototype,"sourceToken",void 0),D([(0,n.SB)()],R.prototype,"sourceTokenAmount",void 0),D([(0,n.SB)()],R.prototype,"sourceTokenPriceInUSD",void 0),D([(0,n.SB)()],R.prototype,"toToken",void 0),D([(0,n.SB)()],R.prototype,"toTokenAmount",void 0),D([(0,n.SB)()],R.prototype,"toTokenPriceInUSD",void 0),D([(0,n.SB)()],R.prototype,"caipNetwork",void 0),D([(0,n.SB)()],R.prototype,"balanceSymbol",void 0),D([(0,n.SB)()],R.prototype,"gasPriceInUSD",void 0),D([(0,n.SB)()],R.prototype,"inputError",void 0),D([(0,n.SB)()],R.prototype,"loadingQuote",void 0),D([(0,n.SB)()],R.prototype,"loadingApprovalTransaction",void 0),D([(0,n.SB)()],R.prototype,"loadingBuildTransaction",void 0),D([(0,n.SB)()],R.prototype,"loadingTransaction",void 0),R=D([(0,h.Mo)("w3m-swap-preview-view")],R),o(64349),o(95137),o(23805),o(18360),o(5680);var Y=o(84249),j=o(3874),E=o(57116),U=(0,i.iv)`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`,N=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let O=class extends i.oi{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let t=this.amount&&this.price?r.C.multiply(this.price,this.amount)?.toFixed(3):null;return(0,i.dy)`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?(0,i.dy)`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${j.H.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?(0,i.dy)`<wui-text variant="small-400" color="fg-200">
                  ${j.H.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?(0,i.dy)`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?(0,i.dy)`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};O.styles=[Y.ET,Y.ZM,U],N([(0,n.Cb)()],O.prototype,"imageSrc",void 0),N([(0,n.Cb)()],O.prototype,"name",void 0),N([(0,n.Cb)()],O.prototype,"symbol",void 0),N([(0,n.Cb)()],O.prototype,"price",void 0),N([(0,n.Cb)()],O.prototype,"amount",void 0),N([(0,n.SB)()],O.prototype,"visible",void 0),N([(0,n.SB)()],O.prototype,"imageError",void 0),O=N([(0,E.M)("wui-token-list-item")],O);var L=(0,i.iv)`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`,z=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let M=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.targetToken=a.RouterController.state.data?.target,this.sourceToken=c.nY.state.sourceToken,this.sourceTokenAmount=c.nY.state.sourceTokenAmount,this.toToken=c.nY.state.toToken,this.myTokensWithBalance=c.nY.state.myTokensWithBalance,this.popularTokens=c.nY.state.popularTokens,this.searchValue="",this.unsubscribe.push(c.nY.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance}))}updated(){let t=this.renderRoot?.querySelector(".suggested-tokens-container");t?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));let e=this.renderRoot?.querySelector(".tokens");e?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let t=this.renderRoot?.querySelector(".suggested-tokens-container"),e=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),e?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return(0,i.dy)`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){"sourceToken"===this.targetToken?c.nY.setSourceToken(t):(c.nY.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&c.nY.swapTokens()),a.RouterController.goBack()}templateSearchInput(){return(0,i.dy)`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue),n=this.filterTokensWithText(e,this.searchValue);return(0,i.dy)`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${o?.length>0?(0,i.dy)`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map(t=>{let e=t.symbol===this.sourceToken?.symbol||t.symbol===this.toToken?.symbol;return(0,i.dy)`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${t.symbol}"
                      name=${t.name}
                      ?disabled=${e}
                      symbol=${t.symbol}
                      price=${t?.price}
                      amount=${t?.quantity?.numeric}
                      imageSrc=${t.logoUri}
                      @click=${()=>{e||this.onSelectToken(t)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${n?.length>0?n.map(t=>(0,i.dy)`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${t.symbol}"
                    name=${t.name}
                    symbol=${t.symbol}
                    imageSrc=${t.logoUri}
                    @click=${()=>this.onSelectToken(t)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let t=c.nY.state.suggestedTokens?c.nY.state.suggestedTokens.slice(0,8):null;return t?(0,i.dy)`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map(t=>(0,i.dy)`
            <wui-token-button
              text=${t.symbol}
              imageSrc=${t.logoUri}
              @click=${()=>this.onSelectToken(t)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){let t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",h.kj.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",h.kj.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){let t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",h.kj.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",h.kj.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter(t=>`${t.symbol} ${t.name} ${t.address}`.toLowerCase().includes(e.toLowerCase()))}};M.styles=L,z([(0,n.SB)()],M.prototype,"interval",void 0),z([(0,n.SB)()],M.prototype,"targetToken",void 0),z([(0,n.SB)()],M.prototype,"sourceToken",void 0),z([(0,n.SB)()],M.prototype,"sourceTokenAmount",void 0),z([(0,n.SB)()],M.prototype,"toToken",void 0),z([(0,n.SB)()],M.prototype,"myTokensWithBalance",void 0),z([(0,n.SB)()],M.prototype,"popularTokens",void 0),z([(0,n.SB)()],M.prototype,"searchValue",void 0),M=z([(0,h.Mo)("w3m-swap-select-token-view")],M)},32567:function(t,e,o){var i=o(31133),n=o(84927),r=o(7574),a=o(86777),s=o(89512),l=o(92413),c=(0,i.iv)`
  :host {
    width: 100%;
    display: block;
  }
`,u=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let p=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.f.state.open,this.unsubscribe.push(a.RouterController.subscribeKey("view",()=>{r.f.hide()}),s.I.subscribeKey("open",t=>{t||r.f.hide()}),r.f.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),r.f.hide()}render(){return(0,i.dy)`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return(0,i.dy)`<slot></slot> `}onMouseEnter(){let t=this.getBoundingClientRect();this.open||r.f.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||r.f.hide()}};p.styles=[c],u([(0,n.Cb)()],p.prototype,"text",void 0),u([(0,n.SB)()],p.prototype,"open",void 0),u([(0,l.Mo)("w3m-tooltip-trigger")],p)},92815:function(t,e,o){var i=o(31133),n=o(84927),r=o(7574),a=o(92413);o(96277),o(4594),o(44732);var s=(0,i.iv)`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,l=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let c=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.open=r.f.state.open,this.message=r.f.state.message,this.triggerRect=r.f.state.triggerRect,this.variant=r.f.state.variant,this.unsubscribe.push(r.f.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;let t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,(0,i.dy)`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};c.styles=[s],l([(0,n.SB)()],c.prototype,"open",void 0),l([(0,n.SB)()],c.prototype,"message",void 0),l([(0,n.SB)()],c.prototype,"triggerRect",void 0),l([(0,n.SB)()],c.prototype,"variant",void 0),l([(0,a.Mo)("w3m-tooltip"),(0,a.Mo)("w3m-tooltip")],c)},80843:function(t,e,o){o(42653)},42653:function(t,e,o){var i=o(31133),n=o(84927),r=o(57116),a=(0,i.iv)`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,s=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let l=class extends i.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,(0,i.dy)`<slot></slot>`}};l.styles=[a],s([(0,n.Cb)()],l.prototype,"width",void 0),s([(0,n.Cb)()],l.prototype,"height",void 0),s([(0,n.Cb)()],l.prototype,"borderRadius",void 0),s([(0,n.Cb)()],l.prototype,"variant",void 0),s([(0,r.M)("wui-shimmer")],l)}}]);