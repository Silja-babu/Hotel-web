(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[696],{84517:(e,s,i)=>{i.d(s,{Z:()=>H,w:()=>R});var n=i(90624),r=i(82145),t=(i(10810),i(79186)),o=i(4187),a=i(43810),l=i(30789),d=i(52720),u=i(39536),c=i(69703),g=i(69526),p=i(25198),h=i.n(p),m=i(44782),f=i(4359),b=i(29390),k=i(74733),v=i(18639),x=i(41833),w=i(56276),Z=i(12062),y=i(1988),C=i(25780),_=i(80701),E=i(54547),B=i(28011),T=i(29526);const A=r.ZP`
    fragment YnraCardFields on ReviewSuggestion {
        suggestedBusiness {
            encid
            name
            alias
            reviewCount
            primaryPhoto {
                encid
                photoUrl {
                    url(size: SQUARE_LARGE)
                }
            }
            reviewDraftForLoggedInUser {
                encid
                rating
            }
            categoryGroups {
                isPLAH
            }
        }
        uuid
        displayedMessages {
            htmlMessage
            icon {
                url
            }
        }
        businessPhotos {
            encid
            photoUrl {
                url(size: SQUARE_90)
            }
        }
    }
`,D=r.ZP`
    fragment YnraCardRootFields on Query {
        csrfTokenBlockSuggestion: csrfToken(scope: "/block_review_suggestion")
        csrfTokenImpressions: csrfToken(scope: "/review_suggestions/suggestion_impression/1.0.0")
    }
`,R=(e,s)=>{const{suggestedBusiness:i,uuid:n,displayedMessages:r,businessPhotos:t}=e;h()(i&&n,"Fields should be defined for YNRA suggestion");const{encid:o,name:a,alias:l,reviewCount:d,primaryPhoto:u,reviewDraftForLoggedInUser:c,categoryGroups:g}=i;h()(g,"Business should have defined categoryGroups"),h()(null!==d,"Business should have a defined review count");const{isPLAH:p}=g,m=(t??[]).map((e=>e?.photoUrl?.url)).filter(Boolean),{csrfTokenBlockSuggestion:b,csrfTokenImpressions:k}=s;return h()(b&&k,"Csrf tokens should be defined for YNRA"),{businessEncid:o,businessName:a,businessAlias:l,reviewCount:d,initialRating:c?c.rating:null,photoUrl:u?.photoUrl?.url??void 0,uuid:n,displayedMessages:r.map((e=>{let{htmlMessage:s,icon:i}=e;return{htmlMessage:s,iconUrl:i?.url??null}})),userUploadedPhotosUrls:m,showQuestionEntrypoint:Boolean(p)&&!(0,f.xE)(o),blockSuggestionCsrfToken:b,impressionCsrfToken:k}};var U={name:"xdvdnl",styles:"margin-top:auto"},L={name:"8k3ukw",styles:"min-width:0;flex:1;display:flex;flex-direction:column;justify-content:flex-start"},S={name:"nl1qpq",styles:"height:60px;width:60px"},M={name:"1bjrbtb",styles:"flex:0 0 auto;vertical-align:middle;width:200px"};const P=e=>{let{businessEncid:s,businessName:i,businessAlias:r,reviewCount:p,initialRating:f,photoUrl:A,uuid:D,displayedMessages:R,reviewOrigin:P,blockSuggestionCsrfToken:H,impressionCsrfToken:N,onDismiss:O,userUploadedPhotosUrls:$=[],showQuestionEntrypoint:I=!1,onReminderClick:F,hasDarkBackground:G=!1}=e;const Q=(0,g.CH)(),z=(0,o.ZP)({clickCallback:(e,i)=>{(0,o.Gc)((0,m.O)({businessEncid:s,rating:f,uuid:D,reviewOrigin:P}),i)},shouldHandleEvent:e=>!(e.target instanceof HTMLInputElement||e.target instanceof HTMLAnchorElement||e.target instanceof HTMLSpanElement)}),Y=(0,y.HM)({uuid:D,impressionCsrfToken:N});let j;return j=f?(0,T.tZ)(E.Z,{reviewCount:p,initialRating:f,displayedMessages:R,hasDarkBackground:G}):I?(0,T.tZ)(b.Z,{businessEncid:s,reviewOrigin:P,hasDarkBackground:G,textStyles:(0,Z.f)((0,l.LV)(x.I.core.body2TextRegular))}):(0,T.tZ)(B.Z,{businessEncid:s,uuid:D,reviewOrigin:P,reviewCount:p,displayedMessages:R,hasDarkBackground:G}),(0,T.BX)(t.Z,{css:[(0,u.css)("display:flex;flex-direction:row;border-radius:",(0,d.r$)(.5),"px;cursor:pointer;height:100%;min-height:200px;background-color:",x.J.core.grayscaleWhite.get({alpha:G?.15:1}),";position:relative;box-sizing:border-box;",""),(0,Z.f)((0,u.css)("min-height:initial;padding:",(0,d.r$)(2),"px;","")),"",""],tagRef:Y,bordered:!G,borderColor:x.J.core.grayscaleSilverDark,textAlign:"left","data-testid":"ynra-card",...z,children:[(0,T.tZ)(t.Z,{css:[M,(0,Z.f)(S),"",""],children:(0,T.tZ)("img",{src:A||w,alt:(0,c.ag)("Photo of %{businessName}",{businessName:i}).toString(),css:[(0,u.css)("border-top-left-radius:",(0,d.r$)(.5),"px;border-bottom-left-radius:",(0,d.r$)(.5),"px;object-fit:cover;width:calc(100% + 2px);height:calc(100% + 2px);margin-left:-1px;margin-top:-1px;",""),(0,Z.f)((0,u.css)("border-radius:",(0,d.r$)(.5),"px;","")),"",""]})}),(0,T.BX)(t.Z,{marginBottom:1,paddingLeft:2,paddingRight:1,css:L,children:[(0,T.tZ)(_.Z,{businessName:i,businessAlias:r,hasDarkBackground:G}),(0,T.tZ)(t.Z,{marginBottom:F?2:0,children:j}),!F&&$&&$.length>0&&(0,T.tZ)(k.Z,{css:[(0,u.css)("margin-top:",(0,d.r$)(2),"px;",""),(0,Z.f)((0,u.css)("margin-top:",(0,d.r$)(1),"px;","")),"",""],children:$.map((e=>(0,T.tZ)(v.Z,{gutter:1,children:(0,T.tZ)("img",{alt:"",width:60,height:60,src:e,css:[(0,u.css)("width:60px;height:60px;border-radius:",(0,d.r$)(.5),"px;margin-right:10px;",""),"",""]})},e)))}),Boolean(F)&&(0,T.tZ)(t.Z,{css:U,children:(0,T.tZ)(a.Z,{type:"link",size:"small",onClick:e=>{h()(F,"This event handler won’t be called unless onReminderClick is supplied"),e.preventDefault(),Q.logEvent(["contributions","review_solicitation_reminder","0.1"],{business_id_encid:s}),F({businessName:i}),O&&O()},children:(0,T.tZ)(n.cC,{id:(0,c.ag)("Remind me to review later",{}).toString(),message:(0,c.ag)("Remind me to review later",{}).toString()})})})]}),H&&O&&(0,T.tZ)(C.Z,{businessEncid:s,blockSuggestionCsrfToken:H,onDismiss:O})]})};P.fragments={query:A,root:D};const H=P}}]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_lib-yelp-react-component-ynra-37.0.10.yji-8eed8570fa3ff7e7c0be.mjs.map