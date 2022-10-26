const btnbar=document.querySelector('#navbar');

const btncloserbar=document.querySelector('.closer');
const dlnav=document.querySelector('.navbackground');
btnbar.addEventListener('click',function(){
    dlnav.style.display='block';
});
btncloserbar.addEventListener('click',function(){
    console.log("dfdfdfd");
    dlnav.style.display='none';
});


/////footer
const imgheader1=document.getElementById('img-header-1');
const imgheader2=document.getElementById('img-header-2');
const imgheader3=document.getElementById('img-header-3');
const imgheaderaction=document.getElementsByClassName('action');
const btntranf1=document.getElementById('btntranf-1');
const btntranf2=document.getElementById('btntranf-2');
const btntranf3=document.getElementById('btntranf-3');
imgheader1.style.display='block';
btntranf1.addEventListener('click',function(){
    imgheader1.style.display='block';
    imgheader2.style.display='none';
    imgheader3.style.display='none';
});
btntranf2.addEventListener('click',function(){
    imgheader1.style.display='none';
    imgheader2.style.display='block';
    imgheader3.style.display='none';
});
btntranf3.addEventListener('click',function(){
    imgheader1.style.display='none';
    imgheader2.style.display='none';
    imgheader3.style.display='block'; 
});
setInterval(function(){
    setTimeout(function(){
        imgheader1.style.display='none';
        imgheader2.style.display='block';
        imgheader3.style.display='none';
    },3000);
    setTimeout(function(){
        imgheader1.style.display='none';
        imgheader2.style.display='none';
        imgheader3.style.display='block';
    },6000);
    setTimeout(function(){
        imgheader1.style.display='block';
        imgheader2.style.display='none';
        imgheader3.style.display='none';
    },9000);
},9000)





