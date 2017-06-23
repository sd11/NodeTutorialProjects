const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
}, {
    id: 2,
    name: 'Jemima',
    schoolId: 999
}];
const grades = [{
    id: 1,
    schoolId: 101,
    grade: 60
}, {
    id: 2,
    schoolId: 999,
    grade: 50
},{
    id: 3,
    schoolId: 101,
    grade: 70
}];
const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if(user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}.`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if (grades.length>0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        console.log('AVERAGE: ',average);
        return `${user.name} has a ${average}% in the class`;
    });
};

const getStatusAlt = async (userId) => {
    const user = await getUser(userId); //must use await inside async
    const grades = await getGrades(user.schoolId);
    let average = 0;
    if (grades.length>0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }
    // console.log('AVERAGE: ',average);
    return `${user.name} has a ${average}% in the class`;
    // console.log(user, grades);
};

getStatusAlt(1).then((r) => {console.log(r);}).catch((e)=>{console.log(e)});

// getUser(2).then((result)=>{
//     console.log('GET USER:', result);
// }).catch((e) => {
//     console.log(e);
// });

// getGrades(101).then((grades)=>{
//     console.log('GET GRADES:', grades);
// }).catch((e) => {
//     console.log(e);
// });

// getStatus(1).then((status)=>{
//     console.log('GET Status:', status);
// }).catch((e) => {
//     console.log(e);
// });


