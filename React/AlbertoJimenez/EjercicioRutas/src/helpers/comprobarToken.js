export default function comprobarToken() {
    if (localStorage.getItem('token')) {
        return true;
    } else {
        return false;
    }
}