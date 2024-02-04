
document.addEventListener('DOMContentLoaded', ()=>{
    const helpTextList = [
        {
            id: "home",
            text: "You are already on home"
        },
        {
            id: "about",
            text: "Get the info about us"
        },
        {
            id: "contact",
            text: "Connect with us"
        }
    ]

    const helpTextElm = document.querySelector('.help-text');

    for (i = 0; i<helpTextList.length; i++){
        let btn = document.querySelector('#' + helpTextList[i].id);
        // console.log(btn);

        const helpTextMaker = (j)=>{
            return ()=>{
                // console.log(j);
                // console.log(helpTextList[j].text);
                helpTextElm.textContent = helpTextList[j].text;
            }
        }

        btn.addEventListener('mouseenter', helpTextMaker(i));
        btn.addEventListener('mouseleave', ()=> helpTextElm.textContent = '')

        // btn.addEventListener('mouseleave', ()=> {
        //     helpTextElm.textContent = '';
        // })
    }

})