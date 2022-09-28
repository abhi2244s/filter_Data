  //  const search = ()=>{
    //     let input = document.getElementById('input').value.toUpperCase()

    //     let ul = document.getElementById('ul')

    //     let data = ul.getElementsByTagName('li')

    //     for(let i =0 ;i<data.length;i++){
    //         let store = data[i].getElementsByTagName('a')[0]
    //         console.log(store)

    //         if(store){
    //             let textValue = store.textContent || store.innerHTML ;

    //             if(textValue.toUpperCase().indexOf(input)>-1){
    //                 data[i].style.display= ""
    //             }
    //             else{
    //                 data[i].style.display = "none"
    //             }
    //         }
    //     }
    //  }


    const search = ()=>{
        let input = document.getElementById('input').value.toUpperCase()

        let ul  = document.getElementById('ul')

        let li = ul.getElementsByTagName('li')

        for(let i =0 ; i<li.length;i++){
            let store  = li[i].getElementsByTagName('a')[0];

            if(store){
                let text = store.textContent|| store.innerHTML;
                if(text.toUpperCase().indexOf(input)>-1){
                    li[i].style.display = ""
                }else{
                    li[i].style.display = "none"
                }
            }


        }
    }