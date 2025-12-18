import axios from "axios";

// function getToken() {
const token = async () => {
    try {
// Bagi yang mau beli source code auto generate tokennya bisa ke link: https://lynk.id/sansekai/mxd6j2ezmxoe
// karena API generate token ini sewaktu-waktu bisa dimatikan tanpa pemberitahuan sebelumnya.
    const res = await axios.get("https://dramabox-token.vercel.app/token");
    return res.data;
    } catch (error) {
    throw error;
}
}

export { token };
export default { token };
