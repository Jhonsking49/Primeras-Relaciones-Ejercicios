
export const insertData = async (data) => {
    try {
        const response = await fetch(dataUrl, {

        })
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();
        console.log("Producto agregado correctamente: ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
