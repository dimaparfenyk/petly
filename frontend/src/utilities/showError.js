import { toast } from "react-toastify";

const showError = (msg) => (msg ? toast.error(msg) : null);

export default showError;
