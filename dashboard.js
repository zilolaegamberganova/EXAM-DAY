const user = JSON.parse(localStorage.getItem("user"));
if (!user) window.location.href = "login.html";
document.querySelector(".userName").textContent = user.user.name;

const URL = "https://api.restful-api.dev/collections/products/objects";
const KEY = "2d1d86ae-72cd-4952-a797-fd2af18cff82";
const list = document.querySelector(".list");
const form=document.querySelector('.form')


async function getData() {
  const res = await fetch(URL, { headers: { "x-api-key": KEY } });
  const data=await res.json();
  list.innerHTML=""
  
 
    
  };

getData();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const obj = {
    name: document.querySelector(".productname").value,
    data: { price: document.querySelector(".price").value }
  };
  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": KEY },
    body: JSON.stringify(obj)
  });
  form.reset();
  getData();
});

document.querySelector("#logoutBtn").onclick = () => {
  localStorage.clear();
  window.location.href = "login.html";
};