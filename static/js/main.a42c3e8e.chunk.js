(this["webpackJsonpnft-minter"]=this["webpackJsonpnft-minter"]||[]).push([[0],{228:function(e,t,n){},229:function(e,t,n){},253:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},267:function(e,t){},269:function(e,t){},271:function(e,t){},275:function(e,t){},302:function(e,t){},304:function(e,t){},318:function(e,t){},320:function(e,t){},351:function(e,t){},353:function(e,t){},445:function(e,t){},446:function(e,t){},536:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),s=n(210),i=n.n(s),u=(n(228),n(229),n(14)),o=n.n(u),p=n(24),c=n(47);n(116).config();var d=n(233),l=function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.pinata.cloud/pinning/pinJSONToIPFS",e.abrupt("return",d.post("https://api.pinata.cloud/pinning/pinJSONToIPFS",t,{headers:{pinata_api_key:"f487c62a649983bc0968",pinata_secret_api_key:"d6c1f603c5a7c985a7682f94c076bad3556f728726078985c19188d8c5e2b103"}}).then((function(e){return{success:!0,pinataUrl:"https://gateway.pinata.cloud/ipfs/"+e.data.IpfsHash}})).catch((function(e){return console.log(e),{success:!1,message:e.message}})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=n(11);n(116).config();var m=n(253),b="0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE",f=(0,n(537).createAlchemyWeb3)("https://polygon-mainnet.g.alchemy.com/v2/l-smnNq4brbphALj4kaXndv3vpI4UPnp"),h=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return t=e.sent,n={status:"\ud83d\udc46\ud83c\udffd Click the button above to mint.",address:t[0]},e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 12:e.next=15;break;case 14:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=17;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((t=e.sent).length>0)){e.next=9;break}return e.abrupt("return",{address:t[0],status:"\ud83d\udc46\ud83c\udffd Click the button above to mint."});case 9:return e.abrupt("return",{address:"",status:"\ud83e\udd8a Connect to Metamask using the top right button."});case 10:e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{address:"",status:"\ud83d\ude25 "+e.t0.message});case 15:e.next=18;break;case 17:return e.abrupt("return",{address:"",status:Object(y.jsx)("span",{children:Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]})})});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();var v=function(){var e=Object(p.a)(o.a.mark((function e(t,n,a){var r,s,i,u,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.trim()&&""!=n.trim()&&""!=a.trim()){e.next=2;break}return e.abrupt("return",{success:!1,status:"Didn't work. Dunno"});case 2:return(r=new Object).name=n,r.image=t,r.description=a,e.next=8,l(r);case 8:if((s=e.sent).success){e.next=11;break}return e.abrupt("return",{success:!1,status:"\ud83d\ude22 Something went wrong while uploading your tokenURI."});case 11:return i=s.pinataUrl,e.next=14,new f.eth.Contract(m,b);case 14:return window.contract=e.sent,u={to:b,from:window.ethereum.selectedAddress,data:window.contract.methods.mintNFT(window.ethereum.selectedAddress,i).encodeABI()},e.prev=16,e.next=19,window.ethereum.request({method:"eth_sendTransaction",params:[u]});case 19:return p=e.sent,e.abrupt("return",{success:!0,status:"\u2705 Check out your transaction on Poly: https://polygonscan.com/tx/"+p});case 23:return e.prev=23,e.t0=e.catch(16),e.abrupt("return",{success:!1,status:"\ud83d\ude25 Something went wrong: "+e.t0.message});case 26:case"end":return e.stop()}}),e,null,[[16,23]])})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(""),u=Object(c.a)(i,2),d=u[0],l=u[1],m=Object(a.useState)(!1),b=Object(c.a)(m,2),f=b[0],j=b[1],x=Object(a.useState)("Sriram Bevo"),T=Object(c.a)(x,2),g=T[0],k=T[1],O=Object(a.useState)("A Sriram Bevo. Legendary"),M=Object(c.a)(O,2),I=M[0],S=M[1],F=Object(a.useState)("https://gateway.pinata.cloud/ipfs/QmaVuhM7dkjxoe6mMVp1y5LRio4vef1vgHVbXsvDYxoRqs"),A=Object(c.a)(F,2),C=A[0],B=A[1];function N(){window.ethereum?window.ethereum.on("accountsChanged",(function(e){e.length>0?(s(e[0]),l("\ud83d\udc46\ud83c\udffd Write a message in the text-field above.")):(s(""),l("\ud83e\udd8a Connect to Metamask using the top right button."))})):l(Object(y.jsxs)("p",{children:[" ","\ud83e\udd8a"," ",Object(y.jsx)("a",{target:"_blank",href:"https://metamask.io/download.html",children:"You must install Metamask, a virtual Ethereum wallet, in your browser."})]}))}Object(a.useEffect)(Object(p.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,n=t.address,a=t.status,s(n),l(a),N();case 8:case"end":return e.stop()}}),e)}))),[]);var _=function(){var e=Object(p.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,l(t.status),s(t.address);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(C,g,I);case 2:t=e.sent,n=t.success,a=t.status,l(a),n&&(k(""),S(""),B(""),j(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"Minter",children:[Object(y.jsx)("button",{id:"walletButton",onClick:_,children:r.length>0?"Connected: "+String(r).substring(0,6)+"..."+String(r).substring(38):Object(y.jsx)("span",{children:"Connect Wallet"})}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{id:"title",children:"BevoPunk Minter!"}),Object(y.jsx)("p",{children:'Simply press "Mint NFT" to mint a BevoPunk!'}),f?Object(y.jsx)("img",{style:{width:"50%"},src:"bevoNFT4.png"}):Object(y.jsx)("img",{style:{width:"50%"},src:"bevoNFT5.png"}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{id:"mintButton",onClick:P,children:"Mint NFT"}),Object(y.jsx)("p",{id:"status",style:{color:"blue"},children:d})]})};var x=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(j,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,541)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(x,{})}),document.getElementById("root")),T()}},[[536,1,2]]]);
//# sourceMappingURL=main.a42c3e8e.chunk.js.map