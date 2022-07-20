import del from "del";


export default ()=> {
    return del(glob.path.clean, {force: true})
}