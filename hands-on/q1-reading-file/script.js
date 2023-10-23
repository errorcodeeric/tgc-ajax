async function loadData(){
    await data = axios.get('data.txt');
    return data
}

document.querySelector('#load-btn').addEventListener('click',
    async function(){
        await loadData();
    }

)