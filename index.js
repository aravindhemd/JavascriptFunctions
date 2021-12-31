const arr = [13, 1, 5, 8, 6];
const data_set2 = [
    {
        "Name": "Bonnie Jennings",
        "age": 50,
        "occupation": "Driver"
    },
    {
        "Name": "Aysha Mathis",
        "age": 27,
        "occupation": "Teacher"
    },
    {
        "Name": "Tianna Dorsey",
        "age": 35,
        "occupation": "Player"
    },
    {
        "Name": "Fleur Chandler",
        "age": 49,
        "occupation": "Teacher"
    },
    {
        "Name": "Imogen Robinson",
        "age": 60,
        "occupation": "Driver"
    },
    {
        "Name": "Sienna Zuniga",
        "age": 17,
        "occupation": "Athlete"
    },
    {
        "Name": "Kimberley Petty",
        "age": 50,
        "occupation": "Driver"
    },
    {
        "Name": "Elizabeth Donaldson",
        "age": 22,
        "occupation": "Athlete"
    },
    {
        "Name": "Priya Haines",
        "age": 50,
        "occupation": "Athlete"
    },
    {
        "Name": "Claudia Glenn",
        "age": 50,
        "occupation": "Architect"
    }
];

//1.a sort data set 1 by ascending order
const sortFunc = (arr) => {
    let result = [];
    let arr_length = arr.length;
    for (let i = 0; i < arr_length; i++) {

        if (!result.length) {
            result.push(arr[i]);
        } else {
            push_pos = result.length;
            for (let j = 0; j < result.length && j < arr.length; j++) {
                if (arr[i] < result[j]) {
                    push_pos = j;
                    break;
                } else {
                    push_pos = j + 1;
                }
            }
            result.splice(push_pos, 0, arr[i])
        }
    }
    console.log(result, '<----- sort data set 1 by ascending order');
    return result;
}

//1.b, 1.c array object sort function
// sort data set 2 by name in ascending order
// sort data set 2 by age in ascending order
const sortArrObjFunc = (arr, sortBy) => {
    let result = [];
    let arr_length = arr.length;
    for (let i = 0; i < arr_length; i++) {

        if (!result.length) {
            result.push(arr[i]);
        } else {
            push_pos = result.length;
            for (let j = 0; j < result.length && j < arr.length; j++) {
                if (arr[i][sortBy] <= result[j][sortBy]) {
                    push_pos = j;
                    break;
                } else {
                    push_pos = j + 1;
                }
            }
            result.splice(push_pos, 0, arr[i])
        }
    }
    console.log(result, sortBy, '<----- sort data set 2 by age, Name in ascending order')
    return result;
}

// 2. Write a function to filter list of objects
const filterArrObj = (arr, filter_value) => {
    let filteredArray = [];
    arr.forEach(element => {
        if (element.age > filter_value) {
            filteredArray.push(element);
        }
    });
    console.log(filteredArray, '<----- filtered Age less than ' + filter_value)
    return filteredArray;
}

//3. Transform an array
// Add a new field called “date of birth” to each object in dataset 2 and calculate approximate date of birth from their age.
const TransFormArray = (arr) => {
    arr.forEach(element => {
        const date = new Date();
        let findRandomMonth = (curr_month) => {
            let ran_month = parseInt(Math.random() * (12 - 1) + 1);
            if (ran_month > curr_month) {
                ran_month = Math.abs(curr_month - ran_month)
            }
        }
        let random_month = findRandomMonth(date.getMonth());
        date.setFullYear(date.getFullYear() - element.age);
        element['DOB'] = `${date.getDate()}/${random_month}/${date.getFullYear()}`;
    });
    console.log(arr, '<----- Transform an array. Added DOB')
    return arr;
}

// 4. Write a function to group list of objects
// 6. Write a function to calculate total records under each occupation for dataset 2
const GroupByOccupation = (arr, found_count) => {
    let result_obj = {};
    arr.forEach(element => {
        let object_keys = Object.keys(result_obj);
        if (object_keys.includes(element.occupation)) {
            result_obj[element.occupation].push({
                "Name": element.Name,
                "age": element.age
            })
        } else {
            result_obj[element.occupation] = [{
                "Name": element.Name,
                "age": element.age
            }];
        }
    })
    if (found_count == 'found_count') {
        let keys_for_count = Object.keys(result_obj);
        let keys_with_count = {};
        keys_for_count.forEach(ele => {
            keys_with_count[ele] = result_obj[ele].length;
        })
        console.log(keys_with_count, '<----- total records under each occupation for dataset 2');
        return keys_with_count;
    } else {
        console.log(result_obj, '<----- Grouped Result By Occupation');
        return result_obj;
    }
}

// 5. Write a function to calculate min, max & average
const calculateMinMaxAvg = (arr) => {
    let count = 0;
    let min = 0;
    let max = 0;
    let total_for_avg = 0;
    if (arr && arr.length && typeof (arr[0]) != 'object') {
        arr.forEach(element => {
            count = count + 1;
            total_for_avg = total_for_avg + element;
            if (count == 1) {
                min = element;
                max = element;
            } else {
                if (min >= element) {
                    min = element;
                }
                if (max <= element) {
                    max = element;
                }
            }
        })
        total_for_avg = total_for_avg / count;
        console.log({ "min": min, "max": max, "avg": total_for_avg }, '<----- Write a function to calculate min, max & average DataSet 1');
        return { "min": min, "max": max, "avg": total_for_avg };
    } else {
        arr.forEach(element => {
            count = count + 1;
            total_for_avg = total_for_avg + element.age;
            if (count == 1) {
                min = element.age;
                max = element.age;
            } else {
                if (min >= element.age) {
                    min = element.age;
                }
                if (max <= element.age) {
                    max = element.age;
                }
            }
        })
        total_for_avg = total_for_avg / count;
        console.log({ "min": min, "max": max, "avg": total_for_avg }, '<----- Write a function to calculate min, max & average By age DataSet 2');
        return { "min": min, "max": max, "avg": total_for_avg };
    }
}

//Function Calls
sortFunc(arr);
sortArrObjFunc(data_set2, 'age');
sortArrObjFunc(data_set2, 'Name');
filterArrObj(data_set2, 38);
TransFormArray(data_set2)
GroupByOccupation(data_set2)
GroupByOccupation(data_set2, 'found_count')
calculateMinMaxAvg(arr);
calculateMinMaxAvg(data_set2);
