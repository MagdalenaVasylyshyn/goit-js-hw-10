import"./assets/modulepreload-polyfill-ec808ebb.js";import{i}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),s=document.querySelectorAll('input[name="state"]');s.length>0&&(s[0].checked=!0);o.addEventListener("submit",r);function r(e){e.preventDefault();const n=o.querySelector('input[name="state"]:checked').value,t=o.delay.value;new Promise((l,c)=>{setTimeout(()=>{n==="fulfilled"?l(t):c(t)},t)}).then(a).catch(m)}function a(e){i.show({message:`✅ Fulfilled promise in ${e}ms`,color:"green",position:"topRight",close:!1})}function m(e){i.show({message:`❌ Rejected promise in ${e}ms`,color:"red",position:"topRight",close:!1})}
//# sourceMappingURL=commonHelpers2.js.map