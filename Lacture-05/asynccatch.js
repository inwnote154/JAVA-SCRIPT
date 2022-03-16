function yayOrNay(){
    return new Promise((resolve,reject)=>{
        const val = Math.round(Math.random()*1)
        //0 or 1
        val ? resolve("Lucky!!") : reject("Nope ")
    })
}
async function msg(){
    try{
        const bsg = await yayOrNay()
        console.log(bsg)
    }catch (err){
        console.log(err)
    }
}
msg()
msg()
msg()
msg()
msg()
msg()
msg()
msg()
