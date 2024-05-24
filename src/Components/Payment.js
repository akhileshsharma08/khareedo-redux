export default async function handlePayment(){

    const data = await fetch("http://localhost:3001/razorpay",{
        method:'POST'
    }).then((t)=>t.json())


console.log(data)

//optons

const options={
    key:"",
    currency:data.currency,
    amount:data.amount,
    description:"wallet transaction",
    order_id:data.id,
    handler:function(response){
        alert("payment id"+response.razorpay_payment_id)
        alert("order id"+response.razorpay_orderid_id)
    },prefill:{
        name:"akhilesh",
        email:"its.akhilesh23@gmail.com",
        contact:"8865029818"
    }
    
}

const paymntObject=new window.Razorpay(options)
paymntObject.open()




}