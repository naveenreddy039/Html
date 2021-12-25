//UC2
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#name");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
                }
    });
const salary=document.querySelector("#salary");
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});

});

//UC3
const save=()=>{
    try{
        let EmployeePayrollData=createEmployeePayroll();
    }catch(e){
        return;
    }
}

const createEmployeePayroll=()=>{
    let employeePayRollData=new EmployeePayrollData();
    try{
        employeePayRollData.name=getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayRollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayRollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayRollData.department=getSelectedValues('[name=department]');
    employeePayRollData.salary=getInputValueById('#salary');
    employeePayRollData.note=getInputValueById('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
    employeePayRollData.date=Date.parse(date);
    alert(employeePayRollData.toString());
    return employeePayRollData;
}

const getSelectedValues=(propertyValues) => {
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById=(id) => {
    let value=document.querySelector(id).value;
    return value;
}

const getInputElementValue=(id) => {
    let value=document.getElementById(id).value;
    return value;
}

//UC4
const save=()=>{
    try{
        let EmployeePayrollData=createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

function createAndUpdateStorage(employeePayRollData) {
    let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayRollData);
    }else{
        employeePayrollList=[employeePayRollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(rmployeePayrollList))
}

//UC5
const resetForm=() => {
    setValue('#name',' ');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2020');
}
const unsetSelectedValues=(propertyValue) => {
    let allItems=document.querySelectorAll(propertyValue);
    allItems.forEack(item => {
        item.checked=false;
    });
}
const setTextValue=(id,value) => {
    const element = document.querySelector(id);
    element.textContent=value;
}
const setValue=(id,value) => {
    const element=document.querySelector(id);
    element.value=value;
}