loadData();
const first=document.getElementsByClassName('container')[0];
const second=document.getElementsByClassName('container')[1];
const third=document.getElementsByClassName('container')[2];
const main=document.getElementsByTagName('main')[0];
async function loadData() {
    let response=await fetch('http://localhost:3030/jsonstore/cookbook');
    let data=await response.json();
    let keys=Object.keys(data);
    console.log(data);
    let obj=data[keys[0]];
    let objKeys=Object.keys(obj);
    let i=0;
    for(let item of objKeys) {
        let myObj=obj[item];
        console.log(myObj);
        if(i>2) {
            let container=document.getElementsByClassName('container')[0];
            container=container.cloneNode(true);
            main.appendChild(container);
            let clone=document.getElementById('replace').cloneNode(true);
            container.addEventListener('click',()=> {
                container.replaceWith(clone);
                clone.style.display='flex';
                clone.setAttribute('id','clone');
                let temp=document.getElementById('clone');
                let img=temp.getElementsByClassName('img')[0];
                img.setAttribute('src',myObj.img);
                temp.getElementsByClassName('header-span')[0].textContent=myObj.name;
                let ingrediant=temp.getElementsByTagName('ul')[0];
                let preperation=temp.getElementsByTagName('ul')[1];
                for(let item of myObj.ingredients) {
                    let li=document.createElement('li');
                    li.textContent=item;
                    ingrediant.appendChild(li)
                }
                for(let item of myObj.preperation) {
                    let li=document.createElement('li');
                    li.textContent=item;
                    preperation.appendChild(li);
                }
            })
        }
        let spans=document.getElementsByClassName('recipe-number');
        let imgs=document.getElementsByClassName('first-img')
        spans[i].textContent=myObj.name;
        imgs[i].setAttribute('src',myObj.img)
        i++;
    }
}
first.addEventListener('click',changeItemsFirst)
second.addEventListener('click',changeItemsSecond);
third.addEventListener('click',changeItemsThird);
async function changeItemsFirst() {
    let replace=document.getElementsByClassName('replace')[0];
    let cloneReplace=replace.cloneNode(true);
    first.replaceWith(cloneReplace);
    cloneReplace.style.display='flex';
    cloneReplace.setAttribute('id','first-replace');
    cloneReplace.classList.remove("replace");
    let container=document.getElementById('first-replace');
    let img=container.getElementsByTagName('img')[0];
    let name=container.getElementsByClassName('header-span')[0];
    let ingredients=container.getElementsByTagName('ul')[0];
    let preperation=container.getElementsByTagName('ul')[1];
    let response=await fetch('http://localhost:3030/jsonstore/cookbook');
    let data=await response.json();
    let obj=data.recipes;
    obj=obj["01"];
    img.src=obj.img;
    name.textContent=obj.name;
    obj=data.details;
    obj=obj['01'];
    console.log(obj);
    let arrIngrediants=obj.ingredients;
    for(let item of arrIngrediants) {
        let ingrediant=document.createElement('li');
        ingrediant.textContent=item;
        ingredients.appendChild(ingrediant);
    }
    obj=data.details;
    obj=obj['01'];
    let arrPreperation=obj.steps;
    for(let item of arrPreperation) {
        let step=document.createElement('li');
        step.textContent=item;
        preperation.appendChild(step);
    }
}
async function changeItemsSecond() {
    let replace=document.getElementsByClassName('replace')[0];
    let cloneReplace=replace.cloneNode(true);
    second.replaceWith(cloneReplace);
    cloneReplace.style.display='flex';
    cloneReplace.setAttribute('id','second-replace');
    cloneReplace.classList.remove("replace");
    let container=document.getElementById('second-replace');
    let img=container.getElementsByTagName('img')[0];
    let name=container.getElementsByClassName('header-span')[0];
    let ingredients=container.getElementsByTagName('ul')[0];
    let preperation=container.getElementsByTagName('ul')[1];
    let response=await fetch('http://localhost:3030/jsonstore/cookbook');
    let data=await response.json();
    let obj=data.recipes;
    obj=obj["02"];
    img.src=obj.img;
    name.textContent=obj.name;
    obj=data.details;
    obj=obj['02'];
    console.log(obj);
    let arrIngrediants=obj.ingredients;
    for(let item of arrIngrediants) {
        let ingrediant=document.createElement('li');
        ingrediant.textContent=item;
        ingredients.appendChild(ingrediant);
    }
    obj=data.details;
    obj=obj['02'];
    let arrPreperation=obj.steps;
    for(let item of arrPreperation) {
        let step=document.createElement('li');
        step.textContent=item;
        preperation.appendChild(step);
    }
}
async function changeItemsThird() {
    let replace=document.getElementsByClassName('replace')[0];
    let cloneReplace=replace.cloneNode(true);
    third.replaceWith(cloneReplace);
    cloneReplace.style.display='flex';
    cloneReplace.setAttribute('id','third-replace');
    cloneReplace.classList.remove("replace");
    let container=document.getElementById('third-replace');
    let img=container.getElementsByTagName('img')[0];
    let name=container.getElementsByClassName('header-span')[0];
    let ingredients=container.getElementsByTagName('ul')[0];
    let preperation=container.getElementsByTagName('ul')[1];
    let response=await fetch('http://localhost:3030/jsonstore/cookbook');
    let data=await response.json();
    let obj=data.recipes;
    obj=obj["03"];
    img.src=obj.img;
    name.textContent=obj.name;
    obj=data.details;
    obj=obj['03'];
    let arrIngrediants=obj.ingredients;
    for(let item of arrIngrediants) {
        let ingrediant=document.createElement('li');
        ingrediant.textContent=item;
        ingredients.appendChild(ingrediant);
    }
    obj=data.details;
    obj=obj['03'];
    let arrPreperation=obj.steps;
    for(let item of arrPreperation) {
        let step=document.createElement('li');
        step.textContent=item;
        preperation.appendChild(step);
    }
}