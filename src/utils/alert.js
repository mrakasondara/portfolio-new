import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const alertSuccess = () => {
  Toast.fire({
    icon: "success",
    title: "Email sent successfully",
  });
};
export const alertError = (message) => {
  Toast.fire({
    icon: "error",
    title: message ? message : "Something error",
  });
};
