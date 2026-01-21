const userName = 'Rohit';
const emailid  = 'Mr.developer2003@gmail.com';
const mobileNumber = 9818472776;
const age = '10/08/2003';

const user1 = (userName,emailid,mobileNumber)=>{ 
    console.log(`Hey ${userName} Your Email id ${emailid} and Your Mobile Number ${mobileNumber}`);
}

 user1(userName,mobileNumber,emailid)

 const isAbove18 = () => {
    return age >=18 
 }

 
 function newFeatureAdd() {
    console.log(`This is new feature`);
    console.log(`This is new feature A`);
 }

 function generateOTP(mobileNumber){
    let otp = '';
    for(let i=0; i<4; i++){
        otp+=Math.floor(Math.random()*10);
    }
    console.log(`OTP Sent at ${mobileNumber}:`,otp);
 }

 generateOTP(9027343423);
  
