export const request = async (end , value) => {


    const res = await fetch(`${process.env.REACT_APP_API_PATH}/${end}/${value}`)
    .then(data=>data.json())
    .catch(err=>err);
    
    return res;


    

}
