// import nextConnect from "next-connect";
// import middleware from "../../middlewares/middleware";
// import multer from "multer";
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
// const handler = nextConnect();
// handler.use(middleware);
// handler.post(upload.single("file"), async (req, res) => {
//   const signedUrl =
//     "https://wellick-lease-image-s3-stage.s3.amazonaws.com/lease-image-1-1600846125437?AWSAccessKeyId=AKIAWQRXSB72EUDRGGZB&Expires=1600849125&Signature=3EL9Qo2pIKMYHr5vL4g5T9rQ7sM%3D";
//   let { buffer } = req.file;
//   let response;
//   if (buffer) {
//     response = await fetch(signedUrl, {
//       method: "PUT",
//       body: buffer,
//     });
//   } else {
//     res.status(500).json({ statusText: "No image selected" });
//     return;
//   }
//   console.log(response);
//   res.status(response.status).json(response);
// });
// export default handler;
