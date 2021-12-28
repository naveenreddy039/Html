/*UC4*/
let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return createEmployeePayrollJSON();
}

const createInnerHtml=() => {
    const headerHtml="<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>startDate</th><th>Action</th>";
                    /*if(empPayrollList.length==0) return;*/
            let innerHtml=`${headerHtml}`;
                    let empPayrollList=createEmployeePayrollJSON();
                    for(const empPayrollData of empPayrollList) { 
                        innerHtml=`${headerHtml}

                        <tr>
                            <td>
                                <img class="profile" id='image1' src="${empPayrollData._profilePic}">

                            </td>
                            <td>${empPayrollData._name}</td>
                            <td>${empPayrollData._gender}</td>
                            <td>${getDeptHtml(empPayrollData._department)}</td>
                            <td>${empPayrollData._salary}</td>
                            <td>${empPayrollData._startDate}</td>
                            <td>
                            <button type="Remove">Remove</button>
                            </td>
                        </tr>
                        `;
                    }
    
                    
document.querySelector('#table-display').innerHTML=innerHtml;
    
}

const getDeptHtml = (deptList) => {
    let deptHtml='';
    for (const dept of deptList) {
        deptHtml=`${deptHtml}
        <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
/*UC5*/
const createEmployeePayrollJSON=() => {
    let empPayrollListLocal=[
    {
        _id='1',
        _name:'narasimha',
        _gender:'male',
        _department:[
            'Engineering',
            'HR'
        ],
        _salary:'3000000',
        _startDate:'29 Oct 2019',
        _profilePic:'../assets/profile-images/Ellipse -2.png'
    },
    {
        _id='2',
        _name:'Navya',
        _gender:'female',
        _department:[
            'Sales'
        ],
        _salary:'40000000',
        _startDate:'29 Oct 2019',
        _profilePic:'../assets/profile-images/Ellipse 1.png'
    }
    ];
    return empPayrollListLocal;
}
const remove=(node) => {
    let empPayrollData=empPayrollList.find(empData._id==node._id);
    if(empPayrollData) return;
}
