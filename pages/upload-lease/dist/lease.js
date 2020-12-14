"use strict";
// import { useDropzone } from "react-dropzone";
// import leaseStyles from "../../styles/upload-lease/lease.module.css";
exports.__esModule = true;
// const lease = (props) => {
//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
//   const files = acceptedFiles.map((file) => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));
//   const uploadFiles = async () => {
//     for (let i = 0; i < acceptedFiles.length; i++) {
//       const formData = new FormData();
//       const file = acceptedFiles[i];
//       formData.append("file", file);
//       const { status, statusText } = await fetch("/api/upload-lease", {
//         // content-type header should not be specified!
//         method: "POST",
//         body: formData,
//       });
//       console.log({ status, statusText });
//     }
//   };
//   return (
//     <div className={leaseStyles.container}>
//       <div {...getRootProps({ className: `${leaseStyles.dropzone}` })}>
//         <input {...getInputProps()} />
//         <p className={leaseStyles.text}>
//           Drag 'n' drop some files here, or click to select files
//         </p>
//       </div>
//       <aside>
//         <h2>Files</h2>
//         <ul>{files}</ul>
//       </aside>
//       <button onClick={uploadFiles}>Submit</button>
//     </div>
//   );
// };
var lease = function () {
    return React.createElement("div", null, "lease upload");
};
// export default lease;
exports["default"] = lease;
