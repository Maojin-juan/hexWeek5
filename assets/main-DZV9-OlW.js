(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(n){if(n.ep)return;n.ep=!0;const d=e(n);fetch(n.href,d)}})();const E=document.querySelectorAll(".editBtn"),L=document.getElementById("viewAdminModal"),m=document.getElementById("editAdminModal");E.forEach(t=>{t.addEventListener("click",()=>{m.classList.remove("hidden"),m.classList.add("flex"),L.classList.add("hidden")})});const u=(t,o)=>{t.classList[o==="open"?"remove":"add"]("hidden"),t.classList[o==="open"?"add":"remove"]("flex")},f=t=>u(document.getElementById(t),"open"),g=t=>u(t,"close");function y(t,o){document.getElementById(t).addEventListener("click",()=>f(o)),document.querySelectorAll(".closeModalBtn").forEach(e=>{e.addEventListener("click",()=>g(e.closest(".modal")))})}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("tbody tr").forEach((e,i)=>{const n=i+1;e.setAttribute("data-id",n),e.querySelectorAll("button.viewAdminBtn, button.editAdminBtn").forEach(d=>{d.setAttribute("data-id",n)})});const o=e=>{const i=e.classList.contains("editAdminBtn")?"edit":"view",n=e.closest("tr"),d=`#${n.getAttribute("data-id")}`,c=n.children[1].textContent,a=n.children[2].textContent,s=document.getElementById(`${i}AdminId`),l=document.getElementById(`${i}AdminName`),r=document.getElementById(`${i}AdminEmail`);s&&l&&r?(i==="view"?(s.textContent=d,l.textContent=c,r.textContent=a):(s.value=d,l.value=c,r.value=a),f(`${i}AdminModal`)):console.error(`Cannot find modal elements for prefix: ${i}`)};document.querySelectorAll("button.viewAdminBtn, button.editAdminBtn").forEach(e=>{e.addEventListener("click",()=>o(e))})});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("hiddenDiv");document.querySelector(".toggleBtn").addEventListener("click",()=>{const e=t.classList.contains("max-h-0");t.classList.toggle("max-h-0",!e),t.classList.toggle("opacity-0",!e),t.classList.toggle("max-h-screen",e),t.classList.toggle("opacity-100",e)})});document.addEventListener("click",t=>{["newAdminModal","editAdminModal"].forEach(o=>{const e=document.getElementById(o);e&&!e.contains(t.target)&&g(o)})});function v(t){document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(`#${t} .modal-content`),e=document.querySelector(`#${t} .modalHeader`);o&&e&&o.addEventListener("scroll",function(){o.scrollTop>0?e.classList.add("border-b"):e.classList.remove("border-b")})})}y("newAdminBtn","newAdminModal");["newAdminModal","editAdminModal"].forEach(v);
