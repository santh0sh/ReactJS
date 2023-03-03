var x=10
var y=x   call by value (copy)- immutable  (int/bool/string)
y=20
console.log(x)


var obj1={x:10}
var obj2=obj1         {},[], function   - call by ref -  mutable
obj2.x=20
console.log(obj1.x)



store={} 
obj2=Object.assign({},obj1)  //clone   Immutable
obj2.x=20
obj1.x ?

const  obj2={...obj1}


state={}
props    to child    copy is sent to child


{company="BOA" }


username/password: login
const ssotoken=response.headers['sso-token]

if (ssotoken?<Dashboard/>:<Login>)

axios.post("https://api.bankofamerica.com/customers,{"ssotoken":ssotoken,'content_type': 'application/json'})
.then (response =>{
    this.setState(data=response.data)
})