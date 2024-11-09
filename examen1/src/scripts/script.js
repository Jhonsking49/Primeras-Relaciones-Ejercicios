export const getCourses = async (url) => {
    try{
        const response = await fetch(`${url}courses`)
        if(!response.ok){
            throw new Error("HTTP Error")
        }

        const data = await response.json();
        console.log("Los datos son: ", data)
        return data;
       
    } catch (error) {
        console.log("Error" + error.message);
    }
}

export const getCoursesLevel = async (url, level) => {
    try{
        const response = await fetch(`${url}courses`)
        if(!response.ok){
            throw new Error("HTTP Error")
        }

        const data = await response.json();

        const result = data.filter(element => {
           return element.level === level;
    })
        if(result.length>0){
            return result;
        }else{
            throw new Error(" no se encontro el level");
        }
       
    } catch (error) {
        console.log("Error" + error.message);
    }
}

export const getLevel = async (url) => {
    try{
        const response = await fetch(`${url}courses`)
        if(!response.ok){
            throw new Error("HTTP Error")
        }

        const data = await response.json();

        const level = [];

        data.forEach(course => {
            if(!level.includes(course.level)){
                level.push(course.level);
            }
        });
        return level;
    } catch (error) {
        console.log("Error" + error.message);
    }
}