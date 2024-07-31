import axios from "axios";

export const downloadUsers = async () => {
  try {
    const response = await axios.get("/api/users/download-users", {
      responseType: "blob", // Important for handling binary data
    });
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: "text/csv" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading the users:", error);
  }
};
